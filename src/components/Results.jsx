import React, { useEffect, useState } from "react";
import { ShoppingBasket, Group1 } from "../helpers";
import calculateDistance from '../helpers/CalculateDistance'
import axios from "axios";
import _ from "lodash";
const Results = ({searchValue,filterSelected,setSelectedProduct}) => {
  const apiKey = process.env.REACT_APP_API_KEY;
  const apiUrl = process.env.REACT_APP_BASE_URL

  const [coordinates, setCoordinates] = useState({ latitude: 0, longitude: 0 });
  const [myLatitude, setMyLatitude] = useState(0);
  const [myLongitude, setMyLongitude] = useState(0);
  const [datas, setDatas] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const pageSize = 24;

  useEffect(() => {
    const successHandler = (position) => {
      const { latitude, longitude } = position.coords;
      setCoordinates({ latitude, longitude });
      setMyLatitude(latitude);
      setMyLongitude(longitude);
      fetchData(latitude, longitude, 0, pageSize);
    };
    const errorHandler = (err) => {
      fetchData(0, 0, 0, pageSize);
    };
    navigator.geolocation.getCurrentPosition(successHandler, errorHandler);
  }, []);

  const fetchData = (latitude, longitude, skip, limit) => {
    if (loading) {
      return;
    }
    setLoading(true);
    axios
      .post(
        apiUrl,
        {
          skip: skip,
          limit: limit,
          latitude: latitude,
          longitude: longitude,
        },
        {
          headers: {
            "Content-Type": "application/json",
            apiKey: apiKey,
          },
        }
      )
      .then((response) => {
        setDatas((prevDatas) => (page === 1 ? response.data.response : [...prevDatas, ...response.data.response]));
        setLoading(false);
      });
  };

  const handleScroll = () => {
    const scrolledToBottom =
      window.innerHeight + window.scrollY >= document.body.offsetHeight;
  
    if (scrolledToBottom) {
      fetchData(myLatitude, myLongitude, page * pageSize, pageSize);
      setPage((prevPage) => prevPage + 1);
    }
  };

const handleScrollThrottled = _.throttle(handleScroll);

useEffect(() => {
  window.addEventListener("scroll", handleScrollThrottled);
  return () => {
    window.removeEventListener("scroll", handleScrollThrottled);
  };
}, [page, myLatitude, myLongitude]);

  const filteredDatas = datas.filter((data) =>
  data.title.toLowerCase().includes(searchValue.toLowerCase())
);

let sortedDatas = [...filteredDatas];

if (filterSelected === "3Point") {
  sortedDatas = sortedDatas.filter(
    (item) => Number(item.storeInfo.rate) > 3
    );
} else if (filterSelected === "4Point") {
  sortedDatas = sortedDatas.filter(
    (item) => Number(item.storeInfo.rate) > 4
    );
} else if (filterSelected === "5Point") {
  sortedDatas = sortedDatas.filter(
    (item) => Number(item.storeInfo.rate) === 5
    );
} else if (filterSelected === "Open") {
  sortedDatas = sortedDatas.filter(
    (item) => item.storeInfo.status === "open"
  )
}

  return (
    <div className="flex flex-col gap-[15px]">
      {!coordinates && (
        <p>{'Konum bilgileri alınamadı. Konum Filtrelemesi Uygulanamadı.'}</p>
      )}
      <p className="font-semibold text-[14px] leading-[30px] md:text-[20px] lg:[24px] md:text-center">Sonuçlar</p>
      {sortedDatas.length == 0 ? <div className="flex justify-center items-center">
        Aradığınız Kritere Uygun Veri Bulunamadı.
      </div>
      :
      <div className="flex justify-center flex-wrap gap-[15px]">
      {sortedDatas && sortedDatas.map((data, index) => (
        <div key={index}  
        onClick={() => setSelectedProduct(data)}
        className="search-box-shadow cursor-pointer relative rounded-[9pt]" style={{ maxWidth: data.images && data.images.length > 0 ? data.images[0].imageSize + 'px' : '400px' }}>
          {data.images && data.images.length > 0 ? (
            
            <img
            className="rounded-[9pt]"
              src={data.images[0].base64}
              alt={data.title}
              width={data.images[0].imageSize}
              height={data.images[0].imageSize}
            />
          ) : (
            <img
            className="rounded-[9pt] h-[250px]"
              src={
                "https://i0.wp.com/css-tricks.com/wp-content/uploads/2017/08/card-skeleton@2x.png?w=300&ssl=1"
              }
              alt={data.title}
              width={400}
            />
          )}
          <img className="rounded-[9pt]" src={data.images} alt="" />
          {data.storeInfo && (
            <div className="absolute flex gap-1 justify-center items-center top-2 left-2 w-[56px] h-[32px] rounded-[6px] bg-[#B70014]">
              <img className="mb-0.5" src={Group1} alt="" />
              <p className="tracking-[-0.29px] leading-[22px] text-[12px] font-semibold text-white">
                {Number(data.storeInfo.rate).toFixed(1) || "-"}
              </p>
            </div>
          )}
          {
            <h1 className="text-[18px] px-[10px] pt-[10px] pb-[5px] leading-[21px] font-semibold w-[220px] tracking-[-1px]">
              {data.title && data.title.length > 0
                ? data.title
                : "Başlık Bulunmamakta"}
            </h1>
          }
          <div className="flex items-center justify-between  pr-[10px]">
            <p className="opacity-50 pl-[10px] capitalize text-[#1A1824] text-[12px] font-semibold leading-[21px]">
              {data.type && data.type.length > 0 ? data.type : "Store"}
            </p>

            <div className="flex gap-1">
              <img className="w-[12px] mb-0.5" src={ShoppingBasket} alt="" />
              <p className="text-[#1A1824] font-semibold text-[12px] opacity-50">
                Min. Sipariş Tutarı : ₺{data.storeInfo && data.storeInfo.minOrderPrice && data.storeInfo.minOrderPrice}
              </p>
            </div>
          </div>
          <div className="flex items-center justify-between pr-[10px] pb-[10px]">
            <p className=" pl-[10px] text-[#1A1824] text-[12px] font-semibold leading-[21px]">
              {calculateDistance(myLatitude,myLongitude,data.storeInfo.geoLocation.latitude,data.storeInfo.geoLocation.longitude)} km yakınında
            </p>
            <div className="flex gap-2">
              <p
                className={`${
                  data.storeInfo.status === "open"
                    ? "text-[#34C47C]"
                    : "text-[red]"
                }  text-[12px] font-semibold`}
              >
                {data.storeInfo.status === "open"
                  ? "İşletme Açık"
                  : "İşletme Kapalı"}
              </p>
              <p className="text-[#1A182480] font-bold text-[12px]">
                {data.storeInfo && data.storeInfo.workingHours[0]
                  ? data.storeInfo.workingHours[0].open
                  : "-"}{" "}
                /{" "}
                {data.storeInfo && data.storeInfo.workingHours[0]
                  ? data.storeInfo.workingHours[0].close
                  : "-"}
              </p>
            </div>
          </div>
        </div>
      ))}
      </div>}
      {loading && <p>Loading...</p>}
    </div>
  );
};

export default Results;

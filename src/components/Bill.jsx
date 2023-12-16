import React from "react";
import { IoMdClose } from "../helpers";

const Bill = ({ billBasket, setBillBasket, favorites, setFavorites }) => {
  console.log(favorites);
  const removeFromFavorites = (productToRemove) => {
    const updatedFavorites = favorites.filter(fav => fav !== productToRemove);
    setFavorites(updatedFavorites);
  };
  return (
    <div
      className={`flex flex-col z-10 gap-3 overflow-auto fixed ${
        billBasket ? "translate-y-[0px]" : "translate-y-[-1450px]"
      } bg-[#e3ebed] pt-20 p-5 inset-0 w-[100vw] h-[100%] duration-1000 transition-all`}
    >
      <div
        onClick={() => setBillBasket(false)}
        className="absolute top-5 right-5 cursor-pointer"
      >
        <IoMdClose size={22} color="#595656" />
      </div>
      <h3 className="flex justify-center mb-10 font-bold">Favoriler</h3>
      <div className="flex flex-col flex-wrap sm:flex-row sm:justify-center gap-3">
      {favorites && favorites.length > 0 ? (
        favorites.map((fav, index) => (
          <div key={index} className="relative flex border border-gray-400 p-3">
           <div className="absolute right-2 top-1"
           onClick={() => removeFromFavorites(fav)}
           >
            <IoMdClose/>
            </div>
            <div className="w-[100px] sm:w-[300px] sm:min-w-[300px]">
              {fav.images && fav.images.length > 0 ? (
                <img
                  className="rounded-[9pt]"
                  src={fav.images[0].base64}
                  alt={fav.title}
                />
              ) : (
                <img
                  className="rounded-[9pt] w-[96px]  h-[60px] sm:w-[300px] sm:h-[213px]"
                  src={
                    "https://i0.wp.com/css-tricks.com/wp-content/uploads/2017/08/card-skeleton@2x.png?w=300&ssl=1"
                  }
                  alt={fav.title}
                />
              )}
            </div>
            <div className="flex flex-col gap-2 px-2 sm:gap-10">
            <h5 className="font-semibold text-[12px] text-center min-w-[190px] max-w-[200px] sm:max-w-[100%] overflow-hidden">{fav.title && fav.title.length > 0
                ? fav.title
                : "Başlık Bulunmamaktadır."}
            </h5>
            <div className="hidden sm:flex text-center min-w-[290px] max-w-[290px] ">
            {fav.text && fav.text.length > 0
                ? fav.text
                : "Açıklama Bulunmamaktadır."}
            </div>
            <div className="flex justify-between">
            <p
                className={`${
                  fav.storeInfo.status === "open"
                    ? "text-[#34C47C]"
                    : "text-[red]"
                }  text-[12px] font-semibold`}
              >
                {fav.storeInfo.status === "open"
                  ? "İşletme Açık"
                  : "İşletme Kapalı"}
              </p>
              <div className="flex gap-1">
              <p className="flex items-center text-[#1A1824] font-semibold text-[8px] opacity-50">
                Min. Tutar : ₺{fav.storeInfo && fav.storeInfo.minOrderPrice && fav.storeInfo.minOrderPrice}
              </p>
            </div>
            </div>
            </div>
                <div>

                </div>
          </div>
        ))
      ) : (
        <div>Favorilerde mağaza bulunmamaktadır.</div>
      )}
      </div>
    </div>
  );
};

export default Bill;

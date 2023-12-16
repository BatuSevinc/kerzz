import {IoMdClose,MdFavoriteBorder,MdFavorite} from '../helpers'


const ResultDetail = ({selectedProduct,setSelectedProduct,favorites,setFavorites}) => {

    const toggleFavorite = () => {
        const isFavorite = favorites.some((item) => item.id === selectedProduct.id);
    
        if (isFavorite) {
          const updatedFavorites = favorites.filter((item) => item.id !== selectedProduct.id);
          setFavorites(updatedFavorites);
        } else {
          setFavorites((prev) => [...prev, selectedProduct]);
        }
      };

    return (
    <div className='fixed w-[100vw] bg-[rgba(0,0,0,0.7)] h-[100vh] top-0 left-0'>
        <div className='fixed flex flex-col top-40 left-2 sm:left-4 md:left-6 lg:left-8 xl:left-9 2xl:left-10 bg-[#cdcdcc] w-[95vw] h-[60vh] lg:h-[80vh] lg:top-20 p-3'>
            <div className='flex justify-end'><IoMdClose className='cursor-pointer' onClick={() => setSelectedProduct("")} size={24}/></div>
            <div className='pt-3 text-[12px] pl-2 text-gray-500 xs:flex xs:justify-center'>{selectedProduct.type && selectedProduct.type}</div>
            <div className='pb-3 xs:flex xs:justify-center'>
                        {selectedProduct.images.length > 0 ? (
                            <img
                            className="rounded-[9pt]"
                              src={selectedProduct.images[0].base64}
                              alt={selectedProduct.title}
                              width={selectedProduct.images[0].imageSize}
                              height={selectedProduct.images[0].imageSize}
                            />
                          ) : (
                            <img
                            className="rounded-[9pt] h-[216px]"
                              src={
                                "https://i0.wp.com/css-tricks.com/wp-content/uploads/2017/08/card-skeleton@2x.png?w=300&ssl=1"
                              }
                              alt={selectedProduct.title}
                              width={400}
                            />
                          )}
            </div>
            <div className='text-center xs:flex xs:flex-col xs:items-center'>
                {selectedProduct.title ?
                <div className='font-semibold pl-1'>
                    {selectedProduct.title}
                </div>
                :
                <div>
                    Ürün Başlığı Bulunmamaktadır.
                </div>    
            }
            {
            <div className='pt-2 pl-1 pr-5 min-h-[80px] max-h-[80px] overflow-hidden text-center'>
            {selectedProduct.text && selectedProduct.text}
            </div>
            }
            </div>
            <div className='flex justify-between lg:pt-32'>
            
            <div className="flex gap-1 justify-center items-center text-white w-[46px] min-h-[32px] rounded-[6px] bg-[#B70014]">
            {
                selectedProduct.storeInfo && selectedProduct.storeInfo.rate ? selectedProduct.storeInfo.rate.toFixed(1)
                    : "0"
            }
            </div>
            <div className='cursor-pointer' onClick={toggleFavorite}>
                {
                favorites?.some((item) => item.id === selectedProduct.id) ?
                <MdFavorite size={24}/>
                :
                <MdFavoriteBorder size={24}/>
                }
            </div>
            </div>
            <div className='text-[12px] flex justify-end pt-4 xs:pt-0'>
            {
                (selectedProduct.storeInfo && selectedProduct.storeInfo.workingHours && selectedProduct.storeInfo.workingHours[0].open ) ? selectedProduct.storeInfo.workingHours[0].open : "-"
            }{" "} / {" "}
            {
                (selectedProduct.storeInfo && selectedProduct.storeInfo.workingHours && selectedProduct.storeInfo.workingHours[0].close ) ? selectedProduct.storeInfo.workingHours[0].close : "-"
            }
            </div>
            {
                selectedProduct.storeInfo && selectedProduct.storeInfo.status && 
                <div className='text-[12px] flex justify-end'>
                    {selectedProduct.storeInfo.status === "open" ? <div className='text-green-600'> İşletme Açık </div>: <div className='text-red-600'> İşletme Kapalı</div> }

                </div>
            }
        </div>
    </div>
  )
}

export default ResultDetail
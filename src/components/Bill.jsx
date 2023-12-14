import React from 'react'
import {IoMdClose} from '../helpers'

const Bill = ({billBasket,setBillBasket}) => {
  return (
    <div className={`flex flex-col z-10 gap-3 overflow-auto absolute ${billBasket ? "translate-y-[0px]" : "translate-y-[-1150px]"} bg-[#e3ebed] pt-20 p-5 inset-0 w-[100vw] h-[100%] duration-1000 transition-all`}>
                <div onClick={() => setBillBasket(false)} className='absolute top-5 right-5 cursor-pointer'>
            <IoMdClose size={22} color='#595656'/>
            </div>
                <h3 className='flex justify-center mb-20 font-bold'>Fatura</h3>
                <div className='flex flex-col border border-[#c7c5c5] p-3 px-5 gap-2 items-center'>
                    <p className='flex gap-2'> <b> Ürün: </b> Ziyafe Kayseri Kahvaltı Tabağı</p>
                    <div className='flex justify-between w-[100%] px-4'>
                        <p><b>adet:</b> 1</p>
                        <p> <b>Fiyat:</b> 98 Tl</p>
                    </div>
                </div>
                <div className='flex flex-col border border-[#c7c5c5] p-3 px-5 gap-2 items-center'>
                    <p className='flex gap-2'> <b> Ürün: </b> Ziyafe Kayseri Kahvaltı Tabağı</p>
                    <div className='flex justify-between w-[100%] px-4'>
                        <p><b>adet:</b> 1</p>
                        <p> <b>Fiyat:</b> 98 Tl</p>
                    </div>
                </div>
                <div className='flex flex-col border border-[#c7c5c5] p-3 px-5 gap-2 items-center'>
                    <p className='flex gap-2'> <b> Ürün: </b> Ziyafe Kayseri Kahvaltı Tabağı</p>
                    <div className='flex justify-between w-[100%] px-4'>
                        <p><b>adet:</b> 1</p>
                        <p> <b>Fiyat:</b> 98 Tl</p>
                    </div>
                </div>
                <div className='flex flex-col border border-[#c7c5c5] p-3 px-5 gap-2 items-center'>
                    <p className='flex gap-2'> <b> Ürün: </b> Ziyafe Kayseri Kahvaltı Tabağı</p>
                    <div className='flex justify-between w-[100%] px-4'>
                        <p><b>adet:</b> 1</p>
                        <p> <b>Fiyat:</b> 98 Tl</p>
                    </div>
                </div>
                <div className='flex gap-2 mt-5 p-4'>

                <b> TOPLAM ÖDENECEK TUTAR: </b> 392 TL
                </div>
            </div>
  )
}

export default Bill
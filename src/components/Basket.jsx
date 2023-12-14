import React from 'react'
import {IoMdClose} from '../helpers'
const Basket = ({toggleBasket,setToggleBasket}) => {
  return (
    <div className={`menu-box-shadow z-10 border-t border-[#b4b3b3] flex flex-col gap-3 overflow-auto absolute ${toggleBasket ? "translate-y-[80px]" : "translate-y-[-1150px]"} bg-[#f5f0f0] pt-20 p-5 inset-0 w-[100vw] h-[93%] duration-1000 transition-all`}>
                <div onClick={() => setToggleBasket(false)} className='absolute top-5 right-5 cursor-pointer'>
            <IoMdClose size={22} color='#595656'/>
            </div>
                <h3 className='flex justify-center mb-20 font-bold'>Sepetim</h3>
                <div className='border border-[#c7c5c5] p-3 flex justify-between px-5 gap-2 items-center'>
                    <img className='w-[100px] rounded-lg' src="https://www.ziyafe.com.tr/wp-content/uploads/2022/10/diyet-salata.jpg" alt="" />
                    <div className='flex flex-col gap-3'>
                    <h4 className='text-[12px] font-bold text-[#403f3f] text-center'>Ziyafe Kayseri Kahvaltı Tabağı</h4>
                    <div className='flex justify-between'>
                    <p className='text-[11px] font-semibold text-[#807d7d]'> 1 Adet</p>
                    <p className='text-[11px] text-[#403f3f]'>Fiyat: <b> 98 Tl</b></p>
                    </div>
                    </div>
                </div>
                <div className='border border-[#c7c5c5] p-3 flex justify-between px-5 gap-2 items-center'>
                    <img className='w-[100px] rounded-lg' src="https://www.ziyafe.com.tr/wp-content/uploads/2022/10/diyet-salata.jpg" alt="" />
                    <div className='flex flex-col gap-3'>
                    <h4 className='text-[12px] font-bold text-[#403f3f] text-center'>Ziyafe Kayseri Kahvaltı Tabağı</h4>
                    <div className='flex justify-between'>
                    <p className='text-[11px] font-semibold text-[#807d7d]'> 1 Adet</p>
                    <p className='text-[11px] text-[#403f3f]'>Fiyat: <b> 98 Tl</b></p>
                    </div>
                    </div>
                </div>
                <div className='border border-[#c7c5c5] p-3 flex justify-between px-5 gap-2 items-center'>
                    <img className='w-[100px] rounded-lg' src="https://www.ziyafe.com.tr/wp-content/uploads/2022/10/diyet-salata.jpg" alt="" />
                    <div className='flex flex-col gap-3'>
                    <h4 className='text-[12px] font-bold text-[#403f3f] text-center'>Ziyafe Kayseri Kahvaltı Tabağı</h4>
                    <div className='flex justify-between'>
                    <p className='text-[11px] font-semibold text-[#807d7d]'> 1 Adet</p>
                    <p className='text-[11px] text-[#403f3f]'>Fiyat: <b> 98 Tl</b></p>
                    </div>
                    </div>
                </div>
                <div className='border border-[#c7c5c5] p-3 flex justify-between px-5 gap-2 items-center'>
                    <img className='w-[100px] rounded-lg' src="https://www.ziyafe.com.tr/wp-content/uploads/2022/10/diyet-salata.jpg" alt="" />
                    <div className='flex flex-col gap-3'>
                    <h4 className='text-[12px] font-bold text-[#403f3f] text-center'>Ziyafe Kayseri Kahvaltı Tabağı</h4>
                    <div className='flex justify-between'>
                    <p className='text-[11px] font-semibold text-[#807d7d]'> 1 Adet</p>
                    <p className='text-[11px] text-[#403f3f]'>Fiyat: <b> 98 Tl</b></p>
                    </div>
                    </div>
                </div>
            </div>
  )
}

export default Basket
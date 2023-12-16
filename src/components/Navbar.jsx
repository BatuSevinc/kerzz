import React, { useState } from 'react'
import { MenuBtn,Group2,Group3, Bill, Basket, ToggleMenu } from '../helpers'


const Navbar = ({favorites,setFavorites}) => {

    const [toggleMenu,setToggleMenu] = useState(false)
    const [toggleBasket,setToggleBasket] = useState(false)
    const [billBasket,setBillBasket] = useState(false)
    
    return (
        <div className='container mx-auto my-5 flex justify-between'>
        <img onClick={() => (setToggleMenu(true),setToggleBasket(false))} className='relative md:hidden' src={MenuBtn} alt="" />
        <div className='gap-5 hidden md:flex items-center md:order-2'>
            <p className='hover:font-semibold duration-100 transition-all cursor-pointer'>Hakkımızda</p>
            <p className='hover:font-semibold duration-100 transition-all cursor-pointer'>İletişim</p>
            <p className='hover:font-semibold duration-100 transition-all cursor-pointer'>Şefin Özel Menüsü</p>
            <p className='hover:font-semibold duration-100 transition-all cursor-pointer'>Bonus Kullan</p>
        </div>
        <div className='flex font-semibold hover:underline hover:font-bold lg:text-[21px] duration-100 transition-all cursor-pointer text-[14px] leading-[18px] tracking-[0.88pt] items-center'>Ana Sayfa</div>
        <div className='flex order-3'>
            <img className='cursor-pointer' onClick={() => (setToggleBasket(!toggleBasket),setToggleMenu(false))} src={Group2} alt="" />
            <div className='relative'>
            <img className='cursor-pointer' onClick={() => (setBillBasket(!billBasket),setToggleBasket(false),setToggleMenu(false))} src={Group3} alt="" />
            {
          favorites && favorites.length > 0 &&
          <div className='text-[8px] absolute top-1.5 right-5 px-1 bg-yellow-400 rounded-[100%]'>{favorites.length}</div>
        }
            </div>
        </div>
        <ToggleMenu toggleMenu={toggleMenu} setToggleMenu={setToggleMenu}/>
        <Basket toggleBasket={toggleBasket} setToggleBasket={setToggleBasket}/>
        <Bill favorites={favorites} setFavorites={setFavorites} billBasket={billBasket} setBillBasket={setBillBasket}/>
    </div>
  )
}

export default Navbar
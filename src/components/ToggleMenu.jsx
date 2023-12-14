import React from 'react'
import {IoMdClose} from '../helpers'

const ToggleMenu = ({toggleMenu,setToggleMenu}) => {
  return (
    <div className={`menu-box-shadow z-10 absolute flex pl-20 flex-col items-center justify-center gap-10 bg-[#F5F5F5] w-[100vw] h-[100vh] top-0 duration-1000 ${toggleMenu ? "translate-x-[-80px] md:translate-x-[-8000px]" : "translate-x-[-1150px] md:translate-x-[-11500px]"} transition-all border-r border-[#b4b3b3]`}>
    <div onClick={() => setToggleMenu(false)} className='absolute top-5 right-5 cursor-pointer'>
    <IoMdClose size={22} color='#595656'/>
    </div>
    <p className='hover:font-semibold duration-100 transition-all cursor-pointer'>Hakkımızda</p>
    <p className='hover:font-semibold duration-100 transition-all cursor-pointer'>İletişim</p>
    <p className='hover:font-semibold duration-100 transition-all cursor-pointer'>Şefin Özel Menüsü</p>
    <p className='hover:font-semibold duration-100 transition-all cursor-pointer'>Bonus Kullan</p>            
</div>
  )
}

export default ToggleMenu
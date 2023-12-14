import {SearchIcon,FilterButton, IoMdClose} from '../helpers'


const Search = ({searchValue,setSearchValue,setFilter,filter,setFilterSelected,filterSelected}) => {

  function handleFilterClick(filter) {
    if (filterSelected === filter) {
      setFilterSelected("");
    } else {
      setFilterSelected(filter);
    }
  }

  return (
    <div className='container rounded-3xl mx-auto relative search-box-shadow'>
        <input value={searchValue} onChange={(e) =>setSearchValue(e.target.value)} onClick={() => setFilter(false)} type="text" placeholder='Mekan ara' className='min-h-[51px] rounded-xl w-full pl-[50px] pr-[60px] placeholder:text-[14px] placeholder:opacity-90 text-[#1A1824] text-normal'/>
        <img className='absolute top-4 left-[15px] w-[15pt] leading-[22pt]' src={SearchIcon} alt="" />
        {
          searchValue.length > 0 ?
         <div className='absolute top-3 right-5' onClick={() => setSearchValue("")}> <IoMdClose size={24}/></div> 
         :
         <>
        <img onClick={() => setFilter(!filter)} className={`absolute top-1 right-3 rounded-full duration-500 transition-all ${filter ? "rotate-90" : ""}`} src={FilterButton} alt="" />
        {
          filterSelected &&
          <div className='text-[8px] absolute top-7 right-5 px-1 bg-yellow-400 rounded-[100%]'>1</div>
        }
        </>
        }
        {
          filter && 
          <div className='absolute duration-1000 transition-all bg-white w-[200px] rounded-b-2xl right-1 z-[100] max-h-[200px]'>
            <ul className='flex flex-col gap-2'>
            <li onClick={() => (handleFilterClick("3Point"),setFilter(false))} className={`border-b ${filterSelected === "3Point" && "bg-yellow-400"} border-gray-100 p-2`}>3 Yıldız ve Üzeri</li>
              <li onClick={() => (handleFilterClick("4Point"),setFilter(false))} className={`border-b ${filterSelected === "4Point" && "bg-yellow-400"} border-gray-100 p-2`}>4 Yıldız ve Üzeri</li>
              <li onClick={() => (handleFilterClick("5Point"),setFilter(false))} className={`border-b ${filterSelected === "5Point" && "bg-yellow-400"} border-gray-100 p-2`}>5 Yıldız</li>
              <li onClick={() => (handleFilterClick("Open"),setFilter(false))} className={` ${filterSelected === "Open" && "bg-yellow-400"} p-2`}>Açık İşletme</li>
            </ul>
          </div>
        }
    </div>
  )
}

export default Search


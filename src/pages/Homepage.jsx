import React, { useEffect, useState } from 'react'
import { Search,Results, ResultDetail } from '../helpers'

const Homepage = ({favorites,setFavorites,storedData}) => {


  const [searchValue,setSearchValue] = useState("")
  const [filter,setFilter] = useState(false)
  const [filterSelected,setFilterSelected] = useState("")
  const [selectedProduct,setSelectedProduct] = useState("")



  useEffect(() => {

    if (!storedData) {
      localStorage.setItem('favorites', JSON.stringify(favorites));
    } else {
      try {
        const parsedData = JSON.parse(storedData);
        setFavorites(parsedData);
      } catch (error) {
        console.error('Veri çözümlenirken bir hata oluştu:', error);
      }
    }
  }, []);

  useEffect(() => {
    try {
      const serializedFavorites = JSON.stringify(favorites);
      localStorage.setItem('favorites', serializedFavorites);
    } catch (error) {
      console.error('Veri saklanırken bir hata oluştu:', error);
    }
  }, [favorites]);
  return (
    <div className='container mx-auto flex flex-col gap-8  w-[94%] sm:w-full'>
      <Search filterSelected={filterSelected} setFilterSelected={setFilterSelected} searchValue={searchValue} setSearchValue={setSearchValue} setFilter={setFilter} filter={filter}/>
      <Results favorites={favorites} setFavorites={setFavorites} setSelectedProduct={setSelectedProduct} filterSelected={filterSelected} searchValue={searchValue}/>
      {
        selectedProduct &&
      <ResultDetail favorites={favorites} setFavorites={setFavorites} selectedProduct={selectedProduct} setSelectedProduct={setSelectedProduct}/>
      }
    </div>
  )
}

export default Homepage
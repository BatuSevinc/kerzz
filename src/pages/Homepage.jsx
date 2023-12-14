import React, { useState } from 'react'
import { Search,Results } from '../helpers'

const Homepage = () => {

  const [searchValue,setSearchValue] = useState("")
  const [filter,setFilter] = useState(false)
  const [filterSelected,setFilterSelected] = useState("")
  return (
    <div className='container mx-auto flex flex-col gap-8  w-[94%] sm:w-full'>
      <Search filterSelected={filterSelected} setFilterSelected={setFilterSelected} searchValue={searchValue} setSearchValue={setSearchValue} setFilter={setFilter} filter={filter}/>
      <Results filterSelected={filterSelected} searchValue={searchValue}/>
    </div>
  )
}

export default Homepage
"use client"

import { ReactNode, SetStateAction, createContext, useContext, useState } from "react"

interface IContextType {
  categoryFilter: string[],
  setCategoryFilter: React.Dispatch<SetStateAction<string[]>>,
  sort:string,
  setSort: React.Dispatch<SetStateAction<string[]>>
}

export const INITIAL_FILTER_DATA = {
    categoryFilters: [],
    setCategoriesFilters: () => [],
    sort: '', 
    setSort: (sort:string) => '',
}

const FilterContext = createContext<IContextType>(INITIAL_FILTER_DATA)

export const FilterProvider = ({children}:{children:ReactNode}) => {

      // Define the initial state
  const [categoryFilters, setCategoriesFilters] = useState([]);
  const [sort, setSort] = useState('-createdAt');
  const contextValue =  {
    categoryFilters,
    setCategoriesFilters,
    sort,
    setSort
  }
 
    return (
        <FilterContext.Provider value={contextValue}>
          {children}
        </FilterContext.Provider>
      );

}

export const useFilters = () => useContext(FilterContext)



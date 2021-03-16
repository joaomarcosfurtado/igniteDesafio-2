import { createContext, ReactNode, useState } from "react";


interface MovieProviderProps {
  children: ReactNode;
}

interface MovieContextData {
  selectedGenreId: number;
  updateSelectedGenreId: (id: number) => void;
}


export const MovieContext = createContext( {} as MovieContextData );



export function MovieProvider( {children}: MovieProviderProps ) {
  const [selectedGenreId, setSelectedGenreId] = useState(1);

  function updateSelectedGenreId(id: number) {
    setSelectedGenreId(id)
  }

  return (
    <MovieContext.Provider 
      value={{
        selectedGenreId,
        updateSelectedGenreId
      }}
    >  
      {children} 
    </MovieContext.Provider> 
  )
}
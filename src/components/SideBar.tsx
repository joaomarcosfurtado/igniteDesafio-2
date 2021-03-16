import { useContext, useEffect, useState } from "react";
import { MovieContext } from "../Contexts/MovieContext";
import { api } from "../services/api";
import { Button } from "./Button";

interface GenreResponseProps {
  id: number;
  name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';
  title: string;
}


export function SideBar() {

  const [genres, setGenres] = useState<GenreResponseProps[]>([]);

  const { selectedGenreId, updateSelectedGenreId } = useContext(MovieContext)

  useEffect(() => {
    api.get<GenreResponseProps[]>('genres').then(response => {
      setGenres(response.data);
    });
  }, []);
  
  function handleClickButton(id: number) {
    updateSelectedGenreId(id);
  }
  
  return(
    <nav className="sidebar">
      <span>Watch<p>Me</p></span>

      <div key={selectedGenreId} className="buttons-container">
        {genres.map(genre => (
          <Button
            id={String(genre.id)}
            title={genre.title}
            iconName={genre.name}
            onClick={() => handleClickButton(genre.id)}
            selected={selectedGenreId === genre.id}
          />
        ))}
      </div>

    </nav>
  )
}
import css from './SearchForm.module.css';
import { useState, useEffect } from 'react';
import { useSearchParams } from "react-router-dom";
import { getMovie } from '../helpers/Api-service';
import {MoviesList} from '../MoviesList/MoviesList'

export const SearchForm = () => {

    const [searchParams, setSearchParams] = useSearchParams();
    const movieTitle = searchParams.get('query');
    const [value, setValue] = useState('');
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const loadMovie = async () => {
    
            try {
                const response = await getMovie(movieTitle);
                if (response.length === 0) {
                    return alert('Sorry, no matches found...')
                } else {
                    setMovies([...response]);
                }
            }
            catch (error) {
                console.log(error)
            }   
        }
        loadMovie()
    },[movieTitle])

    const handleSubmit = (evt) => {
        evt.preventDefault();
        if (value.trim() !== '') {
          setSearchParams({query: value})   
        } else {
            return alert("Enter movie title!")
         }
       
    }

    const handleInputChange = (evt) => {
        setValue(evt.target.value);
    }
    
    return (
        <div>
         <form onSubmit={handleSubmit}>
            <input
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Enter movie title..."
            value={value}
            onChange={handleInputChange}    
            />
            <button type="submit">Search</button>
        </form>
        <MoviesList movies={movies}/>   
        </div>
        
    )
}
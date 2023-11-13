import css from './SearchForm.module.css';
import { useState, useEffect } from 'react';
import { useSearchParams } from "react-router-dom";
import { getMovie } from '../helpers/Api-service';
import { MoviesList } from '../MoviesList/MoviesList';
import Notiflix from 'notiflix';
import { Loader } from 'components/Loader/Loader';

export const SearchForm = () => {

    const [searchParams, setSearchParams] = useSearchParams();
    const queryValue = searchParams.get('query');
    const [movies, setMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (!queryValue) return;

        const loadMovie = async () => {
    
            try {
                setIsLoading(true)
                const response = await getMovie(queryValue);
                if (response.length === 0)Notiflix.Notify.failure('Sorry, no matches found...')
               setMovies([...response]);
                    
               
            }
            catch (error) {
            setError(error.message)
            } finally {
                setIsLoading(false)
            }
        }
    
        loadMovie()
        
    },[queryValue])

    const handleSubmit = (evt) => {
        evt.preventDefault();
        const value = evt.currentTarget.elements.searchKey.value;
        if (value !== '') {
            setSearchParams({query: value})
        } else {
            return Notiflix.Notify.failure("Enter movie title!")
        }
   
    }
    return (
        <div>
            <form
                className={css.searchForm}
                onSubmit={handleSubmit}>
        <input
            className={css.searchFormInput}
            name="searchKey"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Enter movie title..."  
            />
            <button className={css.searchBtn} type="submit">Search</button>
            </form>
             {error !== null && <p>{error}</p>}
            {isLoading && <Loader />}
            <MoviesList movies={movies} />   
        </div>
        
    )
}
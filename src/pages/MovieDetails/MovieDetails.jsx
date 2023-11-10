import { useState, useEffect } from 'react'
import css from './MovieDetails.module.css'
import { useParams } from "react-router-dom";
import { getMovieDetails } from 'components/helpers/Api-service';
import {MovieInfo} from 'components/MovieInfo/MovieInfo'


export const MovieDetails = () => {
    const { movieId } = useParams()
    

    const [movie, setMovie] = useState({})
   


    useEffect(() => {
    const getMovieInfo = async () => {
        try {
            if (!movieId) return;
            const response = await getMovieDetails(movieId);
            setMovie(response);
            console.log(response)
        } catch (error) {
            console.error(error);
        }
    };
        getMovieInfo ()
    }, [movieId])
    
    return (
      <>
        <MovieInfo
                poster_path={movie.poster_path}
                title={movie.title}
                release_date={movie.release_date}
                vote_average={movie.vote_average}
                overview={movie.overview}
                genres={movie.genres}
        />
    </>  
    )
    

    
}
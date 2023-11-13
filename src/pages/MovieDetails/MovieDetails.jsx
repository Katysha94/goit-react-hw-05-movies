import { useState, useEffect } from 'react'
// import css from './MovieDetails.module.css'
import { useParams, Link, Route, Routes } from "react-router-dom";
import { getMovieDetails } from 'components/helpers/Api-service';
import { MovieInfo } from 'components/MovieInfo/MovieInfo';
import { CastList } from 'components/CastList/CastList';
import {Reviews} from 'components/Reviews/Reviews'



export const MovieDetails = () => {
    const { movieId } = useParams()
    const [movie, setMovie] = useState({})
    
   


    useEffect(() => {
    const getMovieInfo = async () => {
        try {
            if (!movieId) return;
            const response = await getMovieDetails(movieId);
            setMovie(response);
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
            <h2>Additional information</h2>
            <div>
                <Link to="cast">Cast</Link>
                <Link to="reviews">Reviews</Link>
            </div>
            <Routes>
                <Route path="cast" element={<CastList />}></Route>
                <Route path="reviews" element={<Reviews />}></Route>
            </Routes>
        

    </>  
    )
    

    
}
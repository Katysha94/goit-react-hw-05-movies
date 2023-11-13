import { useState, useEffect, useRef, Suspense, lazy } from 'react'
import css from './MovieDetails.module.css'
import { useParams, Link, Route, Routes, useLocation } from "react-router-dom";
import { getMovieDetails } from 'components/helpers/Api-service';
import { MovieInfo } from 'components/MovieInfo/MovieInfo';
import { Loader } from 'components/Loader/Loader';
import { LiaArrowLeftSolid } from "react-icons/lia";

const CastList = lazy(() => import('components/CastList/CastList'));
const Reviews = lazy(() => import('components/Reviews/Reviews'));


 const MovieDetails = () => {
    const { movieId } = useParams()
    const [movie, setMovie] = useState({})
    const [isLoading, setIsLoading] = useState(false);
    const location = useLocation();
    const backLinkRef = useRef(location.state?.from ?? '/') 
    
   


    useEffect(() => {
    const getMovieInfo = async () => {
        try {
            setIsLoading(true)
            if (!movieId) return;
            const response = await getMovieDetails(movieId);
            setMovie(response);
        } catch (error) {
            console.error(error);
        } finally {
            setIsLoading(false)
        }
    };
        getMovieInfo ()
    }, [movieId])
    
    return (
        <>
            {isLoading && <Loader />}
        <Link to={backLinkRef.current} className={css.backBtn}><LiaArrowLeftSolid />Go Back</Link>
        <MovieInfo
                poster_path={movie.poster_path}
                title={movie.title}
                release_date={movie.release_date}
                vote_average={movie.vote_average}
                overview={movie.overview}
                genres={movie.genres}
            />
            <h2 className={css.addInfo}>Additional information</h2>
            <div>
                <Link className={css.addInfoItem} to="cast">Cast</Link>
                <Link className={css.addInfoItem} to="reviews">Reviews</Link>
            </div>
            <Suspense fallback={<Loader/>}>
              <Routes>
                <Route path="cast" element={<CastList />}></Route>
                <Route path="reviews" element={<Reviews />}></Route>
            </Routes>  
            </Suspense>
            
        

    </>  
    )
 }
export default MovieDetails;
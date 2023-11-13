// import css from './Home.module.css';
import { useEffect, useState } from 'react';
import { getTrendingMovies } from 'components/helpers/Api-service'
import { MoviesList } from 'components/MoviesList/MoviesList';




export const Home = () => {

    const [movies, setMovies] = useState([]);
    

    useEffect(() => {
        const getTopMovies = async () => {
            try {
                const response = await getTrendingMovies()
                  
                setMovies([...response]);
            } catch (error) {
              console.log(error)  
            }
        } 
        getTopMovies()

    },[])

    return (
       <div>
            <h1>Trending today</h1>
            <MoviesList movies={movies} />
    </div> 
    )
    
}
import css from './Home.module.css';
import { useEffect, useState } from 'react';
import { getTrendingMovies } from 'components/helpers/Api-service'
import { MoviesList } from 'components/MoviesList/MoviesList';
import {Loader} from 'components/Loader/Loader'


const Home = () => {

    const [movies, setMovies] = useState([]);
    const [isLoading, setIsLoading] =useState(false)
    
    

    useEffect(() => {
        const getTopMovies = async () => {
            try {
                setIsLoading(true)
                const response = await getTrendingMovies()
                  
                setMovies([...response]);
            } catch (error) {
              console.log(error)  
            } finally {
                setIsLoading(false)
            }
        } 
        getTopMovies()

    },[])

    return (
        <div>
            {isLoading && <Loader />}
            <h1 className={css.mainTitle}>Trending today</h1>
            <MoviesList movies={movies} />
    </div> 
    )
    
}
export default Home;
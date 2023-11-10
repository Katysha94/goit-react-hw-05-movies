// import css from './MoviesList.module.css'

import { Link, useLocation} from 'react-router-dom';

export const MoviesList = ({ movies }) => {
    const location = useLocation();

    const defaultImg =
        'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700'; 

    return (
        <>
        <ul>
        {movies.map(({ id, title, poster_path }) => (
         <li key={id}>
            <Link to={`/movies/${id}`} state={{ from: location }}>
                    <img src={ poster_path ? `https://image.tmdb.org/t/p/w500/${poster_path}` : defaultImg } 
            alt={title}
            width={350} />
            <h2>{title}</h2> 
            </Link>   
        </li>
   )
 )}
        </ul>
        </>
    )
}

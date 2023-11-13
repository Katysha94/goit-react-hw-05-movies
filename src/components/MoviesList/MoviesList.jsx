import css from './MoviesList.module.css'

import { Link, useLocation} from 'react-router-dom';

export const MoviesList = ({ movies }) => {
    const location = useLocation();

    const defaultImg =
        'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700'; 

    return (
        <div>
        <ul className={css.movieslist}>
        {movies.map(({ id, title, poster_path }) => (
            <li className={css.moviesItem}
                key={id}>
            <Link to={`/movies/${id}`} state={{ from: location }} key={movies.id} className={css.movieLink}>
                    <img className={css.movieImg} src={ poster_path ? `https://image.tmdb.org/t/p/w500/${poster_path}` : defaultImg } 
            alt={title}
            width={350} />
            <h2 className={css.movieTitle}>{title}</h2> 
            </Link>   
        </li>
   )
 )}
        </ul>
        </div>
    )
}

import css from './MovieInfo.module.css'

export const MovieInfo = ({ poster_path, title, overview, genres, vote_average, release_date }) => {
    
    const defaultImg =
        'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700'; 
    
    const releaseDate = new Date(release_date);
    const userScore = Math.round(vote_average * 10)
    
    return (
        <div className={css.movieInfoContainer}>
            <img
            className={css.movieImg}
            src={ poster_path ? `https://image.tmdb.org/t/p/w500/${poster_path}` : defaultImg } alt={title}
                width={350} />
            <div className={css.movieInfo}>
                <h2>{title} ({releaseDate.getFullYear()})</h2>
            <p>User score:{userScore}%</p>
            <h2>Overview</h2>
            <p>{overview}</p>
            <h2>Genres</h2>
            <ul className={css.genresList}>
            {genres && genres.map((genre) => (
          <li className={css.genresTitle} key={genre.id}>{genre.name}</li>
        ))}
      </ul>
        </div>
        </div>
    )
}


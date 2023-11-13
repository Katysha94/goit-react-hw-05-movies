import css from './CastList.module.css'
import { useParams } from "react-router-dom";
import { useState, useEffect } from 'react';
import { movieCast } from 'components/helpers/Api-service';

 const CastList = () => {
    const defaultImg = 'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=200x400'; 

    const [cast, setCast] = useState([]);
    const { movieId } = useParams()
    
    useEffect(() => {
        const getCast = async () => {
            try {
                const response = await movieCast(movieId)
                setCast(response)
            }
            catch (error) {
            console.error(error);
        }
        }
        getCast()
    },[movieId])

     return (
         cast.length !== 0 ? 
             (<ul className={css.castList}>
            {cast.map(({ id, name, profile_path, character }) => (
                <li className={css.castListItem}
                    key={id}>
                    <img src={profile_path ? `https://image.tmdb.org/t/p/w200/${profile_path}` : defaultImg} alt={name} />  
                    <h2>{name}</h2>
                    <p>{character}</p>
                </li>
            ))}
        </ul>) : <p className={css.infoMsg}>We have no information about the cast of this film.</p>
        
    );
 }

export default CastList;
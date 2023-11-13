import css from './Reviews.module.css'
import { useParams } from "react-router-dom";
import { useState, useEffect } from 'react';
import { movieReviews } from 'components/helpers/Api-service';

const Reviews = () => {

    const [reviews, setReviews] = useState([])
    const { movieId } = useParams()
    
    useEffect(() => {
        const getReviews = async () => {
            try {
                const response = await movieReviews(movieId)
                setReviews(response)
    
            }catch (error) {
            console.error(error);
            }
           
        }
        
        getReviews()
    }, [movieId])

    return (
        reviews.length !== 0 ?
            (<ul className={css.reviewsList}>
            {reviews.map(({ id, author, content, created_at, }) => (
                <li className={css.reviewsListItem}
                    key={id}>
                    <h2>{author}</h2>
                    <h3>{new Date(created_at).toLocaleString()}</h3>
                    <p>{content}</p>
                </li>
            ))}
      </ul>  ) : <p className={css.infoMsg}>We have no reviews for this film.</p>
        
    )
}

export default Reviews;
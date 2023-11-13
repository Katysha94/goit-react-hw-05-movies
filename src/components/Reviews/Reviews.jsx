import { useParams } from "react-router-dom";
import { useState, useEffect } from 'react';
import { movieReviews } from 'components/helpers/Api-service';

export const Reviews = () => {

    const [reviews, setReviews] = useState([])
    const { movieId } = useParams()
    
    useEffect(() => {
        const getReviews = async () => {
            try {
                const response = await movieReviews(movieId)
                setReviews(response)
                console.log(response)
            }catch (error) {
            console.error(error);
            }
           
        }
        
        getReviews()
    }, [movieId])

    return (
        <ul>
            {reviews.map(({ id, author, content, created_at, }) => (
                <li key={id}>
                    <h2>{author}</h2>
                    <h3>{new Date(created_at).toLocaleString()}</h3>
                    <p>{content}</p>
                </li>
            ))}
      </ul>  
    )
}
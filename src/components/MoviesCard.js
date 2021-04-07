import React from 'react';
import StarRating from 'react-bootstrap-star-rating';
import StarRatingComponent from 'react-star-rating-component';
import './MovieCard.css';
import { Button,Card ,Container,Row,Col} from 'react-bootstrap';


const MoviesCard = ({ movie}) => {
   console.log(movie) 
    return (
        <div >
            <Container>
            <Card className="card">
           <Card.Img variant="top" src={movie.postUrl} />
            <Card.Body>
            <Card.Title>{movie.title}</Card.Title>
            <Card.Text>
            {movie.description}
            </Card.Text>
            <StarRatingComponent 
            name="rate1" 
            starCount={6}
            value={movie.rate}
          
        />
  </Card.Body>
</Card>
</Container>

</div>
    )
}

export default MoviesCard

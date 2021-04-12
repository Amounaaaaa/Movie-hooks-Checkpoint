import React from 'react';
import MoviesCard from './MoviesCard';
import {Button,FormControl,Container,Row,Col,Navbar} from  'react-bootstrap';
import Form from  'react-bootstrap/Form';


const MoviesListe = ({movie}) => {

/*SetInputggg=(e)=>{
    SetInput({input:e.target.value});
}*/

    return (
           
           <Container style={{marginTop:'100px'}}>
           <Row>
           {movie.map(el=> 
           <Col xl={4}>
            <MoviesCard movie={el} /> 
            </Col>
            )
            }
           </Row >
           </Container>
    )
}

export default MoviesListe

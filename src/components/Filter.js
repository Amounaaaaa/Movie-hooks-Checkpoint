import React, {useState} from 'react';
import {Button,FormControl,Nav,Row,Col,Navbar} from  'react-bootstrap';
import Form from  'react-bootstrap/Form';
import StarRatingComponent from 'react-star-rating-component';



const Filter = (props) => {
 
   const  onStarClick=(nextValue, prevValue, name)=> {
        props.handleRateFilter(nextValue);
      }
   
    return (
        <div>
            <Navbar bg="primary" variant="dark">
            <Navbar.Brand href="#home">Search</Navbar.Brand>
            <Form inline>
            <FormControl type="text" placeholder="Movie Title"  onChange={(e)=>props.handleFilter(e.target.value)}className="mr-sm-2" />
            </Form>
            <StarRatingComponent 
             name="rate1" 
             starCount={6}
             onStarClick={onStarClick}
        />
            </Navbar>    
        </div>
    )
}

export default Filter

import React, { useState,useEffect } from 'react'
import {Button}from 'react-bootstrap'

const Description = (props) => {
    console.log("props====>",props)
   const [movie, setMovie] = useState(null)
   useEffect(()=>{setMovie(props.movie.filter(el=>el.id===props.match.params.id)[0])})
   const GoBack=()=>{
       props.history.goBack();
   }
    return (
        <div>
         { movie  && <p style={{textAlign:'center'}}> {movie.description}</p> }
         <Button style={{marginLeft:'390px'}}onClick={GoBack}>Go Back</Button>
        </div>
    )
}

export default Description

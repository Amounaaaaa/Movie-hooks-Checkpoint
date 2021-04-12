import './App.css';
import MoviesListe from './components/MoviesListe';
import {useState} from 'react';
import Filter from './components/Filter';
import Add from './components/Add';
import { v4 as uuidv4 } from 'uuid';
import { BrowserRouter, Route, Link } from "react-router-dom";
import Description from './components/Description';




function App() {

const [input, setInput] = useState("");
const [rate, setRate] = useState(1)
const [movies, setMovies] = useState([{
  id:uuidv4(),
  title:"THERE IS NO EVIL",
  description:"(1)Un film est une œuvre du cinéma ou de l'audiovisuel, qu'elle soit produite ou reproduite sur support argentique ou sur tout autre support existant. ",
  postUrl:"8.jpg",
  rate:"5"
},
{
  id:uuidv4(),
  title:"THERE IS NO EVIL",
  description:"(2)Un film est une œuvre du cinéma ou de l'audiovisuel, qu'elle soit produite ou reproduite sur support argentique ou sur tout autre support existant. ",
  postUrl:"2.jpg",
  rate:"2"
},
{
  id:uuidv4(),
  title:"A TON IMAGE",
  description:"Un film est une œuvre du cinéma ou de l'audiovisuel, qu'elle soit produite ou reproduite sur support argentique ou sur tout autre support existant. ",
  postUrl:"3.jpg",
  rate:"4"
},{
  id:uuidv4(),
  title:"BB",
  description:"Un film est une œuvre du cinéma ou de l'audiovisuel, qu'elle soit produite ou reproduite sur support argentique ou sur tout autre support existant. ",
  postUrl:"8.jpg",
  rate:"3"
},
{
  id:uuidv4(),
  title:"DOCTEUR",
  description:"Un film est une œuvre du cinéma ou de l'audiovisuel, qu'elle soit produite ou reproduite sur support argentique ou sur tout autre support existant. ",
  postUrl:"4.jpg",
  rate:"4"
},
{
  id:uuidv4(),
  title:"DOCTEUR",
  description:"Un film est une œuvre du cinéma ou de l'audiovisuel, qu'elle soit produite ou reproduite sur support argentique ou sur tout autre support existant. ",
  postUrl:"6.jpg",
  rate:"5"
}])
const handleChange = (movie) => {
  setMovies([...movies, movie]);

};
const handleFilter = (input) => {
  setInput(input);

}
const handleRateFilter = (rate) => {
  setRate(rate);

}
  return (
    <div className="cardBody">
      <BrowserRouter>
      <Filter handleFilter={handleFilter}  handleRateFilter={handleRateFilter} />     
       <Add    handleAdd={handleChange}/>
       <MoviesListe movie={movies.filter(el=>el.title.toUpperCase().trim().includes(input.toUpperCase().trim())&& parseInt(el.rate)>=rate)}  />
       <Route path="/description/:id" render={(props)=><Description{...props} movie={movies} />}></Route>
      </BrowserRouter>
      
    </div>
  );
}

export default App;

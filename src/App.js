import './App.css';
import MoviesListe from './components/MoviesListe';
import {useState} from 'react';
import Filter from './components/Filter';
import Add from './components/Add';
import { v4 as uuidv4 } from 'uuid';



function App() {

const [input, setInput] = useState("");
const [rate, setRate] = useState(1)
const [movies, setMovies] = useState([{
  id:uuidv4(),
  title:"THERE IS NO EVIL",
  description:"des1",
  postUrl:"1.jpg",
  rate:"5"
},
{
  id:uuidv4(),
  title:"THERE IS NO EVIL",
  description:"des2",
  postUrl:"2.jpg",
  rate:"2"
},
{
  id:uuidv4(),
  title:"A TON IMAGE",
  description:"des3",
  postUrl:"3.jpg",
  rate:"4"
},{
  id:uuidv4(),
  title:"BB",
  description:"des4",
  postUrl:"5.jpg",
  rate:"3"
},
{
  id:uuidv4(),
  title:"DOCTEUR",
  description:"des4",
  postUrl:"4.jpg",
  rate:"4"
},
{
  id:uuidv4(),
  title:"DOCTEUR",
  description:"des4",
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
       <Filter handleFilter={handleFilter}  handleRateFilter={handleRateFilter} />     
       <Add    handleAdd={handleChange}/>
       <MoviesListe movie={movies.filter(el=>el.title.toUpperCase().trim().includes(input.toUpperCase().trim())&& parseInt(el.rate)>=rate)}  />

    </div>
  );
}

export default App;

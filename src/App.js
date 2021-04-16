import React, { useState, useEffect } from 'react';
import './App.css';
import axios from "axios";
import Characters from "./components/Characters.js"

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  // State Declarations
  const [characters, setCharacters] = useState([]);
  // const [filmId, setFilmId] = useState();
  // const [characters, setCharacters] = useState();

  // Calling API
  useEffect(() => {
    axios
    .get('https://swapi.dev/api/people/')
    .then(res => {
      setCharacters(res.data);
    })
    .catch(err => {
      console.log(err);
    })
  }, []);

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
      <Characters characters = {characters}/>
    </div>
  );
}

export default App;

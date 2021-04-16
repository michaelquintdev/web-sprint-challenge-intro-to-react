import React, { useState, useEffect } from 'react';
import './App.css';
import axios from "axios";

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  // State Declarations
  const [films, setFilms] = useState('');
  const [characters, setCharacters] = useState('');

  // Calling API
  useEffect(() => {
    axios
    .get('https://swapi.dev/api/films/')
    .then(res => {
      console.log(res.data.results);
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
    </div>
  );
}

export default App;

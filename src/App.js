import React from 'react';
import './App.css';
import Pokedex from './pages/Pokedex';
import Header from './components/Header';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import PokemonDetails from './pages/PokemonDetails';

function App() {
  // const client = new ApolloClient({
  //   uri: 'https://graphqlpokemon.favware.tech/v8',
  // });

  return (
    <Router>
      <>
        <Header/>
        <Routes>
          <Route path="/" element={<Pokedex/>} />
          <Route path="/pokemon/:key" element={<PokemonDetails/>} />
        </Routes>
      </>
    </Router>
  );
}

export default App;
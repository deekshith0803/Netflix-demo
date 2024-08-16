import Navbar from "./Components/Navbar/Navbar";
import React from "react";
import {originals, action, treanding, ComedyMovies, HorrorMovies, ActionMovies, RomanceMovies, Documentaries } from './urls'
import './App.css'
import Banner from "./Components/Banner/Banner";
import Poster from './Components/Poster/Poster'
import Footer from './Components/footer/Footer'

function App() {
  return (
    <div className="app">
        <Navbar/>
        <Banner/>
        <Poster url={treanding} tittle="Treanding" />
        <Poster url={action} tittle="Action" small/>
        <Poster url={originals} tittle="Animated" small/>
        <Poster url={ComedyMovies} tittle="Comedy Movies" small/>
        <Poster url={HorrorMovies} tittle="Horror Movies" small/>
        <Poster url={ActionMovies} tittle="Action Movie" small/>
        <Poster url={RomanceMovies} tittle="Romantic Movies" small/>
        <Poster url={Documentaries} tittle="Documentaries" small/>
        <Footer/>
    </div>
  );
}

export default App;

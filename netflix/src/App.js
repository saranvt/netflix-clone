import './App.css';
import React from 'react'
import Banner from'./Banner'
import Row from './Row';
import Nav from './Nav'
import requests from './requests';
function App() {
  return (
    <div className="app">
      <Nav/>
        
      <Banner/>
      
        <Row title="NETFLIX ORIGINALS"fetchUrl={requests.fetchNetflixOriginals}isLargeRow={true}></Row>
        <Row title="Trending now"fetchUrl={requests.fetchTrending}isLargeRow></Row>
        <Row title="Action movies"fetchUrl={requests.fetchActionMovies}isLargeRow></Row>
        <Row title="Horror movies"fetchUrl={requests.fetchHorrorMovies}isLargeRow></Row>
        <Row title="Comedy movies"fetchUrl={requests.fetchComedyMovies}isLargeRow></Row>
        <Row title="Top Rated"fetchUrl={requests.fetchTopRated}isLargeRow></Row>
        <Row title="Romance Movies"fetchUrl={requests.fetchRomanceMovies}isLargeRow></Row>
        <Row title="Documentries"fetchUrl={requests.fetchDocumentaries}isLargeRow></Row>
        
        
      

     
    </div>
  );
}


export default App;

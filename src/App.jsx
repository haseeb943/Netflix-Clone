import React from 'react';
import Row from './Row';
import requests from './requests';
import Banner from './Banner';
import Nav from './Nav';

const  App =()=>{
    return(
        <>
            <div className="app">
                <Nav/>
                <Banner/>
                <Row isLargeRow title="Netflix Original" fetchUrl={requests.fetchNetflixOriginals}/>
                <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
                <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
                <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
                <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
                <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
                <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
                <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
            </div>
        </>
    );
};

export default App;
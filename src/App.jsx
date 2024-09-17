
import './App.css';
import Banner from './Compononents/Banner.jsx';
import Row from "./Compononents/Row.jsx"
import requests from './requests.jsx';
import Nav from './Compononents/Nav.jsx';
function App() {


  return (
    <div className='App'>
      <Nav />
      <Banner />
      <Row
        title="Netflix Originals"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow={true}
      />
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRatedMovies} />
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Romance Movies" fetchUrl={requests.fetchRomansMovies} />
      <Row
        title="Documentaries Movies"
        fetchUrl={requests.fetchDocumentaries}
      />
    </div>
  );
}

export default App
//api.themoviedb.org/3/discover/movie?api_key= 6fc502b5f2cbfb8c5922dac1185d8c57
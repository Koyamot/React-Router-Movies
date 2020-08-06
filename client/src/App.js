import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Route, Switch } from 'react-router-dom';
// import SavedList from './Movies/SavedList';
import MovieList from './Movies/MovieList';
// import MovieCard from './Movies/MovieCard';
import Movie from './Movies/Movie';

const App = () => {
  // const [saved, setSaved] = useState([]); // Stretch: the ids of "saved" movies
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    const getMovies = () => {
      axios
        .get('http://localhost:5000/api/movies')
        .then(response => {
          setMovieList(response.data);
        })
        .catch(error => {
          console.error('Server Error', error);
        });
    }
    getMovies();
  }, []);
  console.log(movieList)
  // const addToSavedList = id => {
    // This is stretch. Prevent the same movie from being "saved" more than once
  // };

  return (
      <div>
        {/* <div>
          <Link to="/">Home</Link>
          <Link to ="/movies">Movies</Link>
        </div> */}
        {/* <SavedList list={} /> */}
        <Switch>
          <Route path="/movies/:id">
            <Movie movie={movieList}/>
          </Route>
          <Route exact path="/">
            <MovieList movies={movieList} />
          </Route>
          <Route path="/movies/:id" render={ (props) => {
          return(<Movie {...props}/>)
        }} 
        />
        </Switch>
      </div>
  );
};

export default App;

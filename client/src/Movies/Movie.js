  
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from 'axios';
import MovieCard from './MovieCard';

const Movie = (props) => {
  const [movie, setMovie] = useState();
  const id  = useParams();

  useEffect(() => {
    
    // change ^^^ that line and grab the id from the URL
    // You will NEED to add a dependency array to this effect hook

       axios
        .get(`http://localhost:5000/api/movies/${id}`)
        .then(response => {
          setMovie('success', response.data);
        })
        .catch(error => {
          console.error('this is an error', error);
        });

  },[id]);

  console.log(id)
  
  // Uncomment this only when you have moved on to the stretch goals
  // const saveMovie = evt => {
  // }

  if (!movie) {
    return <div>Loading movie information...</div>;
  }

  const { title, director, metascore, stars } = movie;
  console.log (movie);
  return (
    <div className="save-wrapper">
    <MovieCard movie={movie} />
    <div className="save-button" >Save</div>
  </div>
  );
}

export default Movie;

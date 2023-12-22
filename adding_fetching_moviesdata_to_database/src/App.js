import React, { useState, useEffect, useCallback } from "react";

import MoviesList from "./components/MoviesList";
import AddMovie from "./components/AddMovie";
import "./App.css";

function App() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null) ;



  const fetchMoviesHandler =  useCallback(async ()=>{
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch("https://react-tutorial-section15-default-rtdb.firebaseio.com/movie.json");
      // response.status can be check manually;
      if (!response.ok) {throw new Error ('Something went wrong');}
      const data = await response.json();
      console.log('getting test')
      console.log(data);

      const loadedMovies = [];
      for (const key in data) {
        loadedMovies.push({
          id:key,
          title: data[key].title,
          openingText: data[key].openingText,
          releaseDate: data[key].releaseDate
        })
      }

      setMovies(loadedMovies);
      
    
    } catch (error) {setError(error.message);}
    setIsLoading(false); 
  }, [])


  useEffect(() => {
    fetchMoviesHandler();
  }, [])

  async function addMovieHandler(movie) {
    const response = await fetch("https://react-tutorial-section15-default-rtdb.firebaseio.com/movie.json",{
       method : "POST",
       body: JSON.stringify(movie),
       headers: {
        'Content-Type': 'application/json'
       }
    });
    const data = await response.json();
    console.log("posting test")
    console.log(data);
    }



  return (
    <React.Fragment>
      <section>
        <AddMovie onAddMovie={addMovieHandler}></AddMovie>
      </section>
      <section>
        <button onClick={fetchMoviesHandler}>Fetch Movies</button>
      </section>
      <section>
        {!isLoading && movies.length > 0 && <MoviesList movies={movies} />}
        {!isLoading && movies.length === 0 && !error && <p>FOUND NO MOVIES!</p>}
        {!isLoading && error && <p>{error}</p>}
        {isLoading && <p>IS LOADING ...</p>}
      </section>
    </React.Fragment>
  );
}

export default App;

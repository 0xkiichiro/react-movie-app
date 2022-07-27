import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import MovieCard from "./MovieCard";

const API_KEY = process.env.REACT_APP_TMDB_KEY;
const FEATURED_API = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}`;
const SEARCH_API = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=`;

const Main = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [search, setSearch] = useState("");
  const { currentUser } = useContext(AuthContext);

  const getMovies = async (API) => {
    try {
      setIsLoading(true);
      const res = await axios.get(API);
      const data = res.data.results;
      setMovies(data);
    } catch (err) {
      console.log(err);
    }
    setIsLoading(false);
  };

  const handleSubmit = (e) => {
    if (search && currentUser) {
      e.preventDefault();
      getMovies(SEARCH_API + search);
    } else if (!currentUser) {
      alert("Please log in to search movies..");
    } else {
      alert("Please enter a movie name");
    }
  };

  useEffect(() => {
    getMovies(FEATURED_API);
  }, []);

  return (
    <>
      <form className="search" onSubmit={handleSubmit}>
        <input
          type="search"
          className="search-input"
          placeholder="Search a movie..."
          onChange={(e) => setSearch(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
      <div className="d-flex justify-content-center flex-wrap">
        {isLoading ? (
          <div className="spinner-border text-primary m-5" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        ) : (
          movies?.map((movie) => <MovieCard key={movie.id} {...movie} />)
        )}
      </div>
    </>
  );
};

export default Main;

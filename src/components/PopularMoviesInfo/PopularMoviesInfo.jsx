import { useState, useEffect } from "react";

import * as apiService from "../../services/apiService";
import PopularMoviesList from "../PopularMoviesList/PopularMoviesList";

const PopularMoviesInfo = () => {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchPopularMovies = async () => {
            try {
                const data = await apiService.fetchPopularMovies();
                setMovies(data.results);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchPopularMovies();
    }, []);

    if (loading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>{error}</p>;
    }

    return (
        <div>
            <h1>Popular Movies</h1>
            <PopularMoviesList movies={movies} />
        </div>
    );
};

export default PopularMoviesInfo;

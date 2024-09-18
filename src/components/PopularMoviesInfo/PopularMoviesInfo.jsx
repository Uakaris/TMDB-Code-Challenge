import { useState, useEffect } from "react";
import * as apiService from "../../services/apiService";
import PopularMoviesList from "../PopularMoviesList/PopularMoviesList";
import "./PopularMoviesInfo.css";

const PopularMoviesInfo = () => {
    const [movies, setMovies] = useState([]);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchPopularMovies = async (page) => {
        setLoading(true);
        try {
            const data = await apiService.fetchPopularMovies(page);
            setMovies((prevMovies) => [...prevMovies, ...data.results]);
        } catch (error) {
            setError(error.message);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchPopularMovies(page);
    }, [page]);

    const loadMoreMovies = () => {
        setPage((prevPage) => prevPage + 1);
    };

    if (loading && page === 1) {
        return <p className="Loading">Loading...</p>;
    }

    if (error) {
        return <p>{error}</p>;
    }

    return (
        <div className="PopularMoviesInfoContainer">
            <h1 className="PopularMoviesInfoHeading">Popular Movies</h1>
            <PopularMoviesList movies={movies} />
            {loading && <p>Loading more movies...</p>}
            {!loading && (
                <button
                    className="LoadMoreButton"
                    onClick={loadMoreMovies}
                    disabled={loading}
                >
                    Load More
                </button>
            )}
        </div>
    );
};



export default PopularMoviesInfo;

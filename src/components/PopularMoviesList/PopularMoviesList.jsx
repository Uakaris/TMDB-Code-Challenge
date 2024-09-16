import PopularMoviesCard from "../PopularMoviesCard/PopularMoviesCard";
import "./PopularMoviesList.css";

const PopularMoviesList = ({ movies }) => {
    const movieElements = movies.map((movie) => (
        <PopularMoviesCard key={movie.id} movie={movie} />
    ));
    return (
        <div className="ListContainer">
            <ul className="PopularMoviesList">{movieElements}</ul>
        </div>
    );
};

export default PopularMoviesList;

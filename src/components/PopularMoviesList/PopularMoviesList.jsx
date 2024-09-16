import PopularMoviesCard from "../PopularMoviesCard/PopularMoviesCard";

const PopularMoviesList = ({ movies }) => {
    const movieElements = movies.map((movie) => (
        <PopularMoviesCard key={movie.id} movie={movie} />
    ));
    return (
        <div>
            <ul>{movieElements}</ul>
        </div>
    );
};

export default PopularMoviesList;

const PopularMoviesCard = ({ movie }) => {
    return (
        <li>
            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
            <h2>{movie.title}</h2>
            <p>{movie.overview}</p>
        </li>
    );
};

export default PopularMoviesCard;
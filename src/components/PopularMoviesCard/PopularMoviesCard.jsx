import "../PopularMoviesCard/PopularMoviesCard.css";

const PopularMoviesCard = ({ movie }) => {
    const uniqueId = `accordion-${movie.id}`;

    return (
        <li className="MovieCard">
            <img
                className="MoviePoster"
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
            />
            <h2 className="MovieTitle">{movie.title}</h2>
            <div className="accordion" id={uniqueId}>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button
                            className="accordion-button"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target={`#collapse-${movie.id}`}
                            aria-expanded="false"
                            aria-controls={`collapse-${movie.id}`}
                        >
                            Overview
                        </button>
                    </h2>
                    <div
                        id={`collapse-${movie.id}`}
                        className="accordion-collapse collapse"
                        data-bs-parent={`#${uniqueId}`}
                    >
                        <div className="accordion-body">{movie.overview}</div>
                    </div>
                </div>
            </div>
        </li>
    );
};

export default PopularMoviesCard;
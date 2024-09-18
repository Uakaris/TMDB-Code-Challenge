import { Link } from "react-router-dom";
import "./Home.css";

const NavBar = () => {
    return (
        <div className="HomeContainer">
            <h1 className="HomeTitle">Movie Database</h1>
            <Link to="/TMDB-Code-Challenge/popularMovies" className="PopularButton">
                Popular Movies
            </Link>
        </div>
    );
};

export default NavBar;

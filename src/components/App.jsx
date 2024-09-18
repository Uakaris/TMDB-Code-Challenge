import { Routes, Route } from "react-router-dom";

import Home from "./Home/Home";
import PopularMoviesInfo from "./PopularMoviesInfo/PopularMoviesInfo";

const App = () => {
    return (
        <div>
            <div>
                <Routes>
                    <Route path="TMDB-Code-Challenge" element={<Home />} />
                    <Route
                        path="/popularMovies"
                        element={<PopularMoviesInfo />}
                    />
                </Routes>
            </div>
        </div>
    );
};

export default App;

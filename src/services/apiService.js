import axios from "axios";

const API_READ_ACCESS_TOKEN = import.meta.env.VITE_API_READ_ACCESS_TOKEN;

const options = {
    method: "GET",
    headers: {
        accept: "application/json",
        Authorization: `Bearer ${API_READ_ACCESS_TOKEN}`,
    },
};

const fetchPopularMovies = async (page) => {
    try {
        const response = await fetch(
            `https://api.themoviedb.org/3/movie/popular?page=${page}`,
            options
        );
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Failed to fetch popular movies", error);
    }
};

export { fetchPopularMovies };

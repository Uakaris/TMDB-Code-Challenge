const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzYjUwZjM2NDBlYzYwODgyZTdjMGMxOTU1MGY2NzViMiIsIm5iZiI6MTcyMzE4OTY4NC41MjM1OTgsInN1YiI6IjY2YjVjOTE4MzgyN2NjM2QxY2Q3YzU0NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.l5hA_pIA6dSHwKQoxjtYC9DYthtJ67zaAVzzg5YI_PY'
    }
  };

const fetchPopularMovies = async () => {
    try {
        const response = await fetch('https://api.themoviedb.org/3/movie/popular', options);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Failed to fetch popular movies', error);
    }
};

fetchPopularMovies().then(data => console.log(data));

export { fetchPopularMovies };
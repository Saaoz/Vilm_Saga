const fetchMoviesData = async () => {
    const response = await fetch(
        'https://api.themoviedb.org/3/movie/popular?api_key=1d7a104b0bd00f55f416c35b225a434e'
    );
    const data = await response.json();

    // Je crée un nouveau tableau avec seulement les données qui m'intéressent
    const moviesData = data.results.map(movie => ({
        title: movie.title,
        img: `https://image.tmdb.org/t/p/original/${movie.poster_path}`,
        year: new Date(movie.release_date).getFullYear(),
    }));

    return moviesData;
};

export default fetchMoviesData;

const fetchMoviesData = async () => {
    const response = await fetch(
        'https://api.themoviedb.org/3/movie/popular?api_key=1d7a104b0bd00f55f416c35b225a434e'
    );
    const data = await response.json();

    // nouveau tableau avec seulement les données qui m'intéressent
    const moviesData = data.results.map(movie => ({
        title: movie.title,
        img: `https://image.tmdb.org/t/p/original/${movie.poster_path}`,
        year: new Date(movie.release_date).getFullYear(),
    }));

    return moviesData;
};

const fetchTvData = async () => {
    const response = await fetch(
        'https://api.themoviedb.org/3/tv/popular?api_key=1d7a104b0bd00f55f416c35b225a434e'
    );
    const data = await response.json();

    // nouveau tableau avec seulement les données qui m'intéressent
    const tvData = data.results.map(tvShow => ({
        title: tvShow.name,
        img: `https://image.tmdb.org/t/p/original/${tvShow.poster_path}`,
        year: new Date(tvShow.first_air_date).getFullYear(),
    }));

    return tvData;
};

export { fetchMoviesData, fetchTvData };

export const fetchSearchData = async query => {
    const url = `https://api.themoviedb.org/3/search/multi?api_key=1d7a104b0bd00f55f416c35b225a434e&language=en-US&query=${query}`;
    const response = await fetch(url);
    const data = await response.json();

    // Crée un tableau d'objets avec les données nécessaires pour chaque résultat de recherche
    const searchData = data.results.map(result => {
        const {
            id,
            title,
            name,
            media_type,
            poster_path,
            backdrop_path,
            release_date,
            first_air_date,
        } = result;
        const img = poster_path
            ? `https://image.tmdb.org/t/p/original/${poster_path}`
            : 'https://via.placeholder.com/300x450?text=No+image+available';
        const backdropImg = backdrop_path
            ? `https://image.tmdb.org/t/p/original/${backdrop_path}`
            : null;
        const year = release_date
            ? new Date(release_date).getFullYear()
            : new Date(first_air_date).getFullYear();

        return {
            id,
            title: title || name,
            media_type,
            img,
            backdropImg,
            year,
        };
    });

    return searchData;
};

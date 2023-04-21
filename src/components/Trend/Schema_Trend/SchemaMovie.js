import React, { useState, useEffect } from 'react';
import { fetchMoviesData, fetchTvData } from '../../../api/Api_call';

const SchemaMovie = () => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const getMoviesData = async () => {
            const data = await fetchMoviesData();
            setMovies(data);
        };
        getMoviesData();
    }, []);

    return (
        <ul className="features">
            {Array.from({ length: 12 }).map((_, index) => {
                const movie = movies[index];
                if (!movie) return null; // Skip this element if it doesn't exist
                return (
                    <li key={index} className="content">
                        <img src={movie.img} alt={movie.title} />
                        <p>{movie.title}</p>
                        <p>{movie.year}</p>
                    </li>
                );
            })}
        </ul>
    );
};

const SchemaTv = () => {
    const [tvShows, setTvShows] = useState([]);

    useEffect(() => {
        const getTvData = async () => {
            const data = await fetchTvData();
            setTvShows(data);
        };
        getTvData();
    }, []);

    return (
        <ul className="features">
            {Array.from({ length: 12 }).map((_, index) => {
                const tvShow = tvShows[index];
                if (!tvShow) return null; // Skip this element if it doesn't exist
                return (
                    <li key={index} className="content">
                        <img src={tvShow.img} alt={tvShow.title} />
                        <p>{tvShow.title}</p>
                        <p>{tvShow.year}</p>
                    </li>
                );
            })}
        </ul>
    );
};

export default SchemaTv;

export { SchemaMovie, SchemaTv };

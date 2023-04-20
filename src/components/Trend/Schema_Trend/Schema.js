import React, { useState, useEffect } from 'react';
import fetchMoviesData from '../../../api/Api_call';

const Schema = () => {
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

export default Schema;

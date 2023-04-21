import react from 'react';
import './Trend_style.css';
import { SchemaMovie } from './Schema_Trend/SchemaMovie';

function Movies() {
    return (
        <section>
            <h1>Trending Movies</h1>
            <SchemaMovie />
        </section>
    );
}

export default Movies;

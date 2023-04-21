import react from 'react';
import './Trend_style.css';
import { SchemaTv } from './Schema_Trend/SchemaMovie';

function Tv() {
    return (
        <section>
            <h1>Trending TVs</h1>
            <SchemaTv />
        </section>
    );
}

export default Tv;

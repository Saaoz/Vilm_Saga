import React, { useState } from 'react';
import { fetchSearchData } from '../../api/Api_call';

const SearchBar = () => {
    const [searchResults, setSearchResults] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');

    const handleSearch = async e => {
        e.preventDefault();
        const data = await fetchSearchData(searchQuery);
        setSearchResults(data);
    };

    return (
        <div>
            <form onSubmit={handleSearch}>
                <input
                    type="text"
                    placeholder="Search"
                    value={searchQuery}
                    onChange={e => setSearchQuery(e.target.value)}
                />
                <button type="submit">Search</button>
            </form>
            <ul>
                {searchResults.map(result => (
                    <li key={result.id}>
                        <img src={result.img} alt={result.title} />
                        <p>{result.title}</p>
                        <p>{result.year}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default SearchBar;

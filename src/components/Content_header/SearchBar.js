import react from 'react';

function SearchBar() {
    return (
        <div className="search">
            <input type="text" placeholder="Recherche..." />
            <button className="btn_search">
                <img
                    className="btn_img"
                    src="../../assets/img/search_loupe.svg"
                />
            </button>
        </div>
    );
}

export default SearchBar;

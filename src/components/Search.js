import React from 'react'

function Search({handleInput, search, popup}) {
    return (
        <section>
            <input type="text"
             placeholder="Search for a movie..."
              className="searchbox"
               onChange={handleInput}
                onKeyPress={search}
                popup={popup}
                />
        </section>
    )
}

export default Search;

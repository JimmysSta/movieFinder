import React from 'react'


function Popup({ selected, closePopup }) {
    return (
        <section className="popup">
            <div className="content">
                <h2>{selected.Title} <span>{selected.Year}</span></h2>
                <br/>
                <div className="plot">
                    <img src={selected.Poster}/>
                    <p>{selected.Plot} <br /> <br /><br /><br />Starring: {selected.Actors}
                    <br/> <br /><br /><br />Box office: {selected.BoxOffice}
                    <br/> <br /><br /><br /><u>Imdb Rating</u> : {selected.imdbRating}
                    </p>
                   
                </div>
                <button className="close" onClick={closePopup}>Close</button>
            </div>
        </section>
    )
}

export default Popup

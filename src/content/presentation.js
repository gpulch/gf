import React from "react";


function Presentation ({tab}) {

    const year = new Date().getFullYear();

    return(
        <div className="presentation">
                {/* Affichage des titres */}
                <h1>Top Free Games for PC and Browser In {year} !</h1>
                <p>{tab.length} free-to-play games found in our games list!</p>
        </div>
    )
}

export default Presentation;
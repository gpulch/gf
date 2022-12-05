import React, { useEffect } from "react";

import pc from '../img/game_view_img/pc.png'
import browser from '../img/game_view_img/browser.png'

import '../style/tuile.css'

function ShowTuile({tab, linkPlatform, linkGenre, categoryResult, setCategoryResult}) {
    

    useEffect(() => {
      const games = tab.slice(0,50).map(element => element);
      if (linkPlatform !== "Platform" && linkPlatform === "All Platform" && linkGenre !== "Genre") {
          const result = games.filter((game) => game.platform === "Web Browser" || game.platform === "PC (Windows)" || game.platform === "PC (Windows), Web Browser").filter((game) => game.genre === linkGenre);;
          setCategoryResult(result);
      }
      else if (linkPlatform !== "Platform" && linkPlatform !== "All Platform" && linkGenre !== "Genre") {
          const result = games.filter((game) => game.platform === linkPlatform || game.platform === "PC (Windows), Web Browser").filter((game) => game.genre === linkGenre);
          setCategoryResult(result);
      } 
      else if (linkPlatform !== "Platform" && linkPlatform !== "All Platform" && linkGenre === "Genre") {
          const result = games.filter((game) => game.platform === linkPlatform || game.platform === "PC (Windows), Web Browser");
          setCategoryResult(result);
      }
      else if (linkPlatform === 'All Platform' && linkGenre === "Genre") {
          const result = games.filter((game) => game.platform === "PC (Windows)" || game.platform === "Web Browser" || game.platform === "PC (Windows), Web Browser")
          setCategoryResult(result);
      } 
      else if (linkPlatform === "Platform" && linkGenre !== "Genre") {
          const result = games.filter((game) => game.genre === linkGenre);
          setCategoryResult(result);
      }
  }, [linkPlatform, linkGenre, tab, setCategoryResult])
    
  return (
  <React.Fragment>
    <div className="showGame">
      {categoryResult.length === 0 ? (
        <div className="noGameFound">
          <h2>Sorry, No game found...</h2>
        </div>
      ) : (
        categoryResult.map((element, key) => (
          <React.Fragment key={key}>
            <div className="tuile">
              <img className="game_img" src={element.thumbnail} alt="img"></img>
              <div className="game_el">
                <h1>{element.title}</h1>
                <p>{element.short_description}</p>
                <div className="game_el_footer">
                  <div className="game_el_footer_left">
                    <a href="# ">
                      <p>More...</p>
                    </a>
                  </div>
                  <div className="game_el_footer_right">
                    <p>{element.genre}</p>
                    {
                      // Boucle en charge d'afficher une icone de PC ou de navigateur selon la plateforme de l'élement
                      element.platform === "PC (Windows)" ? (
                        <img className="platform_img" src={pc} alt="PC" />
                      ) : element.platform === "Web Browser" ? (
                        <img
                          className="platform_img"
                          src={browser}
                          alt="Browser"
                        />
                      ) : (
                        <React.Fragment>
                          <img
                            className="platform_img"
                            src={pc}
                            alt="Browser"
                          />
                          <img
                            className="platform_img"
                            src={browser}
                            alt="Browser"
                          />
                        </React.Fragment>
                      )
                    }
                  </div>
                </div>
              </div>
            </div>
          </React.Fragment>
        ))
      )}
    </div>
  </React.Fragment>
  )
}

export default ShowTuile;

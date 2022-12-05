import React from 'react';

import '../style/category.css'

function Category({tab, setIsSliderOpen, setLinkGenre, setLinkPlatform, linkPlatform, linkGenre, setIsGenreOpen, setIsPlateformOpen, isPlateformOpen, isGenreOpen}) {
    // Filtre des catégories
    const category = tab.map(element => element.platform);
    const categoryFilter = category.filter((x,y) => category.indexOf(x) === y).splice(0, 2);
    // Filtre des Genres
    const genre = tab.map(element => element.genre)
    const genreFilter = genre.filter((x,y) => genre.indexOf(x) === y)

    // Détection du clique sur la page pour fermer les menus déroulants
    window.onclick = () => {
        setIsGenreOpen(false)
        setIsPlateformOpen(false)
    } 
    // Retour d'un appui sur un des boutons du menu déroulant
    const setCategoryResult = ({genre}) => {
        setIsSliderOpen(false);
        setLinkGenre(genre)
    }
    
    const setPlatformResult = ({platform}) => {
        setIsSliderOpen(false);      
        if (platform === "PC (Windows)" ) {
            setLinkPlatform(platform);
        } else if (platform === "Web Browser") {
            setLinkPlatform(platform);
        } else {
            setLinkPlatform("All Platform")
        }
    }

  return (
    <div className="category_container">
      <nav>
        <ul>
          <li className="sous-button deroulant">
            <a
              href="# "
              onClick={
                // Logique appelant le state en charge d'ouvrir / fermer le menu
                (e) => {
                  e.stopPropagation();
                  setIsPlateformOpen(!isPlateformOpen);
                  if (isGenreOpen === true) {
                    setIsGenreOpen(false);
                  }
                }
              }
            >
              {linkPlatform}
            </a>
            {isPlateformOpen ? (
              <ul className="sous sous-plateforme">
                {/* Logique en charge d'afficher tout les types de plateforme de l'api */}
                {categoryFilter.map((platform, key) => (
                  <li
                    key={key}
                    onClick={() => {
                      setPlatformResult({ platform });
                      document.getElementById("searchInput").value="";
                    }}
                  >
                    <a href="# ">{platform}</a>
                  </li>
                ))}
                <li
                  onClick={() => {
                    setPlatformResult("all");
                  }}
                >
                  <a href="# ">All Platform</a>
                </li>
              </ul>
            ) : (
              <div></div>
            )}
          </li>
          <li className="deroulant">
            <a
              href="# "
              onClick={
                // Logique appelant le state en charge d'ouvrir / fermer le menu
                (e) => {
                  e.stopPropagation();
                  setIsGenreOpen(!isGenreOpen);
                  if (isPlateformOpen === true) {
                    setIsPlateformOpen(false);
                  }
                }
              }
            >
              {linkGenre}
            </a>
            {isGenreOpen ? (
              <ul className="sous sous-genre">
                {/* Logique en charge d'afficher tout les types de genre de l'api */}
                {genreFilter.map((genre, key) => (
                  <li
                    key={key}
                    onClick={() => {
                      setCategoryResult({ genre });
                      document.getElementById("searchInput").value="";
                    }}
                  >
                    <a href="# ">{genre}</a>
                  </li>
                ))}
              </ul>
            ) : (
              <div></div>
            )}
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Category;
// Import des composants nécessaire
import React, { useState } from 'react';

import Presentation from './presentation.js'
import Category from './category.js'
import ShowSlider from './showslider.js';
import ShowTuile from './showtuile';
import Navbar from './navbar.js';
import Footer from './footer.js';

import '../style/font.css'



function BodyComponent({tab}) {
    // UseState : En charge de nom des menues
    const [linkPlatform, setLinkPlatform] = useState('Platform');
    const [linkGenre, setLinkGenre] = useState('Genre');
    // UseState : Ouverture / fermeture des menues
    const [isPlateformOpen, setIsPlateformOpen] = useState(false);
    const [isGenreOpen, setIsGenreOpen] = useState(false);
    // UseState : Résultat d'une recherche / d'un choix de catégorie
    const [categoryResult, setCategoryResult] = useState([]);
    // UseState : Ouverture / Fermeture du slider
    const [isSliderOpen, setIsSliderOpen] = useState(true);


    return (
        <React.Fragment>
            <header>
                <Navbar 
                    tab={tab}

                    setIsSliderOpen={setIsSliderOpen}

                    categoryResult={categoryResult}
                    setCategoryResult={setCategoryResult}

                    setLinkPlatform={setLinkPlatform}
                    linkPlatform={linkPlatform}

                    setLinkGenre={setLinkGenre}
                    linkGenre={linkGenre}
                />
            </header>
            <div id="wrapper">
                <Presentation
                    tab = {tab}
                />

                <Category 

                    tab={tab}

                    setIsSliderOpen={setIsSliderOpen}

                    linkPlatform={linkPlatform}
                    setLinkPlatform={setLinkPlatform}

                    linkGenre={linkGenre}
                    setLinkGenre={setLinkGenre}

                    isPlateformOpen={isPlateformOpen}
                    setIsPlateformOpen={setIsPlateformOpen}

                    isGenreOpen={isGenreOpen}
                    setIsGenreOpen={setIsGenreOpen}   
                    

                />
                {
                    isSliderOpen ? (
                        <ShowSlider
                            tab={tab}
                        />
                    ) : (
                        <ShowTuile
                            tab={tab}
                            linkGenre={linkGenre}
                            linkPlatform={linkPlatform}
                            categoryResult={categoryResult}
                            setCategoryResult={setCategoryResult}
                        />
                    )
                }
            </div>
            <footer>
                <Footer/>
            </footer>
        </React.Fragment>
    )
}

export default BodyComponent
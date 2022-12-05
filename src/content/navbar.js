// Import des composants nécessaire
import React from 'react';

import loupe from '../img/navbar_img/loupe.png'
import user from '../img/navbar_img/user_icon.png'
import logo from '../img/navbar_img/logo.png'

import '../style/navbar.css'

function Navbar({tab, setIsSliderOpen, setCategoryResult, setLinkPlatform, setLinkGenre}) {
    const gameTab = tab.slice(0, 50);

    const handleChange = (event) => {
        
        if (!event.target.value) {
            setIsSliderOpen(true);
        } else  {
            setIsSliderOpen(false);
            const result = gameTab.filter((element) => element.title.toLowerCase().includes(event.target.value.toLowerCase()) || element.genre.toLowerCase().includes(event.target.value.toLowerCase()));
            setCategoryResult(result);

            setLinkPlatform('Platform');
            setLinkGenre('Genre');
        }
    }

    return (
        <React.Fragment>
            <div className="navbar">
                {/* Composant "Logo" */}
                <a href="BodyComponent.js"><img className='img_logo' src={logo} alt="logo"/></a> 
                {/* Composant "Barre de recherche" */}
                <div className="searchBox">
                    <input id="searchInput" className="searchInput" type="text" name="" placeholder="Search" onChange={handleChange} />
                    <button className="searchButton" href="#">
                        {/* Composant "Loupe au millieux de la barre de recherche" */}
                        <img className='img_search' src={loupe} alt="search"></img>
                    </button>
                </div>
                {/* Composant "Compte" */}
                <a href="# "><img src={user} className='img_navbar' alt='Account'/><p>Account</p></a> 
            </div>
        </React.Fragment>
    )
}

export default Navbar;


// Import des composants nécessaire
import React, { useState, useEffect } from 'react';
import BodyComponent from '../BodyComponent.js'

function Fetch() {
    // UseEffect en charge de fournir l'affichage et de l'accès à la manipulation de l'API
    useEffect(() => {
        // Option nécessaire à la connexion de l'API
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': 'a107483971msh6ee4aa9bf970d86p1e4683jsnefccd31b591c',
		        'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
            }
        }
        // Connexion à l'API et initialisation des options tu tableau qui en ressort
        fetch('https://free-to-play-games-database.p.rapidapi.com/api/games', options)
        .then(response => response.json())
        .then((responseGame) => {
            const responseGameClear = responseGame.map(object => {
                if (object.genre === " MMORPG" || object.genre === "MMORPG") {
                    return{...object, genre: "MMO"};
                } else if (object.genre === "MMOFPS" || object.genre === "MMOARPG") {
                    return{...object, genre: "MMO", sousGenre: object.genre};
                } else if (object.genre === "Moba") {
                    return{...object, genre: "MOBA"};
                } else if (object.genre === "ARPG") {
                    return{...object, genre: "Action RPG"};
                }
                return object   
            })           

            // Création du tableau utilisable via useState
            setGames(responseGameClear)
        })
        .catch(err => console.error(err))
    }, [])
    // useState créant un tableau en charge de la récupération des données de l'API
    const [games, setGames] = useState([]);

    // console.log(
    //       games
    //           .filter(game => game.title === 'Lost Ark')
    // )

    /* Récupération des genre de jeux dans un tableau */
    //   const getGenre = []
    //   for (const element of games) {
    //       getGenre.push({genre: element.genre})
    // }
    
    //   const groupBy = (objectArray, property) => {
    //       return objectArray.reduce((acc, obj) => {
    //           const key = obj[property];
    //           const curGroup = acc[key] ?? [];
    //           return { ...acc, [key]: [...curGroup, obj] };
    //       }, {})
    //   }

    //   const groupedGenre = groupBy(getGenre, "genre");
     
    //   console.log(groupedGenre)
    // console.log(groupedGenre['ARPG']);
    


     return (
         <React.Fragment>
             {
                <React.Fragment>
                    {/* Envois des informations au différent composants */}
                    <BodyComponent tab={games}/>
                </React.Fragment>
             }
         </React.Fragment>
     )
}

export default Fetch
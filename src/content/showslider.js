import React from "react";
import { CarouselProvider, Slider, Slide } from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";

import pc from "../img/game_view_img/pc.png";
import browser from "../img/game_view_img/browser.png";

import "../style/slider.css";

function ShowSlider({ tab }) {
  const infoGame = tab.slice(0, 50).map((element) => element);

  return (
    <React.Fragment>
      {/* Défini les options du Carousel */}
      <CarouselProvider
        naturalSlideWidth={100}
        naturalSlideHeight={125}
        totalSlides={50}
        isPlaying={true}
        interval={5000}
        step={1}
        orientation={"vertical"}
        infinite={false}
        lockOnWindowScroll={true}
        dragEnabled={true}
        touchEnabled={true}
        dragStep={1}
        visibleSlides={1}
        playDirection={"forward"}
        className={"caroussel"}
      >
        {/* Création du slider */}
        <div className="slider">
          <Slider>
            {infoGame.map((element) => (
              // Création du Slide, Indexer par l'id des éléments
              <Slide key={element.id} index={element.id}>
                {/* Affichage des tuiles dans le slider */}
                <div>
                  <img
                    className="game_img"
                    src={element.thumbnail}
                    alt="img"
                  ></img>
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
              </Slide>
            ))}
          </Slider>
        </div>
      </CarouselProvider>
    </React.Fragment>
  );
}

export default ShowSlider;

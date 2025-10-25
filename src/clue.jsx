//Komponent som visar ledtråden med tidslinjen inom vyn TalkAboutIt.
import React, { useState } from "react";
import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBTypography,
} from "mdb-react-ui-kit";
import backArrow from './img/arrow.png';
import industry from './img/industry.png';
import car from './img/car.png';
import clothes from './img/clothes.png';
import plastic from './img/plastic.png';
import shopper from './img/shopper.png';
import trash from './img/trash.png';
import { Link } from 'react-router-dom';
import './App.css';
/*Importering av bilder, CSS, react och link för att navigeringen mellan komponenterna ska fungera. Importerar tidslinjen med tillhörande element och från mdb-react-ui-kit biblioteket. */

export default function Clue() {
  
  const [showText, setShowText] = useState(null); //Sätter grundvärdet av texten till null
  const clickOnPic = (image) => {
    setShowText(showText === image ? null : image); //Vid klick på bilden uppdateras värdet och texten visas.
  };

  return (
    /*Kod från bootstrap-bibliotek med inslag av egen kod och styling*/ 
    <MDBContainer fluid className="py-5">
      <MDBRow>
        <MDBCol lg="12">
          <h1 className="rubrik">Klicka på bilderna för mer information</h1>
          <div className="horizontal-timeline">
            <MDBTypography listInLine className="items">
              {/* År 1880-1940 Industri */}
              <li className="items-list">
                <div className="px-4">
                  <div className="event-date badge bg-info">1880-1940</div>
                  <div className="clickOnPic">
                    {/*Placerat bild på tidslinjen och kopplat funktionen clickOnPic till bilden. Vid klick på bilden körs den funktionen och texten syns. */}
                    <img
                      src={industry}
                      alt="Industry"
                      onClick={() => clickOnPic("industry")}  />
                    {showText === "industry" && (
                      <>
                        <p className="clueText">
                          Sverige påverkas av att stora industrier växer fram, vilket har stor effekt på miljön.
                          Smutsig luft, förorenat vatten och skogar som försvinner.
                        </p>
                      </>
                    )}
                  </div>
                </div>
              </li>

              {/* År 1960 Bil */}
              <li className="items-list">
                <div className="px-4">
                  <div className="event-date badge bg-info">1960</div>
                {/*Placerat bild på tidslinjen och kopplat funktionen clickOnPic till bilden. Vid klick på bilden körs den funktionen och texten syns. */}
                  <div className="clickOnPic">
                    <img
                      src={car}
                      alt="Car"
                      onClick={() => clickOnPic("car")} />
                    {showText === "car" && (
                      <>
                        <p className="clueText">
                          Att ha en egen bil har blivit en självklarhet i Sverige. 
                        </p>
                      </>
                    )}
                  </div>
                </div>
              </li>

              {/* År 1980 Plast och början av Fast Fashion */}
              <li className="items-list">
                <div className="px-4">
                  <div className="event-date badge bg-info">1980</div>
                  {/*Placerat bild på tidslinjen och kopplat funktionen clickOnPic till bilden. Vid klick på bilden körs den funktionen och texten syns. */}
                  <div className="clickOnPic">
                    <img
                      src={plastic}
                      alt="Plastic"
                      onClick={() => clickOnPic("plastic")}/>
                    {showText === "plastic" && (
                      <>
                        <p className="clueText">
                          Plastflaskor används nästan överallt i världen och har blivit vanliga för dryckesförpackningar.
                        </p>
                      </>
                    )}
                  </div>
                 {/*Placerat bild på tidslinjen och kopplat funktionen clickOnPic till bilden. Vid klick på bilden körs den funktionen och texten syns. */}
                  <div className="clickOnPic">
                    <img
                      src={clothes}
                      alt="galje med tröja"
                      onClick={() => clickOnPic("clothes")} />
                    {showText === "clothes" && (
                      <>
                         <p className="clueText">
                    Perioden är starkt präglad av fast fashion. 
                    H&M, Forever21 och Zara dominerar marknaden med kläder
                    till låga priser med snabb produktion.
                  </p>
                      </>
                    )}
                  </div>
                </div>
              </li>

              {/* År 2010 Överkonsumtion/fast fashion */}
              <li className="items-list items-listTwo">
                <div className="px-4">
                  <div className="event-date badge bg-info">2010</div>
                  {/*Placerat bild på tidslinjen och kopplat funktionen clickOnPic till bilden. Vid klick på bilden körs den funktionen och texten syns. */}
                  <div className="clickOnPic">
                    <img
                      src={trash}
                      alt="bild på överkonsumtion av kläder"
                      onClick={() => clickOnPic("trash")} />
                    {showText === "trash" && (
                      <>
                        <p className="clueText">
                          Folk köper mer och mer kläder i ett allt högre tempo. Överkonsumtion gör att stora mängder kläder slängs.
                          De flesta köp sker fortfarande i fysiska butiker.
                        </p>
                      </>
                    )}
                  </div>
                  {/*Placerat bild på tidslinjen och kopplat funktionen clickOnPic till bilden. Vid klick på bilden körs den funktionen och texten syns. */}
                  <div className="clickOnPic">
                    <img
                      src={shopper}
                      alt="Person med kreditkort"
                      onClick={() => clickOnPic("shopper")} />
                    {showText === "shopper" && (
                      <>
                        <p className="clueText">
                          Konsumtionen av kläder ökar när människor köper snabbare och billigare kläder, ofta med hjälp av krediter. E-handeln växer sig större och shopping blir allt mer lättillgängligt. 
                        </p>
                      </>
                    )}
                  </div>
                </div>
              </li>
            </MDBTypography>
          </div>
        </MDBCol>
      </MDBRow>

      {/* Tillbaka-knapp */}
      <Link to={"/talkAboutIt"}>
        <img src={backArrow} alt="Tillbaks" className="arrowBack" style={{ marginTop: "20px" }} />
      </Link>
    </MDBContainer>
  );
}

//Komponent med information om den interaktiva berättelsen som visas när användaren klickat på Start
import React from "react";
import { Link } from "react-router-dom";
import arrow from "./img/arrow.png";
import stickerImage from "./img/sticker.png";
/*Import av bilder och Link för navigeringen mellan komponenterna*/

//Text, bild och pil-knapp för att gå vidare till secondHand
export function Info() {
  return (
    <div className="infoWrapper">
      <h1 style={{fontWeight: 'bold'}}>Välkommen!</h1>
      <div className="info">
        <p>I den här interaktiva berättelsen får du se vilken klimatpåverkan dina olika köp har. Det är viktigt att du svarar ärligt på varje fråga. </p>
        <p className="stickerInfo">I berättelsen har 9 st <img src= {stickerImage} style={{height: "50px"}} alt="Hemlig sticker"></img> placerats ut. Kan du hitta alla?</p>
      </div>
      {/*Fortsätt-pil*/}
      <Link to="/secondhand">
        <img src={arrow} alt="Fortsätt" className="arrowForward" />
      </Link>
    </div>
  );
}

export default Info;
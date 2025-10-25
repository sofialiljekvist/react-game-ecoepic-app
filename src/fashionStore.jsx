//Komponent som utgör vyn inom fashion-butiken och hanterar funktionaliteten för clothesCard och när det ska visas och inte. 
import React, { useState } from "react";
import {ClothesCard} from './clothesCard.jsx';
import stickerImage from "./img/sticker.png";
import { Link } from "react-router-dom"; 
//importerar React och komponenten ClothesCard för att den ska kunna visas i vyn. Importerar Link för att navigeringen mellan komponenterna ska fungera.

function FashionStore (){
  const [isCardOpen, setIsCardOpen] = useState(false); //Sätter grundvärdet av isCardOpen till false

  const CardOpen = () => {
   setIsCardOpen(true); //När funktionen CardOpen körs ska isCardOpen bli true
  };

  const closeCard = () => {
   setIsCardOpen(false); //När funktionen closeCard körs så ska isCardOpen återställas till false
  };

  const [linkDestination] = useState('/questionCo2'); //Inom denna komponent är grundvärdet av länk-vägen questionCo2.

  return(
    <div className={"fashionStore bgi"}>
      <h1 className={"storeHeader"}>Välkommen till Fastfashion-butiken! Klicka på ett klädesplagg för att shoppa.</h1>
       
      <button className="sweaterButton"
        onClick={CardOpen} /*Kör funktionen CardOpen */> 
      </button>
      
      {isCardOpen && (
        <div>
          <ClothesCard 
                closeCard={closeCard} 
                linkDestination={linkDestination}
                clothesID={2}
                /*När isCardOpen är true så ska komponenten ClothesCard renderas och funktionen closeCard, det specifika ID:t och det uppdaterade värdet av länken skickas som props. Vi ville att ID:t skulle skickas dynamiskt utifrån vilket klädesplagg som valts. En lösning hade varit att göra en for-loop där i hade skrivits ut som clothesID. Då denna applikation är så pass liten i nuläget så prioriterades inte det, men för vidareutveckling av appen hade det varit relevant.*/
            /> 
        </div>
      )}
      <div className="sticker">
        <Link to={"/moviefashion"}>
          <img src= {stickerImage} style={{height: "50px", width: "50px"}} alt="Hemlig sticker" className="fashionSticker" /> {/*Bild av sticker som leder till ledtråden inom clue. */}
        </Link>
      </div>
    </div>
  );
}

export default FashionStore;

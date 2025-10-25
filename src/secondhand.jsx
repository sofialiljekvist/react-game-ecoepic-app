//Komponent som utgör vyn inom secondhand-butiken och hanterar funktionaliteten för clothesCard och när det ska visas och inte. 
import React, { useState } from "react";
import {ClothesCard} from './clothesCard.jsx';
import stickerImage from "./img/sticker.png";
import { Link } from "react-router-dom"; 
//Importerar bild, React, useState och komponenten ClothesCard för att den ska kunna visas i vyn. Importerar Link för navigering mellan komponenterna.

function SecondHand (){
  const [isCardOpen, setIsCardOpen] = useState(false); //Sätter grundvärdet av isCardOpen till false

  const CardOpen = () => {
   setIsCardOpen(true); //När funktionen CardOpen körs ska isCardOpen bli true
  }; 

  const closeCard = () => {
   setIsCardOpen(false); //När funktionen closeCard körs så ska isCardOpen återställas till false
  }; 

  const [linkDestination] = useState('/fashionStore'); //Sätter grundvärdet av länk-vägen till fashionStore så att det är där användaren hamnar vid första klick på köp-knappen inom clothesCard
  
  return(
    <div className={"secondHand bgi"}>
      <h1 className={"storeHeader"}>Välkommen till Secondhand-butiken! Klicka på ett klädesplagg för att shoppa.</h1>
      <div className="sticker">
        <Link to={"/listFabric"}>
          <img src= {stickerImage} style={{height: "50px", width: "50px"}} alt="Hemlig sticker" /> {/*Bild av sticker som leder till ledtråden inom listFabric.jsx. */}
        </Link>
      </div>
      <button className="shirtButton" 
          onClick={CardOpen} > {/*Kör funktionen CardOpen*/}
      </button>
     
      {isCardOpen && (
        <div>
          <ClothesCard 
            closeCard={closeCard} 
            linkDestination={linkDestination}
            clothesID={1}
            /*När isCardOpen är true så ska komponenten ClothesCard renderas och funktionerna closeCard och handleLinkUpdate, det specifika ID:t och det uppdaterade värdet av länken ska skickas som props. Vi ville att ID:t skulle skickas dynamiskt utifrån vilket klädesplagg som valts. En lösning hade varit att göra en for-loop där i hade skrivits ut som clothesID. Då denna applikation är så pass liten i nuläget så prioriterades inte det, men för vidareutveckling av appen hade det varit relevant.*/
          /> 
        </div> 
      )}
    </div>
  );
}
export default SecondHand;
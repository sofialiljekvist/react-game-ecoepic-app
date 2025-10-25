//Komponent som dyker upp när användaren valt ett svarsalternativ inom questionCo2 och questionWater
import React from "react";
import './App.css';
import { Link } from "react-router-dom"; 
/*Importering av bilder, CSS, react och link för att navigeringen mellan komponenterna ska fungera */

/*Användning av props som skickas från questionCo2 och questionWater för att visa här i Sure vad för svar användaren klickat på. */
export function Sure ({selectedAnswer, setShowSure, linkYes, linkNo}) {
  const closeAnswer = () => {
    setShowSure(false); 
  };

  /*Rad 20 hämtar svaret användaren klickade i vid förra komponenten (questionCo2, questionWater)  */
  /*Användingen av state är för att skicka vidare värdet av selectedAnswer till nästa komponent: answerCo2, answeWater. */
  /* Länkvägar som vid klick på ja tar användaren till nästa komponent och vid nej stängs areYouSure komponenten ner */

  return ( 
    <div className="sure-overlay">
      <p className="psure">Du har svarat {selectedAnswer}. Är du säker?</p>
      <Link to= {linkYes} state={{selectedAnswer}} className="answerSure" onClick ={closeAnswer}>Ja</Link>
      <Link to= {linkNo} className="answerSure" onClick={closeAnswer}>No</Link> 
    </div>
  );
}

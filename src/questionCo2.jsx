//Komponent som utgör vyn där frågan om co2-utsläpp ställs och besvaras.
import React from "react";
import { useState } from "react";
import {Sure} from "./areYouSure.jsx";
import stickerImage from "./img/sticker.png";
import { Link }  from "react-router-dom";
//importerar React och useState från react samt komponenten Sure för att kunna rendera den inom vyn och bilden av stickern

export function QuestionCoTwo() { 
  const [showSure, setShowSure] = useState(false); //Sätter grundvärdet till false
  const [selectedAnswer, setSelectedAnswer] = useState(""); //sätter grundvärdet till en tom sträng
  const [linkYes] = useState('/answerCo2'); //Sätter grundvärdet av länk-vägen till answerCo2 så att det är där användaren hamnar vid första klick på ja-knappen inom areYouSure
  const [linkNo] = useState('/questionCo2');//Sätter grundvärdet av länk-vägen till questionCo2 så att det är där användaren hamnar vid första klick på nej-knappen inom areYouSure

  const handleAnswerClick = (answer) => { //hanterar vad som sker när användaren väljer ett svarsalternativ
    setSelectedAnswer(answer); //uppdaterar värdet av selectedAnswer
    setShowSure(true); // uppdaterar värdet av showSure och renderar "Sure" direkt när någon av knapparna klickas
  };

  return(
    <div className="question bgi">
      <div className="questionOverlay">
          <p className="questionText">Hur mycket CO₂-utsläpp tror du att du sparar om du köper en outfit med jeans, tröja och en dunjacka på second hand, jämfört med nytt hos din favoritaffär?</p>
      </div>
      <div className="sticker">
        <Link to={"/clueCo2"}>
          <img src= {stickerImage} style={{height: "50px", width: "50px"}} alt="Hemlig sticker" /> {/*Bild av sticker som leder till ledtråden inom clue. */}
        </Link>
      </div>
    
    {/*Onclick anropar handleAnswerClick och skickar med det valda svaret när svarsalternativet klickas på */}
      <div className="answersOptions"> 
        <div className="answerOverlay answerOne" onClick={() => handleAnswerClick ("10-30 Co2")}>
          <button className="answerButton">10-30 CO₂</button> 
        </div>
        <div className="answerOverlay" onClick={() => handleAnswerClick("70-100 CO₂")} >
          <button className="answerButton">70-100 CO₂</button>
        </div>
        <div className="answerOverlay answerThree" onClick={() => handleAnswerClick("100-150 CO₂")}>
          <button className="answerButton">100-150 CO₂</button>
        </div>
      </div>

      {/* Om showSure är true så renderas komponenten Sure som också skickar det valda svaret via props och setShowSure som stänger ner komponenten Sure. Även länkvägarna skickas som props */}
      {showSure && (
        <Sure  
        selectedAnswer={selectedAnswer} 
        setShowSure={setShowSure}
        linkYes = {linkYes}
        linkNo = {linkNo}
        />
      )}
    </div>
    );
  }

  export default QuestionCoTwo;
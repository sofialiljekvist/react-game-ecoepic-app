//Komponent som utgör vyn där frågan om vattenförbrukning ställs och besvaras.
import React from "react";
import { useState } from "react";
import {Sure} from "./areYouSure.jsx";
//importerar React och useState från react samt komponenten Sure för att kunna rendera den inom vyn och bilden av stickern

export function QuestionWater() { 
  const [showSure, setShowSure] = useState(false); //Sätter grundvärdet till false
  const [selectedAnswer, setSelectedAnswer] = useState(""); //sätter grundvärdet till en tom sträng
  const [linkYes] = useState('/answerWater'); //Inom denna komponent är grundvärdet av länk-vägen answerWater så att det nu är där användaren hamnar vid  klick på ja-knappen
    const [linkNo] = useState('/questionWater');//Inom denna komponent är grundvärdet av länk-vägen questionWater så att det är där användaren hamnar vid klick på nej-knappen

  const handleAnswerClick = (answer) => { //hanterar vad som sker när användaren väljer ett svarsalternativ
    setSelectedAnswer(answer); //uppdaterar värdet av selectedAnswer
    setShowSure(true); // uppdaterar värdet av showSure och renderar "Sure" direkt när någon av knapparna klickas
  };

  return(
    <div className="question bgi">
      <div className="questionOverlay">
          <p className="questionText">Hur mycket vatten tror du går åt till att tillverka ett par jeans?</p>
      </div>
    
    {/*Onclick anropar handleAnswerClick och skickar med det valda svaret när den klickas på */}
      <div className="answersOptions"> 
        <div className="answerOverlay answerOne" onClick={() => handleAnswerClick ("75 liter")}>
          <button className="answerButton">75 liter</button> 
        </div>
        <div className="answerOverlay" onClick={() => handleAnswerClick("750 liter")} >
          <button className="answerButton">750 liter</button>
        </div>
        <div className="answerOverlay answerThree" onClick={() => handleAnswerClick("7500 liter")}>
          <button className="answerButton">7500 liter</button>
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

  export default QuestionWater;

//Komponent som utgör vyn i vilken svaret på frågan questionCo2 visas
import React from "react";
import './App.css';
import arrow from "./img/arrow.png";
import { Link } from "react-router-dom";
import {useLocation} from "react-router-dom"; 
/*Importering av bilder, CSS, react och link för att navigeringen mellan komponenterna ska fungera */

/* genom location.state hämtas svaret från komponenten Sure. Här används reacts hook, useLocation, för att få tillgång till svaret, selectedAnswer, som skickats med state.   */
export function AnswerCoTwo() {
    const location = useLocation ();
    const selectedAnswer = location.state?.selectedAnswer;
    return (
       
        <div className="answer bgi">
            {/* selectedAnswer && = betyder att ifall selectedAnswer är lika med true så visas allt innehåll nedan */}

            <div className="mindOverlay">    
                {selectedAnswer && (
                    <p className="userAnswer"> Du har svarat: {selectedAnswer} </p> //Skriver ut det valda svaret
                )}
                <p className="correctAnswer">Rätt svar är:</p> 
                <p className="correct">70-100 CO<sub>2</sub></p>
                <p className="bym">Let´s blow your mind</p>
                <div className="fact">
                    <p className="bymquestion">Visste du att det är lika mycket CO<sub>2</sub> som att:</p>
                    <p className="byminfo">Köra bil 40-60 mil</p>
                    <p className="bymcompare">(som mellan Stockholm-Göteborg)</p>
                </div>
                <div className="fact">
                    <p className="bymquestion">eller som att:</p>
                    <p className="byminfo">Äta 30-50 kg kött </p>
                    <p className="bymcompare">(300-500 st cheeseburgare)</p>
                </div>

                {/* Länkväg till nästa komponent - där en bild av en grön pil har funktionen av en knapp för att vid klick ta användern vidare till nästa komponent/sida */}
                <Link to="/questionWater">
                    <img src={arrow} alt="Fortsätt" className="arrowForward" />
                </Link>
            </div>
        </div>
    );
}

export default AnswerCoTwo;
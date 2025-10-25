//Komponent som utgör vyn i vilken svaret på frågan questionWater visas
import React from "react";
import './App.css';
import arrow from "./img/arrow.png";
import { Link } from "react-router-dom";
import {useLocation} from "react-router-dom"; 
/*Importering av bilder, CSS, react och link för att navigeringen mellan komponenterna ska fungera */

/* genom location.state hämtas svaret från komponenten Sure. Här används reacts hook, useLocation, för att få tillgång till svaret som skickats med state.   */
export function AnswerWater() {
    const location = useLocation ();
    const selectedAnswer = location.state?.selectedAnswer;
    return (
       
        <div className="answer bgi">
            {/* selectedAnswer && = betyder att ifall selectedAnswer är lika med true så visas allt innehåll nedan */}

            <div className="mindOverlay">    
                {selectedAnswer && (
                    <p className="userAnswer"> Du har svarat: {selectedAnswer} </p>
                )}
                <p className="correctAnswer">Rätt svar är: </p> 
                <p className="correct">7500 liter vatten,</p> 
                <p className="correctAnswer">lika mycket som i en simbassäng.</p>
                <p className="bym">Let's blow your mind</p>
                <p className="factText">När vi använder så mycket vatten på en enda sak, som ett par jeans, blir det mindre vatten kvar i naturen. 
                        Dessutom blir vattnet ofta förorenat av kemikalier från färgning och produktion, vilket skadar växter, djur och människor.
                </p>
                

                {/* Länkväg till nästa komponent - där en bild av en grön pil har funktionen av en knapp för att vid klick ta användern vidare till nästa komponent/sida */}
                <Link to="/talkIntro">
                    <img src={arrow} alt="Fortsätt" className="arrowForward" />
                </Link>
            </div>
        </div>
    );
}

export default AnswerWater;
//Komponent som vägleder användaren till nästa del, diskussionsdelen. 
import React from "react";
import { Link } from "react-router-dom";
import arrow from "./img/arrow.png";
/*Import av bild för pilen, React och Link för navigeringen mellan komponenterna*/

export function TalkIntro() {
  return (
    <div>
      <h1 className="talkIntro-h1">Let's talk about it</h1>
      <div className="ovalInfo">
        <div className="talkIntro-p">
          <p className="goodJob">Bra jobbat!</p>
          <p> Hitta tre kompisar som också kommit såhär långt och sätt er tillsammans. Sen går ni vidare för att <span className="talkText">talk about it</span></p>
        </div>
      </div>
      {/*Fortsätt-pil*/}
      <Link to="/talkAboutIt">
        <img src={arrow} alt="Fortsätt" className="arrowForward" />
      </Link>
    </div>
  );
}

export default TalkIntro;
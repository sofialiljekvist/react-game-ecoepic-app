//Komponent som styr meny-ikonen och navigationen.
import React, { useState } from "react";
import crossImage from "./img/close.png";
import menuImage from "./img/menu.png";
import {Link} from "react-router-dom";
/*Importering av bilder, react och useState och link för att navigeringen mellan komponenterna ska fungera */

/*Bestämmer grundvärdet för isMenuOpen, vilket är false. Menyn börjar som stängd. */
export function Menu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  /*Här ändras värdet till true när expandMenu anropas */
  const expandMenu = () => {
    setIsMenuOpen(true); 
  };

  /*Menyknappen*/
  /*Vid klick på menyn så anropas expandMenu och menyn öppnas då isMenuOpen är true*/
  return (
    <div>
      <div className="menuButton">
        <img
          style={{ height: "50px"}}
          src={menuImage}
          alt="menyknapp"
          onClick={expandMenu}
        />
      </div>

      {/* Navigationen = den turkosa ovala rutan som ligger över hela sidan som dyker upp efter klick på menyknappen */}
      {/* Och om isMenuOpen är sant så visas navigationen med sina länkvägar. Navigation-round är 
          bilden av ett kryss som är en knapp, vid klick på krysset blir tillståndet för isMenuOpen false igen. Vilket gör att den utfällda menyn 
          stängs ner.  */}
      
      {isMenuOpen && (
        <div className="navigation-overlay">
          <Link to="/" className="oval-link" onClick={() => setIsMenuOpen(false)}>Avsluta och spara</Link>
          <Link to="/talkAboutIt" className="oval-link"  onClick={() => setIsMenuOpen(false)}>Let’s talk about it</Link>
          <Link to="/" className="oval-link" onClick={() => setIsMenuOpen(false)}>Inställningar</Link>
          <div className="navigation-round">
              <img
                src={crossImage}
                alt="kryss för att stänga meny"
                style={{ height: "30px"}}
                onClick={() => setIsMenuOpen(false)}
              />
          </div>
        </div>
      )}
    </div>
  );
}

export default Menu;
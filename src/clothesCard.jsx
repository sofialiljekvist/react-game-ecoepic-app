//Komponent som hämtar data ur clothesdata och presenterar rätt data utifrån de val användaren gör inom butikerna
import {Button} from "react-bootstrap";
import {Card, Row, Col} from "react-bootstrap"; 
import React from "react";
import { getClothesData } from "./clothesdata";
import {Link} from "react-router-dom";
import crossImage from "./img/close.png";
/*Importering av bilder samt Link för att kunna navigera genom applikationen med react-router-dom. Button, card, row och col från react-bootstrap-biblioteket. 
Här importeras öven getClothesData som är en JavaScript-fil över all information för varje klädesplagg*/

export const ClothesCard = ({ closeCard, clothesID, linkDestination }) => { /*Tar emot props som skickats från SecondHand*/
  const clothesArray = getClothesData();// Hämtar all data ur clothesdata.js
  
 // Hittar klädesplagget med det angivna ID:t med hjälp av find. Number talar om att ID:t som ska hämtas är ett nummer. 
  const clothes = clothesArray.find(clothes => clothes.clothesID === Number(clothesID));

  /*clothesCard-overlay = rutan som dyker upp på skärmen och visar information om det valda klädesplagget. */
    return ( 
      <div>  
       <div className="clothesCard-overlay">
          <Row>
            <Col key={clothes.clothesID} md="4" sm="6" xl="4" className="p-3">  
              <Card className="clothesCard">
                <div>
                  <img //Bild av kryss, vid klick på det körs funktionen closeCard inom SecondHand och rutan syns inte mer.
                  src={crossImage}
                  alt="kryss för att stänga meny"
                  className="clothesCard-img"
                  style={{height: "30px"}}
                  onClick={closeCard}
                  />
                </div>
                <Card.Img style={{ height: "280px", width: "280px"}} src={clothes.image} />
                <Card.Body className="clothesCard-body">
                  <div> {/*Hämtar och skriver ut informationen ur clothesdata.js */}
                    <Card.Title>{clothes.title}</Card.Title> 
                    <Card.Subtitle className="text-muted text-wrap clothesCard-title">{clothes.subTitle}</Card.Subtitle>  
                    <Card.Text className="clothesCard-text">
                      <ul className="clothesCard-list">
                        {clothes.description.map((item, index) => ( //går igenom listan inom description i clothesdata.js och skriver ut varje objekt i listan som en punkt (li) för det valda klädesplagget
                        <li
                          key={index}>
                          {item}
                        </li>
                        ))}
                        <li>Pris: {clothes.price} kr</li>
                      </ul>
                    </Card.Text>
                  </div>
                  <div>
                  <Link to={linkDestination}>
                    <Button className='buyButton'>
                      Köp
                    </Button>
                  </Link>
                    {/*När användaren klickar på Köp tas de vidare till LinkDestination. Inom SecondHand är linkDestination fashionStore, och i FashionStore är linkDestination questionCo2. */}
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
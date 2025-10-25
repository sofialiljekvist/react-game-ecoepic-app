//Komponent som visar texter och bilder som visar koldioxidutsläppen vid produktion av en jacka inom vyn questionCo2.
import backArrow from './img/arrow.png';
import { Link } from 'react-router-dom';
import clueCo2 from './img/clueCo2.JPG';
import jacket from './img/jacket.JPG';
//importerar bilder och Link för att navigeringen mellan komponenterna ska fungera 

function ClueCo2() {
    return ( 
        <div>
            <div className="clueCo2">
                <p className="clueCo2Text">För att producera en ny jacka måste först materialet tas fram, sen ska den tillverkas i fabriken, fraktas till flera olika länder för att sedan kunna säljas i butiker runt om i landet.</p>
                <img style={{ height: '300px', width: '270px'}} src={jacket} alt="Jacka" />
                <p className="clueCo2Text2">Den processen släpper sammanlagt ut ca 20-35 CO2, för en jacka</p>
            </div>
            <img className="clueCo2-img" src={clueCo2} alt="Produktion" style={{width: "900px"}} />
            
            {/*Tillbaka-knapp */}
            <Link to={"/questionCo2"}>
                <img className='arrowBack' src={backArrow} alt="Tillbaka" />
            </Link>
        </div> 
    );
}
export default ClueCo2;
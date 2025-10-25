/*Komponent som renderar alla grafer och vsar dem i en vy. Denna vy ska fungera som elevernas diskussionsdel */
import { Co2LineChart } from './co2LineChart.jsx';
import {GlaciersSizeChart} from './glaciersSizeChart.jsx';
import  {SeaLevelChart}  from './seaLevelChart.jsx';
import React, { useEffect, useState } from "react";
import stickerImage from "./img/sticker.png";
import { Link }  from "react-router-dom";
import './App.css';
/*Importering av CSS, bild, react, useEffect, useState och de tre graf-komponenterna så att de visas inom denna vy. Importerar Link för navigering mellan komponenter.  */

export function TalkAboutIt(){ //Hämtar data från de API:er som används för att generera grafer. Inspiration från Kayvans exempel som modifierats.
    const [co2data, setCo2data] = useState([]);
    useEffect(() => {
        setCo2data([]);
        const url = "CO2EmissionsData.json"; 
        fetch(url)
        .then(data => data.json())
        .then(data => {
            setCo2data(data);
        });
    }, [])

    const [seaLevelData, setseaLevelData] = useState([]);
    useEffect(() => {
        setseaLevelData([]);
        const url = "SeaLevels.json"; 
        fetch(url)
        .then(data => data.json())
        .then(data => {
            setseaLevelData(data);
        });
    }, [])

    const [glaciersData, setglaciersData] = useState([]);
    useEffect(() => {
        setglaciersData([]);
        const url = "GlaciersSize.json"; 
        fetch(url)
        .then(data => data.json())
        .then(data => {
            setglaciersData(data);
        });
    }, [])

    return(
        <div className="chartWrapper">
            <h1>Let's talk about it</h1>
            <h2>Undersök de olika graferna</h2>
            <div className="sticker">
                <Link to={"/clue"}>
                    <img src= {stickerImage} style={{height: "50px", width: "50px"}} alt="Hemlig sticker" /> {/*Bild av sticker som leder till ledtråden inom clue. */}
                </Link>
            </div>
            {co2data.length > 0 &&
                <Co2LineChart myData={co2data}></Co2LineChart>
            }
            {glaciersData.length > 0 &&
                <GlaciersSizeChart ourData={glaciersData}></GlaciersSizeChart>
            }
            {seaLevelData.length > 0 &&
                <SeaLevelChart data={seaLevelData}></SeaLevelChart>
            }
        {/*Renderar de olika komponenterna som innehåller de tre graferna */}   
        </div>
    );
}

export default TalkAboutIt;
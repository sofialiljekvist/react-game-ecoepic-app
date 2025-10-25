import React from "react";
import './App.css';
import SecondHand from "./secondhand.jsx";
import FashionStore from "./fashionStore.jsx";
import {Menu} from "./menuButton.jsx";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import QuestionCoTwo from "./questionCo2.jsx";
import QuestionWater from "./questionWater.jsx";
import Clue from "./clue.jsx";
import {Play} from "./landingPage.jsx";
import TalkAboutIt from "./talkAboutIt.jsx";
import {AnswerCoTwo} from "./answerCo2.jsx";
import {AnswerWater} from "./answerWater.jsx";
import {Info} from "./info.jsx";
import {Material} from "./listFabric.jsx";
import ClueCo2 from "./clueCo2.jsx";
import {MovieFashion} from "./moviefashion.jsx";
import {TalkIntro} from "./talkIntro.jsx";
 /* Här importeras applikationens alla olika vyer/komponenter, CSS, och BrowserRouter från react */

/* Router används för att sköta navigeringen mellan alla olika vyer inom applikationen*/
/* Menu är placerad utanför Routes för att det är en komponent som hela tiden är synlig*/

function App() {
return (
<Router>
<div>
    <Menu/>
    <Routes>
        <Route path="/" element={<Play/>}/>
        <Route path="/info" element={<Info/>}/>
        <Route path="/secondhand" element={<SecondHand/>}/>
        <Route path="/fashionStore" element={<FashionStore/>}/>
        <Route path="/questionCo2" element={<QuestionCoTwo/>}/>
        <Route path="/answerCo2" element={<AnswerCoTwo/>}/>
        <Route path="/questionWater" element={<QuestionWater/>}/>
        <Route path="/answerWater" element={<AnswerWater/>}/>
        <Route path="/talkIntro" element={<TalkIntro/>}/>
        <Route path="/talkAboutIt" element={<TalkAboutIt/>}/>
        <Route path="/clue" element={<Clue/>}/>
        <Route path="/listFabric" element={<Material/>}/>
        <Route path="/moviefashion" element={<MovieFashion/>}/>
        <Route path="/clueCo2" element={<ClueCo2/>}/>
    </Routes>
</div>
</Router>
)
}
export default App;



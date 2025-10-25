import shirt from './img/shirt.JPG';
import sweater from './img/sweater.JPG';
/*Importer av bilder som finns för varje klädesplagg */

//Ger all information som ska visas för varje klädesplagg

/*Export function = gör det möjligt att kunna använda sig av filen utanför denna fil. Returnerar hela listan clothesData*/
export function getClothesData(){
    return clothesData;
}

/*returnerar ett specifikt klädesplagg beroenden på dess clothesID*/
export function getClothes(clothesID) {
  return clothesData.find(clothes => clothes.clothesID === Number(clothesID)); //säkerställer att clothesID är ett nummer
}
 //Här är all information om de olika klädesplaggen
const clothesData=[
  {
    clothesID: 1,
    image: shirt,
    title: "Jeansskjorta",
    subTitle: "100 % Bomull",
    description:[
    "Livslängd: 10 år", 
    "Skick: Bra begagnat"
    ],
    price: "50",
},
{
    clothesID: 2,
    image: sweater,
    title: "Stickad tröja",
    subTitle: "100% Akryl",
    description:[
      "Livslängd: 6 mån-2 år", 
      "Innehåller: olja, mikroplast"
      ],
    price: "250",
  },
]

export default clothesData;
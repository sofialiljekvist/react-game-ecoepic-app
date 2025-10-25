//Komponent som innehåller grafen över havsnivåerna och tillhörande dropdown-menyer samt diskussionsfråga. Namnen på våra grafkomponenter är tagna ur Kayvans exempel men koden är vår egen.
import { useState, useEffect } from "react";
import{
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend
    } from "recharts";
/*Importerar useState och useEffect från react och grafer från recharts */

//Ändrar default-texten som hör till grafen. Det fanns en text per default som vi ville justera, Kayvan hjälpte oss under handledningen med hur vi kunde komma åt det text-elementet och ändra det.
const CustomLegend = (props) => {
    const { payload } = props;
    return (
        <ul>
            {payload.map((entry, index) => (
                <li key={`item-${index}`} style={{ color: entry.color}}>
                    Havsnivå
                </li>
            ))}
        </ul>
    );
};

//SeaLevelChart är en komponent som använder data, vilket är en lista av objekt (API).  
export const SeaLevelChart = ({ data }) => {
    const years = Array.from(
        new Set(data.map((data) => data.Time))
        ).sort((a, b) => a - b); /*skapar listan years. new Set används för att sortera bort dubletter, ett Set innehåller endast unika värden. map-metoden används för att skapa en array som innehåller alla årtal ur data. Array.from() är en metod som omvandlar Set tillbaka till en array. sort() är en metod som sorterar alla listans värden i ordning, i detta fall från det tidigaste till det senaste. */

    const [fromYear, setFromYear] = useState(years[0]); /* useState används för att skapa en state-variabel 'fromYear' där det initiala värdet är det första i listan years.
    setFromYear är en funktion som kan uppdatera 'fromYear' baserat på användarens val i dropdown-menyn.*/
    const [toYear, setToYear] = useState(years[0]); // På samma sätt används useState för 'toYear' där det initiala värdet är det första i listan years.

    const [showQuestion, setShowQuestion] =useState(false); //sätter grundvärdet av showQuestion till false

    const filteredData = data.filter((input) => { /*Skapar 'filteredData', en ny array som innehåller endast de objekt från 'data' som uppfyller villkoret nedan. input är det aktuella/valda objektet i data */
        const inputTime = new Date(input.Time); /*inputTime skapar ett datum-objekt av input (det som väljs i dropdown) och Time, objekt som innehår datum i API */ 
        return (
            inputTime > new Date(fromYear) && inputTime < new Date(toYear) /*om inputTime är större än det valda från-datumet, och mindre än det valda toYear så filltreras de objekt i listan data som ligger mellan fromYear och toYear ut och ingår nu i filteredData */
        );
    });

    //useEffect används för att react ska reagera på ändringar som görs, i detta fall när användaren gör val i dropdown-menyerna och grafen visas.
    useEffect(() => {
        // Kontrollerar om det finns filtrerad data, alltså om ett från-år och ett till-år har valts
        if (filteredData.length > 0) {
            setShowQuestion(true); //om det finns filtrerad data blir showQuestion true
        } else {
            setShowQuestion(false);//om inte så blir den false och frågan syns inte
        }
    }, [fromYear, toYear, filteredData] //useEffect körs när fromYear, toYear eller filteredData ändras.
    );

    return (
        <div className="chartWrapper"> 
            
            <h3> Välj tidsintervall: </h3>
            <label> 
                Från:
                <select /*dropdown-meny för fromYear, uppdaterar useState med det valda värdet*/
                    value={fromYear}
                    onChange={(e) => setFromYear(e.target.value)}>    {/*En event-handler som anropar funktionen setFromYear när användaren gör ett nytt val i drop-down-menyn. e.target.value är det valda året. */}
                    {years.map((year) => (
                    <option key={year} value={year}>{year.slice(0, 4)}</option> //slice-metoden används för att bara skriva ut de första fyra tecknen i strängen year, eftersom hela datumet skrivs ut annars
                    ))}
                    {/* map-metoden används för att skapa en lista med option-element som baseras på innehållet i years (den array av unika årtal som vi skapade tidigare). Varje värde i years blir ett option-element i drop-down-menyn.*/} 
                </select>
            </label>

            <label>
                Till:
                <select /*dropdown-meny för fromYear, uppdaterar useState med det valda värdet*/
                    value={toYear}
                    onChange={(e) => setToYear(e.target.value)}>  {/*En event-handler som anropar funktionen setFromYear när användaren gör ett nytt val i drop-down-menyn. e.target.value är det valda året. */}
                    {years.map((year) => (
                    <option key={year} value={year}> {year.slice(0, 4)}</option> //slice-metoden används för att bara skriva ut de första fyra tecknen i strängen year, eftersom hela datumet skrivs ut annars
                    ))}
                    {/* map-metoden används för att skapa en lista med option-element som baseras på innehållet i years (den array av unika årtal som vi skapade tidigare). Varje värde i years blir ett option-element i drop-down-menyn.*/} 
                </select>
            </label>
            <p>Graf 3</p>
            
            <div className="viewChart">
                <LineChart /*Graf hämtad från recharts */
                    width={1000}
                    height={500}
                    data={filteredData}>
                    <text x={545} y={40} textAnchor="middle">Hur havsnåvåerna stiger</text> 
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="Time" tickFormatter={(tick) => tick.slice(0, 4)}/> 
                    <YAxis />
                    <Tooltip />
                    <Legend content={<CustomLegend />} /> {/*Här lägger vi till vårt egna grafnamn, se rad 15-26 */}
                    <Line
                        type="monotone"
                        dataKey="GMSL"
                        stroke="#8884d8"
                        activeDot={{ r: 8 }}
                    />
                </LineChart>
            </div>
            
            {/* här visar vi frågan om showQuestion har värdet true */}
            {showQuestion&&(
                <p className="discussion">Talk about it! Varför tror ni att det ser ut såhär?</p >
            )}
        </div >
    )
}  
import { Link } from "react-router-dom";
import "react-multi-carousel/lib/styles.css";
import { useState, useEffect } from "react";
import Carousel from 'react-bootstrap/Carousel';

import img1 from '../img/immagine della via lattea.jpg'

//imgB immagini delle battaglie
import imgB1 from '../img/img (caroselli home)/battaglie/Battaglia di Hastings.jpeg'
import imgB2 from '../img/img (caroselli home)/battaglie/Battaglia di Waterloo.jpg'
import imgB3 from '../img/img (caroselli home)/battaglie/La Battaglia di Stalingrado.jpg'
import imgB4 from '../img/img (caroselli home)/battaglie/Battaglia di Midway.jpg'
import imgB5 from '../img/img (caroselli home)/battaglie/Battaglia di Lepanto.jpg'

//imgI immagini delle invenzioni
import imgI1 from '../img/img (caroselli home)/invenzioni/Invenzione della ruota.jpg'
import imgI2 from '../img/img (caroselli home)/invenzioni/La stampa di Gutenberg.jpg'
import imgI3 from "../img/img (caroselli home)/invenzioni/L'energia elettrica.jpeg"
import imgI4 from '../img/img (caroselli home)/invenzioni/Il telefono di Bell.jpeg'
import imgI5 from '../img/img (caroselli home)/invenzioni/Il motore a combustione interna.JPG'

//imgE immagini delle epoche
import imgE1 from '../img/img (caroselli home)/epoche/Epoca del Rinascimento.jpg'
import imgE2 from '../img/img (caroselli home)/epoche/Età Industriale.jpeg'
import imgE3 from '../img/img (caroselli home)/epoche/Era Digitale.jpg'
import imgE4 from "../img/img (caroselli home)/epoche/Epoca dell'Antica Grecia.avif"
import imgE5 from '../img/img (caroselli home)/epoche/Impero Romano.jpg'

const MainHome = () => {

    // punti definiti per la quantita di card visualizzabili del carosello
    const responsive = {
        desktop: { breakpoint: { max: 3000, min: 1200 }, items: 4, slidesToSlide: 1 },
        laptop: { breakpoint: { max: 1199, min: 768 }, items: 3, slidesToSlide: 1 },
        tablet: { breakpoint: { max: 767, min: 576 }, items: 2, slidesToSlide: 1 },
        mobile: { breakpoint: { max: 575, min: 0 }, items: 1, slidesToSlide: 1 },
    };

    // Stato che traccia quale paragrafo è attualmente visibile
    const [currentParagraph, setCurrentParagraph] = useState(0);
    const totalParagraphs = 5;

    useEffect(() => {

        // Sequenza per mostrare i paragrafi uno a uno
        if (currentParagraph < totalParagraphs) {

        const timeoutId = setTimeout(() => {
            setCurrentParagraph(prev => prev + 1);

        }, 2000); // intervallo tra i paragrafi 

        return () => clearTimeout(timeoutId);

        } else if (currentParagraph === totalParagraphs) {

        // Dopo l'ultimo, mostra tutti i paragrafi
        }
    }, [currentParagraph]);

    // Funzione per determinare se un paragrafo deve essere visibile
    const isParagraphVisible = (index) => {

        if (currentParagraph < totalParagraphs ) 
        {
            return index <= currentParagraph;
        } 
        else 
        {
            return true; // tutti visibili alla fine
        }
    };

    return(
        <>
            <div className="group-paragrafer">
                <p id="para1" className={isParagraphVisible(0) ? "visible" : "hidden"}>
                    La storia e il nostro passato, presente futuro.
                </p>
                <p id="para2" className={isParagraphVisible(1) ? "visible" : "hidden"}>
                    Ma la storia e sempre vera?
                </p>
                <p id="para3" className={isParagraphVisible(2) ? "visible" : "hidden"}>
                    Conosci la storia?
                </p>
                <p id="para4" className={isParagraphVisible(3) ? "visible" : "hidden"}>
                    Comprendila, elaborala, teorizza.
                </p>
                <p id="para5" className={isParagraphVisible(4) ? "visible" : "hidden"}>
                    In questo modo puoi interagire con la storia!
                </p>
            </div>

            <section id = "group-img">
                <section id = "slide-img-sinistra">
                    <img src = {img1} alt = "immagine galassia via lattea" id = "immagine1"/>
                    <img src = {img1} alt = "immagine galassia via lattea" id = "immagine2"/>
                </section>

                <section id = "slide-img-destra">
                    <img src = {img1} alt = "immagine galassia via lattea" id = "immagine3"/>
                    <img src = {img1} alt = "immagine galassia via lattea" id = "immagine4"/>
                </section>
            </section>

            <section>
                <div id = 'HomeDiv1'>
                    <p className = "HomeDivParagrafiSinistra">
                        La storia dell'uomo è stata impregnata di battaglie ⚔️, spesso anche piccole battaglie possono decidere il destino di un paese. 
                        Ma certe battaglie hanno influenzato profondamente la storia che conosciamo 📜. 
                        Alcune erano prevedibili nella loro direzione, mentre altre non si poteva mai immaginare come sarebbe andata, rendendo difficile anche solo immaginare come sarebbe stata diversa la storia 🌟. 
                        <Link>
                            <a href = "#" className = "HomeAncore">Vuoi scoprire quali di queste battaglie hanno avuto un impatto così grande sulla storia dell'uomo?</a>
                        </Link>
                    </p>

                        <Carousel className = "HomeCaroselli">
                            <Carousel.Item>
                                    <img src = {imgB1} alt="" />

                                <Carousel.Caption>
                                    <h3>Battaglia di Hastings</h3>
                                    <p>La conquista normanna dell'Inghilterra nel 1066.</p>

                                    <Link>
                                        <a href = "#" className = "HomeAncore"> scopri </a>
                                    </Link>
                                </Carousel.Caption>
                            </Carousel.Item>

                            <Carousel.Item>
                                    <img src = {imgB2} alt="" />

                                <Carousel.Caption>
                                    <h3>Battaglia di Waterloo</h3>
                                    <p>La sconfitta di Napoleone nel 1815.</p>

                                    <Link>
                                        <a href = "#" className = "HomeAncore"> scopri </a>
                                    </Link>
                                </Carousel.Caption>

                            </Carousel.Item>

                            <Carousel.Item>
                                    <img src = {imgB3} alt="" />

                                <Carousel.Caption>
                                    <h3>La Battaglia di Stalingrado</h3>
                                    <p>Un punto di svolta nella Seconda Guerra Mondiale.</p>

                                    <Link>
                                        <a href = "#" className = "HomeAncore"> scopri </a>
                                    </Link>
                                </Carousel.Caption>
                            </Carousel.Item>

                            <Carousel.Item>
                                <img src = {imgB4} alt="" />

                                <Carousel.Caption>
                                    <h3>Battaglia di Midway</h3>
                                    <p>Decisiva battaglia nel Pacifico durante la Seconda Guerra Mondiale.</p>

                                    <Link>
                                        <a href = "#" className = "HomeAncore"> scopri </a>
                                    </Link>
                                </Carousel.Caption>
                            </Carousel.Item>

                            <Carousel.Item>
                                <img src = {imgB5} alt="" />

                                <Carousel.Caption>
`                                    <h3>Battaglia di Lepanto</h3>
                                    <p>Importante vittoria contro l'Impero Ottomano nel 1571.</p>

                                    <Link>
                                        <a href = "#" className = "HomeAncore"> scopri </a>
                                    </Link>
                                </Carousel.Caption>
                            </Carousel.Item>
                        </Carousel>
                </div>

                <div id = 'HomeDiv2'>
                    <p className = "HomeDivParagrafiDestra">
                        L'essere umano è il essere con il più alto potenziale per distruggere 💥, ma è anche l'essere con le capacità più alte di creare cose inimmaginabili 🎨. 
                        Le invenzioni 🛠️ nel corso dei millenni sono state così tante da essere impossibile da contare, poiché possono variare da piccole invenzioni quotidiane a scoperte che hanno influenzato profondamente la storia dell'uomo 📖. 
                        Diversi inventori 🚀 hanno camminato sulla stessa terra 🌎, tutti uniti dall'obiettivo di inventare, costruire, rinnovare o creare ✨. 
                        Anche senza saperlo, alcuni sono stati i pilastri della scienza antica 🧪. La scienza non fa differenza di dove o da chi viene fatta, ma ciò che conta è che si evolve grazie a tutte le invenzioni!
                        <Link>
                            <a href = "#" className = "HomeAncore">Vuoi scoprire quali di queste invenzioni hanno avuto un impatto così grande sulla storia dell'uomo e sulla scienza di oggi?</a>
                        </Link>        
                    </p>

                        <Carousel className = "HomeCaroselli">
                            <Carousel.Item>
                                    <img src = {imgI1} alt="" />

                                <Carousel.Caption>
                                    <h3>Invenzione della ruota</h3>
                                    <p>Una delle invenzioni più antiche e fondamentali.</p>

                                    <Link>
                                        <a href = "#" className = "HomeAncore"> scopri </a>
                                    </Link>
                                </Carousel.Caption>
                            </Carousel.Item>

                            <Carousel.Item>
                                    <img src = {imgI2} alt="" />

                                <Carousel.Caption>
                                    <h3>La stampa di Gutenberg</h3>
                                    <p>Ha rivoluzionato la diffusione della conoscenza.</p>

                                    <Link>
                                        <a href = "#" className = "HomeAncore"> scopri </a>
                                    </Link>
                                </Carousel.Caption>
                            </Carousel.Item>

                            <Carousel.Item>
                                    <img src = {imgI3} alt="" />

                                <Carousel.Caption>
                                    <h3>L'energia elettrica</h3>
                                    <p>Ha trasformato la società moderna.</p>

                                    <Link>
                                        <a href = "#" className = "HomeAncore"> scopri </a>
                                    </Link>
                                </Carousel.Caption>
                            </Carousel.Item>

                            <Carousel.Item>
                                <img src = {imgI4} alt="" />

                                <Carousel.Caption>
                                    <h3>Il telefono di Bell</h3>
                                    <p>Ha rivoluzionato le comunicazioni a lunga distanza.</p>

                                    <Link>
                                        <a href = "#" className = "HomeAncore"> scopri </a>
                                    </Link>
                                </Carousel.Caption>
                            </Carousel.Item>

                            <Carousel.Item>
                                <img src = {imgI5} alt="" />

                                <Carousel.Caption>
`                                   <h3>Il motore a combustione interna</h3>
                                    <p>Ha alimentato il trasporto moderno.</p>

                                    <Link>
                                        <a href = "#" className = "HomeAncore"> scopri </a>
                                    </Link>
                                </Carousel.Caption>
                            </Carousel.Item>
                        </Carousel>
                </div>

                <div id = 'HomeDiv3'>
                    <p className = "HomeDivParagrafiSinistra">
                        In ogni epoca 🕰️ le persone pensavano di vivere nell'epoca moderna, ma con il passare del tempo, man mano che la storia dell'uomo avanzava, si sono attribuiti nuovi nomi alle epoche passate 🏛️. 
                        Ogni epoca riceve il suo nome in base a eventi incredibili o invenzioni uniche. L'attuale epoca potrebbe essere solo una tappa, mentre le future potrebbero portare miglioramenti o sfide 🌅🌑. 
                        Tuttavia, come dimostra la storia 📚, anche nelle epoche più buie 🌑 emergono nuovi talenti 🎯 e invenzioni sorprendenti 🚀. È fondamentale continuare ad andare avanti, imparando dal passato e preparando il futuro 🌟.              
                        <Link>
                            <a href = "#" className = "HomeAncore">Vuoi scoprire quali epoche hanno segnato in modo indelebile la storia dell'uomo?</a>
                        </Link>           
                    </p>

                        <Carousel className = "HomeCaroselli">
                            <Carousel.Item>
                                    <img src = {imgE1} alt="" />

                                <Carousel.Caption>
                                    <h3>Epoca del Rinascimento</h3>
                                    <p>Fioritura artistica e culturale in Europa.</p>

                                    <Link>
                                        <a href = "#" className = "HomeAncore"> scopri </a>
                                    </Link>
                                </Carousel.Caption>
                            </Carousel.Item>

                            <Carousel.Item>
                                    <img src = {imgE2} alt="" />

                                <Carousel.Caption>
                                    <h3>Età Industriale</h3>
                                    <p>Inizio della produzione di massa e innovazioni tecnologiche.</p>

                                    <Link>
                                        <a href = "#" className = "HomeAncore"> scopri </a>
                                    </Link>
                                </Carousel.Caption>
                            </Carousel.Item>

                            <Carousel.Item>
                                    <img src = {imgE3} alt="" />

                                <Carousel.Caption>
                                    <h3>Era Digitale</h3>
                                    <p>La rivoluzione della tecnologia e dell'informazione.</p>

                                    <Link>
                                        <a href = "#" className = "HomeAncore"> scopri </a>
                                    </Link>
                                </Carousel.Caption>
                            </Carousel.Item>

                            <Carousel.Item>
                                <img src = {imgE4} alt="" />

                                <Carousel.Caption>
                                    <h3>Epoca dell'Antica Grecia</h3>
                                    <p>Origini della filosofia, della democrazia e della scienza.</p>

                                    <Link>
                                        <a href = "#" className = "HomeAncore"> scopri </a>
                                    </Link>
                                </Carousel.Caption>
                            </Carousel.Item>

                            <Carousel.Item>
                                <img src = {imgE5} alt="" />

                                <Carousel.Caption>
`                                   <h3>Impero Romano</h3>
                                    <p>Innovazioni in diritto, architettura e infrastrutture.</p>

                                    <Link>
                                        <a href = "#" className = "HomeAncore"> scopri </a>
                                    </Link>
                                </Carousel.Caption>
                            </Carousel.Item>
                        </Carousel>
                </div>

                <div id = 'HomeDiv4'>
                    <p className = "HomeDivParagrafiDestra">
                        Così come ci sono diversi continenti 🌎🌍🌏, anche la storia dell'uomo si dipana in modi unici e diversi a seconda delle regioni 🗺️. 
                        Ogni continente ha la sua propria storia 📝, ricca di culture, eventi e innovazioni che hanno contribuito a plasmare il mondo 🌍. 
                        Dalle grandi civiltà dell'Antico Egitto e della Cina 🏺, alle rivoluzioni e scoperte in Europa 🏰, alle tradizioni e sfide delle Americhe 🇺🇸🇧🇷, ogni continente ha il suo ruolo speciale nella grande narrazione dell'umanità 🌟. 
                        Comprendere la storia dell'uomo nei diversi continenti ci aiuta a vedere il quadro completo e a valorizzare la diversità e le connessioni tra le varie culture.      
                        <Link>
                            <a href = "#" className = "HomeAncore">Vuoi approfondire come i diversi continenti hanno contribuito a scrivere la storia dell'uomo?</a>
                        </Link>               
                    </p>

                    <div className = "HomeCaroselli">
                   
                    </div>
                </div>
            </section>

            {/** 
            <div>
                <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/MGOdJMNN2b0"
                title="YouTube video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                ></iframe>
            </div>*/}
        </>
    )
}

export default MainHome;
import { Link } from "react-router-dom";
import "react-multi-carousel/lib/styles.css";
import { useState, useEffect } from "react";

import img1 from '../img/immagine della via lattea.jpg'

// Immagini delle battaglie
import imgB1 from '../img/img (caroselli home)/battaglie/Battaglia di Hastings.jpeg'
import imgB2 from '../img/img (caroselli home)/battaglie/Battaglia di Waterloo.jpg'
import imgB3 from '../img/img (caroselli home)/battaglie/La Battaglia di Stalingrado.jpg'
import imgB4 from '../img/img (caroselli home)/battaglie/Battaglia di Midway.jpg'
import imgB5 from '../img/img (caroselli home)/battaglie/Battaglia di Lepanto.jpg'

// Immagini delle invenzioni
import imgI1 from '../img/img (caroselli home)/invenzioni/Invenzione della ruota.jpg'
import imgI2 from '../img/img (caroselli home)/invenzioni/La stampa di Gutenberg.jpg'
import imgI3 from "../img/img (caroselli home)/invenzioni/L'energia elettrica.jpeg"
import imgI4 from '../img/img (caroselli home)/invenzioni/Il telefono di Bell.jpeg'
import imgI5 from '../img/img (caroselli home)/invenzioni/Il motore a combustione interna.JPG'

// Immagini delle epoche
import imgE1 from '../img/img (caroselli home)/epoche/Epoca del Rinascimento.jpg'
import imgE2 from '../img/img (caroselli home)/epoche/Età Industriale.jpeg'
import imgE3 from '../img/img (caroselli home)/epoche/Era Digitale.jpg'
import imgE4 from "../img/img (caroselli home)/epoche/Epoca dell'Antica Grecia.avif"
import imgE5 from '../img/img (caroselli home)/epoche/Impero Romano.jpg'

const MainHome = () => {

    const [animateDiv1, setAnimateDiv1] = useState(true);
    const [animateCarosell1, setAnimateCarosell1] = useState(false);
    const [animateDiv2, setAnimateDiv2] = useState(true);
    const [animateCarosell2, setAnimateCarosell2] = useState(false);
    const [animateDiv3, setAnimateDiv3] = useState(true);
    const [animateCarosell3, setAnimateCarosell3] = useState(false);
    // Stato che traccia quale paragrafo è attualmente visibile
    const [currentParagraph, setCurrentParagraph] = useState(0);
    const totalParagraphs = 5;

  useEffect(() => {
    if (currentParagraph < totalParagraphs) {
      const timeoutId = setTimeout(() => {
        setCurrentParagraph(prev => prev + 1);
      }, 2000);
      return () => clearTimeout(timeoutId);
    }
  }, [currentParagraph]);

  const isParagraphVisible = (index) => {
    if (currentParagraph < totalParagraphs) {
      return index <= currentParagraph;
    } else {
      return true;
    }
  };

  const handleGiraPagina = (n) => {
    switch(n){
      case 1:
        setAnimateDiv1(prev => !prev);
        setAnimateCarosell1(prev => !prev);
      break;
      case 2:
        setAnimateDiv2(prev => !prev);
        setAnimateCarosell2(prev => !prev);
      break;
      case 3:
        setAnimateDiv3(prev => !prev);
        setAnimateCarosell3(prev => !prev);
      break;
    }
  };


  return (
    <>
      <section id = "section1">
        {/* Paragrafi */}
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

        {/* Sezione immagini */}
        <div id="group-img">
          <div id="slide-img-sinistra">
            <img src={img1} alt="immagine galassia via lattea" id="immagine1" />
            <img src={img1} alt="immagine galassia via lattea" id="immagine2" />
          </div>
          <div id="slide-img-destra">
            <img src={img1} alt="immagine galassia via lattea" id="immagine3" />
            <img src={img1} alt="immagine galassia via lattea" id="immagine4" />
          </div>
        </div>
      </section>

      <section id = "section2">
        <div id='HomeDiv1'>
          <div className={animateDiv1 ? "divVisible" : "d-none"}>

            <p className="HomeDivParagrafi">
              La storia dell'uomo è stata impregnata di battaglie ⚔️, spesso anche piccole battaglie possono decidere il destino di un paese. 
              Ma certe battaglie hanno influenzato profondamente la storia che conosciamo 📜. 
              Alcune erano prevedibili nella loro direzione, mentre altre non si poteva mai immaginare come sarebbe andata, rendendo difficile anche solo immaginare come sarebbe stata diversa la storia 🌟. 
              <Link>
                <a href="#" className="HomeAncore">Vuoi scoprire quali di queste battaglie hanno avuto un impatto così grande sulla storia dell'uomo?</a>
              </Link>
            </p>

            <button id="giraPagina" onClick = {() => handleGiraPagina(1)}>Pagina successiva</button>
          </div>

          <div className={animateCarosell1 ? "carousellVisible" : "d-none"}>
            <div className = "contenuto">
              <div className = "carrousel">
                <article className = "card">
                  <img src={imgB1} alt="" />
                  <h3>Battaglia di Hastings</h3>
                  <p>La conquista normanna dell'Inghilterra nel 1066.</p>
                  <Link>
                    <a href="#" className="HomeAncore"> scopri </a>
                  </Link>
                </article>

                <article className = "card">
                  <img src={imgB2} alt="" />
                  <h3>Battaglia di Waterloo</h3>
                  <p>La sconfitta di Napoleone nel 1815.</p>
                  <Link>
                    <a href="#" className="HomeAncore"> scopri </a>
                  </Link>
                </article>

                <article className = "card">
                  <img src={imgB3} alt="" />
                  <h3>La Battaglia di Stalingrado</h3>
                  <p>Un punto di svolta nella Seconda Guerra Mondiale.</p>
                  <Link>
                    <a href="#" className="HomeAncore"> scopri </a>
                  </Link>
                </article>

                <article className = "card">
                  <img src={imgB4} alt="" />
                  <h3>Battaglia di Midway</h3>
                  <p>Decisiva battaglia nel Pacifico durante la Seconda Guerra Mondiale.</p>
                  <Link>
                    <a href="#" className="HomeAncore"> scopri </a>
                  </Link>
                </article>

                <article className = "card">
                  <img src={imgB5} alt="" />
                  <h3>Battaglia di Lepanto</h3>
                  <p>Importante vittoria contro l'Impero Ottomano nel 1571.</p>
                  <Link>
                    <a href="#" className="HomeAncore"> scopri </a>
                  </Link>
                </article>
              </div>
            </div>

            <button id="giraPagina" onClick = {() => handleGiraPagina(1)}>Pagina precedente</button>
          </div>
        </div>
      </section>

      <section id = "section3">
        <div id='HomeDiv2'>
        
          <div className={animateDiv2 ? "divVisible" : "d-none"}>

            <p className="HomeDivParagrafi">
              L'essere umano è il essere con il più alto potenziale per distruggere 💥, ma è anche l'essere con le capacità più alte di creare cose inimmaginabili 🎨. 
              Le invenzioni 🛠️ nel corso dei millenni sono state così tante da essere impossibile da contare, poiché possono variare da piccole invenzioni quotidiane a scoperte che hanno influenzato profondamente la storia dell'uomo 📖. 
              Diversi inventori 🚀 hanno camminato sulla stessa terra 🌎, tutti uniti dall'obiettivo di inventare, costruire, rinnovare o creare ✨. 
              Anche senza saperlo, alcuni sono stati i pilastri della scienza antica 🧪. La scienza non fa differenza di dove o da chi viene fatta, ma ciò che conta è che si evolve grazie a tutte le invenzioni!
              <Link>
                <a href="#" className="HomeAncore">Vuoi scoprire quali di queste invenzioni hanno avuto un impatto così grande sulla storia dell'uomo e sulla scienza di oggi?</a>
              </Link>
            </p>

            <button id="giraPagina" onClick = {() => handleGiraPagina(2)}>Pagina sucessiva</button>
          </div>

          <div className={animateCarosell2 ? "carousellVisible" : "d-none"}>
            <div className = "contenuto">
              <div className = "carrousel">
                <article className = "card">
                  <img src={imgI1} alt="" />
                  <h3>Invenzione della ruota</h3>
                  <p>Una delle invenzioni più antiche e fondamentali.</p>
                  <Link>
                    <a href="#" className="HomeAncore"> scopri </a>
                  </Link>
                </article>

                <article className = "card">
                  <img src={imgI2} alt="" />
                  <h3>La stampa di Gutenberg</h3>
                  <p>Ha rivoluzionato la diffusione della conoscenza.</p>
                  <Link>
                    <a href="#" className="HomeAncore"> scopri </a>
                  </Link>
                </article>

                <article className = "card">
                  <img src={imgI3} alt="" />
                  <h3>L'energia elettrica</h3>
                  <p>Ha trasformato la società moderna.</p>
                  <Link>
                    <a href="#" className="HomeAncore"> scopri </a>
                  </Link>
                </article>

                <article className = "card">
                  <img src={imgI4} alt="" />
                  <h3>Il telefono di Bell</h3>
                  <p>Ha rivoluzionato le comunicazioni a lunga distanza.</p>
                  <Link>
                    <a href="#" className="HomeAncore"> scopri </a>
                  </Link>
                </article>

                <article className = "card">
                  <img src={imgI5} alt="" />
                  <h3>Il motore a combustione interna</h3>
                  <p>Ha alimentato il trasporto moderno.</p>
                  <Link>
                    <a href="#" className="HomeAncore"> scopri </a>
                  </Link>
                </article>
              </div>
            </div>

            <button id="giraPagina" onClick = {() => handleGiraPagina(2)}>Pagina precedente</button>
          </div>
        </div>
      </section>

      <section id = "section4">
        <div id='HomeDiv3'>
          
          <div className={animateDiv3 ? "divVisible" : "d-none"}>

            <p className="HomeDivParagrafi">
              In ogni epoca 🕰️ le persone pensavano di vivere nell'epoca moderna, ma con il passare del tempo, man mano che la storia dell'uomo avanzava, si sono attribuiti nuovi nomi alle epoche passate 🏛️. 
              Ogni epoca riceve il suo nome in base a eventi incredibili o invenzioni uniche. L'attuale epoca potrebbe essere solo una tappa, mentre le future potrebbero portare miglioramenti o sfide 🌅🌑. 
              Tuttavia, come dimostra la storia 📚, anche nelle epoche più buie 🌑 emergono nuovi talenti 🎯 e invenzioni sorprendenti 🚀. È fondamentale continuare ad andare avanti, imparando dal passato e preparando il futuro 🌟.              
              <Link>
                <a href="#" className="HomeAncore">Vuoi scoprire quali epoche hanno segnato in modo indelebile la storia dell'uomo?</a>
              </Link>
            </p>

            <button id="giraPagina" onClick = {() => handleGiraPagina(3)}>Pagina sucessiva</button>
          </div>

          <div className={animateCarosell3 ? "carousellVisible" : "d-none"}>
            <div className = "contenuto">
              <div className = "carrousel">
                <article className = "card">
                  <img src={imgE1} alt="" />
                  <h3>Epoca del Rinascimento</h3>
                  <p>Fioritura artistica e culturale in Europa.</p>
                  <Link>
                    <a href="#" className="HomeAncore"> scopri </a>
                  </Link>
                </article>

                <article className = "card">
                  <img src={imgE2} alt="" />
                  <h3>Età Industriale</h3>
                  <p>Inizio della produzione di massa e innovazioni tecnologiche.</p>
                  <Link>
                    <a href="#" className="HomeAncore"> scopri </a>
                  </Link>
                </article>

                <article className = "card">
                  <img src={imgE3} alt="" />
                  <h3>Era Digitale</h3>
                  <p>La rivoluzione della tecnologia e dell'informazione.</p>
                  <Link>
                    <a href="#" className="HomeAncore"> scopri </a>
                  </Link>
                </article>

                <article className = "card">
                  <img src={imgE4} alt="" />
                  <h3>Epoca dell'Antica Grecia</h3>
                  <p>Origini della filosofia, della democrazia e della scienza.</p>
                  <Link>
                    <a href="#" className="HomeAncore"> scopri </a>
                  </Link>
                </article>

                <article className = "card">
                  <img src={imgE5} alt="" />
                  <h3>Impero Romano</h3>
                  <p>Innovazioni in diritto, architettura e infrastrutture.</p>
                  <Link>
                    <a href="#" className="HomeAncore"> scopri </a>
                  </Link>
                </article>
              </div>
            </div>

            <button id="giraPagina" onClick = {() => handleGiraPagina(3)}>Pagina precedente</button>
          </div>
        </div>
      </section>

      {/* 
      <div id='HomeDiv4'>
        
        <div>
          <p className = "HomeDivParagrafi">
            Così come ci sono diversi continenti 🌎🌍🌏, anche la storia dell'uomo si dipana in modi unici e diversi a seconda delle regioni 🗺️. 
            Ogni continente ha la sua propria storia 📝, ricca di culture, eventi e innovazioni che hanno contribuito a plasmare il mondo 🌍. 
            Dalle grandi civiltà dell'Antico Egitto e della Cina 🏺, alle rivoluzioni e scoperte in Europa 🏰, alle tradizioni e sfide delle Americhe 🇺🇸🇧🇷, ogni continente ha il suo ruolo speciale nella grande narrazione dell'umanità 🌟. 
            Comprendere la storia dell'uomo nei diversi continenti ci aiuta a vedere il quadro completo e a valorizzare la diversità e le connessioni tra le varie culture.      
            <Link>
              <a href="#" className="HomeAncore">Vuoi approfondire come i diversi continenti hanno contribuito a scrivere la storia dell'uomo?</a>
            </Link>
          </p>
        </div>*/}
        {/* inserire in un secondo momento il carosello con i contenuti giusti 
      </div>*/}
    </>
  );
};

export default MainHome;
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

  const cards = [
    { id: 1, 
        img: {imgB1},
        title: 'Battaglia di Hastings', 
        content: "La conquista normanna dell'Inghilterra nel 1066." 
      },
    { id: 2, 
        img: {imgB2},
        title: 'Battaglia di Waterloo', 
        content: 'La sconfitta di Napoleone nel 1815.'
      },
    { id: 3, 
        img: {imgB3},
        title: 'La Battaglia di Stalingrado', 
        content: 'Un punto di svolta nella Seconda Guerra Mondiale.'
      },
    { id: 4, 
        img: {imgB4},
        title: 'Battaglia di Midway', 
        content: 'Decisiva battaglia nel Pacifico durante la Seconda Guerra Mondiale.'
      },
    { id: 5, 
        img: {imgB5},
        title: 'Battaglia di Lepanto', 
        content: "Importante vittoria contro l'Impero Ottomano nel 1571."
      },
  ];

const MainHome = () => {

    const [animateDiv, setAnimateDiv] = useState(true);
    const [animateCarosell, setAnimateCarosell] = useState(false);

    // Stato che traccia quale paragrafo è attualmente visibile
    const [currentParagraph, setCurrentParagraph] = useState(0);
    const totalParagraphs = 5;

    //variabili per i caroselli
    const [activeIndex, setActiveIndex] = useState (0)
    const totalCards = cards.length;

    // Per la barra di progresso del primo carosello
    //const progress = ((activeIndex1 + 1) / totalCards) * 100;

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

  const handleGiraPagina = () => {
    setAnimateDiv(prev => !prev);
    setAnimateCarosell(prev => !prev);
  };

  /*
  funzione da sistemare
  //funzione per avere la card attiva sempre al centro
  const getVisibleCards = () => {
    const visibleCards = [];
    const start = Math.max(0, activeIndex1 - 1);
    const end = Math.min(totalCards - 1, activeIndex1 + 1);
    
    for (let i = start; i <= end; i++) 
    {
      visibleCards.push(i);
    }
      return visibleCards;
  };

  //funzione per avere la card attiva sempre al centro
  const visibleIndices = getVisibleCards();
  */

  const goToNextOrPrev = (n, next) => {

    if(next === 'next')
    {
      setActiveIndex(prev => Math.min(prev + 1, totalCards - 1));
    }
    else
    {
      setActiveIndex(prev => Math.max(prev - 1, 0));
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
          <div className={animateDiv ? "divVisible" : "d-none"}>

            <p className="HomeDivParagrafi">
              La storia dell'uomo è stata impregnata di battaglie ⚔️, spesso anche piccole battaglie possono decidere il destino di un paese. 
              Ma certe battaglie hanno influenzato profondamente la storia che conosciamo 📜. 
              Alcune erano prevedibili nella loro direzione, mentre altre non si poteva mai immaginare come sarebbe andata, rendendo difficile anche solo immaginare come sarebbe stata diversa la storia 🌟. 

                <button className="HomeAncore">Vuoi scoprire quali di queste battaglie hanno avuto un impatto così grande sulla storia dell'uomo?</button>

            </p>

            <button id="giraPagina" onClick = {() => handleGiraPagina(1)}>Pagina successiva</button>
          </div>

          <div className={animateCarosell ? "carousellVisible" : "d-none"}>
                <div className="carousel-wrapper">

                  <button className="arrow" onClick = {() => goToNextOrPrev(1)}>&lt;</button>

                  <article className = "box">
                    <img src = {imgB2} alt = "copertina" />
                    <div className="card-wrapper">
                      {cards.map((card, index) => (
                        <div
                          key={card.id}
                          className={`card ${index === activeIndex ? 'activeCardCarousell' : 'hiddenCardCarousell'} `}
                        >
                          <h3>{card.title}</h3>
                          <p>{card.content}</p>

                            <Link>
                              <a href="#" className="HomeAncore"> scopri </a>
                            </Link>
                        </div>
                      ))}
                    </div>
                  </article>

                  <button className="arrow" onClick = {() => goToNextOrPrev(1, 'next')}>&gt;</button>
                </div>

              <button id="giraPagina" onClick = {() => handleGiraPagina(1)}>Pagina precedente</button>
          </div>
        </div>
      </section>
    </>
  );
};

export default MainHome;
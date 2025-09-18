import React, { useState } from 'react';

const Sperimento = () => {
  const [animationArticole1, setAnimationArticole1] = useState(false);
  const [animationArticole2, setAnimationArticole2] = useState(false);
  const [animationArticole3, setAnimationArticole3] = useState(false);
  const [isAnyActive, setIsAnyActive] = useState (false);

  const handleClickArticole = (n) => {

    if(n === 1)
    {
        setAnimationArticole1(true)
        setAnimationArticole2(false)
        setAnimationArticole3(false)
        setIsAnyActive(true)
    }
    else if(n === 2)
    {
        setAnimationArticole1(false)
        setAnimationArticole2(true)
        setAnimationArticole3(false)
        setIsAnyActive(true)
    }
    else if(n === 3)
    {
        setAnimationArticole1(false)
        setAnimationArticole2(false)
        setAnimationArticole3(true)
        setIsAnyActive(true)
    }
    else if(n === 4)
    {
        setAnimationArticole1(false)
        setAnimationArticole2(false)
        setAnimationArticole3(false)
        setIsAnyActive(false)
    }
  };

  return (
    <>
      <article id="contenutoSperimento">
        <div className = {isAnyActive ? 'd-none' : 'sezionePrincipale'}>
          <h4>L'essere umano puo essere molto di piu di quello che sembra!</h4>
          <p>
            Di storie ce ne sono di diverse salse, tra cui Invenzioni, Continenti, Cultura e molto altro,
            nel mondo ci sono milliardi di umani, ma di storie c'e' ne sono molte di piu,
            vuoi scoprire quale altre storie e versioni ci sono?
          </p>
        </div>

        <section id = {isAnyActive ? 'multiSezioneActive' : 'multiSezione'}>
          <div className = {animationArticole1 ? 'articoloActive' : 'articoli'} id = "articolo1">
            <h5>Invenzioni</h5>
            <button onClick={() => handleClickArticole(1)}>Dettagli</button>
            <button onClick={() => handleClickArticole(4)}>indietro</button>
          </div>
          <div className = {animationArticole2 ? 'articoloActive' : 'articoli'} id = "articolo2">
            <h5>Continenti</h5>
            <button onClick={() => handleClickArticole(2)}>Dettagli</button>
            <button onClick={() => handleClickArticole(4)}>indietro</button>
          </div>
          <div className = {animationArticole3 ? 'articoloActive' : 'articoli'} id = "articolo3">
            <h5>Epoche</h5>
            <button onClick={() => handleClickArticole(3)}>Dettagli</button>
            <button onClick={() => handleClickArticole(4)}>indietro</button>
          </div>
        </section>
      </article>
    </>
  );
};

export default Sperimento;
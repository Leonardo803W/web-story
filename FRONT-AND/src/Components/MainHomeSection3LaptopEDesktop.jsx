import React, { useState } from 'react';

const MainHomeSection3LaptopEDesktop = () => {
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
      <article id = "section3LaptopEDesktop">
        <div className = {isAnyActive ? 'divSection3LaptopEDesktopActive' : 'divSection3LaptopEDesktop'}>
          <div className=' position-absolute'>
            <h4>La storia umana puo essere molto di piu di quello che sembra!</h4>
            <p>
              Di storie ce ne sono di diverse salse, tra cui Invenzioni, Continenti, Cultura e molto altro,
              nel mondo ci sono milliardi di umani, ma di storie c'e' ne sono molte di piu,
              vuoi scoprire quale altre storie e versioni ci sono?
            </p>
          </div>
        </div>

        <section id = {isAnyActive ? 'multiSezioneLaptopEDesktopActive' : 'multiSezioneLaptopEDesktop'}>
          <div className = {animationArticole1 ? 'articoloLaptopEDesktopActive' : 'articoliLaptopEDesktop'} id = "articoloLaptopEDesktop1">
            <h5 className = {animationArticole1 ? 'articoloTitleLaptopEDesktopActive' : 'articoloTitleLaptopEDesktop'}>Invenzioni</h5>
            <p className = {animationArticole1 ? 'articoloContenutoLaptopEDesktopActive' : 'articoloContenutoLaptopEDesktop'}>Le invenzioni sono il fulcro del progresso, vuoi sapere quali invenzioni sono state fatte?</p>
            <button onClick={() => handleClickArticole(1)} className = {animationArticole1 ? 'd-none' : 'articoloButtonLaptopEDesktop'}>Dettagli</button>
            <button onClick={() => handleClickArticole(4)} className = {animationArticole1 ? 'articoloButtonLaptopEDesktopActive' : 'd-none'}>indietro</button>
          </div>
          <div className = {animationArticole2 ? 'articoloLaptopEDesktopActive' : 'articoliLaptopEDesktop'} id = "articoloLaptopEDesktop2">
            <h5 className = {animationArticole2 ? 'articoloTitleLaptopEDesktopActive' : 'articoloTitleLaptopEDesktop'}>Continenti</h5>
            <p className = {animationArticole2 ? 'articoloContenutoLaptopEDesktopActive' : 'articoloContenutoLaptopEDesktop'}>I continenti non sono altro che le piu grandi montagne vivibili della terra, ma ogni continente ha la sua di storia!</p>
            <button onClick={() => handleClickArticole(2)} className = {animationArticole2 ? 'd-none' : 'articoloButtonLaptopEDesktop'}>Dettagli</button>
            <button onClick={() => handleClickArticole(4)} className = {animationArticole2 ? 'articoloButtonLaptopEDesktopActive' : 'd-none'}>indietro</button>
          </div>
          <div className = {animationArticole3 ? 'articoloLaptopEDesktopActive' : 'articoliLaptopEDesktop'} id = "articoloLaptopEDesktop3">
            <h5 className = {animationArticole3 ? 'articoloTitleLaptopEDesktopLaptopEDesktopActive' : 'articoloTitle'}>Epoche</h5>
            <p className = {animationArticole3 ? 'articoloContenutoLaptopEDesktopActive' : 'articoloContenutoLaptopEDesktop'}>Di epoche ne sono passate assai, in cui in ognuna la gente pensava di essere moderna, tu sai quale che epoca siamo in questo momento?</p>
            <button onClick={() => handleClickArticole(3)} className = {animationArticole3 ? 'd-none' : 'articoloButtonLaptopEDesktop'}>Dettagli</button>
            <button onClick={() => handleClickArticole(4)} className = {animationArticole3 ? 'articoloButtonLaptopEDesktopActive' : 'd-none'}>indietro</button>
          </div>
        </section>
      </article>
    </>
  );
}

export default MainHomeSection3LaptopEDesktop;
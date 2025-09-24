import { useState } from 'react';
import imgDivulgatori from '../img/divulgatori/alessandro barbero.webp'

const MainHomeSection3TelefonoETablet = () => {

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
      <article id = "Section3TelefonoETablet">

        <section id = {isAnyActive ? 'contenitoreActive' : 'contenitore'}>
          <div className = {animationArticole1 ? 'articoliTelefonoETabletActive' : 'articoliTelefonoETablet'} id = "articoloTelefonoETablet1">
            <div className = {animationArticole1 ? 'articoloIntroTelefonoETabletActive' : 'articoloIntroTelefonoETablet'}>
                <h5 className = {animationArticole1 ? 'articoloTitleTelefonoETabletActive' : 'articoloTitleTelefonoETablet'}>Invenzioni</h5>
                <button onClick={() => handleClickArticole(1)} className = {animationArticole1 ? 'd-none' : 'articoloButtonTelefonoETablet'}>Dettagli</button>
            </div>
            <p className = {animationArticole1 ? 'articoloTestoTelefonoETabletActive' : 'd-none'}>Di epoche ne sono passate assai, in cui in ognuna la gente pensava di essere moderna, tu sai quale che epoca siamo in questo momento?</p>
            <div className = {animationArticole1 ? 'articoloTelefonoETabletGroupButtonActive' : 'd-none'}>
                <button onClick={() => handleClickArticole(4)} className = {animationArticole1 ? 'singoloButtonTelefonoETablet' : 'd-none'}>indietro</button>
                <button className = {animationArticole1 ? 'singoloButtonTelefonoETablet' : 'd-none'}>Scopri</button>
            </div>          
          </div>

          <div className = {animationArticole2 ? 'articoliTelefonoETabletActive' : 'articoliTelefonoETablet'} id = "articoloTelefonoETablet2">
            <div className = {animationArticole2 ? 'articoloIntroTelefonoETabletActive' : 'articoloIntroTelefonoETablet'}>
                <h5 className = {animationArticole2 ? 'articoloTitleTelefonoETabletActive' : 'articoloTitleTelefonoETablet'}>Continenti</h5>
                <button onClick={() => handleClickArticole(2)} className = {animationArticole2 ? 'd-none' : 'articoloButtonTelefonoETablet'}>Dettagli</button>
            </div>
            <p className = {animationArticole2 ? 'articoloTestoTelefonoETabletActive' : 'd-none'}>Di epoche ne sono passate assai, in cui in ognuna la gente pensava di essere moderna, tu sai quale che epoca siamo in questo momento?</p>
            <div className = {animationArticole2 ? 'articoloTelefonoETabletGroupButtonActive' : 'd-none'}>
                <button onClick={() => handleClickArticole(4)} className = {animationArticole2 ? 'singoloButtonTelefonoETablet' : 'd-none'}>indietro</button>
                <button className = {animationArticole2 ? 'singoloButtonTelefonoETablet' : 'd-none'}>Scopri</button>
            </div>
          </div>

          <div className = {animationArticole3 ? 'articoliTelefonoETabletActive' : 'articoliTelefonoETablet'} id = "articoloTelefonoETablet3">
            <div className = {animationArticole3 ? 'articoloIntroTelefonoETabletActive' : 'articoloIntroTelefonoETablet'}>
                <h5 className = {animationArticole3 ? 'articoloTitleTelefonoETabletActive' : 'articoloTitleTelefonoETablet'}>Epoche</h5>
                <button onClick={() => handleClickArticole(3)} className = {animationArticole3 ? 'd-none' : 'articoloButtonTelefonoETablet'}>Dettagli</button>
            </div>
            <p className = {animationArticole3 ? 'articoloTestoTelefonoETabletActive' : 'd-none'}>Di epoche ne sono passate assai, in cui in ognuna la gente pensava di essere moderna, tu sai quale che epoca siamo in questo momento?</p>
            <div className = {animationArticole3 ? 'articoloTelefonoETabletGroupButtonActive' : 'd-none'}>
                <button onClick={() => handleClickArticole(4)} className = {animationArticole3 ? 'singoloButtonTelefonoETablet' : 'd-none'}>indietro</button>
                <button className = {animationArticole3 ? 'singoloButtonTelefonoETablet' : 'd-none'}>Scopri</button>
            </div>
          </div>
        </section>

                <div className = {isAnyActive ? 'divSection3TelefonoETabletActive' : 'divSection3TelefonoETablet'}>
          <h4 className = 'divSection3TelefonoETabletH4'>La storia umana puo essere molto di piu di quello che sembra!</h4>
          <p className = 'divSection3TelefonoETabletP'>
            Di storie ce ne sono di diverse salse, tra cui Invenzioni, Continenti, Cultura e molto altro,
            nel mondo ci sono milliardi di umani, ma di storie c'e' ne sono molte di piu,
            vuoi scoprire quale altre storie e versioni ci sono?
          </p>
        </div>
        
      </article>
    </>
  );
}

export default MainHomeSection3TelefonoETablet;
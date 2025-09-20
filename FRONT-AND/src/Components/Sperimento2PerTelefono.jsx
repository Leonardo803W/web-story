import { useState } from 'react';
import imgDivulgatori from '../img/divulgatori/alessandro barbero.webp'

const Sperimento2PerTelefono = () => {

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
      <article id="contenutoSperimentotelefono">
        <div className = {isAnyActive ? 'sezionePrincipaletelefonoActive' : 'sezionePrincipaletelefono'}>
          <h4>La storia umana puo essere molto di piu di quello che sembra!</h4>
          <p>
            Di storie ce ne sono di diverse salse, tra cui Invenzioni, Continenti, Cultura e molto altro,
            nel mondo ci sono milliardi di umani, ma di storie c'e' ne sono molte di piu,
            vuoi scoprire quale altre storie e versioni ci sono?
          </p>
        </div>

        <section id = 'multiSezioneTelefono'>
          <div className = {animationArticole1 ? 'articoliTelefonoActive' : 'articoliTelefono'} id = "articolo1">
            <div className = {animationArticole1 ? 'articoloIntroActive' : 'articoloIntro'}>
                <h5 className = {animationArticole1 ? 'articoloTitleTelefonoActive' : 'articoloTitleTelefono'}>Invenzioni</h5>
                <button onClick={() => handleClickArticole(1)} className = {animationArticole1 ? 'd-none' : 'articoloButtonTelefono'}>Dettagli</button>
            </div>
            <p className = {animationArticole1 ? 'articoloTestoTelefonoActive' : 'd-none'}>Di epoche ne sono passate assai, in cui in ognuna la gente pensava di essere moderna, tu sai quale che epoca siamo in questo momento?</p>
            <div className = {animationArticole1 ? 'articoloTelefonoGroupButtonActive' : 'd-none'}>
                <button onClick={() => handleClickArticole(4)} className = {animationArticole1 ? 'singoloButtonTelefono' : 'd-none'}>indietro</button>
                <button className = {animationArticole1 ? 'singoloButtonTelefono' : 'd-none'}>Scopri</button>
            </div>          
        </div>

          <div className = {animationArticole2 ? 'articoliTelefonoActive' : 'articoliTelefono'} id = "articolo2">
            <div className = {animationArticole2 ? 'articoloIntroActive' : 'articoloIntro'}>
                <h5 className = {animationArticole2 ? 'articoloTitleTelefonoActive' : 'articoloTitleTelefono'}>Continenti</h5>
                <button onClick={() => handleClickArticole(2)} className = {animationArticole2 ? 'd-none' : 'articoloButtonTelefono'}>Dettagli</button>
            </div>
            <p className = {animationArticole2 ? 'articoloTestoTelefonoActive' : 'd-none'}>Di epoche ne sono passate assai, in cui in ognuna la gente pensava di essere moderna, tu sai quale che epoca siamo in questo momento?</p>
            <div className = {animationArticole2 ? 'articoloTelefonoGroupButtonActive' : 'd-none'}>
                <button onClick={() => handleClickArticole(4)} className = {animationArticole2 ? 'singoloButtonTelefono' : 'd-none'}>indietro</button>
                <button className = {animationArticole2 ? 'singoloButtonTelefono' : 'd-none'}>Scopri</button>
            </div>
          </div>

          <div className = {animationArticole3 ? 'articoliTelefonoActive' : 'articoliTelefono'} id = "articolo3">
            <div className = {animationArticole3 ? 'articoloIntroActive' : 'articoloIntro'}>
                <h5 className = {animationArticole3 ? 'articoloTitleTelefonoActive' : 'articoloTitleTelefono'}>Epoche</h5>
                <button onClick={() => handleClickArticole(3)} className = {animationArticole3 ? 'd-none' : 'articoloButtonTelefono'}>Dettagli</button>
            </div>
            <p className = {animationArticole3 ? 'articoloTestoTelefonoActive' : 'd-none'}>Di epoche ne sono passate assai, in cui in ognuna la gente pensava di essere moderna, tu sai quale che epoca siamo in questo momento?</p>
            <div className = {animationArticole3 ? 'articoloTelefonoGroupButtonActive' : 'd-none'}>
                <button onClick={() => handleClickArticole(4)} className = {animationArticole3 ? 'singoloButtonTelefono' : 'd-none'}>indietro</button>
                <button className = {animationArticole3 ? 'singoloButtonTelefono' : 'd-none'}>Scopri</button>
            </div>
          </div>
        </section>
      </article>
    </>
  );
}

export default Sperimento2PerTelefono;
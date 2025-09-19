import imgDivulgatori from '../img/divulgatori/alessandro barbero.webp'

const Sperimento2 = () => {

    return(
        <>
        <section id = 'section3'>
                <div id = 'introDivulgatori'>
                    <p id = 'introDivulgatoriParagrafo'>
                            La storia non sarebbe mai conosciuta se non fosse grazie a chi la divulga,
                            di divulgatori ve ne sono diversi, ognuno con le proprie abilita e competenze!                        
                    </p>

                    <button id = 'introButtonDivulgatori'>clicc qui per vederne altri!</button>
                </div>
                
                <section id = 'groupCardDivulgatori'>



                    <div className = "card">
                        <img src = {imgDivulgatori} alt="" className = 'cardImage'/>
                        <hr className=' m-1 text-light'/>
                        <div className = 'groupContent'>
                            <h5 className = 'title'>Alessandro Barbero</h5>
                            <p className = 'description'>Un divulgatore molto noto e altrettanto adorato dai spettatori</p>
                            <button className = 'cardButton'>scopri di piu</button>
                        </div>
                    </div>

                    <div className = "card">
                        <img src = {imgDivulgatori} alt="" className = 'cardImage'/>
                        <hr className=' m-1 text-light'/>
                        <div className = 'groupContent'>
                            <h5 className = 'title'>Alessandro Barbero</h5>
                            <p className = 'description'>Un divulgatore molto noto e altrettanto adorato dai spettatori</p>
                            <button className = 'cardButton'>scopri di piu</button>
                        </div>
                    </div>

                    <div className = "card">
                        <img src = {imgDivulgatori} alt="" className = 'cardImage'/>
                        <hr className=' m-1 text-light'/>
                        <div className = 'groupContent'>
                            <h5 className = 'title'>Alessandro Barbero</h5>
                            <p className = 'description'>Un divulgatore molto noto e altrettanto adorato dai spettatori</p>
                            <button className = 'cardButton'>scopri di piu</button>
                        </div>
                    </div>

                    <div className = "card">
                        <img src = {imgDivulgatori} alt="" className = 'cardImage'/>
                        <hr className=' m-1 text-light'/>
                        <div className = 'groupContent'>
                            <h5 className = 'title'>Alessandro Barbero</h5>
                            <p className = 'description'>Un divulgatore molto noto e altrettanto adorato dai spettatori</p>
                            <button className = 'cardButton'>scopri di piu</button>
                        </div>
                    </div>
                </section>
            </section>
        </>
    )
}

export default Sperimento2;
import imgDivulgatori1 from '../img/divulgatori/alessandro barbero.webp'
import imgDivulgatori2 from '../img/divulgatori/roberto-giacobbo.jpg'
import imgDivulgatori3 from '../img/divulgatori/ulisse-il-piacere-della-scoperta-alberto-angela-rai1-1.jpg'
const MainHomeSection4 = () => {

    return(
        <>
            <section id = 'section4'>
                <div className = 'p-3'>
                    <p id = 'introDivulgatori'>
                            La storia non sarebbe mai conosciuta se non fosse grazie a chi la divulga,
                            di divulgatori ve ne sono diversi, ognuno con le proprie abilita e competenze!                        
                    </p>                    
                </div>

                <section id = 'groupCardDivulgatori'>



                    <div className = "card">
                        <img src = {imgDivulgatori1} alt="" className = 'cardImage'/>
                        <hr className=' m-1 text-light'/>
                        <div className = 'groupContent'>
                            <h5>Alessandro Barbero</h5>
                            <p>Un divulgatore molto noto e altrettanto adorato dai spettatori</p>
                        </div>

                        <button className = 'cardButton'>scopri di piu</button>
                    </div>

                    <div className = "card">
                        <img src = {imgDivulgatori2} alt="" className = 'cardImage'/>
                        <hr className=' m-1 text-light'/>
                        <div className = 'groupContent'>
                            <h5>Roberto Giacobbo</h5>
                            <p>Un divulgatore molto noto e altrettanto adorato dai spettatori</p>
                        </div>

                        <button className = 'cardButton'>scopri di piu</button>
                    </div>

                    <div className = "card">
                        <img src = {imgDivulgatori3} alt="" className = 'cardImage'/>
                        <hr className=' m-1 text-light'/>
                        <div className = 'groupContent'>
                            <h5>Alberto Angela</h5>
                            <p>Un divulgatore molto noto e altrettanto adorato dai spettatori</p>
                        </div>

                        <button className = 'cardButton'>scopri di piu</button>
                    </div>
                </section>

                <button id = 'introButtonDivulgatori'>clicc qui per vederne altri!</button>
            </section>
        </>
    )
}

export default MainHomeSection4;
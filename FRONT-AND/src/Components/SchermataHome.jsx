import { Link } from "react-router-dom";
import GlobalNavbar from "./GlobalNavbar";
import MainHome from "./MainHome";
import Sperimento from "./Sperimento";
import Sperimento2 from "./Sperimento2";


//schermata principale iniziale

const SchermataHome = () => {
    
    return (
        <>
            <header>
                <GlobalNavbar/>
            </header>

            <main>
                <MainHome/>
                {/*per poter lavorare i vari componenti per poi aggiungerli in modo definitivo*/}
                <Sperimento/>
                <Sperimento2/>
            </main>

            <footer>

            </footer>
        </>
    )
}

export default SchermataHome;
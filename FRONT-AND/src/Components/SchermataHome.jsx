import { Link } from "react-router-dom";
import GlobalNavbar from "./GlobalNavbar";
import MainHome from "./MainHome";


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

            </main>

            <footer>

            </footer>
        </>
    )
}

export default SchermataHome;
import GlobalNavbar from "./GlobalNavbar";
import MainHomeSection1 from "./MainHomeSection1";
import MainHomeSection2 from "./MainHomeSection2";
import MainHomeSection3LaptopEDesktop from "./MainHomeSection3LaptopEDesktop";
import MainHomeSection3TelefonoETablet from "./MainHomeSection3TelefonoETablet";
import MainHomeSection4 from "./MainHomeSection4";

//schermata principale iniziale

const SchermataHome = () => {
    
    return (
        <>
            <header>
                <GlobalNavbar/>
            </header>

            <main>
                <MainHomeSection1/>
                <hr className = "spaziatoriHomeMain"/>
                <MainHomeSection2/>
                <hr className = "spaziatoriHomeMain"/>
                <MainHomeSection3TelefonoETablet/>
                <MainHomeSection3LaptopEDesktop/>
                <hr className = "spaziatoriHomeMain"/>
                <MainHomeSection4/>
                <hr className = "spaziatoriHomeMain"/>
            </main>

            <footer>
            </footer>
        </>
    )
}

export default SchermataHome;






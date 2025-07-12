import { Link } from "react-router-dom"

const ComponenteSingolo = () => {


    return(
        <>
            {/*per tonrare nell'home  */}
            <Link to = '/'>
                <button>torna in home</button>
            </Link>
                            <Link to = 'inLavorazione'>
                    <button>per guardare il componente singolo</button>
                </Link>
        </>
    )
}

export default ComponenteSingolo;
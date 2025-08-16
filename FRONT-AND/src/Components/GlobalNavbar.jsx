import { Link } from "react-router-dom";
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';

const GlobalNavbar = () => {
    
  //inizializzazione variabili
  const [show, setShow] = useState(false);
  const [showProfile, setShowProfile] = useState(false);

  //funzioni
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleProfile = () => {
    
    setShowProfile(prevState => !prevState);
  }

  return (
    <>
        <section id = "sectiopnNavbar">
          <div id = "navbar">
            <Button onClick={handleShow} id = "show-on-mobile">
              <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="black" class="bi bi-list" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/>
              </svg>
            </Button>

            <Link to = {'/'} className = "text-decoration-none">
              <h1 id = "title">Storia sul Web</h1>
            </Link>

            <div id = "navbar-item-desktop">
              <p className = "enter">
                <Link to = 'SchermataBattaglie'>Battaglie</Link>
              </p>
              <p className = "notEnter">
                <Link to = "#">Invenzioni</Link>
              </p>
              <p className = "notEnter">
                <Link to = "#">Epoche</Link>
              </p>
              <p className = "notEnter">
                <Link to = "#">Continenti</Link>
              </p>
            </div>

            <div onClick={handleProfile} id = "navbar-profile">
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="black" class="bi bi-person-circle" viewBox="0 0 16 16">
                  <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0"/>
                  <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"/>
                </svg>

                {showProfile &&
                  <div id = "profile-items">
                    <p>Impostazioni</p>
                    <p>Profilo</p>
                    <hr />
                    <p>Log In</p>
                  </div>
                }
            </div>
          </div>
        </section>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton id = "offCansHeader">
          <Offcanvas.Title>Sezioni disponibili:</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body id = "offCanvsBody">
            <p>
              <Link to = 'SchermataBattaglie'>Battaglie</Link>
            </p>

            <p>
              <Link to = "#">Invenzioni</Link>
            </p>
        </Offcanvas.Body>
      </Offcanvas>

    </>
  );
};

export default GlobalNavbar;     

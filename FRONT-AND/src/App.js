import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import SchermataHome from './Components/SchermataHome';
import ComponenteSingolo from './Components/ComponenteSingolo';

function App() {

  return (
    <div className="App">

      <BrowserRouter>
        <Routes>
          <Route path = '/' element = {<SchermataHome />} />
          <Route path = 'inLavorazione' element = {<ComponenteSingolo />} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;

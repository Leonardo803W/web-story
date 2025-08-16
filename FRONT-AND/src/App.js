import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import SchermataBattaglie from './Components/SchermataBattaglie';
import SchermataHome from './Components/SchermataHome';

function App() {

  return (
    <div className="App">

      <BrowserRouter>
        <Routes>
          <Route path = '/' element = {<SchermataHome />} />
          
          <Route path = 'SchermataBattaglie' element = {<SchermataBattaglie />} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;

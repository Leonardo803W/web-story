import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import SchermataHome from './Components/SchermataHome';

function App() {

  return (
    <div className="App">

      <BrowserRouter>
        <Routes>
          <Route path = '/' element = {<SchermataHome />} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;

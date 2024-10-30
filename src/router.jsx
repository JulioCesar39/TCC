import {BrowserRouter, Routes, Route} from 'react-router-dom';

import App from './pages/home/App';
import Servicos from './pages/servicos';
import NaoEncontrado from './pages/naoEncotrado';

export default function Navegacao () {


    return (
        <BrowserRouter>
        <Routes>
          <Route path='/' element={<App/>} />
          <Route path='/servicos' element={<Servicos />} />

          <Route path='*' element={< NaoEncontrado/>} />
        </Routes>
        </BrowserRouter>
    )
}
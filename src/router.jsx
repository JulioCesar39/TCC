import {BrowserRouter, Routes, Route} from 'react-router-dom';

import App from './pages/home/App';
import ServicosDeOrientacaoVocacional from './pages/servicosDeOrientacaoVocacional';
import ServicosDeOrientacaoProfissional from './pages/servicosDeOrientacaoProfissional';
import ServicosPsicoterapiaIndividual from './pages/servicosPsicoterapiaIndividual';
import Portfolio from './pages/portifolio';
import NaoEncontrado from './pages/naoEncotrado';
import Agendamento from './pages/agendamento';


export default function Navegacao () {


    return (
        <BrowserRouter>
        <Routes>
          <Route path='/' element={<App/>} />
          <Route path='/servicosDeOrientacaoVocacional' element={<ServicosDeOrientacaoVocacional/>} />
          <Route path='/servicosDeOrientacaoProfissional' element={<ServicosDeOrientacaoProfissional/>} />
          <Route path='/servicosPsicoterapiaIndividual' element={<ServicosPsicoterapiaIndividual/>} />
          <Route path='/portifolio' element={<Portfolio />} />
          <Route path='/agendamento' element={<Agendamento />} />
       

          <Route path='*' element={< NaoEncontrado/>} />
        </Routes>
        </BrowserRouter>
    )
}
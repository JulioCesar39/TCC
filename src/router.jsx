import {BrowserRouter, Routes, Route} from 'react-router-dom';

import App from './pages/home/App';
import ServicosDeOrientacaoVocacional from './pages/servicosDeOrientacaoVocacional';
import ServicosDeOrientacaoProfissional from './pages/servicosDeOrientacaoProfissional';
import ServicosPsicoterapiaIndividual from './servicosPsicoterapiaIndividual';
import Portfolio from './pages/portfolio';
import NaoEncontrado from './pages/naoEncotrado';

export default function Navegacao () {


    return (
        <BrowserRouter>
        <Routes>
          <Route path='/' element={<App/>} />
          <Route path='/pages/servicosDeOrientacaoVocacional' element={<ServicosDeOrientacaoVocacional/>} />
          <Route path='/pages/servicosDeOrientacaoProfissional' element={<ServicosDeOrientacaoProfissional/>} />
          <Route path='/pages/servicosPsicoterapiaIndividual' element={<ServicosPsicoterapiaIndividual/>} />
          <Route path='/portfolio' element={<Portfolio />} />

          <Route path='*' element={< NaoEncontrado/>} />
        </Routes>
        </BrowserRouter>
    )
}
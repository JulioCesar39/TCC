import './App.scss';
import { Link } from 'react-router-dom';

import Cabecalho from '../../components/cabecalho';

export default function App() {
  

  return (
    <div className="pagina-inicial">
   <Cabecalho />
      <div className='texto'>
         <h1>Seja Bem-vindo a Psicolari!!</h1> 
         <h2>Auto-amor e transformação</h2>
      </div>

      <div className='ppp'>
       <p>"Transforme sua mente, transforme sua vida. O autoconhecimento é o primeiro passo para a verdadeira liberdade emocional."</p>
      </div>

    </div>

  );
}



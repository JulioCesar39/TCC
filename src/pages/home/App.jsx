import './App.scss';
import { Link } from 'react-router-dom';

import Cabecalho from '../../components/cabecalho';

export default function App() {
  

  return (
    <div className="pagina-inicial">
   <Cabecalho />
      <div className='conteudo'>
      
        <h1>CUIDAR DA MENTE É <br /> TRANSFORMAR A VIDA</h1>
        <img src="./assets/image/Fundohome.png" alt="" />
        <div className='login'>
          <a href="/login">LOGIN</a>
        </div>
        <div className='cadastra'>
          <a href="?">CADASTRAR-SE</a>
        </div>

      </div>

    </div>

  );
}



import './App.scss';
import { Link } from 'react-router-dom';

export default function App() {
  return (
    <div className="pagina-inicial">
      <header className="cabeçalho">
       <img src="./assets/image/logo.png" alt="logo" />
       <nav className='navegacao'>
        <li><Link to={'contato'}>CONTATO</Link></li>
        <li><Link to={'/agendamento'}>AGENDAMENTO</Link></li>
        <li><Link to={'/servicos'}>SERVIÇOS</Link></li>
        <li><Link to={'/portifolio'}>PORTIFÓLIO</Link> </li>

        <img src="./assets/image/menu.png" alt="" />
       </nav>
      
     
    
      </header>
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



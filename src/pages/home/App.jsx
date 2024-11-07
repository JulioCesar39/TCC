import './App.scss';
import { Link } from 'react-router-dom';

export default function App() {
  return (
    <div className="pagina-inicial">
      <header className="cabeçalho">
        <img src="./assets/image/logo.png" alt="logo" className="logo" />
        <nav className="menu-opcoes">
          <li><Link to={'/'}>CONTATO</Link></li>
          <li><Link>AGENDAMENTO</Link></li>
          <li><Link>PORTFÓLIO</Link></li>
          <li><Link>SERVIÇOS</Link></li>
        </nav>
        <div className="menu-icone">
          <img src="./assets/image/menu.png" alt="menu" />
        </div>



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



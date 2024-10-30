import './App.scss';

import { Link } from 'react-router-dom';

export default function App() {
  return (
    <div className="pagina-inicial">
      <header className="cabeçalho">
       <img src="./assets/image/logo.png" alt="logo" />
       <nav>
        <li>CONTATO</li>
        <li>AGENDAMENTO</li>
        <li><Link to={'./servicos'}>SERVIÇOS</Link></li>
        <li>PORTFÓLIO</li>
       </nav>
      <div className='menu'>
      <img src="./assets/image/menu.png" alt="" />
      </div>
      </header>
      <div className='conteudo'>
       <img src="./assets/image/Fundohome.png" alt="" />
     <div className='login'>
     <a href="?"><button>LOGIN</button></a>
     </div>
    
    <div className='cadastra'>
    <a href="?"><button>cadastrar-se</button></a>
      </div>


      </div>
    
    </div>
    
  );
}



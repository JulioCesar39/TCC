import './index.scss';

import { Link } from 'react-router-dom';


export default function ServicosDeOrientacaoProfissional() {


  return (

    <div className="pagina-servico">
      <header className="cabeçalho">
        <img src="./assets/image/logo.png" alt="logo" className="logo" />
        <nav className="menu-opcoes">
          <li><Link to={'/'}>HOME</Link></li>
          <li><Link>CONTATO</Link></li>
          <li><Link>AGENDAMENTO</Link></li>
          <li><Link>PORTFÓLIO</Link></li>
        </nav>
        <div className="menu-icone">
          <img src="./assets/image/menu.png" alt="menu" />
        </div>
      </header>

      <div className='container'>

        <img src="/assets/image/fundo-azul.png" alt="" />

        <h1 classname='titulo'>serviços de orientação vocacional</h1>

        <main className="content">

          <div className='card'>
            <p>Os serviços de orientação profissional ajudam indivíduos a tomar decisões sobre suas carreiras, identificando interesses, habilidades e valores. Por meio de testes vocacionais e consultas individuais, esses serviços oferecem suporte na escolha de cursos, estágios e empregos. Além disso, ajudam na elaboração de currículos e na preparação para entrevistas. O objetivo é capacitar os clientes a fazer escolhas informadas e satisfatórias, promovendo seu desenvolvimento pessoal e profissional.
            </p>
          </div>
          <div className="card1">
            <h3>Dr. Larissa de Jesus</h3>
            <ul>
              <li>Consulta Online</li>
              <li>Consulta Presencial</li>
              <li>1ª Consulta - Valor de R$130,00</li>
            </ul>
          </div>
          <div className='botao'><button>Agende Aqui</button></div>
        </main>






      </div>

    </div>
  )
}
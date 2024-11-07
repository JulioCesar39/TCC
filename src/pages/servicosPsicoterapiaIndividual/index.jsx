import './index.scss';

import { Link } from 'react-router-dom';


export default function ServicosPsicoterapiaIndividual() {


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

        <h1 classname='titulo'>Psicoterapia individual para adolescentes e adultos na abordagem psicanalítica</h1>

        <main className="content">

          <div className='card'>
            <p>
              Serviços de orientação vocacional ajudam a identificar interesses e habilidades por meio de avaliações, exploram opções de carreira e oferecem suporte na elaboração de currículos e preparação para entrevistas. Incluem planejamento de carreira, suporte emocional e acompanhamento. Estão disponíveis em escolas, universidades e centros de carreira.
            </p>
          </div>
          <div className="card1">
            <h3>A PSICOTERAPIA PSICANALÍTICA INDIVIDUAL EXPLORA O INCONSCIENTE E AS EMOÇÕES, FOCANDO NA HISTÓRIA PESSOAL DO PACIENTE, NA INTERPRETAÇÃO DE SONHOS E NA TRANSFERÊNCIA DE SENT- IMENTOS. TRABALHA COM CONFLITOS INTERNOS, COMO MEDOS E ANSIEDADES, E VISA AUMENTAR A AUTOCONSCIÊNCIA. O AMB- IENTE TERAPÊUTICO OFERECE SEGURANÇA PARA A EXPRESSÃO LIVRE, PROMOVENDO MUDANÇAS DURADOURAS.</h3>
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
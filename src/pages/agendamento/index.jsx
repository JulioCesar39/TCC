import './index.scss';
import { Link } from 'react-router-dom';

export default function Agendamento(){

return(
    <div className='Pagina-agendamento'>
<header className="cabecalho">
    <img src="./assets/image/logo.png" alt="logo" />
       <nav>
        <li><Link to= {'/'}>HOME</Link></li>
        <li>CONTATO</li>
        <li>AGENDAMENTO</li>
        <li>PORTFÓLIO</li>
       </nav>
      </header>
      <div className='conteudo-agendamento'>
        <img src="./assets/image/fundo-azul.png" alt="" />
        <h2>Selecione um dia</h2>

    <div className='dias'>
  <h3>21 agosto</h3>
  <div className='selecionar-dia'>
  <h3>22 de agostos</h3>
  </div>
  <div className='outro-dia'>
    <img src="./assets/image/agendamento.png" alt="" />
    <h3>Outro dia</h3>

  </div>
    </div>
      </div>
    </div>
)





}
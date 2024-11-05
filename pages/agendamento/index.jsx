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
      <div className='menu'>
      <img src="./assets/image/menu.png" alt="" />
      </div>
      </header>
    </div>
)





}
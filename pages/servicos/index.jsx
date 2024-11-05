import './index.scss';

import { Link } from 'react-router-dom';

export default function Servicos () {


    return(

        <div className="pagina-inicial">
      <header className="cabeçalho">
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

      <div className='conteudo'>

        <img src='/assets/image/fundo-azul.png' />
      </div>

      </div>
    )
}
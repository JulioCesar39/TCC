import './index.scss'
import { Link } from 'react-router-dom';

export default function Cabecalho(){
return(
    <header className="com-cabecalho">
    <img src="./assets/image/logo.png" alt="logo" className="logo" />
       <nav className="menu-opcoes">
         <li><Link to={'/'}>HOME</Link></li>
         <li><Link to={'./contato'}>CONTATO</Link></li>
        <li><Link to={'./portifolio'}>PORTFÓLIO</Link></li>
      <li><Link to={'./servicos'}>SERVIÇOS</Link></li>
       </nav>
      </header>

)

}
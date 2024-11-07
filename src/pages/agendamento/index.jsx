import './index.scss';
import { Link } from 'react-router-dom';

export default function Agendamento(){

return(
<div className='Pagina-agendamento'>
<header className="cabeçalho">

        <img src="./assets/image/logo.png" alt="logo" className="logo" />
        <nav className="menu-opcoes">
          <li><Link to={'/'}>HOME</Link></li>
          <li><Link>CONTATO</Link></li>
          <li><Link>PORTFÓLIO</Link></li>
          <li><Link>SERVIÇOS</Link></li>
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
   
    <h3>Outro dia</h3>
       </div>
     </div>
  </div>
  <div className='cliente-um'>
<div className='perfil'>
<img src="./assets/image/perfil.png" alt="" />
</div>

<h3>Unidade <br /> <br /> 574 R.Italia</h3>
<h3>Horario <br /> <br />   9:00</h3>
<h3>Nome </h3>
  </div>
  <div className='cliente-dois'>
<div className='perfil'>
<img src="./assets/image/perfil.png" alt="" />
</div>

<h3>Unidade <br /> <br /> 574 R.Italia</h3>
<h3>Horario <br /> <br />   9:45</h3>
<h3>Nome </h3>
  </div>
  <div className='cliente-tres'>
<div className='perfil'>
<img src="./assets/image/perfil.png" alt="" />
</div>

<h3>Unidade <br /> <br /> 574 R.Italia</h3>
<h3>Horario <br /> <br />   10:30</h3>
<h3>Nome </h3>
  </div>
</div>
)





}
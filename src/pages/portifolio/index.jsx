import './index.scss';
import { Link } from 'react-router-dom';

export default function Portfolio() {


    return(

<div className='Pagina-portfolio'>
    
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
     <div className='fundo'>
     <img src="./assets/image/fundo-azul.png" alt="" />
     
     <div className='perfil'>
      
<img src="./assets/image/perfil.png" alt="" />
<h2>LARISSA DE JESUS FERREIRA </h2>

<p >Psicóloga com formação em Psicologia pela Universidadede Santo Amaro – UNISA, cursando pós-graduação em Psicologia Hospitalar pela Universidade Anhanguera. Tenho atuado no atendimento clínico online individual, para casais e famílias, oferecendo suporte para questões como ansiedade, depressão, transtornos de humor, relacionamentos, uso de álcool e drogas entre outros. Utilizo a abordagem psicanalítica como base teórica para compreensão e elaboração de planos terapêuticos. Minha prática é guiada por um compromisso profundo com o desenvolvimento humano e o cuidado integral, buscando sempre acolher e apoiar meus clientes em suas jornadas de autoconhecimento e superação.</p>
     </div>
     
     
     
     </div>
 
    

      
</div>




    )
}
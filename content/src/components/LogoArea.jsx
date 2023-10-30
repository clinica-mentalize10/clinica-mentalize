import '../styles/components/logoArea.scss';

import Logo from '../assets/logo-sm.png';

function LogoArea() {
  return (
    <>
      <section className='content_area' id='logo_area'>
        <article className="text_article">
          <p>
          Cuidar da mente é <br/> cuidar bem da vida!
          </p>
          <a href="#queries">Agendar Consulta</a>
        </article>
        <article>
          <img src={Logo} alt='Clínica Mentalize' />
        </article>
      </section>
    </>
  );
}

export default LogoArea;

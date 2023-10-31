import '../styles/components/about.scss';

import aboutImage from '../assets/Imagem do WhatsApp de 2023-09-19 à(s) 18.50.36.jpg';

function About() {
  return (
    <section className='content_area' id='about'>
      <article>
        <img src={aboutImage} alt='Clínica Mentalize' />
      </article>
      <article className='about__descryption'>
        <h2>SOBRE NÓS</h2>
        <p>
          A Clínica Mentalize foi criada em 2021. acreditanto que a saúde deve
          ser acessível e que o cuidado com a mente é essencial. Estamos
          comprometidos em fornecer serviços de qualidade, buscamos ajudar
          nossos pacientes a alcançar o bem-estar emocional e a desenvolver
          habilidades para lidar com os desafios da vida. Na Mentalize,
          acreditamos na importância de um ambiente acolhedor e confidencial,
          onde cada pessoa se sinta segura para compartilhar suas preocupações e
          buscar apoio.
        </p>
        <p>
          Estamos aqui para ajudar você a encontrar o equilíbrio e a viver uma
          vida mais saudável e feliz!.
        </p>
        <a href='#contacts'>Contatos</a>
      </article>
    </section>
  );
}

export default About;

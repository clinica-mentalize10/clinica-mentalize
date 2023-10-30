import { queriesList } from '../data/queriesList';
import '../styles/components/queries.scss';

function Queries() {
  return (
    <section id='queries' className='content_area'>
      <h2>Agendamento</h2>
      <p>
        Entre em contato conosco pelo whatsapp para agendarmos a sua consulta!
      </p>
      <article>
        <div className='queries_container'>
          {queriesList &&
            queriesList.map((querie) => (
              <>
                <h3>{querie.name}</h3>
                <span className='queries__price'>R$ {querie.price}</span>
                <p className='queries__descryption'>{querie.descryption}</p>
                <a href={querie.link}>AGENDAR</a>
                <p className='queries__politic'>{querie.politic}</p>
              </>
            ))}
        </div>
        <div className='iframe_container'>
          <iframe
            src='https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7977.152703970972!2d-48.45948!3d-1.429643!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x92a48bf55a318423%3A0xa466653cee8b55ae!2sTv.%20Dr.%20En%C3%A9as%20Pinheiro%2C%201684%20-%20Marco%2C%20Bel%C3%A9m%20-%20PA%2C%2066095-105!5e0!3m2!1spt-BR!2sbr!4v1694645193500!5m2!1spt-BR!2sbr'
            loading='lazy'
            referrerPolicy='no-referrer-when-downgrade'
          ></iframe>
        </div>
      </article>
    </section>
  );
}

export default Queries;

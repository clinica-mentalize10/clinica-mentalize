import '../styles/components/specialties.scss';

import { specialtiesList } from '../data/specialtiesList';

function Specialties() {
  return (
    <section className='content_area' id='specialties'>
      <h2>Especialidades</h2>
      <p>Todas as áreas em que você pode contar com a gente!</p>
      {specialtiesList && specialtiesList.map((specialtie) => (
        <article key={specialtie.name}>
        <div className='specialty_icon__container'>
          <img src={specialtie.icon} alt="Medicina" />
        </div>
        <h3>{specialtie.name}</h3>
        {specialtie.descryption.map((item, index) => (
          <p className="descryption" key={index}>{item}</p>
        ))}
      </article>
      ))}
      <a href="#queries">Agendar Consulta</a>
    </section>
  );
}

export default Specialties;

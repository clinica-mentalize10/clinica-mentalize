import { teamList } from '../data/teamList';
import '../styles/components/team.scss';

import { AiOutlineInstagram } from 'react-icons/ai';

function Team() {
  return (
    <section className='content_area' id='team'>
      <h2>Profissionais</h2>
      <p>Temos a melhor equipe à sua espera!</p>
      {teamList && teamList.map((person, index) => (
        <article className='person' key={index}>
        <img src={person.image} alt='Nossa equipe' className='person__image' />
        <div className='person__data'>
            <a href={person.instagramLink}><AiOutlineInstagram /></a>
            <h3>{person.name}</h3>
            <p>{person.function}</p>
        </div>
      </article>
      ))}
    </section>
  );
}

export default Team;

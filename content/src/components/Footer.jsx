import '../styles/components/footer.scss';

import { AiOutlineInstagram } from 'react-icons/ai';
import { HiMail } from 'react-icons/hi';
import { BsTelephoneFill } from 'react-icons/bs';
import { FiArrowUp } from 'react-icons/fi';

function Footer() {
  return (
    <section id='footer'>
      <article id='contacts'>
        <h3>Contatos</h3>
        <div className='contacts__container'>
          <a href='http://www.instagram.com/mentalize.clinica'>
            <AiOutlineInstagram /> @mentalize.clinica
          </a>
          <a href='mailto:mentalize.clinica@outlook.com?subject=&body='>
            <HiMail /> mentalize.clinica@outlook.com
          </a>
          <a
            href='https://wa.me/5591983761140'
            target='_blank'
            rel='noreferrer noopener'
          >
            <BsTelephoneFill /> +55 (91) 98376-1140
          </a>
        </div>
      </article>
      <p className='powered_by'>
        &copy; 2023Desenvolvido por Daniel Arrivabene
      </p>
      <a href='#navbar' className='link_top'>
        <FiArrowUp />
      </a>
    </section>
  );
}

export default Footer;

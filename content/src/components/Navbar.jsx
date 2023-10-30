import { useState } from 'react';

import '../styles/components/navbar.scss';

import { LuMenu } from 'react-icons/lu';
import { AiOutlineClose } from 'react-icons/ai';

import { navbarLinksList } from '../data/navbarLinks';

function Navbar() {
  const [menu, setMenu] = useState(false);

  function handleMenu() {
    setMenu(!menu);
  }

  return (
    <nav id='navbar' className='content_area'>
      <h1>
        <span>Clínica </span>MENTALIZE
      </h1>
      <ul id='navbar_list'>
        {navbarLinksList &&
          navbarLinksList.map((link) => (
            <li key={link.destiny}>
              <a href={link.destiny}>{link.text.toUpperCase()}</a>
            </li>
          ))}
      </ul>
      <LuMenu id='menu_icon' onClick={handleMenu} />
      {menu && (
        <section id='menu__container'>
          <AiOutlineClose onClick={handleMenu} id='menu_close' />
          <ul>
            {navbarLinksList &&
              navbarLinksList.map((link) => (
                <li key={link.destiny}>
                  <a href={link.destiny} onClick={handleMenu}>
                    {link.text.toUpperCase()}
                  </a>
                </li>
              ))}
          </ul>
        </section>
      )}
    </nav>
  );
}

export default Navbar;

import './styles/mediaQuery.scss';

import LogoArea from './components/LogoArea';
import Navbar from './components/Navbar';
import About from './components/About';
import Specialties from './components/Specialties';
import Team from './components/Team';
import Footer from './components/Footer';
import Queries from './components/Queries';
import SocialNetworks from './components/SocialNetworks';
/*import Ebooks from './components/Ebooks';*/

function App() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <LogoArea />
        <About />
        <Specialties />
        <Team />
        <Queries />
        <SocialNetworks />
        {/* <Ebooks /> */}
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default App;

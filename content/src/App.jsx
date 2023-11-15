import './styles/mediaQuery.scss';

import LogoArea from './components/LogoArea';
import Navbar from './components/Navbar';
import About from './components/About';
import Specialties from './components/Specialties';

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
      </main>
    </>
  );
}

export default App;

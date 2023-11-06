import { Fragment } from 'react';
import { Route, Routes } from 'react-router-dom';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import AboutUs from './Pages/AboutUs';
import Kontakt from './Pages/Kontakt';
import Main from './Pages/Main';
import Services from './Pages/Services';

const App = () => {
  return (
    <Fragment>
      <nav>
        <Header />
      </nav>

      <main>
        <Routes>
          <Route path='/main' element={<Main />} />
          <Route path='/o-nas' element={<AboutUs />} />
          <Route path='/services' element={<Services />} />
          <Route path='/kontakt' element={<Kontakt />} />
          <Route path='*' element={<Main />} />
        </Routes>
      </main>

      <footer>
        <Footer />
      </footer>
    </Fragment>
  );
};

export default App;

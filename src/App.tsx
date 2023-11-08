import React, { Fragment } from 'react';
import { Route, Routes } from 'react-router-dom';
import Footer from './Components/Footer/Footer.tsx';
import Header from './Components/Header/Header.tsx';
import AboutUs from './Pages/AboutUs.tsx';
import Kontakt from './Pages/Kontakt.tsx';
import Main from './Pages/Main.tsx';
import Services from './Pages/Services.tsx';

const App:React.FC = () => {
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

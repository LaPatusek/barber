import { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import AboutUs from './Pages/AboutUs';
import Kontakt from './Pages/Kontakt';
import Main from './Pages/Main';
import Services from './Pages/Services';

const App = () => {
  return (
    <Fragment>
      <header>
        <Header />
      </header>

      <main>
        <Switch>
          <Route path='/main'>
            <Main />
          </Route>
          <Route path='/o-nas'>
            <AboutUs />
          </Route>
          <Route path='/services'>
            <Services />
          </Route>
          <Route path='/kontakt'>
            <Kontakt />
          </Route>
          <Route path='*'>
            <Main />
          </Route>
        </Switch>
      </main>

      <Footer />
    </Fragment>
  );
};

export default App;

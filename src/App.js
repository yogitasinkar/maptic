import './App.scss';
import Header from './pages/header/Header';
import { Route, Switch } from 'react-router-dom';
import CsrMaps from './pages/ourActions/OurActions';
import ngoSearch from './pages/ngo-search/ngoSearch';
import Dummy from './pages/dummy'

function App() {
  return (
    <div>
      <header>
        <Header />
        <Switch>
          <Route path='/' component={CsrMaps} exact/>
          <Route path='/ngo-search' component={ngoSearch} />
          <Route path='/identify-projects' component={ngoSearch} />
          <Route path='/expertise-search' render={() => (
            <Dummy title="Expertise Search"/>
          )} />
          <Route path='/csr-news' render={() => (
            <Dummy title="CSR NEWS"/>
          )} />
          <Route path='/social-innovation-platform' render={() => (
            <Dummy title="SOCIAL INNOVATION PLATFORM"/>
          )} />
          <Route path='/reporting-resources' render={() => (
            <Dummy title="REPORTING RESOURCES"/>
          )} />
          <Route path='/our-clients' render={() => (
            <Dummy title="OUR CLIENTS"/>
          )} />
        </Switch>
      </header>
    </div>
  );
}

export default App;

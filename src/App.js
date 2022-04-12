import './App.scss';
import Header from './pages/header/Header';
import { Route, Switch } from 'react-router-dom';
import OurActions from './pages/ourActions/OurActions';

function App() {
  return (
    <div>
      <header>
        <Header />
        <Switch>
          <Route path='/' component={OurActions} exact/>
          <Route path='/csr-news' component={OurActions} />
        </Switch>
      </header>
    </div>
  );
}

export default App;

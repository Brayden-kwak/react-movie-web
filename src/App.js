import "./App.css";
import { Switch, Route } from 'react-router-dom';
import Home from './routes/Home';
import Detail from './routes/Detail';
//import PracCoin from './PracCoin.js';

function App() {
  return ( 
      <Switch>
        <Route path="/movie/:id">
          <Detail />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
  );
}

export default App;

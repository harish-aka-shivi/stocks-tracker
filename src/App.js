import React from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Home from './containers/Home';

const AppRouter = () => (
  <Router>
    <Switch>
      <Route exact path="/"><Home /></Route>
    </Switch>
  </Router>
);


const App = () => (
  <main>
    <AppRouter />
  </main>
);

export default App;

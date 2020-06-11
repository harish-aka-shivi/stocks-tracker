import React from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Home from './containers/Home';
import DataProvider from './containers/providers/DataProvider';
import Detail from './containers/Detail';

const AppRouter = () => (
  <Router>
    <Switch>
      <Route exact path="/"><Home /></Route>
      <Route path="/:ticker"><Detail /></Route>
    </Switch>
  </Router>
);


const App = () => (
  <DataProvider>
    <main>
      <AppRouter />
    </main>
  </DataProvider>
);

export default App;

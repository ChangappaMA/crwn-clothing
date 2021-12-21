import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router';

import HomePage from './pages/homepage/homepage.component';


const HatsPage = () => (
  <div>
    <h1>Hats Page</h1>
  </div>
)

function App() {
  return (
    <div>
      <Switch>
        <Route path='/' exact component={HomePage} />
        <Route path='/shop/hats' exact component={HatsPage} />
      </Switch>
    </div>
  );
}

export default App;

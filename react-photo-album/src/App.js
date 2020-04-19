import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Gallery from '../src/components/Album/Album';

import './App.scss';

function App() {
  
  return (
    <div className="App">
      <header className="App-header"></header>
      <main>
        <Router>
          <Switch>
            <Route path="/album/:albumId">
              <Gallery />
            </Route>
          </Switch>
        </Router>
      </main>
    </div>
  );
}

export default App;

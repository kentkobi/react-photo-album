import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Album from '../src/components/Album/Album';
import './App.scss';

function App() {
  
  return (
    <div className="App">
      <main>
        <Router>
          <Switch>
            <Route path="/album/:albumId">
              <Album />
            </Route>
          </Switch>
        </Router>
      </main>
    </div>
  );
}

export default App;

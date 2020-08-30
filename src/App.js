
import React from 'react';
import { BrowserRouter, Switch, Route, NavLink, Link } from 'react-router-dom';

import Login from './Login';
import Mission from './Mission';
import NoAccess from './NoAccess';
import MissionDetails from './MissionDetails';

function App() {
  const handleLogout= () => {
    sessionStorage.clear()
  }

  return (
    <div className="App">
      <BrowserRouter>
        <div>
          <div>
            <Link to={`/`} onClick={handleLogout} style={{top:0,right:0}}>Logout</Link>
          </div>
          <div className="content">
            <Switch>
              <Route exact path="/" component={Login} />
              <Route path="/NoAccess" component={NoAccess} />
              <Route path="/mission" exact component={Mission} />
              <Route path="/mission/:id" component={MissionDetails} />
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;

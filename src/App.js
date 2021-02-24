import React from 'react';

import Home from './Components/Home';
import Proctor from './Components/Proctor';
import Webcams from './Components/Webcams';
import { Route, Switch } from 'react-router-dom';

function App() {
  return (
    <main>
      <Switch>
        <Route path='/' component={Home} exact />
        <Route path='/Proctor' component={Proctor} />
        <Route path='/Webcams' component={Webcams} />
      </Switch>
    </main>
  )
}

export default App;
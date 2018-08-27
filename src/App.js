import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import SmsSend from './smsSend';
import ConnectTwoPersonCall from './connectTwoPersonCall';
import Home from './home';
import Navigation from './Navigation';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Navigation />
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/smssend" component={SmsSend} />
            <Route path="/connecttwopersoncall" component={ConnectTwoPersonCall} />
            <Route component={Error} />
          </Switch>
        </div>
      </BrowserRouter>

    );
  }
}

export default App;

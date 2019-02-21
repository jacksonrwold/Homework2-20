import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Counter from "./counter";
import Home from "./home";
import page2 from "./page2";
import page3 from "./page3";
import page4 from "./page4";

export default class NavigationComponent extends Component {
  constructor() {
    super();
  }

  render() {
    return (
        <div>
            <Router>
                <div>
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route path="/page2" component={page2} />
                        <Route path="/page3" component={page3} />
                        <Route path="/page4" component={page4} />
                    </Switch>
                </div>
            </Router>
        </div>
    );
  }
}
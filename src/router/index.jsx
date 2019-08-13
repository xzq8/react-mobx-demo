import React, { Component } from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';

import Home from '../pages/home';
import Details from '../pages/details';
import Todo from "../pages/TodoView"

import NotFound from "../pages/NotFound";

export default class App extends Component {
    render() {
        return (
            <HashRouter>
                <div>
                    <Switch>
                        <Route exact path='/' component={Todo} />
                        <Route exact path="/details" component={Details} />
                        <Route component={NotFound} />
                    </Switch>
                    {/* <DevTools /> */}
                </div>
            </HashRouter>
        )
    }
}
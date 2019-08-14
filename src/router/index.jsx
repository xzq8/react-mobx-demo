import React, { Component } from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';

import Home from '../pages/Home/home';
import Details from '../pages/Details/details';
import From from '../pages/Form/form';

import Todo from "../pages/TodoView"

import NotFound from "../pages/NotFound";

export default class App extends Component {
    render() {
        return (
            <HashRouter>
                <div>
                    <Switch>
                        <Route exact path='/' component={From} />
                        <Route exact path='/home' component={Home} />
                        <Route exact path="/details" component={Details} />
                        <Route component={NotFound} />
                    </Switch>
                    {/* <DevTools /> */}
                </div>
            </HashRouter>
        )
    }
}
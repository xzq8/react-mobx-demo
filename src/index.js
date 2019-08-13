import React from 'react';
import ReactDOM from 'react-dom';
import FastClick from 'fastclick';
import { Provider } from 'mobx-react';
import { AppContainer } from 'react-hot-loader';

import App from './router';

import * as stores from './store';
import * as serviceWorker from './serviceWorker';

FastClick.attach(document.body)

const render = Component => {
    ReactDOM.render(
        <Provider store={stores}>
            <AppContainer>
                <Component />
            </AppContainer>
        </Provider>,
        document.getElementById("root"));
}
render(App)


// Webpack Hot Module Replacement API
if (module.hot) {
    module.hot.accept('./', () => {
        render(App);
    })
}


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

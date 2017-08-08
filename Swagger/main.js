import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import totoApp from './reducers/reducers';

let store = createStore(totoApp);

ReactDOM.render(
    (
        <Provider store={store}>
            <App />
        </Provider>
        /*<Router history={browserHistory}>
            <Route path="/" component={App}>
            <IndexRoute component={Home}/>
            <Route path="home" component={Home}/>
            <Route path="about" component={About}/>
            <Route path="contact" component={Contact}/>
            </Route>
        </Router>*/
    ), document.querySelector('#app')
);
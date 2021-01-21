import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Market, Store } from './pages';
import { AppBody } from './App.style';


const Pirates = () => (
  <AppBody>
    <Router>
      <Switch>
        <Route exact={true} path="/" component={App} />
        <Route path="/시장" component={Market} />
        <Route path="/:uri" component={Store} />
      </Switch>
    </Router>
  </AppBody>
);

ReactDOM.render(
  <Pirates />,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

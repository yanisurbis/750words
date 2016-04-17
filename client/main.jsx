import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './components/start/start.jsx';

Meteor.startup(function () {
    console.log('render')
    ReactDOM.render(<App />, document.getElementById("render-target"));
});

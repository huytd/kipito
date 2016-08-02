require('./scss/main.scss');
/* ---------------------- */
import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/app'

(() => {
  console.log('Hello World!')
  ReactDOM.render(<App/>, document.getElementById('root'))
})();

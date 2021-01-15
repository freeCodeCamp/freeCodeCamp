/* eslint-disable max-len */
// NOTE: updates to translations will not appear until the client is restarted
// i.e. close it and run npm run develop

const COMMENTS_TO_NOT_TRANSLATE = [
  {
    id: 'rms15q',
    text: 'React-Redux:'
  },
  {
    id: '78gz3i',
    text: 'React:'
  },
  {
    id: '7e3lpb',
    text: 'Redux:'
  },
  {
    id: 'b0atz9',
    text: `<h1>Hello World</h1>

<h2>CatPhotoApp</h2>

<p>Kitty ipsum dolor sit amet, shed everywhere shed everywhere stretching attack your ankles chase the red dot, hairball run catnip eat the grass sniff.</p>`
  },
  {
    id: 'b1x7w0',
    text: `import React from 'react'
import ReactDOM from 'react-dom'
import { Provider, connect } from 'react-redux'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import rootReducer from './redux/reducers'
import App from './components/App'

const store = createStore(
  rootReducer,
  applyMiddleware(thunk)
);

ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('root')
);`
  }
];

exports.COMMENTS_TO_NOT_TRANSLATE = COMMENTS_TO_NOT_TRANSLATE;

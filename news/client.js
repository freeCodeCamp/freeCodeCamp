import React from 'react'; // imports React library
import {BrowserRouter} from 'react-router-dom'; // imports BrowserRouter library
import { render } from 'react-dom'; // imports render library

import NewsApp from './NewsApp'; // imports NewsApp library

const newsMountPoint = document.getElementById('news-app-mount');

const App = (
  <BrowserRouter basename='/news'>
    <NewsApp />
  </BrowserRouter>
);

render(
  App,
  newsMountPoint
);

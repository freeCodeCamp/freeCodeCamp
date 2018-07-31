import React from 'react';
import { render } from 'react-dom';

import NewsApp from './NewsApp';

const newsMountPoint = document.getElementById('news-app-mount');

render(
  <NewsApp/>,
  newsMountPoint,
  () => console.log('react has rendered and is ready to go go go go go go!!')
);

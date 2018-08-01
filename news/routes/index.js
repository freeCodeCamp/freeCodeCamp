import React from 'react';
import { Route } from 'react-router-dom';

import EditArticle from './EditArticle';
import Featured from './Featured';

export const routes = [
  <Route component={Featured} exact={true} path='/' />,
  <Route component={EditArticle} path='/new' />
].map(
  el => ({ ...el, key: el.props.path })
);

import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import Show from './Show';
import Featured from './Featured';

export const routes = [
  <Route component={Featured} exact={true} path='/' />,
  <Route exact={true} path='/:username' render={() => <Redirect to='/' />} />,
  <Route component={Show} path='/:username/:slug' />
].map(el => ({ ...el, key: el.props.path }));

// <Route component={EditArticle} path='/new' />

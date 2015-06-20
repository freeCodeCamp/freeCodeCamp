import React from 'react';
import { Router, Route } from 'react-router';

// components
import App from './App.jsx';
import Jobs from './screens/App/screens/Jobs';

module.exports = function appFactory(history) {
  return (
    <Router history={ history }>
      <Route handler={ App }>
        <Route
          component={ Jobs }
          path='/jobs' />
      </Route>
    </Router>
  );
};

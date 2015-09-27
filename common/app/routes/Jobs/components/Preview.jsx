// import React, { PropTypes } from 'react';
import { contain } from 'thundercats-react';
import ShowJob from './ShowJob.jsx';

export default contain(
  {
    store: 'JobsStore',
    actions: 'JobActions',
    map({ form: job = {} }) {
      return { job };
    }
  },
  ShowJob
);

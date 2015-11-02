import React, { createClass } from 'react';
import { History } from 'react-router';
import { contain } from 'thundercats-react';

import ShowJob from './ShowJob.jsx';
import JobNotFound from './JobNotFound.jsx';
import { isJobValid } from '../utils';

export default contain(
  {
    store: 'jobsStore',
    fetchAction: 'jobActions.getJob',
    map({ currentJob }) {
      return { job: currentJob };
    },
    getPayload({ params: { id }, job = {} }) {
      return {
        id,
        isPrimed: job.id === id
      };
    },
    // using es6 destructuring
    shouldContainerFetch({ job = {} }, { params: { id } }
    ) {
      return job.id !== id;
    }
  },
  createClass({
    displayName: 'Show',

    mixins: [History],

    componentDidMount() {
      const { job } = this.props;
      // redirect user in client
      if (!isJobValid(job)) {
        this.history.pushState(null, '/jobs');
      }
    },

    render() {
      const { job } = this.props;

      if (!isJobValid(job)) {
        return <JobNotFound />;
      }
      return <ShowJob { ...this.props }/>;
    }
  })
);

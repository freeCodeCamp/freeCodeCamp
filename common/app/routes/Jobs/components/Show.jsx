import React, { createClass } from 'react';
import { History } from 'react-router';
import { contain } from 'thundercats-react';

import ShowJob from './ShowJob.jsx';
import JobNotFound from './JobNotFound.jsx';
import { isJobValid } from '../utils';

function shouldShowJob(
  {
    isFrontEndCert: isFrontEndCertReq = false,
    isFullStackCert: isFullStackCertReq = false
  }, {
    isFrontEndCert = false,
    isFullStackCert = false
  }
) {
  return (!isFrontEndCertReq && !isFullStackCertReq) ||
    (isFullStackCertReq && isFullStackCert) ||
    (isFrontEndCertReq && isFrontEndCert);
}

function generateMessage(
  {
    isFrontEndCert: isFrontEndCertReq = false
  }, {
    isFrontEndCert = false,
    isSignedIn = false
  }
) {

  if (!isSignedIn) {
    return 'Must be singed in to apply';
  }
  if (isFrontEndCertReq && !isFrontEndCert) {
    return 'Job requires applicant be Front End Certified';
  }
  return 'Job requires applicant be Full Stack Certified';
}

export default contain(
  {
    stores: ['appStore', 'jobsStore'],
    fetchWaitFor: 'jobsStore',
    fetchAction: 'jobActions.getJob',
    combineLatest({ isFrontEndCert, isFullStackCert }, { currentJob }) {
      return {
        job: currentJob,
        isFrontEndCert,
        isFullStackCert
      };
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
      const {
        isFullStackCert,
        isFrontEndCert,
        job,
        username
      } = this.props;
      const isSignedIn = !!username;

      if (!isJobValid(job)) {
        return <JobNotFound />;
      }
      return (
        <ShowJob
          message={ generateMessage(job, { isFrontEndCert, isSignedIn }) }
          showApply={ shouldShowJob(job, { isFrontEndCert, isFullStackCert }) }
          { ...this.props }/>
      );
    }
  })
);

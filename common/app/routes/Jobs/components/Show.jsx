import React, { PropTypes } from 'react';
import { History } from 'react-router';
import { contain } from 'thundercats-react';

import ShowJob from './ShowJob.jsx';
import JobNotFound from './JobNotFound.jsx';
import { isJobValid } from '../utils';

function shouldShowApply(
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
    isFrontEndCert: isFrontEndCertReq = false,
    isFullStackCert: isFullStackCertReq = false
  },
  {
    isFrontEndCert = false,
    isFullStackCert = false,
    isSignedIn = false
  }
) {

  if (!isSignedIn) {
    return 'Must be signed in to apply';
  }
  if (isFrontEndCertReq && !isFrontEndCert) {
    return 'This employer requires Free Code Camp’s Front ' +
      'End Development Certification in order to apply';
  }
  if (isFullStackCertReq && !isFullStackCert) {
    return 'This employer requires Free Code Camp’s Full ' +
      'Stack Development Certification in order to apply';
  }
  if (isFrontEndCertReq && isFrontEndCertReq) {
    return 'This employer requires the Front End Development Certification. ' +
      "You've earned it, so feel free to apply.";
  }
  return 'This employer requires the Full Stack Development Certification. ' +
    "You've earned it, so feel free to apply.";
}

export default contain(
  {
    store: 'appStore',
    fetchAction: 'jobActions.getJob',
    map({
      username,
      isFrontEndCert,
      isFullStackCert,
      jobsApp: { currentJob }
    }) {
      return {
        username,
        job: currentJob,
        isFrontEndCert,
        isFullStackCert
      };
    },
    getPayload({ params: { id } }) {
      return id;
    },
    isPrimed({ params: { id } = {}, job = {} }) {
      return job.id === id;
    },
    // using es6 destructuring
    shouldContainerFetch({ job = {} }, { params: { id } }
    ) {
      return job.id !== id;
    }
  },
  React.createClass({
    displayName: 'Show',

    propTypes: {
      job: PropTypes.object,
      isFullStackCert: PropTypes.bool,
      isFrontEndCert: PropTypes.bool,
      username: PropTypes.string
    },

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

      if (!isJobValid(job)) {
        return <JobNotFound />;
      }

      const isSignedIn = !!username;

      const showApply = shouldShowApply(
        job,
        { isFrontEndCert, isFullStackCert }
      );

      const message = generateMessage(
        job,
        { isFrontEndCert, isFullStackCert, isSignedIn }
      );

      return (
        <ShowJob
          message={ message }
          preview={ false }
          showApply={ showApply }
          { ...this.props }/>
      );
    }
  })
);

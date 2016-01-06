import React, { PropTypes } from 'react';
import { History } from 'react-router';
import { contain } from 'thundercats-react';

import ShowJob from './ShowJob.jsx';
import JobNotFound from './JobNotFound.jsx';
import { isJobValid } from '../utils';

function shouldShowApply(
  {
    isFrontEndCert: isFrontEndCertReq = false,
    isBackEndCert: isBackEndCertReq = false
  }, {
    isFrontEndCert = false,
    isBackEndCert = false
  }
) {
  return (!isFrontEndCertReq && !isBackEndCertReq) ||
    (isBackEndCertReq && isBackEndCert) ||
    (isFrontEndCertReq && isFrontEndCert);
}

function generateMessage(
  {
    isFrontEndCert: isFrontEndCertReq = false,
    isBackEndCert: isBackEndCertReq = false
  },
  {
    isFrontEndCert = false,
    isBackEndCert = false,
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
  if (isBackEndCertReq && !isBackEndCert) {
    return 'This employer requires Free Code Camp’s Back ' +
      'End Development Certification in order to apply';
  }
  if (isFrontEndCertReq && isFrontEndCertReq) {
    return 'This employer requires the Front End Development Certification. ' +
      "You've earned it, so feel free to apply.";
  }
  return 'This employer requires the Back End Development Certification. ' +
    "You've earned it, so feel free to apply.";
}

export default contain(
  {
    store: 'appStore',
    fetchAction: 'jobActions.getJob',
    map({
      username,
      isFrontEndCert,
      isBackEndCert,
      jobsApp: { currentJob }
    }) {
      return {
        username,
        job: currentJob,
        isFrontEndCert,
        isBackEndCert
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
      isBackEndCert: PropTypes.bool,
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
        isBackEndCert,
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
        { isFrontEndCert, isBackEndCert }
      );

      const message = generateMessage(
        job,
        { isFrontEndCert, isBackEndCert, isSignedIn }
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

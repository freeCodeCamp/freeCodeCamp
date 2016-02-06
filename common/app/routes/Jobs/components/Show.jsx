import React, { PropTypes } from 'react';
import { connect, compose } from 'redux';
import { push } from 'react-router-redux';
import PureComponent from 'react-pure-render/component';
import { createSelector } from 'reselect';

import contain from '../../../utils/professor-x';
import { fetchJob } from '../redux/actions';

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

const mapStateToProps = createSelector(
  state => state.app,
  state => state.jobsApp.currentJob,
  ({ username, isFrontEndCert, isBackEndCert }, job = {}) => ({
    username,
    isFrontEndCert,
    isBackEndCert,
    job
  })
);

const bindableActions = {
  push,
  fetchJob
};

const fetchOptions = {
  fetchAction: 'fetchJob',
  getActionArgs({ params: { id } }) {
    return [ id ];
  },
  isPrimed({ params: { id } = {}, job = {} }) {
    return job.id === id;
  },
  // using es6 destructuring
  shouldRefetch({ job }, { params: { id } }) {
    return job.id !== id;
  }
};

export class Show extends PureComponent {
  static displayName = 'Show';

  static propTypes = {
    job: PropTypes.object,
    isBackEndCert: PropTypes.bool,
    isFrontEndCert: PropTypes.bool,
    username: PropTypes.string
  };

  componentDidMount() {
    const { job, push } = this.props;
    // redirect user in client
    if (!isJobValid(job)) {
      push('/jobs');
    }
  }

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
}

export default compose(
  connect(mapStateToProps, bindableActions),
  contain(fetchOptions)
)(Show);

import { CompositeDisposable } from 'rx';
import React, { PropTypes } from 'react';
import { Button, Row, Col } from 'react-bootstrap';
import { connect } from 'react-redux';
import PureComponent from 'react-pure-render/component';
import { goBack, push } from 'react-router-redux';

import ShowJob from './ShowJob.jsx';
import JobNotFound from './JobNotFound.jsx';

import { clearForm, saveJob } from '../redux/actions';

const mapStateToProps = state => ({ job: state.jobsApp.newJob });

const bindableActions = {
  goBack,
  push,
  clearForm,
  saveJob
};

export class JobPreview extends PureComponent {
  constructor(...args) {
    super(...args);
    this._subscriptions = new CompositeDisposable();
  }

  static displayName = 'Preview';

  static propTypes = {
    job: PropTypes.object,
    saveJob: PropTypes.func,
    clearForm: PropTypes.func,
    push: PropTypes.func
  };

  componentWillMount() {
    const { push, job } = this.props;
    // redirect user in client
    if (!job || !job.position || !job.description) {
      push('/jobs/new');
    }
  }

  componentWillUnmount() {
    this._subscriptions.dispose();
  }

  handleJobSubmit() {
    const { clearForm, saveJob, job } = this.props;
    clearForm();
    const subscription = saveJob(job).subscribe();
    this._subscriptions.add(subscription);
  }

  render() {
    const { job, goBack } = this.props;

    if (!job || !job.position || !job.description) {
      return <JobNotFound />;
    }

    return (
      <div>
        <ShowJob job={ job } />
        <div className='spacer'></div>
        <hr />
        <Row>
          <Col
            md={ 10 }
            mdOffset={ 1 }
            xs={ 12 }>
            <div>
              <Button
                block={ true }
                className='signup-btn'
                onClick={ () => this.handleJobSubmit() }>

                Looks great! Let's Check Out
              </Button>
              <Button
                block={ true }
                onClick={ goBack } >
                Head back and make edits
              </Button>
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}

export default connect(mapStateToProps, bindableActions)(JobPreview);

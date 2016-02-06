import React, { PropTypes } from 'react';
import { Button, Row, Col } from 'react-bootstrap';
import { connect } from 'redux';
import { createSelector } from 'reselect';
import PureComponent from 'react-pure-render/component';
import { goBack, push } from 'react-router-redux';

import ShowJob from './ShowJob.jsx';
import JobNotFound from './JobNotFound.jsx';

import { clearSavedForm, saveJobToDb } from '../redux/actions';

const mapStateToProps = createSelector(
  state => state.jobsApp.form,
  (job = {}) => ({ job })
);

const bindableActions = {
  goBack,
  push,
  clearSavedForm,
  saveJobToDb
};

export class JobPreview extends PureComponent {
  static displayName = 'Preview';

  static propTypes = {
    job: PropTypes.object
  };

  componentDidMount() {
    const { push, job } = this.props;
    // redirect user in client
    if (!job || !job.position || !job.description) {
      push('/jobs/new');
    }
  }

  render() {
    const { job, goBack, clearSavedForm, saveJobToDb } = this.props;

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
                onClick={ () => {
                  clearSavedForm();
                  saveJobToDb({
                    goTo: '/jobs/new/check-out',
                    job
                  });
                }}>

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

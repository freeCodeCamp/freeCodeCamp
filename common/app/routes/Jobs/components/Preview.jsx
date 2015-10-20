import React, { PropTypes } from 'react';
import { Panel, Button, Row, Col } from 'react-bootstrap';
import { contain } from 'thundercats-react';

import ShowJob from './ShowJob.jsx';
import JobNotFound from './JobNotFound.jsx';

export default contain(
  {
    store: 'JobsStore',
    actions: [
      'appActions',
      'jobActions'
    ],
    map({ form: job = {} }) {
      return { job };
    }
  },
  React.createClass({
    displayName: 'Preview',

    propTypes: {
      appActions: PropTypes.object,
      job: PropTypes.object,
      jobActions: PropTypes.object
    },

    componentDidMount() {
      const { appActions, job } = this.props;
      // redirect user in client
      if (!job || !job.position || !job.description) {
        appActions.goTo('/jobs/new');
      }
    },

    render() {
      const { appActions, job, jobActions } = this.props;

      if (!job || !job.position || job.description) {
        return <JobNotFound />;
      }

      return (
        <div>
          <ShowJob job={ job } />
          <Row>
            <Col
              md={ 10 }
              mdOffset={ 1 }
              xs={ 12 }>
              <Panel>
                <Button
                  block={ true }
                  className='signup-btn'
                  onClick={ () => {
                    jobActions.clearSavedForm();
                    jobActions.saveJobToDb({
                      goTo: '/jobs/new/check-out',
                      job
                    });
                  }}>

                  Looks great! Let's Check Out
                </Button>
                <Button
                  block={ true }
                  onClick={ () => appActions.goBack() } >
                  Head back and make edits
                </Button>
              </Panel>
            </Col>
          </Row>
        </div>
      );
    }
  })
);

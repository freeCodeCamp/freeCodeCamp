import React, { PropTypes } from 'react';
import { Panel, Button, Row, Col } from 'react-bootstrap';
import { contain } from 'thundercats-react';
import ShowJob from './ShowJob.jsx';

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

    render() {
      const { appActions, job, jobActions } = this.props;
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

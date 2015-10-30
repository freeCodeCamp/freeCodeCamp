import React from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import { Button, Panel, Col, Row } from 'react-bootstrap';

export default React.createClass({
  displayName: 'NewJobCompleted',

  render() {
    return (
      <div className='text-center'>
        <Panel>
          <Row>
            <h1>
              Your Position has Been Submitted
            </h1>
          </Row>
          <Row>
            <Col
              md={ 6 }
              mdOffset={ 3 }>
              We’ll review your listing and email you when it’s live.
              <br />
              Thank you for listing this job with Free Code Camp.
            </Col>
          </Row>
          <div className='spacer' />
          <LinkContainer to={ '/jobs' }>
            <Button
              block={ true }
              bsSize='large'
              bsStyle='primary'>
              Go to the job board
            </Button>
          </LinkContainer>
        </Panel>
      </div>
    );
  }
});

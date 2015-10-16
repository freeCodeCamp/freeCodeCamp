import React from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import { Button, Panel, Col, Row } from 'react-bootstrap';

export default React.createClass({
  displayName: 'NewJobCompleted',

  propTypes: {
  },

  render() {
    return (
      <div>
        <Panel>
          <Row>
            <h1 className='text-center'>
              Job under review
            </h1>
          </Row>
          <Row>
            <Col
              md={ 6 }
              mdOffset={ 3 }>
            Congrats! Your job has been posted and is under review.
            Once we review you job post we will publish it and you will receive
            an email from us with a link to the listing.
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

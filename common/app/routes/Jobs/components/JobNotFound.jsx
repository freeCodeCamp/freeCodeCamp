import React from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import { Button, Row, Col } from 'react-bootstrap';

export default class extends React.Component {
  static displayName = 'NoJobFound';

  shouldComponentUpdate() {
    return false;
  }

  render() {
    return (
      <div>
        <Row>
          <Col
            md={ 6 }
            mdOffset={ 3 }>
            <div>
              No job found...
              <LinkContainer to='/jobs'>
                <Button
                  block={ true }
                  bsSize='large'
                  bsStyle='primary'>
                  Go to the job board
                </Button>
              </LinkContainer>
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}

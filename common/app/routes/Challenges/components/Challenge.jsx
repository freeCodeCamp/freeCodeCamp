import React, { PropTypes } from 'react';
import { Button, ButtonGroup, Col, Row } from 'react-bootstrap';

import Description from './Description';
import Results from './Results';

export default React.createClass({
  displayName: 'Challenge',

  propTypes: {
    currentChallenge: PropTypes.object
  },

  render() {
    const {
      currentChallenge: { id, title, description, tests } = {}
    } = this.props;

    return (
      <Row className='courseware-height'>
        <Col
          md={ 3 }>
          <Description
            description={ description }
            id={ id }
            title={ title } />
          <Button
            block={ true }
            bsSize='lg'
            bsStyle='primary'
            className='negative-10'>
            <i className='fa fa-play'>
              &nbsp; Run Tests (ctrl + enter)
            </i>
          </Button>
          <div className='button-spacer' />
          <ButtonGroup justified={ true }>
            <Button bsStyle='success'>
              <i className='fa fa-refresh'>&nbsp; Reset</i>
            </Button>
            <Button>
              <i className='fa fa-medkit'>&nbsp; Help</i>
            </Button>
            <Button>
              <i class='fa fa-bug'>&nbsp; Bug</i>
            </Button>
          </ButtonGroup>
          <div className='button-spacer' />
          <Results tests={ tests } />
        </Col>
      </Row>
    );
  }
});

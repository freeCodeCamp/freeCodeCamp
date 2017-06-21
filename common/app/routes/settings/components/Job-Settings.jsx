import React, { PropTypes } from 'react';
import { Button, Row, Col } from 'react-bootstrap';
import classnames from 'classnames';

const propTypes = {
  isAvailableForHire: PropTypes.bool,
  toggle: PropTypes.func.isRequired
};

export default function JobSettings({ isAvailableForHire, toggle }) {
  const className = classnames({
    active: isAvailableForHire,
    'btn-toggle': true
  });
  return (
    <Row>
      <Col xs={ 9 }>
        <p className='large-p'>
          Available for hire?
        </p>
      </Col>
      <Col xs={ 3 }>
        <Button
          block={ true }
          bsSize='lg'
          bsStyle='primary'
          className={ className }
          onClick={ toggle }
          >
          { isAvailableForHire ? 'Available' : 'Unavailable' }
        </Button>
      </Col>
    </Row>
  );
}

JobSettings.displayName = 'JobSettings';
JobSettings.propTypes = propTypes;

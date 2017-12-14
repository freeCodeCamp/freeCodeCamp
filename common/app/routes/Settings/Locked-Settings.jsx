import PropTypes from 'prop-types';
import React from 'react';
import { Button, Row, Col, ToggleButton, ToggleButtonGroup } from 'react-bootstrap';
import classnames from 'classnames';

const propTypes = {
  isLocked: PropTypes.bool,
  toggleIsLocked: PropTypes.func.isRequired
};

export default function LockSettings({ isLocked, toggleIsLocked }) {
  const className = classnames({
    'positive-20': true,
    active: isLocked,
    'btn-toggle': true
  });

  return (
    <Row>
      <Col sm={ 8 } xs={ 12 }>
        <p>
          <strong>
            Make all of my solutions private
            <br />
            <em>(this disables your certificates)</em>
          </strong>
        </p>
      </Col>
      <Col sm={ 4 } xs={ 12 }>
        {/* <Button
          block={ true }
          bsSize='lg'
          bsStyle='primary'
          className={ className }
          onClick={ toggle }
          >
          { isLocked ? 'On' : 'Off' }
        </Button> */}
        <ToggleButtonGroup
          className='toggle-btn-group'
          name='monthly-email'
          onChange={ toggleIsLocked }
          type='radio'
          >
          <ToggleButton
            bsSize='lg'
            bsStyle='primary'
            className={
              classnames(
                'positive-20',
                { active: isLocked },
                'btn-toggle'
              )
            }
            disabled={ isLocked }
            type='radio'
            value={ 1 }
            >
            On
          </ToggleButton>
          <ToggleButton
            bsSize='lg'
            bsStyle='primary'
            className={
              classnames(
                'positive-20',
                { active: !isLocked },
                'btn-toggle'
              )
            }
            disabled={ !isLocked }
            type='radio'
            value={ 2 }
            >
            Off
          </ToggleButton>
        </ToggleButtonGroup>
      </Col>
    </Row>
  );
}

LockSettings.displayName = 'LockSettings';
LockSettings.propTypes = propTypes;

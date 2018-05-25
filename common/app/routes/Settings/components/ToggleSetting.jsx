import PropTypes from 'prop-types';
import React from 'react';
import {
  Row,
  Col,
  ControlLabel
} from 'react-bootstrap';

import TB from '../Toggle-Button';

const propTypes = {
  action: PropTypes.string.isRequired,
  explain: PropTypes.string,
  flag: PropTypes.bool.isRequired,
  flagName: PropTypes.string.isRequired,
  toggleFlag: PropTypes.func.isRequired
};

export default function ToggleSetting({
  action,
  explain,
  flag,
  flagName,
  toggleFlag,
  ...restProps
}) {
  return (
    <Row className='inline-form'>
      <Col sm={ 8 } xs={ 12 }>
        <ControlLabel className='toggle-label' htmlFor={ flagName }>
          <p>
            <strong>
              { action }
            </strong>
            <br />
            {
              explain ? <em>{explain}</em> : null
            }
          </p>
        </ControlLabel>
      </Col>
      <Col sm={ 4 } xs={ 12 }>
        <TB
          name={ flagName }
          onChange={ toggleFlag }
          value={ flag }
          {...restProps}
        />
      </Col>
    </Row>
  );
}

ToggleSetting.displayName = 'ToggleSetting';
ToggleSetting.propTypes = propTypes;

import React from 'react';
import PropTypes from 'prop-types';
import { ToggleButtonGroup as BSBG, ToggleButton as TB } from 'react-bootstrap';

import ns from './ns.json';

const propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.bool.isRequired
};

export default function ToggleButton({
  onChange,
  value
}) {
  return (
    <div className={ `${ns}-container` }>
      <BSBG
        name='monthly-email'
        onChange={ onChange }
        type='radio'
        >
        <TB
          bsSize='lg'
          bsStyle='primary'
          className={ value && 'active' }
          disabled={ value }
          type='radio'
          value={ 1 }
          >
          On
        </TB>
        <TB
          bsSize='lg'
          bsStyle='primary'
          className={ !value && 'active' }
          disabled={ !value }
          type='radio'
          value={ 2 }
          >
          Off
        </TB>
      </BSBG>
    </div>
  );
}

ToggleButton.displayName = 'ToggleButton';
ToggleButton.propTypes = propTypes;

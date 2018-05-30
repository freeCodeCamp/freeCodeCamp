import React from 'react';
import PropTypes from 'prop-types';
import { ToggleButtonGroup as BSBG, ToggleButton as TB } from 'react-bootstrap';

import ns from './ns.json';

const propTypes = {
  name: PropTypes.string.isRequired,
  offLabel: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  onLabel: PropTypes.string,
  value: PropTypes.bool.isRequired
};

export default function ToggleButton({
  name,
  onChange,
  value,
  onLabel = 'On',
  offLabel = 'Off'
}) {
  return (
    <div className={ `${ns}-container` }>
      <BSBG
        name={ name }
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
          { onLabel }
        </TB>
        <TB
          bsSize='lg'
          bsStyle='primary'
          className={ !value && 'active' }
          disabled={ !value }
          type='radio'
          value={ 2 }
          >
          { offLabel }
        </TB>
      </BSBG>
    </div>
  );
}

ToggleButton.displayName = 'ToggleButton';
ToggleButton.propTypes = propTypes;

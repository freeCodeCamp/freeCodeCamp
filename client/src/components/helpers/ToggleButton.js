import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import {
  ToggleButtonGroup as BSBG,
  ToggleButton as TB
} from '@freecodecamp/react-bootstrap';

import './toggle-button.css';

const propTypes = {
  name: PropTypes.string.isRequired,
  offLabel: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  onLabel: PropTypes.string,
  value: PropTypes.bool.isRequired
};

function getActiveClass(condition) {
  return condition ? 'active' : 'not-active';
}

export default function ToggleButton({
  name,
  onChange,
  value,
  onLabel = 'On',
  offLabel = 'Off'
}) {
  return (
    <Fragment>
      <BSBG name={name} onChange={onChange} type='radio'>
        <TB
          bsSize='lg'
          bsStyle='primary'
          className={`toggle-${getActiveClass(value)}`}
          disabled={value}
          type='radio'
          value={1}
        >
          {onLabel}
        </TB>
        <TB
          bsSize='lg'
          bsStyle='primary'
          className={`toggle-${getActiveClass(!value)}`}
          disabled={!value}
          type='radio'
          value={2}
        >
          {offLabel}
        </TB>
      </BSBG>
    </Fragment>
  );
}

ToggleButton.displayName = 'ToggleButton';
ToggleButton.propTypes = propTypes;

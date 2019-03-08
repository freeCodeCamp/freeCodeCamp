import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import {
  ToggleButtonGroup as BSBG,
  ToggleButton as TB
} from '@freecodecamp/react-bootstrap';

import './toggle-button.css';
import ToggleCheck from '../../assets/icons/ToggleCheck';
import Spacer from '../../assets/icons/Spacer';

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
  const mapIconStyle = {
    height: '15px',
    marginRight: '10px',
    marginLeft: '10px',
    width: '25px'
  };
  return (
    <Fragment>
      <BSBG name={name} onChange={onChange} type='radio'>
        <TB
          bsSize='md'
          bsStyle='primary'
          className={`toggle-${getActiveClass(value)}`}
          disabled={value}
          type='radio'
          value={1}
        >
          {value ? (
            <ToggleCheck style={mapIconStyle} />
          ) : (
            <Spacer style={mapIconStyle} />
          )}

          {onLabel}
        </TB>
        <TB
          bsSize='md'
          bsStyle='primary'
          className={`toggle-${getActiveClass(!value)}`}
          disabled={!value}
          type='radio'
          value={2}
        >
          {offLabel}
          {!value ? (
            <ToggleCheck style={mapIconStyle} />
          ) : (
            <Spacer style={mapIconStyle} />
          )}
        </TB>
      </BSBG>
    </Fragment>
  );
}

ToggleButton.displayName = 'ToggleButton';
ToggleButton.propTypes = propTypes;

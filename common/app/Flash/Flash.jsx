import React from 'react';
import PropTypes from 'prop-types';
import { CloseButton } from 'react-bootstrap';
import { connect } from 'react-redux';

import ns from './ns.json';
import { alertTypes } from './redux/utils.js';
import {
  latestMessageSelector,
  clickOnClose
} from './redux';

const propTypes = {
  alertType: PropTypes.oneOf(Object.keys(alertTypes)),
  clickOnClose: PropTypes.func.isRequired,
  message: PropTypes.string
};
const mapStateToProps = latestMessageSelector;
const mapDispatchToProps = { clickOnClose };

export function Flash({ alertType, clickOnClose, message }) {
  if (!message) {
    return null;
  }
  return (
    <div className={`${ns}-container bg-${alertType}`}>
      <div className={`${ns}-content`}>
        <p className={ `${ns}-message` }>
          { message }
        </p>
        <CloseButton onClick={ clickOnClose }/>
      </div>
    </div>
  );
}

Flash.displayName = 'Flash';
Flash.propTypes = propTypes;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Flash);

import React from 'react';
import PropTypes from 'prop-types';
import { CloseButton } from 'react-bootstrap';
import { connect } from 'react-redux';

import ns from './ns.json';
import { alertTypes } from '../../utils/flash.js';
import {
  latestMessageSelector,
  clickOnClose
} from './redux';

const propTypes = {
  clickOnClose: PropTypes.func.isRequired,
  message: PropTypes.string,
  type: PropTypes.oneOf(Object.keys(alertTypes))
};
const mapStateToProps = latestMessageSelector;
const mapDispatchToProps = { clickOnClose };

export function Flash({ type, clickOnClose, message }) {
  if (!message) {
    return null;
  }
  return (
    <div className={`${ns}-container bg-${type}`}>
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

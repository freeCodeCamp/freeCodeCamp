import React from 'react';
import PropTypes from 'prop-types';
import { CloseButton } from 'react-bootstrap';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';

import ns from './ns.json';
import { alertTypes, latestMessageSelector } from './redux';

const propTypes = {
  alertType: PropTypes.oneOf(Object.keys(alertTypes)),
  message: PropTypes.string
};
const mapStateToProps = latestMessageSelector;
const mapDispatchToProps = null;

export function Flash({ alertType, message }) {
  if (!message) {
    return null;
  }
  return (
    <div className={`${ns}-container bg-${alertType}`}>
      <div className={`${ns}-content`}>
        <div>
          { message }
        </div>
        <CloseButton />
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

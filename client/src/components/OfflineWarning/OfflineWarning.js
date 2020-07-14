import React from 'react';
import PropTypes from 'prop-types';

import './offline-warning.css';

const propTypes = {
  isOnline: PropTypes.bool.isRequired,
  isSignedIn: PropTypes.bool.isRequired
};

function OfflineWarning({ isOnline, isSignedIn }) {
  return !isSignedIn || isOnline ? null : (
    <div className='offline-warning'>
      You appear to be offline, your progress may not be being saved.
    </div>
  );
}

OfflineWarning.displayName = 'OfflineWarning';
OfflineWarning.propTypes = propTypes;

export default OfflineWarning;

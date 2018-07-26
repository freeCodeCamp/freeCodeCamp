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
      We cannot reach the server to update your progress.
    </div>
  );
}

OfflineWarning.displayName = 'OfflineWarning';
OfflineWarning.propTypes = propTypes;

export default OfflineWarning;

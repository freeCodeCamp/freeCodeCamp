import React from 'react';
import PropTypes from 'prop-types';

import GreenPass from '../../../assets/icons/GreenPass';
import GreenNotCompleted from '../../../assets/icons/GreenNotCompleted';

const mapIconStyle = { height: '15px', marginRight: '10px', width: '15px' };

function Badge({ isCompleted }) {
  return (
    <span>
      {isCompleted ? (
        <GreenPass style={mapIconStyle} />
      ) : (
        <GreenNotCompleted style={mapIconStyle} />
      )}
    </span>
  );
}

Badge.propTypes = {
  isCompleted: PropTypes.bool.isRequired
};
Badge.displayName = 'Badge';

export default Badge;

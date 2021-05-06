import React from 'react';
import PropTypes from 'prop-types';

function HelpBlock({ children, className }) {
  return <span className={className}>{children}</span>;
}

HelpBlock.displayName = 'HelpBlock';
HelpBlock.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string
};

export default HelpBlock;

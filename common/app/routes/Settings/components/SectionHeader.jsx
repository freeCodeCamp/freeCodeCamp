import React from 'react';
import PropTypes from 'prop-types';
import { FullWidthRow } from '../../../helperComponents';

const propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
    PropTypes.node
  ])
};

function SectionHeader({ children }) {
  return (
    <FullWidthRow>
      <h2>{ children }</h2>
      <hr />
    </FullWidthRow>
  );
}

SectionHeader.displayName = 'SectionHeader';
SectionHeader.propTypes = propTypes;

export default SectionHeader;

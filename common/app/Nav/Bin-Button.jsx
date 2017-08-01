import React, { PropTypes } from 'react';
import { NavItem } from 'react-bootstrap';

const propTypes = {
  content: PropTypes.string,
  handleClick: PropTypes.func.isRequired
};

export default function BinButton({ content, handleClick }) {
  return (
    <NavItem
      onClick={ handleClick }
      >
      { content }
    </NavItem>
  );
}
BinButton.displayName = 'BinButton';
BinButton.propTypes = propTypes;

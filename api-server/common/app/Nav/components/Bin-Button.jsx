import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';

const propTypes = {
  content: PropTypes.string,
  disabled: PropTypes.bool,
  handleClick: PropTypes.func.isRequired
};

export default function BinButton({ content, handleClick, disabled }) {
  return (
    <Button
      className={ disabled ? 'disabled-button' : 'enabled-button' }
      onClick={ handleClick }
      >
      { content }
    </Button>
  );
}
BinButton.displayName = 'BinButton';
BinButton.propTypes = propTypes;

import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';

const propTypes = {
  content: PropTypes.string,
  handleClick: PropTypes.func.isRequired
};

export default function BinButton({ content, handleClick }) {
  return (
    <Button
      bsStyle='primary'
      onClick={ handleClick }
      >
      { content }
    </Button>
  );
}
BinButton.displayName = 'BinButton';
BinButton.propTypes = propTypes;

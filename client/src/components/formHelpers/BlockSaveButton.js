import React from 'react';
import PropTypes from 'prop-types';
import { Button } from '@freecodecamp/react-bootstrap';

function BlockSaveButton(props) {
  return (
    <Button block={true} bsStyle='primary' {...props} type='submit'>
      {props.children || 'Save'}
    </Button>
  );
}

BlockSaveButton.displayName = 'BlockSaveButton';
BlockSaveButton.propTypes = {
  children: PropTypes.any
};

export default BlockSaveButton;

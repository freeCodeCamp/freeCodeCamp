import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';

function BlockSaveButton(props) {
  return (
    <Button
      block={ true }
      bsSize='lg'
      bsStyle='primary'
      {...props}
      type='submit'
      >
      { props.children || 'Save' }
    </Button>
  );
}

BlockSaveButton.displayName = 'BlockSaveButton';
BlockSaveButton.propTypes = {
  children: PropTypes.any
};

export default BlockSaveButton;

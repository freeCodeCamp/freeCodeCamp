import React from 'react';
import PropTypes from 'prop-types';
import { Button } from '@freecodecamp/react-bootstrap';

function BlockSaveButton({ children, ...restProps }) {
  return (
    <Button
      block={true}
      bsSize='lg'
      bsStyle='primary'
      type='submit'
      {...restProps}
    >
      {children || 'Save'}
    </Button>
  );
}

BlockSaveButton.displayName = 'BlockSaveButton';
BlockSaveButton.propTypes = {
  children: PropTypes.any
};

export default BlockSaveButton;

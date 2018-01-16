import React from 'react';
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

export default BlockSaveButton;

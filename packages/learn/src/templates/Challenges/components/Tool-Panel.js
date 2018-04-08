import React from 'react';
import PropTypes from 'prop-types';

import { Button } from 'react-bootstrap';

const propTypes = {
  executeChallenge: PropTypes.func.isRequired,
  guideUrl: PropTypes.string
};

function ToolPanel({ executeChallenge, guideUrl }) {
  return (
    <div>
      <Button
        block={true}
        bsStyle='primary'
        className='btn-big'
        onClick={executeChallenge}
        >
        Run tests (Ctrl + Enter)
      </Button>
      <div className='button-spacer' />
      <Button block={true} bsStyle='primary' className='btn-big'>
        Reset your code
      </Button>
      <div className='button-spacer' />
      {guideUrl && (
        <div>
          <Button
            block={true}
            bsStyle='primary'
            className='btn-big'
            href={guideUrl}
            target='_blank'
            >
            Get a hint
          </Button>
          <div className='button-spacer' />
        </div>
      )}
      <Button block={true} bsStyle='primary' className='btn-big'>
        Ask for help on the forum
      </Button>
      <div className='button-spacer' />
    </div>
  );
}

ToolPanel.displayName = 'ToolPanel';
ToolPanel.propTypes = propTypes;

export default ToolPanel;

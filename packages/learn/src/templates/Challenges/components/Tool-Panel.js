import React from 'react';
import PropTypes from 'prop-types';

import { Button } from 'react-bootstrap';

const propTypes = {
  executeChallenge: PropTypes.func.isRequired,
  guideUrl: PropTypes.string,
  openHelpModal: PropTypes.func.isRequired,
  openResetModal: PropTypes.func.isRequired
};

function ToolPanel({
  executeChallenge,
  guideUrl,
  openResetModal,
  openHelpModal
}) {
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
      <Button
        block={true}
        bsStyle='primary'
        className='btn-big'
        onClick={openResetModal}
        >
        Reset this lesson
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
      <Button
        block={true}
        bsStyle='primary'
        className='btn-big'
        onClick={openHelpModal}
        >
        Ask for help on the forum
      </Button>
      <div className='button-spacer' />
    </div>
  );
}

ToolPanel.displayName = 'ToolPanel';
ToolPanel.propTypes = propTypes;

export default ToolPanel;

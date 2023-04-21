import React from 'react';
import Reset from '../../../../assets/icons/reset';
import Help from '../../../../assets/icons/help';

interface LowerJawPanelProps {
  resetButtonName: string;
  helpButtonName: string;
  resetButtonEvent: () => void;
  helpButtonEvent: () => void;
  hideHelpButton: boolean;
}

const LowerButtonsPanel: React.FC<LowerJawPanelProps> = ({
  resetButtonName,
  helpButtonName,
  resetButtonEvent,
  hideHelpButton,
  helpButtonEvent
}: LowerJawPanelProps) => {
  return (
    <>
      <hr />
      <div className='lower-jaw-icon-bar'>
        <button
          className='btn fade-in'
          title={resetButtonName}
          aria-label={resetButtonName}
          data-cy='reset-code-button'
          onClick={resetButtonEvent}
        >
          <Reset />
        </button>

        {hideHelpButton && (
          <button
            className='btn fade-in'
            id='get-help-button'
            title={helpButtonName}
            aria-label={helpButtonName}
            data-cy='get-help-button'
            onClick={helpButtonEvent}
          >
            <Help />
          </button>
        )}
      </div>
    </>
  );
};

export default LowerButtonsPanel;

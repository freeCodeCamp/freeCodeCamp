import React from 'react';
import Help from '../../../assets/icons/help';
import Reset from '../../../assets/icons/reset';

export const RenderContextualActionRow = ({
  resetButtonName,
  helpButtonName,
  resetButtonEvent,
  hideHelpButton,
  helpButtonEvent
}: {
  resetButtonName: string;
  helpButtonName: string;
  resetButtonEvent: () => void;
  helpButtonEvent: () => void;
  hideHelpButton: boolean;
}) => {
  return (
    <div>
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
    </div>
  );
};

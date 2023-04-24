import React from 'react';
import { useTranslation } from 'react-i18next';
import Reset from '../../../../assets/icons/reset';
import Help from '../../../../assets/icons/help';

interface LowerJawPanelProps {
  resetButtonEvent: () => void;
  helpButtonEvent: () => void;
  hideHelpButton: boolean;
}

const LowerButtonsPanel: React.FC<LowerJawPanelProps> = ({
  resetButtonEvent,
  hideHelpButton,
  helpButtonEvent
}: LowerJawPanelProps) => {
  const { t } = useTranslation();
  const resetButtonName = t('buttons.reset-step');
  const helpButtonName = t('buttons.get-help');
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

import { faWindowRestore } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useTranslation } from 'react-i18next';
import store from 'store';
import { DailyCodingChallengeLanguages } from '../../../redux/prop-types';
import EditorTabs from './editor-tabs';

interface ActionRowProps {
  dailyCodingChallengeLanguage: DailyCodingChallengeLanguages;
  hasNotes: boolean;
  hasPreview: boolean;
  isDailyCodingChallenge: boolean;
  isProjectBasedChallenge?: boolean;
  setDailyCodingChallengeLanguage: (
    language: DailyCodingChallengeLanguages
  ) => void;
  showConsole: boolean;
  showNotes: boolean;
  showInstructions: boolean;
  showPreviewPane: boolean;
  showPreviewPortal: boolean;
  togglePane: (pane: string) => void;
}

const ActionRow = ({
  hasPreview,
  hasNotes,
  togglePane,
  showNotes,
  showPreviewPane,
  showPreviewPortal,
  showConsole,
  showInstructions,
  isProjectBasedChallenge,
  isDailyCodingChallenge,
  dailyCodingChallengeLanguage,
  setDailyCodingChallengeLanguage
}: ActionRowProps): JSX.Element => {
  const { t } = useTranslation();

  // sets screen reader text for the two preview buttons
  function getPreviewBtnsSrText() {
    // no preview open
    const previewBtnsSrText = {
      pane: t('aria.show-preview'),
      portal: t('aria.open-preview-in-new-window')
    };

    // preview open in main window
    if (showPreviewPane && !showPreviewPortal) {
      previewBtnsSrText.pane = t('aria.hide-preview');
      previewBtnsSrText.portal = t('aria.move-preview-to-new-window');

      // preview open in external window
    } else if (showPreviewPortal && !showPreviewPane) {
      previewBtnsSrText.pane = t('aria.move-preview-to-main-window');
      previewBtnsSrText.portal = t('aria.close-external-preview-window');
    }

    return previewBtnsSrText;
  }

  const handleLanguageChange = (language: DailyCodingChallengeLanguages) => {
    store.set('dailyCodingChallengeLanguage', language);
    setDailyCodingChallengeLanguage(language);
  };

  return (
    <div className='action-row' data-playwright-test-label='action-row'>
      <div className='tabs-row' data-playwright-test-label='tabs-row'>
        {/* left */}
        <div className='tabs-row-left'>
          {!isProjectBasedChallenge && (
            <button
              data-playwright-test-label='instructions-button'
              aria-expanded={!!showInstructions}
              onClick={() => togglePane('showInstructions')}
            >
              {t('learn.editor-tabs.instructions')}
            </button>
          )}
          <EditorTabs data-playwright-test-label='editor-tabs' />
        </div>
        {/* middle - only used with daily coding challenges for now */}
        <div className='tabs-row-middle'>
          {isDailyCodingChallenge && (
            <>
              <button
                aria-expanded={dailyCodingChallengeLanguage === 'javascript'}
                disabled={dailyCodingChallengeLanguage === 'javascript'}
                onClick={() => handleLanguageChange('javascript')}
              >
                JavaScript
              </button>
              <button
                aria-expanded={dailyCodingChallengeLanguage === 'python'}
                disabled={dailyCodingChallengeLanguage === 'python'}
                onClick={() => handleLanguageChange('python')}
              >
                Python
              </button>
            </>
          )}
        </div>
        {/* right */}
        <div className='tabs-row-right panel-display-tabs'>
          <button
            aria-expanded={!!showConsole}
            onClick={() => togglePane('showConsole')}
          >
            {t('learn.editor-tabs.console')}
          </button>
          {hasNotes && (
            <button
              aria-expanded={!!showNotes}
              onClick={() => togglePane('showNotes')}
            >
              {t('learn.editor-tabs.notes')}
            </button>
          )}
          {hasPreview && (
            <>
              <button
                data-playwright-test-label='preview-pane-button'
                aria-expanded={!!showPreviewPane}
                onClick={() => togglePane('showPreviewPane')}
              >
                <span className='sr-only'>{getPreviewBtnsSrText().pane}</span>
                <span aria-hidden='true'>{t('learn.editor-tabs.preview')}</span>
              </button>
              <button
                aria-expanded={!!showPreviewPortal}
                onClick={() => togglePane('showPreviewPortal')}
              >
                <span className='sr-only'>{getPreviewBtnsSrText().portal}</span>
                <FontAwesomeIcon icon={faWindowRestore} />
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

ActionRow.displayName = 'ActionRow';

export default ActionRow;

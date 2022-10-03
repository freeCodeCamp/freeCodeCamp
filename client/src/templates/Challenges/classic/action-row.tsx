import React from 'react';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useTranslation } from 'react-i18next';

import BreadCrumb from '../components/bread-crumb';
import EditorTabs from './editor-tabs';

interface ActionRowProps {
  block: string;
  hasNotes: boolean;
  isProjectBasedChallenge: boolean;
  showConsole: boolean;
  showNotes: boolean;
  showInstructions: boolean;
  showPreviewPane: boolean;
  showPreviewPortal: boolean;
  superBlock: string;
  togglePane: (pane: string) => void;
}

const ActionRow = ({
  hasNotes,
  togglePane,
  showNotes,
  showPreviewPane,
  showPreviewPortal,
  showConsole,
  showInstructions,
  isProjectBasedChallenge,
  superBlock,
  block
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

  return (
    <div className='action-row'>
      <div className='breadcrumbs-demo'>
        <BreadCrumb block={block} superBlock={superBlock} />
      </div>
      <div className='tabs-row'>
        {!isProjectBasedChallenge && (
          <button
            aria-expanded={!!showInstructions}
            onClick={() => togglePane('showInstructions')}
          >
            {t('learn.editor-tabs.instructions')}
          </button>
        )}
        <EditorTabs />
        <div className='panel-display-tabs'>
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
          <button
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
            <FontAwesomeIcon icon={faExternalLinkAlt} />
          </button>
        </div>
      </div>
    </div>
  );
};

ActionRow.displayName = 'ActionRow';

export default ActionRow;

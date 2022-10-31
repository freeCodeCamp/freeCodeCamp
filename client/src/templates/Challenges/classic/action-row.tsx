import React from 'react';
import { faWindowRestore } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useTranslation } from 'react-i18next';
import EditorTabs from './editor-tabs';
import { DesktopLayoutPanels } from './use-desktop-layout-state';

interface ActionRowProps {
  hasNotes: boolean;
  hasPreview: boolean;
  isProjectBasedChallenge: boolean;
  showConsole: boolean;
  showNotes: boolean;
  showInstructions: boolean;
  showPreviewPane: boolean;
  showPreviewPortal: boolean;
  togglePane: (pane: DesktopLayoutPanels) => void;
}

const ActionRow = ({
  hasNotes,
  hasPreview,
  togglePane,
  showNotes,
  showPreviewPane,
  showPreviewPortal,
  showConsole,
  showInstructions,
  isProjectBasedChallenge
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
      <div className='tabs-row'>
        {!isProjectBasedChallenge && (
          <button
            aria-expanded={showInstructions ? 'true' : 'false'}
            className={
              showInstructions ? 'btn-tab-primary' : 'btn-tab-primary--outline'
            }
            onClick={() => togglePane(DesktopLayoutPanels.Instructions)}
          >
            {t('learn.editor-tabs.instructions')}
          </button>
        )}
        <EditorTabs />
        <button
          aria-expanded={showConsole ? 'true' : 'false'}
          className={
            showConsole ? 'btn-tab-primary' : 'btn-tab-primary--outline'
          }
          onClick={() => togglePane(DesktopLayoutPanels.Console)}
        >
          {t('learn.editor-tabs.console')}
        </button>
        {hasNotes && (
          <button
            aria-expanded={showNotes ? 'true' : 'false'}
            className={
              showNotes ? 'btn-tab-primary' : 'btn-tab-primary--outline'
            }
            onClick={() => togglePane(DesktopLayoutPanels.Notes)}
          >
            {t('learn.editor-tabs.notes')}
          </button>
        )}
        {hasPreview && (
          <>
            <button
              aria-expanded={showPreviewPane ? 'true' : 'false'}
              className={
                showPreviewPane ? 'btn-tab-primary' : 'btn-tab-primary--outline'
              }
              onClick={() => togglePane(DesktopLayoutPanels.PreviewPane)}
            >
              <span className='sr-only'>{getPreviewBtnsSrText().pane}</span>
              <span aria-hidden='true'>{t('learn.editor-tabs.preview')}</span>
            </button>
            <button
              aria-expanded={!!showPreviewPortal}
              onClick={() => togglePane(DesktopLayoutPanels.PreviewPortal)}
              className={
                showPreviewPortal
                  ? 'btn-tab-primary'
                  : 'btn-tab-primary--outline'
              }
            >
              <span className='sr-only'>{getPreviewBtnsSrText().portal}</span>
              <FontAwesomeIcon icon={faWindowRestore} />
            </button>
          </>
        )}
      </div>
    </div>
  );
};

ActionRow.displayName = 'ActionRow';

export default ActionRow;

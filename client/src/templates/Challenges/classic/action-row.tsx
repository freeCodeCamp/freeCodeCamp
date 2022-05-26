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

  return (
    <div className='action-row'>
      <div className='breadcrumbs-demo'>
        <BreadCrumb block={block} superBlock={superBlock} />
      </div>
      <div className='tabs-row'>
        {!isProjectBasedChallenge && (
          <button
            aria-expanded={showInstructions ? 'true' : 'false'}
            onClick={() => togglePane('showInstructions')}
          >
            {t('learn.editor-tabs.instructions')}
          </button>
        )}
        <EditorTabs />
        <div className='panel-display-tabs'>
          <button
            aria-expanded={showConsole ? 'true' : 'false'}
            onClick={() => togglePane('showConsole')}
          >
            {t('learn.editor-tabs.console')}
          </button>
          {hasNotes && (
            <button
              aria-expanded={showNotes ? 'true' : 'false'}
              onClick={() => togglePane('showNotes')}
            >
              {t('learn.editor-tabs.notes')}
            </button>
          )}
          <button
            aria-expanded={showPreviewPane ? 'true' : 'false'}
            onClick={() => togglePane('showPreviewPane')}
          >
            {t('learn.editor-tabs.preview')}
          </button>
          <button
            aria-expanded={showPreviewPortal ? 'true' : 'false'}
            onClick={() => togglePane('showPreviewPortal')}
          >
            <span className='sr-only'>{t('aria.preview-in-new-window')}</span>
            <FontAwesomeIcon icon={faExternalLinkAlt} />
          </button>
        </div>
      </div>
    </div>
  );
};

ActionRow.displayName = 'ActionRow';

export default ActionRow;

import React from 'react';
import { useTranslation } from 'react-i18next';
import { connect } from 'react-redux';
import BreadCrumb from '../components/bread-crumb';
import { resetChallenge } from '../redux';
import EditorTabs from './editor-tabs';

interface ActionRowProps {
  block: string;
  hasNotes: boolean;
  isMultifileCertProject: boolean;
  showInstructions: boolean;
  showConsole: boolean;
  showNotes: boolean;
  showPreview: boolean;
  superBlock: string;
  togglePane: (pane: string) => void;
  resetChallenge: () => void;
  showBreadcrumbs?: boolean;
}

const mapDispatchToProps = {
  resetChallenge
};

const ActionRow = ({
  hasNotes,
  togglePane,
  showNotes,
  showPreview,
  isMultifileCertProject,
  showInstructions,
  showConsole,
  superBlock,
  showBreadcrumbs = true,
  block
}: ActionRowProps): JSX.Element => {
  const { t } = useTranslation();
  return (
    <div className='action-row'>
      {showBreadcrumbs && (
        <div className='breadcrumbs-demo'>
          <BreadCrumb block={block} superBlock={superBlock} />
        </div>
      )}
      <div className='tabs-row'>
        {isMultifileCertProject && (
          <button
            aria-expanded={showInstructions ? 'true' : 'false'}
            className={
              showInstructions ? 'btn-tab-primary' : 'btn-tab-primary--outline'
            }
            onClick={() => togglePane('showInstructions')}
          >
            Instructions
          </button>
        )}
        <EditorTabs />
        <button
          aria-expanded={showConsole ? 'true' : 'false'}
          className={
            showConsole ? 'btn-tab-primary' : 'btn-tab-primary--outline'
          }
          onClick={() => togglePane('showConsole')}
        >
          {t('learn.editor-tabs.console')}
        </button>
        {hasNotes && (
          <button
            aria-expanded={showNotes ? 'true' : 'false'}
            className={
              showNotes ? 'btn-tab-primary' : 'btn-tab-primary--outline'
            }
            onClick={() => togglePane('showNotes')}
          >
            {t('learn.editor-tabs.notes')}
          </button>
        )}
        <button
          aria-expanded={showPreview ? 'true' : 'false'}
          className={
            showPreview ? 'btn-tab-primary' : 'btn-tab-primary--outline'
          }
          onClick={() => togglePane('showPreview')}
        >
          {t('learn.editor-tabs.preview')}
        </button>
      </div>
    </div>
  );
};

ActionRow.displayName = 'ActionRow';

export default connect(null, mapDispatchToProps)(ActionRow);

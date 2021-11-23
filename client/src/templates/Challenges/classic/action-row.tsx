import React from 'react';
import { useTranslation } from 'react-i18next';
import { connect } from 'react-redux';
import BreadCrumb from '../components/bread-crumb';
import { resetChallenge } from '../redux';
import EditorTabs from './editor-tabs';

interface ActionRowProps {
  block: string;
  hasNotes: boolean;
  showConsole: boolean;
  showNotes: boolean;
  showPreview: boolean;
  superBlock: string;
  switchDisplayTab: (displayTab: string) => void;
  resetChallenge: () => void;
}

const mapDispatchToProps = {
  resetChallenge
};

const ActionRow = ({
  hasNotes,
  switchDisplayTab,
  showNotes,
  showPreview,
  showConsole,
  superBlock,
  block,
  resetChallenge
}: ActionRowProps): JSX.Element => {
  const { t } = useTranslation();
  return (
    <div className='action-row'>
      <div className='breadcrumbs-demo'>
        <BreadCrumb block={block} superBlock={superBlock} />
      </div>
      <div className='tabs-row'>
        <EditorTabs />
        <button
          className='restart-step-tab'
          onClick={resetChallenge}
          role='tab'
        >
          {t('learn.editor-tabs.restart-step')}
        </button>
        <div className='panel-display-tabs'>
          <button
            className={showConsole ? 'active-tab' : ''}
            onClick={() => switchDisplayTab('showConsole')}
            role='tab'
          >
            {t('learn.editor-tabs.console')}
          </button>
          {hasNotes && (
            <button
              className={showNotes ? 'active-tab' : ''}
              onClick={() => switchDisplayTab('showNotes')}
              role='tab'
            >
              {t('learn.editor-tabs.notes')}
            </button>
          )}
          <button
            className={showPreview ? 'active-tab' : ''}
            onClick={() => switchDisplayTab('showPreview')}
            role='tab'
          >
            {t('learn.editor-tabs.preview')}
          </button>
        </div>
      </div>
    </div>
  );
};

ActionRow.displayName = 'ActionRow';

export default connect(null, mapDispatchToProps)(ActionRow);

import React from 'react';
import BreadCrumb from '../components/bread-crumb';
import EditorTabs from './EditorTabs';

interface ActionRowProps {
  block: string;
  showConsole: boolean;
  showNotes: boolean;
  showPreview: boolean;
  superBlock: string;
  switchDisplayTab: (displayTab: string) => void;
}

const ActionRow = ({
  switchDisplayTab,
  showPreview,
  showConsole,
  superBlock,
  block
}: ActionRowProps): JSX.Element => {
  const restartStep = () => {
    console.log('restart');
  };
  return (
    <div className='action-row'>
      <div className='breadcrumbs-demo'>
        <BreadCrumb block={block} superBlock={superBlock} />
      </div>
      <div className='tabs-row'>
        <EditorTabs />
        <button
          className='restart-step-tab'
          onClick={() => restartStep()}
          role='tab'
        >
          Restart Step
        </button>
        <div className='panel-display-tabs'>
          <button
            className={showConsole ? 'active-tab' : ''}
            onClick={() => switchDisplayTab('showConsole')}
            role='tab'
          >
            JS Console
          </button>
          <button
            className={showPreview ? 'active-tab' : ''}
            onClick={() => switchDisplayTab('showPreview')}
            role='tab'
          >
            Show Preview
          </button>
        </div>
      </div>
    </div>
  );
};

ActionRow.displayName = 'ActionRow';
export default ActionRow;

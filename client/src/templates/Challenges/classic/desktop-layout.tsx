import { first } from 'lodash-es';
import React, { useState, ReactElement } from 'react';
import { ReflexContainer, ReflexSplitter, ReflexElement } from 'react-reflex';
import envData from '../../../../../config/env.json';
import { sortChallengeFiles } from '../../../../../utils/sort-challengefiles';
import {
  ChallengeFile,
  ChallengeFiles,
  ResizePropsType
} from '../../../redux/prop-types';
import EditorTabs from './EditorTabs';
import ActionRow from './action-row';

const { showUpcomingChanges } = envData;

type Pane = { flex: number };

interface DesktopLayoutProps {
  block: string;
  challengeFiles: ChallengeFiles;
  editor: ReactElement | null;
  hasEditableBoundaries: boolean;
  hasPreview: boolean;
  instructions: ReactElement;
  layoutState: {
    codePane: Pane;
    editorPane: Pane;
    instructionPane: Pane;
    previewPane: Pane;
    testsPane: Pane;
  };
  preview: ReactElement;
  resizeProps: ResizePropsType;
  superBlock: string;
  testOutput: ReactElement;
}

const reflexProps = {
  propagateDimensions: true
};

const DesktopLayout = (props: DesktopLayoutProps): JSX.Element => {
  const [showNotes, setShowNotes] = useState(false);
  const [showPreview, setShowPreview] = useState(true);
  const [showConsole, setShowConsole] = useState(false);

  const switchDisplayTab = (displayTab: string): void => {
    switch (displayTab) {
      case 'showPreview':
        setShowPreview(!showPreview);
        break;
      case 'showConsole':
        setShowConsole(!showConsole);
        break;
      case 'showNotes':
        setShowNotes(!showNotes);
        break;
      default:
        setShowConsole(false);
        setShowPreview(false);
        setShowNotes(false);
    }
  };

  const getChallengeFile = () => {
    const { challengeFiles } = props;
    return first(sortChallengeFiles(challengeFiles)) as ChallengeFile | null;
  };

  const {
    block,
    resizeProps,
    instructions,
    editor,
    testOutput,
    hasPreview,
    layoutState,
    preview,
    hasEditableBoundaries,
    superBlock
  } = props;

  const challengeFile = getChallengeFile();
  const projectBasedChallenge = showUpcomingChanges && hasEditableBoundaries;
  const isPreviewDisplayable = projectBasedChallenge
    ? showPreview && hasPreview
    : hasPreview;
  const isConsoleDisplayable = projectBasedChallenge ? showConsole : true;
  const { codePane, editorPane, instructionPane, previewPane, testsPane } =
    layoutState;

  return (
    <div className='desktop-layout'>
      {projectBasedChallenge && (
        <ActionRow
          block={block}
          showConsole={showConsole}
          showNotes={showNotes}
          showPreview={showPreview}
          superBlock={superBlock}
          switchDisplayTab={switchDisplayTab}
        />
      )}
      <ReflexContainer orientation='vertical'>
        {!projectBasedChallenge && (
          <ReflexElement flex={instructionPane.flex} {...resizeProps}>
            {instructions}
          </ReflexElement>
        )}
        {!projectBasedChallenge && (
          <ReflexSplitter propagate={true} {...resizeProps} />
        )}

        <ReflexElement flex={editorPane.flex} {...resizeProps}>
          {challengeFile && showUpcomingChanges && !hasEditableBoundaries && (
            <EditorTabs />
          )}
          {challengeFile && (
            <ReflexContainer
              key={challengeFile.fileKey}
              orientation='horizontal'
            >
              <ReflexElement
                flex={codePane.flex}
                {...reflexProps}
                {...resizeProps}
              >
                {editor}
              </ReflexElement>
              {isConsoleDisplayable && (
                <ReflexSplitter propagate={true} {...resizeProps} />
              )}
              {isConsoleDisplayable && (
                <ReflexElement
                  flex={testsPane.flex}
                  {...reflexProps}
                  {...resizeProps}
                >
                  {testOutput}
                </ReflexElement>
              )}
            </ReflexContainer>
          )}
        </ReflexElement>
        {isPreviewDisplayable && (
          <ReflexSplitter propagate={true} {...resizeProps} />
        )}
        {isPreviewDisplayable && (
          <ReflexElement flex={previewPane.flex} {...resizeProps}>
            {preview}
          </ReflexElement>
        )}
      </ReflexContainer>
    </div>
  );
};

DesktopLayout.displayName = 'DesktopLayout';

export default DesktopLayout;

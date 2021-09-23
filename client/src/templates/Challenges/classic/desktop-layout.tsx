import { first } from 'lodash-es';
import React, { useState, ReactElement } from 'react';
import { ReflexContainer, ReflexSplitter, ReflexElement } from 'react-reflex';
import envData from '../../../../../config/env.json';
import { ChallengeFiles, ResizePropsType } from '../../../redux/prop-types';
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
  propagateDimensions: true,
  renderOnResize: true,
  renderOnResizeRate: 20
};

const DesktopLayout = (props: DesktopLayoutProps): JSX.Element => {
  // TODO: What is the point of this state?
  // const [showNotes, setShowNotes] = useState(false);
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
      default:
        setShowConsole(false);
        setShowPreview(false);
    }
  };

  const getChallengeFile = () => {
    const { challengeFiles } = props;
    return first(challengeFiles);
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
    <>
      <ReflexContainer className='desktop-layout' orientation='horizontal'>
        {projectBasedChallenge && (
          <ActionRow
            block={block}
            showConsole={showConsole}
            showPreview={showPreview}
            superBlock={superBlock}
            switchDisplayTab={switchDisplayTab}
          />
        )}
        <ReflexElement flex={8} {...reflexProps} {...resizeProps}>
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
              {challengeFile &&
                showUpcomingChanges &&
                !hasEditableBoundaries && <EditorTabs />}
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
                    <>{editor}</>
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
        </ReflexElement>
      </ReflexContainer>
    </>
  );
};

DesktopLayout.displayName = 'DesktopLayout';

export default DesktopLayout;

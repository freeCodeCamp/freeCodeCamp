import { first } from 'lodash-es';
import React, { ReactElement } from 'react';
import { ReflexContainer, ReflexSplitter, ReflexElement } from 'react-reflex';
import { sortChallengeFiles } from '../../../../../utils/sort-challengefiles';
import { GoogleTagManager } from '../../../analytics/google-tag-manater';
import { Segment } from '../../../analytics/segment';
import {
  ChallengeFile,
  ChallengeFiles,
  ResizeProps
} from '../../../redux/prop-types';
import ActionRow from './action-row';
import { useDesktopLayoutState } from './use-desktop-layout-state';

type Pane = { flex: number };

interface DesktopLayoutProps {
  block: string;
  challengeFiles: ChallengeFiles;
  challengeType: number;
  editor: ReactElement | null;
  hasEditableBoundaries: boolean;
  hasNotes: boolean;
  hasPreview: boolean;
  instructions: ReactElement;
  layoutState: {
    codePane: Pane;
    editorPane: Pane;
    instructionPane: Pane;
    notesPane: Pane;
    previewPane: Pane;
    testsPane: Pane;
  };
  notes: ReactElement;
  preview: ReactElement;
  resizeProps: ResizeProps;
  superBlock: string;
  testOutput: ReactElement;
  visibleEditors: { [key: string]: boolean };
}

const reflexProps = {
  propagateDimensions: true
};

const DesktopLayout = (props: DesktopLayoutProps): JSX.Element => {
  const {
    layoutState: { showInstructions, showNotes, showPreview, showConsole },
    togglePane
  } = useDesktopLayoutState();

  const getChallengeFile = () => {
    const { challengeFiles } = props;
    return first(sortChallengeFiles(challengeFiles) as ChallengeFile[]);
  };

  const {
    block,
    resizeProps,
    instructions,
    editor,
    testOutput,
    hasNotes,
    hasPreview,
    layoutState,
    notes,
    preview,
    hasEditableBoundaries,
    superBlock,
    visibleEditors
  } = props;

  const challengeFile = getChallengeFile();
  const projectBasedChallenge = hasEditableBoundaries;
  const displayPreview = showPreview && hasPreview;
  const displayNotes = projectBasedChallenge ? showNotes && hasNotes : false;
  const displayConsole = showConsole;
  const displayEditor = Object.entries(visibleEditors).some(
    ([, visible]) => visible
  );
  const {
    codePane,
    editorPane,
    instructionPane,
    notesPane,
    previewPane,
    testsPane
  } = layoutState;

  return (
    <>
      <div className='desktop-layout'>
        <ActionRow
          block={block}
          hasNotes={hasNotes}
          isProjectBasedChallenge={projectBasedChallenge}
          showConsole={showConsole}
          showNotes={showNotes}
          showInstructions={showInstructions}
          hasPreview={hasPreview}
          showPreview={showPreview}
          superBlock={superBlock}
          showBreadcrumbs={false}
          togglePane={togglePane}
        />
        <div className='editor-row'>
          <ReflexContainer orientation='vertical'>
            {!projectBasedChallenge && showInstructions && (
              <ReflexElement flex={instructionPane.flex} {...resizeProps}>
                {instructions}
              </ReflexElement>
            )}
            {!projectBasedChallenge && displayEditor && (
              <ReflexSplitter propagate={true} {...resizeProps} />
            )}

            {challengeFile && displayEditor && (
              <ReflexElement flex={editorPane.flex} {...resizeProps}>
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
                  {displayNotes && (
                    <ReflexSplitter propagate={true} {...resizeProps} />
                  )}
                  {displayNotes && (
                    <ReflexElement flex={notesPane.flex} {...resizeProps}>
                      {notes}
                    </ReflexElement>
                  )}
                </ReflexContainer>
              </ReflexElement>
            )}

            {(displayPreview || displayConsole) && (
              <ReflexSplitter propagate={true} {...resizeProps} />
            )}

            {(displayPreview || displayConsole) && (
              <ReflexElement flex={1} {...resizeProps}>
                <ReflexContainer orientation='horizontal'>
                  {displayPreview && (
                    <ReflexElement flex={previewPane.flex} {...resizeProps}>
                      {preview}
                    </ReflexElement>
                  )}
                  {displayConsole && displayPreview && (
                    <ReflexSplitter propagate={true} {...resizeProps} />
                  )}
                  {displayConsole && (
                    <ReflexElement
                      flex={testsPane.flex}
                      {...reflexProps}
                      {...resizeProps}
                    >
                      {testOutput}
                    </ReflexElement>
                  )}
                </ReflexContainer>
              </ReflexElement>
            )}
          </ReflexContainer>
        </div>
      </div>

      <Segment />
      <GoogleTagManager />
    </>
  );
};

DesktopLayout.displayName = 'DesktopLayout';

export default DesktopLayout;

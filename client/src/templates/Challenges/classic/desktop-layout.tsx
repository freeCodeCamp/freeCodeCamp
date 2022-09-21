import { first } from 'lodash-es';
import React, { useState, ReactElement } from 'react';
import { ReflexContainer, ReflexSplitter, ReflexElement } from 'react-reflex';
import { sortChallengeFiles } from '../../../../../utils/sort-challengefiles';
import { GoogleTagManager } from '../../../analytics/google-tag-manater';
import { Segment } from '../../../analytics/segment';
import {
  ChallengeFile,
  ChallengeFiles,
  ResizeProps
} from '../../../redux/prop-types';
import PreviewPortal from '../components/preview-portal';
import ActionRow from './action-row';

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
  windowTitle: string;
}

const reflexProps = {
  propagateDimensions: true
};

const DesktopLayout = (props: DesktopLayoutProps): JSX.Element => {
  const [showInstructions, setShowInstructions] = useState(true);
  const [showNotes, setShowNotes] = useState(false);
  const [showPreviewPane, setShowPreviewPane] = useState(true);
  const [showPreviewPortal, setShowPreviewPortal] = useState(false);
  const [showConsole, setShowConsole] = useState(false);

  const togglePane = (pane: string): void => {
    switch (pane) {
      case 'showInstructions':
        setShowInstructions(!showInstructions);
        break;
      case 'showPreviewPane':
        if (!showPreviewPane && showPreviewPortal) setShowPreviewPortal(false);
        setShowPreviewPane(!showPreviewPane);
        break;
      case 'showPreviewPortal':
        if (!showPreviewPortal && showPreviewPane) setShowPreviewPane(false);
        setShowPreviewPortal(!showPreviewPortal);
        break;
      case 'showConsole':
        setShowConsole(!showConsole);
        break;
      case 'showNotes':
        setShowNotes(!showNotes);
        break;
      default:
        setShowInstructions(true);
        setShowConsole(false);
        setShowPreviewPane(true);
        setShowPreviewPortal(false);
        setShowNotes(false);
    }
  };

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
    visibleEditors,
    windowTitle
  } = props;

  const challengeFile = getChallengeFile();
  const projectBasedChallenge = hasEditableBoundaries;
  const displayPreviewPane = hasPreview && showPreviewPane;
  const displayPreviewPortal = hasPreview && showPreviewPortal;
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
          showPreviewPane={showPreviewPane}
          showPreviewPortal={showPreviewPortal}
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

            {(displayPreviewPane || displayConsole) && (
              <ReflexSplitter propagate={true} {...resizeProps} />
            )}

            {(displayPreviewPane || displayConsole) && (
              <ReflexElement flex={1} {...resizeProps}>
                <ReflexContainer orientation='horizontal'>
                  {displayPreviewPane && (
                    <ReflexElement flex={previewPane.flex} {...resizeProps}>
                      {preview}
                    </ReflexElement>
                  )}
                  {displayConsole && displayPreviewPane && (
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
      {displayPreviewPortal && (
        <PreviewPortal togglePane={togglePane} windowTitle={windowTitle}>
          {preview}
        </PreviewPortal>
      )}
    </>
  );
};

DesktopLayout.displayName = 'DesktopLayout';

export default DesktopLayout;

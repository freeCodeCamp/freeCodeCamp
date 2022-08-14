import { first } from 'lodash-es';
import React, { useState, ReactElement } from 'react';
import { ReflexContainer, ReflexSplitter, ReflexElement } from 'react-reflex';
import { sortChallengeFiles } from '../../../../../utils/sort-challengefiles';
import { challengeTypes } from '../../../../utils/challenge-types';
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
  windowTitle: string;
}

const reflexProps = {
  propagateDimensions: true
};

const DesktopLayout = (props: DesktopLayoutProps): JSX.Element => {
  const [showNotes, setShowNotes] = useState(false);
  const [showPreviewPane, setShowPreviewPane] = useState(true);
  const [showPreviewPortal, setShowPreviewPortal] = useState(false);
  const [showConsole, setShowConsole] = useState(false);
  const [showInstructions, setShowInstuctions] = useState(true);

  const togglePane = (pane: string): void => {
    switch (pane) {
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
      case 'showInstructions':
        setShowInstuctions(!showInstructions);
        break;
      default:
        setShowInstuctions(true);
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
    challengeType,
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
    windowTitle
  } = props;

  const challengeFile = getChallengeFile();
  const projectBasedChallenge = hasEditableBoundaries;
  const isMultifileCertProject =
    challengeType === challengeTypes.multifileCertProject;
  const displayPreviewPane = hasPreview && showPreviewPane;
  const displayPreviewPortal = hasPreview && showPreviewPortal;
  const displayNotes = projectBasedChallenge ? showNotes && hasNotes : false;
  const displayConsole =
    projectBasedChallenge || isMultifileCertProject ? showConsole : true;
  const {
    codePane,
    editorPane,
    instructionPane,
    notesPane,
    previewPane,
    testsPane
  } = layoutState;

  return (
    <div className='desktop-layout'>
      {(projectBasedChallenge || isMultifileCertProject) && (
        <ActionRow
          block={block}
          hasNotes={hasNotes}
          isProjectBasedChallenge={projectBasedChallenge}
          showConsole={showConsole}
          showNotes={showNotes}
          showInstructions={showInstructions}
          showPreviewPane={showPreviewPane}
          showPreviewPortal={showPreviewPortal}
          superBlock={superBlock}
          togglePane={togglePane}
        />
      )}
      <ReflexContainer orientation='vertical'>
        {!projectBasedChallenge && showInstructions && (
          <ReflexElement flex={instructionPane.flex} {...resizeProps}>
            {instructions}
          </ReflexElement>
        )}
        {!projectBasedChallenge && showInstructions && (
          <ReflexSplitter propagate={true} {...resizeProps} />
        )}

        <ReflexElement flex={editorPane.flex} {...resizeProps}>
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
              {displayConsole && (
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
          )}
        </ReflexElement>
        {displayNotes && <ReflexSplitter propagate={true} {...resizeProps} />}
        {displayNotes && (
          <ReflexElement flex={notesPane.flex} {...resizeProps}>
            {notes}
          </ReflexElement>
        )}

        {displayPreviewPane && (
          <ReflexSplitter propagate={true} {...resizeProps} />
        )}
        {displayPreviewPane && (
          <ReflexElement flex={previewPane.flex} {...resizeProps}>
            {preview}
          </ReflexElement>
        )}
      </ReflexContainer>
      {displayPreviewPortal && (
        <PreviewPortal togglePane={togglePane} windowTitle={windowTitle}>
          {preview}
        </PreviewPortal>
      )}
    </div>
  );
};

DesktopLayout.displayName = 'DesktopLayout';

export default DesktopLayout;

import { first } from 'lodash-es';
import React, { useState, useEffect, ReactElement } from 'react';
import { ReflexContainer, ReflexSplitter, ReflexElement } from 'react-reflex';
import { createSelector } from 'reselect';
import { connect } from 'react-redux';
import { sortChallengeFiles } from '../../../../../utils/sort-challengefiles';
import { challengeTypes } from '../../../../utils/challenge-types';
import {
  ChallengeFile,
  ChallengeFiles,
  ResizeProps
} from '../../../redux/prop-types';
import { setShowPreviewPortal, setShowPreviewPane } from '../redux/actions';
import {
  portalWindowSelector,
  showPreviewPortalSelector,
  showPreviewPaneSelector,
  isAdvancingToChallengeSelector
} from '../redux/selectors';
import PreviewPortal from '../components/preview-portal';
import ActionRow from './action-row';

type Pane = { flex: number };

interface DesktopLayoutProps {
  challengeFiles: ChallengeFiles;
  challengeType: number;
  editor: ReactElement | null;
  hasEditableBoundaries: boolean;
  hasNotes: boolean;
  hasPreview: boolean;
  instructions: ReactElement;
  isAdvancing: boolean;
  isFirstStep: boolean;
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
  testOutput: ReactElement;
  windowTitle: string;
  showPreviewPortal: boolean;
  showPreviewPane: boolean;
  setShowPreviewPortal: (arg: boolean) => void;
  setShowPreviewPane: (arg: boolean) => void;
  portalWindow: null | Window;
}

const reflexProps = {
  propagateDimensions: true
};

const mapDispatchToProps = {
  setShowPreviewPortal,
  setShowPreviewPane
};

const mapStateToProps = createSelector(
  isAdvancingToChallengeSelector,
  showPreviewPortalSelector,
  showPreviewPaneSelector,
  portalWindowSelector,

  (
    isAdvancing: boolean,
    showPreviewPortal: boolean,
    showPreviewPane: boolean,
    portalWindow: null | Window
  ) => ({
    isAdvancing,
    showPreviewPortal,
    showPreviewPane,
    portalWindow
  })
);

const DesktopLayout = (props: DesktopLayoutProps): JSX.Element => {
  const {
    showPreviewPane,
    showPreviewPortal,
    setShowPreviewPane,
    setShowPreviewPortal,
    portalWindow
  } = props;

  const [showNotes, setShowNotes] = useState(false);
  const [showConsole, setShowConsole] = useState(false);
  const [showInstructions, setShowInstuctions] = useState(true);

  const togglePane = (pane: string): void => {
    switch (pane) {
      case 'showPreviewPane':
        if (!showPreviewPane && showPreviewPortal) setShowPreviewPortal(false);
        setShowPreviewPane(!showPreviewPane);
        portalWindow?.close();
        break;
      case 'showPreviewPortal':
        if (!showPreviewPortal && showPreviewPane) setShowPreviewPane(false);
        setShowPreviewPortal(!showPreviewPortal);
        if (showPreviewPortal) portalWindow?.close();
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
    challengeType,
    resizeProps,
    instructions,
    editor,
    testOutput,
    hasNotes,
    hasPreview,
    isAdvancing,
    isFirstStep,
    layoutState,
    notes,
    preview,
    hasEditableBoundaries,
    windowTitle
  } = props;

  // on mount
  useEffect(() => {
    if (isFirstStep) {
      setShowPreviewPortal(false);
      portalWindow?.close();
      setShowPreviewPane(true);
    } else if (!isAdvancing && !showPreviewPane && !showPreviewPortal) {
      togglePane('showPreviewPane');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const challengeFile = getChallengeFile();
  const projectBasedChallenge = hasEditableBoundaries;
  const isMultifileCertProject =
    challengeType === challengeTypes.multifileCertProject;
  const displayPreviewPane = hasPreview && showPreviewPane;
  const displayPreviewPortal = hasPreview && showPreviewPortal;
  const displayNotes = projectBasedChallenge ? showNotes && hasNotes : false;
  const displayEditorConsole = !(
    projectBasedChallenge || isMultifileCertProject
  )
    ? true
    : false;
  const displayPreviewConsole =
    (projectBasedChallenge || isMultifileCertProject) && showConsole;
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
          hasNotes={hasNotes}
          isProjectBasedChallenge={projectBasedChallenge}
          showConsole={showConsole}
          showNotes={showNotes}
          showInstructions={showInstructions}
          showPreviewPane={showPreviewPane}
          showPreviewPortal={showPreviewPortal}
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
              {displayEditorConsole && (
                <ReflexSplitter propagate={true} {...resizeProps} />
              )}
              {displayEditorConsole && (
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

        {(displayPreviewPane || displayPreviewConsole) && (
          <ReflexSplitter propagate={true} {...resizeProps} />
        )}
        {(displayPreviewPane || displayPreviewConsole) && (
          <ReflexElement flex={previewPane.flex} {...resizeProps}>
            <ReflexContainer orientation='horizontal'>
              {displayPreviewPane && <ReflexElement>{preview}</ReflexElement>}
              {displayPreviewPane && displayPreviewConsole && (
                <ReflexSplitter propagate={true} {...resizeProps} />
              )}
              {displayPreviewConsole && (
                <ReflexElement
                  {...(displayPreviewPane && { flex: testsPane.flex })}
                  {...resizeProps}
                >
                  {testOutput}
                </ReflexElement>
              )}
            </ReflexContainer>
          </ReflexElement>
        )}
      </ReflexContainer>
      {displayPreviewPortal && (
        <PreviewPortal windowTitle={windowTitle}>{preview}</PreviewPortal>
      )}
    </div>
  );
};

DesktopLayout.displayName = 'DesktopLayout';

export default connect(mapStateToProps, mapDispatchToProps)(DesktopLayout);

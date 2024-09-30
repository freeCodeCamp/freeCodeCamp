import { first } from 'lodash-es';
import React, { useState, useEffect, ReactElement } from 'react';
import { ReflexContainer, ReflexSplitter, ReflexElement } from 'react-reflex';
import { createSelector } from 'reselect';
import { connect } from 'react-redux';
import { sortChallengeFiles } from '../../../../utils/sort-challengefiles';
import { challengeTypes } from '../../../../../shared/config/challenge-types';
import {
  ChallengeFile,
  ChallengeFiles,
  ResizeProps
} from '../../../redux/prop-types';
import {
  removePortalWindow,
  setShowPreviewPortal,
  setShowPreviewPane
} from '../redux/actions';
import {
  portalWindowSelector,
  showPreviewPortalSelector,
  showPreviewPaneSelector,
  isAdvancingToChallengeSelector
} from '../redux/selectors';
import PreviewPortal from '../components/preview-portal';
import Notes from '../components/notes';
import ActionRow from './action-row';

type Pane = { flex: number };

interface DesktopLayoutProps {
  challengeFiles: ChallengeFiles;
  challengeType: number;
  editor: ReactElement | null;
  hasEditableBoundaries: boolean;
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
  notes: string;
  onPreviewResize: () => void;
  preview: ReactElement;
  resizeProps: ResizeProps;
  testOutput: ReactElement;
  windowTitle: string;
  showPreviewPortal: boolean;
  showPreviewPane: boolean;
  startWithConsoleShown: boolean;
  removePortalWindow: () => void;
  setShowPreviewPortal: (arg: boolean) => void;
  setShowPreviewPane: (arg: boolean) => void;
  portalWindow: null | Window;
}

const reflexProps = {
  propagateDimensions: true
};

const mapDispatchToProps = {
  removePortalWindow,
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
    removePortalWindow,
    setShowPreviewPane,
    setShowPreviewPortal,
    portalWindow,
    startWithConsoleShown
  } = props;

  const [showNotes, setShowNotes] = useState(false);
  const [showConsole, setShowConsole] = useState(startWithConsoleShown);
  const [showInstructions, setShowInstructions] = useState(true);

  const togglePane = (pane: string): void => {
    if (pane === 'showPreviewPane') {
      if (!showPreviewPane && showPreviewPortal) {
        setShowPreviewPortal(false);
      }
      setShowPreviewPane(!showPreviewPane);
      portalWindow?.close();
      removePortalWindow();
    } else if (pane === 'showPreviewPortal') {
      if (!showPreviewPortal && showPreviewPane) {
        setShowPreviewPane(false);
      }
      setShowPreviewPortal(!showPreviewPortal);
      if (showPreviewPortal) {
        portalWindow?.close();
        removePortalWindow();
      }
    } else if (pane === 'showConsole') {
      setShowConsole(!showConsole);
    } else if (pane === 'showNotes') {
      setShowNotes(!showNotes);
    } else if (pane === 'showInstructions') {
      setShowInstructions(!showInstructions);
    } else {
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
    challengeType,
    resizeProps,
    instructions,
    editor,
    testOutput,
    hasPreview,
    isAdvancing,
    isFirstStep,
    layoutState,
    notes,
    onPreviewResize,
    preview,
    hasEditableBoundaries,
    windowTitle
  } = props;

  // on mount
  useEffect(() => {
    if (isFirstStep && !showPreviewPortal) {
      setShowPreviewPane(true);
    } else if (!isAdvancing && !showPreviewPane && !showPreviewPortal) {
      togglePane('showPreviewPane');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const challengeFile = getChallengeFile();
  const projectBasedChallenge = hasEditableBoundaries;
  const isMultifileCertProject =
    challengeType === challengeTypes.multifileCertProject ||
    challengeType === challengeTypes.multifilePythonCertProject;
  const displayPreviewPane = hasPreview && showPreviewPane;
  const displayPreviewPortal = hasPreview && showPreviewPortal;
  const displayNotes = projectBasedChallenge ? showNotes && !!notes : false;
  const displayEditorConsole = !(
    projectBasedChallenge || isMultifileCertProject
  )
    ? true
    : false;
  const displayPreviewConsole =
    (projectBasedChallenge || isMultifileCertProject) && showConsole;
  const hasVerticalResizableCodePane =
    !isMultifileCertProject && !projectBasedChallenge;
  const {
    codePane,
    editorPane,
    instructionPane,
    notesPane,
    previewPane,
    testsPane
  } = layoutState;

  return (
    <div className='desktop-layout' data-playwright-test-label='desktop-layout'>
      {(projectBasedChallenge || isMultifileCertProject) && (
        <ActionRow
          hasPreview={hasPreview}
          hasNotes={!!notes}
          isProjectBasedChallenge={projectBasedChallenge}
          showConsole={showConsole}
          showNotes={showNotes}
          showInstructions={showInstructions}
          showPreviewPane={showPreviewPane}
          showPreviewPortal={showPreviewPortal}
          togglePane={togglePane}
          data-playwright-test-label='action-row'
        />
      )}
      <ReflexContainer
        orientation='vertical'
        data-playwright-test-label='main-container'
      >
        {!projectBasedChallenge && showInstructions && (
          <ReflexElement
            flex={instructionPane.flex}
            {...resizeProps}
            name='instructionPane'
            data-playwright-test-label='instruction-pane'
          >
            {instructions}
          </ReflexElement>
        )}
        {!projectBasedChallenge && showInstructions && (
          <ReflexSplitter propagate={true} {...resizeProps} />
        )}

        <ReflexElement
          flex={editorPane.flex}
          name='editorPane'
          {...resizeProps}
          data-playwright-test-label='editor-pane'
        >
          {challengeFile && (
            <ReflexContainer
              key={challengeFile.fileKey}
              orientation='horizontal'
            >
              <ReflexElement
                name='codePane'
                {...(hasVerticalResizableCodePane && { flex: codePane.flex })}
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
          <ReflexElement
            name='notesPane'
            flex={notesPane.flex}
            {...resizeProps}
          >
            <Notes notes={notes} />
          </ReflexElement>
        )}

        {(displayPreviewPane || displayPreviewConsole) && (
          <ReflexSplitter
            data-playwright-test-label='preview-left-splitter'
            propagate={true}
            {...resizeProps}
          />
        )}
        {(displayPreviewPane || displayPreviewConsole) && (
          <ReflexElement
            flex={previewPane.flex}
            name='previewPane'
            {...resizeProps}
            data-playwright-test-label='preview-pane'
          >
            <ReflexContainer orientation='horizontal'>
              {displayPreviewPane && <ReflexElement>{preview}</ReflexElement>}
              {displayPreviewPane && displayPreviewConsole && (
                <ReflexSplitter propagate={true} {...resizeProps} />
              )}
              {displayPreviewConsole && (
                <ReflexElement
                  name='testsPane'
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
        <PreviewPortal onResize={onPreviewResize} windowTitle={windowTitle}>
          {preview}
        </PreviewPortal>
      )}
    </div>
  );
};

DesktopLayout.displayName = 'DesktopLayout';

export default connect(mapStateToProps, mapDispatchToProps)(DesktopLayout);

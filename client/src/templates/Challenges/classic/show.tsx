import { graphql } from 'gatsby';
import React, { useState, useEffect, useRef } from 'react';
import Helmet from 'react-helmet';
import { useTranslation } from 'react-i18next';
import { connect } from 'react-redux';
import { HandlerProps } from 'react-reflex';
import Media from 'react-responsive';
import { bindActionCreators, Dispatch } from 'redux';
import { createStructuredSelector } from 'reselect';
import store from 'store';
import { editor } from 'monaco-editor';
import { challengeTypes } from '../../../../utils/challenge-types';
import LearnLayout from '../../../components/layouts/learn';
import { MAX_MOBILE_WIDTH } from '../../../../../config/misc';

import {
  ChallengeFiles,
  ChallengeMeta,
  ChallengeNode,
  CompletedChallenge,
  ResizeProps,
  SavedChallengeFiles,
  Test
} from '../../../redux/prop-types';
import { isContained } from '../../../utils/is-contained';
import ChallengeDescription from '../components/challenge-description';
import Hotkeys from '../components/hotkeys';
import ResetModal from '../components/reset-modal';
import ChallengeTitle from '../components/challenge-title';
import CompletionModal from '../components/completion-modal';
import HelpModal from '../components/help-modal';
import ShortcutsModal from '../components/shortcuts-modal';
import Notes from '../components/notes';
import Output from '../components/output';
import Preview, { type PreviewProps } from '../components/preview';
import ProjectPreviewModal from '../components/project-preview-modal';
import SidePanel from '../components/side-panel';
import VideoModal from '../components/video-modal';
import {
  cancelTests,
  challengeMounted,
  createFiles,
  executeChallenge,
  initConsole,
  initTests,
  previewMounted,
  updateChallengeMeta,
  openModal,
  setEditorFocusability,
  setIsAdvancing
} from '../redux/actions';
import {
  challengeFilesSelector,
  consoleOutputSelector,
  isChallengeCompletedSelector
} from '../redux/selectors';
import { savedChallengesSelector } from '../../../redux/selectors';
import { getGuideUrl } from '../utils';
import MultifileEditor from './multifile-editor';
import DesktopLayout from './desktop-layout';
import MobileLayout from './mobile-layout';

import './classic.css';
import '../components/test-frame.css';

const mapStateToProps = createStructuredSelector({
  challengeFiles: challengeFilesSelector,
  output: consoleOutputSelector,
  isChallengeCompleted: isChallengeCompletedSelector,
  savedChallenges: savedChallengesSelector
});

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(
    {
      createFiles,
      initConsole,
      initTests,
      updateChallengeMeta,
      challengeMounted,
      executeChallenge,
      cancelTests,
      previewMounted,
      openModal,
      setEditorFocusability,
      setIsAdvancing
    },
    dispatch
  );

interface ShowClassicProps extends Pick<PreviewProps, 'previewMounted'> {
  cancelTests: () => void;
  challengeMounted: (arg0: string) => void;
  createFiles: (arg0: ChallengeFiles | SavedChallengeFiles) => void;
  data: { challengeNode: ChallengeNode };
  executeChallenge: (options?: { showCompletionModal: boolean }) => void;
  challengeFiles: ChallengeFiles;
  initConsole: (arg0: string) => void;
  initTests: (tests: Test[]) => void;
  isChallengeCompleted: boolean;
  output: string[];
  pageContext: {
    challengeMeta: ChallengeMeta;
    projectPreview: {
      challengeData: CompletedChallenge;
      showProjectPreview: boolean;
    };
  };
  updateChallengeMeta: (arg0: ChallengeMeta) => void;
  openModal: (modal: string) => void;
  setEditorFocusability: (canFocus: boolean) => void;
  setIsAdvancing: (arg: boolean) => void;
  savedChallenges: CompletedChallenge[];
}

interface ReflexLayout {
  codePane: { flex: number };
  editorPane: { flex: number };
  instructionPane: { flex: number };
  notesPane: { flex: number };
  previewPane: { flex: number };
  testsPane: { flex: number };
}

interface RenderEditorArgs {
  isMobileLayout: boolean;
  isUsingKeyboardInTablist: boolean;
}

const REFLEX_LAYOUT = 'challenge-layout';
const BASE_LAYOUT = {
  codePane: { flex: 1 },
  editorPane: { flex: 1 },
  instructionPane: { flex: 1 },
  previewPane: { flex: 0.7 },
  notesPane: { flex: 0.7 },
  testsPane: { flex: 0.3 }
};

// Used to prevent monaco from stealing mouse/touch events on the upper jaw
// content widget so they can trigger their default actions. (Issue #46166)
const handleContentWidgetEvents = (e: MouseEvent | TouchEvent): void => {
  const target = e.target as HTMLElement;
  if (target?.closest('.editor-upper-jaw')) {
    e.stopPropagation();
  }
};

const StepPreview = ({
  disableIframe,
  previewMounted
}: Pick<PreviewProps, 'disableIframe' | 'previewMounted'>) => {
  return (
    <Preview
      className='full-height'
      disableIframe={disableIframe}
      previewMounted={previewMounted}
    />
  );
};

// The newline is important, because this text ends up in a `pre` element.
const defaultOutput = `
/**
* Your test output will go here
*/`;

function ShowClassic({
  challengeFiles: reduxChallengeFiles,
  data: {
    challengeNode: {
      challenge: {
        challengeFiles,
        block,
        title,
        description,
        instructions,
        fields: { tests, blockName },
        challengeType,
        removeComments,
        hasEditableBoundaries,
        superBlock,
        helpCategory,
        forumTopicId,
        usesMultifileEditor,
        notes,
        videoUrl,
        translationPending
      }
    }
  },
  pageContext: {
    challengeMeta,
    challengeMeta: { isFirstStep, nextChallengePath, prevChallengePath },
    projectPreview: { challengeData, showProjectPreview }
  },
  createFiles,
  cancelTests,
  challengeMounted,
  initConsole,
  initTests,
  updateChallengeMeta,
  openModal,
  setIsAdvancing,
  savedChallenges,
  isChallengeCompleted,
  output,
  executeChallenge,
  previewMounted
}: ShowClassicProps) {
  const { t } = useTranslation();
  const [resizing, setResizing] = useState(false);
  const [usingKeyboardInTablist, setUsingKeyboardInTablist] = useState(false);
  const containerRef = useRef<HTMLElement>();
  const editorRef = useRef<editor.IStandaloneCodeEditor>();
  const instructionsPanelRef = useRef<HTMLDivElement>(null);

  const blockNameTitle = `${t(
    `intro:${superBlock}.blocks.${block}.title`
  )}: ${title}`;
  const windowTitle = `${blockNameTitle} | freeCodeCamp.org`;
  const showPreview =
    challengeType === challengeTypes.html ||
    challengeType === challengeTypes.modern ||
    challengeType === challengeTypes.multifileCertProject;

  const getLayoutState = () => {
    const reflexLayout = store.get(REFLEX_LAYOUT) as ReflexLayout;

    // Validate if user has not done any resize of the panes
    if (!reflexLayout) return BASE_LAYOUT;

    // Check that the layout values stored are valid (exist in base layout). If
    // not valid, it will fallback to the base layout values and be set on next
    // user resize.
    const isValidLayout = isContained(
      Object.keys(BASE_LAYOUT),
      Object.keys(reflexLayout)
    );

    return isValidLayout ? reflexLayout : BASE_LAYOUT;
  };

  // layout: Holds the information of the panes sizes for desktop view
  const [layout, setLayout] = useState(getLayoutState());

  const onStopResize = (event: HandlerProps) => {
    const { name, flex } = event.component.props;

    // Only interested in tracking layout updates for ReflexElement's
    if (!name) {
      setResizing(false);
      return;
    }

    // Forcing a state update with the value of each panel since on stop resize
    // is executed per each panel.
    if (typeof layout === 'object') {
      setLayout({
        ...layout,
        [name]: { flex }
      });
    }
    setResizing(false);

    store.set(REFLEX_LAYOUT, layout);
  };

  const setHtmlHeight = () => {
    const vh = String(window.innerHeight - 1);
    document.documentElement.style.height = vh + 'px';
  };
  const onResize = () => {
    setResizing(true);
  };
  const resizeProps: ResizeProps = {
    onResize,
    onStopResize
  };

  const updateUsingKeyboardInTablist = (
    usingKeyboardInTablist: boolean
  ): void => {
    setUsingKeyboardInTablist(usingKeyboardInTablist);
  };

  useEffect(() => {
    initializeComponent(title);
    // Bug fix for the monaco content widget and touch devices/right mouse
    // click. (Issue #46166)
    document.addEventListener('mousedown', handleContentWidgetEvents, true);
    document.addEventListener('contextmenu', handleContentWidgetEvents, true);
    document.addEventListener('touchstart', handleContentWidgetEvents, true);
    document.addEventListener('touchmove', handleContentWidgetEvents, true);
    document.addEventListener('touchend', handleContentWidgetEvents, true);

    window.addEventListener('resize', setHtmlHeight);
    setHtmlHeight();

    return () => {
      createFiles([]);
      cancelTests();
      document.removeEventListener(
        'mousedown',
        handleContentWidgetEvents,
        true
      );
      document.removeEventListener(
        'contextmenu',
        handleContentWidgetEvents,
        true
      );
      document.removeEventListener(
        'touchstart',
        handleContentWidgetEvents,
        true
      );
      document.removeEventListener(
        'touchmove',
        handleContentWidgetEvents,
        true
      );
      document.removeEventListener('touchend', handleContentWidgetEvents, true);
      window.removeEventListener('resize', setHtmlHeight);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    initializeComponent(title);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tests, title]);

  const initializeComponent = (title: string): void => {
    initConsole('');

    const savedChallenge = savedChallenges?.find(challenge => {
      return challenge.id === challengeMeta.id;
    });

    createFiles(savedChallenge?.challengeFiles || challengeFiles || []);

    initTests(tests);
    if (showProjectPreview) openModal('projectPreview');
    updateChallengeMeta({
      ...challengeMeta,
      title,
      removeComments: removeComments !== false,
      challengeType,
      helpCategory
    });
    challengeMounted(challengeMeta.id);
    setIsAdvancing(false);
  };

  const renderInstructionsPanel = ({
    showToolPanel
  }: {
    showToolPanel: boolean;
  }) => {
    return (
      <SidePanel
        block={block}
        challengeDescription={
          <ChallengeDescription
            block={block}
            description={description}
            instructions={instructions}
            superBlock={superBlock}
          />
        }
        challengeTitle={
          <ChallengeTitle
            isCompleted={isChallengeCompleted}
            translationPending={translationPending}
          >
            {title}
          </ChallengeTitle>
        }
        guideUrl={getGuideUrl({ forumTopicId, title })}
        instructionsPanelRef={instructionsPanelRef}
        showToolPanel={showToolPanel}
        superBlock={superBlock}
        videoUrl={videoUrl}
      />
    );
  };

  const renderEditor = ({
    isMobileLayout,
    isUsingKeyboardInTablist
  }: RenderEditorArgs) => {
    return (
      reduxChallengeFiles && (
        <MultifileEditor
          challengeFiles={reduxChallengeFiles}
          containerRef={containerRef}
          description={description}
          editorRef={editorRef}
          initialTests={tests}
          isMobileLayout={isMobileLayout}
          isUsingKeyboardInTablist={isUsingKeyboardInTablist}
          resizeProps={resizeProps}
          title={title}
          usesMultifileEditor={usesMultifileEditor}
          showProjectPreview={showProjectPreview}
        />
      )
    );
  };

  return (
    <Hotkeys
      challengeType={challengeType}
      executeChallenge={executeChallenge}
      innerRef={containerRef}
      instructionsPanelRef={instructionsPanelRef}
      nextChallengePath={nextChallengePath}
      prevChallengePath={prevChallengePath}
      usesMultifileEditor={usesMultifileEditor}
      {...(editorRef && { editorRef: editorRef })}
    >
      <LearnLayout>
        <Helmet title={windowTitle} />
        <Media maxWidth={MAX_MOBILE_WIDTH}>
          <MobileLayout
            editor={renderEditor({
              isMobileLayout: true,
              isUsingKeyboardInTablist: usingKeyboardInTablist
            })}
            guideUrl={getGuideUrl({ forumTopicId, title })}
            hasEditableBoundaries={hasEditableBoundaries}
            hasNotes={!!notes}
            hasPreview={showPreview}
            instructions={renderInstructionsPanel({
              showToolPanel: false
            })}
            notes={<Notes notes={notes} />}
            preview={
              <StepPreview
                disableIframe={resizing}
                previewMounted={previewMounted}
              />
            }
            testOutput={
              <Output defaultOutput={defaultOutput} output={output} />
            }
            updateUsingKeyboardInTablist={updateUsingKeyboardInTablist}
            usesMultifileEditor={usesMultifileEditor}
            videoUrl={videoUrl}
          />
        </Media>
        <Media minWidth={MAX_MOBILE_WIDTH + 1}>
          <DesktopLayout
            challengeFiles={reduxChallengeFiles}
            challengeType={challengeType}
            editor={renderEditor({
              isMobileLayout: false,
              isUsingKeyboardInTablist: usingKeyboardInTablist
            })}
            hasEditableBoundaries={hasEditableBoundaries}
            hasNotes={!!notes}
            hasPreview={showPreview}
            instructions={renderInstructionsPanel({
              showToolPanel: true
            })}
            isFirstStep={isFirstStep}
            layoutState={layout}
            notes={<Notes notes={notes} />}
            preview={
              <StepPreview
                disableIframe={resizing}
                previewMounted={previewMounted}
              />
            }
            resizeProps={resizeProps}
            testOutput={
              <Output defaultOutput={defaultOutput} output={output} />
            }
            windowTitle={windowTitle}
          />
        </Media>
        <CompletionModal />
        <HelpModal challengeTitle={title} challengeBlock={blockName} />
        <VideoModal videoUrl={videoUrl} />
        <ResetModal />
        <ProjectPreviewModal
          challengeData={challengeData}
          closeText={t('buttons.start-coding')}
          previewTitle={t('learn.project-preview-title')}
          showProjectPreview={showProjectPreview}
        />
        <ShortcutsModal />
      </LearnLayout>
    </Hotkeys>
  );
}

ShowClassic.displayName = 'ShowClassic';

export default connect(mapStateToProps, mapDispatchToProps)(ShowClassic);

export const query = graphql`
  query ClassicChallenge($slug: String!) {
    challengeNode(challenge: { fields: { slug: { eq: $slug } } }) {
      challenge {
        block
        title
        description
        id
        hasEditableBoundaries
        instructions
        notes
        removeComments
        challengeType
        helpCategory
        videoUrl
        superBlock
        translationPending
        forumTopicId
        fields {
          blockName
          slug
          tests {
            text
            testString
          }
        }
        required {
          link
          src
        }
        usesMultifileEditor
        challengeFiles {
          fileKey
          ext
          name
          contents
          head
          tail
          editableRegionBoundaries
          history
        }
      }
    }
  }
`;

import { graphql } from 'gatsby';
import React, { Component, MutableRefObject } from 'react';
import Helmet from 'react-helmet';
import { TFunction, withTranslation } from 'react-i18next';
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
import Preview from '../components/preview';
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
  challengeTestsSelector,
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

// Redux Setup
const mapStateToProps = createStructuredSelector({
  challengeFiles: challengeFilesSelector,
  tests: challengeTestsSelector,
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

// Types
interface ShowClassicProps {
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
  t: TFunction;
  tests: Test[];
  updateChallengeMeta: (arg0: ChallengeMeta) => void;
  openModal: (modal: string) => void;
  setEditorFocusability: (canFocus: boolean) => void;
  setIsAdvancing: (arg: boolean) => void;
  previewMounted: () => void;
  savedChallenges: CompletedChallenge[];
}

interface ShowClassicState {
  layout: ReflexLayout;
  resizing: boolean;
  usingKeyboardInTablist: boolean;
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

// Component
class ShowClassic extends Component<ShowClassicProps, ShowClassicState> {
  static displayName: string;
  containerRef: React.RefObject<HTMLElement>;
  editorRef: React.RefObject<editor.IStandaloneCodeEditor | HTMLElement>;
  instructionsPanelRef: React.RefObject<HTMLDivElement>;
  resizeProps: ResizeProps;

  constructor(props: ShowClassicProps) {
    super(props);

    this.resizeProps = {
      onStopResize: this.onStopResize.bind(this),
      onResize: this.onResize.bind(this)
    };

    // layout: Holds the information of the panes sizes for desktop view
    this.state = {
      layout: this.getLayoutState(),
      resizing: false,
      usingKeyboardInTablist: false
    };

    this.containerRef = React.createRef();
    this.editorRef = React.createRef();
    this.instructionsPanelRef = React.createRef();

    this.updateUsingKeyboardInTablist =
      this.updateUsingKeyboardInTablist.bind(this);
  }

  updateUsingKeyboardInTablist(usingKeyboardInTablist: boolean): void {
    this.setState({ usingKeyboardInTablist });
  }

  getLayoutState(): ReflexLayout {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const reflexLayout: ReflexLayout = store.get(REFLEX_LAYOUT);

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
  }

  onResize() {
    this.setState(state => ({ ...state, resizing: true }));
  }

  onStopResize(event: HandlerProps) {
    const { name, flex } = event.component.props;

    // Only interested in tracking layout updates for ReflexElement's
    if (!name) {
      this.setState(state => ({ ...state, resizing: false }));
      return;
    }

    // Forcing a state update with the value of each panel since on stop resize
    // is executed per each panel.
    const newLayout =
      typeof this.state.layout === 'object'
        ? {
            ...this.state.layout,
            [name]: { flex }
          }
        : this.state.layout;

    this.setState({
      layout: newLayout,
      resizing: false
    });

    store.set(REFLEX_LAYOUT, this.state.layout);
  }

  componentDidMount() {
    const {
      data: {
        challengeNode: {
          challenge: { title }
        }
      }
    } = this.props;
    this.initializeComponent(title);
    // Bug fix for the monaco content widget and touch devices/right mouse
    // click. (Issue #46166)
    document.addEventListener('mousedown', handleContentWidgetEvents, true);
    document.addEventListener('contextmenu', handleContentWidgetEvents, true);
    document.addEventListener('touchstart', handleContentWidgetEvents, true);
    document.addEventListener('touchmove', handleContentWidgetEvents, true);
    document.addEventListener('touchend', handleContentWidgetEvents, true);
  }

  componentDidUpdate(prevProps: ShowClassicProps) {
    const {
      data: {
        challengeNode: {
          challenge: {
            title: prevTitle,
            fields: { tests: prevTests }
          }
        }
      }
    } = prevProps;
    const {
      data: {
        challengeNode: {
          challenge: {
            title: currentTitle,
            fields: { tests: currTests }
          }
        }
      }
    } = this.props;
    if (prevTitle !== currentTitle || prevTests !== currTests) {
      this.initializeComponent(currentTitle);
    }
  }

  initializeComponent(title: string) {
    const {
      challengeMounted,
      createFiles,
      initConsole,
      initTests,
      updateChallengeMeta,
      openModal,
      setIsAdvancing,
      savedChallenges,
      data: {
        challengeNode: {
          challenge: {
            challengeFiles,
            fields: { tests },
            challengeType,
            removeComments,
            helpCategory
          }
        }
      },
      pageContext: {
        challengeMeta,
        projectPreview: { showProjectPreview }
      }
    } = this.props;
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
  }

  componentWillUnmount() {
    const { createFiles, cancelTests } = this.props;
    createFiles([]);
    cancelTests();
    document.removeEventListener('mousedown', handleContentWidgetEvents, true);
    document.removeEventListener(
      'contextmenu',
      handleContentWidgetEvents,
      true
    );
    document.removeEventListener('touchstart', handleContentWidgetEvents, true);
    document.removeEventListener('touchmove', handleContentWidgetEvents, true);
    document.removeEventListener('touchend', handleContentWidgetEvents, true);
  }

  getChallenge = () => this.props.data.challengeNode.challenge;

  getBlockNameTitle(t: TFunction) {
    const { block, superBlock, title } = this.getChallenge();
    return `${t(`intro:${superBlock}.blocks.${block}.title`)}: ${title}`;
  }

  getVideoUrl = () => this.getChallenge().videoUrl;

  hasPreview() {
    const { challengeType } = this.getChallenge();
    return (
      challengeType === challengeTypes.html ||
      challengeType === challengeTypes.modern ||
      challengeType === challengeTypes.multifileCertProject
    );
  }

  renderInstructionsPanel({ showToolPanel }: { showToolPanel: boolean }) {
    const {
      block,
      description,
      forumTopicId,
      instructions,
      title,
      translationPending
    } = this.getChallenge();

    return (
      <SidePanel
        block={block}
        challengeDescription={
          <ChallengeDescription
            block={block}
            description={description}
            instructions={instructions}
          />
        }
        challengeTitle={
          <ChallengeTitle
            isCompleted={this.props.isChallengeCompleted}
            translationPending={translationPending}
          >
            {title}
          </ChallengeTitle>
        }
        guideUrl={getGuideUrl({ forumTopicId, title })}
        instructionsPanelRef={this.instructionsPanelRef}
        showToolPanel={showToolPanel}
        videoUrl={this.getVideoUrl()}
      />
    );
  }

  renderEditor({ isMobileLayout, isUsingKeyboardInTablist }: RenderEditorArgs) {
    const {
      pageContext: {
        projectPreview: { showProjectPreview }
      },
      challengeFiles,
      data: {
        challengeNode: {
          challenge: {
            fields: { tests },
            usesMultifileEditor
          }
        }
      }
    } = this.props;
    const { description, title } = this.getChallenge();
    return (
      challengeFiles && (
        <MultifileEditor
          challengeFiles={challengeFiles}
          containerRef={this.containerRef}
          description={description}
          // Try to remove unknown
          editorRef={
            this.editorRef as MutableRefObject<editor.IStandaloneCodeEditor>
          }
          initialTests={tests}
          isMobileLayout={isMobileLayout}
          isUsingKeyboardInTablist={isUsingKeyboardInTablist}
          resizeProps={this.resizeProps}
          title={title}
          usesMultifileEditor={usesMultifileEditor}
          showProjectPreview={showProjectPreview}
        />
      )
    );
  }

  renderTestOutput() {
    const { output, t } = this.props;
    return (
      <Output
        defaultOutput={`
/**
* ${t('learn.test-output')}
*/
`}
        output={output}
      />
    );
  }

  renderNotes(notes?: string) {
    return <Notes notes={notes} />;
  }

  renderPreview() {
    return (
      <Preview
        className='full-height'
        disableIframe={this.state.resizing}
        previewMounted={this.props.previewMounted}
      />
    );
  }

  render() {
    const {
      block,
      challengeType,
      fields: { blockName },
      forumTopicId,
      hasEditableBoundaries,
      superBlock,
      certification,
      title,
      usesMultifileEditor,
      notes
    } = this.getChallenge();
    const {
      executeChallenge,
      pageContext: {
        challengeMeta: { isFirstStep, nextChallengePath, prevChallengePath },
        projectPreview: { challengeData, showProjectPreview }
      },
      challengeFiles,
      t
    } = this.props;

    const blockNameTitle = this.getBlockNameTitle(t);
    const windowTitle = `${blockNameTitle} | freeCodeCamp.org`;

    return (
      <Hotkeys
        challengeType={challengeType}
        editorRef={this.editorRef as React.RefObject<HTMLElement>}
        executeChallenge={executeChallenge}
        innerRef={this.containerRef}
        instructionsPanelRef={this.instructionsPanelRef}
        nextChallengePath={nextChallengePath}
        prevChallengePath={prevChallengePath}
        usesMultifileEditor={usesMultifileEditor}
      >
        <LearnLayout>
          <Helmet title={windowTitle} />
          <Media maxWidth={MAX_MOBILE_WIDTH}>
            <MobileLayout
              editor={this.renderEditor({
                isMobileLayout: true,
                isUsingKeyboardInTablist: this.state.usingKeyboardInTablist
              })}
              guideUrl={getGuideUrl({ forumTopicId, title })}
              hasEditableBoundaries={hasEditableBoundaries}
              hasNotes={!!notes}
              hasPreview={this.hasPreview()}
              instructions={this.renderInstructionsPanel({
                showToolPanel: false
              })}
              notes={this.renderNotes(notes)}
              preview={this.renderPreview()}
              testOutput={this.renderTestOutput()}
              // eslint-disable-next-line @typescript-eslint/unbound-method
              updateUsingKeyboardInTablist={this.updateUsingKeyboardInTablist}
              usesMultifileEditor={usesMultifileEditor}
              videoUrl={this.getVideoUrl()}
            />
          </Media>
          <Media minWidth={MAX_MOBILE_WIDTH + 1}>
            <DesktopLayout
              challengeFiles={challengeFiles}
              challengeType={challengeType}
              editor={this.renderEditor({
                isMobileLayout: false,
                isUsingKeyboardInTablist: this.state.usingKeyboardInTablist
              })}
              hasEditableBoundaries={hasEditableBoundaries}
              hasNotes={!!notes}
              hasPreview={this.hasPreview()}
              instructions={this.renderInstructionsPanel({
                showToolPanel: true
              })}
              isFirstStep={isFirstStep}
              layoutState={this.state.layout}
              notes={this.renderNotes(notes)}
              preview={this.renderPreview()}
              resizeProps={this.resizeProps}
              testOutput={this.renderTestOutput()}
              windowTitle={windowTitle}
            />
          </Media>
          <CompletionModal
            block={block}
            blockName={blockName}
            certification={certification}
            superBlock={superBlock}
          />
          <HelpModal challengeTitle={title} challengeBlock={blockName} />
          <VideoModal videoUrl={this.getVideoUrl()} />
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
}

ShowClassic.displayName = 'ShowClassic';

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withTranslation()(ShowClassic));

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
        certification
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

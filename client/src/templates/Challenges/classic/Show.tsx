// Package Utilities
import { graphql } from 'gatsby';
import React, { Component } from 'react';
import Helmet from 'react-helmet';
import { TFunction, withTranslation } from 'react-i18next';
import { connect } from 'react-redux';
import { HandlerProps } from 'react-reflex';
import Media from 'react-responsive';
import { bindActionCreators, Dispatch } from 'redux';
import { createStructuredSelector } from 'reselect';

// Local Utilities
import store from 'store';
import { challengeTypes } from '../../../../utils/challenge-types';
import LearnLayout from '../../../components/layouts/learn';
import {
  ChallengeNodeType,
  ChallengeFiles,
  ChallengeFile,
  ChallengeMetaType,
  Test,
  ResizePropsType
} from '../../../redux/prop-types';
import { isContained } from '../../../utils/is-contained';
import ChallengeDescription from '../components/Challenge-Description';
import HelpModal from '../components/HelpModal';
import Hotkeys from '../components/Hotkeys';
import Preview from '../components/Preview';
import ResetModal from '../components/ResetModal';
import SidePanel from '../components/Side-Panel';
import VideoModal from '../components/VideoModal';
import ChallengeTitle from '../components/challenge-title';
import CompletionModal from '../components/completion-modal';
import Output from '../components/output';
import {
  createFiles,
  challengeFilesSelector,
  challengeTestsSelector,
  initConsole,
  initTests,
  updateChallengeMeta,
  challengeMounted,
  consoleOutputSelector,
  executeChallenge,
  cancelTests,
  isChallengeCompletedSelector
} from '../redux';
import { getGuideUrl } from '../utils';
import DesktopLayout from './DesktopLayout';
import MobileLayout from './MobileLayout';
import MultifileEditor from './MultifileEditor';

// Styles
import './classic.css';
import '../components/test-frame.css';

// Redux Setup
const mapStateToProps = createStructuredSelector({
  challengeFiles: challengeFilesSelector,
  tests: challengeTestsSelector,
  output: consoleOutputSelector,
  isChallengeCompleted: isChallengeCompletedSelector
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
      cancelTests
    },
    dispatch
  );

// Types
interface ShowClassicProps {
  cancelTests: () => void;
  challengeMounted: (arg0: string) => void;
  createFiles: (arg0: ChallengeFile[]) => void;
  data: { challengeNode: ChallengeNodeType };
  executeChallenge: () => void;
  challengeFiles: ChallengeFiles;
  initConsole: (arg0: string) => void;
  initTests: (tests: Test[]) => void;
  isChallengeCompleted: boolean;
  output: string[];
  pageContext: {
    challengeMeta: ChallengeMetaType;
  };
  t: TFunction;
  tests: Test[];
  updateChallengeMeta: (arg0: ChallengeMetaType) => void;
}

interface ShowClassicState {
  layout: ReflexLayout | string;
  resizing: boolean;
}

interface ReflexLayout {
  codePane: { flex: number };
  editorPane: { flex: number };
  instructionPane: { flex: number };
  previewPane: { flex: number };
  testsPane: { flex: number };
}

const MAX_MOBILE_WIDTH = 767;
const REFLEX_LAYOUT = 'challenge-layout';
const BASE_LAYOUT = {
  codePane: { flex: 1 },
  editorPane: { flex: 1 },
  instructionPane: { flex: 1 },
  previewPane: { flex: 0.7 },
  testsPane: { flex: 0.25 }
};

// Component
class ShowClassic extends Component<ShowClassicProps, ShowClassicState> {
  static displayName: string;
  containerRef: React.RefObject<unknown>;
  editorRef: React.RefObject<unknown>;
  instructionsPanelRef: React.RefObject<HTMLElement>;
  resizeProps: ResizePropsType;

  constructor(props: ShowClassicProps) {
    super(props);

    this.resizeProps = {
      onStopResize: this.onStopResize.bind(this),
      onResize: this.onResize.bind(this)
    };

    // layout: Holds the information of the panes sizes for desktop view
    this.state = {
      layout: this.getLayoutState(),
      resizing: false
    };

    this.containerRef = React.createRef();
    this.editorRef = React.createRef();
    this.instructionsPanelRef = React.createRef();
  }

  getLayoutState(): ReflexLayout | string {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const reflexLayout: ReflexLayout | string = store.get(REFLEX_LAYOUT);

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
    // @ts-expect-error TODO: Apparently, name does not exist on type
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
        challengeNode: { title }
      }
    } = this.props;
    this.initializeComponent(title);
  }

  componentDidUpdate(prevProps: ShowClassicProps) {
    const {
      data: {
        challengeNode: {
          title: prevTitle,
          fields: { tests: prevTests }
        }
      }
    } = prevProps;
    const {
      data: {
        challengeNode: {
          title: currentTitle,
          fields: { tests: currTests }
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
      data: {
        challengeNode: {
          challengeFiles,
          fields: { tests },
          challengeType,
          removeComments,
          helpCategory
        }
      },
      pageContext: { challengeMeta }
    } = this.props;
    initConsole('');
    createFiles(challengeFiles ?? []);
    initTests(tests);
    updateChallengeMeta({
      ...challengeMeta,
      title,
      removeComments: removeComments !== false,
      challengeType,
      helpCategory
    });
    challengeMounted(challengeMeta.id);
  }

  componentWillUnmount() {
    const { createFiles, cancelTests } = this.props;
    createFiles([]);
    cancelTests();
  }

  getChallenge = () => this.props.data.challengeNode;

  getBlockNameTitle() {
    const {
      fields: { blockName },
      title
    } = this.getChallenge();
    return `${blockName}: ${title}`;
  }

  getVideoUrl = () => this.getChallenge().videoUrl;

  hasPreview() {
    const { challengeType } = this.getChallenge();
    return (
      challengeType === challengeTypes.html ||
      challengeType === challengeTypes.modern
    );
  }

  renderInstructionsPanel({ showToolPanel }: { showToolPanel: boolean }) {
    const { block, description, instructions, superBlock, translationPending } =
      this.getChallenge();

    const { forumTopicId, title } = this.getChallenge();
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
            block={block}
            isCompleted={this.props.isChallengeCompleted}
            superBlock={superBlock}
            translationPending={translationPending}
          >
            {title}
          </ChallengeTitle>
        }
        className='full-height'
        guideUrl={getGuideUrl({ forumTopicId, title })}
        instructionsPanelRef={this.instructionsPanelRef}
        showToolPanel={showToolPanel}
        videoUrl={this.getVideoUrl()}
      />
    );
  }

  renderEditor() {
    const { challengeFiles } = this.props;
    const { description, title } = this.getChallenge();
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    return (
      challengeFiles && (
        <MultifileEditor
          challengeFiles={challengeFiles}
          containerRef={this.containerRef}
          description={description}
          editorRef={this.editorRef}
          hasEditableBoundries={this.hasEditableBoundries()}
          resizeProps={this.resizeProps}
          title={title}
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

  renderPreview() {
    return (
      <Preview className='full-height' disableIframe={this.state.resizing} />
    );
  }

  hasEditableBoundries() {
    const { challengeFiles } = this.props;
    return (
      challengeFiles?.some(
        challengeFile => challengeFile.editableRegionBoundaries?.length === 2
      ) ?? false
    );
  }

  render() {
    const {
      block,
      fields: { blockName },
      forumTopicId,
      superBlock,
      title
    } = this.getChallenge();
    const {
      executeChallenge,
      pageContext: {
        challengeMeta: { nextChallengePath, prevChallengePath }
      },
      challengeFiles,
      t
    } = this.props;

    return (
      <Hotkeys
        editorRef={this.editorRef}
        executeChallenge={executeChallenge}
        innerRef={this.containerRef}
        instructionsPanelRef={this.instructionsPanelRef}
        nextChallengePath={nextChallengePath}
        prevChallengePath={prevChallengePath}
      >
        <LearnLayout>
          <Helmet
            title={`${t(
              'learn.learn'
            )} ${this.getBlockNameTitle()} | freeCodeCamp.org`}
          />
          <Media maxWidth={MAX_MOBILE_WIDTH}>
            <MobileLayout
              editor={this.renderEditor()}
              guideUrl={getGuideUrl({ forumTopicId, title })}
              hasPreview={this.hasPreview()}
              instructions={this.renderInstructionsPanel({
                showToolPanel: false
              })}
              preview={this.renderPreview()}
              testOutput={this.renderTestOutput()}
              videoUrl={this.getVideoUrl()}
            />
          </Media>
          <Media minWidth={MAX_MOBILE_WIDTH + 1}>
            <DesktopLayout
              block={block}
              challengeFiles={challengeFiles}
              editor={this.renderEditor()}
              hasEditableBoundries={this.hasEditableBoundries()}
              hasPreview={this.hasPreview()}
              instructions={this.renderInstructionsPanel({
                showToolPanel: true
              })}
              layoutState={this.state.layout}
              preview={this.renderPreview()}
              resizeProps={this.resizeProps}
              superBlock={superBlock}
              testOutput={this.renderTestOutput()}
            />
          </Media>
          <CompletionModal
            block={block}
            blockName={blockName}
            superBlock={superBlock}
          />
          <HelpModal />
          <VideoModal videoUrl={this.getVideoUrl()} />
          <ResetModal />
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

// TODO: handle jsx (not sure why it doesn't get an editableRegion) EDIT:
// probably because the dummy challenge didn't include it, so Gatsby couldn't
// infer it.
export const query = graphql`
  query ClassicChallenge($slug: String!) {
    challengeNode(fields: { slug: { eq: $slug } }) {
      block
      title
      description
      instructions
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
      challengeFiles {
        fileKey
        ext
        name
        contents
        head
        tail
        editableRegionBoundaries
      }
    }
  }
`;

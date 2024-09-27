// Package Utilities
import { graphql } from 'gatsby';
import React, { Component } from 'react';
import Helmet from 'react-helmet';
import { ObserveKeys } from 'react-hotkeys';
import type { TFunction } from 'i18next';
import { withTranslation } from 'react-i18next';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import type { Dispatch } from 'redux';
import { createSelector } from 'reselect';
import { Container, Col, Row, Button } from '@freecodecamp/ui';

// Local Utilities
import Spacer from '../../../components/helpers/spacer';
import LearnLayout from '../../../components/layouts/learn';
import { ChallengeNode, ChallengeMeta, Test } from '../../../redux/prop-types';
import { challengeTypes } from '../../../../../shared/config/challenge-types';
import ChallengeDescription from '../components/challenge-description';
import Hotkeys from '../components/hotkeys';
import VideoPlayer from '../components/video-player';
import ChallengeTitle from '../components/challenge-title';
import CompletionModal from '../components/completion-modal';
import HelpModal from '../components/help-modal';
import MultipleChoiceQuestions from '../components/multiple-choice-questions';
import {
  challengeMounted,
  updateChallengeMeta,
  openModal,
  updateSolutionFormValues,
  initTests
} from '../redux/actions';
import { isChallengeCompletedSelector } from '../redux/selectors';

// Styles
import '../video.css';

// Redux Setup
const mapStateToProps = createSelector(
  isChallengeCompletedSelector,
  (isChallengeCompleted: boolean) => ({
    isChallengeCompleted
  })
);
const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(
    {
      initTests,
      updateChallengeMeta,
      challengeMounted,
      updateSolutionFormValues,
      openCompletionModal: () => openModal('completion'),
      openHelpModal: () => openModal('help')
    },
    dispatch
  );

// Types
interface ShowVideoProps {
  challengeMounted: (arg0: string) => void;
  data: { challengeNode: ChallengeNode };
  description: string;
  initTests: (xs: Test[]) => void;
  isChallengeCompleted: boolean;
  openCompletionModal: () => void;
  openHelpModal: () => void;
  pageContext: {
    challengeMeta: ChallengeMeta;
  };
  t: TFunction;
  updateChallengeMeta: (arg0: ChallengeMeta) => void;
  updateSolutionFormValues: () => void;
}

interface ShowVideoState {
  subtitles: string;
  downloadURL: string | null;
  selectedOption: number | null;
  answer: number;
  showWrong: boolean;
  videoIsLoaded: boolean;
}

// Component
class ShowVideo extends Component<ShowVideoProps, ShowVideoState> {
  static displayName: string;
  private container: React.RefObject<HTMLElement> = React.createRef();

  constructor(props: ShowVideoProps) {
    super(props);
    this.state = {
      subtitles: '',
      downloadURL: null,
      selectedOption: null,
      answer: 1,
      showWrong: false,
      videoIsLoaded: false
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount(): void {
    const {
      challengeMounted,
      data: {
        challengeNode: {
          challenge: {
            fields: { tests },
            title,
            challengeType,
            helpCategory
          }
        }
      },
      pageContext: { challengeMeta },
      initTests,
      updateChallengeMeta
    } = this.props;
    initTests(tests);
    updateChallengeMeta({
      ...challengeMeta,
      title,
      challengeType,
      helpCategory
    });
    challengeMounted(challengeMeta.id);
    this.container.current?.focus();
  }

  componentDidUpdate(prevProps: ShowVideoProps): void {
    const {
      data: {
        challengeNode: {
          challenge: { title: prevTitle }
        }
      }
    } = prevProps;
    const {
      challengeMounted,
      data: {
        challengeNode: {
          challenge: { title: currentTitle, challengeType, helpCategory }
        }
      },
      pageContext: { challengeMeta },
      updateChallengeMeta
    } = this.props;
    if (prevTitle !== currentTitle) {
      updateChallengeMeta({
        ...challengeMeta,
        title: currentTitle,
        challengeType,
        helpCategory
      });
      challengeMounted(challengeMeta.id);
    }
  }

  handleSubmit(solution: number, openCompletionModal: () => void) {
    if (solution - 1 === this.state.selectedOption) {
      this.setState({
        showWrong: false
      });
      openCompletionModal();
    } else {
      this.setState({
        showWrong: true
      });
    }
  }

  handleOptionChange = (
    changeEvent: React.ChangeEvent<HTMLInputElement>
  ): void => {
    this.setState({
      showWrong: false,
      selectedOption: parseInt(changeEvent.target.value, 10)
    });
  };

  onVideoLoad = () => {
    this.setState({
      videoIsLoaded: true
    });
  };

  render() {
    const {
      data: {
        challengeNode: {
          challenge: {
            title,
            challengeType,
            description,
            superBlock,
            block,
            translationPending,
            videoId,
            videoLocaleIds,
            bilibiliIds,
            fields: { blockName },
            questions
          }
        }
      },
      openCompletionModal,
      openHelpModal,
      pageContext: {
        challengeMeta: { nextChallengePath, prevChallengePath }
      },
      t,
      isChallengeCompleted
    } = this.props;

    const question = questions[0];
    const { solution } = question;

    const blockNameTitle = `${t(
      `intro:${superBlock}.blocks.${block}.title`
    )} - ${title}`;

    return (
      <Hotkeys
        executeChallenge={() => {
          this.handleSubmit(solution, openCompletionModal);
        }}
        containerRef={this.container}
        nextChallengePath={nextChallengePath}
        prevChallengePath={prevChallengePath}
      >
        <LearnLayout>
          <Helmet
            title={`${blockNameTitle} | ${t('learn.learn')} | freeCodeCamp.org`}
          />
          <Container>
            <Row>
              <Spacer size='medium' />
              <ChallengeTitle
                isCompleted={isChallengeCompleted}
                translationPending={translationPending}
              >
                {title}
              </ChallengeTitle>

              {challengeType === challengeTypes.video && (
                <Col lg={10} lgOffset={1} md={10} mdOffset={1}>
                  <VideoPlayer
                    bilibiliIds={bilibiliIds}
                    onVideoLoad={this.onVideoLoad}
                    title={title}
                    videoId={videoId}
                    videoIsLoaded={this.state.videoIsLoaded}
                    videoLocaleIds={videoLocaleIds}
                  />
                </Col>
              )}

              <Col md={8} mdOffset={2} sm={10} smOffset={1} xs={12}>
                <ChallengeDescription description={description} />
                <ObserveKeys>
                  <MultipleChoiceQuestions
                    questions={question}
                    selectedOption={this.state.selectedOption}
                    isWrongAnswer={this.state.showWrong}
                    handleOptionChange={this.handleOptionChange}
                  />
                </ObserveKeys>
                <Spacer size='medium' />
                <Button
                  block={true}
                  variant='primary'
                  onClick={() =>
                    this.handleSubmit(solution, openCompletionModal)
                  }
                >
                  {t('buttons.check-answer')}
                </Button>
                <Spacer size='xxSmall' />
                <Button block={true} variant='primary' onClick={openHelpModal}>
                  {t('buttons.ask-for-help')}
                </Button>
                <Spacer size='large' />
              </Col>
              <CompletionModal />
              <HelpModal challengeTitle={title} challengeBlock={blockName} />
            </Row>
          </Container>
        </LearnLayout>
      </Hotkeys>
    );
  }
}

ShowVideo.displayName = 'ShowVideo';

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withTranslation()(ShowVideo));

export const query = graphql`
  query VideoChallenge($id: String!) {
    challengeNode(id: { eq: $id }) {
      challenge {
        videoId
        videoLocaleIds {
          espanol
          italian
          portuguese
        }
        bilibiliIds {
          aid
          bvid
          cid
        }
        title
        description
        challengeType
        helpCategory
        superBlock
        block
        fields {
          blockName
          slug
          tests {
            text
            testString
          }
        }
        questions {
          text
          answers {
            answer
            feedback
          }
          solution
        }
        translationPending
      }
    }
  }
`;

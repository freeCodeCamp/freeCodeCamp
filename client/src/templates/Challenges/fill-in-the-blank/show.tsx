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
import ShortcutsModal from '../components/shortcuts-modal';

// Local Utilities
import Spacer from '../../../components/helpers/spacer';
import LearnLayout from '../../../components/layouts/learn';
import { ChallengeNode, ChallengeMeta, Test } from '../../../redux/prop-types';
import Hotkeys from '../components/hotkeys';
import ChallengeTitle from '../components/challenge-title';
import ChallegeExplanation from '../components/challenge-explanation';
import CompletionModal from '../components/completion-modal';
import HelpModal from '../components/help-modal';
import FillInTheBlanks from '../components/fill-in-the-blanks';
import PrismFormatted from '../components/prism-formatted';
import {
  challengeMounted,
  updateChallengeMeta,
  openModal,
  updateSolutionFormValues,
  initTests
} from '../redux/actions';
import Scene from '../components/scene/scene';
import { isChallengeCompletedSelector } from '../redux/selectors';

// Styles
import '../video.css';
import './show.css';

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
interface ShowFillInTheBlankProps {
  challengeMounted: (arg0: string) => void;
  data: { challengeNode: ChallengeNode };
  isChallengeCompleted: boolean;
  initTests: (xs: Test[]) => void;
  openCompletionModal: () => void;
  openHelpModal: () => void;
  pageContext: {
    challengeMeta: ChallengeMeta;
  };
  t: TFunction;
  updateChallengeMeta: (arg0: ChallengeMeta) => void;
  updateSolutionFormValues: () => void;
}

interface ShowFillInTheBlankState {
  showWrong: boolean;
  userAnswers: (string | null)[];
  answersCorrect: (boolean | null)[];
  allBlanksFilled: boolean;
  feedback: string | null;
  showFeedback: boolean;
  isScenePlaying: boolean;
}

// Component
class ShowFillInTheBlank extends Component<
  ShowFillInTheBlankProps,
  ShowFillInTheBlankState
> {
  static displayName: string;
  private container: React.RefObject<HTMLElement> = React.createRef();

  constructor(props: ShowFillInTheBlankProps) {
    super(props);

    const {
      data: {
        challengeNode: {
          challenge: {
            fillInTheBlank: { blanks }
          }
        }
      }
    } = props;

    const emptyArray = blanks.map(() => null);

    this.state = {
      showWrong: false,
      userAnswers: emptyArray,
      answersCorrect: emptyArray,
      allBlanksFilled: false,
      feedback: null,
      showFeedback: false,
      isScenePlaying: false
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
    updateChallengeMeta({
      ...challengeMeta,
      title,
      challengeType,
      helpCategory
    });
    initTests(tests);
    challengeMounted(challengeMeta.id);
    this.container.current?.focus();
  }

  componentDidUpdate(prevProps: ShowFillInTheBlankProps): void {
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

  handleSubmit() {
    const {
      openCompletionModal,
      data: {
        challengeNode: {
          challenge: {
            fillInTheBlank: { blanks }
          }
        }
      }
    } = this.props;
    const { userAnswers } = this.state;

    const blankAnswers = blanks.map(b => b.answer);

    const newAnswersCorrect = userAnswers.map(
      (userAnswer, i) => !!userAnswer && userAnswer.trim() === blankAnswers[i]
    );

    const hasWrongAnswer = newAnswersCorrect.some(a => a === false);
    if (!hasWrongAnswer) {
      this.setState({
        answersCorrect: newAnswersCorrect
      });

      openCompletionModal();
    } else {
      const firstWrongIndex = newAnswersCorrect.findIndex(a => a === false);
      const feedback =
        firstWrongIndex >= 0 ? blanks[firstWrongIndex].feedback : null;

      this.setState({
        answersCorrect: newAnswersCorrect,
        showWrong: true,
        showFeedback: true,
        feedback: feedback
      });
    }
  }

  handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { userAnswers, answersCorrect } = this.state;
    const inputIndex = parseInt(e.target.getAttribute('data-index') as string);

    const newUserAnswers = [...userAnswers];
    newUserAnswers[inputIndex] = e.target.value;

    const newAnswersCorrect = [...answersCorrect];
    newAnswersCorrect[inputIndex] = null;

    const allBlanksFilled = newUserAnswers.every(a => a);

    this.setState({
      userAnswers: newUserAnswers,
      answersCorrect: newAnswersCorrect,
      allBlanksFilled,
      showWrong: false
    });
  };

  setIsScenePlaying = (shouldPlay: boolean) => {
    this.setState({
      isScenePlaying: shouldPlay
    });
  };

  render() {
    const {
      data: {
        challengeNode: {
          challenge: {
            title,
            description,
            instructions,
            explanation,
            superBlock,
            block,
            translationPending,
            fields: { blockName },
            fillInTheBlank,
            scene
          }
        }
      },
      openHelpModal,
      pageContext: {
        challengeMeta: { nextChallengePath, prevChallengePath }
      },
      t,
      isChallengeCompleted
    } = this.props;

    const blockNameTitle = `${t(
      `intro:${superBlock}.blocks.${block}.title`
    )} - ${title}`;

    const { allBlanksFilled, feedback, showFeedback, showWrong } = this.state;

    return (
      <Hotkeys
        executeChallenge={() => this.handleSubmit()}
        containerRef={this.container}
        nextChallengePath={nextChallengePath}
        prevChallengePath={prevChallengePath}
        playScene={() => this.setIsScenePlaying(true)}
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

              <Col md={8} mdOffset={2} sm={10} smOffset={1} xs={12}>
                <PrismFormatted text={description} />
                <Spacer size='medium' />
              </Col>

              {scene && (
                <Scene
                  scene={scene}
                  isPlaying={this.state.isScenePlaying}
                  setIsPlaying={this.setIsScenePlaying}
                />
              )}

              <Col md={8} mdOffset={2} sm={10} smOffset={1} xs={12}>
                {instructions && (
                  <>
                    <PrismFormatted text={instructions} />
                    <Spacer size='small' />
                  </>
                )}

                {/* what we want to observe is ctrl/cmd + enter, but ObserveKeys is buggy and throws an error
                if it encounters a key combination, so we have to pass in the individual keys to observe */}
                <ObserveKeys only={['ctrl', 'cmd', 'enter']}>
                  <FillInTheBlanks
                    fillInTheBlank={fillInTheBlank}
                    answersCorrect={this.state.answersCorrect}
                    showFeedback={showFeedback}
                    feedback={feedback}
                    showWrong={showWrong}
                    handleInputChange={this.handleInputChange}
                  />
                </ObserveKeys>

                {explanation ? (
                  <ChallegeExplanation explanation={explanation} />
                ) : (
                  <Spacer size='medium' />
                )}

                <Button
                  block={true}
                  variant='primary'
                  disabled={!allBlanksFilled}
                  onClick={() => this.handleSubmit()}
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
          <ShortcutsModal />
        </LearnLayout>
      </Hotkeys>
    );
  }
}

ShowFillInTheBlank.displayName = 'ShowFillInTheBlank';

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withTranslation()(ShowFillInTheBlank));

export const query = graphql`
  query FillInTheBlankChallenge($id: String!) {
    challengeNode(id: { eq: $id }) {
      challenge {
        title
        description
        instructions
        explanation
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
        fillInTheBlank {
          sentence
          blanks {
            answer
            feedback
          }
        }
        scene {
          setup {
            background
            characters {
              character
              position {
                x
                y
                z
              }
              opacity
            }
            audio {
              filename
              startTime
              startTimestamp
              finishTimestamp
            }
            alwaysShowDialogue
          }
          commands {
            background
            character
            position {
              x
              y
              z
            }
            opacity
            startTime
            finishTime
            dialogue {
              text
              align
            }
          }
        }
        translationPending
      }
    }
  }
`;

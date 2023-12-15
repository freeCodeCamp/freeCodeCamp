// Package Utilities
import { Button } from '@freecodecamp/react-bootstrap';
import { graphql } from 'gatsby';
import React, { Component, Fragment } from 'react';
import Helmet from 'react-helmet';
import { ObserveKeys } from 'react-hotkeys';
import type { TFunction } from 'i18next';
import { withTranslation } from 'react-i18next';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import type { Dispatch } from 'redux';
import { createSelector } from 'reselect';
import { Container, Col, Row } from '@freecodecamp/ui';

// Local Utilities
import Spacer from '../../../components/helpers/spacer';
import LearnLayout from '../../../components/layouts/learn';
import { ChallengeNode, ChallengeMeta } from '../../../redux/prop-types';
import Hotkeys from '../components/hotkeys';
import ChallengeTitle from '../components/challenge-title';
import CompletionModal from '../components/completion-modal';
import HelpModal from '../components/help-modal';
import PrismFormatted from '../components/prism-formatted';
import {
  challengeMounted,
  updateChallengeMeta,
  openModal,
  updateSolutionFormValues
} from '../redux/actions';
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
  description: string;
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

interface ShowFillInTheBlankState {
  showWrong: boolean;
  userAnswers: (string | null)[];
  answersCorrect: (boolean | null)[];
  allBlanksFilled: boolean;
  feedback: string | null;
  showFeedback: boolean;
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
      showFeedback: false
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount(): void {
    const {
      challengeMounted,
      data: {
        challengeNode: {
          challenge: { title, challengeType, helpCategory }
        }
      },
      pageContext: { challengeMeta },
      updateChallengeMeta
    } = this.props;
    updateChallengeMeta({
      ...challengeMeta,
      title,
      challengeType,
      helpCategory
    });
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
      (userAnswer, i) => userAnswer === blankAnswers[i]
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

  addCodeTags(str: string, index: number, numberOfBlanks: number): string {
    if (index === 0) return `${str}</code>`;
    if (index < numberOfBlanks) return `<code>${str}</code>`;
    return `<code>${str}`;
  }

  addPrismClass(index: number, numberOfBlanks: number): string {
    if (index === 0) return `first-code-tag`;
    if (index < numberOfBlanks) return `middle-code-tag`;
    return `last-code-tag`;
  }

  addInputClass(index: number): string {
    const { answersCorrect } = this.state;
    if (answersCorrect[index] === true) return 'green-underline';
    if (answersCorrect[index] === false) return 'red-underline';
    return '';
  }

  render() {
    const {
      data: {
        challengeNode: {
          challenge: {
            title,
            description,
            instructions,
            superBlock,
            block,
            translationPending,
            fields: { blockName },
            fillInTheBlank: { sentence, blanks },
            audioPath
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

    const splitSentence = sentence.replace(/^<p>|<\/p>$/g, '').split('_');
    const blankAnswers = blanks.map(b => b.answer);

    return (
      <Hotkeys
        executeChallenge={() => this.handleSubmit()}
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

              <Col md={8} mdOffset={2} sm={10} smOffset={1} xs={12}>
                <PrismFormatted text={description} />
                {audioPath && (
                  <>
                    <Spacer size='small' />
                    <Spacer size='small' />
                    {/* TODO: Add tracks for audio elements */}
                    {/* eslint-disable-next-line jsx-a11y/media-has-caption*/}
                    <audio className='audio' controls>
                      <source
                        src={`https://cdn.freecodecamp.org/${audioPath}`}
                        type='audio/mp3'
                      ></source>
                    </audio>
                  </>
                )}
                <Spacer size='medium' />
                <PrismFormatted text={instructions} />
                <Spacer size='medium' />
                <h2>{t('learn.fill-in-the-blank')}</h2>
                <Spacer size='small' />
                {/* what we want to observe is ctrl/cmd + enter, but ObserveKeys is buggy and throws an error
                if it encounters a key combination, so we have to pass in the individual keys to observe */}
                <ObserveKeys only={['ctrl', 'cmd', 'enter']}>
                  <div>
                    <p>
                      {splitSentence.map((s, i) => {
                        return (
                          <Fragment key={i}>
                            <PrismFormatted
                              text={this.addCodeTags(s, i, blankAnswers.length)}
                              className={`code-tag ${this.addPrismClass(
                                i,
                                blankAnswers.length
                              )}`}
                              useSpan
                              noAria
                            />
                            {blankAnswers[i] && (
                              <input
                                type='text'
                                maxLength={blankAnswers[i].length + 3}
                                className={`fill-in-the-blank-input ${this.addInputClass(
                                  i
                                )}`}
                                onChange={this.handleInputChange}
                                data-index={i}
                                style={{
                                  width: `${blankAnswers[i].length * 11 + 11}px`
                                }}
                              />
                            )}
                          </Fragment>
                        );
                      })}
                    </p>
                  </div>
                </ObserveKeys>
                <Spacer size='medium' />
                {showFeedback && feedback && (
                  <>
                    <PrismFormatted text={feedback} />
                    <Spacer size='small' />
                  </>
                )}
                <div
                  style={{
                    textAlign: 'center'
                  }}
                >
                  {showWrong ? (
                    <span>{t('learn.wrong-answer')}</span>
                  ) : (
                    <span>{t('learn.check-answer')}</span>
                  )}
                </div>
                <Spacer size='medium' />
                <Button
                  block={true}
                  bsStyle='primary'
                  disabled={!allBlanksFilled}
                  onClick={() => this.handleSubmit()}
                >
                  {t('buttons.check-answer')}
                </Button>
                <Button
                  block={true}
                  bsStyle='primary'
                  className='btn-invert'
                  onClick={openHelpModal}
                >
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

ShowFillInTheBlank.displayName = 'ShowFillInTheBlank';

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withTranslation()(ShowFillInTheBlank));

export const query = graphql`
  query FillInTheBlankChallenge($slug: String!) {
    challengeNode(challenge: { fields: { slug: { eq: $slug } } }) {
      challenge {
        title
        description
        instructions
        challengeType
        helpCategory
        superBlock
        block
        fields {
          blockName
          slug
        }
        fillInTheBlank {
          sentence
          blanks {
            answer
            feedback
          }
        }
        translationPending
        audioPath
      }
    }
  }
`;

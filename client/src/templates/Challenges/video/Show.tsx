// Package Utilities
import { Button, Grid, Col, Row } from '@freecodecamp/react-bootstrap';
import { graphql } from 'gatsby';
import React, { Component } from 'react';
import Helmet from 'react-helmet';
import { ObserveKeys } from 'react-hotkeys';
import { TFunction, withTranslation } from 'react-i18next';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import type { Dispatch } from 'redux';
import { createSelector } from 'reselect';

// Local Utilities
import Fail from '../../../assets/icons/test-fail';
import GreenPass from '../../../assets/icons/test-pass';
import Loader from '../../../components/helpers/loader';
import Spacer from '../../../components/helpers/spacer';
import LearnLayout from '../../../components/layouts/learn';
import { ChallengeNode, ChallengeMeta } from '../../../redux/prop-types';
import ChallengeDescription from '../components/Challenge-Description';
import Hotkeys from '../components/Hotkeys';
import VideoPlayer from '../components/VideoPlayer';
import CompletionModal from '../components/completion-modal';
import PrismFormatted from '../components/prism-formatted';
import {
  challengeMounted,
  updateChallengeMeta,
  submitChallenge,
  updateSolutionFormValues
} from '../redux/actions';
import { isChallengeCompletedSelector } from '../redux/selectors';

// Styles
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
      submitChallenge,
      updateChallengeMeta,
      challengeMounted,
      updateSolutionFormValues
    },
    dispatch
  );

// Types
interface ShowVideoProps {
  challengeMounted: (arg0: string) => void;
  data: { challengeNode: ChallengeNode };
  description: string;
  isChallengeCompleted: boolean;
  pageContext: {
    challengeMeta: ChallengeMeta;
  };
  submitChallenge: () => void;
  t: TFunction;
  updateChallengeMeta: (arg0: ChallengeMeta) => void;
  updateSolutionFormValues: () => void;
}

interface ShowVideoState {
  completed: boolean;
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
  private _container: HTMLElement | null | undefined;

  constructor(props: ShowVideoProps) {
    super(props);
    this.state = {
      subtitles: '',
      downloadURL: null,
      selectedOption: null,
      answer: 1,
      showWrong: false,
      videoIsLoaded: false,
      completed: false
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
    this._container?.focus();
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

  handleSubmit(solution: number) {
    if (solution - 1 === this.state.selectedOption) {
      this.setState({
        completed: true,
        showWrong: false
      });
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
            fields: { blockName },
            title,
            description,
            superBlock,
            certification,
            block,
            videoId,
            videoLocaleIds,
            bilibiliIds,
            question: { text, answers, solution }
          }
        }
      },
      pageContext: {
        challengeMeta: { nextChallengePath, prevChallengePath }
      },
      t,
      submitChallenge
    } = this.props;

    const blockNameTitle = `${t(
      `intro:${superBlock}.blocks.${block}.title`
    )} - ${title}`;

    return (
      <Hotkeys
        executeChallenge={() => this.handleSubmit(solution)}
        innerRef={(c: HTMLElement | null) => (this._container = c)}
        nextChallengePath={nextChallengePath}
        prevChallengePath={prevChallengePath}
      >
        <LearnLayout>
          <Helmet
            title={`${blockNameTitle} | ${t('learn.learn')} | freeCodeCamp.org`}
          />
          <Grid>
            <Row>
              <Col lg={10} lgOffset={1} md={10} mdOffset={1}>
                <div className='video-wrapper'>
                  {!this.state.videoIsLoaded ? (
                    <div className='video-placeholder-loader'>
                      <Loader />
                    </div>
                  ) : null}
                  <VideoPlayer
                    bilibiliIds={bilibiliIds}
                    onVideoLoad={this.onVideoLoad}
                    title={title}
                    videoId={videoId}
                    videoIsLoaded={this.state.videoIsLoaded}
                    videoLocaleIds={videoLocaleIds}
                  />
                </div>
              </Col>

              <Col md={8} mdOffset={2} sm={10} smOffset={1} xs={12}>
                <h3 className='video-section-label'>Question</h3>
              </Col>
              <Col
                md={8}
                mdOffset={2}
                sm={10}
                smOffset={1}
                xs={12}
                className='video-description'
              >
                <ChallengeDescription description={description} />
                <PrismFormatted text={text} />
                <Spacer />
                <ObserveKeys>
                  <div className='video-quiz-options'>
                    {answers.map((option, index) => (
                      // answers are static and have no natural id property, so
                      // index should be fine as a key:
                      <label className='video-quiz-option-label' key={index}>
                        <input
                          aria-label={t('aria.answer')}
                          checked={this.state.selectedOption === index}
                          className='video-quiz-input-hidden'
                          name='quiz'
                          onChange={this.handleOptionChange}
                          type='radio'
                          value={index}
                        />{' '}
                        <span className='video-quiz-input-visible'>
                          {this.state.selectedOption === index ? (
                            <span className='video-quiz-selected-input' />
                          ) : null}
                        </span>
                        <PrismFormatted
                          className={'video-quiz-option'}
                          text={option}
                        />
                      </label>
                    ))}
                  </div>
                </ObserveKeys>
                <Spacer />
                <div className='video-quiz-cta-text'>
                  {this.state.showWrong && (
                    <span>
                      <Fail />
                      {t('learn.wrong-answer')}
                    </span>
                  )}
                  {this.state.completed && (
                    <span>
                      <GreenPass />
                      Great Job!
                    </span>
                  )}

                  {!this.state.completed && !this.state.showWrong && (
                    <span>{t('learn.check-answer')}</span>
                  )}
                </div>
                {this.state.completed ? (
                  <Button
                    bsSize='large'
                    bsStyle='primary'
                    onClick={submitChallenge}
                  >
                    {t('buttons.submit-and-go')}
                  </Button>
                ) : (
                  <Button
                    bsSize='large'
                    bsStyle='primary'
                    onClick={() => this.handleSubmit(solution)}
                  >
                    {t('buttons.check-answer')}
                  </Button>
                )}
                <Spacer size={2} />
              </Col>
              <CompletionModal
                block={block}
                blockName={blockName}
                certification={certification}
                superBlock={superBlock}
              />
            </Row>
          </Grid>
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
  query VideoChallenge($slug: String!) {
    challengeNode(challenge: { fields: { slug: { eq: $slug } } }) {
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
        certification
        block
        fields {
          blockName
          slug
        }
        question {
          text
          answers
          solution
        }
        translationPending
      }
    }
  }
`;

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
import { Container, Col, Row, Button, Quiz } from '@freecodecamp/ui';

// Local Utilities
import Spacer from '../../../components/helpers/spacer';
import LearnLayout from '../../../components/layouts/learn';
import { ChallengeNode, ChallengeMeta, Test } from '../../../redux/prop-types';
// import { challengeTypes } from '../../../../../shared/config/challenge-types';
import ChallengeDescription from '../components/challenge-description';
import Hotkeys from '../components/hotkeys';
import ChallengeTitle from '../components/challenge-title';
import CompletionModal from '../components/completion-modal';
import {
  challengeMounted,
  updateChallengeMeta,
  openModal,
  updateSolutionFormValues,
  initTests
} from '../redux/actions';
import { isChallengeCompletedSelector } from '../redux/selectors';

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
interface ShowQuizProps {
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

interface ShowQuizState {
  hasSubmitted: boolean;
  quiz: null;
}

// Component
class ShowQuiz extends Component<ShowQuizProps, ShowQuizState> {
  static displayName: string;
  private container: React.RefObject<HTMLElement> = React.createRef();

  constructor(props: ShowQuizProps) {
    super(props);
    this.state = {
      hasSubmitted: false,
      quiz: null
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

  componentDidUpdate(prevProps: ShowQuizProps): void {
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
    console.log('handleSubmit');
  }

  render() {
    const {
      data: {
        challengeNode: {
          challenge: {
            title,
            // challengeType,
            description,
            superBlock,
            block,
            translationPending,
            quizzes
          }
        }
      },
      // openCompletionModal,
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

    const random = Math.floor(Math.random() * quizzes.length);
    const quiz = quizzes[random].questions;
    const quizForComponent = quiz.map(question => {
      const distractors = question.distractors.map((distractor, index) => {
        return {
          label: distractor,
          value: index + 1
        };
      });
      const answer = {
        label: question.answer,
        value: 4
      };

      return {
        question: question.text,
        answers: [...distractors, answer]
      };
    });

    return (
      <Hotkeys
        executeChallenge={() => {
          this.handleSubmit();
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

              <Col md={8} mdOffset={2} sm={10} smOffset={1} xs={12}>
                <ChallengeDescription description={description} />
                <ObserveKeys>
                  <Quiz questions={quizForComponent} />
                </ObserveKeys>
                <Spacer size='medium' />
                <Button
                  block={true}
                  variant='primary'
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
            </Row>
          </Container>
        </LearnLayout>
      </Hotkeys>
    );
  }
}

ShowQuiz.displayName = 'ShowQuiz';

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withTranslation()(ShowQuiz));

export const query = graphql`
  query QuizChallenge($id: String!) {
    challengeNode(id: { eq: $id }) {
      challenge {
        title
        description
        challengeType
        helpCategory
        superBlock
        block
        fields {
          blockName
          slug
        }
        quizzes {
          questions {
            distractors
            text
            answer
          }
        }
        translationPending
      }
    }
  }
`;

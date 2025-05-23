import { graphql } from 'gatsby';
import React, { useEffect, useRef, useState } from 'react';
import Helmet from 'react-helmet';
import { useTranslation } from 'react-i18next';
import { connect } from 'react-redux';
import { Container, Col, Row, Button, Spacer, useQuiz } from '@freecodecamp/ui';
import store from 'store';
import { YouTubeEvent } from 'react-youtube';
import PrismFormatted from '../components/prism-formatted';

// Local Utilities
import LearnLayout from '../../../components/layouts/learn';
import { ChallengeNode, ChallengeMeta, Test } from '../../../redux/prop-types';
import ChallengeDescription from '../components/challenge-description';
import Hotkeys from '../components/hotkeys';
import ChallengeTitle from '../components/challenge-title';
import VideoPlayer from '../components/video-player';
import CompletionModal from '../components/completion-modal';
import Assignments from '../components/assignments';
import {
  challengeMounted,
  updateChallengeMeta,
  openModal,
  updateSolutionFormValues,
  initTests
} from '../redux/actions';
import { isChallengeCompletedSelector } from '../redux/selectors';
import { BlockTypes } from '../../../../../shared/config/blocks';
import { getChallengePaths } from '../utils/challenge-paths';
import Scene from '../components/scene/scene';
import MultipleChoiceQuestions from '../components/multiple-choice-questions';
import ChallengeExplanation from '../components/challenge-explanation';
import ChallengeTranscript from '../components/challenge-transcript';
import HelpModal from '../components/help-modal';
import { SceneSubject } from '../components/scene/scene-subject';

// Styles
import './show.css';
import '../video.css';
import { shuffleArray } from '../../../../../shared/utils/shuffle-array';

// Redux Setup
const mapStateToProps = (state: unknown) => ({
  isChallengeCompleted: isChallengeCompletedSelector(state) as boolean
});

const mapDispatchToProps = {
  initTests,
  updateChallengeMeta,
  challengeMounted,
  updateSolutionFormValues,
  openCompletionModal: () => openModal('completion'),
  openHelpModal: () => openModal('help')
};

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
  updateChallengeMeta: (arg0: ChallengeMeta) => void;
  updateSolutionFormValues: () => void;
}

function removeParagraphTags(text: string): string {
  return text.replace(/^<p>|<\/p>$/g, '');
}

const ShowGeneric = ({
  challengeMounted,
  data: {
    challengeNode: {
      challenge: {
        assignments,
        bilibiliIds,
        block,
        blockType,
        description,
        explanation,
        challengeType,
        fields: { blockName, tests },
        helpCategory,
        instructions,
        questions,
        title,
        transcript,
        translationPending,
        scene,
        superBlock,
        videoId,
        videoLocaleIds
      }
    }
  },
  pageContext: { challengeMeta },
  initTests,
  updateChallengeMeta,
  openCompletionModal,
  openHelpModal,
  isChallengeCompleted
}: ShowQuizProps) => {
  const { t } = useTranslation();
  const container = useRef<HTMLElement | null>(null);

  const blockNameTitle = `${t(
    `intro:${superBlock}.blocks.${block}.title`
  )} - ${title}`;

  const [initialQuizData] = useState(
    questions.map(question => {
      let currentIndex = 0;
      const correctAnswer = question.answers[question.solution - 1];
      const filteredAnswers = question.answers.filter(
        x => x.answer !== correctAnswer.answer
      );

      const distractors = filteredAnswers.map(distractor => {
        currentIndex++;

        return {
          label: (
            <PrismFormatted
              className='quiz-answer-label'
              text={removeParagraphTags(distractor.answer)}
            />
          ),
          value: currentIndex,
          feedback: (
            <PrismFormatted
              text={removeParagraphTags(distractor.feedback || '')}
            />
          )
        };
      });

      const answer = {
        label: (
          <PrismFormatted
            className='quiz-answer-label'
            text={removeParagraphTags(correctAnswer.answer)}
          />
        ),
        value: 4
      };

      return {
        question: <PrismFormatted text={question.text} />,
        answers: shuffleArray([...distractors, answer]),
        correctAnswer: answer.value
      };
    })
  );

  useEffect(() => {
    initTests(tests);
    const challengePaths = getChallengePaths({
      currentCurriculumPaths: challengeMeta
    });
    updateChallengeMeta({
      ...challengeMeta,
      title,
      challengeType,
      helpCategory,
      blockType,
      ...challengePaths
    });
    challengeMounted(challengeMeta.id);
    container.current?.focus();
    // This effect should be run once on mount
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // video
  const [videoIsLoaded, setVideoIsLoaded] = useState(false);

  const handleVideoIsLoaded = (e: YouTubeEvent) => {
    const playbackRate = Number(store.get('fcc-yt-playback-rate')) || 1;
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const player = e.target;
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
    player.setPlaybackRate(playbackRate);

    setVideoIsLoaded(true);
  };

  // assignments
  const [assignmentsCompleted, setAssignmentsCompleted] = useState(0);
  const allAssignmentsCompleted = assignmentsCompleted === assignments.length;

  const handleAssignmentChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const isCompleted = event.target.checked; // extract value before target is nullified
    setAssignmentsCompleted(a => (isCompleted ? a + 1 : a - 1));
  };

  const [hasAnsweredMcqCorrectly, sethasAnsweredMcqCorrectly] = useState(true);

  const sceneSubject = new SceneSubject();

  const { questions: quizData, validateAnswers } = useQuiz({
    initialQuestions: initialQuizData,
    validationMessages: {
      correct: t('learn.quiz.correct-answer'),
      incorrect: t('learn.quiz.incorrect-answer')
    },
    passingPercent: 100,
    onSuccess: () => {
      openCompletionModal();
      sethasAnsweredMcqCorrectly(true);
    },
    onFailure: () => sethasAnsweredMcqCorrectly(false)
  });

  return (
    <Hotkeys
      executeChallenge={validateAnswers}
      containerRef={container}
      playScene={scene ? () => sceneSubject.notify('play') : undefined}
    >
      <LearnLayout>
        <Helmet
          title={`${blockNameTitle} | ${t('learn.learn')} | freeCodeCamp.org`}
        />
        <Container>
          <Row>
            <Spacer size='m' />
            <ChallengeTitle
              isCompleted={isChallengeCompleted}
              translationPending={translationPending}
            >
              {title}
            </ChallengeTitle>

            <Spacer size='m' />

            {description && (
              <Col md={8} mdOffset={2} sm={10} smOffset={1} xs={12}>
                <ChallengeDescription
                  description={description}
                  superBlock={superBlock}
                />
                <Spacer size='m' />
              </Col>
            )}

            <Col lg={10} lgOffset={1} md={10} mdOffset={1}>
              {videoId && (
                <>
                  <VideoPlayer
                    bilibiliIds={bilibiliIds}
                    onVideoLoad={handleVideoIsLoaded}
                    title={title}
                    videoId={videoId}
                    videoIsLoaded={videoIsLoaded}
                    videoLocaleIds={videoLocaleIds}
                  />
                  <Spacer size='m' />
                </>
              )}
            </Col>

            {scene && <Scene scene={scene} sceneSubject={sceneSubject} />}

            <Col md={8} mdOffset={2} sm={10} smOffset={1} xs={12}>
              {transcript && <ChallengeTranscript transcript={transcript} />}

              {instructions && (
                <>
                  <ChallengeDescription
                    instructions={instructions}
                    superBlock={superBlock}
                  />
                  <Spacer size='m' />
                </>
              )}

              {assignments.length > 0 && (
                <Assignments
                  assignments={assignments}
                  allAssignmentsCompleted={allAssignmentsCompleted}
                  handleAssignmentChange={handleAssignmentChange}
                />
              )}

              {questions.length > 0 && (
                <MultipleChoiceQuestions questions={quizData} />
              )}

              {explanation ? (
                <ChallengeExplanation explanation={explanation} />
              ) : null}

              {!hasAnsweredMcqCorrectly && (
                <p className='text-center'>{t('learn.answered-mcq')}</p>
              )}

              <Button block={true} variant='primary' onClick={validateAnswers}>
                {blockType === BlockTypes.review
                  ? t('buttons.submit')
                  : t('buttons.check-answer')}
              </Button>
              <Spacer size='xxs' />
              <Button block={true} variant='primary' onClick={openHelpModal}>
                {t('buttons.ask-for-help')}
              </Button>

              <Spacer size='l' />
            </Col>
            <CompletionModal />
            <HelpModal
              challengeTitle={title}
              challengeBlock={blockName}
              superBlock={superBlock}
            />
          </Row>
        </Container>
      </LearnLayout>
    </Hotkeys>
  );
};

ShowGeneric.displayName = 'ShowGeneric';

export default connect(mapStateToProps, mapDispatchToProps)(ShowGeneric);

export const query = graphql`
  query GenericChallenge($id: String!) {
    challengeNode(id: { eq: $id }) {
      challenge {
        assignments
        bilibiliIds {
          aid
          bvid
          cid
        }
        block
        blockType
        challengeType
        description
        explanation
        helpCategory
        instructions
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
        superBlock
        title
        transcript
        translationPending
        videoId
        videoId
        videoLocaleIds {
          espanol
          italian
          portuguese
        }
      }
    }
  }
`;

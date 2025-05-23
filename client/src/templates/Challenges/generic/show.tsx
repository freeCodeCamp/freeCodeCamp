import { graphql } from 'gatsby';
import React, { useEffect, useRef, useState } from 'react';
import Helmet from 'react-helmet';
import { useTranslation } from 'react-i18next';
import { connect } from 'react-redux';
import { Container, Col, Row, Button, useQuiz, Spacer } from '@freecodecamp/ui';
import store from 'store';
import { YouTubeEvent } from 'react-youtube';

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

import { shuffleArray } from '../../../../../shared/utils/shuffle-array';

// Styles
import './show.css';
import '../video.css';
import PrismFormatted from '../components/prism-formatted';

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
  const [hasSubmitted, setHasSubmitted] = useState<boolean>(false);

  const blockNameTitle = `${t(
    `intro:${superBlock}.blocks.${block}.title`
  )} - ${title}`;

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

  const handleSubmit = () => {
    validateAnswers();
  };

  const sceneSubject = new SceneSubject();

  // Initialize the data passed to `useQuiz`
  const [initialQuizData] = useState(
    questions.map(question => {
      // Separate correct answer and distractors based on solution index (1-based)
      const answerIndex = question.solution - 1;

      const distractors = question.answers
        .filter((_, index) => index !== answerIndex)
        .map((answer, index) => ({
          label: (
            <PrismFormatted
              className='quiz-answer-label'
              text={answer.answer}
            />
          ),
          value: index + 1, // distractors get values starting from 1
          feedback: <PrismFormatted text={answer.feedback || ''} />
        }));

      const answer = {
        label: (
          <PrismFormatted
            className='quiz-answer-label'
            text={question.answers[answerIndex].answer}
          />
        ),
        value: distractors.length + 1 // correct answer value is after distractors
      };

      return {
        question: <PrismFormatted text={question.text} />,
        answers: shuffleArray([...distractors, answer]),
        correctAnswer: answer.value
      };
    })
  );

  const { questions: quizData, validateAnswers } = useQuiz({
    initialQuestions: initialQuizData,
    validationMessages: {
      correct: t('learn.quiz.correct-answer'),
      incorrect: t('learn.quiz.incorrect-answer')
    },
    passingPercent: 100,
    onSuccess: () => {
      openCompletionModal();
      setHasSubmitted(true);
    },
    onFailure: () => setHasSubmitted(false)
  });

  return (
    <Hotkeys
      executeChallenge={handleSubmit}
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
                <MultipleChoiceQuestions
                  questions={quizData}
                  disabled={hasSubmitted}
                />
              )}

              {explanation ? (
                <ChallengeExplanation explanation={explanation} />
              ) : null}

              <Button block={true} variant='primary' onClick={handleSubmit}>
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

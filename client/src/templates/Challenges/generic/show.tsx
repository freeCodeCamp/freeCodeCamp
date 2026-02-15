import { graphql } from 'gatsby';
import React, { useEffect, useRef, useState } from 'react';
import Helmet from 'react-helmet';
import { useTranslation } from 'react-i18next';
import { connect } from 'react-redux';
import { Container, Col, Row, Button, Spacer } from '@freecodecamp/ui';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { challengeTypes } from '@freecodecamp/shared/config/challenge-types';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { isEqual } from 'lodash';
import store from 'store';
import { ObserveKeys } from 'react-hotkeys';
import { Link as ScrollLink, scrollSpy, scroller } from 'react-scroll';
import { YouTubeEvent } from 'react-youtube';

// Local Utilities
import PrismFormatted from '../components/prism-formatted';
import LearnLayout from '../../../components/layouts/learn';
import { ChallengeNode, ChallengeMeta, Test } from '../../../redux/prop-types';
import ChallengeDescription from '../components/challenge-description';
import InteractiveEditor from '../components/interactive-editor';
import ActionRow from '../classic/action-row';
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
import { getChallengePaths } from '../utils/challenge-paths';
import Scene from '../components/scene/scene';
import MultipleChoiceQuestions from '../components/multiple-choice-questions';
import ChallengeExplanation from '../components/challenge-explanation';
import ChallengeTranscript from '../components/challenge-transcript';
import HelpModal from '../components/help-modal';
import { SceneSubject } from '../components/scene/scene-subject';
import {
  buildReviewOutlineItems,
  reviewHeadingSelector,
  ReviewOutlineItem
} from './review-outline';

// Styles
import './show.css';
import '../video.css';

// Redux Setup
const mapStateToProps = (state: unknown) => ({
  isChallengeCompleted: isChallengeCompletedSelector(state)
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

function renderNodule(
  nodule: ChallengeNode['challenge']['nodules'][number],
  showInteractiveEditor: boolean
) {
  switch (nodule.type) {
    case 'paragraph':
      return <PrismFormatted text={nodule.data} />;
    case 'interactiveEditor':
      if (showInteractiveEditor) {
        return <InteractiveEditor files={nodule.data} />;
      } else {
        const files = nodule.data;
        return files.map((file, index) => (
          <PrismFormatted key={index} text={file.contentsHtml} />
        ));
      }
    default:
      return null;
  }
}

const ShowGeneric = ({
  challengeMounted,
  data: {
    challengeNode: {
      challenge: {
        assignments,
        bilibiliIds,
        block,
        description,
        nodules,
        explanation,
        challengeType,
        helpCategory,
        instructions,
        questions,
        tests,
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
      ...challengePaths
    });
    challengeMounted(challengeMeta.id);
    // hack to ensure the container is focused after the component mounts
    // and Gatsby doesn't interfere with the focus.
    requestAnimationFrame(() => container.current?.focus());
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

  // multiple choice questions
  const [selectedMcqOptions, setSelectedMcqOptions] = useState(
    questions.map<number | null>(() => null)
  );
  const [submittedMcqAnswers, setSubmittedMcqAnswers] = useState(
    questions.map<number | null>(() => null)
  );

  const [hasAnsweredMcqCorrectly, sethasAnsweredMcqCorrectly] = useState(true);

  const [showFeedback, setShowFeedback] = useState(false);

  const handleMcqOptionChange = (
    questionIndex: number,
    answerIndex: number
  ): void => {
    setSelectedMcqOptions(prev =>
      prev.map((option, index) =>
        index === questionIndex ? answerIndex : option
      )
    );
  };

  const handleSubmit = () => {
    const hasCompletedAssignments =
      assignments.length === 0 || allAssignmentsCompleted;
    const mcqSolutions = questions.map(question => question.solution - 1);
    const mcqCorrect = isEqual(mcqSolutions, selectedMcqOptions);

    setSubmittedMcqAnswers(selectedMcqOptions);
    setShowFeedback(true);
    if (hasCompletedAssignments && mcqCorrect) {
      openCompletionModal();
    }

    if (mcqSolutions.length > selectedMcqOptions.length || !mcqCorrect) {
      sethasAnsweredMcqCorrectly(false);
    } else {
      sethasAnsweredMcqCorrectly(true);
    }
  };

  const sceneSubject = new SceneSubject();

  // interactive editor
  const hasInteractiveEditor = nodules?.some(
    nodule => nodule.type === 'interactiveEditor'
  );

  const [showInteractiveEditor, setShowInteractiveEditor] = useState(
    () => !!store.get('showInteractiveEditor')
  );

  const toggleInteractiveEditor = () => {
    store.set('showInteractiveEditor', !showInteractiveEditor);
    setShowInteractiveEditor(!showInteractiveEditor);
  };

  const isReviewChallenge = challengeType === challengeTypes.review;
  const showReviewToggleInActionRow = isReviewChallenge && hasInteractiveEditor;
  const [showReviewOutline, setShowReviewOutline] = useState(false);
  const [reviewScrollOffset, setReviewScrollOffset] = useState(0);
  const [activeReviewHeadingId, setActiveReviewHeadingId] = useState<
    string | null
  >(null);
  const [reviewOutlineItems, setReviewOutlineItems] = useState<
    ReviewOutlineItem[]
  >([]);
  const reviewContentRef = useRef<HTMLDivElement | null>(null);
  const reviewOutlinePanelRef = useRef<HTMLElement | null>(null);

  const scrollToReviewHeading = (headingId: string) => {
    setActiveReviewHeadingId(headingId);

    scroller.scrollTo(headingId, {
      duration: 0,
      smooth: false,
      offset: reviewScrollOffset
    });
  };

  useEffect(() => {
    if (!isReviewChallenge || !reviewContentRef.current) {
      setReviewOutlineItems([]);
      return;
    }

    const headingElements = Array.from(
      reviewContentRef.current.querySelectorAll<HTMLHeadingElement>(
        reviewHeadingSelector
      )
    );
    const nextOutlineItems = buildReviewOutlineItems(headingElements);

    setReviewOutlineItems(nextOutlineItems);
  }, [
    description,
    instructions,
    isReviewChallenge,
    nodules,
    showReviewOutline,
    showInteractiveEditor
  ]);

  useEffect(() => {
    if (!isReviewChallenge) return;

    const toPixels = (value: string) => Number.parseFloat(value) || 0;
    const updateOffset = () => {
      const rootStyle = window.getComputedStyle(document.documentElement);
      const headerHeight = toPixels(
        rootStyle.getPropertyValue('--header-height')
      );
      const breadcrumbsHeight = toPixels(
        rootStyle.getPropertyValue('--breadcrumbs-height')
      );
      const actionRowHeight = showReviewToggleInActionRow
        ? toPixels(rootStyle.getPropertyValue('--action-row-height'))
        : 0;

      setReviewScrollOffset(
        -(headerHeight + breadcrumbsHeight + actionRowHeight + 8)
      );
    };

    updateOffset();
    window.addEventListener('resize', updateOffset);

    return () => window.removeEventListener('resize', updateOffset);
  }, [isReviewChallenge, showReviewToggleInActionRow]);

  useEffect(() => {
    if (
      !isReviewChallenge ||
      !showReviewOutline ||
      reviewOutlineItems.length < 1
    ) {
      setActiveReviewHeadingId(null);
      return;
    }

    let rafId: number | null = null;

    const updateActiveHeading = () => {
      const marker = window.scrollY + Math.abs(reviewScrollOffset) + 12;
      let nextActiveId: string | null = reviewOutlineItems[0]?.id ?? null;

      for (const item of reviewOutlineItems) {
        const heading = document.getElementById(item.id);
        if (!heading) continue;
        const headingTop = heading.getBoundingClientRect().top + window.scrollY;
        if (headingTop <= marker) {
          nextActiveId = item.id;
        } else {
          break;
        }
      }

      setActiveReviewHeadingId(prev =>
        prev === nextActiveId ? prev : nextActiveId
      );
      rafId = null;
    };

    const onScrollOrResize = () => {
      if (rafId !== null) return;
      rafId = window.requestAnimationFrame(updateActiveHeading);
    };

    updateActiveHeading();
    window.addEventListener('scroll', onScrollOrResize, { passive: true });
    window.addEventListener('resize', onScrollOrResize);

    return () => {
      if (rafId !== null) {
        window.cancelAnimationFrame(rafId);
      }
      window.removeEventListener('scroll', onScrollOrResize);
      window.removeEventListener('resize', onScrollOrResize);
    };
  }, [
    isReviewChallenge,
    reviewOutlineItems,
    reviewScrollOffset,
    showReviewOutline
  ]);

  useEffect(() => {
    if (
      !showReviewOutline ||
      !activeReviewHeadingId ||
      !reviewOutlinePanelRef.current
    ) {
      return;
    }

    const panel = reviewOutlinePanelRef.current;
    const activeLink = panel.querySelector<HTMLElement>(
      `.review-outline-link[data-review-id="${activeReviewHeadingId}"]`
    );
    if (!activeLink) return;

    const panelTop = panel.scrollTop;
    const panelBottom = panelTop + panel.clientHeight;
    const itemTop = activeLink.offsetTop;
    const itemBottom = itemTop + activeLink.offsetHeight;
    const edgeBuffer = 12;

    if (itemTop < panelTop + edgeBuffer) {
      panel.scrollTo({
        top: Math.max(0, itemTop - edgeBuffer),
        behavior: 'smooth'
      });
    } else if (itemBottom > panelBottom - edgeBuffer) {
      panel.scrollTo({
        top: Math.max(0, itemBottom - panel.clientHeight + edgeBuffer),
        behavior: 'smooth'
      });
    }
  }, [activeReviewHeadingId, showReviewOutline]);

  useEffect(() => {
    if (!showReviewOutline) return;

    const updateSpy = () => scrollSpy.update();
    updateSpy();
    const rafOne = window.requestAnimationFrame(updateSpy);
    const rafTwo = window.requestAnimationFrame(() => {
      window.requestAnimationFrame(updateSpy);
    });

    return () => {
      window.cancelAnimationFrame(rafOne);
      window.cancelAnimationFrame(rafTwo);
    };
  }, [reviewOutlineItems, showInteractiveEditor, showReviewOutline]);

  const challengeBody = (
    <>
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

      {nodules?.map((nodule, i) => {
        return (
          <React.Fragment key={i}>
            {renderNodule(nodule, showInteractiveEditor)}
          </React.Fragment>
        );
      })}

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
          <ObserveKeys only={['ctrl', 'cmd', 'enter']}>
            <Assignments
              assignments={assignments}
              allAssignmentsCompleted={allAssignmentsCompleted}
              handleAssignmentChange={handleAssignmentChange}
            />
          </ObserveKeys>
        )}

        {questions.length > 0 && (
          <ObserveKeys only={['ctrl', 'cmd', 'enter']}>
            <MultipleChoiceQuestions
              questions={questions}
              selectedOptions={selectedMcqOptions}
              handleOptionChange={handleMcqOptionChange}
              submittedMcqAnswers={submittedMcqAnswers}
              showFeedback={showFeedback}
              superBlock={superBlock}
            />
          </ObserveKeys>
        )}

        {explanation ? (
          <ChallengeExplanation explanation={explanation} />
        ) : null}

        {!hasAnsweredMcqCorrectly && (
          <p className='text-center'>{t('learn.answered-mcq')}</p>
        )}

        <Button block={true} variant='primary' onClick={handleSubmit}>
          {questions.length == 0
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
        challengeBlock={block}
        superBlock={superBlock}
      />
    </>
  );

  const reviewOutlineToggleButton = isReviewChallenge ? (
    <Button
      aria-controls='review-outline-panel'
      aria-expanded={showReviewOutline}
      className={
        showReviewToggleInActionRow
          ? 'review-outline-toggle-btn-action-row'
          : undefined
      }
      onClick={() => setShowReviewOutline(current => !current)}
      style={{ alignSelf: 'flex-start' }}
    >
      <FontAwesomeIcon icon={faBars} />{' '}
      {showReviewOutline ? t('buttons.close') : t('buttons.menu')}
    </Button>
  ) : null;

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
        <Container
          className={isReviewChallenge ? 'review-layout-fluid' : undefined}
          fluid
        >
          {hasInteractiveEditor && (
            <ActionRow
              hasInteractiveEditor={hasInteractiveEditor}
              showInteractiveEditor={showInteractiveEditor}
              toggleInteractiveEditor={toggleInteractiveEditor}
            />
          )}

          {showReviewToggleInActionRow && reviewOutlineToggleButton}

          {isReviewChallenge && showReviewOutline ? (
            <div className='review-layout-container'>
              <div className='review-layout-row'>
                <div className='review-sidebar-column'>
                  {!showReviewToggleInActionRow && reviewOutlineToggleButton}
                  <aside
                    className='review-outline-panel'
                    id='review-outline-panel'
                    ref={reviewOutlinePanelRef}
                  >
                    <nav aria-label='Review outline'>
                      <ul className='review-outline-list'>
                        {reviewOutlineItems.map(item => (
                          <li
                            className={`review-outline-item review-outline-item-level-${item.level}`}
                            key={item.id}
                          >
                            <ScrollLink
                              className={`review-outline-link${
                                activeReviewHeadingId === item.id
                                  ? ' active'
                                  : ''
                              }`}
                              data-review-id={item.id}
                              duration={0}
                              isDynamic={true}
                              offset={reviewScrollOffset}
                              onClick={() => scrollToReviewHeading(item.id)}
                              smooth={false}
                              to={item.id}
                            >
                              {item.text}
                            </ScrollLink>
                          </li>
                        ))}
                      </ul>
                    </nav>
                  </aside>
                </div>
                <div className='review-main-column'>
                  <div ref={reviewContentRef}>
                    <Row>{challengeBody}</Row>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <Container>
              <div ref={isReviewChallenge ? reviewContentRef : undefined}>
                <Row>{challengeBody}</Row>
              </div>
            </Container>
          )}
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
        challengeType
        description
        nodules {
          type
          data
        }
        explanation
        helpCategory
        instructions
        fields {
          slug
        }
        questions {
          text
          answers {
            answer
            feedback
            audioId
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
        tests {
          text
          testString
        }
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

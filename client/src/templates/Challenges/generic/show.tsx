import { graphql } from 'gatsby';
import React, { useEffect, useRef, useState } from 'react';
import Helmet from 'react-helmet';
import { useTranslation } from 'react-i18next';
import { connect } from 'react-redux';
import { Container, Col, Row, Button } from '@freecodecamp/ui';

// Local Utilities
import Spacer from '../../../components/helpers/spacer';
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

// Redux Setup
const mapStateToProps = (state: unknown) => ({
  isChallengeCompleted: isChallengeCompletedSelector(state) as boolean
});

const mapDispatchToProps = {
  initTests,
  updateChallengeMeta,
  challengeMounted,
  updateSolutionFormValues,
  openCompletionModal: () => openModal('completion')
};

// Types
interface ShowQuizProps {
  challengeMounted: (arg0: string) => void;
  data: { challengeNode: ChallengeNode };
  description: string;
  initTests: (xs: Test[]) => void;
  isChallengeCompleted: boolean;
  openCompletionModal: () => void;
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
        challengeType,
        fields: { tests },
        helpCategory,
        instructions,
        title,
        translationPending,
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
  isChallengeCompleted
}: ShowQuizProps) => {
  const { t } = useTranslation();
  const { nextChallengePath, prevChallengePath } = challengeMeta;
  const container = useRef<HTMLElement | null>(null);

  const blockNameTitle = `${t(
    `intro:${superBlock}.blocks.${block}.title`
  )} - ${title}`;

  useEffect(() => {
    initTests(tests);
    updateChallengeMeta({
      ...challengeMeta,
      title,
      challengeType,
      helpCategory
    });
    challengeMounted(challengeMeta.id);
    container.current?.focus();
    // This effect should be run once on mount
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    updateChallengeMeta({
      ...challengeMeta,
      title,
      challengeType,
      helpCategory
    });
    challengeMounted(challengeMeta.id);
  }, [
    title,
    challengeMeta,
    challengeType,
    helpCategory,
    challengeMounted,
    updateChallengeMeta
  ]);

  // video
  const [videoIsLoaded, setVideoIsLoaded] = useState(false);

  const handleVideoIsLoaded = () => {
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

  // submit
  const handleSubmit = () => {
    if (assignments.length == 0 || allAssignmentsCompleted) {
      openCompletionModal();
    }
  };

  return (
    <Hotkeys
      executeChallenge={handleSubmit}
      containerRef={container}
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
              {description && (
                <ChallengeDescription description={description} />
              )}
            </Col>

            <Col lg={10} lgOffset={1} md={10} mdOffset={1}>
              {videoId && (
                <VideoPlayer
                  bilibiliIds={bilibiliIds}
                  onVideoLoad={handleVideoIsLoaded}
                  title={title}
                  videoId={videoId}
                  videoIsLoaded={videoIsLoaded}
                  videoLocaleIds={videoLocaleIds}
                />
              )}
            </Col>

            <Col md={8} mdOffset={2} sm={10} smOffset={1} xs={12}>
              {instructions && (
                <ChallengeDescription description={instructions} />
              )}

              <Spacer size='medium' />

              {assignments.length > 0 && (
                <Assignments
                  assignments={assignments}
                  allAssignmentsCompleted={allAssignmentsCompleted}
                  handleAssignmentChange={handleAssignmentChange}
                />
              )}

              <Button block={true} variant='primary' onClick={handleSubmit}>
                {blockType === BlockTypes.review
                  ? t('buttons.submit')
                  : t('buttons.check-answer')}
              </Button>

              <Spacer size='large' />
            </Col>
            <CompletionModal />
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
        superBlock
        title
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

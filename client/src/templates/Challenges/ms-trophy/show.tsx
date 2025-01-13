import { graphql } from 'gatsby';
import React, { useEffect, useRef } from 'react';
import Helmet from 'react-helmet';
import type { TFunction } from 'i18next';
import { withTranslation } from 'react-i18next';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import type { Dispatch } from 'redux';
import { createSelector } from 'reselect';

import { Container, Col, Row, Button, Spacer } from '@freecodecamp/ui';
import LearnLayout from '../../../components/layouts/learn';
import { ChallengeNode, ChallengeMeta, Test } from '../../../redux/prop-types';
import ChallengeDescription from '../components/challenge-description';
import Hotkeys from '../components/hotkeys';
import ChallengeTitle from '../components/challenge-title';
import CompletionModal from '../components/completion-modal';
import { getChallengePaths } from '../utils/challenge-paths';
import HelpModal from '../components/help-modal';
import {
  challengeMounted,
  updateChallengeMeta,
  openModal,
  updateSolutionFormValues,
  submitChallenge,
  initTests
} from '../redux/actions';
import { isChallengeCompletedSelector } from '../redux/selectors';
import { setIsProcessing } from '../../../redux/actions';
import {
  isProcessingSelector,
  msUsernameSelector
} from '../../../redux/selectors';
import LinkMsUser from './link-ms-user';

// Redux Setup
const mapStateToProps = createSelector(
  isChallengeCompletedSelector,
  isProcessingSelector,
  msUsernameSelector,
  (
    isChallengeCompleted: boolean,
    isProcessing: boolean,
    msUsername: string | undefined | null
  ) => ({
    isChallengeCompleted,
    isProcessing,
    msUsername
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
      openHelpModal: () => openModal('help'),
      setIsProcessing,
      submitChallenge
    },
    dispatch
  );

// Types
interface MsTrophyProps {
  challengeMounted: (arg0: string) => void;
  data: { challengeNode: ChallengeNode };
  initTests: (xs: Test[]) => void;
  isChallengeCompleted: boolean;
  isProcessing: boolean;
  setIsProcessing: (arg0: boolean) => void;
  msUsername: string | undefined | null;
  openCompletionModal: () => void;
  openHelpModal: () => void;
  pageContext: {
    challengeMeta: ChallengeMeta;
  };
  submitChallenge: () => void;
  t: TFunction;
  updateChallengeMeta: (arg0: ChallengeMeta) => void;
}

function MsTrophy(props: MsTrophyProps) {
  const container = useRef<HTMLElement>(null);
  const {
    data: {
      challengeNode: {
        challenge: { title }
      }
    }
  } = props;
  useEffect(() => {
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
    } = props;
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
    container.current?.focus();
    // This effect should be run once on mount
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSubmit = () => {
    const { setIsProcessing, submitChallenge } = props;

    setIsProcessing(true);
    submitChallenge();
  };

  const {
    data: {
      challengeNode: {
        challenge: {
          description,
          instructions,
          superBlock,
          block,
          translationPending,
          fields: { blockName }
        }
      }
    },
    isChallengeCompleted,
    isProcessing,
    msUsername,
    openHelpModal,
    t
  } = props;

  const blockNameTitle = `${t(
    `intro:${superBlock}.blocks.${block}.title`
  )} - ${title}`;

  return (
    <Hotkeys containerRef={container}>
      <LearnLayout>
        <Helmet
          title={`${blockNameTitle} | ${t('learn.learn')} | freeCodeCamp.org`}
        />
        <Container>
          <Row>
            <Col md={8} mdOffset={2} sm={10} smOffset={1} xs={12}>
              <Spacer size='m' />
              <ChallengeTitle
                isCompleted={isChallengeCompleted}
                translationPending={translationPending}
              >
                {title}
              </ChallengeTitle>
              <ChallengeDescription
                superBlock={superBlock}
                description={description}
                instructions={instructions}
              />
              <LinkMsUser />
              <hr />
              <Button
                block={true}
                variant='primary'
                data-playwright-test-label='verify-trophy-button'
                disabled={!msUsername || isProcessing}
                onClick={handleSubmit}
              >
                {t('buttons.verify-trophy')}
              </Button>
              <Spacer size='xxs' />
              <Button
                block={true}
                variant='primary'
                data-playwright-test-label='ask-for-help-button'
                onClick={openHelpModal}
              >
                {t('buttons.ask-for-help')}
              </Button>
              <br />
              <Spacer size='m' />
            </Col>
            <CompletionModal />
            <HelpModal challengeTitle={title} challengeBlock={blockName} />
          </Row>
        </Container>
      </LearnLayout>
    </Hotkeys>
  );
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withTranslation()(MsTrophy));

export const query = graphql`
  query MsTrophyChallenge($id: String!) {
    challengeNode(id: { eq: $id }) {
      challenge {
        title
        description
        instructions
        challengeType
        helpCategory
        superBlock
        block
        translationPending
        fields {
          blockName
          tests {
            text
            testString
          }
        }
      }
    }
  }
`;

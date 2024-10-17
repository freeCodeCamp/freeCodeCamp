import { graphql } from 'gatsby';
import React from 'react';
import Helmet from 'react-helmet';
import type { TFunction } from 'i18next';
import { withTranslation } from 'react-i18next';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import type { Dispatch } from 'redux';
import { createSelector } from 'reselect';

import { Container, Col, Row } from '@freecodecamp/ui';
import Spacer from '../../../components/helpers/spacer';
import LearnLayout from '../../../components/layouts/learn';
import { ChallengeNode, ChallengeMeta, Test } from '../../../redux/prop-types';
import ChallengeDescription from '../components/challenge-description';
import Hotkeys from '../components/hotkeys';
import ChallengeTitle from '../components/challenge-title';
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
interface EnvExamProps {
  challengeMounted: (arg0: string) => void;
  data: { challengeNode: ChallengeNode };
  initTests: (xs: Test[]) => void;
  isChallengeCompleted: boolean;
  isProcessing: boolean;
  setIsProcessing: (arg0: boolean) => void;
  pageContext: {
    challengeMeta: ChallengeMeta;
  };
  t: TFunction;
  updateChallengeMeta: (arg0: ChallengeMeta) => void;
}

// Component
function EnvExam(props: EnvExamProps) {
  const {
    data: {
      challengeNode: {
        challenge: {
          title,
          description,
          instructions,
          superBlock,
          block,
          translationPending
        }
      }
    },
    isChallengeCompleted,
    pageContext: {
      challengeMeta: { nextChallengePath, prevChallengePath }
    },
    t
  } = props;

  const blockNameTitle = `${t(
    `intro:${superBlock}.blocks.${block}.title`
  )} - ${title}`;

  return (
    <Hotkeys
      nextChallengePath={nextChallengePath}
      prevChallengePath={prevChallengePath}
    >
      <LearnLayout>
        <Helmet
          title={`${blockNameTitle} | ${t('learn.learn')} | freeCodeCamp.org`}
        />
        <Container>
          <Row>
            <Col md={8} mdOffset={2} sm={10} smOffset={1} xs={12}>
              <Spacer size='medium' />
              <ChallengeTitle
                isCompleted={isChallengeCompleted}
                translationPending={translationPending}
              >
                {title}
              </ChallengeTitle>
              <ChallengeDescription
                description={description}
                instructions={instructions}
              />
              <Spacer size='medium' />
            </Col>
          </Row>
        </Container>
      </LearnLayout>
    </Hotkeys>
  );
}

EnvExam.displayName = 'EnvExam';

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withTranslation()(EnvExam));

export const query = graphql`
  query EnvExamChallenge($id: String!) {
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

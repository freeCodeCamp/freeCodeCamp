import { graphql } from 'gatsby';
import React, { useEffect, useRef } from 'react';
import Helmet from 'react-helmet';
import { type TFunction } from 'i18next';
import { withTranslation } from 'react-i18next';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import type { Dispatch } from 'redux';
import { createSelector } from 'reselect';
import { Container, Col, Row, Spacer } from '@freecodecamp/ui';

import LearnLayout from '../../../../components/layouts/learn';
import {
  ChallengeNode,
  ChallengeMeta,
  Test
} from '../../../../redux/prop-types';
import ChallengeDescription from '../../components/challenge-description';
import Hotkeys from '../../components/hotkeys';
import ChallengeTitle from '../../components/challenge-title';
import CompletionModal from '../../components/completion-modal';
import HelpModal from '../../components/help-modal';
import {
  challengeMounted,
  updateChallengeMeta,
  openModal,
  updateSolutionFormValues,
  initTests
} from '../../redux/actions';
import { isChallengeCompletedSelector } from '../../redux/selectors';
import { getGuideUrl } from '../../utils';
import SolutionForm from '../solution-form';
import ProjectToolPanel from '../tool-panel';
import { getChallengePaths } from '../../utils/challenge-paths';

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
      openCompletionModal: () => openModal('completion')
    },
    dispatch
  );

// Types
interface ProjectProps {
  challengeMounted: (arg0: string) => void;
  data: { challengeNode: ChallengeNode };
  initTests: (xs: Test[]) => void;
  isChallengeCompleted: boolean;
  openCompletionModal: () => void;
  pageContext: {
    challengeMeta: ChallengeMeta;
  };
  t: TFunction;
  updateChallengeMeta: (arg0: ChallengeMeta) => void;
  updateSolutionFormValues: () => void;
}

const ShowFrontEndProject = (props: ProjectProps) => {
  const handleSubmit = ({
    showCompletionModal
  }: {
    showCompletionModal: boolean;
  }): void => {
    if (showCompletionModal) {
      props.openCompletionModal();
    }
  };

  const container = useRef<HTMLElement>(null);

  useEffect(() => {
    const {
      challengeMounted,
      data: {
        challengeNode: {
          challenge: { fields, title, challengeType, helpCategory }
        }
      },
      pageContext: { challengeMeta },
      initTests,
      updateChallengeMeta
    } = props;
    initTests(fields.tests);
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

  const {
    data: {
      challengeNode: {
        challenge: {
          challengeType,
          fields: { blockName },
          forumTopicId,
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
    t,
    updateSolutionFormValues
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
              <Spacer size='m' />
              <SolutionForm
                challengeType={challengeType}
                description={description}
                onSubmit={handleSubmit}
                updateSolutionForm={updateSolutionFormValues}
              />
              <ProjectToolPanel
                guideUrl={getGuideUrl({ forumTopicId, title })}
              />
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
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withTranslation()(ShowFrontEndProject));

export const query = graphql`
  query ProjectChallenge($id: String!) {
    challengeNode(id: { eq: $id }) {
      challenge {
        forumTopicId
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
          slug
          tests {
            text
            testString
          }
        }
      }
    }
  }
`;

import { graphql } from 'gatsby';
import React, { useEffect, useRef } from 'react';
import Helmet from 'react-helmet';
import { withTranslation } from 'react-i18next';
import type { TFunction } from 'i18next';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import { Container, Col, Row, Spacer } from '@freecodecamp/ui';

import LearnLayout from '../../../../components/layouts/learn';
import { isSignedInSelector } from '../../../../redux/selectors';
import {
  ChallengeMeta,
  ChallengeNode,
  Test
} from '../../../../redux/prop-types';
import ChallengeDescription from '../../components/challenge-description';
import Hotkeys from '../../components/hotkeys';
import ChallengeTitle from '../../components/challenge-title';
import CompletionModal from '../../components/completion-modal';
import HelpModal from '../../components/help-modal';
import Output from '../../components/output';
import TestSuite from '../../components/test-suite';
import {
  challengeMounted,
  executeChallenge,
  initConsole,
  initTests,
  updateChallengeMeta,
  updateSolutionFormValues
} from '../../redux/actions';
import {
  challengeTestsSelector,
  consoleOutputSelector,
  isChallengeCompletedSelector
} from '../../redux/selectors';

import { getGuideUrl } from '../../utils';
import { getChallengePaths } from '../../utils/challenge-paths';
import SolutionForm from '../solution-form';
import ProjectToolPanel from '../tool-panel';

import '../../components/test-frame.css';

// Redux Setup
const mapStateToProps = createSelector(
  consoleOutputSelector,
  challengeTestsSelector,
  isChallengeCompletedSelector,
  isSignedInSelector,
  (
    output: string[],
    tests: Test[],
    isChallengeCompleted: boolean,
    isSignedIn: boolean
  ) => ({
    tests,
    output,
    isChallengeCompleted,
    isSignedIn
  })
);

const mapDispatchToActions = {
  challengeMounted,
  executeChallenge,
  initConsole,
  initTests,
  updateChallengeMeta,
  updateSolutionFormValues
};

// Types
interface BackEndProps {
  challengeMounted: (arg0: string) => void;
  data: { challengeNode: ChallengeNode };
  description: string;
  executeChallenge: (options: { showCompletionModal: boolean }) => void;
  forumTopicId: number;
  id: string;
  initConsole: () => void;
  initTests: (tests: Test[]) => void;
  isChallengeCompleted: boolean;
  isSignedIn: boolean;
  output: string[];
  pageContext: {
    challengeMeta: ChallengeMeta;
  };
  t: TFunction;
  tests: Test[];
  title: string;
  updateChallengeMeta: (arg0: ChallengeMeta) => void;
  updateSolutionFormValues: () => void;
}

const ShowBackEnd = (props: BackEndProps) => {
  const container = useRef<HTMLElement>(null);

  const handleSubmit = ({
    showCompletionModal
  }: {
    showCompletionModal: boolean;
  }) => {
    props.executeChallenge({ showCompletionModal });
  };

  useEffect(() => {
    const {
      challengeMounted,
      initConsole,
      initTests,
      updateChallengeMeta,
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
      pageContext: { challengeMeta }
    } = props;
    initConsole();
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const {
    data: {
      challengeNode: {
        challenge: {
          fields: { blockName },
          challengeType,
          forumTopicId,
          title,
          description,
          instructions,
          translationPending,
          superBlock,
          block
        }
      }
    },
    isChallengeCompleted,
    output,
    t,
    tests,
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
                onSubmit={handleSubmit}
                updateSolutionForm={updateSolutionFormValues}
              />
              <ProjectToolPanel
                guideUrl={getGuideUrl({ forumTopicId, title })}
              />
              <br />
              <Output
                defaultOutput={`/**
*
* ${t('learn.test-output')}
*
*
*/`}
                output={output}
              />
              <TestSuite tests={tests} />
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
  mapDispatchToActions
)(withTranslation()(ShowBackEnd));

export const query = graphql`
  query BackendChallenge($id: String!) {
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

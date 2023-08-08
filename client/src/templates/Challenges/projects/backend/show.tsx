/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */

import { Col, Row } from '@freecodecamp/react-bootstrap';
import { graphql } from 'gatsby';
import React, { Component } from 'react';
import Helmet from 'react-helmet';
import { withTranslation } from 'react-i18next';
import type { TFunction } from 'i18next';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';

import { Container } from '@freecodecamp/ui';
import Spacer from '../../../../components/helpers/spacer';
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

// Component
class BackEnd extends Component<BackEndProps> {
  static displayName: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  private _container: any;
  constructor(props: BackEndProps) {
    super(props);
    this.state = {};
    this.updateDimensions = this.updateDimensions.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.initializeComponent();
    window.addEventListener('resize', () => this.updateDimensions());
    this._container.focus();
  }

  updateDimensions() {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
  }

  componentWillUnmount() {
    window.removeEventListener('resize', () => this.updateDimensions());
  }

  componentDidUpdate(prevProps: BackEndProps) {
    const {
      data: {
        challengeNode: {
          challenge: {
            title: prevTitle,
            fields: { tests: prevTests }
          }
        }
      }
    } = prevProps;
    const {
      data: {
        challengeNode: {
          challenge: {
            title: currentTitle,
            fields: { tests: currTests }
          }
        }
      }
    } = this.props;
    if (prevTitle !== currentTitle || prevTests !== currTests) {
      this.initializeComponent();
    }
  }

  initializeComponent() {
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
    } = this.props;
    initConsole();
    initTests(tests);
    updateChallengeMeta({
      ...challengeMeta,
      title,
      challengeType,
      helpCategory
    });
    challengeMounted(challengeMeta.id);
  }

  handleSubmit({
    showCompletionModal
  }: {
    showCompletionModal: boolean;
  }): void {
    this.props.executeChallenge({
      showCompletionModal
    });
  }

  render() {
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
      pageContext: {
        challengeMeta: { nextChallengePath, prevChallengePath }
      },
      t,
      tests,
      updateSolutionFormValues
    } = this.props;

    const blockNameTitle = `${t(
      `intro:${superBlock}.blocks.${block}.title`
    )} - ${title}`;

    return (
      <Hotkeys
        innerRef={(c: HTMLElement | null) => (this._container = c)}
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
                <SolutionForm
                  challengeType={challengeType}
                  // eslint-disable-next-line @typescript-eslint/unbound-method
                  onSubmit={this.handleSubmit}
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
                <Spacer size='medium' />
              </Col>
              <CompletionModal />
              <HelpModal challengeTitle={title} challengeBlock={blockName} />
            </Row>
          </Container>
        </LearnLayout>
      </Hotkeys>
    );
  }
}

BackEnd.displayName = 'BackEnd';

export default connect(
  mapStateToProps,
  mapDispatchToActions
)(withTranslation()(BackEnd));

export const query = graphql`
  query BackendChallenge($slug: String!) {
    challengeNode(challenge: { fields: { slug: { eq: $slug } } }) {
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

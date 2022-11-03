/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */

import { Col, Grid, Row } from '@freecodecamp/react-bootstrap';
import { graphql } from 'gatsby';
import React, { Component } from 'react';
import Helmet from 'react-helmet';
import { TFunction, withTranslation } from 'react-i18next';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';

import Spacer from '../../../../components/helpers/spacer';
import LearnLayout from '../../../../components/layouts/learn';
import { isSignedInSelector } from '../../../../redux/selectors';
import {
  ChallengeMeta,
  ChallengeNode,
  Test
} from '../../../../redux/prop-types';
import ChallengeDescription from '../../components/Challenge-Description';
import Hotkeys from '../../components/Hotkeys';
import ChallengeTitle from '../../components/challenge-title';
import Output from '../../components/output';
import TestSuite from '../../components/test-suite';
import {
  challengeMounted,
  executeChallenge,
  initConsole,
  initTests,
  updateChallengeMeta,
  submitChallenge,
  updateSolutionFormValues
} from '../../redux/actions';
import {
  challengeTestsSelector,
  consoleOutputSelector,
  testsRunningSelector,
  isChallengeCompletedSelector
} from '../../redux/selectors';
import SolutionForm from '../solution-form';

import '../../components/test-frame.css';

// Redux Setup
const mapStateToProps = createSelector(
  consoleOutputSelector,
  challengeTestsSelector,
  isChallengeCompletedSelector,
  isSignedInSelector,
  testsRunningSelector,
  (
    output: string[],
    tests: Test[],
    isChallengeCompleted: boolean,
    isSignedIn: boolean,
    testsRunning: boolean
  ) => ({
    tests,
    output,
    isChallengeCompleted,
    isSignedIn,
    testsRunning
  })
);

const mapDispatchToActions = {
  challengeMounted,
  executeChallenge,
  initConsole,
  initTests,
  updateChallengeMeta,
  updateSolutionFormValues,
  submitChallenge
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
  submitChallenge: () => void;
  t: TFunction;
  tests: Test[];
  testsRunning: boolean;
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

  handleSubmit(): void {
    const { tests, submitChallenge } = this.props;
    const isChallengeComplete = tests.every(test => test.pass && !test.err);

    if (isChallengeComplete) {
      submitChallenge();
    } else {
      this.props.executeChallenge({
        showCompletionModal: false
      });
    }
  }

  render() {
    const {
      data: {
        challengeNode: {
          challenge: {
            challengeType,
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
      testsRunning,
      updateSolutionFormValues
    } = this.props;

    const hasTests = tests.length > 0;
    const isChallengeComplete = tests.every(test => test.pass && !test.err);
    const submitBtnLabel: string = !isChallengeComplete
      ? `${t('buttons.run-test-2')}${testsRunning ? ' ...' : ''}`
      : t('buttons.submit-and-go');

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
          <Grid>
            <Row>
              <Col md={8} mdOffset={2} sm={10} smOffset={1} xs={12}>
                <Spacer />
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
                  buttonLabel={submitBtnLabel}
                />
                <br />
                {hasTests && (
                  <Output
                    defaultOutput={`/**
*
* ${t('learn.test-output')}
*
*
*/`}
                    output={output}
                  />
                )}
                {hasTests && <TestSuite tests={tests} />}
                <Spacer />
              </Col>
            </Row>
          </Grid>
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
        certification
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

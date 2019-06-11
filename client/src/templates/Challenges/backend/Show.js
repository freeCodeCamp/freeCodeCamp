import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Grid, Col, Row } from '@freecodecamp/react-bootstrap';
import { createSelector } from 'reselect';
import { reduxForm } from 'redux-form';
import { graphql } from 'gatsby';

import {
  executeChallenge,
  challengeMounted,
  challengeTestsSelector,
  consoleOutputSelector,
  initTests,
  updateChallengeMeta,
  updateProjectFormValues,
  backendNS
} from '../redux';
import { createGuideUrl } from '../utils';

import LearnLayout from '../../../components/layouts/Learn';
import ChallengeTitle from '../components/Challenge-Title';
import ChallengeDescription from '../components/Challenge-Description';
import TestSuite from '../components/Test-Suite';
import Output from '../components/Output';
import CompletionModal from '../components/CompletionModal';
import HelpModal from '../components/HelpModal';
import ProjectToolPanel from '../project/Tool-Panel';
import ProjectForm from '../project/ProjectForm';
import {
  createFormValidator,
  isValidURL,
  makeRequired,
  Form
} from '../../../components/formHelpers';
import Spacer from '../../../components/helpers/Spacer';

import { backend } from '../../../../utils/challengeTypes';

import '../components/test-frame.css';

// provided by redux form
const reduxFormPropTypes = {
  fields: PropTypes.object,
  handleSubmit: PropTypes.func.isRequired,
  resetForm: PropTypes.func.isRequired,
  submitting: PropTypes.bool
};

const propTypes = {
  challengeMounted: PropTypes.func.isRequired,
  description: PropTypes.string,
  executeChallenge: PropTypes.func.isRequired,
  id: PropTypes.string,
  initTests: PropTypes.func.isRequired,
  output: PropTypes.string,
  tests: PropTypes.array,
  title: PropTypes.string,
  updateChallengeMeta: PropTypes.func.isRequired,
  updateProjectFormValues: PropTypes.func.isRequired,
  ...reduxFormPropTypes
};

const fields = ['solution'];

const fieldValidators = {
  solution: makeRequired(isValidURL)
};

const mapStateToProps = createSelector(
  consoleOutputSelector,
  challengeTestsSelector,
  (output, tests) => ({
    tests,
    output
  })
);

const mapDispatchToActions = {
  challengeMounted,
  executeChallenge,
  initTests,
  updateChallengeMeta,
  updateProjectFormValues
};

const formFields = ['solution'];
const options = {
  required: ['solution'],
  types: {
    solution: 'url'
  }
};

export class BackEnd extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.updateDimensions = this.updateDimensions.bind(this);
  }

  componentDidMount() {
    const {
      challengeMounted,
      initTests,
      updateChallengeMeta,
      data: {
        challengeNode: {
          fields: { tests },
          challengeType
        }
      },
      pageContext: { challengeMeta }
    } = this.props;
    initTests(tests);
    updateChallengeMeta({ ...challengeMeta, challengeType });
    challengeMounted(challengeMeta.id);
    window.addEventListener('resize', this.updateDimensions);
  }

  updateDimensions() {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateDimensions);
  }

  componentDidUpdate(prevProps) {
    const {
      data: {
        challengeNode: { title: prevTitle }
      }
    } = prevProps;
    const {
      challengeMounted,
      initTests,
      updateChallengeMeta,
      data: {
        challengeNode: {
          title: currentTitle,
          fields: { tests },
          challengeType
        }
      },
      pageContext: { challengeMeta }
    } = this.props;
    if (prevTitle !== currentTitle) {
      initTests(tests);
      updateChallengeMeta({ ...challengeMeta, challengeType });
      challengeMounted(challengeMeta.id);
    }
  }

  render() {
    const {
      data: {
        challengeNode: {
          fields: { blockName, slug },
          challengeType,
          title,
          description,
          instructions
        }
      },
      output,
      tests,
      submitting,
      executeChallenge,
      updateProjectFormValues
    } = this.props;

    // TODO: Should be tied to user.isSignedIn
    const buttonCopy = submitting
      ? 'Submit and go to my next challenge'
      : "I've completed this challenge";
    const blockNameTitle = `${blockName} - ${title}`;
    return (
      <LearnLayout>
        <Grid>
          <Row>
            <Col md={8} mdOffset={2} sm={10} smOffset={1} xs={12}>
              <Spacer />
              <ChallengeTitle>{blockNameTitle}</ChallengeTitle>
              <ChallengeDescription
                description={description}
                instructions={instructions}
              />
              {challengeType === backend ? (
                <Form
                  buttonText={`${buttonCopy}`}
                  formFields={formFields}
                  id={backendNS}
                  options={options}
                  submit={executeChallenge}
                />
              ) : (
                <ProjectForm
                  isFrontEnd={false}
                  onSubmit={executeChallenge}
                  updateProjectForm={updateProjectFormValues}
                />
              )}
              <ProjectToolPanel guideUrl={createGuideUrl(slug)} />
              <br />
              <Output
                defaultOutput={`/**
*
* Test output will go here
*
*
*/`}
                dimensions={this.state}
                height={150}
                output={output}
              />
              <TestSuite tests={tests} />

              <Spacer />
            </Col>
            <CompletionModal />
            <HelpModal />
          </Row>
        </Grid>
      </LearnLayout>
    );
  }
}

BackEnd.displayName = 'BackEnd';
BackEnd.propTypes = propTypes;

export default reduxForm(
  {
    form: 'BackEndChallenge',
    fields,
    validate: createFormValidator(fieldValidators)
  },
  mapStateToProps,
  mapDispatchToActions
)(BackEnd);

export const query = graphql`
  query BackendChallenge($slug: String!) {
    challengeNode(fields: { slug: { eq: $slug } }) {
      title
      description
      instructions
      challengeType
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
`;

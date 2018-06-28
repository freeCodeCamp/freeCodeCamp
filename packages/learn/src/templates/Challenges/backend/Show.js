/* global graphql */
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { createSelector } from 'reselect';
import { reduxForm } from 'redux-form';
import { Col, Row } from 'react-bootstrap';

import ChallengeTitle from '../components/Challenge-Title';
import ChallengeDescription from '../components/Challenge-Description';
import TestSuite from '../components/Test-Suite';
import Output from '../components/Output';
import CompletionModal from '../components/CompletionModal';
import ProjectToolPanel from '../project/Tool-Panel';
import {
  executeChallenge,
  challengeTestsSelector,
  consoleOutputSelector,
  initTests,
  updateChallengeMeta,
  backendNS
} from '../redux';

import {
  createFormValidator,
  isValidURL,
  makeRequired,
  Form
} from '../../../components/formHelpers';
import Spacer from '../../../components/util/Spacer';
import { createGuideUrl } from '../utils';

// provided by redux form
const reduxFormPropTypes = {
  fields: PropTypes.object,
  handleSubmit: PropTypes.func.isRequired,
  resetForm: PropTypes.func.isRequired,
  submitting: PropTypes.bool
};

const propTypes = {
  description: PropTypes.arrayOf(PropTypes.string),
  executeChallenge: PropTypes.func.isRequired,
  id: PropTypes.string,
  output: PropTypes.string,
  tests: PropTypes.array,
  title: PropTypes.string,
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
  executeChallenge,
  initTests,
  updateChallengeMeta
};

const formFields = ['solution'];
const options = {
  required: ['solution'],
  types: {
    solution: 'url'
  }
};

export class BackEnd extends PureComponent {
  componentDidMount() {
    const {
      initTests,
      updateChallengeMeta,
      data: { challengeNode: { fields: { tests }, challengeType } },
      pathContext: { challengeMeta }
    } = this.props;
    initTests(tests);
    updateChallengeMeta({ ...challengeMeta, challengeType });
  }

  componentDidUpdate(prevProps) {
    const { data: { challengeNode: { title: prevTitle } } } = prevProps;
    const {
      initTests,
      updateChallengeMeta,
      data: {
        challengeNode: { title: currentTitle, fields: { tests }, challengeType }
      },
      pathContext: { challengeMeta }
    } = this.props;
    if (prevTitle !== currentTitle) {
      initTests(tests);
      updateChallengeMeta({ ...challengeMeta, challengeType });
    }
  }

  render() {
    const {
      data: {
        challengeNode: { fields: { blockName, slug }, title, description }
      },
      output,
      tests,
      submitting,
      executeChallenge
    } = this.props;

    // TODO: Should be tied to user.isSignedIn
    const buttonCopy = submitting
      ? 'Submit and go to my next challenge'
      : "I've completed this challenge";
    const blockNameTitle = `${blockName} - ${title}`;
    return (
      <Row>
        <Col xs={6} xsOffset={3}>
          <Spacer />
          <div>
            <ChallengeTitle>{blockNameTitle}</ChallengeTitle>
            <ChallengeDescription description={description} />
          </div>
          <div>
            <Form
              buttonText={buttonCopy + '(Ctrl + Enter)'}
              formFields={formFields}
              id={backendNS}
              options={options}
              submit={executeChallenge}
            />
            <ProjectToolPanel guideUrl={createGuideUrl(slug)} />
          </div>
          <div>
            <br />
            <Output
              defaultOutput={`/**
  *
  * Test output will go here
  *
  *
  */`}
              height={150}
              output={output}
            />
          </div>
          <div>
            <TestSuite tests={tests} />
          </div>
          <Spacer />
        </Col>
        <CompletionModal />
      </Row>
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
      guideUrl
      description
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

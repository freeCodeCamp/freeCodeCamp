import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { createSelector } from 'reselect';
import { reduxForm } from 'redux-form';
import { graphql } from 'gatsby';

import {
  executeChallenge,
  challengeTestsSelector,
  consoleOutputSelector,
  initTests,
  updateChallengeMeta,
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
import {
  createFormValidator,
  isValidURL,
  makeRequired,
  Form
} from '../../../components/formHelpers';
import Spacer from '../../../components/helpers/Spacer';

import '../components/test-frame.css';

// provided by redux form
const reduxFormPropTypes = {
  fields: PropTypes.object,
  handleSubmit: PropTypes.func.isRequired,
  resetForm: PropTypes.func.isRequired,
  submitting: PropTypes.bool
};

const propTypes = {
  description: PropTypes.string,
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

export class BackEnd extends Component {
  componentDidMount() {
    const {
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
  }

  componentDidUpdate(prevProps) {
    const {
      data: {
        challengeNode: { title: prevTitle }
      }
    } = prevProps;
    const {
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
    }
  }

  render() {
    const {
      data: {
        challengeNode: {
          fields: { blockName, slug },
          title,
          description,
          instructions
        }
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
      <LearnLayout>
        <Spacer />
        <div>
          <ChallengeTitle>{blockNameTitle}</ChallengeTitle>
          <ChallengeDescription
            description={description}
            instructions={instructions}
          />
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
        <CompletionModal />
        <HelpModal />
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
      guideUrl
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

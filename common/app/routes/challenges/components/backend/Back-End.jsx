import React, { PropTypes, PureComponent } from 'react';
import { createSelector } from 'reselect';
import { reduxForm } from 'redux-form';
import {
  Button,
  Col,
  Row
} from 'react-bootstrap';

import SolutionInput from '../Solution-Input.jsx';
import TestSuite from '../Test-Suite.jsx';
import Output from '../Output.jsx';
import { submitChallenge, executeChallenge } from '../../redux/actions.js';
import { challengeSelector } from '../../redux/selectors.js';
import { descriptionRegex } from '../../utils.js';
import {
  isValidURL,
  makeRequired,
  createFormValidator
} from '../../../../utils/form.js';

const propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.arrayOf(PropTypes.string),
  tests: PropTypes.array,
  output: PropTypes.string,
  executeChallenge: PropTypes.func.isRequired,
  submitChallenge: PropTypes.func.isRequired,
  // provided by redux form
  submitting: PropTypes.bool,
  fields: PropTypes.object,
  resetForm: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired
};

const fields = [ 'solution' ];

const fieldValidators = {
  solution: makeRequired(isValidURL)
};

const mapStateToProps = createSelector(
  challengeSelector,
  state => state.challengesApp.output,
  state => state.challengesApp.tests,
  (
    {
      challenge: {
        id,
        title,
        description
      } = {}
    },
    output,
    tests
  ) => ({
    id,
    title,
    tests,
    description,
    output
  })
);

const mapDispatchToActions = {
  executeChallenge,
  submitChallenge
};

export class BackEnd extends PureComponent {

  renderDescription(description) {
    if (!Array.isArray(description)) {
      return null;
    }
    return description.map((line, index) => {
      if (descriptionRegex.test(line)) {
        return (
          <div
            dangerouslySetInnerHTML={{ __html: line }}
            key={ line.slice(-6) + index }
          />
        );
      }
      return (
        <p
          className='wrappable'
          dangerouslySetInnerHTML= {{ __html: line }}
          key={ line.slice(-6) + index }
        />
      );
    });
  }

  render() {
    const {
      title,
      description,
      tests,
      output,
      // provided by redux-form
      fields: { solution },
      submitting,
      handleSubmit,
      executeChallenge
    } = this.props;

    const buttonCopy = submitting ?
      'Submit and go to my next challenge' :
      "I've completed this challenge";
    return (
      <div>
        <Col
          md={ 6 }
          mdOffset={ 3 }
          xs={ 12 }
          >
          <Row>
            <h3>{ title }</h3>
            { this.renderDescription(description) }
          </Row>
          <Row>
            <form
              name='BackEndChallenge'
              onSubmit={ handleSubmit(executeChallenge) }
              >
              <SolutionInput
                placeholder='https://your-app.com'
                solution={ solution }
              />
              <Button
                block={ true }
                bsStyle='primary'
                className='btn-big'
                onClick={ submitting ? null : null }
                type={ submitting ? null : 'submit' }
                >
                { buttonCopy } (ctrl + enter)
              </Button>
            </form>
          </Row>
          <Row>
            <Output
              defaultOutput={
`/**
  * Test output will go here
  */`
              }
              output={ output }
            />
          </Row>
          <Row>
            <TestSuite tests={ tests } />
          </Row>
        </Col>
      </div>
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

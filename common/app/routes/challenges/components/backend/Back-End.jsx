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
import { challengeSelector } from '../../redux/selectors';
import { descriptionRegex } from '../../utils';
import {
  isValidURL,
  makeRequired,
  createFormValidator
} from '../../../../utils/form';

const propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.arrayOf(PropTypes.string),
  tests: PropTypes.array,
  // provided by redux form
  isSubmitting: PropTypes.bool,
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
  (
    {
      challenge: {
        id,
        title,
        description,
        tests = []
      } = {}
    }
  ) => ({
    id,
    title,
    tests,
    description
  })
);

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
      // provided by redux-form
      fields: { solution },
      isSubmitting,
      handleSubmit,
      resetForm
    } = this.props;

    const buttonCopy = isSubmitting ?
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
              onSubmit={
                handleSubmit(() => {
                  // submitChallenge(values);
                  resetForm('BackEndChallenge');
                })
              }
              >
              <SolutionInput
                placeholder='https://your-app.com'
                solution={ solution }
              />
              <Button
                block={ true }
                bsStyle='primary'
                className='btn-big'
                onClick={ isSubmitting ? null : null }
                type={ isSubmitting ? 'submit' : null }
                >
                { buttonCopy } (ctrl + enter)
              </Button>
            </form>
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
  mapStateToProps
)(BackEnd);

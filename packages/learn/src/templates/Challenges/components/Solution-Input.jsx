import React from 'react';
import PropTypes from 'prop-types';
import { HelpBlock, FormGroup, FormControl } from 'react-bootstrap';
import { getValidationState, DOMOnlyProps } from '../../utils/form';

const propTypes = {
  placeholder: PropTypes.string,
  solution: PropTypes.object
};

export default function SolutionInput({ solution, placeholder }) {
  const validationState = getValidationState(solution);

  return (
    <FormGroup
      controlId='solution'
      validationState={
        (validationState && validationState.includes('warning')) ?
          'warning' :
          validationState
      }
      >
      <FormControl
        name='solution'
        placeholder={ placeholder }
        type='url'
        { ...DOMOnlyProps(solution) }
      />
      {
        validationState === 'error' &&
          <HelpBlock>Make sure you provide a proper URL.</HelpBlock>
      }
      {
        validationState === 'glitch-warning' &&
          <HelpBlock>
            Make sure you have entered a shareable URL
            (e.g. "https://green-camper.glitch.me", not
            "https://glitch.com/#!/edit/green-camper".)
          </HelpBlock>
      }
    </FormGroup>
  );
}

SolutionInput.displayName = 'SolutionInput';
SolutionInput.propTypes = propTypes;

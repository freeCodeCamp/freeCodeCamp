import React, { PropTypes } from 'react';
import { HelpBlock, FormGroup, FormControl } from 'react-bootstrap';
import { getValidationState, DOMOnlyProps } from '../../../utils/form';

export default function SolutionInput({ solution, placeholder }) {
  const validationState = getValidationState(solution);
  return (
    <FormGroup
      controlId='solution'
      validationState={ validationState }
      >
      <FormControl
        name='solution'
        placeholder={ placeholder }
        type='url'
        { ...DOMOnlyProps(solution) }
      />
      {
        validationState === 'error' ?
          <HelpBlock>Make sure you provide a proper URL.</HelpBlock> :
          null
      }
    </FormGroup>
  );
}

SolutionInput.propTypes = {
  solution: PropTypes.object,
  placeholder: PropTypes.string
};

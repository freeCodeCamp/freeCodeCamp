import React, { PropTypes } from 'react';
import { FormGroup, FormControl } from 'react-bootstrap';
import { getValidationState, DOMOnlyProps } from '../../../utils/form';

export default function SolutionInput({ solution, placeholder }) {
  return (
    <FormGroup
      controlId='solution'
      validationState={ getValidationState(solution) }
      >
      <FormControl
        name='solution'
        placeholder={ placeholder }
        type='url'
        { ...DOMOnlyProps(solution) }
      />
    </FormGroup>
  );
}

SolutionInput.propTypes = {
  solution: PropTypes.object,
  placeholder: PropTypes.string
};

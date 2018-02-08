import React from 'react';
import PropTypes from 'prop-types';
import { reduxForm } from 'redux-form';

import { FormFields, BlockSaveButton } from './';

const propTypes = {
  buttonText: PropTypes.string,
  enableSubmit: PropTypes.bool,
  errors: PropTypes.object,
  fields: PropTypes.objectOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      onChange: PropTypes.func.isRequired,
      value: PropTypes.string.isRequired
    })
  ),
  formFields: PropTypes.arrayOf(PropTypes.string).isRequired,
  handleSubmit: PropTypes.func,
  hideButton: PropTypes.bool,
  id: PropTypes.string.isRequired,
  initialValues: PropTypes.object,
  options: PropTypes.shape({
    ignored: PropTypes.arrayOf(PropTypes.string),
    required: PropTypes.arrayOf(PropTypes.string),
    types: PropTypes.objectOf(PropTypes.string)
  }),
  submit: PropTypes.func.isRequired
};

function DynamicForm({
  // redux-form
  errors,
  fields,
  handleSubmit,
  fields: { _meta: { allPristine }},

  // HOC
  buttonText,
  enableSubmit,
  hideButton,
  id,
  options,
  submit
}) {
  return (
    <form id={`dynamic-${id}`} onSubmit={ handleSubmit(submit) }>
      <FormFields
        errors={ errors }
        fields={ fields }
        options={ options }
      />
      {
        hideButton ?
          null :
        <BlockSaveButton
          disabled={
            allPristine && !enableSubmit ||
            (!!Object.keys(errors).filter(key => errors[key]).length)
          }
          >
          {
            buttonText ? buttonText : null
          }
        </BlockSaveButton>
      }
    </form>
  );
}

DynamicForm.displayName = 'DynamicForm';
DynamicForm.propTypes = propTypes;

const DynamicFormWithRedux = reduxForm()(DynamicForm);

export default function Form(props) {
  return (
    <DynamicFormWithRedux
      {...props}
      fields={ props.formFields }
      form={ props.id }
    />
  );
}

Form.propTypes = propTypes;

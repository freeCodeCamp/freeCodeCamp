import React from 'react';
import PropTypes from 'prop-types';
import { reduxForm } from 'redux-form';

import { FormFields, BlockSaveButton, BlockSaveWrapper } from './';

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

export function DynamicForm({
  // redux-form
  errors,
  fields,
  handleSubmit,
  fields: {
    _meta: { allPristine }
  },

  // HOC
  buttonText,
  enableSubmit,
  hideButton,
  id,
  options,
  submit
}) {
  return (
    <form
      id={`dynamic-${id}`}
      onSubmit={handleSubmit(submit)}
      style={{ width: '100%' }}
    >
      <FormFields
        errors={errors}
        fields={fields}
        formId={id}
        options={options}
      />
      <BlockSaveWrapper>
        {hideButton ? null : (
          <BlockSaveButton
            disabled={
              (allPristine && !enableSubmit) ||
              !!Object.keys(errors).filter(key => errors[key]).length
            }
          >
            {buttonText ? buttonText : null}
          </BlockSaveButton>
        )}
      </BlockSaveWrapper>
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
      fields={props.formFields}
      form={props.id}
    />
  );
}

Form.propTypes = propTypes;

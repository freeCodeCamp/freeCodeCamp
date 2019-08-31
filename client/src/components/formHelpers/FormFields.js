import React from 'react';
import { kebabCase, startCase } from 'lodash';
import PropTypes from 'prop-types';
import {
  Alert,
  Col,
  ControlLabel,
  FormControl,
  FormGroup,
  HelpBlock
} from '@freecodecamp/react-bootstrap';
import { Field } from 'react-final-form';

const propTypes = {
  fields: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  options: PropTypes.shape({
    ignored: PropTypes.arrayOf(PropTypes.string),
    placeholder: PropTypes.bool,
    required: PropTypes.arrayOf(PropTypes.string),
    types: PropTypes.objectOf(PropTypes.string)
  })
};

function FormFields(props) {
  const { fields, options = {} } = props;
  const {
    ignored = [],
    placeholder = true,
    required = [],
    types = {}
  } = options;
  return (
    <div>
      {fields
        .filter(field => !ignored.includes(field))
        .map(name => (
          <Field key={`${name}-field`} name={name}>
            {({ input: { value, onChange }, meta: { pristine, error } }) => {
              const key = kebabCase(name);
              const type = name in types ? types[name] : 'text';
              return (
                <Col key={key} xs={12}>
                  <FormGroup>
                    {type === 'hidden' ? null : (
                      <ControlLabel htmlFor={key}>
                        {startCase(name)}
                      </ControlLabel>
                    )}
                    <FormControl
                      componentClass={type === 'textarea' ? type : 'input'}
                      id={key}
                      name={name}
                      onChange={onChange}
                      placeholder={placeholder ? name : ''}
                      required={required.includes(name)}
                      rows={4}
                      type={type}
                      value={value}
                    />
                    {error && !pristine ? (
                      <HelpBlock>
                        <Alert bsStyle='danger'>{error}</Alert>
                      </HelpBlock>
                    ) : null}
                  </FormGroup>
                </Col>
              );
            }}
          </Field>
        ))}
    </div>
  );
}

FormFields.displayName = 'FormFields';
FormFields.propTypes = propTypes;

export default FormFields;

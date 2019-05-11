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

const propTypes = {
  errors: PropTypes.objectOf(PropTypes.string),
  fields: PropTypes.objectOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      onChange: PropTypes.func.isRequired,
      value: PropTypes.string.isRequired
    })
  ).isRequired,
  options: PropTypes.shape({
    errors: PropTypes.objectOf(
      PropTypes.oneOfType([PropTypes.string, PropTypes.instanceOf(null)])
    ),
    ignored: PropTypes.arrayOf(PropTypes.string),
    placeholder: PropTypes.bool,
    required: PropTypes.arrayOf(PropTypes.string),
    types: PropTypes.objectOf(PropTypes.string)
  })
};

function FormFields(props) {
  const { errors = {}, fields, options = {} } = props;
  const {
    ignored = [],
    placeholder = true,
    required = [],
    types = {}
  } = options;
  return (
    <div>
      {Object.keys(fields)
        .filter(field => !ignored.includes(field))
        .map(key => fields[key])
        .map(({ name, onChange, value, pristine }) => {
          const key = kebabCase(name);
          const type = name in types ? types[name] : 'text';
          return (
            <Col key={key} xs={12}>
              <FormGroup>
                {type === 'hidden' ? null : (
                  <ControlLabel htmlFor={key}>{startCase(name)}</ControlLabel>
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
                {name in errors && !pristine ? (
                  <HelpBlock>
                    <Alert bsStyle='danger'>{errors[name]}</Alert>
                  </HelpBlock>
                ) : null}
              </FormGroup>
            </Col>
          );
        })}
    </div>
  );
}

FormFields.displayName = 'FormFields';
FormFields.propTypes = propTypes;

export default FormFields;

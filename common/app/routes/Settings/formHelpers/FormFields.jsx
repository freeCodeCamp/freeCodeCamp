import React from 'react';
import _ from 'lodash';
import PropTypes from 'prop-types';
import {
  Alert,
  Col,
  ControlLabel,
  FormControl,
  HelpBlock,
  Row
} from 'react-bootstrap';

const propTypes = {
  errors: PropTypes.objectOf(PropTypes.string),
  fields: PropTypes.objectOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      onChange: PropTypes.func.isRequired,
      value: PropTypes.string.isRequired
    })
  ).isRequired,
<<<<<<< HEAD
  formId: PropTypes.string,
=======
  formId: PropTypes.string.isRequired,
>>>>>>> 699c7f3e21aa126be2322dfb212c189e2b70d13b
  options: PropTypes.shape({
    errors: PropTypes.objectOf(
      PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.instanceOf(null)
      ])
    ),
    ignored: PropTypes.arrayOf(PropTypes.string),
    placeholder: PropTypes.bool,
    required: PropTypes.arrayOf(PropTypes.string),
    types: PropTypes.objectOf(PropTypes.string)
  })
};

function FormFields(props) {
  const { errors = {}, fields, formId, options = {} } = props;
  const {
    ignored = [],
    placeholder = true,
    required = [],
    types = {}
  } = options;
  return (
    <div>
      {
        Object.keys(fields)
        .filter(field => !ignored.includes(field))
        .map(key => fields[key])
        .map(({ name, onChange, value, pristine }) => {
<<<<<<< HEAD
          const key = formId ?
            `${formId}_${_.kebabCase(name)}` :
            _.kebabCase(name);
=======
          const key = `${formId}_${_.kebabCase(name)}`;
>>>>>>> 699c7f3e21aa126be2322dfb212c189e2b70d13b
          const type = name in types ? types[name] : 'text';
          return (
          <Row className='inline-form-field' key={ key }>
            <Col sm={ 3 } xs={ 12 }>
            { type === 'hidden' ?
              null :
              <ControlLabel htmlFor={ key }>
                { _.startCase(name) }
              </ControlLabel>
            }
            </Col>
            <Col sm={ 9 } xs={ 12 }>
              <FormControl
                bsSize='lg'
                componentClass={ type === 'textarea' ? type : 'input' }
                id={ key }
                name={ name }
                onChange={ onChange }
                placeholder={ placeholder ? name : '' }
                required={ !!required[name] }
                rows={ 4 }
                type={ type }
                value={ value }
              />
              {
                name in errors && !pristine ?
                <HelpBlock>
                  <Alert bsStyle='danger'>
                    { errors[name] }
                  </Alert>
                </HelpBlock> :
                null
              }
            </Col>
          </Row>
        );
        })
      }
    </div>
  );
}

FormFields.displayName = 'FormFields';
FormFields.propTypes = propTypes;

export default FormFields;

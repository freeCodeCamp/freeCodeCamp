import React, { PropTypes } from 'react';
import { contain } from 'thundercats-react';
import {
  Col,
  Input,
  Row,
  Well
} from 'react-bootstrap';
import {
  isAscii,
  isEmail,
  isMobilePhone
} from 'validator';

const defaults = {
  'string': {
    value: '',
    valid: false,
    pristine: true
  }
};

function defaultValue(type) {
  return defaults[type];
}

export default contain({
    actions: 'jobActions',
    store: 'jobsStore',
    map({ form = {} }) {
      const {
        position = defaultValue('string'),
        locale = defaultValue('string'),
        description = defaultValue('string'),
        email = defaultValue('string'),
        phone = defaultValue('string')
      } = form;
      return {
        position,
        locale,
        description,
        email,
        phone
      };
    }
  },
  React.createClass({
    displayName: 'NewJob',

    propTypes: {
      jobActions: PropTypes.object,
      position: PropTypes.object,
      locale: PropTypes.object,
      description: PropTypes.object,
      email: PropTypes.object,
      phone: PropTypes.object
    },

    handleChange(name, validator, { target: { value } }) {
      const { jobActions: { handleForm } } = this.props;
      handleForm({ name, value, validator });
    },

    render() {
      const {
        position,
        locale,
        description,
        email,
        phone
      } = this.props;
      const labelClass = 'col-sm-offset-1 col-sm-2';
      const inputClass = 'col-sm-6';

      return (
        <div>
          <Row>
            <Col>
              <Well className='text-center'>
                <h1>Create Your Job Post</h1>
                <form className='form-horizontal'>
                  <Row>
                    <div className='spacer'>
                      <h2>Job Information</h2>
                    </div>
                    <Input
                      bsStyle={ position.bsStyle }
                      label='Position'
                      labelClassName={ labelClass }
                      onChange={ (e) => {
                        this.handleChange(
                          'position',
                          isAscii,
                          e
                        );
                      }}
                      placeholder='Position'
                      type='text'
                      value={ position.value }
                      wrapperClassName={ inputClass } />
                    <Input
                      bsStyle={ locale.bsStyle }
                      label='Location'
                      labelClassName={ labelClass }
                      onChange={ (e) => {
                        this.handleChange(
                          'locale',
                          isAscii,
                          e,
                        );
                      }}
                      placeholder='Location'
                      type='text'
                      value={ locale.value }
                      wrapperClassName={ inputClass } />
                    <Input
                      bsStyle={ description.bsStyle }
                      label='Description'
                      labelClassName={ labelClass }
                      onChange={ (e) => {
                        this.handleChange(
                          'description',
                          isAscii,
                          e
                        );
                      }}
                      placeholder='Description'
                      rows='10'
                      type='textarea'
                      value={ description.value }
                      wrapperClassName={ inputClass } />
                    <div className='divider'>
                      <h2>Company Information</h2>
                    </div>
                    <Input
                      bsStyle={ email.bsStyle }
                      label='Email'
                      labelClassName={ labelClass }
                      onChange={ (e) => {
                        this.handleChange(
                          'email',
                          isEmail,
                          e
                        );
                      }}
                      placeholder='Email'
                      type='email'
                      value={ email.value }
                      wrapperClassName={ inputClass } />
                    <Input
                      bsStyle={ phone.bsStyle }
                      label='Phone'
                      labelClassName={ labelClass }
                      onChange={ (e) => {
                        this.handleChange(
                          'phone',
                          (data) => isMobilePhone(data, 'en-US'),
                          e
                        );
                      }}
                      placeholder='555-123-1234'
                      type='tel'
                      value={ phone.value }
                      wrapperClassName={ inputClass } />
                  </Row>
                </form>
              </Well>
            </Col>
          </Row>
        </div>
      );
    }
  })
);

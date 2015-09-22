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
  isEmail
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
        email = defaultValue('string')
      } = form;
      return {
        position,
        locale,
        description,
        email
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
      email: PropTypes.object
    },

    render() {
      const {
        jobActions,
        position,
        locale,
        description,
        email
      } = this.props;

      return (
        <div>
          <Row>
            <Col>
              <Well className='text-center'>
                <h1>Create Your Job Post</h1>
                <form className='form-horizontal'>
                  <Input
                    bsStyle={ position.bsStyle }
                    label='Position'
                    labelClassName='col-xs-2'
                    onChange={ ({ target: { value } }) => {
                      jobActions.handleForm({
                        name: 'position',
                        value,
                        validator: isAscii
                      });
                    }}
                    placeholder='Position'
                    type='text'
                    value={ position.value }
                    wrapperClassName='col-xs-10' />
                  <Input
                    bsStyle={ locale.bsStyle }
                    label='Location'
                    labelClassName='col-xs-2'
                    onChange={ ({ target: { value } }) => {
                      jobActions.handleForm({
                        name: 'locale',
                        value,
                        validator: isAscii
                      });
                    }}
                    placeholder='Location'
                    type='text'
                    value={ locale.value }
                    wrapperClassName='col-xs-10' />
                  <Input
                    bsStyle={ description.bsStyle }
                    label='Description'
                    labelClassName='col-xs-2'
                    onChange={ ({ target: { value } }) => {
                      jobActions.handleForm({
                        name: 'description',
                        value,
                        validator: isAscii
                      });
                    }}
                    placeholder='Description'
                    rows='10'
                    type='textarea'
                    value={ description.value }
                    wrapperClassName='col-xs-10' />
                  <Input
                    bsStyle={ email.bsStyle }
                    label='Email'
                    labelClassName='col-xs-2'
                    onChange={ ({ target: { value } }) => {
                      jobActions.handleForm({
                        name: 'email',
                        value,
                        validator: isEmail
                      });
                    }}
                    placeholder='Email'
                    type='email'
                    value={ email.value }
                    wrapperClassName='col-xs-10' />
                </form>
              </Well>
            </Col>
          </Row>
        </div>
      );
    }
  })
);

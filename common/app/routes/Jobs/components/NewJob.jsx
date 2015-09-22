import React, { PropTypes } from 'react';
import { contain } from 'thundercats-react';
import {
  Col,
  Input,
  Row,
  Well
} from 'react-bootstrap';

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

function validateString(value) {
  if (!value && typeof value !== 'string') {
    return false;
  }
  return true;
}

export default contain({
    actions: 'jobActions',
    store: 'jobsStore',
    map({ form = {} }) {
      const {
        position = defaultValue('string'),
        locale = defaultValue('string'),
        description = defaultValue('string')
      } = form;
      return {
        position,
        locale,
        description
      };
    }
  },
  React.createClass({
    displayName: 'NewJob',

    propTypes: {
      jobActions: PropTypes.object,
      position: PropTypes.object,
      locale: PropTypes.object,
      description: PropTypes.object
    },

    render() {
      const {
        jobActions,
        position,
        locale,
        description
      } = this.props;

      return (
        <div>
          <Row>
            <Col>
              <Well className='text-center'>
                <h1>Create You Job Post</h1>
                <form className='form-horizontal'>
                  <Input
                    bsStyle={
                      !position.valid && !position.pristine ?
                        'error' :
                        null
                    }
                    label='Position'
                    labelClassName='col-xs-2'
                    onChange={ ({ target: { value } }) => {
                      jobActions.handleForm({
                        name: 'position',
                        value,
                        validator: validateString
                      });
                    }}
                    placeholder='Position'
                    type='text'
                    value={ position.value }
                    wrapperClassName='col-xs-10' />
                  <Input
                    bsStyle={
                      !locale.valid && !locale.pristine ?
                        'error' :
                        null
                    }
                    label='Location'
                    labelClassName='col-xs-2'
                    onChange={ ({ target: { value } }) => {
                      jobActions.handleForm({
                        name: 'locale',
                        value,
                        validator: validateString
                      });
                    }}
                    placeholder='Location'
                    type='text'
                    value={ locale.value }
                    wrapperClassName='col-xs-10' />
                  <Input
                    bsStyle={
                      !description.valid && !description.pristine ?
                        'error' :
                        null
                    }
                    label='Description'
                    labelClassName='col-xs-2'
                    onChange={ ({ target: { value } }) => {
                      jobActions.handleForm({
                        name: 'description',
                        value,
                        validator: validateString
                      });
                    }}
                    placeholder='Description'
                    rows='10'
                    type='textarea'
                    value={ description.value }
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

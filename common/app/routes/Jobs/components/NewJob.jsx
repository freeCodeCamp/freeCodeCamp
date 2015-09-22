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

function validatePosition(value) {
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
        location = defaultValue('string'),
        description = defaultValue('string')
      } = form;
      return {
        position,
        location,
        description
      };
    }
  },
  React.createClass({
    displayName: 'NewJob',

    propTypes: {
      jobActions: PropTypes.object,
      position: PropTypes.object,
      location: PropTypes.object,
      description: PropTypes.object
    },

    render() {
      const {
        jobActions,
        position
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
                        validator: validatePosition
                      });
                    }}
                    placeholder='Position'
                    type='text'
                    value={ position.value }
                    wrapperClassName='col-xs-10' />
                  <Input
                    label='Location'
                    labelClassName='col-xs-2'
                    placeholder='Location'
                    type='text'
                    wrapperClassName='col-xs-10' />
                  <Input
                    label='Description'
                    labelClassName='col-xs-2'
                    placeholder='Description'
                    type='textarea'
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

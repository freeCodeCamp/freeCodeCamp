import React, { PropTypes } from 'react';
import { contain } from 'thundercats-react';
import {
  Col,
  Input,
  Row,
  Well
} from 'react-bootstrap';

export default contain({
    actions: 'jobActions',
    store: 'jobsStore',
    map({ form = {} }) {
      return form;
    }
  },
  React.createClass({
    displayName: 'NewJob',
    propTypes: {
      jobActions: PropTypes.object
    },
    render() {
      return (
        <div>
          <Row>
            <Col>
              <Well className='text-center'>
                <h1>Create You Job Post</h1>
                <form className='form-horizontal'>
                  <Input
                    label='Position'
                    labelClassName='col-xs-2'
                    placeholder='Position'
                    type='text'
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

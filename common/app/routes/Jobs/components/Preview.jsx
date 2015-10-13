import React, { PropTypes } from 'react';
import { History } from 'react-router';
import { Well, Button, Row } from 'react-bootstrap';
import { contain } from 'thundercats-react';
import ShowJob from './ShowJob.jsx';

export default contain(
  {
    store: 'JobsStore',
    actions: 'JobActions',
    map({ form: job = {} }) {
      return { job };
    }
  },
  React.createClass({
    displayName: 'Preview',

    mixins: [History],

    propTypes: {
      job: PropTypes.object
    },

    render() {
      const { job } = this.props;
      const { history } = this;
      return (
        <div>
          <ShowJob job={ job } />
          <Row>
            <Well>
              <Button
                block={ true }
                className='signup-btn' >
                Looks great! Let's Check Out
              </Button>
              <Button
                block={ true }
                onClick={ () => history.goBack() } >
                Head back and make edits
              </Button>
            </Well>
          </Row>
        </div>
      );
    }
  })
);

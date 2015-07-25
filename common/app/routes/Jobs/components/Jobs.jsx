import React, { PropTypes } from 'react';
import { contain } from 'thundercats-react';
import { Grid, Row } from 'react-bootstrap';

export default contain(
  {
    store: 'jobsStore',
    fetchAction: 'jobActions.getJobs'
  },
  React.createClass({
    displayName: 'Jobs',
    propTypes: {
      jobs: PropTypes.array
    },

    render() {
      return (
        <Grid>
          <Row>
            foo
          </Row>
        </Grid>
      );
    }
  })
);

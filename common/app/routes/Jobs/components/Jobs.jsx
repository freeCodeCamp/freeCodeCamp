import React, { PropTypes } from 'react';
import { createContainer } from 'thundercats';
import { Grid, Row } from 'react-bootstrap';

@createContainer({
  store: 'JobsStore'
})
export default class extends React.Component {
  constructor(props) {
    super(props);
  }


  static displayName = 'Jobs'
  static propTypes = {
    jobs: PropTypes.array
  }

  render() {
    return (
      <Grid>
        <Row>
          foo
        </Row>
      </Grid>
    );
  }
}

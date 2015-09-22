import React, { PropTypes } from 'react';
import { History } from 'react-router';
import { Button, Modal } from 'react-bootstrap';

export default React.createClass({
  displayName: 'CreateJobsModal',

  propTypes: {
    onHide: PropTypes.func,
    showModal: PropTypes.bool
  },

  mixins: [History],

  goToNewJob(onHide) {
    onHide();
    this.history.pushState(null, '/jobs/new');
  },

  render() {
    const {
      showModal,
      onHide
    } = this.props;

    return (
      <Modal
        onHide={ onHide }
        show={ showModal }>
        <Modal.Body>
          <h4>Welcome to Free Code Camp's board</h4>
          <p>We post jobs specifically target to our junior developers.</p>
          <Button
            block={ true }
            className='signup-btn'
            onClick={ () => this.goToNewJob(onHide) }>
            Post a Job
          </Button>
        </Modal.Body>
      </Modal>
    );
  }
});

import React, { PropTypes } from 'react';
import { Button, Modal } from 'react-bootstrap';

export default React.createClass({
  displayName: 'CreateJobsModal',
  propTypes: {
    onHide: PropTypes.func,
    showModal: PropTypes.bool
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
            className='signup-btn'>
            Post a Job
          </Button>
        </Modal.Body>
      </Modal>
    );
  }
});

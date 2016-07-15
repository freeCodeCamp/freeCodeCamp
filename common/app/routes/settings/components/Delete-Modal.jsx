import React, { PropTypes } from 'react';
import { Modal, Button } from 'react-bootstrap';

export default function DeleteModal({ isOpen }) {
  return (
    <div>
      <Button
        block={ true }
        bsSize='lg'
        bsStyle='danger'
        className='btn-link-social'
        >
        Delete my Free Code Camp account
      </Button>
      <Modal
        backdrop={ true }
        show={ isOpen }
        >
        <Modal.Header>
          <h3>You don't really want to delete your account, do you?</h3>
        </Modal.Header>
        <Modal.Body>
          <p>
            This will really delete all your data, including
            all your progress and brownie points.
          </p>
          <p>
            We won't be able to recover any of it for you later,
            even if you change your mind.
          </p>
          <p>
            If there's something we could do better, send
            us an email instead and we'll do our best: &thinsp;
            <a href='mailto:team@freecodecamp.com'>
              team@freecodecamp.com
            </a>.
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button
            block={ true }
            bsStyle='success'
            >
            Nevermind, I don't want to delete all of my progress
          </Button>
          <div className='spacer' />
          <Button
            block={ true }
            bsStyle='danger'
            >
            I am 100% sure I want to delete my account and all of my progress
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

DeleteModal.propTypes = {
  isOpen: PropTypes.bool
};

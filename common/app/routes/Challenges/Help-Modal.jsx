import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Button, Modal } from 'react-bootstrap';

import ns from './ns.json';
import {
  createQuestion,
  openHelpChatRoom,
  closeHelpModal,
  helpModalSelector
} from './redux';
import { RSA } from '../../../utils/constantStrings.json';

const mapStateToProps = state => ({ isOpen: helpModalSelector(state) });
const mapDispatchToProps = { createQuestion, openHelpChatRoom, closeHelpModal };

const propTypes = {
  closeHelpModal: PropTypes.func,
  createQuestion: PropTypes.func,
  isOpen: PropTypes.bool,
  openHelpChatRoom: PropTypes.func
};

export class HelpModal extends PureComponent {
  render() {
    const {
      isOpen,
      closeHelpModal,
      openHelpChatRoom,
      createQuestion
    } = this.props;
    return (
      <Modal
        show={ isOpen }
        >
        <Modal.Header className={ `${ns}-list-header` }>
          Ask for help?
          <span
            className='close closing-x'
            onClick={ closeHelpModal }
            >
            ×
          </span>
        </Modal.Header>
        <Modal.Body className='text-center'>
          <h3>
          If you've already tried the&nbsp;Read-Search-Ask&nbsp;method,
          then you can ask for help on the freeCodeCamp forum.
          </h3>
          <Button
            block={ true }
            bsSize='lg'
            bsStyle='primary'
            href={ RSA }
            onClick={ closeHelpModal }
            target='_blank'
            >
            Learn about the Read-Search-Ask Methodology
          </Button>
          <Button
            block={ true }
            bsSize='lg'
            bsStyle='primary'
            onClick={ createQuestion }
            >
            Create a help post on the forum
          </Button>
          <Button
            block={ true }
            bsSize='lg'
            bsStyle='primary'
            onClick={ openHelpChatRoom }
            >
            Ask for help in the Gitter Chatroom
          </Button>
          <Button
            block={ true }
            bsSize='lg'
            bsStyle='primary'
            onClick={ closeHelpModal }
            >
            Cancel
          </Button>
        </Modal.Body>
      </Modal>
    );
  }
}

HelpModal.displayName = 'HelpModal';
HelpModal.propTypes = propTypes;

export default connect(mapStateToProps, mapDispatchToProps)(HelpModal);

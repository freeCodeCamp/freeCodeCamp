import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Button, Modal } from '@freecodecamp/react-bootstrap';

import { createQuestion, closeModal, isHelpModalOpenSelector } from '../redux';
import { executeGA } from '../../../redux';
import { forumLocation } from '../../../../config/env.json';

import './help-modal.css';

const mapStateToProps = state => ({ isOpen: isHelpModalOpenSelector(state) });
const mapDispatchToProps = dispatch =>
  bindActionCreators(
    { createQuestion, executeGA, closeHelpModal: () => closeModal('help') },
    dispatch
  );

const propTypes = {
  closeHelpModal: PropTypes.func.isRequired,
  createQuestion: PropTypes.func.isRequired,
  executeGA: PropTypes.func,
  isOpen: PropTypes.bool
};

const RSA = forumLocation + '/t/19514';

export class HelpModal extends Component {
  render() {
    const { isOpen, closeHelpModal, createQuestion, executeGA } = this.props;
    if (isOpen) {
      executeGA({ type: 'modal', data: '/help-modal' });
    }
    return (
      <Modal dialogClassName='help-modal' onHide={closeHelpModal} show={isOpen}>
        <Modal.Header
          className='help-modal-header fcc-modal'
          closeButton={true}
        >
          <Modal.Title className='text-center'>Ask for help?</Modal.Title>
        </Modal.Header>
        <Modal.Body className='help-modal-body text-center'>
          <h3>
            If you've already tried the&nbsp;
            <a
              href={RSA}
              rel='noopener noreferrer'
              target='_blank'
              title='Read, search, ask'
            >
              Read-Search-Ask
            </a>
            &nbsp; method, then you can ask for help on the freeCodeCamp forum.
          </h3>
          <Button
            block={true}
            bsSize='lg'
            bsStyle='primary'
            onClick={createQuestion}
          >
            Create a help post on the forum
          </Button>
          <Button
            block={true}
            bsSize='lg'
            bsStyle='primary'
            onClick={closeHelpModal}
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

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HelpModal);

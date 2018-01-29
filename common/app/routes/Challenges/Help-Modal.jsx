import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Button, Modal } from 'react-bootstrap';

import ns from './ns.json';
import {
  createQuestion,
  closeHelpModal,
  helpModalSelector
} from './redux';
import { RSA } from '../../../utils/constantStrings.json';

const mapStateToProps = state => ({ isOpen: helpModalSelector(state) });
const mapDispatchToProps = { createQuestion, closeHelpModal };

const propTypes = {
  closeHelpModal: PropTypes.func.isRequired,
  createQuestion: PropTypes.func.isRequired,
  isOpen: PropTypes.bool
};

export class HelpModal extends PureComponent {
  render() {
    const {
      isOpen,
      closeHelpModal,
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
          <h3 className={`${ns}-help-modal-heading`}>
            If you've already tried the&nbsp;
            <a href={ RSA } title='Read, search, ask'>Read-Search-Ask</a>&nbsp;
            method, then you can ask for help on the freeCodeCamp forum.
          </h3>
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

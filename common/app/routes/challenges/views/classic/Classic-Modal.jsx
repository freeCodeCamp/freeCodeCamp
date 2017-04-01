import React, { PropTypes } from 'react';
import { Button, Modal } from 'react-bootstrap';
import PureComponent from 'react-pure-render/component';
import FontAwesome from 'react-fontawesome';

import ns from './ns.json';

const propTypes = {
  close: PropTypes.func,
  open: PropTypes.bool.isRequired,
  submitChallenge: PropTypes.func.isRequired,
  successMessage: PropTypes.string.isRequired
};

export default class ClassicModal extends PureComponent {
  constructor(...props) {
    super(...props);
    this.handleKeyDown = this.handleKeyDown.bind(this);
  }

  handleKeyDown(e) {
    const { open, submitChallenge } = this.props;
    if (
      e.keyCode === 13 &&
      (e.ctrlKey || e.meta) &&
      open
    ) {
      e.preventDefault();
      submitChallenge();
    }
  }

  render() {
    const {
      close,
      open,
      submitChallenge,
      successMessage
    } = this.props;
    return (
      <Modal
        animation={ false }
        dialogClassName={ `${ns}-success-modal` }
        keyboard={ true }
        onHide={ close }
        onKeyDown={ this.handleKeyDown }
        show={ open }
        >
        <Modal.Header
          className={ `${ns}-list-header` }
          closeButton={ true }
          >
          <Modal.Title>{ successMessage }</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className='text-center'>
            <div className='row'>
              <div>
                <FontAwesome
                  className='completion-icon text-primary'
                  name='check-circle'
                />
              </div>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button
            block={ true }
            bsSize='large'
            bsStyle='primary'
            onClick={ submitChallenge }
            >
            Submit and go to next challenge (Ctrl + Enter)
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

ClassicModal.displayName = 'ClassicModal';
ClassicModal.propTypes = propTypes;

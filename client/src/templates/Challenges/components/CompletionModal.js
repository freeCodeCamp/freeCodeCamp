import React, { Component } from 'react';
import PropTypes from 'prop-types';
import noop from 'lodash/noop';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import { Button, Modal } from '@freecodecamp/react-bootstrap';

import ga from '../../../analytics';
import GreenPass from '../../../assets/icons/GreenPass';

import { dasherize } from '../../../../../utils/slugs';

import './completion-modal.css';

import {
  closeModal,
  submitChallenge,
  isCompletionModalOpenSelector,
  successMessageSelector,
  challengeFilesSelector,
  challengeMetaSelector
} from '../redux';

const mapStateToProps = createSelector(
  challengeFilesSelector,
  challengeMetaSelector,
  isCompletionModalOpenSelector,
  successMessageSelector,
  (files, { title }, isOpen, message) => ({
    files,
    title,
    isOpen,
    message
  })
);

const mapDispatchToProps = function(dispatch) {
  const dispatchers = {
    close: () => dispatch(closeModal('completion')),
    handleKeypress: e => {
      if (e.keyCode === 13 && (e.ctrlKey || e.metaKey)) {
        e.preventDefault();
        dispatch(submitChallenge());
      }
    },
    submitChallenge: () => {
      dispatch(submitChallenge());
    }
  };
  return () => dispatchers;
};

const propTypes = {
  close: PropTypes.func.isRequired,
  files: PropTypes.object.isRequired,
  handleKeypress: PropTypes.func.isRequired,
  isOpen: PropTypes.bool,
  message: PropTypes.string,
  submitChallenge: PropTypes.func.isRequired,
  title: PropTypes.string
};

export class CompletionModal extends Component {
  state = {
    downloadURL: null
  };

  static getDerivedStateFromProps(props, state) {
    const { files, isOpen } = props;
    if (!isOpen) {
      return null;
    }
    const { downloadURL } = state;
    if (downloadURL) {
      URL.revokeObjectURL(downloadURL);
    }
    let newURL = null;
    if (Object.keys(files).length) {
      const filesForDownload = Object.keys(files)
        .map(key => files[key])
        .reduce(
          (allFiles, { path, contents }) => ({
            ...allFiles,
            [path]: contents
          }),
          {}
        );
      const blob = new Blob([JSON.stringify(filesForDownload, null, 2)], {
        type: 'text/json'
      });
      newURL = URL.createObjectURL(blob);
    }
    return { downloadURL: newURL };
  }

  componentWillUnmount() {
    if (this.state.downloadURL) {
      URL.revokeObjectURL(this.state.downloadURL);
    }
  }

  render() {
    const {
      close,
      isOpen,
      submitChallenge,
      handleKeypress,
      message,
      title
    } = this.props;
    if (isOpen) {
      ga.modalview('/completion-modal');
    }
    const dashedName = dasherize(title);
    return (
      <Modal
        animation={false}
        bsSize='lg'
        dialogClassName='challenge-success-modal'
        keyboard={true}
        onHide={close}
        onKeyDown={isOpen ? handleKeypress : noop}
        show={isOpen}
      >
        <Modal.Header
          className='challenge-list-header fcc-modal'
          closeButton={true}
        >
          <Modal.Title className='text-center'>{message}</Modal.Title>
        </Modal.Header>
        <Modal.Body className='completion-modal-body'>
          <div className='success-icon-wrapper'>
            <GreenPass />
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button
            block={true}
            bsSize='large'
            bsStyle='primary'
            onClick={submitChallenge}
          >
            Submit and go to next challenge{' '}
            <span className='hidden-xs'>(Ctrl + Enter)</span>
          </Button>
          {this.state.downloadURL ? (
            <Button
              block={true}
              bsSize='lg'
              bsStyle='primary'
              className='btn-invert'
              download={`${dashedName}.json`}
              href={this.state.downloadURL}
            >
              Download my solution
            </Button>
          ) : null}
        </Modal.Footer>
      </Modal>
    );
  }
}

CompletionModal.displayName = 'CompletionModal';
CompletionModal.propTypes = propTypes;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CompletionModal);

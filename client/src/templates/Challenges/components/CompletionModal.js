import React, { Component } from 'react';
import PropTypes from 'prop-types';
import noop from 'lodash/noop';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import { Button, Modal } from '@freecodecamp/react-bootstrap';

import ga from '../../../analytics';
import GreenPass from './icons/GreenPass';

import { dasherize } from '../../../../utils';

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
  render() {
    const {
      close,
      isOpen,
      submitChallenge,
      handleKeypress,
      message,
      files = {},
      title
    } = this.props;
    if (isOpen) {
      ga.modalview('/completion-modal');
    }
    const showDownloadButton = Object.keys(files).length;
    const filesForDownload = Object.keys(files)
      .map(key => files[key])
      .reduce(
        (allFiles, { path, contents }) => ({
          ...allFiles,
          [path]: contents
        }),
        {}
      );
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
            Submit and go to next challenge (Ctrl + Enter)
          </Button>
          {showDownloadButton ? (
            <Button
              block={true}
              bsSize='lg'
              bsStyle='primary'
              className='btn-primary-invert'
              download={`${dashedName}.json`}
              href={`data:text/json;charset=utf-8,${encodeURIComponent(
                JSON.stringify(filesForDownload)
              )}`}
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

export default connect(mapStateToProps, mapDispatchToProps)(CompletionModal);

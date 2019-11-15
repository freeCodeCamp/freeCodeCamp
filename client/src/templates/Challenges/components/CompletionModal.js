import React, { Component } from 'react';
import PropTypes from 'prop-types';
import noop from 'lodash/noop';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import { Button, Modal } from '@freecodecamp/react-bootstrap';

import ga from '../../../analytics';
import Login from '../../../components/Header/components/Login';
import GreenPass from '../../../assets/icons/GreenPass';

import { dasherize } from '../../../../../utils/slugs';

import './completion-modal.css';

import {
  closeModal,
  submitChallenge,
  completedChallengesIds,
  isCompletionModalOpenSelector,
  successMessageSelector,
  challengeFilesSelector,
  challengeMetaSelector
} from '../redux';

import { isSignedInSelector } from '../../../redux';

const mapStateToProps = createSelector(
  challengeFilesSelector,
  challengeMetaSelector,
  completedChallengesIds,
  isCompletionModalOpenSelector,
  isSignedInSelector,
  successMessageSelector,
  (files, { title }, completedChallengesIds, isOpen, isSignedIn, message) => ({
    files,
    title,
    completedChallengesIds,
    isOpen,
    isSignedIn,
    message
  })
);

const mapDispatchToProps = function(dispatch) {
  const dispatchers = {
    close: () => dispatch(closeModal('completion')),
    handleKeypress: e => {
      if (e.keyCode === 13 && (e.ctrlKey || e.metaKey)) {
        e.preventDefault();
        // Since Hotkeys also listens to Ctrl + Enter we have to stop this event
        // getting to it.
        e.stopPropagation();
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
  allChallengeNodes: PropTypes.array.isRequired,
  blockName: PropTypes.string.isRequired,
  close: PropTypes.func.isRequired,
  completedChallengesIds: PropTypes.array.isRequired,
  files: PropTypes.object.isRequired,
  handleKeypress: PropTypes.func.isRequired,
  isOpen: PropTypes.bool,
  isSignedIn: PropTypes.bool.isRequired,
  message: PropTypes.string,
  submitChallenge: PropTypes.func.isRequired,
  title: PropTypes.string
};

function getCompletedPercent(
  allChallengeNodes,
  completedChallengesIds,
  blockName
) {
  const currentBlockNodes = allChallengeNodes.filter(
    node => node.fields.blockName === blockName
  );

  const currentBlockLength = currentBlockNodes.length;

  const completedChallengesInBlock =
    currentBlockNodes.filter(node => {
      return completedChallengesIds.includes(node.id);
    }).length + 1;

  const percentCompleted = Math.round(
    (completedChallengesInBlock / currentBlockLength) * 100
  );

  return percentCompleted > 100 ? 100 : percentCompleted;
}

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
        .reduce((allFiles, { path, contents }) => {
          const beforeText = `** start of ${path} **\n\n`;
          const afterText = `\n\n** end of ${path} **\n\n`;
          allFiles +=
            files.length > 1 ? beforeText + contents + afterText : contents;
          return allFiles;
        }, '');
      const blob = new Blob([filesForDownload], {
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
    this.props.close();
  }

  render() {
    console.log('CompletionProps');
    console.log(this.props);
    console.log('CompletionState');
    console.log(this.state);
    const {
      allChallengeNodes = [],
      blockName,
      close,
      completedChallengesIds,
      isOpen,
      isSignedIn,
      submitChallenge,
      handleKeypress,
      message,
      title
    } = this.props;

    const completedPercent = getCompletedPercent(
      allChallengeNodes,
      completedChallengesIds,
      blockName
    );

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
          <div className='completion-challenge-details'>
            <div className='completion-challenge-name'>{title}</div>
            <GreenPass className='completion-success-icon' />
          </div>
          <div className='completion-block-details'>
            <div className='completion-block-name'>{blockName}</div>
            <div className='progress-bar-wrap'>
              <div className='progress-bar-background'>
                {completedPercent}% complete
              </div>
              <div className='progress-bar-percent' style={{ width: '60%' }}>
                <div className='progress-bar-foreground'>
                  {completedPercent}% complete
                </div>
              </div>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button
            block={true}
            bsSize='large'
            bsStyle='primary'
            onClick={submitChallenge}
          >
            {isSignedIn ? 'Submit and g' : 'G'}o to next challenge{' '}
            <span className='hidden-xs'>(Ctrl + Enter)</span>
          </Button>
          {isSignedIn ? null : (
            <Login
              block={true}
              bsSize='lg'
              bsStyle='primary'
              className='btn-invert'
            >
              Sign in to save your progress
            </Login>
          )}
          {this.state.downloadURL ? (
            <Button
              block={true}
              bsSize='lg'
              bsStyle='primary'
              className='btn-invert'
              download={`${dashedName}.txt`}
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

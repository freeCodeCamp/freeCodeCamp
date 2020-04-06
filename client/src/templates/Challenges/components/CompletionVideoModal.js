import React, { Component } from 'react';
import PropTypes from 'prop-types';
import noop from 'lodash/noop';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import { Button, Modal } from '@freecodecamp/react-bootstrap';
import { useStaticQuery, graphql } from 'gatsby';
import SanitizedSpan from '../components/SanitizedSpan';

import Login from '../../../components/Header/components/Login';

import './completion-modal.css';

import {
  closeModal,
  submitChallenge,
  completedChallengesIds,
  isCompletionModalOpenSelector,
  challengeFilesSelector,
  challengeMetaSelector,
  lastBlockChalSubmitted
} from '../redux';

import { isSignedInSelector, executeGA } from '../../../redux';

const mapStateToProps = createSelector(
  challengeFilesSelector,
  challengeMetaSelector,
  completedChallengesIds,
  isCompletionModalOpenSelector,
  isSignedInSelector,
  (files, { title, id }, completedChallengesIds, isOpen, isSignedIn) => ({
    files,
    title,
    id,
    completedChallengesIds,
    isOpen,
    isSignedIn
  })
);

const mapDispatchToProps = function(dispatch) {
  const dispatchers = {
    close: () => dispatch(closeModal('completion')),
    submitChallenge: () => {
      dispatch(submitChallenge());
    },
    lastBlockChalSubmitted: () => {
      dispatch(lastBlockChalSubmitted());
    },
    executeGA
  };
  return () => dispatchers;
};

const propTypes = {
  answers: PropTypes.array,
  blockName: PropTypes.string,
  close: PropTypes.func.isRequired,
  completedChallengesIds: PropTypes.array,
  currentBlockIds: PropTypes.array,
  executeGA: PropTypes.func,
  files: PropTypes.object.isRequired,
  id: PropTypes.string,
  isOpen: PropTypes.bool,
  isSignedIn: PropTypes.bool.isRequired,
  lastBlockChalSubmitted: PropTypes.func,
  question: PropTypes.string,
  solution: PropTypes.number,
  submitChallenge: PropTypes.func.isRequired,
  title: PropTypes.string
};

export function getCompletedPercent(
  completedChallengesIds = [],
  currentBlockIds = [],
  currentChallengeId
) {
  completedChallengesIds = completedChallengesIds.includes(currentChallengeId)
    ? completedChallengesIds
    : [...completedChallengesIds, currentChallengeId];

  const completedChallengesInBlock = completedChallengesIds.filter(id => {
    return currentBlockIds.includes(id);
  });

  const completedPercent = Math.round(
    (completedChallengesInBlock.length / currentBlockIds.length) * 100
  );

  return completedPercent > 100 ? 100 : completedPercent;
}

export class CompletionModalInner extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleKeypress = this.handleKeypress.bind(this);
  }

  state = {
    downloadURL: null,
    completedPercent: 0,
    selectedOption: 0,
    answer: 1,
    showWrong: false
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

    const { completedChallengesIds, currentBlockIds, id, isSignedIn } = props;
    let completedPercent = isSignedIn
      ? getCompletedPercent(completedChallengesIds, currentBlockIds, id)
      : 0;
    return { downloadURL: newURL, completedPercent: completedPercent };
  }

  handleKeypress(e) {
    if (e.keyCode === 13 && (e.ctrlKey || e.metaKey)) {
      e.preventDefault();
      // Since Hotkeys also listens to Ctrl + Enter we have to stop this event
      // getting to it.
      e.stopPropagation();
      this.handleSubmit();
    }
  }

  handleSubmit() {
    if (this.props.solution - 1 === this.state.selectedOption) {
      this.setState({
        showWrong: false
      });
      this.props.submitChallenge();
      this.checkBlockCompletion();
    } else {
      this.setState({
        showWrong: true
      });
    }
  }

  // check block completion for donation
  checkBlockCompletion() {
    if (
      this.state.completedPercent === 100 &&
      !this.props.completedChallengesIds.includes(this.props.id)
    ) {
      this.props.lastBlockChalSubmitted();
    }
  }

  componentWillUnmount() {
    if (this.state.downloadURL) {
      URL.revokeObjectURL(this.state.downloadURL);
    }
    this.props.close();
  }

  handleOptionChange = changeEvent => {
    console.log(this.state.selectedOption);
    this.setState({
      selectedOption: parseInt(changeEvent.target.value, 10)
    });
  };

  render() {
    const { close, isOpen, isSignedIn, question, answers } = this.props;

    if (isOpen) {
      executeGA({ type: 'modal', data: '/completion-modal' });
    }

    return (
      <Modal
        animation={false}
        bsSize='lg'
        dialogClassName='challenge-success-modal'
        keyboard={true}
        onHide={close}
        onKeyDown={isOpen ? this.handleKeypress : noop}
        show={isOpen}
      >
        <Modal.Header
          className='challenge-list-header fcc-modal'
          closeButton={true}
        >
          <Modal.Title className='completion-message'>Video Quiz</Modal.Title>
        </Modal.Header>
        <Modal.Body className='question-modal-body'>
          <SanitizedSpan text={question} />
          <form>
            {answers.map((option, index) => (
              <div className='form-check'>
                <label>
                  <input
                    checked={this.state.selectedOption === index}
                    name='quiz'
                    onChange={this.handleOptionChange}
                    type='radio'
                    value={index}
                  />{' '}
                  <SanitizedSpan text={option} />
                </label>
              </div>
            ))}
          </form>
          <div
            style={{
              visibility: this.state.showWrong ? 'visible' : 'hidden'
            }}
          >
            Wrong. Try again.
          </div>
        </Modal.Body>
        <Modal.Footer>
          {isSignedIn ? null : (
            <Login
              block={true}
              bsSize='lg'
              bsStyle='primary'
              className='btn-cta'
            >
              Sign in to save your progress
            </Login>
          )}
          <Button
            block={true}
            bsSize='large'
            bsStyle='primary'
            onClick={this.handleSubmit}
          >
            Submit answer <span className='hidden-xs'>(Ctrl + Enter)</span>
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

CompletionModalInner.propTypes = propTypes;

const useCurrentBlockIds = blockName => {
  const {
    allChallengeNode: { edges }
  } = useStaticQuery(graphql`
    query getCurrentBlockNodesVid {
      allChallengeNode(sort: { fields: [superOrder, order, challengeOrder] }) {
        edges {
          node {
            fields {
              blockName
            }
            id
          }
        }
      }
    }
  `);

  const currentBlockIds = edges
    .filter(edge => edge.node.fields.blockName === blockName)
    .map(edge => edge.node.id);
  return currentBlockIds;
};

const CompletionModal = props => {
  const currentBlockIds = useCurrentBlockIds(props.blockName || '');
  return <CompletionModalInner currentBlockIds={currentBlockIds} {...props} />;
};

CompletionModal.displayName = 'CompletionModal';
CompletionModal.propTypes = propTypes;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CompletionModal);

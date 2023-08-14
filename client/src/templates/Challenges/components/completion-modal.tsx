/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/restrict-template-expressions */
import { Button, Modal } from '@freecodecamp/react-bootstrap';
import { noop } from 'lodash-es';
import React, { Component } from 'react';
import type { TFunction } from 'i18next';
import { withTranslation } from 'react-i18next';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';

import Login from '../../../components/Header/components/login';
import { executeGA } from '../../../redux/actions';
import {
  isSignedInSelector,
  allChallengesInfoSelector
} from '../../../redux/selectors';
import { AllChallengesInfo, ChallengeFiles } from '../../../redux/prop-types';
import { closeModal, submitChallenge } from '../redux/actions';
import {
  completedChallengesIdsSelector,
  isCompletionModalOpenSelector,
  successMessageSelector,
  challengeFilesSelector,
  challengeMetaSelector,
  isSubmittingSelector
} from '../redux/selectors';
import ProgressBar from '../../../components/ProgressBar';
import GreenPass from '../../../assets/icons/green-pass';

import './completion-modal.css';

const mapStateToProps = createSelector(
  challengeFilesSelector,
  challengeMetaSelector,
  completedChallengesIdsSelector,
  isCompletionModalOpenSelector,
  isSignedInSelector,
  allChallengesInfoSelector,
  successMessageSelector,
  isSubmittingSelector,
  (
    challengeFiles: ChallengeFiles,
    { dashedName }: { dashedName: string },
    completedChallengesIds: string[],
    isOpen: boolean,
    isSignedIn: boolean,
    allChallengesInfo: AllChallengesInfo,
    message: string,
    isSubmitting: boolean
  ) => ({
    challengeFiles,
    dashedName,
    completedChallengesIds,
    isOpen,
    isSignedIn,
    allChallengesInfo,
    message,
    isSubmitting
  })
);

const mapDispatchToProps = {
  close: () => closeModal('completion'),
  submitChallenge,
  executeGA
};

type StateProps = ReturnType<typeof mapStateToProps>;

interface CompletionModalsProps extends StateProps {
  close: () => void;
  executeGA: () => void;
  submitChallenge: () => void;
  t: TFunction;
}

interface CompletionModalState {
  downloadURL: null | string;
}

class CompletionModal extends Component<
  CompletionModalsProps,
  CompletionModalState
> {
  static displayName: string;
  constructor(props: CompletionModalsProps) {
    super(props);
    this.handleKeypress = this.handleKeypress.bind(this);
    this.state = {
      downloadURL: null
    };
  }

  static getDerivedStateFromProps(
    props: Readonly<CompletionModalsProps>,
    state: CompletionModalState
  ): CompletionModalState {
    const { challengeFiles, isOpen } = props;
    if (!isOpen) {
      return {
        downloadURL: null
      };
    }
    const { downloadURL } = state;
    if (downloadURL) {
      URL.revokeObjectURL(downloadURL);
    }
    let newURL = null;
    if (challengeFiles?.length) {
      const filesForDownload = challengeFiles
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        .reduce<string>((allFiles, currentFile: any) => {
          const beforeText = `** start of ${currentFile.path} **\n\n`;
          const afterText = `\n\n** end of ${currentFile.path} **\n\n`;
          allFiles +=
            challengeFiles.length > 1
              ? `${beforeText}${currentFile.contents}${afterText}`
              : currentFile.contents;
          return allFiles;
        }, '');
      const blob = new Blob([filesForDownload], {
        type: 'text/json'
      });
      newURL = URL.createObjectURL(blob);
    }
    return {
      downloadURL: newURL
    };
  }

  handleKeypress(e: React.KeyboardEvent): void {
    if (e.key === 'Enter' && (e.ctrlKey || e.metaKey)) {
      e.preventDefault();
      // Since Hotkeys also listens to Ctrl + Enter we have to stop this event
      // getting to it.
      e.stopPropagation();
      this.props.submitChallenge();
    }
  }

  componentWillUnmount(): void {
    if (this.state.downloadURL) {
      URL.revokeObjectURL(this.state.downloadURL);
    }
    this.props.close();
  }

  render(): JSX.Element {
    const {
      close,
      isOpen,
      isSignedIn,
      isSubmitting,
      message,
      t,
      dashedName,
      submitChallenge
    } = this.props;

    if (isOpen) {
      executeGA({ event: 'pageview', pagePath: '/completion-modal' });
    }

    return (
      <Modal
        data-cy='completion-modal'
        animation={false}
        bsSize='lg'
        dialogClassName='challenge-success-modal'
        keyboard={true}
        onHide={close}
        // eslint-disable-next-line @typescript-eslint/unbound-method
        onKeyDown={isOpen ? this.handleKeypress : noop}
        show={isOpen}
      >
        <Modal.Header
          className='challenge-list-header fcc-modal'
          closeButton={true}
        >
          <Modal.Title className='completion-message'>{message}</Modal.Title>
        </Modal.Header>
        <Modal.Body className='completion-modal-body'>
          <div className='completion-challenge-details'>
            <GreenPass
              className='completion-success-icon'
              data-testid='fcc-completion-success-icon'
            />
          </div>
          <div className='completion-block-details'>
            <ProgressBar />
          </div>
        </Modal.Body>
        <Modal.Footer>
          {isSignedIn ? null : (
            <Login block={true}>{t('learn.sign-in-save')}</Login>
          )}
          <Button
            block={true}
            bsSize='large'
            bsStyle='primary'
            disabled={isSubmitting}
            data-cy='submit-challenge'
            onClick={() => submitChallenge()}
          >
            {isSignedIn ? t('buttons.submit-and-go') : t('buttons.go-to-next')}
            <span className='hidden-xs'> (Ctrl + Enter)</span>
          </Button>
          {this.state.downloadURL ? (
            <Button
              block={true}
              bsSize='lg'
              bsStyle='primary'
              className='btn-invert'
              download={`${dashedName}.txt`}
              href={this.state.downloadURL}
            >
              {t('learn.download-solution')}
            </Button>
          ) : null}
        </Modal.Footer>
      </Modal>
    );
  }
}

CompletionModal.displayName = 'CompletionModal';

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withTranslation()(CompletionModal));

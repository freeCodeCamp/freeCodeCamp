/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/restrict-template-expressions */
import React, { Component } from 'react';
import type { TFunction } from 'i18next';
import { withTranslation } from 'react-i18next';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import { Button, Modal } from '@freecodecamp/ui';

import Login from '../../../components/Header/components/login';
import { isSignedInSelector } from '../../../redux/selectors';
import { ChallengeFiles } from '../../../redux/prop-types';
import { closeModal, submitChallenge } from '../redux/actions';
import {
  completedChallengesIdsSelector,
  isCompletionModalOpenSelector,
  successMessageSelector,
  challengeFilesSelector,
  challengeMetaSelector,
  isSubmittingSelector
} from '../redux/selectors';
import Progress from '../../../components/Progress';
import GreenPass from '../../../assets/icons/green-pass';
import { Spacer } from '../../../components/helpers';
import { MAX_MOBILE_WIDTH } from '../../../../config/misc';
import './completion-modal.css';
import callGA from '../../../analytics/call-ga';

const mapStateToProps = createSelector(
  challengeFilesSelector,
  challengeMetaSelector,
  completedChallengesIdsSelector,
  isCompletionModalOpenSelector,
  isSignedInSelector,
  successMessageSelector,
  isSubmittingSelector,
  (
    challengeFiles: ChallengeFiles,
    { dashedName, id }: { dashedName: string; id: string },
    completedChallengesIds: string[],
    isOpen: boolean,
    isSignedIn: boolean,
    message: string,
    isSubmitting: boolean
  ) => ({
    challengeFiles,
    id,
    dashedName,
    completedChallengesIds,
    isOpen,
    isSignedIn,
    message,
    isSubmitting
  })
);

const mapDispatchToProps = {
  close: () => closeModal('completion'),
  submitChallenge
};

type StateProps = ReturnType<typeof mapStateToProps>;

interface CompletionModalsProps extends StateProps {
  close: () => void;
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
    if (e.key === 'Escape') {
      e.stopPropagation();
      this.props.close();
    }
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

  componentDidUpdate(prevProps: CompletionModalsProps): void {
    const { isOpen: prevIsOpen } = prevProps;
    const { isOpen } = this.props;
    if (!prevIsOpen && isOpen) {
      callGA({ event: 'pageview', pagePath: '/completion-modal' });
    }
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

    const isMacOS = navigator.userAgent.includes('Mac OS');

    const isDesktop = window.innerWidth > MAX_MOBILE_WIDTH;

    let buttonText;
    if (isDesktop) {
      if (isMacOS) {
        buttonText = isSignedIn
          ? t('buttons.submit-and-go-cmd')
          : t('buttons.go-to-next-cmd');
      } else {
        buttonText = isSignedIn
          ? t('buttons.submit-and-go-ctrl')
          : t('buttons.go-to-next-ctrl');
      }
    } else {
      buttonText = isSignedIn
        ? t('buttons.submit-and-go')
        : t('buttons.go-to-next');
    }

    return (
      <Modal
        onClose={close}
        open={!!isOpen}
        size='large'
        // eslint-disable-next-line @typescript-eslint/unbound-method
        onKeyDown={isOpen ? this.handleKeypress : undefined}
      >
        <Modal.Header closeButtonClassNames='close'>{message}</Modal.Header>
        <Modal.Body className='completion-modal-body'>
          <GreenPass
            className='completion-success-icon'
            data-testid='fcc-completion-success-icon'
            data-playwright-test-label='completion-success-icon'
          />
          <div className='completion-block-details'>
            <Progress />
          </div>
        </Modal.Body>
        <Modal.Footer>
          {isSignedIn ? null : (
            <div className='completion-modal-login-btn'>
              <Login block={true}>{t('learn.sign-in-save')}</Login>
              <Spacer size='xxSmall' />
            </div>
          )}
          <Button
            block={true}
            size='large'
            variant='primary'
            disabled={isSubmitting}
            onClick={() => submitChallenge()}
          >
            {buttonText}
          </Button>
          <Spacer size='xxSmall' />
          {this.state.downloadURL ? (
            <Button
              block={true}
              size='large'
              variant='primary'
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

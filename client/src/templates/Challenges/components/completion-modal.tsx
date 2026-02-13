import React, { useMemo, useEffect, useCallback } from 'react';
import type { TFunction } from 'i18next';
import { withTranslation } from 'react-i18next';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import { Button, Modal, Spacer } from '@freecodecamp/ui';

import Login from '../../../components/Header/components/login';
import {
  isSignedInSelector,
  completedChallengesIdsSelector
} from '../../../redux/selectors';
import { ChallengeFiles } from '../../../redux/prop-types';
import { closeModal, submitChallenge } from '../redux/actions';
import {
  isCompletionModalOpenSelector,
  successMessageSelector,
  challengeFilesSelector,
  challengeMetaSelector,
  isSubmittingSelector
} from '../redux/selectors';
import Progress from '../../../components/Progress';
import GreenPass from '../../../assets/icons/green-pass';
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

interface CompletionModalProps extends StateProps {
  close: () => void;
  submitChallenge: () => void;
  t: TFunction;
}

interface DownloadableChallengeFile {
  name: string;
  ext: string;
  contents: string;
}

function CompletionModal({
  challengeFiles,
  close,
  dashedName,
  isOpen,
  isSignedIn,
  isSubmitting,
  message,
  submitChallenge,
  t
}: CompletionModalProps): JSX.Element {
  const downloadURL = useMemo(() => {
    if (!isOpen || !challengeFiles?.length) return null;
    const allFileContents = combineFileData(challengeFiles);
    const blob = new Blob([allFileContents], { type: 'text/json' });
    return URL.createObjectURL(blob);
  }, [isOpen, challengeFiles]);

  useEffect(() => {
    return () => {
      if (downloadURL) {
        URL.revokeObjectURL(downloadURL);
      }
    };
  }, [downloadURL]);

  useEffect(() => {
    return () => {
      close();
    };
  }, [close]);

  useEffect(() => {
    if (isOpen) {
      callGA({ event: 'pageview', pagePath: '/completion-modal' });
    }
  }, [isOpen]);

  const handleKeypress = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.stopPropagation();
        close();
      }
      if (e.key === 'Enter' && (e.ctrlKey || e.metaKey)) {
        e.preventDefault();
        // Since Hotkeys also listens to Ctrl + Enter we have to stop this event
        // getting to it.
        e.stopPropagation();
        submitChallenge();
      }
    },
    [close, submitChallenge]
  );

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
      onKeyDown={isOpen ? handleKeypress : undefined}
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
            <Spacer size='xxs' />
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
        <Spacer size='xxs' />
        {downloadURL ? (
          <Button
            block={true}
            size='large'
            variant='primary'
            download={`${dashedName}.txt`}
            href={downloadURL}
          >
            {t('learn.download-solution')}
          </Button>
        ) : null}
      </Modal.Footer>
    </Modal>
  );
}

CompletionModal.displayName = 'CompletionModal';

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withTranslation()(CompletionModal));

export function combineFileData(challengeFiles: DownloadableChallengeFile[]) {
  return challengeFiles.reduce<string>(function (
    allFiles: string,
    currentFile: DownloadableChallengeFile
  ) {
    const beforeText = `** start of ${currentFile.name + '.' + currentFile.ext} **\n\n`;
    const afterText = `\n\n** end of ${currentFile.name + '.' + currentFile.ext} **\n\n`;
    allFiles +=
      challengeFiles.length > 0
        ? `${beforeText}${currentFile.contents}${afterText}`
        : currentFile.contents;
    return allFiles;
  }, '');
}

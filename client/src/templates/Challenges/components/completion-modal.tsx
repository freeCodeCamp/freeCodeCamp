import React, { useEffect, useCallback, useState } from 'react';
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
import { closeModal } from '../redux/actions';
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
import { useSubmit } from '../utils/fetch-all-curriculum-data';

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
    {
      dashedName,
      id
    }: {
      dashedName: string;
      id: string;
    },
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
  close: () => closeModal('completion')
};

type StateProps = ReturnType<typeof mapStateToProps>;

interface CompletionModalProps extends StateProps {
  close: () => void;
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
  t
}: CompletionModalProps): JSX.Element {
  const [downloadURL, setDownloadURL] = useState<string>();
  const submitChallenge = useSubmit();
  // We can't useMemo here, because it does not guarantee that the URL object
  // will be revoked when the dependencies change.
  useEffect(() => {
    // downloadURL is not in the dependency array because it should only change
    // if the challengeFiles change. It is in the useEffect so that we cannot
    // leak URL objects.
    if (downloadURL) URL.revokeObjectURL(downloadURL);
    if (challengeFiles?.length) {
      const blob = createZipBlob(challengeFiles);
      setDownloadURL(URL.createObjectURL(blob));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [challengeFiles]);

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
            download={`${dashedName}.zip`}
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

function crc32(data: Uint8Array): number {
  let crc = 0xffffffff;
  for (let i = 0; i < data.length; i++) {
    crc ^= data[i];
    for (let j = 0; j < 8; j++) {
      crc = crc & 1 ? (crc >>> 1) ^ 0xedb88320 : crc >>> 1;
    }
  }
  return (crc ^ 0xffffffff) >>> 0;
}

export function createZipBlob(
  challengeFiles: DownloadableChallengeFile[]
): Blob {
  const encoder = new TextEncoder();
  const files = challengeFiles.map(file => ({
    name: `${file.name}.${file.ext}`,
    data: encoder.encode(file.contents)
  }));

  const parts: Uint8Array[] = [];
  const centralDir: Uint8Array[] = [];
  let offset = 0;

  for (const file of files) {
    const nameBytes = encoder.encode(file.name);
    const crc = crc32(file.data);

    // Local file header
    const localHeader = new ArrayBuffer(30 + nameBytes.length);
    const lhView = new DataView(localHeader);
    lhView.setUint32(0, 0x04034b50, true); // signature
    lhView.setUint16(4, 20, true); // version needed
    lhView.setUint16(6, 0, true); // flags
    lhView.setUint16(8, 0, true); // compression (store)
    lhView.setUint16(10, 0, true); // mod time
    lhView.setUint16(12, 0, true); // mod date
    lhView.setUint32(14, crc, true); // crc32
    lhView.setUint32(18, file.data.length, true); // compressed size
    lhView.setUint32(22, file.data.length, true); // uncompressed size
    lhView.setUint16(26, nameBytes.length, true); // name length
    lhView.setUint16(28, 0, true); // extra length
    new Uint8Array(localHeader).set(nameBytes, 30);

    parts.push(new Uint8Array(localHeader));
    parts.push(file.data);

    // Central directory entry
    const cdEntry = new ArrayBuffer(46 + nameBytes.length);
    const cdView = new DataView(cdEntry);
    cdView.setUint32(0, 0x02014b50, true); // signature
    cdView.setUint16(4, 20, true); // version made by
    cdView.setUint16(6, 20, true); // version needed
    cdView.setUint16(8, 0, true); // flags
    cdView.setUint16(10, 0, true); // compression
    cdView.setUint16(12, 0, true); // mod time
    cdView.setUint16(14, 0, true); // mod date
    cdView.setUint32(16, crc, true); // crc32
    cdView.setUint32(20, file.data.length, true); // compressed size
    cdView.setUint32(24, file.data.length, true); // uncompressed size
    cdView.setUint16(28, nameBytes.length, true); // name length
    cdView.setUint16(30, 0, true); // extra length
    cdView.setUint16(32, 0, true); // comment length
    cdView.setUint16(34, 0, true); // disk number
    cdView.setUint16(36, 0, true); // internal attrs
    cdView.setUint32(38, 0, true); // external attrs
    cdView.setUint32(42, offset, true); // local header offset
    new Uint8Array(cdEntry).set(nameBytes, 46);

    centralDir.push(new Uint8Array(cdEntry));
    offset += 30 + nameBytes.length + file.data.length;
  }

  const centralDirOffset = offset;
  let centralDirSize = 0;
  for (const entry of centralDir) {
    parts.push(entry);
    centralDirSize += entry.length;
  }

  // End of central directory
  const eocd = new ArrayBuffer(22);
  const eocdView = new DataView(eocd);
  eocdView.setUint32(0, 0x06054b50, true); // signature
  eocdView.setUint16(4, 0, true); // disk number
  eocdView.setUint16(6, 0, true); // central dir disk
  eocdView.setUint16(8, files.length, true); // entries on disk
  eocdView.setUint16(10, files.length, true); // total entries
  eocdView.setUint32(12, centralDirSize, true); // central dir size
  eocdView.setUint32(16, centralDirOffset, true); // central dir offset
  eocdView.setUint16(20, 0, true); // comment length
  parts.push(new Uint8Array(eocd));

  return new Blob(parts, { type: 'application/zip' });
}

// Keep for backward compatibility in tests
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

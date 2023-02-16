/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/restrict-template-expressions */
import { Button, Modal } from '@freecodecamp/react-bootstrap';
import { noop } from 'lodash-es';
import React, { Component } from 'react';
import { TFunction, withTranslation } from 'react-i18next';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { createSelector } from 'reselect';

import { dasherize } from '../../../../../utils/slugs';
import { isFinalProject } from '../../../../utils/challenge-types';
import Login from '../../../components/Header/components/Login';
import { executeGA, allowBlockDonationRequests } from '../../../redux/actions';
import {
  isSignedInSelector,
  allChallengesInfoSelector
} from '../../../redux/selectors';
import { AllChallengesInfo, ChallengeFiles } from '../../../redux/prop-types';

import { closeModal, submitChallenge } from '../redux/actions';
import {
  completedChallengesIds,
  isCompletionModalOpenSelector,
  successMessageSelector,
  challengeFilesSelector,
  challengeMetaSelector
} from '../redux/selectors';
import CompletionModalBody from './completion-modal-body';

import './completion-modal.css';

const mapStateToProps = createSelector(
  challengeFilesSelector,
  challengeMetaSelector,
  completedChallengesIds,
  isCompletionModalOpenSelector,
  isSignedInSelector,
  allChallengesInfoSelector,
  successMessageSelector,
  (
    challengeFiles: ChallengeFiles,
    {
      title,
      id,
      challengeType
    }: { title: string; id: string; challengeType: number },
    completedChallengesIds: string[],
    isOpen: boolean,
    isSignedIn: boolean,
    allChallengesInfo: AllChallengesInfo,
    message: string
  ) => ({
    challengeFiles,
    title,
    id,
    challengeType,
    completedChallengesIds,
    isOpen,
    isSignedIn,
    allChallengesInfo,
    message
  })
);

const mapDispatchToProps = function (dispatch: Dispatch) {
  const dispatchers = {
    close: () => dispatch(closeModal('completion')),
    submitChallenge: () => {
      dispatch(submitChallenge());
    },
    allowBlockDonationRequests: (block: string) => {
      dispatch(allowBlockDonationRequests(block));
    },
    executeGA
  };
  return () => dispatchers;
};

export function getCompletedPercent(
  completedChallengesIds: string[] = [],
  currentBlockIds: string[] = [],
  currentChallengeId: string
): number {
  const completedChallengesInBlock = getCompletedChallengesInBlock(
    completedChallengesIds,
    currentBlockIds,
    currentChallengeId
  );
  const completedPercent = Math.round(
    (completedChallengesInBlock / currentBlockIds.length) * 100
  );

  return completedPercent > 100 ? 100 : completedPercent;
}

function getCompletedChallengesInBlock(
  completedChallengesIds: string[],
  currentBlockChallengeIds: string[],
  currentChallengeId: string
) {
  const oldCompletionCount = completedChallengesIds.filter(challengeId =>
    currentBlockChallengeIds.includes(challengeId)
  ).length;

  const isAlreadyCompleted =
    completedChallengesIds.includes(currentChallengeId);

  return isAlreadyCompleted ? oldCompletionCount : oldCompletionCount + 1;
}

interface CompletionModalsProps {
  allowBlockDonationRequests: (arg0: string) => void;
  block: string;
  blockName: string;
  certification: string;
  challengeType: number;
  close: () => void;
  completedChallengesIds: string[];
  currentBlockIds?: string[];
  executeGA: () => void;
  challengeFiles: ChallengeFiles;
  id: string;
  isOpen: boolean;
  isSignedIn: boolean;
  allChallengesInfo: AllChallengesInfo;
  message: string;
  submitChallenge: () => void;
  superBlock: string;
  t: TFunction;
  title: string;
}

interface CompletionModalInnerState {
  downloadURL: null | string;
  completedPercent: number;
  completedChallengesInBlock: number;
}

class CompletionModalInner extends Component<
  CompletionModalsProps,
  CompletionModalInnerState
> {
  constructor(props: CompletionModalsProps) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleKeypress = this.handleKeypress.bind(this);

    this.state = {
      downloadURL: null,
      completedPercent: 0,
      completedChallengesInBlock: 0
    };
  }

  static getDerivedStateFromProps(
    props: CompletionModalsProps,
    state: CompletionModalInnerState
  ): CompletionModalInnerState {
    const { challengeFiles, isOpen } = props;
    if (!isOpen) {
      return {
        downloadURL: null,
        completedPercent: 0,
        completedChallengesInBlock: 0
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

    const { completedChallengesIds, currentBlockIds, id, isSignedIn } = props;
    const completedPercent = isSignedIn
      ? getCompletedPercent(completedChallengesIds, currentBlockIds, id)
      : 0;

    let completedChallengesInBlock = 0;
    if (currentBlockIds) {
      completedChallengesInBlock = getCompletedChallengesInBlock(
        completedChallengesIds,
        currentBlockIds,
        id
      );
    }

    return {
      downloadURL: newURL,
      completedPercent,
      completedChallengesInBlock
    };
  }

  handleKeypress(e: React.KeyboardEvent): void {
    if (e.key === 'Enter' && (e.ctrlKey || e.metaKey)) {
      e.preventDefault();
      // Since Hotkeys also listens to Ctrl + Enter we have to stop this event
      // getting to it.
      e.stopPropagation();
      this.handleSubmit();
    }
  }

  handleSubmit(): void {
    this.props.submitChallenge();
    this.checkBlockCompletion();
  }

  // check block completion for donation
  checkBlockCompletion(): void {
    if (
      this.state.completedPercent === 100 &&
      !this.props.completedChallengesIds.includes(this.props.id)
    ) {
      this.props.allowBlockDonationRequests(this.props.blockName);
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
      block,
      close,
      currentBlockIds,
      id,
      isOpen,
      isSignedIn,
      message,
      superBlock = '',
      t,
      title
    } = this.props;

    const { completedPercent, completedChallengesInBlock } = this.state;

    const totalChallengesInBlock = currentBlockIds?.length ?? 0;

    if (isOpen) {
      executeGA({ event: 'pageview', pagePath: '/completion-modal' });
    }
    // normally dashedName should be graphQL queried and then passed around,
    // but it's only used to make a nice filename for downloading, so dasherize
    // is fine here.
    const dashedName = dasherize(title);
    return (
      <Modal
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
          <CompletionModalBody
            {...{
              block,
              completedPercent,
              completedChallengesInBlock,
              currentChallengeId: id,
              superBlock,
              totalChallengesInBlock
            }}
          />
        </Modal.Body>
        <Modal.Footer>
          {isSignedIn ? null : (
            <Login block={true}>{t('learn.sign-in-save')}</Login>
          )}
          <Button
            block={true}
            bsSize='large'
            bsStyle='primary'
            onClick={() => this.handleSubmit()}
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

interface Options {
  isFinalProjectBlock: boolean;
}

const useCurrentBlockIds = (
  allChallengesInfo: AllChallengesInfo,
  block: string,
  certification: string,
  options?: Options
) => {
  const { challengeEdges, certificateNodes } = allChallengesInfo;
  const currentCertificateIds = certificateNodes
    .filter(
      node => dasherize(node.challenge.certification) === certification
    )[0]
    ?.challenge.tests.map(test => test.id);
  const currentBlockIds = challengeEdges
    .filter(edge => edge.node.challenge.block === block)
    .map(edge => edge.node.challenge.id);

  return options?.isFinalProjectBlock ? currentCertificateIds : currentBlockIds;
};

const CompletionModal = (props: CompletionModalsProps) => {
  const currentBlockIds = useCurrentBlockIds(
    props.allChallengesInfo,
    props.block || '',
    props.certification || '',
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call
    { isFinalProjectBlock: isFinalProject(props.challengeType) }
  );
  return <CompletionModalInner currentBlockIds={currentBlockIds} {...props} />;
};

CompletionModal.displayName = 'CompletionModal';

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withTranslation()(CompletionModal));

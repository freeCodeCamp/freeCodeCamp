import React from 'react';
import { Trans, useTranslation } from 'react-i18next';
import { connect } from 'react-redux';
import { Dispatch, bindActionCreators } from 'redux';
import { Button, Modal, Spacer } from '@freecodecamp/ui';
import url from 'url';
import path from 'path';

import envData from '../../../../config/env.json';
import { createQuestion, closeModal } from '../redux/actions';
import { isSourceModalOpenSelector } from '../redux/selectors';

import './source-modal.css';
import callGA from '../../../analytics/call-ga';

interface SourceModalProps {
  closeSourceModal: () => void;
  createQuestion: (description: string) => void;
  isOpen?: boolean;
  challengeBlock: string;
  superBlock: string;
  challengeId: string;
}

const { curriculumLocale, githubLocation } = envData;

const mapStateToProps = (state: unknown) => ({
  isOpen: isSourceModalOpenSelector(state) as boolean
});
const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(
    { createQuestion, closeSourceModal: () => closeModal('source') },
    dispatch
  );

export const generateGithubLink = (challengeId: string, block: string) => {
  let repository = 'freeCodeCamp';
  const challengesFolder = path.join(
    'blob',
    'main',
    'curriculum',
    'challenges'
  );
  const blocksFolder = 'blocks';
  if (curriculumLocale != 'english') {
    repository = 'i18n-curriculum';
  }

  const githubPath = path.join(
    githubLocation,
    repository,
    challengesFolder,
    curriculumLocale,
    blocksFolder,
    block,
    challengeId + '.md'
  );
  return githubPath;
};

function SourceModal({
  closeSourceModal,
  isOpen,
  challengeBlock,
  challengeId
}: SourceModalProps): JSX.Element {
  const { t } = useTranslation();

  const openChallengeSource = () => {
    const githubLink = generateGithubLink(challengeId, challengeBlock);
    window.open(githubLink, '_blank');
  };

  const handleClose = () => {
    closeSourceModal();
  };

  if (isOpen) {
    callGA({ event: 'pageview', pagePath: '/help-modal' });
  }
  return (
    <Modal onClose={handleClose} open={!!isOpen}>
      <Modal.Header closeButtonClassNames='close'>
        {t('buttons.challenge-source')}
      </Modal.Header>
      <Modal.Body>
        <>
          <div className='help-text-warning'>
            <p>
              <Trans i18nKey='learn.source-warning'></Trans>
            </p>
            <p>
              <Trans i18nKey='learn.open-github'></Trans>
            </p>
          </div>

          <Spacer size='xxs' />
          <Button
            block={true}
            size='large'
            variant='primary'
            onClick={openChallengeSource}
          >
            {t('buttons.challenge-source')}
          </Button>
          <Spacer size='xxs' />
          <Button
            block={true}
            size='large'
            variant='primary'
            onClick={closeSourceModal}
          >
            {t('buttons.cancel')}
          </Button>
        </>
      </Modal.Body>
    </Modal>
  );
}

SourceModal.displayName = 'SourceModal';

export default connect(mapStateToProps, mapDispatchToProps)(SourceModal);

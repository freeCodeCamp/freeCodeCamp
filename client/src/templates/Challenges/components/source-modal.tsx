import React from 'react';
import { Trans, useTranslation } from 'react-i18next';
import { connect } from 'react-redux';
import { Dispatch, bindActionCreators } from 'redux';
import { Button, Modal, Spacer } from '@freecodecamp/ui';

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
  isOpen: !!isSourceModalOpenSelector(state)
});
const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(
    { createQuestion, closeSourceModal: () => closeModal('source') },
    dispatch
  );

export const generateGithubLink = (challengeId: string, block: string) => {
  const repository =
    curriculumLocale === 'english' ? '/freeCodeCamp' : '/i18n-curriculum';
  const gitURL = new URL(githubLocation);

  gitURL.pathname =
    gitURL.pathname +
    [
      repository,
      'blob/main/curriculum/challenges',
      curriculumLocale,
      'blocks',
      block,
      `${challengeId}.md`
    ].join('/');
  return gitURL.toString();
};

function SourceModal({
  closeSourceModal,
  isOpen,
  challengeBlock,
  challengeId
}: SourceModalProps): JSX.Element {
  const { t } = useTranslation();

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
            href={generateGithubLink(challengeId, challengeBlock)}
            target='_blank'
            rel='noopener noreferrer'
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

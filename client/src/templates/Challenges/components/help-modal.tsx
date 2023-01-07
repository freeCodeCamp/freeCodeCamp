import { faExclamationCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button, Modal } from '@freecodecamp/react-bootstrap';
import React from 'react';
import { Trans, withTranslation } from 'react-i18next';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import envData from '../../../../../config/env.json';
import { executeGA } from '../../../redux/actions';
import { createQuestion, closeModal } from '../redux/actions';
import { isHelpModalOpenSelector } from '../redux/selectors';

import './help-modal.css';

interface HelpModalProps {
  closeHelpModal: () => void;
  createQuestion: () => void;
  executeGA: (attributes: { event: string; pagePath: string }) => void;
  isOpen?: boolean;
  t: (text: string) => string;
  challengeTitle: string;
  challengeBlock: string;
}

const { forumLocation } = envData;

const mapStateToProps = (state: unknown) => ({
  isOpen: isHelpModalOpenSelector(state) as boolean
});
const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(
    { createQuestion, executeGA, closeHelpModal: () => closeModal('help') },
    dispatch
  );

const RSA = forumLocation + '/t/19514';

const generateSearchLink = (title: string, block: string) => {
  const query = /^step\s*\d*$/i.test(title)
    ? encodeURIComponent(`${block} - ${title}`)
    : encodeURIComponent(title);
  const search = `${forumLocation}/search?q=${query}`;
  return search;
};

function HelpModal({
  closeHelpModal,
  createQuestion,
  executeGA,
  isOpen,
  t,
  challengeBlock,
  challengeTitle
}: HelpModalProps): JSX.Element {
  if (isOpen) {
    executeGA({ event: 'pageview', pagePath: '/help-modal' });
  }
  return (
    <Modal dialogClassName='help-modal' onHide={closeHelpModal} show={isOpen}>
      <Modal.Header className='help-modal-header fcc-modal' closeButton={true}>
        <Modal.Title className='text-center'>
          {t('buttons.ask-for-help')}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className='help-modal-body text-center'>
        <h3>
          <Trans i18nKey='learn.tried-rsa'>
            <a
              href={RSA}
              rel='noopener noreferrer'
              target='_blank'
              title={t('learn.rsa')}
            >
              placeholder
            </a>
          </Trans>
        </h3>
        <div className='alert alert-danger'>
          <FontAwesomeIcon icon={faExclamationCircle} />
          <p>
            <Trans i18nKey='learn.rsa-forum'>
              <a
                href={generateSearchLink(challengeTitle, challengeBlock)}
                rel='noopener noreferrer'
                target='_blank'
              >
                placeholder
              </a>
              placeholder
            </Trans>
          </p>
        </div>
        <Button
          block={true}
          bsSize='lg'
          bsStyle='primary'
          onClick={createQuestion}
        >
          {t('buttons.create-post')}
        </Button>
        <Button
          block={true}
          bsSize='lg'
          bsStyle='primary'
          onClick={closeHelpModal}
        >
          {t('buttons.cancel')}
        </Button>
      </Modal.Body>
    </Modal>
  );
}

HelpModal.displayName = 'HelpModal';

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withTranslation()(HelpModal));

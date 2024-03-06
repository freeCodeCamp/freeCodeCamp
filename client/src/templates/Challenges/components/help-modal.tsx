import { faExclamationCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Modal } from '@freecodecamp/react-bootstrap';
import { Button, FormControl } from '@freecodecamp/ui';
import React, { useState } from 'react';
import { Trans, withTranslation } from 'react-i18next';
import { connect } from 'react-redux';
import { Dispatch, bindActionCreators } from 'redux';

import envData from '../../../../config/env.json';
import { Spacer } from '../../../components/helpers';
import { executeGA } from '../../../redux/actions';
import { createQuestion, closeModal } from '../redux/actions';
import { isHelpModalOpenSelector } from '../redux/selectors';

import './help-modal.css';
import callGA from '../../../analytics/call-ga';

interface HelpModalProps {
  closeHelpModal: () => void;
  createQuestion: () => void;
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
    { createQuestion, closeHelpModal: () => closeModal('help') },
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

interface CheckbockProps {
  name: string;
  i18nkey: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  href: string;
  t: (text: string) => string;
}

function CheckboxHelpModal({
  name,
  i18nkey,
  onChange,
  href,
  t
}: CheckbockProps) {
  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <input name={name} type='checkbox' onChange={onChange} />
      <Trans i18nKey={i18nkey}>
        <a
          href={href}
          rel='noopener noreferrer'
          target='_blank'
          title={t(i18nkey)}
        >
          {t(i18nkey)}
        </a>
      </Trans>
    </div>
  );
}

function HelpModal({
  closeHelpModal,
  createQuestion,
  isOpen,
  t,
  challengeBlock,
  challengeTitle
}: HelpModalProps): JSX.Element {
  const [showHelpForm, setShowHelpForm] = useState(false);
  const [description, setDescription] = useState('');
  const [readSearchCheckbox, setReadSearchCheckbox] = useState(false);
  const [similarQuestionsCheckbox, setSimilarQuestionsCheckbox] =
    useState(false);

  const handleCheckboxChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    set: React.Dispatch<React.SetStateAction<boolean>>
  ) => {
    set(event.target.checked);
  };

  if (isOpen) {
    callGA({ event: 'pageview', pagePath: '/help-modal' });
  }
  return (
    <Modal dialogClassName='help-modal' onHide={closeHelpModal} show={isOpen}>
      <Modal.Header className='help-modal-header fcc-modal' closeButton={true}>
        <Modal.Title className='text-center'>
          {t('buttons.ask-for-help')}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className='help-modal-body text-center'>
        {showHelpForm ? (
          <form
            onSubmit={event => {
              event.preventDefault();
              setShowHelpForm(false);
              createQuestion();
              closeHelpModal();
            }}
          >
            <div
              style={{
                display: 'flex',
                flexDirection: 'column'
              }}
            >
              <CheckboxHelpModal
                name='read-search-ask-checkbox'
                i18nkey={t('learn.read-search-ask-checkbox')}
                onChange={event =>
                  handleCheckboxChange(event, setReadSearchCheckbox)
                }
                href={RSA}
                t={t}
              />
              <CheckboxHelpModal
                name='similar-questions-checkbox'
                i18nkey={t('learn.similar-questions-checkbox')}
                onChange={event =>
                  handleCheckboxChange(event, setSimilarQuestionsCheckbox)
                }
                href={generateSearchLink(challengeTitle, challengeBlock)}
                t={t}
              />
              <label htmlFor='description'>
                {t('forum-help.whats-happening')} (Min. 50)
              </label>
              <FormControl
                id='help-modal-form-description'
                name='description'
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                  setDescription(event.target.value);
                }}
                componentClass='textarea'
                required={true}
                style={{
                  height: 100
                }}
                maxLength={500}
                type='text'
              />
            </div>
            <Spacer size='xxSmall' />

            <Button
              block={true}
              size='large'
              variant='primary'
              type='submit'
              disabled={
                description.length < 50 ||
                !readSearchCheckbox ||
                !similarQuestionsCheckbox
              }
            >
              {t('buttons.submit')}
            </Button>
            <Spacer size='xxSmall' />
            <Button
              block={true}
              size='large'
              variant='primary'
              onClick={() => setShowHelpForm(false)}
            >
              {t('buttons.back')}
            </Button>
          </form>
        ) : (
          <>
            <h3 className='help-modal-heading'>
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
              size='large'
              variant='primary'
              onClick={() => setShowHelpForm(true)}
            >
              {t('buttons.create-post')}
            </Button>
            <Spacer size='xxSmall' />
            <Button
              block={true}
              size='large'
              variant='primary'
              onClick={closeHelpModal}
            >
              {t('buttons.cancel')}
            </Button>
          </>
        )}
      </Modal.Body>
    </Modal>
  );
}

HelpModal.displayName = 'HelpModal';

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withTranslation()(HelpModal));

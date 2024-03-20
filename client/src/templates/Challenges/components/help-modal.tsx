import { faExclamationCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Modal } from '@freecodecamp/react-bootstrap';
import { Button, FormControl } from '@freecodecamp/ui';
import React, { useCallback, useState, useRef, useEffect } from 'react';
import { Trans, withTranslation } from 'react-i18next';
import { connect } from 'react-redux';
import { Dispatch, bindActionCreators } from 'redux';

import envData from '../../../../config/env.json';
import { Spacer } from '../../../components/helpers';
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
  value: boolean;
  href: string;
  t: (text: string) => string;
}

function CheckboxHelpModal({
  name,
  i18nkey,
  onChange,
  value,
  href,
  t
}: CheckbockProps) {
  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <input
        name={name}
        type='checkbox'
        onChange={onChange}
        checked={value}
        aria-label={t(i18nkey)}
        aria-required='true'
      />
      <Trans i18nKey={i18nkey}>
        <a href={href} rel='noopener noreferrer' target='_blank'>
          {t(i18nkey)}{' '}
          <span className='sr-only'>{t('aria.opens-new-window')}</span>
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
  const DESCRIPTION_MIN = 50;
  const DESCRIPTION_MAX = 500;
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (showHelpForm) {
      formRef.current?.querySelector('input')?.focus();
    }
  }, [showHelpForm]);

  const canSubmitForm = useCallback(() => {
    return (
      description.length >= DESCRIPTION_MIN &&
      readSearchCheckbox &&
      similarQuestionsCheckbox
    );
  }, [description, readSearchCheckbox, similarQuestionsCheckbox]);

  const resetFormValues = () => {
    setDescription('');
    setReadSearchCheckbox(false);
    setSimilarQuestionsCheckbox(false);
  };

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
    <Modal
      dialogClassName='help-modal'
      onHide={() => {
        closeHelpModal();
        setShowHelpForm(false);
        resetFormValues();
      }}
      show={isOpen}
      aria-labelledby='ask-for-help-modal'
    >
      <Modal.Header
        className='help-modal-header fcc-modal'
        closeButton={true}
        closeLabel={t('buttons.close-dialog')}
      >
        <Modal.Title id='ask-for-help-modal' className='text-center'>
          {t('buttons.ask-for-help')}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className='help-modal-body text-center'>
        {showHelpForm ? (
          <form
            onSubmit={event => {
              event.preventDefault();
              if (!canSubmitForm()) return;
              setShowHelpForm(false);
              resetFormValues();
              createQuestion();
              closeHelpModal();
            }}
            ref={formRef}
          >
            <div
              style={{
                display: 'flex',
                flexDirection: 'column'
              }}
            >
              <fieldset>
                <legend style={{ fontSize: 'large' }}>
                  {t('learn.must-confirm-statements')}
                </legend>
                <CheckboxHelpModal
                  name='read-search-ask-checkbox'
                  i18nkey={t('learn.read-search-ask-checkbox')}
                  onChange={event =>
                    handleCheckboxChange(event, setReadSearchCheckbox)
                  }
                  value={readSearchCheckbox}
                  href={RSA}
                  t={t}
                />
                <Spacer size='small' />
                <CheckboxHelpModal
                  name='similar-questions-checkbox'
                  i18nkey={t('learn.similar-questions-checkbox')}
                  onChange={event =>
                    handleCheckboxChange(event, setSimilarQuestionsCheckbox)
                  }
                  value={similarQuestionsCheckbox}
                  href={generateSearchLink(challengeTitle, challengeBlock)}
                  t={t}
                />
              </fieldset>
              <label htmlFor='help-modal-form-description'>
                {t('forum-help.whats-happening')}
                <span className='sr-only'>{t('learn.min-50-max-500')}</span>
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
                value={description}
                maxLength={DESCRIPTION_MAX}
                type='text'
              />
              {description.length < DESCRIPTION_MIN ? (
                <p className='chars-left'>
                  {t('learn.minimum-characters').replace(
                    '{{characters}}',
                    (DESCRIPTION_MIN - description.length).toString()
                  )}
                </p>
              ) : (
                <p className='chars-left'>
                  {t('learn.characters-left').replace(
                    '{{characters}}',
                    (DESCRIPTION_MAX - description.length).toString()
                  )}
                </p>
              )}
            </div>
            <Spacer size='xxSmall' />

            <Button
              block={true}
              size='large'
              variant='primary'
              type='submit'
              disabled={!canSubmitForm()}
              {...(!canSubmitForm() && { tabIndex: -1 })}
            >
              {t('buttons.submit')}
            </Button>
            <Spacer size='xxSmall' />
            <Button
              block={true}
              size='large'
              variant='primary'
              onClick={() => {
                setShowHelpForm(false);
                resetFormValues();
                closeHelpModal();
              }}
            >
              {t('buttons.cancel')}
            </Button>
          </form>
        ) : (
          <>
            <p>
              <Trans i18nKey='learn.tried-rsa'>
                <a href={RSA} rel='noopener noreferrer' target='_blank'>
                  placeholder
                </a>
              </Trans>
            </p>
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
              onClick={() => {
                setShowHelpForm(true);
              }}
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

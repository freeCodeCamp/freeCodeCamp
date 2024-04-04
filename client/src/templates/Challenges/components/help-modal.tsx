import { faExclamationCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Modal } from '@freecodecamp/react-bootstrap';
import { Button, FormControl } from '@freecodecamp/ui';
import React, { useMemo, useState, useRef, useEffect } from 'react';
import { Trans, useTranslation } from 'react-i18next';
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
  createQuestion: (description: string) => void;
  isOpen?: boolean;
  challengeTitle: string;
  challengeBlock: string;
}

const { forumLocation } = envData;
const DESCRIPTION_MIN_CHARS = 50;
const DESCRIPTION_MAX_CHARS = 500;
const RSA = forumLocation + '/t/19514';

const mapStateToProps = (state: unknown) => ({
  isOpen: isHelpModalOpenSelector(state) as boolean
});
const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(
    { createQuestion, closeHelpModal: () => closeModal('help') },
    dispatch
  );

const generateSearchLink = (title: string, block: string) => {
  const query = /^step\s*\d*$/i.test(title)
    ? encodeURIComponent(`${removeHyphens(block)} - ${title}`)
    : encodeURIComponent(title);
  const search = `${forumLocation}/search?q=${query}`;
  return search;
};

const removeHyphens = (block: string) => block.replace(/-/g, ' ');

interface CheckboxProps {
  name: string;
  i18nkey: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value: boolean;
  href: string;
}

function Checkbox({ name, i18nkey, onChange, value, href }: CheckboxProps) {
  const { t } = useTranslation();

  return (
    <div className='checkbox'>
      <label>
        <input
          name={name}
          type='checkbox'
          onChange={onChange}
          checked={value}
          required
        />
        <span className='checkbox-text'>
          <Trans i18nKey={i18nkey}>
            <a href={href} rel='noopener noreferrer' target='_blank'>
              placeholder
              <span className='sr-only'>{t('aria.opens-new-window')}</span>
            </a>
          </Trans>
        </span>
      </label>
    </div>
  );
}

function HelpModal({
  closeHelpModal,
  createQuestion,
  isOpen,
  challengeBlock,
  challengeTitle
}: HelpModalProps): JSX.Element {
  const { t } = useTranslation();
  const [showHelpForm, setShowHelpForm] = useState(false);
  const [description, setDescription] = useState('');
  const [readSearchCheckbox, setReadSearchCheckbox] = useState(false);
  const [similarQuestionsCheckbox, setSimilarQuestionsCheckbox] =
    useState(false);

  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (showHelpForm) {
      formRef.current?.querySelector('input')?.focus();
    }
  }, [showHelpForm]);

  const canSubmitForm = useMemo(() => {
    return (
      description.length >= DESCRIPTION_MIN_CHARS &&
      readSearchCheckbox &&
      similarQuestionsCheckbox
    );
  }, [description, readSearchCheckbox, similarQuestionsCheckbox]);

  const resetFormValues = () => {
    setDescription('');
    setReadSearchCheckbox(false);
    setSimilarQuestionsCheckbox(false);
  };

  const handleClose = () => {
    closeHelpModal();
    setShowHelpForm(false);
    resetFormValues();
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    if (!canSubmitForm) {
      return;
    }

    setShowHelpForm(false);
    resetFormValues();
    createQuestion(description);
    closeHelpModal();
  };

  if (isOpen) {
    callGA({ event: 'pageview', pagePath: '/help-modal' });
  }
  return (
    <Modal
      dialogClassName='help-modal'
      onHide={handleClose}
      show={isOpen}
      aria-labelledby='ask-for-help-modal'
    >
      <Modal.Header
        className='help-modal-header fcc-modal'
        closeButton={true}
        closeLabel={t('buttons.close')}
      >
        <Modal.Title id='ask-for-help-modal' className='text-center'>
          {t('buttons.ask-for-help')}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className='text-center'>
        {showHelpForm ? (
          <form onSubmit={handleSubmit} ref={formRef}>
            <fieldset>
              <legend className='help-form-legend'>
                {t('learn.must-confirm-statements')}
              </legend>

              <Checkbox
                name='read-search-ask-checkbox'
                i18nkey='learn.read-search-ask-checkbox'
                onChange={event => setReadSearchCheckbox(event.target.checked)}
                value={readSearchCheckbox}
                href={RSA}
              />

              <Spacer size='small' />

              <Checkbox
                name='similar-questions-checkbox'
                i18nkey='learn.similar-questions-checkbox'
                onChange={event =>
                  setSimilarQuestionsCheckbox(event.target.checked)
                }
                value={similarQuestionsCheckbox}
                href={generateSearchLink(challengeTitle, challengeBlock)}
              />
            </fieldset>

            <Spacer size='xSmall' />

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
              rows={5}
              value={description}
              minLength={DESCRIPTION_MIN_CHARS}
              maxLength={DESCRIPTION_MAX_CHARS}
              required
            />

            <Spacer size='xSmall' />

            {description.length < DESCRIPTION_MIN_CHARS ? (
              <p>
                {t('learn.minimum-characters', {
                  characters: DESCRIPTION_MIN_CHARS - description.length
                })}
              </p>
            ) : (
              <p>
                {t('learn.characters-left', {
                  characters: DESCRIPTION_MAX_CHARS - description.length
                })}
              </p>
            )}

            <Spacer size='xxSmall' />

            <Button
              block={true}
              size='large'
              variant='primary'
              type='submit'
              disabled={!canSubmitForm}
            >
              {t('buttons.submit')}
            </Button>
            <Spacer size='xxSmall' />
            <Button
              block={true}
              size='large'
              variant='primary'
              onClick={handleClose}
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

export default connect(mapStateToProps, mapDispatchToProps)(HelpModal);

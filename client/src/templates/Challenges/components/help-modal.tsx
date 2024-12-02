import React, { useMemo, useState, useRef, useEffect } from 'react';
import { Trans, useTranslation } from 'react-i18next';
import { connect } from 'react-redux';
import { Dispatch, bindActionCreators } from 'redux';
import { Button, FormControl, Modal, Spacer } from '@freecodecamp/ui';

import envData from '../../../../config/env.json';
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

export const generateSearchLink = (title: string, block: string) => {
  const blockWithoutHyphens = block.replace(/-/g, ' ');

  const query = /^(step|task)\s*\d*$/i.test(title)
    ? encodeURIComponent(`${blockWithoutHyphens} - ${title}`)
    : encodeURIComponent(title);
  const search = `${forumLocation}/search?q=${query}`;
  return search;
};

interface CheckboxProps {
  name: string;
  i18nKey: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value: boolean;
  href: string;
  label: string;
}

function Checkbox({
  name,
  i18nKey,
  onChange,
  value,
  href,
  label
}: CheckboxProps) {
  const { t } = useTranslation();

  return (
    <div className='checkbox-container'>
      <input
        id={name}
        name={name}
        type='checkbox'
        onChange={onChange}
        checked={value}
        required
        // Instead of reusing the `i18nKey`, use a plain text version for label
        // as input label should not contain interactive elements
        aria-label={t(label)}
      />

      <span>
        <Trans i18nKey={i18nKey}>
          <a href={href} rel='noopener noreferrer' target='_blank'>
            placeholder
            <span className='sr-only'>{t('aria.opens-new-window')}</span>
          </a>
        </Trans>
      </span>
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
    <Modal onClose={handleClose} open={!!isOpen}>
      <Modal.Header closeButtonClassNames='close'>
        {t('buttons.ask-for-help')}
      </Modal.Header>
      <Modal.Body>
        {showHelpForm ? (
          <form onSubmit={handleSubmit} ref={formRef}>
            <fieldset>
              <legend className='help-form-legend'>
                {t('learn.must-confirm-statements')}
              </legend>

              <Checkbox
                name='read-search-ask-checkbox'
                i18nKey='learn.read-search-ask-checkbox'
                label='aria.rsa-checkbox'
                onChange={event => setReadSearchCheckbox(event.target.checked)}
                value={readSearchCheckbox}
                href={RSA}
              />

              <Spacer size='xs' />

              <Checkbox
                name='similar-questions-checkbox'
                i18nKey='learn.similar-questions-checkbox'
                label='aria.similar-questions-checkbox'
                onChange={event =>
                  setSimilarQuestionsCheckbox(event.target.checked)
                }
                value={similarQuestionsCheckbox}
                href={generateSearchLink(challengeTitle, challengeBlock)}
              />
            </fieldset>

            <Spacer size='s' />

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
              placeholder={t('forum-help.describe')}
              minLength={DESCRIPTION_MIN_CHARS}
              maxLength={DESCRIPTION_MAX_CHARS}
              required
            />

            <Spacer size='s' />

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

            <Spacer size='xxs' />

            <Button
              block={true}
              size='large'
              variant='primary'
              type='submit'
              disabled={!canSubmitForm}
            >
              {t('buttons.submit')}
            </Button>
            <Spacer size='xxs' />
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
            <div className='alert'>
              <div className='help-text-warning'>
                <p>
                  <Trans i18nKey='learn.tried-rsa'>
                    <a href={RSA} rel='noopener noreferrer' target='_blank'>
                      placeholder
                    </a>
                  </Trans>
                </p>
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
            </div>

            <Button
              block={true}
              size='large'
              variant='primary'
              onClick={() => setShowHelpForm(true)}
            >
              {t('buttons.create-post')}
            </Button>
            <Spacer size='xxs' />
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

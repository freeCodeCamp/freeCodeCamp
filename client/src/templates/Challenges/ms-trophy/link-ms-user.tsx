import React, { useState } from 'react';
import { ConnectedProps, connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import type { Dispatch } from 'redux';
import { createSelector } from 'reselect';
import { Trans, useTranslation } from 'react-i18next';
import {
  ControlLabel,
  FormControl,
  FormGroup,
  HelpBlock,
  Button,
  Spacer
} from '@freecodecamp/ui';

import { isMicrosoftTranscriptLink } from '../../../../../shared/utils/validate';
import {
  linkMsUsername,
  unlinkMsUsername,
  setIsProcessing
} from '../../../redux/actions';
import {
  isSignedInSelector,
  msUsernameSelector,
  isProcessingSelector
} from '../../../redux/selectors';
import Login from '../../../components/Header/components/login';
import ChallengeHeading from '../components/challenge-heading';

import './link-ms-user.css';

const mapState = createSelector(
  isSignedInSelector,
  msUsernameSelector,
  isProcessingSelector,
  (
    isSignedIn: boolean,
    msUsername: string | undefined | null,
    isProcessing: boolean
  ) => ({
    isSignedIn,
    msUsername,
    isProcessing
  })
);

const mapDispatch = (dispatch: Dispatch) =>
  bindActionCreators(
    {
      linkMsUsername,
      unlinkMsUsername,
      setIsProcessing
    },
    dispatch
  );

const connector = connect(mapState, mapDispatch);

type Props = ConnectedProps<typeof connector>;

function LinkMsUser({
  isSignedIn,
  msUsername,
  linkMsUsername,
  unlinkMsUsername,
  isProcessing,
  setIsProcessing
}: Props): JSX.Element {
  const { t } = useTranslation();
  const [msTranscriptUrl, setMsTranscriptUrl] = useState('');

  function handleLinkUsername(e: React.FormEvent) {
    e.preventDefault();
    setIsProcessing(true);
    linkMsUsername({ msTranscriptUrl });
  }

  function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    e.preventDefault();
    setMsTranscriptUrl(e.target.value);
  }

  const isValid = isMicrosoftTranscriptLink(msTranscriptUrl);
  const isPristine = msTranscriptUrl === '';
  const isDisabled = isProcessing || !isValid;
  const showWarning = !isPristine && !isValid;

  return !isSignedIn ? (
    <>
      <ChallengeHeading heading={t('learn.ms.link-header')} />
      <Spacer size='xs' />

      <p>{t('learn.ms.link-signin')}</p>
      <Login />
    </>
  ) : msUsername ? (
    <>
      <p>{t('learn.ms.linked', { msUsername })}</p>
      <Button
        block={true}
        variant='primary'
        disabled={isProcessing}
        onClick={unlinkMsUsername}
      >
        {t('buttons.unlink-account')}
      </Button>
    </>
  ) : (
    <div>
      <ChallengeHeading heading={'learn.ms.link-header'} />
      <Spacer size='xs' />

      <p>{t('learn.ms.unlinked')}</p>
      <ol className='link-ms-user-ol'>
        <li>
          <Trans i18nKey='learn.ms.link-li-1'>
            <a
              href='https://learn.microsoft.com/users/me/transcript'
              rel='noreferrer'
              target='_blank'
            >
              placeholder
            </a>
          </Trans>
        </li>
        <li>{t('learn.ms.link-li-2')}</li>
        <li>{t('learn.ms.link-li-3')}</li>
        <li>{t('learn.ms.link-li-4')}</li>
        <li>
          <Trans i18nKey='learn.ms.link-li-5'>
            <pre className='language-html'>placeholder</pre>
          </Trans>
        </li>
        <li>{t('learn.ms.link-li-6')}</li>
      </ol>

      <Spacer size='m' />
      <form onSubmit={handleLinkUsername}>
        <FormGroup validationState={isValid ? 'success' : 'error'}>
          <ControlLabel htmlFor='transcript-link'>
            <strong>{t('learn.ms.transcript-label')}</strong>
          </ControlLabel>
          <FormControl
            id='transcript-link'
            type='url'
            onChange={handleInputChange}
            placeholder='https://learn.microsoft.com/en-us/users/username/transcript/transcriptId'
          />
        </FormGroup>
        <Button
          disabled={isDisabled}
          block={true}
          variant='primary'
          onClick={handleLinkUsername}
        >
          {t('buttons.link-account')}
        </Button>
        {showWarning && (
          <HelpBlock>
            <Trans i18nKey='learn.ms.invalid-transcript'>
              placeholder <code>placeholder</code> placeholder
            </Trans>
          </HelpBlock>
        )}
      </form>
    </div>
  );
}

LinkMsUser.displayName = 'LinkMsUser';

export default connector(LinkMsUser);

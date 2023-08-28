import React, { useState } from 'react';
import {
  Button,
  FormGroup,
  ControlLabel,
  FormControl
} from '@freecodecamp/react-bootstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import type { Dispatch } from 'redux';
import { createSelector } from 'reselect';
import type { TFunction } from 'i18next';
import { Trans, withTranslation } from 'react-i18next';
import { Spacer } from '../../../components/helpers';

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

import './link-ms-user.css';

const mapStateToProps = createSelector(
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

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(
    {
      linkMsUsername,
      unlinkMsUsername,
      setIsProcessing
    },
    dispatch
  );

interface LinkMsUserProps {
  isSignedIn: boolean;
  msUsername: string | undefined | null;
  linkMsUsername: (arg0: { msTranscriptUrl: string }) => void;
  unlinkMsUsername: () => void;
  isProcessing: boolean;
  setIsProcessing: (arg0: boolean) => void;
  t: TFunction;
}

export function LinkMsUser({
  isSignedIn,
  msUsername,
  linkMsUsername,
  unlinkMsUsername,
  isProcessing,
  setIsProcessing,
  t
}: LinkMsUserProps): JSX.Element {
  const [msTranscriptUrl, setMsTranscriptUrl] = useState<string>('');

  function handleLinkUsername(e: React.FormEvent) {
    e.preventDefault();
    setIsProcessing(true);
    linkMsUsername({ msTranscriptUrl });
  }

  function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    e.preventDefault();
    setMsTranscriptUrl(e.target.value);
  }

  return !isSignedIn ? (
    <>
      <h2 className='link-ms-user-title'>{t('learn.ms.link-header')}</h2>
      <Spacer size='small' />

      <p>{t('learn.ms.link-signin')}</p>
      <Login />
    </>
  ) : (
    <>
      {msUsername ? (
        <>
          <p>{t('learn.ms.linked', { msUsername })}</p>
          <Button
            block={true}
            bsStyle='primary'
            className='btn-invert'
            disabled={isProcessing}
            onClick={unlinkMsUsername}
          >
            {t('buttons.unlink-account')}
          </Button>
        </>
      ) : (
        <div>
          <h2 className='link-ms-user-title'>{t('learn.ms.link-header')}</h2>
          <Spacer size='small' />

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
            <li>{t('learn.ms.link-li-5')}</li>
          </ol>

          <Spacer size='medium' />
          <form onSubmit={handleLinkUsername}>
            <FormGroup>
              <ControlLabel>
                <strong>{t('learn.ms.transcript-label')}</strong>
              </ControlLabel>
              <FormControl
                type='url'
                onChange={handleInputChange}
                placeholder='https://learn.microsoft.com/en-us/users/username/transcript/transcriptId'
              />
            </FormGroup>
            <Button
              disabled={isProcessing || msTranscriptUrl.length === 0}
              block={true}
              bsStyle='primary'
              className='btn-invert'
              onClick={handleLinkUsername}
            >
              {t('buttons.link-account')}
            </Button>
          </form>
        </div>
      )}
    </>
  );
}

LinkMsUser.displayName = 'LinkMsUser';

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withTranslation()(LinkMsUser));

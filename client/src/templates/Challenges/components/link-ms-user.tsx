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
import { Spacer } from '../../../components/helpers';

import {
  linkMsUsername,
  unlinkMsUsername,
  setProcessing
} from '../../../redux/actions';
import {
  msUsernameSelector,
  processingSelector
} from '../../../redux/selectors';

import './link-ms-user.css';

const mapStateToProps = createSelector(
  msUsernameSelector,
  processingSelector,
  (msUsername: string | undefined | null, processing: boolean) => ({
    msUsername,
    processing
  })
);

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(
    {
      linkMsUsername,
      unlinkMsUsername,
      setProcessing
    },
    dispatch
  );

interface LinkMsUserProps {
  msUsername: string | undefined | null;
  linkMsUsername: (arg0: { msTranscriptUrl: string }) => void;
  unlinkMsUsername: () => void;
  processing: boolean;
  setProcessing: (arg0: boolean) => void;
}

export function LinkMsUser({
  msUsername,
  linkMsUsername,
  unlinkMsUsername,
  processing,
  setProcessing
}: LinkMsUserProps): JSX.Element {
  const [msTranscriptUrl, setMsTranscriptUrl] = useState<string>('');

  function handleLinkUsername(e: React.FormEvent) {
    e.preventDefault();
    setProcessing(true);
    linkMsUsername({ msTranscriptUrl });
  }

  function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    e.preventDefault();
    setMsTranscriptUrl(e.target.value);
  }

  return (
    <>
      {msUsername ? (
        <>
          <p>
            The Microsoft account with username &quot;{msUsername}&quot; is
            currently linked to your freeCodeCamp account. If this is not your
            Microsoft username, remove the link.
          </p>
          <Button
            block={true}
            bsStyle='primary'
            className='btn-invert'
            onClick={unlinkMsUsername}
          >
            Unlink account
          </Button>
        </>
      ) : (
        <div>
          <h2 className='link-ms-user-title'>Link your Microsoft account</h2>
          <Spacer size='small' />

          <p>
            To complete this challenge, you must first link your Microsoft
            username to your freeCodeCamp account by following these
            instructions:
          </p>
          <ol className='link-ms-user-ol'>
            <li>
              Using a browser where you are logged into your Microsoft account,
              go to{' '}
              <a
                href='https://learn.microsoft.com/users/me/transcript'
                rel='noreferrer'
                target='_blank'
              >
                https://learn.microsoft.com/users/me/transcript
              </a>
            </li>
            <li>Find and click the &quot;Share link&quot; button.</li>
            <li>
              If you do not have a transcript link, click the &quot;Create
              link&quot; button to create one.
            </li>
            <li>
              Click the &quot;Copy link&quot; button to copy the transcript URL.
            </li>
            <li>
              Paste the URL into the input below and click &quot;Link
              account&quot;.
            </li>
          </ol>

          <Spacer size='medium' />
          <form onSubmit={handleLinkUsername}>
            <FormGroup>
              <ControlLabel>
                <strong>Your Microsoft Transcript Link</strong>
              </ControlLabel>
              <FormControl
                type='url'
                onChange={handleInputChange}
                placeholder='https://learn.microsoft.com/en-us/users/username/transcript/transcriptId'
              />
            </FormGroup>
            <Button
              disabled={processing}
              block={true}
              bsStyle='primary'
              className='btn-invert'
              onClick={handleLinkUsername}
            >
              Link account
            </Button>
          </form>
        </div>
      )}
    </>
  );
}

LinkMsUser.displayName = 'LinkMsUser';

export default connect(mapStateToProps, mapDispatchToProps)(LinkMsUser);

import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import type { Dispatch } from 'redux';
import { createSelector } from 'reselect';
// import { Trans, useTranslation } from 'react-i18next';
import { useTranslation } from 'react-i18next';
import { Spacer, Button } from '@freecodecamp/ui';
import { postUserToken } from '../../../utils/ajax';
import { createFlashMessage } from '../../../components/Flash/redux';
import { FlashMessages } from '../../../components/Flash/redux/flash-messages';

import {
  isSignedInSelector,
  userTokenSelector
} from '../../../redux/selectors';
import { updateUserToken } from '../../../redux/actions';
import { Link } from '../../../components/helpers';

import RdbLogoutAlert from './rdb-gitpod-logout-alert';

const mapStateToProps = createSelector(
  isSignedInSelector,
  userTokenSelector,
  (isSignedIn: boolean, userToken: string | null) => ({
    isSignedIn,
    userToken
  })
);

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(
    {
      createFlashMessage,
      updateUserToken
    },
    dispatch
  );

interface RdbLocalInstructionsProps {
  course: string;
  createFlashMessage: typeof createFlashMessage;
  isSignedIn: boolean;
  updateUserToken: (arg0: string) => void;
  userToken: string | null;
}

function RdbLocalInstructions({
  course,
  createFlashMessage,
  isSignedIn,
  updateUserToken,
  userToken
}: RdbLocalInstructionsProps): JSX.Element {
  const { t } = useTranslation();

  const generateUserToken = async () => {
    const createUserTokenResponse = await postUserToken();
    const { data = { userToken: null } } = createUserTokenResponse;

    if (data?.userToken) {
      updateUserToken(data.userToken);
    } else {
      createFlashMessage({
        type: 'danger',
        message: FlashMessages.StartProjectErr
      });
    }
  };

  const copyUserToken = () => {
    navigator.clipboard.writeText(userToken ?? '').then(
      () => {
        createFlashMessage({
          type: 'success',
          message: FlashMessages.UserTokenCopied
        });
      },
      () => {
        createFlashMessage({
          type: 'danger',
          message: FlashMessages.UserTokenCopyError
        });
      }
    );
  };

  return (
    <div className='ca-description'>
      <p>{t('learn.local.intro')}</p>
      <ul>
        <li>
          <Link external={true} to='https://docs.docker.com/engine/'>
            Docker Engine
          </Link>
        </li>
        <li>
          <Link external={true} to='https://code.visualstudio.com/download'>
            VS Code
          </Link>{' '}
          and the{' '}
          <Link
            external={true}
            to='https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-containers'
          >
            Dev Containers
          </Link>{' '}
          extension
        </li>
        <li>
          <Link external={true} to='https://git-scm.com/downloads'>
            Git
          </Link>
        </li>
      </ul>
      <Spacer size='m' />
      <p>Then, do these to start the course:</p>
      <ol>
        <li>
          Open a terminal and clone the RDB Alpha repo with{' '}
          <code>git clone https://github.com/freeCodeCamp/rdb-alpha</code> if
          you don&apos;t already have it
        </li>
        <li>
          Navigate to the <code>rdb-alpha</code> directory in the terminal with{' '}
          <code>cd rdb-alpha</code>, and open VSCode with <code>code .</code>
        </li>
        {isSignedIn && (
          <>
            <Spacer size='s' />
            <p>
              If you want to save your progress to your freeCodeCamp account, do
              the following:
            </p>
            <ol>
              <li>Generate a user token if you don&apos;t already have one:</li>
              <Button
                disabled={!!userToken}
                block={true}
                onClick={() => void generateUserToken()}
              >
                Generate User Token
              </Button>
              <li>Copy your user token:</li>
              <Button
                disabled={!userToken}
                block={true}
                onClick={() => void copyUserToken()}
              >
                Copy User Token
              </Button>
              <li>
                In the VSCode with that opened, find and open the{' '}
                <code>Dockerfile</code>. At the bottom of the file, paste your
                token in as the value for the{' '}
                <code>CODEROAD_WEBHOOK_TOKEN</code> variable. It should look
                like this:{' '}
                <code>ENV CODEROAD_WEBHOOK_TOKEN=your-token-here</code>
              </li>
              <Spacer size='xs' />
              <RdbLogoutAlert course={course} />
            </ol>
            <Spacer size='s' />
          </>
        )}
        <li>
          Open the command palette in VSCode by pressing Press Ctrl / Cmd +
          Shift + P or going to the &quot;View&quot; menu and clicking
          &quot;Command Paletta...&quot; and enter{' '}
          <code>Dev Containers: Rebuild and Reopen in Container</code>
        </li>
        <li>
          A new VS Code window will open and begin building the Docker image. It
          will take several minutes the first time.
        </li>
        <li>
          Once it is finished building, press Ctrl / Cmd + Shift + P and enter
          <code>CodeRoad: Start</code> to open CodeRoad
        </li>
        <li>In the CodeRoad window, click &quot;Start New Tutorial&quot;</li>
        <li>
          Enter{' '}
          <code>
            https://raw.githubusercontent.com/freeCodeCamp/learn-bash-by-building-a-boilerplate/main/tutorial.json
          </code>{' '}
          in the input
        </li>
        <li>In CodeRoad, click the &quot;Start&quot; button to begin</li>
        <li>
          Follow the instructions in CodeRoad to complete the course. Note: You
          may need to restart the terminal for the tests to pass
        </li>
      </ol>
    </div>
  );
}

RdbLocalInstructions.displayName = 'RdbLocalInstructions';

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RdbLocalInstructions);

import React from 'react';
import { connect } from 'react-redux';
import { Trans, useTranslation } from 'react-i18next';
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

import RdbLocalLogoutAlert from './rdb-local-logout-alert';

const mapStateToProps = (state: unknown) => ({
  isSignedIn: isSignedInSelector(state),
  userToken: userTokenSelector(state) as string | null
});

const mapDispatchToProps = {
  createFlashMessage,
  updateUserToken
};

interface RdbLocalInstructionsProps {
  course: string;
  createFlashMessage: typeof createFlashMessage;
  isSignedIn: boolean;
  updateUserToken: (arg0: string) => void;
  url: string;
  userToken: string | null;
}

function RdbLocalInstructions({
  course,
  createFlashMessage,
  isSignedIn,
  updateUserToken,
  url,
  userToken
}: RdbLocalInstructionsProps): JSX.Element {
  const { t } = useTranslation();

  const coderoadTutorial = `https://raw.githubusercontent.com/${url}/main/tutorial.json`;

  const generateUserToken = async () => {
    const createUserTokenResponse = await postUserToken();
    const { data = { userToken: null } } = createUserTokenResponse;

    if (data?.userToken) {
      updateUserToken(data.userToken);
      createFlashMessage({
        type: 'success',
        message: FlashMessages.UserTokenGenerated
      });
    } else {
      createFlashMessage({
        type: 'danger',
        message: FlashMessages.UserTokenGenerateError
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

  const copyUrl = () => {
    navigator.clipboard.writeText(coderoadTutorial ?? '').then(
      () => {
        createFlashMessage({
          type: 'success',
          message: FlashMessages.CourseUrlCopied
        });
      },
      () => {
        createFlashMessage({
          type: 'danger',
          message: FlashMessages.CourseUrlCopyError
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
          <Trans i18nKey='learn.local.download-vscode'>
            <Link external={true} to='https://code.visualstudio.com/download'>
              placeholder
            </Link>
            <Link
              external={true}
              to='https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-containers'
            >
              placeholder
            </Link>
          </Trans>
        </li>
        <li>
          <Link external={true} to='https://git-scm.com/downloads'>
            Git
          </Link>
        </li>
      </ul>
      <Spacer size='m' />
      <p>{t('learn.local.heading')}</p>
      <ol>
        <li>
          <Trans i18nKey='learn.local.step-1'>
            <code>placeholder</code>
          </Trans>
        </li>
        <li>
          <Trans i18nKey='learn.local.step-2'>
            <code>placeholder</code>
            <code>placeholder</code>
            <code>placeholder</code>
          </Trans>
        </li>
        {isSignedIn && (
          <>
            <Spacer size='s' />
            <p>{t('learn.local.sub-step-heading')}</p>
            <ol>
              <li>{t('learn.local.sub-step-1')}</li>
              <Spacer size='xxs' />
              <Button
                disabled={!!userToken}
                block={true}
                onClick={() => void generateUserToken()}
              >
                {t('learn.local.generate-token-btn')}
              </Button>
              <Spacer size='xs' />
              <li>{t('learn.local.sub-step-2')}</li>
              <Spacer size='xxs' />
              <Button
                disabled={!userToken}
                block={true}
                onClick={copyUserToken}
              >
                {t('learn.local.copy-token-btn')}
              </Button>
              <Spacer size='xs' />
              <li>
                <Trans i18nKey='learn.local.sub-step-3'>
                  <code>placeholder</code>
                  <code>placeholder</code>
                  <code>placeholder</code>
                </Trans>
              </li>
              <Spacer size='xs' />
              <RdbLocalLogoutAlert course={course} />
            </ol>
            <Spacer size='s' />
          </>
        )}
        <li>
          <Trans i18nKey='learn.local.step-3'>
            <code>placeholder</code>
          </Trans>
        </li>
        <li>{t('learn.local.step-4')}</li>
        <li>
          <Trans i18nKey='learn.local.step-5'>
            <code>placeholder</code>
          </Trans>
        </li>
        <li>{t('learn.local.step-6')}</li>
        <li>{t('learn.local.step-7')}</li>
        <Spacer size='xxs' />
        <Button block={true} onClick={copyUrl}>
          {t('learn.local.copy-url')}
        </Button>
        <Spacer size='xs' />
        <li>{t('learn.local.step-8')}</li>
        <li>{t('learn.local.step-9')}</li>
      </ol>
    </div>
  );
}

RdbLocalInstructions.displayName = 'RdbLocalInstructions';

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RdbLocalInstructions);

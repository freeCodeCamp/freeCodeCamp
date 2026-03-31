import React from 'react';
import { bindActionCreators, Dispatch, AnyAction } from 'redux';
import { createSelector } from 'reselect';
import { connect } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { Button, Modal, Spacer } from '@freecodecamp/ui';

import { closeSignoutModal } from '../../redux/actions';
import { isSignoutModalOpenSelector } from '../../redux/selectors';
import { apiLocation } from '../../../config/env.json';
import callGA from '../../analytics/call-ga';

const mapStateToProps = createSelector(
  isSignoutModalOpenSelector,
  (show: boolean) => ({
    show
  })
);

const mapDispatchToProps = (dispatch: Dispatch<AnyAction>) =>
  bindActionCreators(
    {
      closeSignoutModal
    },
    dispatch
  );

type SignoutModalProps = {
  closeSignoutModal: () => void;
  show: boolean;
};

export const pathAfterSignout = (currentPath: string): string => {
  // These pages try to sign in the user automatically if they are signed out,
  // so, to respect the user's intention to sign out, we redirect them to /learn
  // instead.
  const redirectedPaths = ['/settings', '/update-email'];
  const allPaths = [
    ...redirectedPaths,
    ...redirectedPaths.map(path => `${path}/`)
  ];

  const basePath = currentPath.split('?')[0];

  return allPaths.some(path => basePath === path)
    ? '/learn'
    : currentPath;
};

export const removeQueryParam = (
  url: string,
  param: string
): string => {
  const [path, queryString] = url.split('?');
  if (!queryString) return url;

  const params = new URLSearchParams(queryString);
  params.delete(param);

  const newQuery = params.toString();
  return newQuery ? `${path}?${newQuery}` : path;
};

function SignoutModal(props: SignoutModalProps): JSX.Element {
  const { show, closeSignoutModal } = props;
  const { t } = useTranslation();

  const handleModalHide = () => {
    closeSignoutModal();
  };

  const handleSignout = () => {
    closeSignoutModal();
    callGA({ event: 'sign_out', user_id: undefined });
    const redirect = () => {
      const fullPath =
        window.location.pathname + window.location.search;
      const redirected = pathAfterSignout(fullPath);

     // Remove the 'messages' query parameter while preserving other query params
      const cleaned = removeQueryParam(redirected, 'messages');
      window.location.href = cleaned;
    };
    void fetch(`${apiLocation}/signout`, {
      method: 'GET',
      credentials: 'include'
    })
      .then(redirect)
      .catch(redirect);
  };

  return (
    <Modal size='large' variant='danger' open={show} onClose={handleModalHide}>
      <Modal.Header showCloseButton={true} closeButtonClassNames='close'>
        {t('signout.heading')}
      </Modal.Header>
      <Modal.Body>
        <p>
          <span style={{ fontWeight: 'bold' }}>{t('signout.p1')}</span>
        </p>
        <p>{t('signout.p2')}</p>
        <hr />
        <Button
          block={true}
          variant='primary'
          data-test-label='cancel-signout'
          onClick={handleModalHide}
        >
          {t('signout.nevermind')}
        </Button>
        <Spacer size='xs' />
        <Button
          block={true}
          variant='danger'
          data-test-label='signout'
          onClick={handleSignout}
        >
          {t('signout.certain')}
        </Button>
      </Modal.Body>
    </Modal>
  );
}

SignoutModal.displayName = 'SignoutModal';

export default connect(mapStateToProps, mapDispatchToProps)(SignoutModal);

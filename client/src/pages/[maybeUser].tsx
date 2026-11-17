/* oxlint-disable filenames-simple/naming-convention */
import React from 'react';
import { isEmpty } from 'lodash-es';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { isBrowser } from '../../utils';
import PageHead from '../components/page-head';
import {
  createUserByNameSelector,
  userProfileFetchStateSelector
} from '../redux/selectors';
import ShowProfileOrFourOhFour from '../client-only-routes/show-profile-or-four-oh-four';

interface ProfilePageProps {
  params: {
    maybeUser: string;
  };
}

const ProfilePage = ({ params: { maybeUser } }: ProfilePageProps) => {
  return (
    // oxlint-disable-next-line typescript/ban-ts-comment
    // @ts-ignore - Redux connect() provides remaining props
    <ShowProfileOrFourOhFour maybeUser={maybeUser} />
  );
};

export default ProfilePage;

export function Head({ params: { maybeUser = '' } }: ProfilePageProps) {
  const { t } = useTranslation();
  const requestedUser: unknown = useSelector(
    createUserByNameSelector(maybeUser.toLowerCase())
  );
  const fetchState = useSelector(userProfileFetchStateSelector) as {
    pending: boolean;
  };
  const title =
    !isBrowser() || (isEmpty(requestedUser) && fetchState.pending)
      ? undefined
      : `${t(isEmpty(requestedUser) ? '404.page-not-found' : 'buttons.profile')} | freeCodeCamp.org`;

  return <PageHead title={title} />;
}

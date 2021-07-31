/* eslint-disable react/prop-types */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React from 'react';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import { Link } from 'gatsby';
import Spinner from 'react-spinkit';
import { useTranslation } from 'react-i18next';

import { isSignedInSelector, userFetchStateSelector } from '../../../redux';
import Login from './Login';

const mapStateToProps = createSelector(
  userFetchStateSelector,
  isSignedInSelector,
  (fetchState: any, isSignedIn: any) => ({
    isSignedIn,
    showLoading: fetchState.pending
  })
);

export interface UserStateProps {
  disableSettings?: boolean;
  email?: string;
  isSignedIn?: boolean;
  name?: string;
  showLoading?: boolean;
}
const UserState = (props: UserStateProps): JSX.Element => {
  const { isSignedIn, showLoading, disableSettings } = props;
  const { t } = useTranslation();

  if (disableSettings) {
    return <Login />;
  }
  if (showLoading) {
    return (
      <Spinner
        className='user-state-spinner'
        color='white'
        fadeIn='none'
        name='line-scale'
      />
    );
  }
  return isSignedIn ? (
    <Link className='top-right-nav-link' to='/settings'>
      {t('buttons.settings')}
    </Link>
  ) : (
    <Login />
  );
};

UserState.displayName = 'UserState';

export default connect(mapStateToProps)(UserState);

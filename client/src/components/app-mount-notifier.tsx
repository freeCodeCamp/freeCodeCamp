import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { useTranslation } from 'react-i18next';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import { appMount } from '../redux/actions';

interface AppMountNotifierProps {
  render: () => React.ReactNode;
  appMount: () => void;
}

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators({ appMount }, dispatch);

const AppMountNotifier = ({
  render,
  appMount
}: AppMountNotifierProps): JSX.Element => {
  useEffect(() => {
    appMount();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const { i18n } = useTranslation();

  return (
    <>
      <Helmet htmlAttributes={{ lang: i18n.language }} />
      {render()}
    </>
  );
};

AppMountNotifier.displayName = 'AppMountNotifier';

export default connect(null, mapDispatchToProps)(AppMountNotifier);

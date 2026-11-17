import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import { appMount } from '../redux/actions';

interface AppMountNotifierProps {
  children: React.ReactNode;
  appMount: () => void;
}

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators({ appMount }, dispatch);

const AppMountNotifier = ({
  children,
  appMount
}: AppMountNotifierProps): React.ReactNode => {
  useEffect(() => {
    appMount();
    // oxlint-disable-next-line react/exhaustive-deps
  }, []);

  const { i18n } = useTranslation();

  useEffect(() => {
    document.documentElement.lang = i18n.language;
  }, [i18n.language]);

  return children;
};

AppMountNotifier.displayName = 'AppMountNotifier';

export default connect(null, mapDispatchToProps)(AppMountNotifier);

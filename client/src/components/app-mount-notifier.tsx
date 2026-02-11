import React, { useEffect } from 'react';
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
}: AppMountNotifierProps): JSX.Element => {
  useEffect(() => {
    appMount();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <>{children}</>;
};

AppMountNotifier.displayName = 'AppMountNotifier';

export default connect(null, mapDispatchToProps)(AppMountNotifier);

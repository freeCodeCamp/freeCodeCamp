import { Component, ReactNode } from 'react';
import { AnyAction, bindActionCreators, Dispatch } from 'redux';
import { connect } from 'react-redux';

import { appMount } from '../redux';

const mapStateToProps = () => ({});
const mapDispatchToProps = (dispatch: Dispatch<AnyAction>) =>
  bindActionCreators({ appMount }, dispatch);

type AppMountNotifierProps = {
  appMount: () => void;
  render: () => ReactNode;
};

class AppMountNotifier extends Component<AppMountNotifierProps> {
  static displayName = 'AppMountNotifier';

  componentDidMount() {
    return this.props.appMount();
  }
  render() {
    return this.props.render();
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AppMountNotifier);

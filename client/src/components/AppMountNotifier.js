import { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { appMount } from '../redux';

const mapStateToProps = () => ({});
const mapDispatchToProps = dispatch =>
  bindActionCreators({ appMount }, dispatch);

class AppMountNotifer extends Component {
  componentDidMount() {
    return this.props.appMount();
  }
  render() {
    return this.props.render();
  }
}

AppMountNotifer.displayName = 'AppMountNotifier';
AppMountNotifer.propTypes = {
  appMount: PropTypes.func.isRequired,
  render: PropTypes.func.isRequired
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AppMountNotifer);

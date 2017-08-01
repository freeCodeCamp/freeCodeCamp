import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

import ns from './ns.json';
import {
  appMounted,
  fetchUser,
  updateAppLang,

  userSelector
} from './redux';

import Nav from './Nav';
import Toasts from './Toasts';

const mapDispatchToProps = {
  appMounted,
  fetchUser,
  updateAppLang
};

const mapStateToProps = state => {
  const { username } = userSelector(state);
  return {
    toast: state.app.toast,
    isSignedIn: !!username
  };
};

const propTypes = {
  appMounted: PropTypes.func.isRequired,
  children: PropTypes.node,
  fetchUser: PropTypes.func,
  isSignedIn: PropTypes.bool,
  params: PropTypes.object,
  toast: PropTypes.object,
  updateAppLang: PropTypes.func.isRequired
};

// export plain class for testing
export class FreeCodeCamp extends React.Component {
  componentWillReceiveProps(nextProps) {
    if (this.props.params.lang !== nextProps.params.lang) {
      this.props.updateAppLang(nextProps.params.lang);
    }
  }

  componentDidMount() {
    this.props.appMounted();
    if (!this.props.isSignedIn) {
      this.props.fetchUser();
    }
  }

  render() {
    // we render nav after the content
    // to allow the panes to update
    // redux store, which will update the bin
    // buttons in the nav
    return (
      <div className={ `${ns}-container` }>
        { this.props.children }
        <Nav />
        <Toasts />
      </div>
    );
  }
}

FreeCodeCamp.displayName = 'freeCodeCamp';
FreeCodeCamp.propTypes = propTypes;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FreeCodeCamp);

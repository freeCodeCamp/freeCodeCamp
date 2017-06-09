import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

import ns from './ns.json';
import {
  fetchUser,
  updateAppLang,

  userSelector
} from './redux';

import Nav from './Nav';
import Toasts from './Toasts';

const mapDispatchToProps = {
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
    if (!this.props.isSignedIn) {
      this.props.fetchUser();
    }
  }

  render() {
    return (
      <div className={ `${ns}-container` }>
        <Nav />
        { this.props.children }
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

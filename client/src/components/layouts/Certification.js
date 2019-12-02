import React, { Fragment, Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import ga from '../../analytics';
import { fetchUser, isSignedInSelector } from '../../redux';
import { createSelector } from 'reselect';

const mapStateToProps = createSelector(
  isSignedInSelector,
  isSignedIn => ({
    isSignedIn
  })
);

const mapDispatchToProps = { fetchUser };

class CertificationLayout extends Component {
  componentDidMount() {
    const { isSignedIn, fetchUser, pathname } = this.props;
    if (!isSignedIn) {
      fetchUser();
    }
    ga.pageview(pathname);
  }
  render() {
    return <Fragment>{this.props.children}</Fragment>;
  }
}

CertificationLayout.displayName = 'CertificationLayout';
CertificationLayout.propTypes = {
  children: PropTypes.any,
  fetchUser: PropTypes.func.isRequired,
  isSignedIn: PropTypes.bool,
  pathname: PropTypes.string.isRequired
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CertificationLayout);

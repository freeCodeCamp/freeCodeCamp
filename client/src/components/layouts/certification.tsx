import React, { Component } from 'react';
import { connect } from 'react-redux';

import { createSelector } from 'reselect';
import { fetchUser } from '../../redux/actions';
import { isSignedInSelector } from '../../redux/selectors';

interface CertificationProps {
  children?: React.ReactNode;
  fetchUser: () => void;
  isSignedIn?: boolean;
  pathname: string;
}

const mapStateToProps = createSelector(isSignedInSelector, isSignedIn => ({
  isSignedIn
}));

const mapDispatchToProps = { fetchUser };

class CertificationLayout extends Component<CertificationProps> {
  static displayName = 'CertificationLayout';
  componentDidMount() {
    document.body.classList.remove('dark-palette');
    document.body.classList.add('light-palette');
    const { isSignedIn, fetchUser } = this.props;
    if (!isSignedIn) {
      fetchUser();
    }
  }

  render(): React.ReactNode {
    const { children } = this.props;

    return children;
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CertificationLayout);

import React, { Component } from 'react';
import Helmet from 'react-helmet';
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
    const { isSignedIn, fetchUser } = this.props;
    if (!isSignedIn) {
      fetchUser();
    }
  }

  render(): JSX.Element {
    const { children } = this.props;

    return (
      <>
        <Helmet bodyAttributes={{ class: 'light-palette' }} />
        {children}
      </>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CertificationLayout);

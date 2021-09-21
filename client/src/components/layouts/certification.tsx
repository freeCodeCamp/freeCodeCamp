import React, { Component } from 'react';
import Helmet from 'react-helmet';
import { connect } from 'react-redux';

import { createSelector } from 'reselect';
import { fetchUser, isSignedInSelector, executeGA } from '../../redux';

interface CertificationProps {
  children?: React.ReactNode;
  executeGA?: (args: { type: string; data: string }) => void;
  fetchUser: () => void;
  isSignedIn?: boolean;
  pathname: string;
}

const mapStateToProps = createSelector(isSignedInSelector, isSignedIn => ({
  isSignedIn
}));

const mapDispatchToProps = { fetchUser, executeGA };

class CertificationLayout extends Component<CertificationProps> {
  static displayName = 'CertificationLayout';
  componentDidMount() {
    const { isSignedIn, fetchUser, pathname } = this.props;
    if (!isSignedIn) {
      fetchUser();
    }
    if (this.props.executeGA) {
      this.props.executeGA({ type: 'page', data: pathname });
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

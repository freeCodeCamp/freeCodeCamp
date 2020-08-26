import React, { Fragment, Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { fetchUser, isSignedInSelector, executeGA } from '../../redux';
import { createSelector } from 'reselect';
import Helmet from 'react-helmet';

const mapStateToProps = createSelector(
  isSignedInSelector,
  isSignedIn => ({
    isSignedIn
  })
);

const mapDispatchToProps = { fetchUser, executeGA };

class CertificationLayout extends Component {
  componentDidMount() {
    const { isSignedIn, fetchUser, pathname } = this.props;
    if (!isSignedIn) {
      fetchUser();
    }
    this.props.executeGA({ type: 'page', data: pathname });
  }

  render() {
    const { children, theme = 'default', useTheme = true } = this.props;

    return (
      <Fragment>
        <Helmet
          bodyAttributes={{
            class: useTheme
              ? `${theme === 'default' ? 'light-palette' : 'dark-palette'}`
              : 'light-palette'
          }}
        ></Helmet>
        {children}
      </Fragment>
    );
  }
}

CertificationLayout.displayName = 'CertificationLayout';
CertificationLayout.propTypes = {
  children: PropTypes.any,
  executeGA: PropTypes.func,
  fetchUser: PropTypes.func.isRequired,
  isSignedIn: PropTypes.bool,
  pathname: PropTypes.string.isRequired,
  theme: PropTypes.string,
  useTheme: PropTypes.bool
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CertificationLayout);

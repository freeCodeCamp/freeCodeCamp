import React, { Fragment, Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { createSelector } from 'reselect';
import Helmet from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';

import { fetchUser, isSignedInSelector } from '../redux';
import { flashMessagesSelector, removeFlashMessage } from './Flash/redux';
import Flash from './Flash';
import Header from './Header';

import './global.css';
import './layout.css';
import './night.css';

const propTypes = {
  children: PropTypes.node.isRequired,
  disableSettings: PropTypes.bool,
  fetchUser: PropTypes.func.isRequired,
  flashMessages: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      type: PropTypes.string,
      message: PropTypes.string
    })
  ),
  hasMessages: PropTypes.bool,
  isSignedIn: PropTypes.bool,
  landingPage: PropTypes.bool,
  removeFlashMessage: PropTypes.func.isRequired
};

const mapStateToProps = createSelector(
  isSignedInSelector,
  flashMessagesSelector,
  (isSignedIn, flashMessages) => ({
    isSignedIn,
    flashMessages,
    hasMessages: !!flashMessages.length
  })
);
const mapDispatchToProps = dispatch =>
  bindActionCreators({ fetchUser, removeFlashMessage }, dispatch);

class Layout extends Component {
  componentDidMount() {
    if (!this.props.isSignedIn) {
      this.props.fetchUser();
    }
  }

  render() {
    const {
      children,
      disableSettings,
      hasMessages,
      flashMessages = [],
      removeFlashMessage,
      landingPage
    } = this.props;
    return (
      <StaticQuery
        query={graphql`
          query SiteTitleQuery {
            site {
              siteMetadata {
                title
              }
            }
          }
        `}
        render={data => (
          <Fragment>
            <Helmet
              meta={[
                { name: 'description', content: 'Sample' },
                { name: 'keywords', content: 'sample, something' }
              ]}
              title={data.site.siteMetadata.title}
            />
            <Header disableSettings={disableSettings} />
            <main className={landingPage && 'landing-page'}>
              {hasMessages ? (
                <Flash messages={flashMessages} onClose={removeFlashMessage} />
              ) : null}
              {children}
            </main>
          </Fragment>
        )}
      />
    );
  }
}

Layout.propTypes = propTypes;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Layout);

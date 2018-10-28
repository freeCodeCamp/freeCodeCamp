import React, { Fragment, Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { createSelector } from 'reselect';
import Helmet from 'react-helmet';

import ga from '../../analytics';
import {
  fetchUser,
  isSignedInSelector,
  onlineStatusChange,
  isOnlineSelector
} from '../../redux';
import { flashMessagesSelector, removeFlashMessage } from '../Flash/redux';

import { isBrowser } from '../../../utils';

import OfflineWarning from '../OfflineWarning';
import Flash from '../Flash';
import Header from '../Header';

import './global.css';
import './layout.css';
import './night.css';

const metaKeywords = [
  'javascript',
  'js',
  'website',
  'web',
  'development',
  'free',
  'code',
  'camp',
  'course',
  'courses',
  'html',
  'css',
  'react',
  'redux',
  'api',
  'front',
  'back',
  'end',
  'learn',
  'tutorial',
  'programming'
];

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
  isOnline: PropTypes.bool.isRequired,
  isSignedIn: PropTypes.bool,
  landingPage: PropTypes.bool,
  onlineStatusChange: PropTypes.func.isRequired,
  removeFlashMessage: PropTypes.func.isRequired
};

const mapStateToProps = createSelector(
  isSignedInSelector,
  flashMessagesSelector,
  isOnlineSelector,
  (isSignedIn, flashMessages, isOnline) => ({
    isSignedIn,
    flashMessages,
    hasMessages: !!flashMessages.length,
    isOnline
  })
);
const mapDispatchToProps = dispatch =>
  bindActionCreators(
    { fetchUser, removeFlashMessage, onlineStatusChange },
    dispatch
  );

class DefaultLayout extends Component {
  constructor(props) {
    super(props);

    this.location = '';
  }

  componentDidMount() {
    if (!this.props.isSignedIn) {
      this.props.fetchUser();
    }
    const url = window.location.pathname + window.location.search;
    ga.pageview(url);

    window.addEventListener('online', this.updateOnlineStatus);
    window.addEventListener('offline', this.updateOnlineStatus);

    this.location = url;
  }

  componentDidUpdate() {
    const url = window.location.pathname + window.location.search;
    if (url !== this.location) {
      ga.pageview(url);
      this.location = url;
    }
  }

  componentWillUnmount() {
    window.removeEventListener('online', this.updateOnlineStatus);
    window.removeEventListener('offline', this.updateOnlineStatus);
  }

  updateOnlineStatus = () => {
    const { onlineStatusChange } = this.props;
    const isOnline =
      isBrowser() && 'navigator' in window ? window.navigator.onLine : null;
    return typeof isOnline === 'boolean' ? onlineStatusChange(isOnline) : null;
  };

  render() {
    const {
      children,
      disableSettings,
      hasMessages,
      flashMessages = [],
      removeFlashMessage,
      landingPage,
      isOnline,
      isSignedIn
    } = this.props;
    return (
      <Fragment>
        <Helmet
          meta={[
            {
              name: 'description',
              content:
                'Learn to code with free online courses, programming ' +
                'projects, and interview preparation for developer jobs.'
            },
            { name: 'keywords', content: metaKeywords.join(', ') }
          ]}
        />
        <Header disableSettings={disableSettings} />
        <div className={`default-layout ${landingPage ? 'landing-page' : ''}`}>
          <OfflineWarning isOnline={isOnline} isSignedIn={isSignedIn} />
          {hasMessages ? (
            <Flash messages={flashMessages} onClose={removeFlashMessage} />
          ) : null}
          {children}
        </div>
      </Fragment>
    );
  }
}

DefaultLayout.displayName = 'DefaultLayout';
DefaultLayout.propTypes = propTypes;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DefaultLayout);

import React, { Fragment, Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Helmet from 'react-helmet';

import ga from '../analytics';

import Header from '../components/Header';
import DonationModal from '../components/Donation';
import OfflineWarning from '../components/OfflineWarning';
import {
  fetchUser,
  userSelector,
  onlineStatusChange,
  isOnlineSelector,
  isSignedInSelector
} from '../redux/app';

import 'prismjs/themes/prism.css';
import 'react-reflex/styles.css';
import './global.css';
import './layout.css';
import { createSelector } from 'reselect';
import { isBrowser } from '../../utils';

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

const mapStateToProps = createSelector(
  userSelector,
  isSignedInSelector,
  isOnlineSelector,
  ({ theme = 'default' }, isSignedIn, isOnline) => ({
    theme,
    isSignedIn,
    isOnline
  })
);
const mapDispatchToProps = dispatch =>
  bindActionCreators({ fetchUser, onlineStatusChange }, dispatch);

const propTypes = {
  children: PropTypes.object,
  fetchUser: PropTypes.func.isRequired,
  isOnline: PropTypes.bool.isRequired,
  isSignedIn: PropTypes.bool.isRequired,
  onlineStatusChange: PropTypes.func.isRequired,
  theme: PropTypes.string
};

class Layout extends Component {
  state = {
    location: ''
  };

  componentDidMount() {
    this.props.fetchUser();
    const url = window.location.pathname + window.location.search;
    ga.pageview(url);

    window.addEventListener('online', this.updateOnlineStatus);
    window.addEventListener('offline', this.updateOnlineStatus);

    /* eslint-disable react/no-did-mount-set-state */
    // this is for local location tracking only, no re-rendering required
    this.setState({
      location: url
    });
  }

  componentDidUpdate() {
    const url = window.location.pathname + window.location.search;
    if (url !== this.state.location) {
      ga.pageview(url);
      /* eslint-disable react/no-did-update-set-state */
      // this is for local location tracking only, no re-rendering required
      this.setState({
        location: url
      });
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
    const { children, theme, isOnline, isSignedIn } = this.props;
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
        <Header />
        <div className={'app-wrapper ' + theme}>
          <OfflineWarning isOnline={isOnline} isSignedIn={isSignedIn} />
          <main>{children}</main>
        </div>
        <DonationModal />
      </Fragment>
    );
  }
}

Layout.propTypes = propTypes;

export default connect(mapStateToProps, mapDispatchToProps)(Layout);

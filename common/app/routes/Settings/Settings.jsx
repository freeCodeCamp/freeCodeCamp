import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';

import {
  Button,
  Row,
  Col,
  FormControl,
  ControlLabel
} from 'react-bootstrap';

import AccountSettings from './Account-Settings.jsx';
import EmailSettings from './Email-Settings.jsx';
import InternetSettings from './Internet-Settings.jsx';
import PortfolioSettings from './Portfolio-Settings.jsx';
import ProjectSettings from './Project-Settings.jsx';
import SettingsSkeleton from './Settings-Skeleton.jsx';
import UpdateEmail from './routes/update-email';

import { toggleUserFlag, showUpdateEmailViewSelector } from './redux';
import {
  toggleNightMode,
  updateTitle,

  signInLoadingSelector,
  userSelector,
  themeSelector,
  hardGoTo
} from '../../redux';
import ChildContainer from '../../Child-Container.jsx';

const mapDispatchToProps = {
  updateTitle,
  toggleNightMode,
  toggleIsAvailableForHire: () => toggleUserFlag('isAvailableForHire'),
  toggleIsLocked: () => toggleUserFlag('isLocked'),
  toggleQuincyEmail: () => toggleUserFlag('sendQuincyEmail'),
  toggleNotificationEmail: () => toggleUserFlag('sendNotificationEmail'),
  toggleMonthlyEmail: () => toggleUserFlag('sendMonthlyEmail')
};

const mapStateToProps = createSelector(
  userSelector,
  themeSelector,
  signInLoadingSelector,
  showUpdateEmailViewSelector,
  (
    {
      username,
      bio,
      name,
      picture,
      githubURL,
      email,
      isAvailableForHire,
      isLocked,
      isGithubCool,
      isTwitter,
      isLinkedIn,
      sendMonthlyEmail,
      sendNotificationEmail,
      sendQuincyEmail
    },
    theme,
    showLoading,
    showUpdateEmailView
  ) => ({
    currentTheme: theme,
    isAvailableForHire,
    showLoading,
    username,
    name,
    email,
    isLocked,    
    isGithubCool,
    githubURL,
    isLinkedIn,
    isTwitter,
    sendMonthlyEmail,
    sendNotificationEmail,
    sendQuincyEmail,
    showUpdateEmailView,
    bio,
    picture
  })
);

const mapDispatchToProps = {
  hardGoTo,
  toggleIsAvailableForHire: () => toggleUserFlag('isAvailableForHire'),
  toggleIsLocked: () => toggleUserFlag('isLocked'),
  toggleMonthlyEmail: () => toggleUserFlag('sendMonthlyEmail'),
  toggleNightMode,
  toggleNotificationEmail: () => toggleUserFlag('sendNotificationEmail'),
  toggleQuincyEmail: () => toggleUserFlag('sendQuincyEmail'),
  updateTitle
};

const propTypes = {
  bio: PropTypes.string,
  children: PropTypes.element,
  currentTheme: PropTypes.string,
  email: PropTypes.string,
  hardGoTo: PropTypes.func.isRequired,
  githubURL: PropTypes.string,
  initialLang: PropTypes.string,
  isAvailableForHire: PropTypes.bool,
  isGithubCool: PropTypes.bool,
  isLinkedIn: PropTypes.bool,
  isLocked: PropTypes.bool,
  isTwitter: PropTypes.bool,
  lang: PropTypes.string,
  name: PropTypes.string,
  picture: PropTypes.string,
  sendMonthlyEmail: PropTypes.bool,
  sendNotificationEmail: PropTypes.bool,
  sendQuincyEmail: PropTypes.bool,
  showLoading: PropTypes.bool,
  showUpdateEmailView: PropTypes.bool,
  theme: PropTypes.string,
  toggleIsAvailableForHire: PropTypes.func.isRequired,
  toggleIsLocked: PropTypes.func.isRequired,
  toggleMonthlyEmail: PropTypes.func.isRequired,
  toggleNightMode: PropTypes.func.isRequired,
  toggleNotificationEmail: PropTypes.func.isRequired,
  toggleQuincyEmail: PropTypes.func.isRequired,
  updateMyLang: PropTypes.func,
  updateTitle: PropTypes.func.isRequired,
  username: PropTypes.string
};

export class Settings extends React.Component {
  constructor(...props) {
    super(...props);
    this.updateMyLang = this.updateMyLang.bind(this);
  }

  updateMyLang(e) {
    e.preventDefault();
    const lang = e.target.value;
    this.props.updateMyLang(lang);
  }

  componentWillMount() {
    this.props.updateTitle('Settings');
  }
  componentWillReceiveProps({ username, showLoading, hardGoTo }) {
    if (!username && !showLoading) {
      hardGoTo('/signup');
    }
  }

  render() {
    const {
      bio,
      currentTheme,
      email,
      githubURL,
      isLocked,
      // isAvailableForHire,
      // isGithubCool,
      // isLinkedIn,
      // isTwitter,
      name,
      picture,
      sendMonthlyEmail,
      sendNotificationEmail,
      sendQuincyEmail,
      showLoading,
      showUpdateEmailView,
      // toggleIsAvailableForHire,
      toggleIsLocked,
      toggleMonthlyEmail,
      toggleNightMode,
      toggleNotificationEmail,
      toggleQuincyEmail,
      username
    } = this.props;

    if (!username && !showLoading) {
      return <SettingsSkeleton />;
    }

    if (children) {
      return (
        <ChildContainer>
          { children }
        </ChildContainer>
      );
    }

    return (
      <ChildContainer>
        <div className='container settings-container'>
          <h2>Account Settings</h2>

          <br />

          <AccountSettings
            bio={ bio }
            currentTheme={ currentTheme }
            isLocked={ isLocked }
            name={ name }
            picture={ picture }
            toggleIsLocked={ toggleIsLocked }
            toggleNightMode={ toggleNightMode }
            username={ username }
          />

          <hr />

          <h2>Email Settings</h2>

          <br />

          <EmailSettings
            email={ email }
            sendMonthlyEmail={ sendMonthlyEmail }
            sendNotificationEmail={ sendNotificationEmail }
            sendQuincyEmail={ sendQuincyEmail }
            toggleMonthlyEmail={ toggleMonthlyEmail }
            toggleNotificationEmail={ toggleNotificationEmail }
            toggleQuincyEmail={ toggleQuincyEmail }
          />

          <hr />

          <h2>Your internet presence</h2>

          <br />

          <InternetSettings githubURL={ githubURL } />

          <hr />

          <h2>Your FreeCodeCamp Projects</h2>
          <br />
          <p>
            Add links to the live demos of your projects as you finish them.
            Then, once you have added all 5 projects required for a certificate,
            you can claim it.
          </p>
          
          <ProjectSettings></ProjectSettings>

          <br />

          <hr />

          <h2>Your Portfolio</h2>
          <p>
            Share your non-FreeCodeCamp projects, articles or accepted
            pull requests:
          </p>
          
          <PortfolioSettings></PortfolioSettings>

          <hr />

          <h2>Timeline</h2>
        </div>
      </ChildContainer>
    );
  }
}

Settings.displayName = 'Settings';
Settings.propTypes = propTypes;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Settings);

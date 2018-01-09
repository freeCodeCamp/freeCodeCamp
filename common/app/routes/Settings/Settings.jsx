import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';

import ns from './ns.json';
import AccountSettings from './components/Account-Settings.jsx';
import EmailSettings from './components/Email-Settings.jsx';
import InternetSettings from './components/Internet-Settings.jsx';
import PortfolioSettings from './components/Portfolio-Settings.jsx';
import ProjectSettings from './components/Project-Settings.jsx';
import SettingsSkeleton from './components/Settings-Skeleton.jsx';
import JobSettings from './components/Job-Settings.jsx';
import LanguageSettings from './components/Language-Settings.jsx';
import ChildContainer from '../../Child-Container.jsx';
import {
  updateTitle,
  signInLoadingSelector,
  userSelector,
  hardGoTo
} from '../../redux';

const mapStateToProps = createSelector(
  userSelector,
  signInLoadingSelector,
  ({ username }, showLoading) => ({
    showLoading,
    username
  })
);

const mapDispatchToProps = {
  hardGoTo,
  updateTitle
};

const propTypes = {
  hardGoTo: PropTypes.func.isRequired,
  showLoading: PropTypes.bool,
  updateTitle: PropTypes.func.isRequired,
  username: PropTypes.string
};

class Settings extends React.Component {

  componentDidMount() {
    this.props.updateTitle('Settings');
  }
  componentWillReceiveProps({ username, showLoading, hardGoTo }) {
    if (!username && !showLoading) {
      hardGoTo('/signup');
    }
  }

  render() {
    const {
      showLoading,
      username
    } = this.props;

    if (!username && showLoading) {
      return <SettingsSkeleton />;
    }

    return (
      <ChildContainer>
        <div className={`container ${ns}-container`}>
          <AccountSettings />
          <hr />
          <h2>Email Settings</h2>
          <br />
          <EmailSettings />
          <hr />
          <h2>Language Settings</h2>
          <br />
          <LanguageSettings />
          <hr />
          <h2>Your internet presence</h2>
          <br />
          <InternetSettings />
          <hr />
          <h2>Job Settings</h2>
          <br />
          <JobSettings />
          <hr />
          <PortfolioSettings/>
          <hr />
          <ProjectSettings/>
          <hr />
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

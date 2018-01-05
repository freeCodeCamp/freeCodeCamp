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

export class Settings extends React.Component {

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
          <h2>Account Settings</h2>
          <br />
          <AccountSettings />
          <hr />
          <h2>Email Settings</h2>
          <br />
          <EmailSettings />
          <hr />
          <h2>Your internet presence</h2>
          <br />
          <InternetSettings />
          <hr />
          <h2>Your FreeCodeCamp Projects</h2>
          <br />
          <p>
            Add links to the live demos of your projects as you finish them.
            Then, once you have added all 5 projects required for a certificate,
            you can claim it.
          </p>
          <ProjectSettings/>
          <br />
          <hr />
          <h2>Your Portfolio</h2>
          <p>
            Share your non-FreeCodeCamp projects, articles or accepted
            pull requests:
          </p>
          <PortfolioSettings/>
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

import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import { Button, Col, Grid, Row, Alert } from 'react-bootstrap';

import ns from './ns.json';
import AccountSettings from './components/Account-Settings.jsx';
import EmailSettings from './components/Email-Settings.jsx';
import InternetSettings from './components/Internet-Settings.jsx';
import PortfolioSettings from './components/Portfolio-Settings.jsx';
import ProjectSettings from './components/Project-Settings.jsx';
import JobSettings from './components/Job-Settings.jsx';
import LanguageSettings from './components/Language-Settings.jsx';
import DangerZone from './components/DangerZone.jsx';
import Honesty from './components/Honesty.jsx';
import ChildContainer from '../../Child-Container.jsx';
import { Link } from '../../Router';
import {
  updateTitle,
  signInLoadingSelector,
  userSelector,
  hardGoTo
} from '../../redux';
import { FullWidthRow, Loader } from '../../helperComponents';
import EmailForm from './components/EmailForm.jsx';

const mapStateToProps = createSelector(
  userSelector,
  signInLoadingSelector,
  ({ email, username }, showLoading) => ({
    email,
    showLoading,
    username
  })
);

const mapDispatchToProps = {
  hardGoTo,
  updateTitle
};

const propTypes = {
  email: PropTypes.string,
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

  renderNoEmail() {
    return (
      <ChildContainer>
        <Grid>
          <FullWidthRow>
            <h1>Settings</h1>
            <Alert bsStyle='info'>
              <p>
                We cannot find an email associated with your account.
                To access your account settings, we need you to verify
                an email address
              </p>
            </Alert>
          </FullWidthRow>
          <FullWidthRow>
            <EmailForm initialValues={{ email: '', confirmEmail: '' }} />
          </FullWidthRow>
        </Grid>
      </ChildContainer>
    );
  }

  render() {
    const {
      email,
      showLoading,
      username
    } = this.props;

    if (!username && showLoading) {
      return <Loader />;
    }

    if (!email && !showLoading) {
      return this.renderNoEmail();
    }
    return (
      <ChildContainer>
        <Grid>
          <div className={`container ${ns}-container`}>
            <FullWidthRow>
              <Link to={ `/${username}` }>
                <Button
                  block={ true }
                  bsSize='lg'
                  bsStyle='primary'
                  >
                  View my Public Profile
                </Button>
              </Link>
            </FullWidthRow>
            <FullWidthRow>
              <Button
                block={ true }
                bsSize='lg'
                bsStyle='primary'
                href='/logout'
                >
                Sign out of freeCodeCamp
              </Button>
            </FullWidthRow>
            <AccountSettings />
            <hr />
            <EmailSettings />
            <hr />
            <LanguageSettings />
            <hr />
            <InternetSettings />
            <hr />
            <JobSettings />
            <hr />
            <PortfolioSettings/>
            <hr />
            <Honesty />
            <hr />
            <ProjectSettings/>
            <hr />
            <DangerZone />
          </div>
        </Grid>
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

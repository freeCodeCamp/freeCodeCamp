import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import { Grid, Button } from '@freecodecamp/react-bootstrap';
import Helmet from 'react-helmet';

import { signInLoadingSelector, userSelector } from '../redux';
import { submitNewAbout, updateUserFlag } from '../redux/settings';

import Layout from '../components/Layout';
import Spacer from '../components/helpers/Spacer';
import Loader from '../components/helpers/Loader';
import FullWidthRow from '../components/helpers/FullWidthRow';
import About from '../components/settings/About';
import Privacy from '../components/settings/Privacy';
import Email from '../components/settings/Email';
import Internet from '../components/settings/Internet';

const propTypes = {
  about: PropTypes.string,
  email: PropTypes.string,
  githubProfile: PropTypes.string,
  isEmailVerified: PropTypes.bool,
  linkedin: PropTypes.string,
  location: PropTypes.string,
  name: PropTypes.string,
  picture: PropTypes.string,
  points: PropTypes.number,
  sendQuincyEmail: PropTypes.bool,
  showLoading: PropTypes.bool,
  submitNewAbout: PropTypes.func.isRequired,
  theme: PropTypes.string,
  toggleNightMode: PropTypes.func.isRequired,
  twitter: PropTypes.string,
  updateInternetSettings: PropTypes.func.isRequired,
  updateQuincyEmail: PropTypes.func.isRequired,
  username: PropTypes.string,
  website: PropTypes.string
};

const mapStateToProps = createSelector(
  signInLoadingSelector,
  userSelector,
  (
    showLoading,
    {
      username = '',
      about,
      email,
      sendQuincyEmail,
      isEmailVerified,
      picture,
      points,
      name,
      location,
      theme,
      githubProfile,
      linkedin,
      twitter,
      website
    }
  ) => ({
    email,
    sendQuincyEmail,
    isEmailVerified,
    showLoading,
    username,
    about,
    picture,
    points,
    name,
    theme,
    location,
    githubProfile,
    linkedin,
    twitter,
    website
  })
);

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      submitNewAbout,
      toggleNightMode: theme => updateUserFlag({ theme }),
      updateInternetSettings: updateUserFlag,
      updateQuincyEmail: sendQuincyEmail => updateUserFlag({ sendQuincyEmail })
    },
    dispatch
  );

function ShowSettings(props) {
  const {
    email,
    isEmailVerified,
    sendQuincyEmail,
    showLoading,
    username,
    about,
    picture,
    points,
    theme,
    location,
    name,
    submitNewAbout,
    toggleNightMode,
    updateQuincyEmail,
    githubProfile,
    linkedin,
    twitter,
    website,
    updateInternetSettings
  } = props;

  if (showLoading) {
    return (
      <Layout>
        <div className='loader-wrapper'>
          <Loader />
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <Helmet>
        <title>Settings | freeCodeCamp.org</title>
      </Helmet>
      <Grid>
        <Spacer size={2} />
        <FullWidthRow>
          <Button
            block={true}
            bsSize='lg'
            bsStyle='primary'
            className='btn-invert'
            href={`/${username}`}
            >
            Show me my public portfolio
          </Button>
          <Button
            block={true}
            bsSize='lg'
            bsStyle='primary'
            className='btn-invert'
            href={'/signout'}
            >
            Sign me out of freeCodeCamp
          </Button>
        </FullWidthRow>
        <Spacer />
        <h1 className='text-center'>{`Account Settings for ${username}`}</h1>
        <About
          about={about}
          currentTheme={theme}
          location={location}
          name={name}
          picture={picture}
          points={points}
          submitNewAbout={submitNewAbout}
          toggleNightMode={toggleNightMode}
          username={username}
        />
        <Spacer />
        <Privacy />
        <Spacer />
        <Email
          email={email}
          isEmailVerified={isEmailVerified}
          sendQuincyEmail={sendQuincyEmail}
          updateQuincyEmail={updateQuincyEmail}
        />
        <Spacer />
        <Internet
          githubProfile={githubProfile}
          linkedin={linkedin}
          twitter={twitter}
          updateInternetSettings={updateInternetSettings}
          website={website}
        />
        <Spacer />
        {/* <PortfolioSettings />
        <Spacer />
        <Honesty />
        <Spacer />
        <CertificationSettings />
        <Spacer />
<DangerZone /> */}
      </Grid>
    </Layout>
  );
}

ShowSettings.displayName = 'ShowSettings';
ShowSettings.propTypes = propTypes;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ShowSettings);

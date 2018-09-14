import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import { Grid, Button } from '@freecodecamp/react-bootstrap';

import { signInLoadingSelector, userSelector } from '../redux';
import { submitNewAbout } from '../redux/settings';

import Layout from '../components/Layout';
import Spacer from '../components/helpers/Spacer';
import Loader from '../components/helpers/Loader';
import { FullWidthRow } from '../components/helpers';
import About from '../components/settings/About';

const propTypes = {
  about: PropTypes.string,
  location: PropTypes.string,
  name: PropTypes.string,
  picture: PropTypes.string,
  points: PropTypes.number,
  showLoading: PropTypes.bool,
  submitNewAbout: PropTypes.func.isRequired,
  theme: PropTypes.string,
  username: PropTypes.string
};

const mapStateToProps = createSelector(
  signInLoadingSelector,
  userSelector,
  (
    showLoading,
    { username = '', about, picture, points, name, location, theme }
  ) => ({
    showLoading,
    username,
    about,
    picture,
    points,
    name,
    theme,
    location
  })
);

const mapDispatchToProps = dispatch =>
  bindActionCreators({ submitNewAbout }, dispatch);

function ShowSettings(props) {
  const {
    showLoading,
    username,
    about,
    picture,
    points,
    theme,
    location,
    name,
    submitNewAbout
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
          username={username}
        />
        <Spacer />
        {/* <PrivacySettings />
        <Spacer />
        <EmailSettings />
        <Spacer />
        <InternetSettings />
        <Spacer />
        <PortfolioSettings />
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

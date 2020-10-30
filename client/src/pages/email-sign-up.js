import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import SectionHeader from '../components/settings/SectionHeader';
import IntroDescription from '../components/Intro/components/IntroDescription';

import { Row, Col, Button, Grid } from '@freecodecamp/react-bootstrap';
import Helmet from 'react-helmet';
import { createSelector } from 'reselect';

import { ButtonSpacer, Spacer } from '../components/helpers';
import { acceptTerms, userSelector } from '../redux';
import createRedirect from '../components/createRedirect';

import './email-sign-up.css';

const propTypes = {
  acceptTerms: PropTypes.func.isRequired,
  acceptedPrivacyTerms: PropTypes.bool,
  isSignedIn: PropTypes.bool
};

const mapStateToProps = createSelector(
  userSelector,
  ({ acceptedPrivacyTerms }) => ({
    acceptedPrivacyTerms
  })
);
const mapDispatchToProps = dispatch =>
  bindActionCreators({ acceptTerms }, dispatch);
const RedirectToLearn = createRedirect('/learn');

class AcceptPrivacyTerms extends Component {
  componentWillUnmount() {
    // if a user navigates away from here we should set acceptedPrivacyTerms
    // to true (so they do not get pulled back) without changing their email
    // preferences (hence the null payload)
    // This ensures the user has to click the checkbox and then click the
    // 'Continue...' button to sign up.
    if (!this.props.acceptedPrivacyTerms) {
      this.props.acceptTerms(null);
    }
  }

  onClick(isWeeklyEmailAccepted) {
    this.props.acceptTerms(isWeeklyEmailAccepted);
  }

  render() {
    const { acceptedPrivacyTerms } = this.props;
    if (acceptedPrivacyTerms) {
      return <RedirectToLearn />;
    }

    return (
      <Fragment>
        <Helmet>
          <title>Email Sign Up | freeCodeCamp.org</title>
        </Helmet>
        <Grid className='default-page-wrapper email-sign-up'>
          <SectionHeader>Email Sign Up</SectionHeader>
          <Row>
            <IntroDescription />
            <Col md={8} mdOffset={2} sm={10} smOffset={1} xs={12}>
              <strong>
                - Quincy Larson, the teacher who founded freeCodeCamp.org
              </strong>
              <Spacer />
              <p>
                By the way, each Friday I send an email with 5 links about
                programming and computer science. I send these to about 4
                million people. Would you like me to send this to you, too?
              </p>
              <Spacer />
            </Col>

            <Col md={4} mdOffset={2} sm={5} smOffset={1} xs={12}>
              <Button
                block={true}
                bsSize='lg'
                bsStyle='primary'
                className='big-cta-btn'
                onClick={() => this.onClick(true)}
              >
                Yes
              </Button>
              <ButtonSpacer />
            </Col>
            <Col md={4} sm={5} xs={12}>
              <Button
                block={true}
                bsSize='lg'
                bsStyle='primary'
                className='big-cta-btn'
                onClick={() => this.onClick(false)}
              >
                No thanks
              </Button>
              <ButtonSpacer />
            </Col>
            <Col xs={12}>
              <Spacer />
            </Col>
          </Row>
        </Grid>
      </Fragment>
    );
  }
}

AcceptPrivacyTerms.propTypes = propTypes;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AcceptPrivacyTerms);

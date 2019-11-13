import React, { Component, Fragment } from 'react';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import { Grid, Row, Col, Button } from '@freecodecamp/react-bootstrap';
import { uniq } from 'lodash';

import { apiLocation } from '../../../config/env.json';
import { postCreateHmacHash } from '../../utils/ajax';
import {
  signInLoadingSelector,
  userSelector,
  hardGoTo as navigate,
  isSignedInSelector
} from '../../redux';
// eslint-disable-next-line max-len
import DonateServicebotEmbed from '../../components/Donation/components/DonateServicebotEmbed';
import { Loader, Spacer, Link } from '../../components/helpers';

const propTypes = {
  donationEmails: PropTypes.array,
  email: PropTypes.string,
  isDonating: PropTypes.bool,
  isSignedIn: PropTypes.bool,
  navigate: PropTypes.func.isRequired,
  showLoading: PropTypes.bool.isRequired
};

const mapStateToProps = createSelector(
  isSignedInSelector,
  userSelector,
  signInLoadingSelector,
  (isSignedIn, { email, isDonating, donationEmails }, showLoading) => ({
    isSignedIn,
    email,
    isDonating,
    donationEmails,
    showLoading
  })
);

const mapDispatchToProps = {
  navigate
};

export class DonationSettingsPage extends Component {
  constructor(...props) {
    super(...props);

    this.state = {
      hash: null,
      currentSettingsEmail: null
    };

    this.getEmailHmacHash = this.getEmailHmacHash.bind(this);
    this.handleSelectDonationEmail = this.handleSelectDonationEmail.bind(this);
  }

  getEmailHmacHash(currentSettingsEmail) {
    return postCreateHmacHash({
      email: currentSettingsEmail
    })
      .then(response => {
        const data = response && response.data;
        this.setState({ hash: '' + data.hash, currentSettingsEmail });
      })
      .catch(error => {
        const data =
          error.response && error.response.data
            ? error.response.data
            : {
                error:
                  'Something is not right. Please contact team@freecodecamp.org'
              };
        console.error(data.error);
      });
  }

  handleSelectDonationEmail(e) {
    e.preventDefault();
    this.setState({ hash: null, currentSettingsEmail: null });
    this.getEmailHmacHash(e.currentTarget.value);
  }

  renderServicebotEmbed() {
    const { currentSettingsEmail, hash } = this.state;
    if (!hash && !currentSettingsEmail) {
      return null;
    }
    return (
      <div>
        <Spacer />
        <DonateServicebotEmbed email={currentSettingsEmail} hash={hash} />
      </div>
    );
  }

  renderDonationEmailsList() {
    const { donationEmails } = this.props;
    return (
      <div>
        {uniq(donationEmails).map((email, index) => (
          <div key={email + '-' + index}>
            <Button
              bsStyle='primary'
              className='btn btn-block'
              onClick={this.handleSelectDonationEmail}
              value={email}
            >
              {`Show donations for your ${email} email address`}
            </Button>
            <Spacer />
          </div>
        ))}
      </div>
    );
  }

  render() {
    const { showLoading, isSignedIn, isDonating, navigate } = this.props;

    if (showLoading) {
      return <Loader fullScreen={true} />;
    }

    if (!showLoading && !isSignedIn) {
      navigate(`${apiLocation}/signin?returnTo=donation/settings`);
      return <Loader fullScreen={true} />;
    }

    if (!showLoading && !isDonating) {
      navigate(`/donate`);
      return <Loader fullScreen={true} />;
    }

    return (
      <Fragment>
        <Helmet title='Manage your donation | freeCodeCamp.org' />
        <Grid>
          <Row>
            <Col sm={6} smOffset={3} xs={12}>
              <Spacer size={2} />
              <Button block={true} bsStyle='primary' href='/donate'>
                Go to donate page
              </Button>
            </Col>
          </Row>
          <Row>
            <Col sm={8} smOffset={2} xs={12}>
              <Spacer />
              <h1 className='text-center'>Manage your donations</h1>
              <Spacer />
              <h3 className='text-center'>
                Donations made using a credit or debit card
              </h3>
            </Col>
          </Row>
          <Row>
            <Col sm={6} smOffset={3} xs={12}>
              {this.renderDonationEmailsList()}
            </Col>
          </Row>
          <Row>
            <Col sm={8} smOffset={2} xs={12}>
              {this.renderServicebotEmbed()}
            </Col>
          </Row>
          <Row>
            <Col sm={8} smOffset={2} xs={12}>
              <hr />
              <h3 className='text-center'>Donations made using PayPal</h3>
              <p className='text-center'>
                You can update your PayPal donation{' '}
                <Link
                  external={true}
                  to='https://www.paypal.com/cgi-bin/webscr?cmd=_manage-paylist'
                >
                  directly on PayPal
                </Link>
                .
              </p>
            </Col>
          </Row>
          <Row>
            <Col sm={8} smOffset={2} xs={12}>
              <hr />
              <h3 className='text-center'>Still need help?</h3>
              <p>
                If you can't see your donation here, forward a donation receipt
                you have recieved in your email to team@freeCodeCamp.org and
                tell us how we can help you with it.
              </p>
              <Spacer />
            </Col>
          </Row>
        </Grid>
      </Fragment>
    );
  }
}

DonationSettingsPage.displayName = 'DonationSettingsPage';
DonationSettingsPage.propTypes = propTypes;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DonationSettingsPage);

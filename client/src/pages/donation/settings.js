import React, { Component, Fragment } from 'react';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import { Grid, Button, Panel } from '@freecodecamp/react-bootstrap';
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
import { Loader, Spacer, Link, FullWidthRow } from '../../components/helpers';
import SectionHeader from '../../components/settings/SectionHeader.js';

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
    return (
      <div className='servicebot-embed-panel'>
        {!hash || !currentSettingsEmail ? (
          <Panel>
            <Spacer />
            <p className='text-center'>
              Select the email associated to your donations above.
            </p>
          </Panel>
        ) : (
          <Panel>
            <Spacer />
            <DonateServicebotEmbed email={currentSettingsEmail} hash={hash} />
            <Spacer />
          </Panel>
        )}
      </div>
    );
  }

  renderDonationEmailsList() {
    const { donationEmails } = this.props;
    return uniq(donationEmails).map(email => (
      <Button
        bsStyle='primary'
        className='btn btn-block'
        key={email}
        onClick={this.handleSelectDonationEmail}
        value={email}
      >
        {`Show donations for your ${email} email address`}
      </Button>
    ));
  }

  render() {
    const { showLoading, isSignedIn, isDonating, navigate } = this.props;

    if (showLoading) {
      return <Loader fullScreen={true} />;
    }

    if (!isSignedIn) {
      navigate(`${apiLocation}/signin?returnTo=donation/settings`);
      return <Loader fullScreen={true} />;
    }

    if (!isDonating) {
      navigate(`/donate`);
      return <Loader fullScreen={true} />;
    }

    return (
      <Fragment>
        <Helmet title='Manage your donation | freeCodeCamp.org' />
        <Grid>
          <main>
            <Spacer size={2} />

            <FullWidthRow className='button-group'>
              <Link
                className='btn-invert btn btn-lg btn-primary btn-block'
                to={`/donate`}
              >
                Go to donate page
              </Link>
              <Link
                className='btn-invert btn btn-lg btn-primary btn-block'
                to={`/settings`}
              >
                Update my account settings
              </Link>
            </FullWidthRow>

            <FullWidthRow>
              <Spacer />
              <h1 className='text-center'>Manage your donations</h1>
            </FullWidthRow>

            <Spacer />
            <SectionHeader>
              Donations made using a credit or debit card
            </SectionHeader>
            <FullWidthRow className='button-group'>
              {this.renderDonationEmailsList()}
            </FullWidthRow>
            <Spacer />
            <FullWidthRow>{this.renderServicebotEmbed()}</FullWidthRow>

            <Spacer />
            <SectionHeader>Donations made using PayPal</SectionHeader>
            <FullWidthRow>
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
            </FullWidthRow>

            <Spacer />
            <SectionHeader>Still need help?</SectionHeader>
            <FullWidthRow>
              <p>
                If you can't see your donation here, forward a donation receipt
                you have recieved in your email to team@freeCodeCamp.org and
                tell us how we can help you with it.
              </p>
            </FullWidthRow>

            <Spacer />
          </main>
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

import React, { Component, Fragment } from 'react';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import { Grid, Row, Col } from '@freecodecamp/react-bootstrap';

import { stripePublicKey } from '../../config/env.json';
import { Spacer, Loader, FullWidthRow, Link } from '../components/helpers';
import DonateForm from '../components/Donation/components/DonateForm';
import DonateText from '../components/Donation/components/DonateText';
import { signInLoadingSelector, userSelector } from '../redux';
import { stripeScriptLoader } from '../utils/scriptLoaders';

const propTypes = {
  isDonating: PropTypes.bool,
  showLoading: PropTypes.bool.isRequired
};

const mapStateToProps = createSelector(
  userSelector,
  signInLoadingSelector,
  ({ isDonating }, showLoading) => ({
    isDonating,
    showLoading
  })
);

export class DonatePage extends Component {
  constructor(...props) {
    super(...props);
    this.state = {
      stripe: null,
      enableSettings: false
    };

    this.enableDonationSettingsPage = this.enableDonationSettingsPage.bind(
      this
    );
    this.handleStripeLoad = this.handleStripeLoad.bind(this);
  }

  componentDidMount() {
    if (window.Stripe) {
      this.handleStripeLoad();
    } else if (document.querySelector('#stripe-js')) {
      document
        .querySelector('#stripe-js')
        .addEventListener('load', this.handleStripeLoad);
    } else {
      stripeScriptLoader(this.handleStripeLoad);
    }
  }

  componentWillUnmount() {
    const stripeMountPoint = document.querySelector('#stripe-js');
    if (stripeMountPoint) {
      stripeMountPoint.removeEventListener('load', this.handleStripeLoad);
    }
  }

  handleStripeLoad() {
    // Create Stripe instance once Stripe.js loads
    console.info('stripe has loaded');
    this.setState(state => ({
      ...state,
      stripe: window.Stripe(stripePublicKey)
    }));
  }

  enableDonationSettingsPage(enableSettings = true) {
    this.setState({ enableSettings });
  }

  render() {
    const { stripe } = this.state;
    const { showLoading, isDonating } = this.props;
    const { enableSettings } = this.state;

    if (showLoading) {
      return <Loader fullScreen={true} />;
    }

    return (
      <Fragment>
        <Helmet title='Support our nonprofit | freeCodeCamp.org' />
        <Grid>
          <main>
            <Spacer />
            <FullWidthRow>
              <h1 className='text-center'>Become a Supporter</h1>
            </FullWidthRow>
            <Spacer />
            <Row>
              <Col md={6}>
                <DonateForm
                  enableDonationSettingsPage={this.enableDonationSettingsPage}
                  stripe={stripe}
                />
                <Row>
                  <Col sm={10} smOffset={1} xs={12}>
                    <Spacer size={2} />
                    <h3 className='text-center'>
                      Manage your existing donation
                    </h3>
                    <div className='button-group'>
                      {[
                        `Update your existing donation`,
                        `Download donation receipts`
                      ].map(donationSettingOps => (
                        <Link
                          className='btn btn-block'
                          disabled={!isDonating && !enableSettings}
                          key={donationSettingOps}
                          to='/donation/settings'
                        >
                          {donationSettingOps}
                        </Link>
                      ))}
                    </div>
                  </Col>
                </Row>
              </Col>
              <Col md={6}>
                <DonateText />
              </Col>
            </Row>
            <Spacer />
          </main>
        </Grid>
      </Fragment>
    );
  }
}

DonatePage.displayName = 'DonatePage';
DonatePage.propTypes = propTypes;

export default connect(mapStateToProps)(DonatePage);

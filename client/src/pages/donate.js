import React, { Component, Fragment } from 'react';
import Helmet from 'react-helmet';
import { StripeProvider, Elements } from 'react-stripe-elements';
import { Grid, Row, Col, Button } from '@freecodecamp/react-bootstrap';

import { stripePublicKey } from '../../config/env.json';

import Spacer from '../components/helpers/Spacer';
import DonateOther from '../components/Donation/components/DonateOther';
import DonateForm from '../components/Donation/components/DonateForm';
import DonateText from '../components/Donation/components/DonateText';
import PoweredByStripe from '../components/Donation/components/poweredByStripe';

import './index.css';

class DonatePage extends Component {
  constructor(...props) {
    super(...props);
    this.state = {
      stripe: null,
      showOtherOptions: false
    };
    this.handleStripeLoad = this.handleStripeLoad.bind(this);
    this.toggleOtherOptions = this.toggleOtherOptions.bind(this);
  }
  componentDidMount() {
    if (window.Stripe) {
      /* eslint-disable react/no-did-mount-set-state */
      this.setState(state => ({
        ...state,
        stripe: window.Stripe(stripePublicKey)
      }));
    } else {
      document
        .querySelector('#stripe-js')
        .addEventListener('load', this.handleStripeLoad);
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

  toggleOtherOptions() {
    this.setState(({ showOtherOptions }) => ({
      showOtherOptions: !showOtherOptions
    }));
  }

  render() {
    const { showOtherOptions, stripe } = this.state;
    return (
      <Fragment>
        <Helmet title='Support our nonprofit | freeCodeCamp.org' />
        <Spacer />
        <Grid>
          <Row>
            <Col sm={10} smOffset={1} xs={12}>
              <h2 className='text-center'>Become a Supporter</h2>
              <DonateText />
            </Col>
            <Col md={8} mdOffset={2} sm={10} smOffset={1} xs={12}>
              <hr />
              <StripeProvider stripe={stripe}>
                <Elements>
                  <DonateForm />
                </Elements>
              </StripeProvider>
              <div className='text-center'>
                <PoweredByStripe />
                <Spacer />
                <Button onClick={this.toggleOtherOptions}>
                  {`${
                    showOtherOptions ? 'Hide' : 'Show'
                  } other ways to donate.`}
                </Button>
              </div>
              <Spacer />
            </Col>
          </Row>
        </Grid>
        {showOtherOptions && <DonateOther />}
      </Fragment>
    );
  }
}

DonatePage.displayName = 'DonatePage';

export default DonatePage;

import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { StripeProvider, Elements } from 'react-stripe-elements';
import { Grid, Row, Col, Button } from '@freecodecamp/react-bootstrap';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';

import { stripePublicKey, apiLocation } from '../../config/env.json';
import { Spacer, Loader } from '../components/helpers';
import DonateOther from '../components/Donation/components/DonateOther';
import DonateForm from '../components/Donation/components/DonateForm';
import DonateText from '../components/Donation/components/DonateText';
import PoweredByStripe from '../components/Donation/components/poweredByStripe';
import { signInLoadingSelector, isSignedInSelector, hardGoTo } from '../redux';

const mapStateToProps = createSelector(
  signInLoadingSelector,
  isSignedInSelector,
  (showLoading, isSignedIn) => ({
    showLoading,
    isSignedIn
  })
);

const mapDispatchToProps = dispatch => ({
  navigate: location => dispatch(hardGoTo(location))
});

const propTypes = {
  isSignedIn: PropTypes.bool.isRequired,
  navigate: PropTypes.func.isRequired,
  showLoading: PropTypes.bool.isRequired
};

export class DonatePage extends Component {
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
    } else if (document.querySelector('#stripe-js')) {
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
    const { showLoading, isSignedIn, navigate } = this.props;

    if (showLoading) {
      return <Loader fullScreen={true} />;
    }

    if (!showLoading && !isSignedIn) {
      return navigate(`${apiLocation}/signin`);
    }

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
DonatePage.propTypes = propTypes;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DonatePage);

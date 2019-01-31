/* eslint-disable max-len */
import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { connect } from 'react-redux';
import { StripeProvider, Elements } from 'react-stripe-elements';
import { createSelector } from 'reselect';
import { Row, Col } from '@freecodecamp/react-bootstrap';

import { stripePublicKey } from '../../config/env.json';
import { userSelector } from '../redux';

import Spacer from '../components/helpers/Spacer';
import DonateForm from '../components/Donation/components/DonateForm';
import DonateCompletion from '../components/Donation/components/DonateCompletion';
import DonateText from '../components/Donation/components/DonateText';
import PoweredByStripe from '../components/Donation/components/poweredByStripe';

import './index.css';

const propTypes = {
  email: PropTypes.string,
  show: PropTypes.bool
};

const mapStateToProps = createSelector(userSelector, ({ email = '' }) => ({
  email
}));

class IndexPage extends Component {
  constructor(...props) {
    super(...props);
    this.state = {
      stripe: null
    };
    this.handleStripeLoad = this.handleStripeLoad.bind(this);
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

  renderCompletion(props) {
    return <DonateCompletion close={() => {}} {...props} />;
  }

  render() {
    const { email = '' } = this.props;
    return (
      <Fragment>
        <Helmet title='Support the freeCodeCamp.org nonprofit' />
        <Spacer />
        <Row>
          <Col sm={8} smOffset={2} xs={12}>
            <h2 className='text-center'>
              Become a Supporter
            </h2>
            <DonateText/>
          </Col>
          <Col sm={6} smOffset={3} xs={12}>
            <hr />
            <StripeProvider stripe={this.state.stripe}>
              <Elements>
                <DonateForm
                  email={email}
                  maybeButton={() => null}
                  renderCompletion={this.renderCompletion}
                />
              </Elements>
            </StripeProvider>
            <div className='text-center'>
              <a href='/donate-other'>Other ways to donate.</a>
              <Spacer />
              <PoweredByStripe />
            </div>
            <Spacer />
          </Col>
        </Row>
      </Fragment>
    );
  }
}

IndexPage.displayName = 'IndexPage';
IndexPage.propTypes = propTypes;

export default connect(mapStateToProps)(IndexPage);

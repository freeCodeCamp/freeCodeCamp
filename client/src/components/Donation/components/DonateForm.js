import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import { Button } from '@freecodecamp/react-bootstrap';
import { StripeProvider, Elements } from 'react-stripe-elements';
import { apiLocation } from '../../../../config/env.json';
import DonateFormChildViewForHOC from './DonateFormChildViewForHOC';
import {
  userSelector,
  isSignedInSelector,
  signInLoadingSelector,
  hardGoTo as navigate
} from '../../../redux';

import '../Donation.css';

const propTypes = {
  isSignedIn: PropTypes.bool,
  navigate: PropTypes.func.isRequired,
  showLoading: PropTypes.bool.isRequired,
  stripe: PropTypes.shape({
    createToken: PropTypes.func.isRequired
  })
};

const mapStateToProps = createSelector(
  userSelector,
  signInLoadingSelector,
  isSignedInSelector,
  ({ email, theme }, showLoading, isSignedIn) => ({
    email,
    theme,
    showLoading,
    isSignedIn
  })
);

const mapDispatchToProps = {
  navigate
};

const createOnClick = navigate => e => {
  e.preventDefault();
  return navigate(`${apiLocation}/signin?returnTo=donate`);
};
class DonateForm extends Component {
  constructor(...args) {
    super(...args);

    this.state = {
      donationAmount: 500
    };

    this.buttonSingleAmounts = [2500, 5000, 10000, 25000];
    this.buttonMonthlyAmounts = [500, 1000, 2000];
    this.buttonAnnualAmounts = [6000, 10000, 25000, 50000];

    this.isActive = this.isActive.bind(this);
    this.renderAmountButtons = this.renderAmountButtons.bind(this);
  }

  isActive(amount) {
    return this.state.donationAmount === amount;
  }

  renderAmountButtons() {
    return this.buttonAnnualAmounts.map(amount => (
      <Button
        className={`amount-value ${this.isActive(amount) ? 'active' : ''}`}
        href=''
        id={amount}
        key={'amount-' + amount}
        onClick={this.handleAmountClick}
        tabIndex='-1'
      >
        {`$${amount / 100}`}
      </Button>
    ));
  }

  render() {
    const { isSignedIn, navigate, showLoading, stripe } = this.props;

    if (!showLoading && !isSignedIn) {
      return (
        <div>
          <Button
            bsStyle='default'
            className='btn btn-block'
            onClick={createOnClick(navigate)}
          >
            Become a supporter
          </Button>
        </div>
      );
    }

    return (
      <div>
        <StripeProvider stripe={stripe}>
          <Elements>
            <DonateFormChildViewForHOC />
          </Elements>
        </StripeProvider>
      </div>
    );
  }
}

DonateForm.displayName = 'DonateForm';
DonateForm.propTypes = propTypes;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DonateForm);

import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import isEmail from 'validator/lib/isEmail';

import CardForm from './CardForm';
import { injectStripe } from 'react-stripe-elements';
import postUpdate$ from '../../../templates/Challenges/utils/postUpdate$';

const propTypes = {
  email: PropTypes.string,
  maybeButton: PropTypes.func.isRequired,
  renderCompletion: PropTypes.func.isRequired,
  stripe: PropTypes.shape({
    createToken: PropTypes.func.isRequired
  })
};
const initialSate = {
  donationAmount: 500,
  donationState: {
    processing: false,
    success: false,
    error: ''
  }
};

class DonateForm extends Component {
  constructor(...args) {
    super(...args);
    const [props] = args;

    this.state = {
      ...initialSate,
      email: props.email
    };

    this.buttonAmounts = [500, 1000, 3500, 5000, 25000];

    this.handleAmountClick = this.handleAmountClick.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.isActive = this.isActive.bind(this);
    this.renderAmountButtons = this.renderAmountButtons.bind(this);
    this.postDonation = this.postDonation.bind(this);
    this.resetDonation = this.resetDonation.bind(this);
  }

  handleAmountClick(e) {
    e.preventDefault();
    const donationAmount = parseInt(e.target.id, 10);
    return this.setState(state => ({
      ...state,
      donationAmount
    }));
  }

  handleEmailChange(e) {
    const newValue = e.target.value;
    return this.setState(state => ({
      ...state,
      email: newValue
    }));
  }

  handleSubmit() {
    const { email } = this.state;
    if (!email || !isEmail(email)) {
      return this.setState(state => ({
        ...state,
        donationState: {
          ...state.donationState,
          error:
            'We need a valid email address to send your donation tax receipt to'
        }
      }));
    }
    return this.props.stripe.createToken({ email }).then(({ error, token }) => {
      if (error) {
        return this.setState(state => ({
          ...state,
          donationState: {
            ...state.donationState,
            error:
              'Something went wrong processing your donation. Your card' +
              ' has not been charged.'
          }
        }));
      }
      return this.postDonation(token);
    });
  }

  isActive(amount) {
    return this.state.donationAmount === amount;
  }

  postDonation(token) {
    const { donationAmount: amount } = this.state;
    this.setState(state => ({
      ...state,
      donationState: {
        ...state.donationState,
        processing: true
      }
    }));
    return postUpdate$('/donate/charge-stripe', {
      token,
      amount
    }).subscribe(
      res =>
        this.setState(state => ({
          ...state,
          donationState: {
            ...state.donationState,
            processing: false,
            success: true,
            error: res.error
          }
        })),
      err =>
        this.setState(state => ({
          ...state,
          donationState: {
            ...state.donationState,
            processing: false,
            success: false,
            error: err.error
          }
        }))
    );
  }

  renderAmountButtons() {
    return this.buttonAmounts.map(amount => (
      <li key={'amount-' + amount}>
        <button
          className={`amount-value ${this.isActive(amount) ? 'active' : ''}`}
          id={amount}
          onClick={this.handleAmountClick}
          tabIndex='-1'
          >{`$${amount / 100}`}</button>
      </li>
    ));
  }

  renderDonateForm() {
    return (
      <Fragment>
        <p>
          freeCodeCamp is completely free. But it costs our nonprofit a lot of
          money to run it. Help us pay for servers. Set up a tax-deductible
          monthly donation you can afford.
        </p>
        <div id='donate-amount-panel'>
          <ul>{this.renderAmountButtons()}</ul>
        </div>
        {this.renderEmailInput()}
        <CardForm
          amount={this.state.donationAmount / 100}
          handleSubmit={this.handleSubmit}
        />
        {this.props.maybeButton()}
      </Fragment>
    );
  }

  renderEmailInput() {
    const { email } = this.state;
    return (
      <div className='donation-email-container'>
        <label>
          Email where we should send your donation tax receipt:
          <input
            onChange={this.handleEmailChange}
            placeholder='email@example.com'
            required={true}
            type='email'
            value={email}
          />
        </label>
      </div>
    );
  }

  resetDonation() {
    return this.setState(() => initialSate);
  }

  render() {
    const {
      donationState: { processing, success, error }
    } = this.state;
    const { renderCompletion } = this.props;
    if (processing || success || error) {
      return renderCompletion({
        processing,
        success,
        error,
        reset: this.resetDonation
      });
    }
    return this.renderDonateForm();
  }
}

DonateForm.displayName = 'DonateForm';
DonateForm.propTypes = propTypes;

export default injectStripe(DonateForm);

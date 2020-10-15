import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import isEmail from 'validator/lib/isEmail';
import {
  Button,
  ControlLabel,
  Form,
  FormControl,
  FormGroup,
  Alert
} from '@freecodecamp/react-bootstrap';
import { injectStripe } from 'react-stripe-elements';

import StripeCardForm from './StripeCardForm';
import DonateCompletion from './DonateCompletion';
import { userSelector } from '../../redux';

const propTypes = {
  defaultTheme: PropTypes.string,
  donationAmount: PropTypes.number.isRequired,
  donationDuration: PropTypes.string.isRequired,
  email: PropTypes.string,
  getDonationButtonLabel: PropTypes.func.isRequired,
  handleProcessing: PropTypes.func,
  isSignedIn: PropTypes.bool,
  onDonationStateChange: PropTypes.func,
  postChargeStripe: PropTypes.func,
  showCloseBtn: PropTypes.func,
  stripe: PropTypes.shape({
    createToken: PropTypes.func.isRequired
  }),
  theme: PropTypes.string
};

const mapStateToProps = createSelector(
  userSelector,
  ({ email, theme }) => ({ email, theme })
);

class DonateFormChildViewForHOC extends Component {
  constructor(...args) {
    super(...args);

    this.state = {
      isSubmissionValid: null,
      email: null,
      isEmailValid: true,
      isFormValid: false
    };

    this.getValidationState = this.getValidationState.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.postDonation = this.postDonation.bind(this);
    this.handleEmailBlur = this.handleEmailBlur.bind(this);
  }

  getUserEmail() {
    const { email: stateEmail } = this.state;
    const { email: propsEmail } = this.props;
    return stateEmail || propsEmail || '';
  }

  getValidationState(isFormValid) {
    this.setState(state => ({
      ...state,
      isFormValid
    }));
  }

  handleEmailChange(e) {
    const newValue = e.target.value;
    return this.setState({
      email: newValue,
      // reset validation
      isEmailValid: true
    });
  }

  handleSubmit(e) {
    e.preventDefault();

    const { isEmailValid, isFormValid } = this.state;

    if ((!isEmailValid, !isFormValid)) {
      return this.setState({
        isSubmissionValid: false
      });
    }

    this.setState({
      isSubmissionValid: null
    });

    const email = this.getUserEmail();
    if (!email || !isEmail(email)) {
      return this.props.onDonationStateChange({
        error:
          'We need a valid email address to which we can send your' +
          ' donation tax receipt.'
      });
    }
    return this.props.stripe.createToken({ email }).then(({ error, token }) => {
      if (error) {
        return this.props.onDonationStateChange({
          error:
            'Something went wrong processing your donation. Your card' +
            ' has not been charged.'
        });
      }
      return this.postDonation(token);
    });
  }

  postDonation(token) {
    const { donationAmount: amount, donationDuration: duration } = this.props;

    // scroll to top
    window.scrollTo(0, 0);

    // change the donation modal button label to close
    // or display the close button for the cert donation section
    if (this.props.handleProcessing) {
      this.props.handleProcessing(
        this.state.donationDuration,
        Math.round(amount / 100)
      );
    }

    return this.props.postChargeStripe({
      token,
      amount,
      duration
    });
  }

  renderCompletion(props) {
    return <DonateCompletion {...props} />;
  }

  handleEmailBlur() {
    const emailValue = this.state.email;
    const newValidation = isEmail(emailValue);
    return this.setState({
      isEmailValid: newValidation
    });
  }

  renderErrorMessage() {
    const { isEmailValid, isFormValid } = this.state;
    let message = '';
    if (!isEmailValid && !isFormValid)
      message = (
        <p>
          Please enter valid email address, credit card number, and expiration
          date.
        </p>
      );
    else if (!isEmailValid)
      message = <p>Please enter a valid email address.</p>;
    else
      message = (
        <p>Please enter valid credit card number and expiration date.</p>
      );

    return <Alert bsStyle='danger'>{message}</Alert>;
  }

  renderDonateForm() {
    const { isEmailValid, isSubmissionValid, email } = this.state;
    const { getDonationButtonLabel, theme, defaultTheme } = this.props;

    return (
      <Form className='donation-form' onSubmit={this.handleSubmit}>
        <div>{isSubmissionValid !== null ? this.renderErrorMessage() : ''}</div>
        <FormGroup className='donation-email-container'>
          <ControlLabel>
            Email (we'll send you a tax-deductible donation receipt):
          </ControlLabel>
          <FormControl
            className={!isEmailValid && email ? 'email--invalid' : ''}
            key='3'
            onBlur={this.handleEmailBlur}
            onChange={this.handleEmailChange}
            placeholder='me@example.com'
            required={true}
            type='text'
            value={this.state.email || ''}
          />
        </FormGroup>
        <StripeCardForm
          getValidationState={this.getValidationState}
          theme={defaultTheme ? defaultTheme : theme}
        />
        <Button
          block={true}
          bsStyle='primary'
          className='btn-cta'
          id='confirm-donation-btn'
          type='submit'
        >
          {getDonationButtonLabel()}
        </Button>
      </Form>
    );
  }

  componentWillReceiveProps({ email }) {
    if (this.state.email === null && email) {
      this.setState({ email });
    }
  }

  render() {
    return this.renderDonateForm();
  }
}

DonateFormChildViewForHOC.displayName = 'DonateFormChildViewForHOC';
DonateFormChildViewForHOC.propTypes = propTypes;

export default injectStripe(
  connect(mapStateToProps)(DonateFormChildViewForHOC)
);

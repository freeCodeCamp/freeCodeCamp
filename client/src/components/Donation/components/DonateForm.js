import React, { Component } from 'react';
import PropTypes from 'prop-types';
import isEmail from 'validator/lib/isEmail';
import {
  Button,
  ControlLabel,
  Form,
  FormControl,
  FormGroup
} from '@freecodecamp/react-bootstrap';
import { injectStripe } from 'react-stripe-elements';

import Spacer from '../../../components/helpers/Spacer';
import StripeCardForm from './StripeCardForm';
import { postJSON$ } from '../../../templates/Challenges/utils/ajax-stream.js';

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

    this.state = {
      ...initialSate,
      email: null,
      isFormValid: false
    };

    this.getUserEmail = this.getUserEmail.bind(this);
    this.getValidationState = this.getValidationState.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.postDonation = this.postDonation.bind(this);
    this.resetDonation = this.resetDonation.bind(this);
    this.submit = this.submit.bind(this);
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
    return this.setState(state => ({
      ...state,
      email: newValue
    }));
  }

  handleSubmit() {
    const email = this.getUserEmail();
    if (!email || !isEmail(email)) {
      return this.setState(state => ({
        ...state,
        donationState: {
          ...state.donationState,
          error:
            'We need a valid email address to which we can send your' +
            ' donation tax receipt.'
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

  postDonation(token) {
    const { donationAmount: amount } = this.state;
    this.setState(state => ({
      ...state,
      donationState: {
        ...state.donationState,
        processing: true
      }
    }));
    const chargeStripePath = '/unauthenticated/donate/charge-stripe';
    return postJSON$(chargeStripePath, {
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

  submit(e) {
    e.preventDefault();
    this.handleSubmit();
  }

  resetDonation() {
    return this.setState(() => initialSate);
  }

  renderDonateForm() {
    const { isFormValid } = this.state;
    return (
      <div>
        <Form className='donation-form' onSubmit={this.submit}>
          <FormGroup className='donation-email-container'>
            <ControlLabel>
              Email (we'll send you a tax-deductible donation receipt):
            </ControlLabel>
            <FormControl
                onChange={this.handleEmailChange}
                placeholder='me@example.com'
                required={true}
                type='text'
                value={this.getUserEmail()}
            />
          </FormGroup>
          <StripeCardForm getValidationState={this.getValidationState} />
          <Button
            block={true}
            bsSize='lg'
            bsStyle='primary'
            disabled={!isFormValid}
            id='confirm-donation-btn'
            type='submit'
            >
            Confirm your donation of $5 / month
          </Button>
          <Spacer />
        </Form>
        {this.props.maybeButton()}
      </div>
    );
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

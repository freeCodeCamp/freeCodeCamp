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
  FormGroup
} from '@freecodecamp/react-bootstrap';
import { injectStripe } from 'react-stripe-elements';

import StripeCardForm from './StripeCardForm';
import DonateCompletion from './DonateCompletion';
import { postChargeStripe } from '../../../utils/ajax';
import { userSelector } from '../../../redux';

const propTypes = {
  donationAmount: PropTypes.number.isRequired,
  donationDuration: PropTypes.string.isRequired,
  email: PropTypes.string,
  getDonationButtonLabel: PropTypes.func.isRequired,
  hideAmountOptionsCB: PropTypes.func.isRequired,
  isSignedIn: PropTypes.bool,
  stripe: PropTypes.shape({
    createToken: PropTypes.func.isRequired
  }),
  theme: PropTypes.string
};
const initialState = {
  donationState: {
    processing: false,
    success: false,
    error: ''
  }
};

const mapStateToProps = createSelector(
  userSelector,
  ({ email, theme }) => ({ email, theme })
);

class DonateFormChildViewForHOC extends Component {
  constructor(...args) {
    super(...args);

    this.state = {
      ...initialState,
      donationAmount: this.props.donationAmount,
      donationDuration: this.props.donationDuration,
      email: null,
      isFormValid: false
    };

    this.getUserEmail = this.getUserEmail.bind(this);
    this.getValidationState = this.getValidationState.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.postDonation = this.postDonation.bind(this);
    this.resetDonation = this.resetDonation.bind(this);
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

  handleSubmit(e) {
    e.preventDefault();
    this.hideAmountOptions(true);
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

  hideAmountOptions(hide) {
    const { hideAmountOptionsCB } = this.props;
    hideAmountOptionsCB(hide);
  }

  postDonation(token) {
    const { donationAmount: amount, donationDuration: duration } = this.state;
    this.setState(state => ({
      ...state,
      donationState: {
        ...state.donationState,
        processing: true
      }
    }));

    return postChargeStripe({
      token,
      amount,
      duration
    })
      .then(response => {
        const data = response && response.data;
        this.setState(state => ({
          ...state,
          donationState: {
            ...state.donationState,
            processing: false,
            success: true,
            error: data.error ? data.error : null
          }
        }));
      })
      .catch(error => {
        const data =
          error.response && error.response.data
            ? error.response.data
            : {
                error:
                  'Something is not right. Please contact team@freecodecamp.org'
              };
        this.setState(state => ({
          ...state,
          donationState: {
            ...state.donationState,
            processing: false,
            success: false,
            error: data.error
          }
        }));
      });
  }

  resetDonation() {
    return this.setState({ ...initialState });
  }

  renderCompletion(props) {
    return <DonateCompletion {...props} />;
  }

  renderDonateForm() {
    const { isFormValid } = this.state;
    const { theme, getDonationButtonLabel } = this.props;
    return (
      <Form className='donation-form' onSubmit={this.handleSubmit}>
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
        <StripeCardForm
          getValidationState={this.getValidationState}
          theme={theme}
        />
        <Button
          block={true}
          bsStyle='primary'
          disabled={!isFormValid}
          id='confirm-donation-btn'
          type='submit'
        >
          {getDonationButtonLabel()}
        </Button>
      </Form>
    );
  }

  componentWillReceiveProps({ donationAmount, donationDuration }) {
    this.setState({ donationAmount, donationDuration });
  }

  render() {
    const {
      donationState: { processing, success, error }
    } = this.state;
    if (processing || success || error) {
      return this.renderCompletion({
        processing,
        success,
        error,
        reset: this.resetDonation
      });
    }
    this.hideAmountOptions(false);
    return this.renderDonateForm();
  }
}

DonateFormChildViewForHOC.displayName = 'DonateFormChildViewForHOC';
DonateFormChildViewForHOC.propTypes = propTypes;

export default injectStripe(
  connect(mapStateToProps)(DonateFormChildViewForHOC)
);

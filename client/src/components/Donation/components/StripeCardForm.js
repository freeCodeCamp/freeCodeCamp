import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  CardNumberElement,
  CardExpiryElement,
  CardCVCElement
} from 'react-stripe-elements';
import { ControlLabel, FormGroup } from '@freecodecamp/react-bootstrap';

import '../Donation.css';

const propTypes = {
  getValidationState: PropTypes.func.isRequired
};

const style = {
  base: {
    color: '#0a0a23',
    fontSize: '18px'
  }
};

class StripeCardForm extends Component {
  constructor(...props) {
    super(...props);

    this.state = {
      validation: {
        cardNumber: {
          complete: false,
          error: null
        },
        cardExpiry: {
          complete: false,
          error: null
        },
        cardCvc: {
          complete: false,
          error: null
        }
      }
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.isValidInput = this.isValidInput.bind(this);
  }

  componentDidMount() {
    this.props.getValidationState(this.isValidInput());
  }

  handleInputChange(event) {
    const { elementType, error, complete } = event;
    return this.setState(
      state => ({
        ...state,
        validation: {
          ...state.validation,
          [elementType]: {
            error,
            complete
          }
        }
      }),
      () => this.props.getValidationState(this.isValidInput())
    );
  }

  isValidInput() {
    const { validation } = this.state;
    return Object.keys(validation)
      .map(key => validation[key])
      .every(({ complete, error }) => complete && !error);
  }

  render() {
    return (
      <div className='donation-elements'>
        <FormGroup>
          <ControlLabel>Your Card Number:</ControlLabel>
          <CardNumberElement
            className='form-control donate-input-element'
            onChange={this.handleInputChange}
            style={style}
          />
        </FormGroup>
        <FormGroup>
          <ControlLabel>Your Card Expiration Month:</ControlLabel>
          <CardExpiryElement
            className='form-control donate-input-element'
            onChange={this.handleInputChange}
            style={style}
          />
        </FormGroup>
        <FormGroup>
          <ControlLabel>Your Card CVC (3-digit security number):</ControlLabel>
          <CardCVCElement
            className='form-control donate-input-element'
            onChange={this.handleInputChange}
            style={style}
          />
        </FormGroup>
      </div>
    );
  }
}

StripeCardForm.displayName = 'StripeCardForm';
StripeCardForm.propTypes = propTypes;

export default StripeCardForm;

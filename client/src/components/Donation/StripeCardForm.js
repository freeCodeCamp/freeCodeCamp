import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { CardNumberElement, CardExpiryElement } from 'react-stripe-elements';
import {
  Row,
  Col,
  ControlLabel,
  FormGroup,
  Image
} from '@freecodecamp/react-bootstrap';

const propTypes = {
  getValidationState: PropTypes.func.isRequired,
  theme: PropTypes.string
};

const style = {
  base: {
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
    // set color based on theme
    style.base.color = this.props.theme === 'night' ? '#fff' : '#0a0a23';
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
          <ControlLabel>Expiration Date:</ControlLabel>
          <Row>
            <Col md={5} xs={12}>
              <CardExpiryElement
                className='form-control donate-input-element'
                onChange={this.handleInputChange}
                style={style}
              />
            </Col>
            <Col className='form-payments-wrapper' md={7} xs={12}>
              <Image
                alt='payment options'
                className='form-payment-methods'
                src={
                  'https://cdn.freecodecamp.org' +
                  '/platform/universal/form-payments.png'
                }
              />
            </Col>
          </Row>
        </FormGroup>
      </div>
    );
  }
}

StripeCardForm.displayName = 'StripeCardForm';
StripeCardForm.propTypes = propTypes;

export default StripeCardForm;

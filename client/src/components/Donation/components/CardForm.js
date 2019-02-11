import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button } from '@freecodecamp/react-bootstrap';

import StripCardForm from './StripeCardForm';

const propTypes = {
  amount: PropTypes.number.isRequired,
  handleSubmit: PropTypes.func.isRequired
};

class CardForm extends Component {
  constructor(...props) {
    super(...props);

    this.state = {
      isFormValid: false
    };

    this.getValidationState = this.getValidationState.bind(this);
    this.submit = this.submit.bind(this);
  }

  submit(e) {
    e.preventDefault();
    this.props.handleSubmit();
  }

  getValidationState(isFormValid) {
    this.setState(state => ({
      ...state,
      isFormValid
    }));
  }

  render() {
    const { amount } = this.props;
    const { isFormValid } = this.state;
    return (
      <form className='donation-form' onSubmit={this.submit}>
        <StripCardForm getValidationState={this.getValidationState} />
        <Button
          block={true}
          bsSize='lg'
          bsStyle='primary'
          disabled={!isFormValid}
          type='submit'
          >
          {`Confirm Monthly Donation of $${amount}`}
        </Button>
      </form>
    );
  }
}
CardForm.displayName = 'CardForm';
CardForm.propTypes = propTypes;

export default CardForm;

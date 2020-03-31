/* eslint-disable camelcase */

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

import { scriptLoader, scriptRemover } from '../../utils/scriptLoaders';

export class PayPalButtonScriptLoader extends Component {
  state = { isSdkLoaded: false, isSubscription: true };

  static getDerivedStateFromProps(props, state) {
    const { isSubscription } = props;
    if (isSubscription !== state.isSubscription) {
      return { isSubscription: isSubscription };
    }
    return null;
  }

  componentDidMount() {
    if (!window.paypal) {
      this.loadScript(this.props.isSubscription);
    }
  }

  componentDidUpdate(prevProps) {
    if (prevProps.isSubscription !== this.state.isSubscription) {
      console.log('reload');
      // eslint-disable-next-line react/no-did-update-set-state
      this.setState({ isSdkLoaded: false });
      this.loadScript(this.state.isSubscription, true);
    }
  }

  loadScript(subscription, deleteScript) {
    if (deleteScript) scriptRemover('paypal-sdk');
    let queries = `?client-id=${this.props.clinetId}&disable-funding=card`;
    if (subscription) queries += '&vault=true';
    console.log(queries);

    scriptLoader(
      'paypal-sdk',
      'paypal-sdk',
      true,
      `https://www.paypal.com/sdk/js${queries}`,
      this.OnScriptLoad
    );
  }

  OnScriptLoad = () => {
    console.log('paypal-loaded');
    this.setState({ isSdkLoaded: true });
  };

  render() {
    const { isSdkLoaded, isSubscription } = this.state;
    const {
      onApprove,
      onError,
      onCancel,
      createSubscription,
      amount,
      createOrder,
      style
    } = this.props;
    if (!isSdkLoaded) return <h1>loading...</h1>;

    console.log(amount);

    const Button = window.paypal.Buttons.driver('react', {
      React,
      ReactDOM
    });

    return (
      <Button
        createOrder={isSubscription ? null : createOrder}
        createSubscription={isSubscription ? createSubscription : null}
        onApprove={onApprove}
        onCancel={onCancel}
        onError={onError}
        style={style}
      />
    );
  }
}

const propTypes = {
  amount: PropTypes.number,
  clinetId: PropTypes.string,
  createOrder: PropTypes.string,
  createSubscription: PropTypes.func,
  donationAmount: PropTypes.number,
  donationDuration: PropTypes.string,
  handleProcessing: PropTypes.func,
  isDonating: PropTypes.bool,
  isSubscription: PropTypes.bool,
  onApprove: PropTypes.func,
  onCancel: PropTypes.func,
  onDonationStateChange: PropTypes.func,
  onError: PropTypes.func,
  skipAddDonation: PropTypes.bool,
  style: PropTypes.object
};

PayPalButtonScriptLoader.displayName = 'PayPalButtonScriptLoader';
PayPalButtonScriptLoader.propTypes = propTypes;

export default PayPalButtonScriptLoader;

# React Stripe.js

React components for
[Stripe.js and Elements](https://stripe.com/docs/stripe-js).

[![build status](https://img.shields.io/travis/stripe/react-stripe-js/master.svg?style=flat-square)](https://travis-ci.org/stripe/react-stripe-js)
[![npm version](https://img.shields.io/npm/v/@stripe/react-stripe-js.svg?style=flat-square)](https://www.npmjs.com/package/@stripe/react-stripe-js)

## Requirements

The minimum supported version of React is v16.8. If you use an older version,
upgrade React to use this library. If you prefer not to upgrade your React
version, we recommend using legacy
[`react-stripe-elements`](https://github.com/stripe/react-stripe-elements).

## Getting started

- [Learn how to accept a payment](https://stripe.com/docs/payments/accept-a-payment#web)
- [Add React Stripe.js to your React app](https://stripe.com/docs/stripe-js/react#setup)
- [Try it out using CodeSandbox](https://codesandbox.io/s/react-stripe-official-q1loc?fontsize=14&hidenavigation=1&theme=dark)

## Documentation

- [React Stripe.js reference](https://stripe.com/docs/stripe-js/react)
- [Migrate from `react-stripe-elements`](docs/migrating.md)
- [Legacy `react-stripe-elements` docs](https://github.com/stripe/react-stripe-elements/#react-stripe-elements)
- [Examples](examples)

### Minimal example

First, install React Stripe.js and
[Stripe.js](https://github.com/stripe/stripe-js).

```sh
npm install @stripe/react-stripe-js @stripe/stripe-js
```

#### Using hooks

```jsx
import React from 'react';
import ReactDOM from 'react-dom';
import {loadStripe} from '@stripe/stripe-js';
import {
  CardElement,
  Elements,
  useStripe,
  useElements,
} from '@stripe/react-stripe-js';

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (elements == null) {
      return;
    }

    const {error, paymentMethod} = await stripe.createPaymentMethod({
      type: 'card',
      card: elements.getElement(CardElement),
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <CardElement />
      <button type="submit" disabled={!stripe || !elements}>
        Pay
      </button>
    </form>
  );
};

const stripePromise = loadStripe('pk_test_6pRNASCoBOKtIshFeQd4XMUh');

const App = () => (
  <Elements stripe={stripePromise}>
    <CheckoutForm />
  </Elements>
);

ReactDOM.render(<App />, document.body);
```

#### Using class components

```jsx
import React from 'react';
import ReactDOM from 'react-dom';
import {loadStripe} from '@stripe/stripe-js';
import {CardElement, Elements, ElementsConsumer} from '@stripe/react-stripe-js';

class CheckoutForm extends React.Component {
  handleSubmit = async (event) => {
    event.preventDefault();
    const {stripe, elements} = this.props;

    if (elements == null) {
      return;
    }

    const {error, paymentMethod} = await stripe.createPaymentMethod({
      type: 'card',
      card: elements.getElement(CardElement),
    });
  };

  render() {
    const {stripe} = this.props;
    return (
      <form onSubmit={this.handleSubmit}>
        <CardElement />
        <button type="submit" disabled={!stripe}>
          Pay
        </button>
      </form>
    );
  }
}

const InjectedCheckoutForm = () => (
  <ElementsConsumer>
    {({stripe, elements}) => (
      <CheckoutForm stripe={stripe} elements={elements} />
    )}
  </ElementsConsumer>
);

const stripePromise = loadStripe('pk_test_6pRNASCoBOKtIshFeQd4XMUh');

const App = () => (
  <Elements stripe={stripePromise}>
    <InjectedCheckoutForm />
  </Elements>
);

ReactDOM.render(<App />, document.body);
```

### TypeScript support

React Stripe.js is packaged with TypeScript declarations. Some types are pulled
from [`@stripe/stripe-js`](https://github.com/stripe/stripe-js)—be sure to add
`@stripe/stripe-js` as a dependency to your project for full TypeScript support.

Typings in React Stripe.js follow the same
[versioning policy](https://github.com/stripe/stripe-js#typescript-support) as
`@stripe/stripe-js`.

### Contributing

If you would like to contribute to React Stripe.js, please make sure to read our
[contributor guidelines](CONTRIBUTING.md).

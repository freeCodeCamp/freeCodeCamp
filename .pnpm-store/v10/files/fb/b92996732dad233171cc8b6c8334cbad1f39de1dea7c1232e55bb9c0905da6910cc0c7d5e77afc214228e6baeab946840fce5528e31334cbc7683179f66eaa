# Stripe.js ES Module

Use [Stripe.js](https://stripe.com/docs/stripe-js) as an ES module.

**Note**: To be
[PCI compliant](https://stripe.com/docs/security/guide#validating-pci-compliance),
you must load Stripe.js directly from `https://js.stripe.com`. You cannot
include it in a bundle or host it yourself. This package wraps the global
`Stripe` function provided by the Stripe.js script as an ES module.

Calling `loadStripe` always loads the latest version of Stripe.js, regardless of
which version of `@stripe/stripe-js` you use. Updates for this package only
impact tooling around the `loadStripe` helper itself and the TypeScript type
definitions provided for Stripe.js. Updates do not affect runtime availability
of features of Stripe.js.

[![npm version](https://img.shields.io/npm/v/@stripe/stripe-js.svg?style=flat-square)](https://www.npmjs.com/package/@stripe/stripe-js)

## Installation

Use `npm` to install the Stripe.js module:

```sh
npm install @stripe/stripe-js
```

## Usage

### `loadStripe`

This function returns a `Promise` that resolves with a newly created `Stripe`
object once Stripe.js has loaded. It takes the same parameters passed when
directly
[initializing a `Stripe` instance](https://stripe.com/docs/js/initializing). If
necessary, it will load Stripe.js for you by inserting the Stripe.js script tag.
If you call `loadStripe` in a server environment it will resolve to `null`.

```js
import {loadStripe} from '@stripe/stripe-js';

const stripe = await loadStripe('pk_test_TYooMQauvdEDq54NiTphI7jx');
```

We’ve placed a random API key in this example. Replace it with your
[actual publishable API keys](https://dashboard.stripe.com/account/apikeys) to
test this code through your Stripe account.

For more information on how to use Stripe.js, please refer to the
[Stripe.js API reference](https://stripe.com/docs/js) or learn to
[accept a payment](https://stripe.com/docs/payments/accept-a-payment) with
Stripe.

If you have deployed a
[Content Security Policy](https://developer.mozilla.org/en-US/docs/Web/Security/CSP),
make sure to
[include Stripe.js in your directives](https://stripe.com/docs/security/guide#content-security-policy).

## TypeScript support

This package includes TypeScript declarations for Stripe.js. We support projects
using TypeScript versions >= 3.1.

Some methods in Stripe.js accept and return objects from the
[Stripe API](https://stripe.com/docs/api). The type declarations in
`@stripe/stripe-js` for these objects in will always track the
[latest version](https://stripe.com/docs/api/versioning) of the Stripe API. If
you would like to use these types but are using an older version of the Stripe
API, we recommend
[updating to the latest version](https://stripe.com/docs/upgrades#how-can-i-upgrade-my-api),
or ignoring and overriding the type definitions as necessary.

Note that we may release new [minor and patch](https://semver.org/) versions of
`@stripe/stripe-js` with small but backwards-incompatible fixes to the type
declarations. These changes will not affect Stripe.js itself.

## Ensuring Stripe.js is available everywhere

To best leverage Stripe’s advanced fraud functionality, ensure that Stripe.js is
loaded on every page, not just your checkout page. This
[allows Stripe to detect suspicious behavior](https://stripe.com/docs/disputes/prevention/advanced-fraud-detection)
that may be indicative of fraud as customers browse your website.

By default, this module will insert a `<script>` tag that loads Stripe.js from
`https://js.stripe.com`. This happens as a side effect immediately upon
importing this module. If you utilize code splitting or only include your
JavaScript app on your checkout page, the Stripe.js script will only be
available in parts of your site. To ensure Stripe.js is available everywhere,
you can perform either of the following steps:

### Import as a side effect

Import `@stripe/stripe-js` as a side effect in code that will be included
throughout your site (e.g. your root module). This will make sure the Stripe.js
script tag is inserted immediately upon page load.

```js
import '@stripe/stripe-js';
```

### Manually include the script tag

Manually add the Stripe.js script tag to the `<head>` of each page on your site.
If an existing script tag is already present, this module will not insert a new
one. When you call `loadStripe`, it will use the existing script tag.

```html
<!-- Somewhere in your site's <head> -->
<script src="https://js.stripe.com/v3" async></script>
```

### Importing `loadStripe` without side effects

If you would like to use `loadStripe` in your application, but defer loading the
Stripe.js script until `loadStripe` is first called, use the alternative
`@stripe/stripe-js/pure` import path:

```js
import {loadStripe} from '@stripe/stripe-js/pure';

// Stripe.js will not be loaded until `loadStripe` is called
const stripe = await loadStripe('pk_test_TYooMQauvdEDq54NiTphI7jx');
```

### Disabling advanced fraud detection signals

If you would like to
[disable advanced fraud detection](https://stripe.com/docs/disputes/prevention/advanced-fraud-detection#disabling-advanced-fraud-detection)
altogether, use `loadStripe.setLoadParameters`:

```js
import {loadStripe} from '@stripe/stripe-js/pure';

loadStripe.setLoadParameters({advancedFraudSignals: false});
const stripe = await loadStripe('pk_test_TYooMQauvdEDq54NiTphI7jx');
```

The `loadStripe.setLoadParameters` function is only available when importing
`loadStripe` from `@stripe/stripe-js/pure`.

## Stripe.js Documentation

- [Stripe.js Docs](https://stripe.com/docs/stripe-js)
- [Stripe.js Reference](https://stripe.com/docs/js)
- [React Stripe.js Docs](https://stripe.com/docs/stripe-js/react)

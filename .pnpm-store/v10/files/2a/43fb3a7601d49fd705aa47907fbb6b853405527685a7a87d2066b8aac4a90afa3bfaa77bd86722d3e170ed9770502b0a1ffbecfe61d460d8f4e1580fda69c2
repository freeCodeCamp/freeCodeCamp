# paypal-js

> Loading wrapper and TypeScript types for the [PayPal JS SDK](https://developer.paypal.com/sdk/js/reference/)

[![build status][build-badge]][build]
[![npm version][version-badge]][package]
[![npm downloads][downloads-badge]][npmtrends]
[![apache license][license-badge]][license]

[build-badge]: https://img.shields.io/github/actions/workflow/status/paypal/paypal-js/main.yml?branch=main&logo=github&style=flat-square
[build]: https://github.com/paypal/paypal-js/actions/workflows/main.yml
[version-badge]: https://img.shields.io/npm/v/@paypal/paypal-js.svg?style=flat-square
[package]: https://www.npmjs.com/package/@paypal/paypal-js
[downloads-badge]: https://img.shields.io/npm/dm/@paypal/paypal-js.svg?style=flat-square
[npmtrends]: https://www.npmtrends.com/@paypal/paypal-js
[license-badge]: https://img.shields.io/npm/l/@paypal/paypal-js.svg?style=flat-square
[license]: https://github.com/paypal/paypal-js/blob/main/LICENSE

## Table of Contents

- [Why use paypal-js?](#why-use-paypal-js)
- [Installation](#installation)
- [Usage (V5 legacy loader)](#usage)
  - [`loadScript(options)`](#loadscriptoptions)
  - [Passing Arguments](#passing-arguments)
  - [Legacy Browser Support](#legacy-browser-support)
  - [Using a CDN](#using-a-cdn)
  - [`loadCustomScript(options)`](#loadcustomscriptoptions)
- [TypeScript Support](#typescript-support)
- [V6 SDK Support](#v6-sdk-support)
  - [Loading the V6 SDK](#loading-the-v6-sdk)
  - [Creating an SDK Instance](#creating-an-sdk-instance)
  - [V6 Components](#v6-components)
  - [V6 TypeScript Types](#v6-typescript-types)
  - [Complete V6 Example](#complete-v6-example)

## Why use paypal-js?

The [default JS SDK code snippet](https://developer.paypal.com/docs/checkout/standard/integrate/#link-addpaymentbuttons) blocks page rendering:

```html
<script src="https://www.paypal.com/sdk/js?client-id=test"></script>
<script>
  paypal.Buttons().render("body");
</script>
```

The above snippet can be difficult to implement in a non-blocking way, especially in single page web apps. This is where the paypal-js library comes in. It provides the following benefits over the above snippet:

- Async script loading to ensure page rendering isn't blocked.
- A [Promise API](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) to know when script loading is complete.
- A convenient way to reload the script when query parameters or data attributes change.

## Installation

To get started, install paypal-js with npm.

```sh
npm install @paypal/paypal-js
```

## Usage

> This section documents the **legacy V5 loader** (`loadScript` / `loadCustomScript`), which resolves with `window.paypal`. For new integrations, use the [V6 SDK Support](#v6-sdk-support) section below.

Import the `loadScript` function for asynchronously loading the Paypal JS SDK.

### `loadScript(options)`

- accepts an object for passing query parameters and attributes to the JS SDK.
- returns a Promise that resolves with `window.paypal` after the JS SDK is finished loading.

#### Async/Await

```js
import { loadScript } from "@paypal/paypal-js";

let paypal;

try {
  paypal = await loadScript({ clientId: "test" });
} catch (error) {
  console.error("failed to load the PayPal JS SDK script", error);
}

if (paypal) {
  try {
    await paypal.Buttons().render("#your-container-element");
  } catch (error) {
    console.error("failed to render the PayPal Buttons", error);
  }
}
```

#### Promises

```js
import { loadScript } from "@paypal/paypal-js";

loadScript({ clientId: "test" })
  .then((paypal) => {
    paypal
      .Buttons()
      .render("#your-container-element")
      .catch((error) => {
        console.error("failed to render the PayPal Buttons", error);
      });
  })
  .catch((error) => {
    console.error("failed to load the PayPal JS SDK script", error);
  });
```

### Passing Arguments

The `loadScript` function accepts an object for configuring the JS SDK. It's used for setting query parameters and script attributes. It accepts parameters in camelCase or kebab-case.

#### Query Parameters

The following example adds `client-id` and `currency` as query string parameters:

```js
loadScript({ clientId: "YOUR_CLIENT_ID", currency: "EUR" });
```

Which will load the following `<script>` asynchronously:

```html
<script src="https://www.paypal.com/sdk/js?client-id=YOUR_CLIENT_ID&currency=EUR"></script>
```

By default, the JS SDK only loads the buttons component. The `components` query string parameter can be used to load multiple components:

```js
loadScript({
  clientId: "YOUR_CLIENT_ID",
  components: ["buttons", "marks", "messages"],
});
```

Which will load the following `<script>` asynchronously:

```html
<script src="https://www.paypal.com/sdk/js?client-id=YOUR_CLIENT_ID&components=buttons,marks,messages"></script>
```

View the [full list of supported query parameters](https://developer.paypal.com/sdk/js/configuration/#link-queryparameters).

#### Data Attributes

All options prefixed with `data` are considered attributes. The following example adds `data-page-type` as an attribute:

```js
loadScript({
  clientId: "YOUR_CLIENT_ID",
  dataPageType: "checkout",
});
```

Which will load the following `<script>` asynchronously:

```html
<script
  data-page-type="checkout"
  src="https://www.paypal.com/sdk/js?client-id=YOUR_CLIENT_ID"
></script>
```

View the [full list of supported script parameters](https://developer.paypal.com/sdk/js/configuration/#link-scriptparameters).

#### Merchant Id Array

The `merchantId` option accepts an array to simplify the implementation for Multi-Seller Payments. With this approach the caller doesn't have to worry about managing the two different merchant id values (`data-merchant-id` and `merchant-id`).

**Here's an example with multiple `merchantId` values:**

```js
loadScript({
  clientId: "YOUR_CLIENT_ID",
  merchantId: ["123", "456", "789"],
});
```

Which will load the following `<script>` and use `merchant-id=*` to properly configure the edge cache:

```html
<script
  data-merchant-id="123,456,789"
  src="https://www.paypal.com/sdk/js?client-id=YOUR_CLIENT_ID&merchant-id=*"
></script>
```

**Here's an example with one `merchant-id` value:**

```js
loadScript({
  clientId: "YOUR_CLIENT_ID",
  merchantId: ["123"],
});
```

When there's only one, the merchant-id is passed in using the query string.

```html
<script src="https://www.paypal.com/sdk/js?client-id=YOUR_CLIENT_ID&merchant-id=123"></script>
```

#### sdkBaseUrl

For local development, the `sdkBaseUrl` option can be used to set the base url of the JS SDK:

```js
loadScript({
  clientId: "YOUR_CLIENT_ID",
  sdkBaseUrl: "http://localhost.paypal.com:8000/sdk/js",
});
```

### Legacy Browser Support

This library relies on [JavaScript Promises](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise). To support legacy browsers like IE 11, you must provide your own Promise polyfill. With a Promise polyfill this library will [support the same browsers as the JS SDK](https://developer.paypal.com/reference/guidelines/browser-support/#link-supportedbrowsersbyplatform).

The `loadScript()` function takes in a second parameter for providing a Promise ponyfill. It defaults to the global `Promise` object if it exists. There are two options for polyfilling the Promise object:

1. Use a global polyfill strategy that monkey patches the `window.Promise` API implementation.
2. Use a [ponyfill strategy](https://github.com/sindresorhus/ponyfill) that passes a Promise library into `loadScript()` without affecting other code:

```js
import { loadScript } from "@paypal/paypal-js";
import PromisePonyfill from "promise-polyfill";

loadScript(options, PromisePonyfill).then((paypalObject) => {});
```

We also provide a legacy build that includes the [promise-polyfill](https://github.com/taylorhakes/promise-polyfill) library. You can reference it from the CDN here:

```html
<script src="https://unpkg.com/@paypal/paypal-js@9.4.0/dist/iife/paypal-js.legacy.min.js"></script>
```

### Using a CDN

The paypal-js script is also available on the [unpkg CDN](https://unpkg.com/). The iife/paypal-js.js build assigns the `loadScript` function to the window object as `window.paypalLoadScript`. Here's an example:

```html
<!doctype html>
<html lang="en">
  <head>
    <script src="https://unpkg.com/@paypal/paypal-js@9.4.0/dist/iife/paypal-js.min.js"></script>
  </head>
  <body>
    <div id="paypal-buttons"></div>
    <script>
      window.paypalLoadScript({ clientId: "test" }).then((paypal) => {
        paypal.Buttons().render("#paypal-buttons");
      });
    </script>
  </body>
</html>
```

### `loadCustomScript(options)`

The `loadCustomScript` function is a generic script loader function that works with any url.

- accepts an object for defining the script url and attributes.
- returns a promise to indicate if the script was successfully loaded.

#### Async/Await

```js
import { loadCustomScript } from "@paypal/paypal-js";

try {
  await loadCustomScript({
    url: "https://www.example.com/index.js",
    attributes: {
      id: "custom-id-value",
      "data-foo": "custom-data-attribute",
    },
  });

  console.log("successfully loaded the custom script");
} catch (error) {
  console.error("failed to load the custom script", error);
}
```

#### Promises

```js
import { loadCustomScript } from "@paypal/paypal-js";

loadCustomScript({
  url: "https://www.example.com/index.js",
  attributes: { id: "custom-id-value", "data-foo": "custom-data-attribute" },
})
  .then(() => {
    console.log("successfully loaded the custom script");
  })
  .catch((err) => {
    console.error("failed to load the custom script", err);
  });
```

## TypeScript Support

This package includes TypeScript type definitions for the PayPal JS SDK. This includes types for the `window.paypal` namespace. We support projects using TypeScript versions >= 3.8.

## V6 SDK Support

The PayPal Web SDK V6 introduces a modern, component-based architecture with a `createInstance()` pattern, explicit component loading, and built-in eligibility checking.

For eligibility details, see the [Find Eligible Methods API reference](https://developer.paypal.com/docs/api/payments/v2/#find_eligible_methods).

### Loading the V6 SDK

Use `loadCoreSdkScript()` to asynchronously load the V6 SDK:

```ts
import { loadCoreSdkScript } from "@paypal/paypal-js/sdk-v6";

const paypal = await loadCoreSdkScript({
  environment: "sandbox", // "sandbox" | "production"
  debug: true, // optional
});
```

**Options:**

> **Important:** `environment` is **required**. The `clientId` does not determine which environment is loaded in v6 — `environment` does. A live `clientId` will still load the sandbox SDK if `environment: "sandbox"` is passed.

| Option          | Type                          | Description                                                                                            |
| --------------- | ----------------------------- | ------------------------------------------------------------------------------------------------------ |
| `environment`   | `"sandbox"` \| `"production"` | **Required.** Target environment. `clientId` does not select the environment in v6 — this option does. |
| `debug`         | `boolean`                     | Enable debug mode                                                                                      |
| `dataNamespace` | `string`                      | Custom global namespace                                                                                |

### Creating an SDK Instance

After loading, create an instance with `createInstance()`:

```ts
import { loadCoreSdkScript } from "@paypal/paypal-js/sdk-v6";

const paypal = await loadCoreSdkScript({ environment: "sandbox" });

const sdkInstance = await paypal.createInstance({
  clientId: "YOUR_CLIENT_ID",
  components: ["paypal-payments", "venmo-payments"],
  locale: "en-US",
  pageType: "checkout",
});
```

The value returned by `loadCoreSdkScript` is the PayPal global namespace — the same object as `window.paypal` (or your custom `dataNamespace`) — so you can also call `window.paypal.createInstance(...)`. Note that `loadCoreSdkScript` resolves with `null` when run server-side; see the [Complete V6 Example](#complete-v6-example) for the null guard.

### V6 Components

These are the components that currently support the TypeScript types offered for the V6 PayPal JS SDK via `paypal-js`.

| Component                          | Description                                         |
| ---------------------------------- | --------------------------------------------------- |
| `paypal-payments`                  | PayPal payment sessions (one-time, save, Pay Later) |
| `paypal-guest-payments`            | Guest checkout with credit/debit cards              |
| `venmo-payments`                   | Venmo payment integration                           |
| `card-fields`                      | Customizable card field components                  |
| `paypal-messages`                  | PayPal messaging component                          |
| `paypal-subscriptions`             | Subscription payment handling                       |
| `paypal-legacy-billing-agreements` | Legacy billing support                              |
| `applepay-payments`                | Apple Pay payment integration                       |
| `googlepay-payments`               | Google Pay payment integration                      |

### V6 TypeScript Types

Import types from the `@paypal/paypal-js/sdk-v6` subpath:

```ts
import type {
  PayPalV6Namespace,
  LoadCoreSdkScriptOptions,
  Components,
  CreateInstanceOptions,
  SdkInstance,
  OnApproveDataOneTimePayments,
  OnShippingAddressChangeData,
} from "@paypal/paypal-js/sdk-v6";
```

### Complete V6 Example

```ts
import { loadCoreSdkScript } from "@paypal/paypal-js/sdk-v6";
import type { OnApproveDataOneTimePayments } from "@paypal/paypal-js/sdk-v6";

async function initPayPal() {
  const paypal = await loadCoreSdkScript({ environment: "sandbox" });

  if (!paypal) {
    console.error("Failed to load PayPal SDK");
    return;
  }

  const sdkInstance = await paypal.createInstance({
    clientId: "YOUR_CLIENT_ID",
    components: ["paypal-payments"],
  });

  // Check eligibility before rendering
  const eligibility = await sdkInstance.findEligibleMethods();

  if (eligibility.isEligible("paypal")) {
    const session = sdkInstance.createPayPalOneTimePaymentSession({
      onApprove: async (data: OnApproveDataOneTimePayments) => {
        // Capture payment on your server
        await fetch("/api/capture", {
          method: "POST",
          body: JSON.stringify({ orderId: data.orderId }),
        });
      },
    });

    // Start payment when user clicks
    await session.start({ presentationMode: "popup" }, createOrderOnServer);
  }
}

async function createOrderOnServer() {
  const response = await fetch("/api/create-order", { method: "POST" });
  return response.json(); // { orderId: "..." }
}
```

View the [Find Eligible Methods API reference](https://developer.paypal.com/docs/api/payments/v2/#find_eligible_methods) for details on the eligibility endpoint used by `findEligibleMethods()`.

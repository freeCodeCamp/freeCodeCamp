# react-paypal-js

> React components for the [PayPal JS SDK](https://docs.paypal.ai/developer/how-to/sdk/js/v6/configuration)

<div class="badges">
    <a href="https://github.com/paypal/paypal-js/actions/workflows/main.yml"><img src="https://img.shields.io/github/actions/workflow/status/paypal/paypal-js/main.yml?branch=main&logo=github&style=flat-square" alt="build status"></a>
    <a href="https://www.npmjs.com/package/@paypal/react-paypal-js"><img src="https://img.shields.io/npm/v/@paypal/react-paypal-js.svg?style=flat-square" alt="npm version"></a>
    <a href="https://bundlephobia.com/result?p=@paypal/react-paypal-js"><img src="https://img.shields.io/bundlephobia/minzip/@paypal/react-paypal-js.svg?style=flat-square" alt="bundle size"></a>
    <a href="https://www.npmtrends.com/@paypal/react-paypal-js"><img src="https://img.shields.io/npm/dm/@paypal/react-paypal-js.svg?style=flat-square" alt="npm downloads"></a>
    <a href="https://github.com/paypal/react-paypal-js/blob/main/LICENSE"><img src="https://img.shields.io/npm/l/@paypal/react-paypal-js.svg?style=flat-square" alt="apache license"></a>
    <a href="https://paypal.github.io/paypal-js/web-sdk-v6-react-storybook/"><img src="https://raw.githubusercontent.com/storybooks/brand/master/badge/badge-storybook.svg" alt="storybook"></a>
</div>

---

> **Are you still using the old PayPal JS SDK V5 SDK?**
>
> This documentation teaches how to use the latest PayPal JS SDK with react. For the integration using PayPal JS SDK V5 with `PayPalScriptProvider`, `PayPalButtons`, `PayPalHostedFields`, and `BraintreePayPalButtons`, see [README-PAYPAL-JS-SDK-V5.md](./README-PAYPAL-JS-SDK-V5.md).

---

## Table of Contents

- [Why use react-paypal-js?](#why-use-react-paypal-js)
  - [The Problem](#the-problem)
  - [The Solution](#the-solution)
- [Supported Payment Methods](#supported-payment-methods)
- [Resources](#resources)
- [Installation](#installation)
- [Quick Start](#quick-start)
- [PayPalProvider](#paypalprovider)
  - [Props](#props)
  - [Available Components](#available-components)
  - [With Promise-based Client ID](#with-promise-based-client-id)
  - [Deferred Loading](#deferred-loading)
  - [Tracking Loading State](#tracking-loading-state)
- [Button Components](#button-components)
  - [Common Button Props](#common-button-props)
  - [PayPalOneTimePaymentButton](#paypalonetimepaymentbutton)
  - [VenmoOneTimePaymentButton](#venmoonetimepaymentbutton)
  - [GooglePayOneTimePaymentButton](#googlepayonetimepaymentbutton)
  - [PayLaterOneTimePaymentButton](#paylateronetimepaymentbutton)
  - [PayPalGuestPaymentButton](#paypalguestpaymentbutton)
  - [PayPalSavePaymentButton](#paypalsavepaymentbutton)
  - [PayPalSubscriptionButton](#paypalsubscriptionbutton)
  - [PayPalCreditOneTimePaymentButton](#paypalcreditonetimepaymentbutton)
  - [PayPalCreditSavePaymentButton](#paypalcreditsavepaymentbutton)
  - [ApplePayOneTimePaymentButton](#applepayonetimepaymentbutton)
- [Payment Flow](#payment-flow)
- [Card Fields Components](#card-fields-components)
  - [PayPalCardFieldsProvider](#paypalcardfieldsprovider)
  - [PayPalCardNumberField](#paypalcardnumberfield)
  - [PayPalCardExpiryField](#paypalcardexpiryfield)
  - [PayPalCardCvvField](#paypalcardcvvfield)
  - [Field Component Props](#field-component-props)
- [Payment Flow: Card Fields](#payment-flow-card-fields)
- [Hooks API](#hooks-api)
  - [usePayPal](#usepaypal)
  - [useEligibleMethods](#useeligiblemethods)
  - [usePayPalMessages](#usepaypalmessages)
  - [usePayPalCardFields](#usepaypalcardfields)
  - [Payment Session Hooks](#payment-session-hooks)
  - [Card Fields Session Hooks](#card-fields-session-hooks)
- [Braintree PayPal Integration](#braintree-paypal-integration)
  - [Prerequisites](#prerequisites)
  - [BraintreePayPalProvider](#braintreepaypalprovider)
  - [BraintreePayPalOneTimePaymentButton](#braintreepaypalonetimepaymentbutton)
  - [BraintreePayPalBillingAgreementButton](#braintreepaypalbillingagreementbutton)
  - [BraintreePayPalCheckoutWithVaultButton](#braintreepaypalcheckoutwithvaultbutton)
  - [BraintreePayPalPayLaterButton](#braintreepaypalpaylaterbutton)
  - [Braintree Hooks](#braintree-hooks)
  - [Key Braintree Types](#key-braintree-types)
  - [Key Differences from Standard PayPal Buttons](#key-differences-from-standard-paypal-buttons)
- [Web Components](#web-components)
  - [Available Web Components](#available-web-components)
  - [Button Types](#button-types)
- [Server-Side Rendering](#server-side-rendering)
- [Migration from v8.x (Legacy SDK)](#migration-from-v8x-legacy-sdk)
  - [Before (v8.x)](#before-v8x)
  - [After (v9.0.0)](#after-v900)
- [TypeScript](#typescript)
  - [Web Component Types](#web-component-types)
- [Browser Support](#browser-support)

## Why use react-paypal-js?

### The Problem

Integrating PayPal into React applications requires careful handling of SDK script loading, payment session management, and UI rendering. Building a robust integration from scratch can lead to issues with timing, state management, and buyer experience.

### The Solution

`react-paypal-js` provides a modern, hooks-based solution that abstracts away the complexities of the PayPal V6 SDK. It enforces best practices by default to ensure buyers get the best possible user experience.

**Features**

- **Modern Hooks API** - Fine-grained control over payment sessions with `usePayPalOneTimePaymentSession`, `useVenmoOneTimePaymentSession`, and more
- **Built-in Eligibility** - Automatically check which payment methods are available with `useEligibleMethods()`
- **Web Component Buttons** - Use PayPal's optimized `<paypal-button>`, `<venmo-button>`, and `<paypal-pay-later-button>` web components
- **Flexible Loading** - Support for string token/id, Promise-based token/id, and deferred loading patterns
- **TypeScript Support** - Complete type definitions for all components and hooks
- **SSR Compatible** - Built-in hydration handling for server-side rendered applications

## Supported Payment Methods

- **PayPal** - Standard PayPal checkout
- **Venmo** - Venmo payments
- **Pay Later** - PayPal's buy now, pay later option
- **PayPal Basic Card** - Guest card payments without a PayPal account
- **PayPal Advanced Card** - Card payments with enhanced features and customization options
- **PayPal Subscriptions** - Recurring billing subscriptions
- **PayPal Save** - Vault payment methods without purchase
- **PayPal Credit** - PayPal Credit one-time and save payments
- **Google Pay** - Native Google Pay button flow through PaymentsClient
- **Apple Pay** - Native Apple Pay payments (Safari + HTTPS only)
- **Braintree PayPal** - PayPal checkout for Braintree merchants via the `paypalCheckoutV6` module

## Resources

- [PayPal V6 SDK Documentation](https://docs.paypal.ai/payments/methods/paypal/sdk/js/v6/paypal-checkout)
- [React Sample Integration](https://github.com/paypal-examples/v6-web-sdk-sample-integration/tree/main/client/prebuiltPages/react) - Full working example with Node.js backend
- [Live Demo](https://v6-web-sdk-sample-integration-server.fly.dev/client/prebuiltPages/react/dist/) - Try the sample integration in sandbox mode
- [PayPal Server SDK](https://www.npmjs.com/package/@paypal/paypal-server-sdk) - For backend integration
- [PayPal Developer Dashboard](https://developer.paypal.com/dashboard/)
- [PayPal Sandbox Test Accounts](https://developer.paypal.com/dashboard/accounts)
- [PayPal Sandbox Card Testing](https://developer.paypal.com/tools/sandbox/card-testing/)
- [Find Eligible Methods API Reference](https://developer.paypal.com/docs/api/payments/v2/#find_eligible_methods) - REST API reference for the eligibility endpoint

## Installation

```sh
npm install @paypal/react-paypal-js
```

## Quick Start

```tsx
import {
  PayPalProvider,
  PayPalOneTimePaymentButton,
} from "@paypal/react-paypal-js/sdk-v6";

function App() {
  return (
    <PayPalProvider
      clientId="your-client-id"
      environment="sandbox"
      components={["paypal-payments"]}
      pageType="checkout"
    >
      <CheckoutPage />
    </PayPalProvider>
  );
}

function CheckoutPage() {
  return (
    <PayPalOneTimePaymentButton
      createOrder={async () => {
        const response = await fetch("/api/create-order", {
          method: "POST",
        });
        const { orderId } = await response.json();
        return { orderId };
      }}
      onApprove={async ({ orderId }: OnApproveDataOneTimePayments) => {
        await fetch(`/api/capture-order/${orderId}`, {
          method: "POST",
        });
        console.log("Payment captured!");
      }}
    />
  );
}
```

## PayPalProvider

The `PayPalProvider` component is the entry point for the V6 SDK. It handles loading the PayPal SDK, creating an instance, and running eligibility checks.

### Props

| Prop                      | Type                                 | Required | Description                                                                                                  |
| ------------------------- | ------------------------------------ | -------- | ------------------------------------------------------------------------------------------------------------ |
| `clientToken`             | `string \| Promise<string>`          | \*       | Client token from your server. Mutually exclusive with `clientId`.                                           |
| `clientId`                | `string \| Promise<string>`          | \*       | Client ID from your PayPal app. Mutually exclusive with `clientToken`.                                       |
| `components`              | `Components[]`                       | No       | SDK components to load. Defaults to `["paypal-payments"]`.                                                   |
| `pageType`                | `string`                             | No       | Type of page: `"checkout"`, `"product-details"`, `"cart"`, `"product-listing"`, etc.                         |
| `locale`                  | `string`                             | No       | Locale for the SDK (e.g., `"en_US"`).                                                                        |
| `environment`             | `"sandbox" \| "production"`          | **Yes**  | **Required.** SDK environment. `clientId` does not select the environment in v6 — this prop does.            |
| `merchantId`              | `string \| string[]`                 | No       | PayPal merchant ID(s).                                                                                       |
| `clientMetadataId`        | `string`                             | No       | Client metadata ID for tracking.                                                                             |
| `partnerAttributionId`    | `string`                             | No       | Partner attribution ID (BN code).                                                                            |
| `shopperSessionId`        | `string`                             | No       | Shopper session ID for tracking.                                                                             |
| `testBuyerCountry`        | `string`                             | No       | Test buyer country code (sandbox only).                                                                      |
| `debug`                   | `boolean`                            | No       | Enable debug mode.                                                                                           |
| `dataNamespace`           | `string`                             | No       | Custom namespace for the SDK script data attribute.                                                          |
| `eligibleMethodsResponse` | `FindEligiblePaymentMethodsResponse` | No       | Server-fetched eligibility response for SDK hydration (see [Server-Side Rendering](#server-side-rendering)). |

> \* Either `clientToken` or `clientId` is required, but not both. They are mutually exclusive.

### Available Components

The `components` prop accepts an array of the following values:

- `"paypal-payments"` - PayPal and Pay Later buttons
- `"venmo-payments"` - Venmo button
- `"paypal-guest-payments"` - Guest checkout (card payments)
- `"paypal-subscriptions"` - Subscription payments
- `"card-fields"` - Card Fields (advanced card payment UI)
- `"googlepay-payments"` - Google Pay

### With Promise-based Client ID

```tsx
function App() {
  // Memoize to prevent re-fetching on each render
  const clientIdPromise = useMemo(() => fetchClientId(), []);

  return (
    <PayPalProvider
      clientId={clientIdPromise}
      environment="sandbox"
      components={["paypal-payments"]}
      pageType="checkout"
    >
      <CheckoutPage />
    </PayPalProvider>
  );
}
```

Alternative: With Promise-based Client Token

```tsx
function App() {
  // Memoize to prevent re-fetching on each render
  const tokenPromise = useMemo(() => fetchClientToken(), []);

  return (
    <PayPalProvider
      clientToken={tokenPromise}
      environment="sandbox"
      components={["paypal-payments"]}
      pageType="checkout"
    >
      <CheckoutPage />
    </PayPalProvider>
  );
}
```

### Deferred Loading

```tsx
function App() {
  const [clientId, setClientId] = useState<string>();

  useEffect(() => {
    fetchClientId().then(setClientId);
  }, []);

  return (
    <PayPalProvider
      clientId={clientId}
      environment="sandbox"
      components={["paypal-payments"]}
      pageType="checkout"
    >
      <CheckoutPage />
    </PayPalProvider>
  );
}
```

### Tracking Loading State

Use the `usePayPal` hook to access the SDK loading status:

```tsx
import {
  usePayPal,
  INSTANCE_LOADING_STATE,
} from "@paypal/react-paypal-js/sdk-v6";

function CheckoutPage() {
  const { loadingStatus, error } = usePayPal();

  if (loadingStatus === INSTANCE_LOADING_STATE.PENDING) {
    return <div className="spinner">Loading PayPal...</div>;
  }

  if (loadingStatus === INSTANCE_LOADING_STATE.REJECTED) {
    return (
      <div className="error">Failed to load PayPal SDK: {error?.message}</div>
    );
  }

  return <PayPalOneTimePaymentButton orderId="ORDER-123" />;
}
```

## Button Components

All button components share a common set of props for order creation, payment callbacks, and presentation, documented once in [Common Button Props](#common-button-props) below. Each button section then documents only the props unique to that button.

### Common Button Props

These props are accepted by the standard PayPal button components. Buttons with different flows (vault, subscription, Google Pay, Apple Pay) override some of these — see the individual sections.

| Prop               | Type                                                         | Description                                                         |
| ------------------ | ------------------------------------------------------------ | ------------------------------------------------------------------- |
| `orderId`          | `string`                                                     | Static order ID (alternative to `createOrder`)                      |
| `createOrder`      | `() => Promise<{ orderId: string }>`                         | Async function to create an order                                   |
| `presentationMode` | `"auto" \| "popup" \| "modal" \| "redirect"`                 | Optional. How to present the payment session. Defaults to `"auto"`. |
| `onApprove`        | `(data) => void`                                             | Called when payment is approved                                     |
| `onCancel`         | `() => void`                                                 | Called when buyer cancels                                           |
| `onError`          | `(error) => void`                                            | Called on error                                                     |
| `onComplete`       | `(data) => void`                                             | Called when payment session completes                               |
| `type`             | `"pay" \| "checkout" \| "buynow" \| "donate" \| "subscribe"` | Button label type                                                   |
| `disabled`         | `boolean`                                                    | Disable the button                                                  |

> **Vault and subscription buttons** replace order creation: `PayPalSavePaymentButton` and `PayPalCreditSavePaymentButton` use `vaultSetupToken`/`createVaultToken` instead of `orderId`/`createOrder`, and `PayPalSubscriptionButton` uses `subscriptionId`/`createSubscription`.

### PayPalOneTimePaymentButton

Renders a PayPal button for one-time payments.

```tsx
import { PayPalOneTimePaymentButton } from "@paypal/react-paypal-js/sdk-v6";

<PayPalOneTimePaymentButton
  createOrder={async () => {
    const response = await fetch("/api/create-order", { method: "POST" });
    const { orderId } = await response.json();
    return { orderId };
  }}
  onApprove={async ({ orderId }: OnApproveDataOneTimePayments) => {
    await fetch(`/api/capture/${orderId}`, { method: "POST" });
    console.log("Payment approved!");
  }}
  onCancel={(data: OnCancelDataOneTimePayments) =>
    console.log("Payment cancelled")
  }
  onError={(data: OnErrorData) => console.error("Payment error:", data)}
  onComplete={(data: OnCompleteData) => console.log("Payment Flow Completed")}
/>;
```

**Props:** Accepts the full set of [Common Button Props](#common-button-props) (`orderId`/`createOrder`, `presentationMode`, `onApprove`, `onCancel`, `onError`, `onComplete`, `type`, `disabled`). No additional props.

### VenmoOneTimePaymentButton

Renders a Venmo button for one-time payments. Requires `"venmo-payments"` in the provider's `components` array.

**Props:** Accepts all [Common Button Props](#common-button-props). No additional props.

```tsx
import { VenmoOneTimePaymentButton } from "@paypal/react-paypal-js/sdk-v6";

<PayPalProvider
  clientId={clientId}
  environment="sandbox"
  components={["paypal-payments", "venmo-payments"]}
  pageType="checkout"
>
  <VenmoOneTimePaymentButton
    createOrder={async () => {
      const { orderId } = await createOrder();
      return { orderId };
    }}
    onApprove={(data: OnApproveDataOneTimePayments) =>
      console.log("Venmo payment approved!", data)
    }
    onCancel={(data: OnCancelDataOneTimePayments) =>
      console.log("Venmo payment cancelled", data)
    }
    onError={(data: OnErrorData) => console.error("Venmo payment error:", data)}
    onComplete={(data: OnCompleteData) =>
      console.log("Venmo payment flow completed", data)
    }
  />
</PayPalProvider>;
```

### GooglePayOneTimePaymentButton

Renders a native Google Pay button for one-time payments. Requires `"googlepay-payments"` in the provider's `components` array.

Google Pay prerequisites:

1. Load Google Pay JS in your app HTML shell (for example `public/index.html`):

```html
<script async src="https://pay.google.com/gp/p/js/pay.js"></script>
```

2. Ensure the script is available before rendering `GooglePayOneTimePaymentButton`, since this component depends on `window.google.payments.api.PaymentsClient`.

```tsx
import {
  PayPalProvider,
  GooglePayOneTimePaymentButton,
  useEligibleMethods,
  INSTANCE_LOADING_STATE,
  usePayPal,
} from "@paypal/react-paypal-js/sdk-v6";

function GooglePayCheckout() {
  const { loadingStatus } = usePayPal();
  const { eligiblePaymentMethods, isLoading } = useEligibleMethods({
    payload: { currencyCode: "USD" },
  });

  if (loadingStatus === INSTANCE_LOADING_STATE.PENDING || isLoading) {
    return <div>Loading Google Pay...</div>;
  }

  const googlePayConfig = eligiblePaymentMethods?.isEligible("googlepay")
    ? eligiblePaymentMethods.getDetails("googlepay").config
    : null;

  if (!googlePayConfig) {
    return <div>Google Pay is not eligible for this buyer.</div>;
  }

  return (
    <GooglePayOneTimePaymentButton
      googlePayConfig={googlePayConfig}
      transactionInfo={{
        countryCode: "US",
        currencyCode: "USD",
        totalPriceStatus: "FINAL",
        totalPrice: "100.00",
      }}
      createOrder={async () => {
        const response = await fetch("/api/create-order", { method: "POST" });
        const { orderId } = await response.json();
        return { orderId };
      }}
      onApprove={(data) => console.log("Google Pay approved", data)}
      onCancel={() => console.log("Google Pay cancelled")}
      onError={(error) => console.error("Google Pay error", error)}
      buttonType="pay"
      buttonColor="default"
      buttonSizeMode="fill"
    />
  );
}

function App() {
  return (
    <PayPalProvider
      clientId="your-client-id"
      environment="sandbox"
      components={["googlepay-payments"]}
      pageType="checkout"
    >
      <GooglePayCheckout />
    </PayPalProvider>
  );
}
```

**Props:** Accepts the order-creation and callback props from [Common Button Props](#common-button-props) (`createOrder`, `onApprove`, `onCancel`, `onError`, `disabled`), plus the following Google Pay–specific props:

| Prop              | Type                                     | Description                                                                            |
| ----------------- | ---------------------------------------- | -------------------------------------------------------------------------------------- |
| `googlePayConfig` | `GooglePayConfigFromFindEligibleMethods` | Google Pay config returned by `eligiblePaymentMethods.getDetails("googlepay")`         |
| `transactionInfo` | `GooglePayTransactionInfo`               | Google Pay transaction details (country, currency, amount, and optional display items) |
| `environment`     | `"TEST" \| "PRODUCTION"`                 | Google Pay environment (default: `"TEST"`)                                             |
| `buttonType`      | `"pay" \| ...`                           | Google Pay button type                                                                 |
| `buttonColor`     | `"default" \| "black" \| "white"`        | Google Pay button color                                                                |
| `buttonSizeMode`  | `"fill" \| "static"`                     | Google Pay button size mode                                                            |
| `buttonLocale`    | `string`                                 | Google Pay button locale                                                               |

### PayLaterOneTimePaymentButton

Renders a Pay Later button for financing options. Country code and product code are automatically populated from eligibility data, so eligibility must be fetched first — via `useEligibleMethods()` client-side (shown below) or the provider's `eligibleMethodsResponse` prop server-side.

**Props:** Accepts all [Common Button Props](#common-button-props). `countryCode` and `productCode` are populated automatically from eligibility data (no props to pass).

```tsx
import {
  PayLaterOneTimePaymentButton,
  useEligibleMethods,
} from "@paypal/react-paypal-js/sdk-v6";

function PayLaterCheckout() {
  // Fetch eligibility first (or hydrate server-side via eligibleMethodsResponse)
  const { eligiblePaymentMethods, isLoading } = useEligibleMethods({
    payload: { purchase_units: [{ amount: { currency_code: "USD" } }] },
  });

  if (isLoading) {
    return <Spinner />;
  }
  if (!eligiblePaymentMethods?.isEligible("paylater")) {
    return null;
  }

  return (
    <PayLaterOneTimePaymentButton
      createOrder={async () => {
        const { orderId } = await createOrder();
        return { orderId };
      }}
      onApprove={(data: OnApproveDataOneTimePayments) =>
        console.log("Pay Later approved!", data)
      }
      onCancel={(data: OnCancelDataOneTimePayments) =>
        console.log("Pay Later cancelled", data)
      }
      onError={(data: OnErrorData) => console.error("Pay Later error:", data)}
      onComplete={(data: OnCompleteData) =>
        console.log("Pay Later flow completed", data)
      }
    />
  );
}
```

### PayPalGuestPaymentButton

Renders a guest checkout button for card payments without a PayPal account (Branded Card/Debit Card checkout). Requires `"paypal-guest-payments"` in the provider's `components` array.

**Props:** Accepts the order-creation and callback props from [Common Button Props](#common-button-props) (`orderId`/`createOrder`, `presentationMode`, `onApprove`, `onCancel`, `onError`, `onComplete`, `disabled`). This button has no `type` prop.

```tsx
import { PayPalGuestPaymentButton } from "@paypal/react-paypal-js/sdk-v6";

<PayPalProvider
  clientId={clientId}
  environment="sandbox"
  components={["paypal-payments", "paypal-guest-payments"]}
  pageType="checkout"
>
  <PayPalGuestPaymentButton
    createOrder={async () => {
      const { orderId } = await createOrder();
      return { orderId };
    }}
    onApprove={(data: OnApproveDataOneTimePayments) =>
      console.log("Guest payment approved!", data)
    }
    onCancel={(data: OnCancelDataOneTimePayments) =>
      console.log("Guest payment cancelled", data)
    }
    onError={(data: OnErrorData) => console.error("Guest payment error:", data)}
    onComplete={(data: OnCompleteData) =>
      console.log("Guest payment flow completed", data)
    }
  />
</PayPalProvider>;
```

### PayPalSavePaymentButton

Renders a button for vaulting a payment method without making a purchase.

**Props:** Accepts the callback and presentation props from [Common Button Props](#common-button-props) (`presentationMode`, `onApprove`, `onCancel`, `onError`, `onComplete`, `type`, `disabled`), but replaces order creation with:

| Prop               | Type                                         | Required | Description                                                  |
| ------------------ | -------------------------------------------- | -------- | ------------------------------------------------------------ |
| `createVaultToken` | `() => Promise<{ vaultSetupToken: string }>` | Yes\*    | Async function that returns a vault setup token              |
| `vaultSetupToken`  | `string`                                     | Yes\*    | Static vault setup token (alternative to `createVaultToken`) |

<sub>\* Provide exactly one of `createVaultToken` or `vaultSetupToken`. `onApprove` receives `OnApproveDataSavePayments` (with `vaultSetupToken`).</sub>

```tsx
import { PayPalSavePaymentButton } from "@paypal/react-paypal-js/sdk-v6";

<PayPalSavePaymentButton
  createVaultToken={async () => {
    const response = await fetch("/api/create-vault-token", {
      method: "POST",
    });
    const { vaultSetupToken } = await response.json();
    return { vaultSetupToken };
  }}
  onApprove={({ vaultSetupToken }: OnApproveDataSavePayments) => {
    console.log("Payment method saved:", vaultSetupToken);
  }}
  onCancel={(data: OnCancelDataSavePayments) =>
    console.log("Save payment cancelled", data)
  }
  onError={(data: OnErrorData) => console.error("Save payment error:", data)}
  onComplete={(data: OnCompleteData) =>
    console.log("Save payment flow completed", data)
  }
/>;
```

### PayPalSubscriptionButton

Renders a PayPal button for subscription payments. Requires `"paypal-subscriptions"` in the provider's `components` array.

**Props:** Accepts the callback and presentation props from [Common Button Props](#common-button-props) (`presentationMode`, `onApprove`, `onCancel`, `onError`, `onComplete`, `type`, `disabled`; `type` defaults to `"subscribe"`), but replaces order creation with:

| Prop                 | Type                                        | Required | Description                                                  |
| -------------------- | ------------------------------------------- | -------- | ------------------------------------------------------------ |
| `createSubscription` | `() => Promise<{ subscriptionId: string }>` | Yes\*    | Async function that returns a subscription ID                |
| `subscriptionId`     | `string`                                    | Yes\*    | Static subscription ID (alternative to `createSubscription`) |

<sub>\* Provide exactly one of `createSubscription` or `subscriptionId`.</sub>

```tsx
import { PayPalSubscriptionButton } from "@paypal/react-paypal-js/sdk-v6";

<PayPalProvider
  clientId={clientId}
  environment="sandbox"
  components={["paypal-subscriptions"]}
  pageType="checkout"
>
  <PayPalSubscriptionButton
    createSubscription={async () => {
      const response = await fetch("/api/create-subscription", {
        method: "POST",
      });
      const { subscriptionId } = await response.json();
      return { subscriptionId };
    }}
    onApprove={(data: OnApproveDataOneTimePayments) =>
      console.log("Subscription approved:", data)
    }
    onCancel={(data: OnCancelDataOneTimePayments) =>
      console.log("Subscription cancelled", data)
    }
    onError={(data: OnErrorData) => console.error("Subscription error:", data)}
    onComplete={(data: OnCompleteData) =>
      console.log("Subscription flow completed", data)
    }
  />
</PayPalProvider>;
```

### PayPalCreditOneTimePaymentButton

Renders a PayPal Credit button for one-time payments. The `countryCode` is automatically populated from eligibility data, so eligibility must be fetched first — via `useEligibleMethods()` client-side (shown below) or the provider's `eligibleMethodsResponse` prop server-side.

**Props:** Accepts all [Common Button Props](#common-button-props). `countryCode` is populated automatically from eligibility data (no prop to pass).

```tsx
import {
  PayPalCreditOneTimePaymentButton,
  useEligibleMethods,
} from "@paypal/react-paypal-js/sdk-v6";

function CreditCheckout() {
  // Fetch eligibility first (or hydrate server-side via eligibleMethodsResponse)
  const { eligiblePaymentMethods, isLoading } = useEligibleMethods({
    payload: { purchase_units: [{ amount: { currency_code: "USD" } }] },
  });

  if (isLoading) {
    return <Spinner />;
  }
  if (!eligiblePaymentMethods?.isEligible("credit")) {
    return null;
  }

  return (
    <PayPalCreditOneTimePaymentButton
      createOrder={async () => {
        const response = await fetch("/api/create-order", { method: "POST" });
        const { orderId } = await response.json();
        return { orderId };
      }}
      onApprove={({ orderId }: OnApproveDataOneTimePayments) =>
        console.log("Credit payment approved:", orderId)
      }
      onCancel={(data: OnCancelDataOneTimePayments) =>
        console.log("Credit payment cancelled", data)
      }
      onError={(data: OnErrorData) =>
        console.error("Credit payment error:", data)
      }
      onComplete={(data: OnCompleteData) =>
        console.log("Credit payment flow completed", data)
      }
    />
  );
}
```

### PayPalCreditSavePaymentButton

Renders a PayPal Credit button for saving a credit payment method (vaulting). The `countryCode` is automatically populated from eligibility data, so eligibility must be fetched first — via `useEligibleMethods()` client-side (shown below) or the provider's `eligibleMethodsResponse` prop server-side.

**Props:** Accepts the callback and presentation props from [Common Button Props](#common-button-props) (`presentationMode`, `onApprove`, `onCancel`, `onError`, `onComplete`, `disabled`), but replaces order creation with `createVaultToken`/`vaultSetupToken` (same as [PayPalSavePaymentButton](#paypalsavepaymentbutton)). `countryCode` is populated automatically from eligibility data.

```tsx
import {
  PayPalCreditSavePaymentButton,
  useEligibleMethods,
} from "@paypal/react-paypal-js/sdk-v6";

function CreditSaveCheckout() {
  // Fetch eligibility first (or hydrate server-side via eligibleMethodsResponse)
  const { eligiblePaymentMethods, isLoading } = useEligibleMethods({
    payload: { purchase_units: [{ amount: { currency_code: "USD" } }] },
  });

  if (isLoading) {
    return <Spinner />;
  }
  if (!eligiblePaymentMethods?.isEligible("credit")) {
    return null;
  }

  return (
    <PayPalCreditSavePaymentButton
      createVaultToken={async () => {
        const response = await fetch("/api/create-vault-token", {
          method: "POST",
        });
        const { vaultSetupToken } = await response.json();
        return { vaultSetupToken };
      }}
      onApprove={(data: OnApproveDataSavePayments) =>
        console.log("Credit saved:", data)
      }
      onCancel={(data: OnCancelDataSavePayments) =>
        console.log("Credit save cancelled", data)
      }
      onError={(data: OnErrorData) => console.error("Credit save error:", data)}
      onComplete={(data: OnCompleteData) =>
        console.log("Credit save flow completed", data)
      }
    />
  );
}
```

### ApplePayOneTimePaymentButton

Renders Apple's native `<apple-pay-button>` web component and manages the full Apple Pay payment flow — including merchant validation, payment authorization, and order confirmation — via the PayPal SDK.

**Requirements:**

- Safari browser (macOS 10.12+ / iOS 10+)
- HTTPS connection
- Apple Pay configured on the user's device
- `components={["applepay-payments"]}` in `PayPalProvider`
- Apple Pay JS SDK loaded via a script tag in your HTML:

```html
<script
  crossorigin
  src="https://applepay.cdn-apple.com/jsapi/1.latest/apple-pay-sdk.js"
></script>
```

**Integration steps:**

1. Check `window.ApplePaySession?.canMakePayments()` — only render the button if this returns `true`. Wrap in `try-catch` because it throws on non-HTTPS connections.
2. Call `useEligibleMethods()` to fetch eligibility and obtain `applePayConfig` from `getDetails("applepay").config`.
3. Pass `applePayConfig` explicitly to the component — it is a required prop.

```tsx
import {
  PayPalProvider,
  ApplePayOneTimePaymentButton,
  useEligibleMethods,
} from "@paypal/react-paypal-js/sdk-v6";

async function createOrder() {
  const response = await fetch("/api/paypal/create-order", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      items: [{ id: "item-1", quantity: 1 }],
    }),
  });
  const data = await response.json();
  return { orderId: data.id };
}

async function onApprove(data) {
  // confirmOrder is handled internally by the hook.
  // Capture the order using the ID from the confirmation response.
  const orderId = data.approveApplePayPayment.id;
  const response = await fetch(`/api/paypal/capture/${orderId}`, {
    method: "POST",
  });
  const result = await response.json();
  console.log("Apple Pay payment captured:", result);
}

function ApplePayCheckout() {
  // Step 1: Check if Apple Pay is supported by the browser/device.
  // canMakePayments() throws on non-HTTPS, so wrap in try-catch.
  let canUseApplePay = false;
  try {
    canUseApplePay =
      typeof window !== "undefined" &&
      !!window.ApplePaySession?.canMakePayments();
  } catch {
    // Not available (e.g., non-HTTPS environment)
  }

  // Step 2: Fetch eligibility.
  // Note: hooks must be called unconditionally (React rules of hooks).
  // To avoid the eligibility API call on unsupported browsers, split the
  // check and the button into separate components in your app.
  const { eligiblePaymentMethods, isLoading, error } = useEligibleMethods({
    payload: { currencyCode: "USD" },
  });

  if (!canUseApplePay) {
    return <div>Apple Pay is not available in this browser.</div>;
  }
  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error: {error.message}</div>;
  }

  // Step 3: Check merchant eligibility and get config.
  const isEligible = eligiblePaymentMethods?.isEligible("applepay");
  if (!isEligible) {
    return <div>Apple Pay is not eligible.</div>;
  }

  const applePayConfig = eligiblePaymentMethods?.getDetails("applepay")?.config;
  if (!applePayConfig) {
    return null;
  }

  return (
    <ApplePayOneTimePaymentButton
      applePayConfig={applePayConfig}
      paymentRequest={{
        countryCode: "US",
        currencyCode: "USD",
        requiredBillingContactFields: [
          "name",
          "phone",
          "email",
          "postalAddress",
        ],
        requiredShippingContactFields: [],
        total: {
          label: "Demo (Card is not charged)",
          amount: "20.00",
          type: "final",
        },
      }}
      createOrder={createOrder}
      onApprove={onApprove}
      onCancel={() => console.log("Apple Pay cancelled")}
      onError={(error) => console.error("Apple Pay error:", error)}
      applePaySessionVersion={4}
      buttonstyle="black"
      type="buy"
    />
  );
}

export default function App() {
  return (
    <PayPalProvider
      clientId="YOUR_CLIENT_ID"
      environment="sandbox"
      components={["applepay-payments"]}
      pageType="checkout"
    >
      <ApplePayCheckout />
    </PayPalProvider>
  );
}
```

**Props:** Apple Pay is a specialized native button whose callbacks differ from the [Common Button Props](#common-button-props) (notably, `onApprove` receives a `ConfirmOrderResponse`). Its full prop set is listed below.

| Prop                     | Type                                                                             | Required | Description                                                                        |
| ------------------------ | -------------------------------------------------------------------------------- | -------- | ---------------------------------------------------------------------------------- |
| `applePayConfig`         | `ApplePayConfig`                                                                 | Yes      | Config object from `useEligibleMethods().getDetails("applepay").config`            |
| `paymentRequest`         | `ApplePayPaymentRequest`                                                         | Yes      | Apple Pay payment request (countryCode, currencyCode, total, etc.)                 |
| `createOrder`            | `() => Promise<{ orderId: string }>`                                             | Yes      | Called during authorization to create the PayPal order                             |
| `onApprove`              | `(data: ConfirmOrderResponse) => void`                                           | Yes      | Called after payment confirmation; use `data.approveApplePayPayment.id` to capture |
| `onCancel`               | `() => void`                                                                     | No       | Called when the buyer dismisses the payment sheet                                  |
| `onError`                | `(error: Error) => void`                                                         | No       | Called on errors (merchant validation failure, network error, etc.)                |
| `applePaySessionVersion` | `number`                                                                         | No       | Apple Pay JS API version passed to `ApplePaySession` (minimum: 4)                  |
| `buttonstyle`            | `"black" \| "white" \| "white-outline"`                                          | No       | Visual style of the Apple Pay button                                               |
| `type`                   | `"pay" \| "buy" \| "set-up" \| "donate" \| "check-out" \| "book" \| "subscribe"` | No       | Label displayed on the button                                                      |
| `locale`                 | `string`                                                                         | No       | Locale for the button label (e.g., `"en"`, `"fr"`, `"ja"`)                         |
| `disabled`               | `boolean`                                                                        | No       | Disables the button                                                                |

**Key differences from other PayPal buttons:**

- No `presentationMode` — Apple controls the native payment sheet UI
- No eager order creation (`orderId` prop) — orders are always created lazily during payment authorization
- `applePayConfig` is required and must be obtained from `useEligibleMethods()`
- `onApprove` receives `ConfirmOrderResponse` — capture the order using `data.approveApplePayPayment.id`

## Payment Flow

1. User clicks a payment button
2. `handleClick()` starts the payment session
3. `createOrder` callback creates an order via your backend API
4. PayPal opens the checkout experience (popup/modal/redirect)
5. On approval, `onApprove` callback captures the order via the backend
6. Success/error handling displays the result to the user

## Card Fields Components

Card Fields components provide customizable card input fields for collecting payment details directly on your page.

Requires `"card-fields"` in the provider's `components` array.

### PayPalCardFieldsProvider

Wraps card field components and manages the Card Fields session.

```tsx
import {
  PayPalProvider,
  PayPalCardFieldsProvider,
} from "@paypal/react-paypal-js/sdk-v6";

function App() {
  return (
    <PayPalProvider
      clientToken="your-client-token"
      environment="sandbox"
      components={["card-fields"]}
      pageType="checkout"
    >
      <CheckoutForm />
    </PayPalProvider>
  );
}

function CheckoutForm() {
  return (
    <PayPalCardFieldsProvider>
      <CardPaymentForm />
    </PayPalCardFieldsProvider>
  );
}
```

**Props:**

| Prop                  | Type              | Required | Description                                                                       |
| --------------------- | ----------------- | -------- | --------------------------------------------------------------------------------- |
| `amount`              | `OrderAmount`     | No       | Amount for the card transaction (e.g., `{ value: "10.00", currencyCode: "USD" }`) |
| `isCobrandedEligible` | `boolean`         | No       | Enable co-branded card eligibility                                                |
| `blur`                | `(event) => void` | No       | Callback when a field loses focus                                                 |
| `change`              | `(event) => void` | No       | Callback when field value changes                                                 |
| `focus`               | `(event) => void` | No       | Callback when field receives focus                                                |
| `empty`               | `(event) => void` | No       | Callback when field becomes empty                                                 |
| `notempty`            | `(event) => void` | No       | Callback when field becomes non-empty                                             |
| `validitychange`      | `(event) => void` | No       | Callback when field validity changes                                              |
| `cardtypechange`      | `(event) => void` | No       | Callback when detected card type changes                                          |
| `inputsubmit`         | `(event) => void` | No       | Callback when submit key is pressed in field                                      |

### PayPalCardNumberField

Renders a card number input field. Must be used within a [PayPalCardFieldsProvider](#paypalcardfieldsprovider) component.

```tsx
import { PayPalCardNumberField } from "@paypal/react-paypal-js/sdk-v6";

<PayPalCardNumberField
  placeholder="Card number"
  containerStyles={{ height: "3rem", marginBottom: "1rem" }}
/>;
```

### PayPalCardExpiryField

Renders a card expiry input field. Must be used within a [PayPalCardFieldsProvider](#paypalcardfieldsprovider) component.

```tsx
import { PayPalCardExpiryField } from "@paypal/react-paypal-js/sdk-v6";

<PayPalCardExpiryField
  placeholder="MM/YY"
  containerStyles={{ height: "3rem", marginBottom: "1rem" }}
/>;
```

### PayPalCardCvvField

Renders a CVV input field. Must be used within a [PayPalCardFieldsProvider](#paypalcardfieldsprovider) component.

```tsx
import { PayPalCardCvvField } from "@paypal/react-paypal-js/sdk-v6";

<PayPalCardCvvField
  placeholder="CVV"
  containerStyles={{ height: "3rem", marginBottom: "1rem" }}
/>;
```

### Field Component Props

All field components ([`PayPalCardNumberField`](#paypalcardnumberfield), [`PayPalCardExpiryField`](#paypalcardexpiryfield), [`PayPalCardCvvField`](#paypalcardcvvfield)) accept the same set of props. They combine container styling properties with CardField-specific configuration options.

| Prop                      | Type                  | Required | Description                                    |
| ------------------------- | --------------------- | -------- | ---------------------------------------------- |
| `placeholder`             | `string`              | No       | Placeholder text for the field                 |
| `label`                   | `string`              | No       | Label text for the field                       |
| `style`                   | `MerchantStyleObject` | No       | Style object for the field                     |
| `ariaLabel`               | `string`              | No       | ARIA label for accessibility                   |
| `ariaDescription`         | `string`              | No       | ARIA description for accessibility             |
| `ariaInvalidErrorMessage` | `string`              | No       | ARIA error message when field is invalid       |
| `containerStyles`         | `React.CSSProperties` | No       | CSS styles for the field container wrapper     |
| `containerClassName`      | `string`              | No       | CSS class name for the field container wrapper |

## Payment Flow: Card Fields

1. User enters card number, expiry, and CVV in the card fields
2. User clicks your submit button
3. `createOrder` creates an order via your backend API
4. `submit(orderId)` processes the card payment with the order ID
5. `submitResponse` object gets updated with the payment result
6. Handle submit response based on payment result

## Hooks API

### usePayPal

Returns the PayPal context including the SDK instance and loading status.

```tsx
import {
  usePayPal,
  INSTANCE_LOADING_STATE,
} from "@paypal/react-paypal-js/sdk-v6";

function MyComponent() {
  const {
    sdkInstance, // The PayPal SDK instance
    eligiblePaymentMethods, // Eligible payment methods
    loadingStatus, // PENDING | RESOLVED | REJECTED
    error, // Any initialization error
    isHydrated, // SSR hydration status
  } = usePayPal();

  const isPending = loadingStatus === INSTANCE_LOADING_STATE.PENDING;
  const isReady = loadingStatus === INSTANCE_LOADING_STATE.RESOLVED;

  // ...
}
```

### useEligibleMethods

Returns eligible payment methods and loading state. Use this to conditionally render payment buttons based on eligibility. This hook also updates the `PayPalProvider` reducer with Eligibility Output from the SDK, enabling built-in eligibility features in the UI Button components.

View the [Find Eligible Methods API reference](https://developer.paypal.com/docs/api/payments/v2/#find_eligible_methods) for the underlying REST endpoint details.

```tsx
import { useEligibleMethods } from "@paypal/react-paypal-js/sdk-v6";

function PaymentOptions() {
  const { eligiblePaymentMethods, isLoading, error } = useEligibleMethods();

  if (isLoading) {
    return <div>Checking eligibility...</div>;
  }

  const isPayPalEligible = eligiblePaymentMethods?.isEligible("paypal");
  const isVenmoEligible = eligiblePaymentMethods?.isEligible("venmo");
  const isPayLaterEligible = eligiblePaymentMethods?.isEligible("paylater");

  return (
    <div>
      {isPayPalEligible && <PayPalOneTimePaymentButton {...props} />}
      {isVenmoEligible && <VenmoOneTimePaymentButton {...props} />}
      {isPayLaterEligible && <PayLaterOneTimePaymentButton {...props} />}
    </div>
  );
}
```

#### Stale Eligibility Data Prevention

When navigating between different payment flows (e.g., from a save payment page with `paymentFlow: "VAULT_WITHOUT_PAYMENT"` to a checkout page with `paymentFlow: "ONE_TIME_PAYMENT"`), `isLoading` will return `true` while the new eligibility data is being fetched. This prevents stale buttons from flashing before the updated eligibility response arrives.

If your app uses a single `PayPalProvider` across multiple routes with different `paymentFlow` values, always check `isLoading` before rendering eligibility-dependent buttons:

```tsx
const { eligiblePaymentMethods, isLoading } = useEligibleMethods({
  payload: { currencyCode: "USD", paymentFlow: "ONE_TIME_PAYMENT" },
});

// Guard eligibility-dependent buttons with isLoading to avoid rendering
// buttons based on stale data from a previous payment flow
const isPayLaterEligible =
  !isLoading && eligiblePaymentMethods?.isEligible("paylater");
```

### usePayPalMessages

Hook for integrating PayPal messaging (Pay Later promotions).

```tsx
import { usePayPalMessages } from "@paypal/react-paypal-js/sdk-v6";

function PayLaterMessage() {
  const { error, isReady, handleFetchContent, handleCreateLearnMore } =
    usePayPalMessages({
      buyerCountry: "US",
      currencyCode: "USD",
    });

  // Use to display financing messages
}
```

### usePayPalCardFields

Returns the Card Fields instance initialization errors. Must be used within a [PayPalCardFieldsProvider](#paypalcardfieldsprovider) component.

```tsx
import { usePayPalCardFields } from "@paypal/react-paypal-js/sdk-v6";

function CardFields() {
  const { error } = usePayPalCardFields();

  useEffect(() => {
    if (error) {
      // Handle error logic
      console.error("Error initializing PayPal Card Fields: ", error);
    }
  }, [error]);

  return <CardPaymentForm />;
}
```

### Payment Session Hooks

For advanced use cases where you need full control over the payment flow, use the session hooks directly with web components.

> **Note:** One-time payment session hooks (e.g., `usePayPalOneTimePaymentSession`) accept either a static `orderId` or a `createOrder` callback — they are mutually exclusive. Use `orderId` when you've already created the order, or `createOrder` to defer order creation until the buyer clicks. The same pattern applies to save payment hooks with `vaultSetupToken` vs `createVaultToken`.

| Hook                                   | Payment Type        |
| -------------------------------------- | ------------------- |
| `usePayPalOneTimePaymentSession`       | PayPal              |
| `useVenmoOneTimePaymentSession`        | Venmo               |
| `usePayLaterOneTimePaymentSession`     | Pay Later           |
| `usePayPalGuestPaymentSession`         | Basic Card          |
| `usePayPalSubscriptionPaymentSession`  | Subscriptions       |
| `usePayPalSavePaymentSession`          | Save Payment Method |
| `usePayPalCreditOneTimePaymentSession` | Credit (One-time)   |
| `usePayPalCreditSavePaymentSession`    | Credit (Save)       |
| `useGooglePayOneTimePaymentSession`    | Google Pay          |
| `useApplePayOneTimePaymentSession`     | Apple Pay           |

#### usePayPalOneTimePaymentSession

```tsx
import { usePayPalOneTimePaymentSession } from "@paypal/react-paypal-js/sdk-v6";

function CustomPayPalButton() {
  const { isPending, error, handleClick } = usePayPalOneTimePaymentSession({
    createOrder: async () => {
      const { orderId } = await createOrder();
      return { orderId };
    },
    onApprove: (data: OnApproveDataOneTimePayments) =>
      console.log("Approved:", data),
    onCancel: (data: OnCancelDataOneTimePayments) => console.log("Cancelled"),
    onError: (data: OnErrorData) => console.error(data),
    onComplete: (data: OnCompleteData) =>
      console.log("Payment session complete", data),
  });

  return (
    <paypal-button
      onClick={() => handleClick()}
      type="pay"
      disabled={isPending || error !== null}
    />
  );
}
```

#### useVenmoOneTimePaymentSession

```tsx
import { useVenmoOneTimePaymentSession } from "@paypal/react-paypal-js/sdk-v6";

function CustomVenmoButton() {
  const { handleClick } = useVenmoOneTimePaymentSession({
    createOrder: async () => {
      const { orderId } = await createOrder();
      return { orderId };
    },
    onApprove: (data: OnApproveDataOneTimePayments) =>
      console.log("Approved:", data),
    onCancel: (data: OnCancelDataOneTimePayments) =>
      console.log("Cancelled", data),
    onError: (data: OnErrorData) => console.error("Error:", data),
    onComplete: (data: OnCompleteData) =>
      console.log("Payment session complete", data),
  });

  return <venmo-button onClick={() => handleClick()} />;
}
```

#### usePayLaterOneTimePaymentSession

```tsx
import {
  usePayLaterOneTimePaymentSession,
  useEligibleMethods,
} from "@paypal/react-paypal-js/sdk-v6";

function CustomPayLaterButton() {
  const { handleClick } = usePayLaterOneTimePaymentSession({
    createOrder: async () => {
      const { orderId } = await createOrder();
      return { orderId };
    },
    onApprove: (data: OnApproveDataOneTimePayments) =>
      console.log("Approved:", data),
    onCancel: (data: OnCancelDataOneTimePayments) =>
      console.log("Cancelled", data),
    onError: (data: OnErrorData) => console.error("Error:", data),
    onComplete: (data: OnCompleteData) =>
      console.log("Payment session complete", data),
  });

  // Fetch eligibility to obtain the countryCode/productCode the button needs
  const { eligiblePaymentMethods, isLoading } = useEligibleMethods({
    payload: { purchase_units: [{ amount: { currency_code: "USD" } }] },
  });

  if (isLoading) {
    return null;
  }
  if (!eligiblePaymentMethods?.isEligible("paylater")) {
    return null;
  }

  const payLaterDetails = eligiblePaymentMethods.getDetails("paylater");

  return (
    <paypal-pay-later-button
      onClick={() => handleClick()}
      countryCode={payLaterDetails?.countryCode}
      productCode={payLaterDetails?.productCode}
    />
  );
}
```

#### usePayPalGuestPaymentSession

```tsx
import { usePayPalGuestPaymentSession } from "@paypal/react-paypal-js/sdk-v6";

function CustomPayPalGuestButton() {
  const { handleClick, buttonRef } = usePayPalGuestPaymentSession({
    createOrder: async () => {
      const { orderId } = await createOrder();
      return { orderId };
    },
    onApprove: (data: OnApproveDataOneTimePayments) =>
      console.log("Approved:", data),
    onCancel: (data: OnCancelDataOneTimePayments) =>
      console.log("Cancelled", data),
    onError: (data: OnErrorData) => console.error("Error:", data),
    onComplete: (data: OnCompleteData) =>
      console.log("Payment session complete", data),
  });

  return (
    <paypal-basic-card-container>
      <paypal-basic-card-button ref={buttonRef} onClick={() => handleClick()} />
    </paypal-basic-card-container>
  );
}
```

#### usePayPalSavePaymentSession

```tsx
import { usePayPalSavePaymentSession } from "@paypal/react-paypal-js/sdk-v6";

function CustomPayPalSaveButton() {
  const { handleClick } = usePayPalSavePaymentSession({
    createVaultToken: async () => {
      const { vaultSetupToken } = await createVaultToken();
      return { vaultSetupToken };
    },
    onApprove: (data: OnApproveDataSavePayments) => console.log("Saved:", data),
    onCancel: (data: OnCancelDataSavePayments) =>
      console.log("Cancelled", data),
    onError: (data: OnErrorData) => console.error("Error:", data),
    onComplete: (data: OnCompleteData) =>
      console.log("Payment session complete", data),
  });

  return <paypal-button onClick={() => handleClick()} type="pay" />;
}
```

#### usePayPalSubscriptionPaymentSession

```tsx
import { usePayPalSubscriptionPaymentSession } from "@paypal/react-paypal-js/sdk-v6";

function CustomPayPalSubscriptionButton() {
  const { handleClick } = usePayPalSubscriptionPaymentSession({
    createSubscription: async () => {
      const response = await fetch("/api/create-subscription", {
        method: "POST",
      });
      const { subscriptionId } = await response.json();
      return { subscriptionId };
    },
    onApprove: (data: OnApproveDataOneTimePayments) =>
      console.log("Subscription approved:", data),
    onCancel: (data: OnCancelDataOneTimePayments) =>
      console.log("Cancelled", data),
    onError: (data: OnErrorData) => console.error("Error:", data),
    onComplete: (data: OnCompleteData) =>
      console.log("Payment session complete", data),
  });

  return <paypal-button onClick={() => handleClick()} type="subscribe" />;
}
```

#### usePayPalCreditOneTimePaymentSession

For PayPal Credit one-time payments.

```tsx
import {
  usePayPalCreditOneTimePaymentSession,
  useEligibleMethods,
} from "@paypal/react-paypal-js/sdk-v6";

function CustomPayPalCreditButton() {
  const { handleClick } = usePayPalCreditOneTimePaymentSession({
    createOrder: async () => {
      const { orderId } = await createOrder();
      return { orderId };
    },
    onApprove: (data: OnApproveDataOneTimePayments) =>
      console.log("Credit approved:", data),
    onCancel: (data: OnCancelDataOneTimePayments) =>
      console.log("Cancelled", data),
    onError: (data: OnErrorData) => console.error("Error:", data),
    onComplete: (data: OnCompleteData) =>
      console.log("Payment session complete", data),
  });

  // Fetch eligibility to obtain the countryCode the button needs
  const { eligiblePaymentMethods, isLoading } = useEligibleMethods({
    payload: { purchase_units: [{ amount: { currency_code: "USD" } }] },
  });

  if (isLoading) {
    return null;
  }
  if (!eligiblePaymentMethods?.isEligible("credit")) {
    return null;
  }

  const creditDetails = eligiblePaymentMethods.getDetails("credit");

  return (
    <paypal-credit-button
      onClick={() => handleClick()}
      countryCode={creditDetails?.countryCode}
    />
  );
}
```

#### usePayPalCreditSavePaymentSession

For saving PayPal Credit as a payment method.

```tsx
import {
  usePayPalCreditSavePaymentSession,
  useEligibleMethods,
} from "@paypal/react-paypal-js/sdk-v6";

function CustomPayPalCreditSaveButton() {
  const { handleClick } = usePayPalCreditSavePaymentSession({
    createVaultToken: async () => {
      const { vaultSetupToken } = await createVaultSetupToken();
      return { vaultSetupToken };
    },
    onApprove: (data: OnApproveDataSavePayments) =>
      console.log("Credit approved:", data),
    onCancel: (data: OnCancelDataSavePayments) =>
      console.log("Cancelled", data),
    onError: (data: OnErrorData) => console.error("Error:", data),
    onComplete: (data: OnCompleteData) =>
      console.log("Payment session complete", data),
  });

  // Fetch eligibility to obtain the countryCode the button needs
  const { eligiblePaymentMethods, isLoading } = useEligibleMethods({
    payload: { purchase_units: [{ amount: { currency_code: "USD" } }] },
  });

  if (isLoading) {
    return null;
  }
  if (!eligiblePaymentMethods?.isEligible("credit")) {
    return null;
  }

  const creditDetails = eligiblePaymentMethods.getDetails("credit");

  return (
    <paypal-credit-button
      onClick={() => handleClick()}
      countryCode={creditDetails?.countryCode}
    />
  );
}
```

#### useApplePayOneTimePaymentSession

For advanced use cases where you need full control over the Apple Pay flow. Most integrations should use [`ApplePayOneTimePaymentButton`](#applepayone-timepaymentbutton) instead.

```tsx
import {
  useApplePayOneTimePaymentSession,
  useEligibleMethods,
} from "@paypal/react-paypal-js/sdk-v6";

function CustomApplePayButton() {
  const { eligiblePaymentMethods, isLoading } = useEligibleMethods({
    payload: { currencyCode: "USD" },
  });

  const applePayConfig =
    eligiblePaymentMethods?.getDetails("applepay")?.config ?? null;

  const { isPending, error, handleClick } = useApplePayOneTimePaymentSession({
    applePayConfig,
    paymentRequest: {
      countryCode: "US",
      currencyCode: "USD",
      total: { label: "My Store", amount: "100.00", type: "final" },
    },
    applePaySessionVersion: 4,
    createOrder: async () => {
      const response = await fetch("/api/paypal/create-order", {
        method: "POST",
      });
      const data = await response.json();
      return { orderId: data.id };
    },
    onApprove: async (data) => {
      const orderId = data.approveApplePayPayment.id;
      await fetch(`/api/paypal/capture/${orderId}`, { method: "POST" });
    },
    onError: (err) => console.error("Apple Pay error:", err),
  });

  if (isLoading || !applePayConfig) {
    return null;
  }
  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <apple-pay-button
      buttonstyle="black"
      type="buy"
      locale="en"
      onClick={() => handleClick()}
      disabled={isPending}
    />
  );
}
```

### Card Fields Session Hooks

Use these hooks to handle the Card Fields payment flows. The hooks must be used within a [`PayPalCardFieldsProvider`](#paypalcardfieldsprovider) component.

| Hook                                       | Payment Type |
| ------------------------------------------ | ------------ |
| `usePayPalCardFieldsOneTimePaymentSession` | One-time     |
| `usePayPalCardFieldsSavePaymentSession`    | Save/Vault   |

#### usePayPalCardFieldsOneTimePaymentSession

Hook for managing one-time payment Card Fields sessions.

```tsx
import { usePayPalCardFieldsOneTimePaymentSession } from "@paypal/react-paypal-js/sdk-v6";

function CardPaymentForm() {
  const { submit, submitResponse, error } =
    usePayPalCardFieldsOneTimePaymentSession();

  useEffect(() => {
    if (error) {
      // Handle submit error logic
      console.error("Error submitting PayPal Card Fields payment", error);
    }
  }, [error]);

  useEffect(() => {
    if (!submitResponse) {
      return;
    }

    const { orderId, message } = submitResponse.data;

    switch (submitResponse.state) {
      case "succeeded":
        // Handle submit success logic
        console.log(`One time payment succeeded: orderId: ${orderId}`);
        break;
      case "failed":
        // Handle submit failed response logic
        console.error(
          `One time payment failed: orderId: ${orderId}, message: ${message}`,
        );
        break;
    }
  }, [submitResponse]);

  const handleSubmit = async () => {
    const orderId = await createOrder();
    await submit(orderId);
  };

  return (
    <div>
      <PayPalCardNumberField />
      <PayPalCardExpiryField />
      <PayPalCardCvvField />
      <button onClick={handleSubmit}>Pay</button>
    </div>
  );
}
```

#### usePayPalCardFieldsSavePaymentSession

Hook for managing save payment Card Fields sessions.

```tsx
import { usePayPalCardFieldsSavePaymentSession } from "@paypal/react-paypal-js/sdk-v6";

function CardPaymentForm() {
  const { submit, submitResponse, error } =
    usePayPalCardFieldsSavePaymentSession();

  useEffect(() => {
    if (error) {
      // Handle submit error logic
      console.error(
        "Error submitting PayPal Card Fields payment method",
        error,
      );
    }
  }, [error]);

  useEffect(() => {
    if (!submitResponse) {
      return;
    }

    const { vaultSetupToken, message } = submitResponse.data;

    switch (submitResponse.state) {
      case "succeeded":
        // Handle submit success logic
        console.log(
          `Save payment method succeeded: vaultSetupToken: ${vaultSetupToken}`,
        );
        break;
      case "failed":
        // Handle submit failed response logic
        console.error(
          `Save payment method failed: vaultSetupToken: ${vaultSetupToken}, message: ${message}`,
        );
        break;
    }
  }, [submitResponse]);

  const handleSubmit = async () => {
    const { vaultSetupToken } = await createCardVaultToken();
    await submit(vaultSetupToken);
  };

  return (
    <div>
      <PayPalCardNumberField />
      <PayPalCardExpiryField />
      <PayPalCardCvvField />
      <button onClick={handleSubmit}>Save Payment Method</button>
    </div>
  );
}
```

## Braintree PayPal Integration

Braintree merchants use `BraintreePayPalProvider` instead of `PayPalProvider` to integrate PayPal via Braintree's [`paypalCheckoutV6`](https://braintree.github.io/braintree-web/current/PayPalCheckoutV6.html) module. This provider initializes the Braintree client, creates a PayPal Checkout V6 instance, and loads the PayPal SDK — then exposes the instance to child components and hooks via React context.

**Resources:**

- [Braintree PayPalCheckoutV6 API Reference](https://braintree.github.io/braintree-web/current/PayPalCheckoutV6.html) — full method signatures, options, and type definitions
- [Sample Integration Repo](https://github.com/paypal-examples/v6-web-sdk-with-braintree-sdk-sample-integration) — working Braintree + React example with setup instructions
- [Braintree Server SDK Guide](https://developer.paypal.com/braintree/docs/start/hello-server) — server-side nonce processing

### Prerequisites

- A Braintree merchant account with PayPal enabled
- A Braintree **client token** generated server-side via the [Braintree SDK](https://developer.paypal.com/braintree/docs/start/hello-server). See the [sample integration's gateway setup](https://github.com/paypal-examples/v6-web-sdk-with-braintree-sdk-sample-integration/blob/main/server/node/src/braintreeServerSdkClient.ts) and [client token route handler](https://github.com/paypal-examples/v6-web-sdk-with-braintree-sdk-sample-integration/blob/main/server/node/src/routes/authRouteHandler.ts) for a Node.js example.
- The Braintree Web `client` and `paypal-checkout-v6` scripts loaded before rendering:

```html
<script src="https://js.braintreegateway.com/web/3.142.0/js/client.min.js"></script>
<script src="https://js.braintreegateway.com/web/3.142.0/js/paypal-checkout-v6.min.js"></script>
```

### BraintreePayPalProvider

Wraps child components with Braintree context. On mount it validates the namespace, creates a Braintree client instance, creates a `paypalCheckoutV6` instance, and calls `loadPayPalSDK()`. On unmount it calls `teardown()` to release resources.

```tsx
import { useState, useEffect } from "react";
import { BraintreePayPalProvider } from "@paypal/react-paypal-js/sdk-v6";

declare global {
  interface Window {
    braintree: BraintreeV6Namespace;
  }
}

function App() {
  const [clientToken, setClientToken] = useState<string | undefined>(undefined);

  useEffect(() => {
    fetch("/auth/browser-safe-client-token")
      .then((res) => res.json())
      .then(({ clientToken }) => setClientToken(clientToken));
  }, []);

  if (!clientToken) {
    return <div>Loading...</div>;
  }

  return (
    <BraintreePayPalProvider
      namespace={window.braintree}
      braintreeClientToken={clientToken}
    >
      <CheckoutPage />
    </BraintreePayPalProvider>
  );
}
```

**Props:**

| Prop                   | Type                   | Required | Description                                                                                            |
| ---------------------- | ---------------------- | -------- | ------------------------------------------------------------------------------------------------------ |
| `namespace`            | `BraintreeV6Namespace` | Yes      | The `braintree` global namespace — must expose `client.create` and `paypalCheckoutV6.create` functions |
| `braintreeClientToken` | `string \| undefined`  | Yes      | Client token from your server (generated via the Braintree SDK)                                        |
| `children`             | `ReactNode`            | Yes      | Child components                                                                                       |

> **Note:** The `namespace` prop must have referential stability across renders. An unstable reference (e.g., creating the object inline) will cause re-initialization on every render. Use a module-level constant, `useRef`, or `useMemo`.

### BraintreePayPalOneTimePaymentButton

Renders a `<paypal-button>` web component for one-time Braintree PayPal payments. Internally uses `useBraintreePayPalOneTimePaymentSession` to create and start payment sessions.

```tsx
import {
  BraintreePayPalProvider,
  BraintreePayPalOneTimePaymentButton,
  useBraintreePayPal,
} from "@paypal/react-paypal-js/sdk-v6";
import type { BraintreeApprovalData } from "@paypal/react-paypal-js/sdk-v6";

function CheckoutPage() {
  const { braintreePayPalCheckoutInstance } = useBraintreePayPal();

  return (
    <BraintreePayPalOneTimePaymentButton
      amount="100.00"
      currency="USD"
      intent="capture"
      type="pay"
      onApprove={async (data: BraintreeApprovalData) => {
        const { nonce } =
          await braintreePayPalCheckoutInstance!.tokenizePayment(data);
        // Send nonce to your server
        await fetch("/api/braintree/checkout", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ nonce }),
        });
      }}
      onCancel={(data) => console.log("Cancelled", data)}
      onError={(err) => console.error("Error", err)}
    />
  );
}

function App() {
  const [clientToken, setClientToken] = useState<string | undefined>(undefined);

  useEffect(() => {
    fetch("/auth/browser-safe-client-token")
      .then((res) => res.json())
      .then(({ clientToken }) => setClientToken(clientToken));
  }, []);

  if (!clientToken) {
    return <div>Loading...</div>;
  }

  return (
    <BraintreePayPalProvider
      namespace={window.braintree}
      braintreeClientToken={clientToken}
    >
      <CheckoutPage />
    </BraintreePayPalProvider>
  );
}
```

**Props:**

| Prop                      | Type                                                          | Required | Description                                                       |
| ------------------------- | ------------------------------------------------------------- | -------- | ----------------------------------------------------------------- |
| `amount`                  | `string`                                                      | Yes      | Payment amount (e.g., `"100.00"`)                                 |
| `currency`                | `string`                                                      | Yes      | ISO 4217 currency code (e.g., `"USD"`)                            |
| `onApprove`               | `(data: BraintreeApprovalData) => Promise<void>`              | Yes      | Called when buyer approves — tokenize the payment here            |
| `intent`                  | `"authorize" \| "capture" \| "order"`                         | No       | Payment intent (default: `"capture"`)                             |
| `commit`                  | `boolean`                                                     | No       | `true` for "Pay Now", `false` for "Continue"                      |
| `offerCredit`             | `boolean`                                                     | No       | Offer PayPal Credit as default funding                            |
| `onCancel`                | `(data: BraintreeOnCancelData) => void`                       | No       | Called when buyer cancels                                         |
| `onError`                 | `(err: Error) => void`                                        | No       | Called on errors                                                  |
| `onShippingAddressChange` | `(data: BraintreeShippingAddressChangeData) => Promise<void>` | No       | Called when buyer changes shipping address                        |
| `onShippingOptionsChange` | `(data: BraintreeShippingOptionsChangeData) => Promise<void>` | No       | Called when buyer selects a shipping option                       |
| `lineItems`               | `BraintreeLineItem[]`                                         | No       | Line items for the transaction                                    |
| `shippingOptions`         | `BraintreeShippingOption[]`                                   | No       | Available shipping options                                        |
| `amountBreakdown`         | `BraintreeAmountBreakdown`                                    | No       | Breakdown of the total amount (item total, shipping, tax, etc.)   |
| `userAuthenticationEmail` | `string`                                                      | No       | Pre-fill the PayPal login email                                   |
| `displayName`             | `string`                                                      | No       | Merchant name displayed in the PayPal lightbox                    |
| `presentationMode`        | `BraintreePresentationMode`                                   | No       | UI mode: `"auto"`, `"popup"`, `"modal"`, `"redirect"`, etc.       |
| `returnUrl`               | `string`                                                      | No       | Return URL (required for `"direct-app-switch"` presentation mode) |
| `cancelUrl`               | `string`                                                      | No       | Cancel URL (required for `"direct-app-switch"` presentation mode) |
| `type`                    | `"pay" \| "checkout" \| "buynow" \| "donate" \| "subscribe"`  | No       | Button label type (default: `"pay"`)                              |
| `disabled`                | `boolean`                                                     | No       | Disable the button                                                |

### BraintreePayPalBillingAgreementButton

Renders a `<paypal-button>` for vault-only flows — saving a buyer's PayPal account as a payment method without an immediate charge. Supports subscription plans via `planType` and `planMetadata`.

```tsx
import {
  BraintreePayPalBillingAgreementButton,
  useBraintreePayPal,
} from "@paypal/react-paypal-js/sdk-v6";
import type { BraintreeApprovalData } from "@paypal/react-paypal-js/sdk-v6";

function BillingAgreementButton() {
  const { braintreePayPalCheckoutInstance } = useBraintreePayPal();

  return (
    <BraintreePayPalBillingAgreementButton
      type="subscribe"
      billingAgreementDescription="Monthly subscription to Premium"
      planType="SUBSCRIPTION"
      planMetadata={{
        currencyIsoCode: "USD",
        name: "Premium Plan",
        billingCycles: [
          {
            billingFrequency: 1,
            billingFrequencyUnit: "MONTH",
            numberOfExecutions: 0,
            sequence: 1,
            startDate: "2026-07-01T00:00:00Z",
            trial: false,
            pricingScheme: { pricingModel: "FIXED", price: "9.99" },
          },
        ],
      }}
      onApprove={async (data: BraintreeApprovalData) => {
        const { nonce } =
          await braintreePayPalCheckoutInstance!.tokenizePayment(data);
        await fetch("/api/braintree/vault", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ nonce }),
        });
      }}
      onCancel={(data) => console.log("Cancelled", data)}
      onError={(err) => console.error("Error", err)}
    />
  );
}
```

**Props:**

| Prop                          | Type                                                               | Required | Description                                                    |
| ----------------------------- | ------------------------------------------------------------------ | -------- | -------------------------------------------------------------- |
| `onApprove`                   | `(data: BraintreeApprovalData) => Promise<void>`                   | Yes      | Called when buyer approves — tokenize with `data.billingToken` |
| `billingAgreementDescription` | `string`                                                           | No       | Description shown to the buyer (e.g., "Monthly subscription")  |
| `planType`                    | `"RECURRING" \| "SUBSCRIPTION" \| "UNSCHEDULED" \| "INSTALLMENTS"` | No       | Type of billing plan                                           |
| `planMetadata`                | `BraintreePlanMetadata`                                            | No       | Subscription plan details including billing cycles             |
| `amount`                      | `string`                                                           | No       | Amount for vault-with-purchase flows                           |
| `currency`                    | `string`                                                           | No       | Currency for vault-with-purchase flows                         |
| `offerCredit`                 | `boolean`                                                          | No       | Offer PayPal Credit                                            |
| `userAction`                  | `"CONTINUE" \| "COMMIT" \| "SETUP_NOW"`                            | No       | Button action label                                            |
| `displayName`                 | `string`                                                           | No       | Merchant name in the PayPal lightbox                           |
| `shippingAddressOverride`     | `Record<string, unknown>`                                          | No       | Pre-collected shipping address                                 |
| `onCancel`                    | `(data: BraintreeOnCancelData) => void`                            | No       | Called when buyer cancels                                      |
| `onError`                     | `(err: Error) => void`                                             | No       | Called on errors                                               |
| `presentationMode`            | `BraintreePresentationMode`                                        | No       | UI mode: `"auto"`, `"popup"`, `"modal"`, `"redirect"`, etc.    |
| `returnUrl`                   | `string`                                                           | No       | Return URL (required for app-switch modes)                     |
| `cancelUrl`                   | `string`                                                           | No       | Cancel URL (required for app-switch modes)                     |
| `type`                        | `"pay" \| "checkout" \| "buynow" \| "donate" \| "subscribe"`       | No       | Button label type (default: `"pay"`)                           |
| `disabled`                    | `boolean`                                                          | No       | Disable the button                                             |

### BraintreePayPalCheckoutWithVaultButton

Renders a `<paypal-button>` for a combined flow — charging the buyer and saving their payment method in a single transaction (one-time payment + billing agreement consent).

```tsx
import {
  BraintreePayPalCheckoutWithVaultButton,
  useBraintreePayPal,
} from "@paypal/react-paypal-js/sdk-v6";
import type { BraintreeApprovalData } from "@paypal/react-paypal-js/sdk-v6";

function CheckoutWithVaultButton() {
  const { braintreePayPalCheckoutInstance } = useBraintreePayPal();

  return (
    <BraintreePayPalCheckoutWithVaultButton
      amount="49.99"
      currency="USD"
      intent="capture"
      type="pay"
      billingAgreementDetails={{
        description: "Monthly subscription to Products!",
      }}
      onApprove={async (data: BraintreeApprovalData) => {
        const { nonce } =
          await braintreePayPalCheckoutInstance!.tokenizePayment(data);
        await fetch("/api/braintree/checkout-and-vault", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ nonce }),
        });
      }}
      onCancel={() => console.log("Cancelled")}
      onError={(err) => console.error("Error", err)}
    />
  );
}
```

**Props:**

| Prop                      | Type                                                          | Required | Description                                                       |
| ------------------------- | ------------------------------------------------------------- | -------- | ----------------------------------------------------------------- |
| `amount`                  | `string`                                                      | Yes      | Payment amount (e.g., `"49.99"`)                                  |
| `currency`                | `string`                                                      | Yes      | ISO 4217 currency code                                            |
| `onApprove`               | `(data: BraintreeApprovalData) => Promise<void>`              | Yes      | Called when buyer approves — tokenize the payment here            |
| `intent`                  | `"authorize" \| "capture" \| "order"`                         | No       | Payment intent (default: `"capture"`)                             |
| `commit`                  | `boolean`                                                     | No       | `true` for "Pay Now", `false` for "Continue"                      |
| `billingAgreementDetails` | `{ description?: string }`                                    | No       | Billing agreement details shown to the buyer                      |
| `onCancel`                | `() => void`                                                  | No       | Called when buyer cancels                                         |
| `onError`                 | `(err: Error) => void`                                        | No       | Called on errors                                                  |
| `onShippingAddressChange` | `(data: BraintreeShippingAddressChangeData) => Promise<void>` | No       | Called when buyer changes shipping address                        |
| `onShippingOptionsChange` | `(data: BraintreeShippingOptionsChangeData) => Promise<void>` | No       | Called when buyer selects a shipping option                       |
| `lineItems`               | `BraintreeLineItem[]`                                         | No       | Line items for the transaction                                    |
| `shippingOptions`         | `BraintreeShippingOption[]`                                   | No       | Available shipping options                                        |
| `amountBreakdown`         | `BraintreeAmountBreakdown`                                    | No       | Breakdown of the total amount                                     |
| `userAuthenticationEmail` | `string`                                                      | No       | Pre-fill the PayPal login email                                   |
| `displayName`             | `string`                                                      | No       | Merchant name in the PayPal lightbox                              |
| `presentationMode`        | `BraintreePresentationMode`                                   | No       | UI mode: `"auto"`, `"popup"`, `"modal"`, `"redirect"`, etc.       |
| `returnUrl`               | `string`                                                      | No       | Return URL (required for `"direct-app-switch"` presentation mode) |
| `cancelUrl`               | `string`                                                      | No       | Cancel URL (required for `"direct-app-switch"` presentation mode) |
| `type`                    | `"pay" \| "checkout" \| "buynow" \| "donate" \| "subscribe"`  | No       | Button label type (default: `"pay"`)                              |
| `disabled`                | `boolean`                                                     | No       | Disable the button                                                |

### BraintreePayPalPayLaterButton

Renders a `<paypal-pay-later-button>` web component for Braintree PayPal Pay Later (Buy Now, Pay Later) financing. Internally uses `useBraintreePayPalPayLaterSession` to create and start Pay Later sessions.

Unlike the other Braintree buttons, **this button requires eligibility data.** It reads `countryCode` and `productCode` from `useBraintreePayPal().eligiblePaymentMethods`, which is populated by `useBraintreeEligibleMethods`. Fetch eligibility first — without it the button renders hidden (`display: none`).

```tsx
import {
  BraintreePayPalPayLaterButton,
  useBraintreePayPal,
  useBraintreeEligibleMethods,
  INSTANCE_LOADING_STATE,
} from "@paypal/react-paypal-js/sdk-v6";
import type { BraintreeApprovalData } from "@paypal/react-paypal-js/sdk-v6";

function PayLaterCheckout() {
  const { loadingStatus, braintreePayPalCheckoutInstance } =
    useBraintreePayPal();

  // Fetch eligibility before rendering the button
  const { eligiblePaymentMethods, isLoading } = useBraintreeEligibleMethods({
    amount: "100.00",
    currency: "USD", // required
    countryCode: "US",
    paymentFlow: "ONE_TIME_PAYMENT",
  });

  if (isLoading || loadingStatus === INSTANCE_LOADING_STATE.PENDING) {
    return <Spinner />;
  }
  if (!eligiblePaymentMethods?.paylater) {
    return null;
  }

  return (
    <BraintreePayPalPayLaterButton
      amount="100.00"
      currency="USD"
      onApprove={async (data: BraintreeApprovalData) => {
        const { nonce } =
          await braintreePayPalCheckoutInstance!.tokenizePayment(data);
        // Send nonce to your server
        await fetch("/api/braintree/checkout", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ nonce }),
        });
      }}
      onCancel={() => console.log("Cancelled")}
      onError={(err) => console.error("Error", err)}
    />
  );
}
```

Render `PayLaterCheckout` inside a `BraintreePayPalProvider` (see [BraintreePayPalProvider](#braintreepaypalprovider)).

**Props:**

| Prop                      | Type                                                                  | Required | Description                                                       |
| ------------------------- | --------------------------------------------------------------------- | -------- | ----------------------------------------------------------------- |
| `amount`                  | `string`                                                              | Yes      | Payment amount (e.g., `"100.00"`)                                 |
| `currency`                | `string`                                                              | Yes      | ISO 4217 currency code (e.g., `"USD"`)                            |
| `onApprove`               | `(data: BraintreeApprovalData) => Promise<void>`                      | Yes      | Called when buyer approves — tokenize the payment here            |
| `intent`                  | `"authorize" \| "capture" \| "order"`                                 | No       | Payment intent (default: `"capture"`)                             |
| `onCancel`                | `() => void`                                                          | No       | Called when buyer cancels                                         |
| `onComplete`              | `() => void`                                                          | No       | Called when the payment flow completes                            |
| `onError`                 | `(err: Error) => void`                                                | No       | Called on errors                                                  |
| `onShippingAddressChange` | `(data: BraintreeShippingAddressChangeData) => Promise<void>`         | No       | Called when buyer changes shipping address                        |
| `onShippingOptionsChange` | `(data: BraintreeShippingOptionsChangeData) => Promise<void>`         | No       | Called when buyer selects a shipping option                       |
| `lineItems`               | `BraintreeLineItem[]`                                                 | No       | Line items for the transaction                                    |
| `shippingOptions`         | `BraintreeShippingOption[]`                                           | No       | Available shipping options                                        |
| `shippingCallbackUrl`     | `string`                                                              | No       | URL for server-side shipping callbacks                            |
| `shippingAddressOverride` | `BraintreeShippingAddressOverride`                                    | No       | Pre-collected shipping address                                    |
| `amountBreakdown`         | `BraintreeAmountBreakdown`                                            | No       | Breakdown of the total amount (item total, shipping, tax, etc.)   |
| `contactPreference`       | `"NO_CONTACT_INFO" \| "RETAIN_CONTACT_INFO" \| "UPDATE_CONTACT_INFO"` | No       | How buyer contact information is handled                          |
| `userAuthenticationEmail` | `string`                                                              | No       | Pre-fill the PayPal login email                                   |
| `returnUrl`               | `string`                                                              | No       | Return URL (required for `"direct-app-switch"` presentation mode) |
| `cancelUrl`               | `string`                                                              | No       | Cancel URL (required for `"direct-app-switch"` presentation mode) |
| `displayName`             | `string`                                                              | No       | Merchant name displayed in the PayPal lightbox                    |
| `presentationMode`        | `BraintreePresentationMode`                                           | No       | UI mode: `"auto"`, `"popup"`, `"modal"`, `"redirect"`, etc.       |
| `disabled`                | `boolean`                                                             | No       | Disable the button                                                |

### Braintree Hooks

#### `useBraintreePayPal()`

Accesses the Braintree PayPal context. Returns the checkout instance, loading status, and error state. Must be used within a `BraintreePayPalProvider`.

```tsx
import {
  useBraintreePayPal,
  INSTANCE_LOADING_STATE,
} from "@paypal/react-paypal-js/sdk-v6";

function CustomCheckout() {
  const { braintreePayPalCheckoutInstance, loadingStatus, error, isHydrated } =
    useBraintreePayPal();

  if (loadingStatus === INSTANCE_LOADING_STATE.PENDING) {
    return <div>Initializing Braintree...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  // Use braintreePayPalCheckoutInstance directly for custom flows
}
```

**Returns:**

| Property                          | Type                                      | Description                                                                |
| --------------------------------- | ----------------------------------------- | -------------------------------------------------------------------------- |
| `braintreePayPalCheckoutInstance` | `BraintreePayPalCheckoutInstance \| null` | The checkout instance (null while loading)                                 |
| `eligiblePaymentMethods`          | `BraintreeEligibilityResult \| null`      | Eligibility cached by `useBraintreeEligibleMethods` (`null` until fetched) |
| `loadingStatus`                   | `INSTANCE_LOADING_STATE`                  | `"pending"`, `"resolved"`, or `"rejected"`                                 |
| `error`                           | `Error \| null`                           | Initialization error, if any                                               |
| `isHydrated`                      | `boolean`                                 | `true` after client-side hydration                                         |

#### `useBraintreeEligibleMethods(props)`

Fetches Braintree PayPal eligibility for the given checkout options by calling `findEligibleMethods()` on the shared checkout instance, and caches the result in `BraintreePayPalProvider` context (where buttons read it via `useBraintreePayPal().eligiblePaymentMethods`). Fetches are deduplicated by `(instance, options)` and re-run when the options change. Required before rendering eligibility-gated buttons such as `BraintreePayPalPayLaterButton`.

```tsx
import {
  useBraintreePayPal,
  useBraintreeEligibleMethods,
  BraintreePayPalOneTimePaymentButton,
  BraintreePayPalPayLaterButton,
  INSTANCE_LOADING_STATE,
} from "@paypal/react-paypal-js/sdk-v6";
import type { BraintreeApprovalData } from "@paypal/react-paypal-js/sdk-v6";

function CheckoutButtons() {
  const { loadingStatus, braintreePayPalCheckoutInstance } =
    useBraintreePayPal();
  const { eligiblePaymentMethods, isLoading, error } =
    useBraintreeEligibleMethods({
      amount: "100.00",
      currency: "USD",
      countryCode: "US",
      paymentFlow: "ONE_TIME_PAYMENT",
    });

  // Tokenize on approval, then send the resulting nonce to your server.
  const onApprove = async (data: BraintreeApprovalData) => {
    const { nonce } =
      await braintreePayPalCheckoutInstance!.tokenizePayment(data);
    await fetch("/api/braintree/checkout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ nonce }),
    });
  };

  if (isLoading || loadingStatus === INSTANCE_LOADING_STATE.PENDING) {
    return <Spinner />;
  }
  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <>
      <BraintreePayPalOneTimePaymentButton
        amount="100.00"
        currency="USD"
        onApprove={onApprove}
      />
      {eligiblePaymentMethods?.paylater && (
        <BraintreePayPalPayLaterButton
          amount="100.00"
          currency="USD"
          onApprove={onApprove}
        />
      )}
    </>
  );
}
```

**Props (`BraintreeFindEligibleMethodsOptions`):**

| Prop          | Type                                                                                           | Required | Description                                 |
| ------------- | ---------------------------------------------------------------------------------------------- | -------- | ------------------------------------------- |
| `currency`    | `string`                                                                                       | Yes      | ISO 4217 currency code (e.g., `"USD"`)      |
| `amount`      | `string`                                                                                       | No       | Checkout amount used for eligibility checks |
| `countryCode` | `string`                                                                                       | No       | Buyer country code (e.g., `"US"`)           |
| `paymentFlow` | `"ONE_TIME_PAYMENT" \| "VAULT_WITH_PAYMENT" \| "VAULT_WITHOUT_PAYMENT" \| "RECURRING_PAYMENT"` | No       | The flow eligibility is being checked for   |

**Returns:**

| Property                 | Type                                 | Description                                                               |
| ------------------------ | ------------------------------------ | ------------------------------------------------------------------------- |
| `eligiblePaymentMethods` | `BraintreeEligibilityResult \| null` | Eligibility result, or `null` until fetched                               |
| `isLoading`              | `boolean`                            | `true` while the instance is initializing or eligibility is being fetched |
| `error`                  | `Error \| null`                      | Fetch- or provider-level error, if any                                    |

`BraintreeEligibilityResult` exposes the booleans `paypal`, `paylater`, and `credit`, plus `getDetails(method)` which returns the `countryCode` and `productCode` the buttons consume.

#### `useBraintreePayPalOneTimePaymentSession(props)`

Creates a one-time payment session. Returns a `handleClick` function to start the PayPal flow. Accepts the same props as `BraintreePayPalOneTimePaymentButton` (minus `type` and `disabled`).

```tsx
import { useBraintreePayPalOneTimePaymentSession } from "@paypal/react-paypal-js/sdk-v6";

function CustomPayButton() {
  const { handleClick, isPending, error } =
    useBraintreePayPalOneTimePaymentSession({
      amount: "50.00",
      currency: "USD",
      onApprove: async (data) => {
        // tokenize and process
      },
    });

  return (
    <button onClick={handleClick} disabled={isPending}>
      Pay with PayPal
    </button>
  );
}
```

**Returns:** `{ handleClick: () => void, isPending: boolean, error: Error | null }`

#### `useBraintreePayPalBillingAgreementSession(props)`

Creates a billing agreement session for vault flows. Returns a `handleClick` function to start the flow. Accepts the same props as `BraintreePayPalBillingAgreementButton` (minus `type` and `disabled`).

```tsx
import { useBraintreePayPalBillingAgreementSession } from "@paypal/react-paypal-js/sdk-v6";

function CustomVaultButton() {
  const { handleClick, isPending, error } =
    useBraintreePayPalBillingAgreementSession({
      billingAgreementDescription: "Monthly subscription",
      planType: "SUBSCRIPTION",
      onApprove: async (data) => {
        // tokenize with data.billingToken
      },
    });

  return (
    <button onClick={handleClick} disabled={isPending}>
      Save PayPal Account
    </button>
  );
}
```

**Returns:** `{ handleClick: () => void, isPending: boolean, error: Error | null }`

#### `useBraintreePayPalCheckoutWithVaultSession(props)`

Creates a checkout-with-vault session combining one-time payment and billing agreement consent. Returns a `handleClick` function. Accepts the same props as `BraintreePayPalCheckoutWithVaultButton` (minus `type` and `disabled`).

```tsx
import { useBraintreePayPalCheckoutWithVaultSession } from "@paypal/react-paypal-js/sdk-v6";

function CustomCheckoutVaultButton() {
  const { handleClick, isPending, error } =
    useBraintreePayPalCheckoutWithVaultSession({
      amount: "49.99",
      currency: "USD",
      billingAgreementDetails: { description: "Monthly subscription" },
      onApprove: async (data) => {
        // tokenize and process
      },
    });

  return (
    <button onClick={handleClick} disabled={isPending}>
      Pay & Save
    </button>
  );
}
```

**Returns:** `{ handleClick: () => void, isPending: boolean, error: Error | null }`

#### `useBraintreePayPalPayLaterSession(props)`

Creates a Pay Later (Buy Now, Pay Later) session. Returns a `handleClick` function to start the flow. Accepts the same props as `BraintreePayPalPayLaterButton` (minus `disabled`) — use this hook directly when you need full control over the `<paypal-pay-later-button>` UI. Eligibility (`countryCode`/`productCode`) must still be fetched via `useBraintreeEligibleMethods`.

```tsx
import {
  useBraintreePayPalPayLaterSession,
  useBraintreeEligibleMethods,
} from "@paypal/react-paypal-js/sdk-v6";

function CustomPayLaterButton() {
  const { handleClick, isPending } = useBraintreePayPalPayLaterSession({
    amount: "100.00",
    currency: "USD",
    onApprove: async (data) => {
      // tokenize and process
    },
  });

  const { isLoading, eligiblePaymentMethods } = useBraintreeEligibleMethods({
    currency: "USD",
  });

  if (isPending || isLoading) {
    return <Spinner />;
  }
  if (!eligiblePaymentMethods?.paylater) {
    return null;
  }

  const payLaterDetails = eligiblePaymentMethods.getDetails("paylater");

  return (
    <paypal-pay-later-button
      onClick={() => handleClick()}
      disabled={isPending}
      countryCode={payLaterDetails?.countryCode}
      productCode={payLaterDetails?.productCode}
    />
  );
}
```

**Returns:** `{ handleClick: () => void, isPending: boolean, error: Error | null }`

### Key Braintree Types

Import these types from `@paypal/react-paypal-js/sdk-v6`:

```tsx
import type {
  BraintreeApprovalData,
  BraintreeTokenizePayload,
  BraintreeLineItem,
  BraintreeShippingOption,
  BraintreeAmountBreakdown,
  BraintreePlanMetadata,
  BraintreePresentationMode,
  BraintreeV6Namespace,
} from "@paypal/react-paypal-js/sdk-v6";
```

| Type                        | Description                                                                                            |
| --------------------------- | ------------------------------------------------------------------------------------------------------ |
| `BraintreeApprovalData`     | `{ payerId?, orderId?, billingToken? }` — data passed to `onApprove`                                   |
| `BraintreeTokenizePayload`  | `{ nonce, type, details: { email, payerId, firstName, lastName, ... } }` — result of `tokenizePayment` |
| `BraintreeLineItem`         | `{ quantity, unitAmount, name, kind, unitTaxAmount?, description? }` — transaction line item           |
| `BraintreeShippingOption`   | `{ id, label, selected, type, amount: { currency, value } }` — shipping option                         |
| `BraintreeAmountBreakdown`  | `{ itemTotal?, shipping?, handling?, taxTotal?, insurance?, discount?, ... }` — amount breakdown       |
| `BraintreePlanMetadata`     | `{ billingCycles?, currencyIsoCode, name, ... }` — subscription plan details                           |
| `BraintreePresentationMode` | `"auto" \| "popup" \| "modal" \| "redirect" \| "payment-handler" \| "direct-app-switch"`               |
| `BraintreeV6Namespace`      | The Braintree namespace type expected by `BraintreePayPalProvider`                                     |

### Key Differences from Standard PayPal Buttons

- **Different provider** — uses `BraintreePayPalProvider` with a Braintree client token instead of `PayPalProvider` with a PayPal client ID
- **No `createOrder` / `orderId`** — payment sessions are created internally by the Braintree SDK; you pass `amount` and `currency` directly as props
- **Nonce-based flow** — `onApprove` receives `BraintreeApprovalData`; call `braintreePayPalCheckoutInstance.tokenizePayment()` to get a payment method nonce
- **Server-side with Braintree SDK** — send the nonce to your server and process it with the [Braintree server SDK](https://developer.paypal.com/braintree/docs/start/hello-server) (not PayPal's Orders API)
- **Presentation modes** — supports `"auto"`, `"popup"`, `"modal"`, `"redirect"`, `"payment-handler"`, and `"direct-app-switch"`

## Web Components

The V6 SDK uses web components for rendering buttons. These are automatically typed when you import from `@paypal/react-paypal-js/sdk-v6`.

### Available Web Components

| Component                       | Description                |
| ------------------------------- | -------------------------- |
| `<paypal-button>`               | PayPal payment button      |
| `<venmo-button>`                | Venmo payment button       |
| `<paypal-pay-later-button>`     | Pay Later button           |
| `<paypal-basic-card-container>` | Guest checkout container   |
| `<paypal-basic-card-button>`    | Guest checkout button      |
| `<paypal-credit-button>`        | PayPal Credit button       |
| `<paypal-message>`              | PayPal messaging component |

### Button Types

The `type` prop controls the button label:

- `"pay"` - "Pay with PayPal" (default)
- `"checkout"` - "Checkout with PayPal"
- `"buynow"` - "Buy Now"
- `"donate"` - "Donate"
- `"subscribe"` - "Subscribe"

```tsx
<paypal-button type="checkout" onClick={handleClick} />
```

## Server-Side Rendering

The `fetchEligibleMethods` function (from the `/server` export path) lets you pre-fetch eligibility data on the server and pass it to `PayPalProvider` via the `eligibleMethodsResponse` prop. The provider hydrates the SDK instance with this response, so the client renders eligible payment methods immediately — no client-side eligibility round-trip and no flash of missing or stale buttons.

> **Important:** `eligibleMethodsResponse` must be a resolved value, not a Promise. `await` the result of `fetchEligibleMethods()` (or your own fetch) before passing it to `PayPalProvider`.

**Step 1 — Fetch eligibility in a server component and hydrate the provider:**

```tsx
// app/checkout/page.tsx (Next.js server component)
import { fetchEligibleMethods } from "@paypal/react-paypal-js/sdk-v6/server";
import { PayPalProvider } from "@paypal/react-paypal-js/sdk-v6";

import { CheckoutForm } from "./CheckoutForm";

// Your own server-side helpers — e.g. an OAuth call to PayPal for an access
// token, and your public client ID from env/config.
import { getAccessToken, getClientId } from "@/lib/paypal";

export default async function CheckoutPage() {
  const accessToken = await getAccessToken();

  const eligibleMethodsResponse = await fetchEligibleMethods({
    environment: "sandbox",
    headers: {
      Authorization: `Bearer ${accessToken}`,
      "Content-Type": "application/json",
    },
    payload: {
      purchase_units: [{ amount: { currency_code: "USD", value: "100.00" } }],
    },
  });

  return (
    <PayPalProvider
      clientId={getClientId()}
      environment="sandbox"
      pageType="checkout"
      eligibleMethodsResponse={eligibleMethodsResponse}
    >
      <CheckoutForm />
    </PayPalProvider>
  );
}
```

**Step 2 — Consume the hydrated eligibility on the client:**

Call `useEligibleMethods()` **with no payload** so it reuses the server-hydrated
response instead of triggering its own fetch, then render buttons conditionally:

```tsx
// app/checkout/CheckoutForm.tsx
"use client";

import {
  useEligibleMethods,
  PayPalOneTimePaymentButton,
  VenmoOneTimePaymentButton,
} from "@paypal/react-paypal-js/sdk-v6";

export function CheckoutForm() {
  // No payload → reuses the response hydrated by the provider (no client fetch).
  const { eligiblePaymentMethods, isLoading, error } = useEligibleMethods();

  if (error) return <div>Failed to load payment methods.</div>;
  if (isLoading) return <div className="spinner">Loading...</div>;

  return (
    <>
      {eligiblePaymentMethods?.isEligible("paypal") && (
        <PayPalOneTimePaymentButton /* ... */ />
      )}
      {eligiblePaymentMethods?.isEligible("venmo") && (
        <VenmoOneTimePaymentButton /* ... */ />
      )}
    </>
  );
}
```

> **Note:** Reuse of the hydrated response only happens when `useEligibleMethods()` is called **without** a payload. Passing a payload makes the hook fetch eligibility on the client (the server-side request payload has a different shape than the client-side `FindEligibleMethodsOptions`, so the two are not interchangeable). If you need custom, payload-specific eligibility on the client, use the [`useEligibleMethods`](#useeligiblemethods) hook directly and skip server hydration.

## Migration from v8.x (Legacy SDK)

The v9.0.0 release introduces the V6 SDK with a new API. Here are the key differences:

| v8.x (Legacy)                   | v9.0.0 (V6 SDK)                                      |
| ------------------------------- | ---------------------------------------------------- |
| `PayPalScriptProvider`          | `PayPalProvider`                                     |
| `PayPalButtons`                 | `PayPalOneTimePaymentButton` or hooks                |
| `options={{ clientId }}`        | `clientId={clientId}` or `clientToken={clientToken}` |
| `createOrder` returns `orderId` | `createOrder` returns `{ orderId }`                  |
| `@paypal/react-paypal-js`       | `@paypal/react-paypal-js/sdk-v6`                     |

**Eligibility:** v8.x gated funding sources with the `FUNDING` constant. In v9,
check eligibility with the [`useEligibleMethods`](#useeligiblemethods) hook and
render buttons conditionally:

```tsx
import { useEligibleMethods } from "@paypal/react-paypal-js/sdk-v6";

const { eligiblePaymentMethods, isLoading } = useEligibleMethods({
  payload: { currencyCode: "USD" },
});

if (isLoading) return <Spinner />;

return (
  <>
    {eligiblePaymentMethods?.isEligible("paypal") && (
      <PayPalOneTimePaymentButton /* ... */ />
    )}
    {eligiblePaymentMethods?.isEligible("venmo") && (
      <VenmoOneTimePaymentButton /* ... */ />
    )}
    {eligiblePaymentMethods?.isEligible("paylater") && (
      <PayLaterOneTimePaymentButton /* ... */ />
    )}
  </>
);
```

### Before (v8.x)

```tsx
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

<PayPalScriptProvider options={{ clientId: "test" }}>
  <PayPalButtons
    createOrder={() => {
      return fetch("/api/orders", { method: "POST" })
        .then((res) => res.json())
        .then((order) => order.id);
    }}
    onApprove={(data) => {
      return fetch(`/api/orders/${data.orderID}/capture`, {
        method: "POST",
      });
    }}
  />
</PayPalScriptProvider>;
```

### After (v9.0.0)

```tsx
import {
  PayPalProvider,
  PayPalOneTimePaymentButton,
} from "@paypal/react-paypal-js/sdk-v6";

<PayPalProvider clientId={clientId} environment="sandbox" pageType="checkout">
  <PayPalOneTimePaymentButton
    createOrder={async () => {
      const res = await fetch("/api/orders", { method: "POST" });
      const order = await res.json();
      return { orderId: order.id };
    }}
    onApprove={async ({ orderId }) => {
      await fetch(`/api/orders/${orderId}/capture`, { method: "POST" });
    }}
  />
</PayPalProvider>;
```

For the legacy API documentation, see [README-PAYPAL-JS-SDK-V5.md](./README-PAYPAL-JS-SDK-V5.md).

## TypeScript

This package includes full TypeScript definitions. Under the hood, `react-paypal-js` builds on [`@paypal/paypal-js`](https://www.npmjs.com/package/@paypal/paypal-js) — the framework-agnostic loader for the PayPal JS SDK — and re-exports its SDK types so you can import everything from a single path.

`INSTANCE_LOADING_STATE` is a runtime enum, so import it as a value (not with `import type`):

```tsx
import { INSTANCE_LOADING_STATE } from "@paypal/react-paypal-js/sdk-v6";

import type {
  // Web component props
  ButtonProps,
  PayLaterButtonProps,
  PayPalBasicCardButtonProps,
  PayPalCreditButtonProps,

  // Session hook props
  UsePayPalOneTimePaymentSessionProps,
  UseVenmoOneTimePaymentSessionProps,
  UsePayLaterOneTimePaymentSessionProps,
  UsePayPalGuestPaymentSessionProps,
  UsePayPalSubscriptionPaymentSessionProps,
  UsePayPalSavePaymentSessionProps,
  UsePayPalCreditOneTimePaymentSessionProps,
  UsePayPalCreditSavePaymentSessionProps,

  // Button component props
  PayPalSubscriptionButtonProps,
  PayPalCreditOneTimePaymentButtonProps,
  PayPalCreditSavePaymentButtonProps,
} from "@paypal/react-paypal-js/sdk-v6";
```

### Web Component Types

The package automatically extends JSX types to include PayPal web components. No additional configuration is needed for React 17, 18, or 19.

## Browser Support

This library supports all modern browsers. See the [PayPal browser support documentation](https://developer.paypal.com/docs/business/checkout/reference/browser-support/) for the full list.

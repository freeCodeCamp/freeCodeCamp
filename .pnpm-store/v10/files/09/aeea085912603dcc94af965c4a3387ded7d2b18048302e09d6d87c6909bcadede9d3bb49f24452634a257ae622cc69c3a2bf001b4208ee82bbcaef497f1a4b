import * as api from '../api';
import * as paymentIntents from './payment-intents';
import * as setupIntents from './setup-intents';
import * as orders from './orders';
import * as tokens from './token-and-sources';
import * as elements from './elements';
import * as financialConnections from './financial-connections';
import * as ephemeralKeys from './ephemeral-keys';

import {
  StripeElements,
  StripeElementsOptionsClientSecret,
  StripeElementsOptionsMode,
} from './elements-group';
import {CheckoutLocale, RedirectToCheckoutOptions} from './checkout';
import {PaymentRequestOptions, PaymentRequest} from './payment-request';
import {StripeElement, StripeElementLocale} from './elements-group';

export interface Stripe {
  /////////////////////////////
  /// Elements
  ///
  /// https://stripe.com/docs/js/elements_object
  /////////////////////////////

  /**
   * Create an `Elements` instance, which manages a group of elements.
   *
   * https://stripe.com/docs/js/elements_object/create
   */
  elements(options?: StripeElementsOptionsClientSecret): StripeElements;

  /**
   * Create an `Elements` instance, which manages a group of elements.
   *
   * https://stripe.com/docs/js/elements_object/create_without_intent
   */
  elements(options?: StripeElementsOptionsMode): StripeElements;

  /////////////////////////////
  /// Checkout
  ///
  /// https://stripe.com/docs/js/checkout
  /////////////////////////////

  /**
   * Use `stripe.redirectToCheckout` to redirect your customers to [Checkout](https://stripe.com/docs/payments/checkout), a Stripe-hosted page to securely collect payment information.
   * When the customer completes their purchase, they are redirected back to your website.
   */
  redirectToCheckout(
    options: RedirectToCheckoutOptions
  ): Promise<never | {error: StripeError}>;

  /////////////////////////////
  /// Payment Intents
  ///
  /// https://stripe.com/docs/js/payment_intents
  /////////////////////////////

  /**
   * Use `stripe.confirmPayment` to confirm a PaymentIntent using data collected by the [Payment Element](https://stripe.com/docs/js/element/payment_element).
   * When called, `stripe.confirmPayment` will attempt to complete any [required actions](https://stripe.com/docs/payments/intents), such as authenticating your user by displaying a 3DS dialog or redirecting them to a bank authorization page.
   * Your user will be redirected to the return_url you pass once the confirmation is complete.
   *
   * By default, `stripe.confirmPayment` will always redirect to your return_url after a successful confirmation.
   * If you set `redirect: "if_required"`, then `stripe.confirmPayment` will only redirect if your user chooses a redirect-based payment method.
   * Setting `if_required` requires that you handle successful confirmations for redirect-based and non-redirect based payment methods separately.
   *
   * @docs https://stripe.com/docs/js/payment_intents/confirm_payment
   */
  confirmPayment(options: {
    elements: StripeElements;
    confirmParams?: Partial<paymentIntents.ConfirmPaymentData>;
    redirect: 'if_required';
  }): Promise<PaymentIntentResult>;

  /**
   * Use `stripe.confirmPayment` to confirm a PaymentIntent using data collected by the [Payment Element](https://stripe.com/docs/js/element/payment_element).
   * When called, `stripe.confirmPayment` will attempt to complete any [required actions](https://stripe.com/docs/payments/intents), such as authenticating your user by displaying a 3DS dialog or redirecting them to a bank authorization page.
   * Your user will be redirected to the return_url you pass once the confirmation is complete.
   *
   * By default, `stripe.confirmPayment` will always redirect to your return_url after a successful confirmation.
   * If you set `redirect: "if_required"`, then `stripe.confirmPayment` will only redirect if your user chooses a redirect-based payment method.
   * Setting `if_required` requires that you handle successful confirmations for redirect-based and non-redirect based payment methods separately.
   *
   * @docs https://stripe.com/docs/js/payment_intents/confirm_payment
   */
  confirmPayment(options: {
    elements?: StripeElements;
    clientSecret: string;
    confirmParams?: Partial<paymentIntents.ConfirmPaymentData>;
    redirect: 'if_required';
  }): Promise<PaymentIntentResult>;

  /**
   * Use `stripe.confirmPayment` to confirm a PaymentIntent using data collected by the [Payment Element](https://stripe.com/docs/js/element/payment_element).
   * When called, `stripe.confirmPayment` will attempt to complete any [required actions](https://stripe.com/docs/payments/intents), such as authenticating your user by displaying a 3DS dialog or redirecting them to a bank authorization page.
   * Your user will be redirected to the return_url you pass once the confirmation is complete.
   *
   * @docs https://stripe.com/docs/js/payment_intents/confirm_payment
   */
  confirmPayment(options: {
    elements: StripeElements;
    confirmParams: paymentIntents.ConfirmPaymentData;
    redirect?: 'always';
  }): Promise<never | {error: StripeError}>;

  /**
   * Use `stripe.confirmPayment` to confirm a PaymentIntent using data collected by the [Payment Element](https://stripe.com/docs/js/element/payment_element).
   * When called, `stripe.confirmPayment` will attempt to complete any [required actions](https://stripe.com/docs/payments/intents), such as authenticating your user by displaying a 3DS dialog or redirecting them to a bank authorization page.
   * Your user will be redirected to the return_url you pass once the confirmation is complete.
   *
   * @docs https://stripe.com/docs/js/payment_intents/confirm_payment
   */
  confirmPayment(options: {
    elements?: StripeElements;
    clientSecret: string;
    confirmParams: paymentIntents.ConfirmPaymentData;
    redirect?: 'always';
  }): Promise<never | {error: StripeError}>;

  /**
   * Use `stripe.confirmAcssDebitPayment` in the [Accept a Canadian pre-authorized debit payment](https://stripe.com/docs/payments/acss-debit/accept-a-payment) flow when the customer submits your payment form.
   * When called, it will automatically pop up a modal to collect bank account details and verification, accept the mandate, and confirm the [PaymentIntent](https://stripe.com/docs/api/payment_intents) when the user submits the form.
   *
   * When you confirm a `PaymentIntent`, it needs to have an attached [PaymentMethod](https://stripe.com/docs/api/payment_methods).
   * `stripe.confirmAcssDebitPayment` automatically creates a new `PaymentMethod` for you when your customer completes the modal UI.
   * It can also be called with an existing `PaymentMethod` which will load the modal UI to collect a new mandate agreement.
   * If you have already attached a `PaymentMethod`, you can call this method without needing to provide any additional data.
   *
   * @docs https://stripe.com/docs/js/payment_intents/confirm_acss_debit_payment
   */
  confirmAcssDebitPayment(
    clientSecret: string,
    data?: paymentIntents.ConfirmAcssDebitPaymentData,
    options?: paymentIntents.ConfirmAcssDebitPaymentOptions
  ): Promise<PaymentIntentResult>;

  /**
   * Use `stripe.confirmUsBankAccountPayment` in the [Accept a payment](https://stripe.com/docs/payments/ach-debit/accept-a-payment) flow for the [ACH Direct Debit]((https://stripe.com/docs/payments/ach-debit) payment method to record the customer’s authorization for payment.
   *
   * When you confirm a [PaymentIntent](https://stripe.com/docs/api/payment_intents), it needs to have an attached PaymentMethod.
   * Use `stripe.collectBankAccountForPayment` to collect and attach a [PaymentMethod](https://stripe.com/docs/api/payment_methods), or provide bank account details using the `data` parameter if a `PaymentMethod` was not already provided.
   *
   * @docs https://stripe.com/docs/js/payment_intents/confirm_us_bank_account_payment
   */
  confirmUsBankAccountPayment(
    clientSecret: string,
    data?: paymentIntents.ConfirmUsBankAccountPaymentData
  ): Promise<PaymentIntentResult>;

  /**
   * Use `stripe.confirmAlipayPayment` in the [Alipay Payments](https://stripe.com/docs/payments/alipay) with Payment Methods flow when the customer submits your payment form.
   * When called, it will confirm the [PaymentIntent](https://stripe.com/docs/api/payment_intents) with `data` you provide, and it will automatically redirect the customer to authorize the transaction.
   * Once authorization is complete, the customer will be redirected back to your specified `return_url`.
   *
   * When you confirm a `PaymentIntent`, it needs to have an attached [PaymentMethod](https://stripe.com/docs/api/payment_methods).
   * In addition to confirming the `PaymentIntent`, this method can automatically create and attach a new PaymentMethod for you.
   * If you have already attached a `PaymentMethod` you can call this method without needing to provide any additional data.
   *
   * @docs https://stripe.com/docs/js/payment_intents/confirm_alipay_payment
   */
  confirmAlipayPayment(
    clientSecret: string,
    data?: paymentIntents.ConfirmAlipayPaymentData,
    options?: paymentIntents.ConfirmAlipayPaymentOptions
  ): Promise<PaymentIntentResult>;

  /**
   * Requires beta access:
   * Contact [Stripe support](https://support.stripe.com/) for more information.
   *
   * Use `stripe.confirmAuBecsDebitPayment` in the [BECS Direct Debit Payments](https://stripe.com/docs/payments/payment-methods/au-becs-debit) with Payment Methods flow when the customer submits your payment form.
   * When called, it will confirm the [PaymentIntent](https://stripe.com/docs/api/payment_intents) with `data` you provide.
   * Note that there are some additional requirements to this flow that are not covered in this reference.
   * Refer to our [integration guide](https://stripe.com/docs/payments/payment-methods/au-becs-debit-quickstart-payment-intents) for more details.
   *
   * When you confirm a `PaymentIntent`, it needs to have an attached [PaymentMethod](https://stripe.com/docs/api/payment_methods).
   * In addition to confirming the `PaymentIntent`, this method can automatically create and attach a new PaymentMethod for you.
   * If you have already attached a `PaymentMethod` you can call this method without needing to provide any additional data.
   *
   * @docs https://stripe.com/docs/js/payment_intents/confirm_au_becs_debit_payment
   */
  confirmAuBecsDebitPayment(
    clientSecret: string,
    data?: paymentIntents.ConfirmAuBecsDebitPaymentData
  ): Promise<PaymentIntentResult>;

  /**
   * Use `stripe.confirmBancontactPayment` in the [Bancontact Payments with Payment Methods](https://stripe.com/docs/payments/bancontact#web) flow when the customer submits your payment form.
   * When called, it will confirm the `PaymentIntent` with `data` you provide, and it will automatically redirect the customer to authorize the transaction.
   * Once authorization is complete, the customer will be redirected back to your specified `return_url`.
   *
   * When you confirm a `PaymentIntent`, it needs to have an attached [PaymentMethod](https://stripe.com/docs/api/payment_methods).
   * In addition to confirming the `PaymentIntent`, this method can automatically create and attach a new `PaymentMethod` for you.
   * If you have already attached a `PaymentMethod` you can call this method without needing to provide any additional data.
   *
   * @docs https://stripe.com/docs/js/payment_intents/confirm_bancontact_payment
   */
  confirmBancontactPayment(
    clientSecret: string,
    data?: paymentIntents.ConfirmBancontactPaymentData,
    options?: paymentIntents.ConfirmBancontactPaymentOptions
  ): Promise<PaymentIntentResult>;

  /**
   * Use `stripe.confirmBlikPayment` in the [BLIK Payments with Payment Methods](https://stripe.com/docs/payments/blik) flow when the customer submits your payment form.
   * When called, it will confirm the PaymentIntent with data you provide, and it will automatically prompt the customer to authorize the transaction.
   *
   * @docs https://stripe.com/docs/js/payment_intents/confirm_blik_payment
   */
  confirmBlikPayment(
    clientSecret: string,
    data: paymentIntents.ConfirmBlikPaymentData,
    options?: paymentIntents.ConfirmBlikPaymentOptions
  ): Promise<PaymentIntentResult>;

  /**
   * Use `stripe.confirmBoletoPayment` in the [Boleto Payment](https://stripe.com/docs/payments/boleto) with Payment Methods flow when the customer submits your payment form.
   * When called, it will confirm the [PaymentIntent](https://stripe.com/docs/api/payment_intents) with `data` you provide.
   * Note that there are some additional requirements to this flow that are not covered in this reference.
   * Refer to our [integration guide](https://stripe.com/docs/payments/boleto) for more details.
   *
   * When you confirm a `PaymentIntent`, it needs to have an attached [PaymentMethod](https://stripe.com/docs/api/payment_methods).
   * In addition to confirming the `PaymentIntent`, this method can automatically create and attach a new PaymentMethod for you.
   * If you have already attached a `PaymentMethod` you can call this method without needing to provide any additional data.
   *
   * @docs https://stripe.com/docs/js/payment_intents/confirm_boleto_payment
   */
  confirmBoletoPayment(
    clientSecret: string,
    data?: paymentIntents.ConfirmBoletoPaymentData,
    options?: paymentIntents.ConfirmBoletoPaymentOptions
  ): Promise<PaymentIntentResult>;

  /**
   * Use `stripe.confirmCardPayment` when the customer submits your payment form.
   * When called, it will confirm the [PaymentIntent](https://stripe.com/docs/api/payment_intents) with `data` you provide and carry out 3DS or other next actions if they are required.
   *
   * If you are using [Dynamic 3D Secure](https://stripe.com/docs/payments/3d-secure#three-ds-radar), `stripe.confirmCardPayment` will trigger your Radar rules to execute and may open a dialog for your customer to authenticate their payment.
   *
   * When you confirm a `PaymentIntent`, it needs to have an attached [PaymentMethod](https://stripe.com/docs/api/payment_methods).
   * In addition to confirming the `PaymentIntent`, this method can automatically create and attach a new `PaymentMethod` for you.
   * It can also be called with an existing `PaymentMethod`, or if you have already attached a `PaymentMethod` you can call this method without needing to provide any additional data.
   *
   * @docs https://stripe.com/docs/js/payment_intents/confirm_card_payment
   */
  confirmCardPayment(
    clientSecret: string,
    data?: paymentIntents.ConfirmCardPaymentData,
    options?: paymentIntents.ConfirmCardPaymentOptions
  ): Promise<PaymentIntentResult>;

  /**
   * Use `stripe.confirmCashappPayment` in the [Cash App Payments](https://stripe.com/docs/payments/cash-app-pay) with Payment Methods flow when the customer submits your payment form.
   * When called, it will confirm the [PaymentIntent](https://stripe.com/docs/api/payment_intents) with `data` you provide.
   * Refer to our [integration guide](https://stripe.com/docs/payments/cash-app-pay) for more details.
   *
   * When you confirm a `PaymentIntent`, it needs to have an attached [PaymentMethod](https://stripe.com/docs/api/payment_methods).
   * In addition to confirming the `PaymentIntent`, this method can automatically create and attach a new PaymentMethod for you.
   * If you have already attached a `PaymentMethod` you can call this method without needing to provide any additional data.
   *
   * @docs https://stripe.com/docs/js/payment_intents/confirm_cashapp_payment
   */
  confirmCashappPayment(
    clientSecret: string,
    data?: paymentIntents.ConfirmCashappPaymentData,
    options?: paymentIntents.ConfirmCashappPaymentOptions
  ): Promise<PaymentIntentResult>;

  /**
   * Requires beta access:
   * Contact [Stripe support](https://support.stripe.com/) for more information.
   *
   * Use `stripe.confirmCustomerBalancePayment` when the customer submits your payment form.
   *
   * When called, it will confirm the PaymentIntent with data you provide.
   * Refer to our [integration guide](https://stripe.com/docs/payments/bank-transfers) for more details.
   *
   * Since the Customer Balance payment method draws from a balance, the attempt will succeed or fail depending on the current balance amount. To collect more funds from the customer when the cash balance is insufficient, use the customer balance with bank transfer funding parameters.
   * The confirmation attempt will finish in one of the following result states:
   * 1. If the customer balance was enough to pay the amount, the status is succeeded. The funding_type data is effectively ignored.
   * 2. If the balance was not enough to pay the amount, and you didn't send the funding_type, the status is requires_payment_method.
   * 3. If the balance was not enough to pay the amount, and you did send the funding_type, the status is requires_action. The paymentIntent.next_action.display_bank_transfer_instructions hash contains bank transfer details for funding the Customer Balance.
   *
   * @docs https://stripe.com/docs/js/payment_intents/confirm_customer_balance_payment
   */
  confirmCustomerBalancePayment(
    clientSecret: string,
    data: paymentIntents.ConfirmCustomerBalancePaymentData,
    options: paymentIntents.ConfirmCustomerBalancePaymentOptions
  ): Promise<PaymentIntentResult>;

  /**
   * Use `stripe.confirmEpsPayment` in the [EPS Payments with Payment Methods](https://stripe.com/docs/payments/eps#web) flow when the customer submits your payment form.
   * When called, it will confirm the `PaymentIntent` with `data` you provide, and it will automatically redirect the customer to authorize the transaction.
   * Once authorization is complete, the customer will be redirected back to your specified `return_url`.
   *
   * When you confirm a `PaymentIntent`, it needs to have an attached [PaymentMethod](https://stripe.com/docs/api/payment_methods).
   * In addition to confirming the `PaymentIntent`, this method can automatically create and attach a new `PaymentMethod` for you.
   * If you have already attached a `PaymentMethod` you can call this method without needing to provide any additional data.
   *
   * @docs https://stripe.com/docs/js/payment_intents/confirm_eps_payment
   */
  confirmEpsPayment(
    clientSecret: string,
    data?: paymentIntents.ConfirmEpsPaymentData,
    options?: paymentIntents.ConfirmEpsPaymentOptions
  ): Promise<PaymentIntentResult>;

  /**
   * Use `stripe.confirmFpxPayment` in the [FPX Payments with Payment Methods](https://stripe.com/docs/payments/fpx#web) flow when the customer submits your payment form.
   * When called, it will confirm the `PaymentIntent` with `data` you provide, and it will automatically redirect the customer to authorize the transaction.
   * Once authorization is complete, the customer will be redirected back to your specified `return_url`.
   *
   * When you confirm a `PaymentIntent`, it needs to have an attached [PaymentMethod](https://stripe.com/docs/api/payment_methods).
   * In addition to confirming the `PaymentIntent`, this method can automatically create and attach a new `PaymentMethod` for you.
   * If you have already attached a `PaymentMethod` you can call this method without needing to provide any additional data.
   *
   * @docs https://stripe.com/docs/js/payment_intents/confirm_fpx_payment
   */
  confirmFpxPayment(
    clientSecret: string,
    data?: paymentIntents.ConfirmFpxPaymentData,
    options?: paymentIntents.ConfirmFpxPaymentOptions
  ): Promise<PaymentIntentResult>;

  /**
   * Use `stripe.confirmGiropayPayment` in the [giropay Payments with Payment Methods](https://stripe.com/docs/payments/giropay#web) flow when the customer submits your payment form.
   * When called, it will confirm the `PaymentIntent` with `data` you provide, and it will automatically redirect the customer to authorize the transaction.
   * Once authorization is complete, the customer will be redirected back to your specified `return_url`.
   *
   * When you confirm a `PaymentIntent`, it needs to have an attached [PaymentMethod](https://stripe.com/docs/api/payment_methods).
   * In addition to confirming the `PaymentIntent`, this method can automatically create and attach a new `PaymentMethod` for you.
   * If you have already attached a `PaymentMethod` you can call this method without needing to provide any additional data.
   *
   * @docs https://stripe.com/docs/js/payment_intents/confirm_giropay_payment
   */
  confirmGiropayPayment(
    clientSecret: string,
    data?: paymentIntents.ConfirmGiropayPaymentData,
    options?: paymentIntents.ConfirmGiropayPaymentOptions
  ): Promise<PaymentIntentResult>;

  /**
   * Use `stripe.confirmGrabPayPayment` in the [GrabPay payments](https://stripe.com/docs/payments/grabpay) flow when the customer submits your payment form.
   * When called, it will confirm the [PaymentIntent](https://stripe.com/docs/api/payment_intents).
   * Refer to our [integration guide](https://stripe.com/docs/payments/grabpay/accept-a-payment) for more details.
   *
   * @docs https://stripe.com/docs/js/payment_intents/confirm_grabpay_payment
   */

  confirmGrabPayPayment(
    clientSecret: string,
    data?: paymentIntents.ConfirmGrabPayPaymentData,
    options?: paymentIntents.ConfirmGrabPayPaymentOptions
  ): Promise<PaymentIntentResult>;

  /**
   * Use `stripe.confirmIdealPayment` in the [iDEAL Payments with Payment Methods](https://stripe.com/docs/payments/ideal) flow when the customer submits your payment form.
   * When called, it will confirm the `PaymentIntent` with `data` you provide, and it will automatically redirect the customer to authorize the transaction.
   * Once authorization is complete, the customer will be redirected back to your specified `return_url`.
   *
   * When you confirm a `PaymentIntent`, it needs to have an attached [PaymentMethod](https://stripe.com/docs/api/payment_methods).
   * In addition to confirming the `PaymentIntent`, this method can automatically create and attach a new `PaymentMethod` for you.
   * If you have already attached a `PaymentMethod` you can call this method without needing to provide any additional data.
   *
   * @docs https://stripe.com/docs/js/payment_intents/confirm_ideal_payment
   */
  confirmIdealPayment(
    clientSecret: string,
    data?: paymentIntents.ConfirmIdealPaymentData,
    options?: paymentIntents.ConfirmIdealPaymentOptions
  ): Promise<PaymentIntentResult>;

  /**
   * Requires beta access:
   * Contact [Stripe support](https://support.stripe.com/) for more information.
   *
   * Use `stripe.confirmKlarnaPayment` in the [Klarna Payments](https://stripe.com/docs/payments/klarna) with Payment Methods flow when the customer submits your payment form.
   * When called, it will confirm the [PaymentIntent](https://stripe.com/docs/api/payment_intents) with `data` you provide, and it will automatically redirect the customer to authorize the transaction.
   * Once authorization is complete, the customer will be redirected back to your specified `return_url`.
   *
   * When you confirm a `PaymentIntent`, it needs to have an attached [PaymentMethod](https://stripe.com/docs/api/payment_methods).
   * In addition to confirming the `PaymentIntent`, this method can automatically create and attach a new PaymentMethod for you.
   * If you have already attached a `PaymentMethod` you can call this method without needing to provide any additional data.
   *
   * @docs https://stripe.com/docs/js/payment_intents/confirm_klarna_payment
   */
  confirmKlarnaPayment(
    clientSecret: string,
    data?: paymentIntents.ConfirmKlarnaPaymentData,
    options?: paymentIntents.ConfirmKlarnaPaymentOptions
  ): Promise<PaymentIntentResult>;

  /**
   * Use `stripe.confirmKonbiniPayment` in the [Konbini](https://stripe.com/docs/payments/konbini) payment flow when the customer submits your payment form.
   * When called, it will confirm the [PaymentIntent](https://stripe.com/docs/api/payment_intents) with `data` you provide.
   * Note that there are some additional requirements to this flow that are not covered in this reference.
   * Refer to our [integration guide](https://stripe.com/docs/payments/konbini/accept-a-payment) for more details.
   *
   * When you confirm a `PaymentIntent`, it needs to have an attached [PaymentMethod](https://stripe.com/docs/api/payment_methods).
   * In addition to confirming the `PaymentIntent`, this method can automatically create and attach a new PaymentMethod for you.
   * If you have already attached a `PaymentMethod` you can call this method without needing to provide any additional data.
   *
   * @docs https://stripe.com/docs/js/payment_intents/confirm_konbini_payment
   */
  confirmKonbiniPayment(
    clientSecret: string,
    data?: paymentIntents.ConfirmKonbiniPaymentData,
    options?: paymentIntents.ConfirmKonbiniPaymentOptions
  ): Promise<PaymentIntentResult>;

  /**
   * Use `stripe.confirmOxxoPayment` in the [OXXO Payment](https://stripe.com/docs/payments/oxxo) with Payment Methods flow when the customer submits your payment form.
   * When called, it will confirm the [PaymentIntent](https://stripe.com/docs/api/payment_intents) with `data` you provide.
   * Note that there are some additional requirements to this flow that are not covered in this reference.
   * Refer to our [integration guide](https://stripe.com/docs/payments/oxxo) for more details.
   *
   * When you confirm a `PaymentIntent`, it needs to have an attached [PaymentMethod](https://stripe.com/docs/api/payment_methods).
   * In addition to confirming the `PaymentIntent`, this method can automatically create and attach a new PaymentMethod for you.
   * If you have already attached a `PaymentMethod` you can call this method without needing to provide any additional data.
   *
   * @docs https://stripe.com/docs/js/payment_intents/confirm_oxxo_payment
   */
  confirmOxxoPayment(
    clientSecret: string,
    data?: paymentIntents.ConfirmOxxoPaymentData,
    options?: paymentIntents.ConfirmOxxoPaymentOptions
  ): Promise<PaymentIntentResult>;

  /**
   * Use `stripe.confirmP24Payment` in the [Przelewy24 Payments with Payment Methods](https://stripe.com/docs/payments/p24#web) flow when the customer submits your payment form.
   * When called, it will confirm the `PaymentIntent` with `data` you provide, and it will automatically redirect the customer to authorize the transaction.
   * Once authorization is complete, the customer will be redirected back to your specified `return_url`.
   *
   * When you confirm a `PaymentIntent`, it needs to have an attached [PaymentMethod](https://stripe.com/docs/api/payment_methods).
   * In addition to confirming the `PaymentIntent`, this method can automatically create and attach a new `PaymentMethod` for you.
   * If you have already attached a `PaymentMethod` you can call this method without needing to provide any additional data.
   *
   * @docs https://stripe.com/docs/js/payment_intents/confirm_p24_payment
   */
  confirmP24Payment(
    clientSecret: string,
    data?: paymentIntents.ConfirmP24PaymentData,
    options?: paymentIntents.ConfirmP24PaymentOptions
  ): Promise<PaymentIntentResult>;

  /**
   * Requires beta access:
   * Contact [Stripe support](https://support.stripe.com/) for more information.
   *
   * Use `stripe.confirmPayNowPayment` in the [PayNow Payments](https://stripe.com/docs/payments/paynow) with Payment Methods flow when the customer submits your payment form.
   * When called, it will confirm the [PaymentIntent](https://stripe.com/docs/api/payment_intents) with `data` you provide.
   * Refer to our [integration guide](https://stripe.com/docs/payments/paynow) for more details.
   *
   * When you confirm a `PaymentIntent`, it needs to have an attached [PaymentMethod](https://stripe.com/docs/api/payment_methods).
   * In addition to confirming the `PaymentIntent`, this method can automatically create and attach a new PaymentMethod for you.
   * If you have already attached a `PaymentMethod` you can call this method without needing to provide any additional data.
   */
  confirmPayNowPayment(
    clientSecret: string,
    data?: paymentIntents.ConfirmPayNowPaymentData,
    options?: paymentIntents.ConfirmPayNowPaymentOptions
  ): Promise<PaymentIntentResult>;

  /**
   * Requires beta access:
   * Contact [Stripe support](https://support.stripe.com/) for more information.
   *
   * Use `stripe.confirmPayPalPayment` in the [PayPal Payments](https://stripe.com/docs/payments/paypal) with Payment Methods flow when the customer submits your payment form.
   * When called, it will confirm the [PaymentIntent](https://stripe.com/docs/api/payment_intents) with `data` you provide, and it will automatically redirect the customer to authorize the transaction.
   * Once authorization is complete, the customer will be redirected back to your specified `return_url`.
   *
   * When you confirm a `PaymentIntent`, it needs to have an attached [PaymentMethod](https://stripe.com/docs/api/payment_methods).
   * In addition to confirming the `PaymentIntent`, this method can automatically create and attach a new PaymentMethod for you.
   * If you have already attached a `PaymentMethod` you can call this method without needing to provide any additional data.
   *
   * @docs https://stripe.com/docs/js/payment_intents/confirm_paypal_payment
   */
  confirmPayPalPayment(
    clientSecret: string,
    data?: paymentIntents.ConfirmPayPalPaymentData
  ): Promise<PaymentIntentResult>;

  /**

   * Use `stripe.confirmPixPayment` in the [Pix Payments](https://stripe.com/docs/payments/pix) with Payment Methods flow when the customer submits your payment form.
   * When called, it will confirm the [PaymentIntent](https://stripe.com/docs/api/payment_intents) with `data` you provide.
   * Refer to our [integration guide](https://stripe.com/docs/payments/pix) for more details.
   *
   * When you confirm a `PaymentIntent`, it needs to have an attached [PaymentMethod](https://stripe.com/docs/api/payment_methods).
   * In addition to confirming the `PaymentIntent`, this method can automatically create and attach a new PaymentMethod for you.
   * If you have already attached a `PaymentMethod` you can call this method without needing to provide any additional data.
   *
   * @docs https://stripe.com/docs/js/payment_intents/confirm_pix_payment
   */
  confirmPixPayment(
    clientSecret: string,
    data?: paymentIntents.ConfirmPixPaymentData,
    options?: paymentIntents.ConfirmPixPaymentOptions
  ): Promise<PaymentIntentResult>;

  /**
   * Requires beta access:
   * Contact [Stripe support](https://support.stripe.com/) for more information.
   *
   * Use `stripe.confirmPromptPayPayment` in the [PromptPay Payments](https://stripe.com/docs/payments/promptpay) with Payment Methods flow when the customer submits your payment form.
   * When called, it will confirm the [PaymentIntent](https://stripe.com/docs/api/payment_intents) with `data` you provide.
   * Refer to our [integration guide](https://stripe.com/docs/payments/promptpay) for more details.
   *
   * When you confirm a `PaymentIntent`, it needs to have an attached [PaymentMethod](https://stripe.com/docs/api/payment_methods).
   * In addition to confirming the `PaymentIntent`, this method can automatically create and attach a new PaymentMethod for you.
   * If you have already attached a `PaymentMethod` you can call this method without needing to provide any additional data.
   */
  confirmPromptPayPayment(
    clientSecret: string,
    data?: paymentIntents.ConfirmPromptPayPaymentData,
    options?: paymentIntents.ConfirmPromptPayPaymentOptions
  ): Promise<PaymentIntentResult>;

  /**
   * Use `stripe.confirmSepaDebitPayment` in the [SEPA Direct Debit Payments](https://stripe.com/docs/payments/sepa-debit) with Payment Methods flow when the customer submits your payment form.
   * When called, it will confirm the [PaymentIntent](https://stripe.com/docs/api/payment_intents) with `data` you provide.
   * Note that there are some additional requirements to this flow that are not covered in this reference.
   * Refer to our [integration guide](https://stripe.com/docs/payments/sepa-debit) for more details.
   *
   * When you confirm a `PaymentIntent`, it needs to have an attached [PaymentMethod](https://stripe.com/docs/api/payment_methods).
   * In addition to confirming the `PaymentIntent`, this method can automatically create and attach a new PaymentMethod for you.
   * If you have already attached a `PaymentMethod` you can call this method without needing to provide any additional data.
   *
   * @docs https://stripe.com/docs/js/payment_intents/confirm_sepa_debit_payment
   */
  confirmSepaDebitPayment(
    clientSecret: string,
    data?: paymentIntents.ConfirmSepaDebitPaymentData
  ): Promise<PaymentIntentResult>;

  /**
   * Use `stripe.confirmSofortPayment` in the [Sofort Payments with Payment Methods](https://stripe.com/docs/payments/sofort) flow when the customer submits your payment form.
   * When called, it will confirm the `PaymentIntent` with `data` you provide. It will then automatically redirect the customer to authorize the transaction.
   * Once authorization is complete, the customer will be redirected back to your specified `return_url`.
   *
   * When you confirm a `PaymentIntent`, it needs to have an attached [PaymentMethod](https://stripe.com/docs/api/payment_methods).
   * In addition to confirming the `PaymentIntent`, this method can automatically create and attach a new `PaymentMethod` for you.
   * If you have already attached a `PaymentMethod` you can call this method without needing to provide any additional data.
   *
   * @docs https://stripe.com/docs/js/payment_intents/confirm_sofort_payment
   */
  confirmSofortPayment(
    clientSecret: string,
    data?: paymentIntents.ConfirmSofortPaymentData,
    options?: paymentIntents.ConfirmSofortPaymentOptions
  ): Promise<PaymentIntentResult>;

  /**
   * Requires beta access:
   * Contact [Stripe support](https://support.stripe.com/) for more information.
   *
   * Use `stripe.confirmWechatPayPayment` in the [Wechat Pay Payments](https://stripe.com/docs/payments/wechat-pay) with Payment Methods flow when the customer submits your payment form.
   * When called, it will confirm the [PaymentIntent](https://stripe.com/docs/api/payment_intents) with `data` you provide.
   * Refer to our [integration guide](https://stripe.com/docs/payments/wechat-pay/accept-a-payment) for more details.
   *
   * When you confirm a `PaymentIntent`, it needs to have an attached [PaymentMethod](https://stripe.com/docs/api/payment_methods).
   * In addition to confirming the `PaymentIntent`, this method can automatically create and attach a new PaymentMethod for you.
   * If you have already attached a `PaymentMethod` you can call this method without needing to provide any additional data.
   *
   * @docs https://stripe.com/docs/js/payment_intents/confirm_wechat_pay_payment
   */
  confirmWechatPayPayment(
    clientSecret: string,
    data?: paymentIntents.ConfirmWechatPayPaymentData,
    options?: paymentIntents.ConfirmWechatPayPaymentOptions
  ): Promise<PaymentIntentResult>;

  /**
   * Use `stripe.handleCardAction` in the Payment Intents API [manual confirmation](https://stripe.com/docs/payments/payment-intents/web-manual) flow to handle a [PaymentIntent](https://stripe.com/docs/api/payment_intents) with the `requires_action` status.
   * It will throw an error if the `PaymentIntent` has a different status.
   *
   * Note that `stripe.handleCardAction` may take several seconds to complete.
   * During that time, you should disable your form from being resubmitted and show a waiting indicator like a spinner.
   * If you receive an error result, you should be sure to show that error to the customer, re-enable the form, and hide the waiting indicator.
   *
   * Additionally, `stripe.handleCardAction` may trigger a [3D Secure](https://stripe.com/docs/payments/3d-secure) authentication challenge.
   * The authentication challenge requires a context switch that can be hard to follow on a screen-reader.
   * Ensure that your form is accessible by ensuring that success or error messages are clearly read out.
   *
   * @docs https://stripe.com/docs/js/payment_intents/handle_card_action
   */
  handleCardAction(clientSecret: string): Promise<PaymentIntentResult>;

  /**
   * Use `stripe.handleNextAction` in the [finalizing payments on the server](https://stripe.com/docs/payments/finalize-payments-on-the-server) flow to finish confirmation of a [PaymentIntent](https://stripe.com/docs/api/payment_intents) or [SetupIntent](https://stripe.com/docs/api/setup_intents) with the `requires_action` status.
   * It will throw an error if the `PaymentIntent` or `SetupIntent` has a different status.
   *
   * Note that `stripe.handleNextAction` may take several seconds to complete.
   * During that time, you should disable your form from being resubmitted and show a waiting indicator like a spinner.
   * If you receive an error result, you should be sure to show that error to the customer, re-enable the form, and hide the waiting indicator.
   *
   * Additionally, `stripe.handleNextAction` may trigger a [3D Secure](https://stripe.com/docs/payments/3d-secure) authentication challenge.
   * The authentication challenge requires a context switch that can be hard to follow on a screen-reader.
   * Ensure that your form is accessible by ensuring that success or error messages are clearly read out.
   *
   * @docs https://stripe.com/docs/js/payment_intents/handle_next_action
   */
  handleNextAction(options: {
    clientSecret: string;
  }): Promise<PaymentIntentOrSetupIntentResult>;

  /**
   * Use `stripe.verifyMicrodepositsForPayment` in the [Accept a Canadian pre-authorized debit payment](https://stripe.com/docs/payments/acss-debit/accept-a-payment) flow
   * to verify a customer's bank account with micro-deposits.
   *
   * @docs https://stripe.com/docs/js/payment_intents/verify_microdeposits_for_payment
   */
  verifyMicrodepositsForPayment(
    clientSecret: string,
    data?: paymentIntents.VerifyMicrodepositsForPaymentData
  ): Promise<PaymentIntentResult>;

  /**
   * Use stripe.createRadarSession to create a [Radar Session](https://stripe.com/docs/radar/radar-session) in your checkout flow or when saving card details.
   * A Radar Session is a snapshot of the browser metadata and device details that helps Radar make more accurate predictions on your payments.
   * This metadata includes information like IP address, browser, screen or device information, and other device characteristics.
   * By using Radar Sessions, you can capture critical fraud information without tokenizing on Stripe.
   */
  createRadarSession(): Promise<RadarSessionPayload>;

  /**
   * Use `stripe.collectBankAccountForPayment` in the [Accept a payment flow](https://stripe.com/docs/payments/ach-debit/accept-a-payment) for the [ACH Direct Debit](https://stripe.com/docs/payments/ach-debit)
   * payment method to collect the customer’s bank account in your payment form.
   *
   * @docs https://stripe.com/docs/js/payment_intents/collect_bank_account_for_payment
   */
  collectBankAccountForPayment(
    options: paymentIntents.CollectBankAccountForPaymentOptions
  ): Promise<PaymentIntentResult>;

  /**
   * Use stripe.createPaymentMethod to convert payment information collected by elements into a [PaymentMethod](https://stripe.com/docs/api/payment_methods) object that you safely pass to your server to use in an API call.
   *
   * @docs https://stripe.com/docs/js/payment_methods/create_payment_method
   */
  createPaymentMethod(
    paymentMethodData: paymentIntents.CreatePaymentMethodData
  ): Promise<PaymentMethodResult>;

  /**
   * Use stripe.createPaymentMethod to convert payment information collected by elements into a [PaymentMethod](https://stripe.com/docs/api/payment_methods) object that you safely pass to your server to use in an API call.
   *
   * @docs https://stripe.com/docs/js/payment_methods/create_payment_method_elements
   */
  createPaymentMethod(
    options: paymentIntents.CreatePaymentMethodFromElements
  ): Promise<PaymentMethodResult>;

  /**
   * Use stripe.createPaymentMethod to convert payment information collected by elements into a [PaymentMethod](https://stripe.com/docs/api/payment_methods) object that you safely pass to your server to use in an API call.
   *
   * @docs https://stripe.com/docs/js/payment_methods/create_payment_method_elements
   */
  createPaymentMethod(
    options: paymentIntents.CreatePaymentMethodFromElement
  ): Promise<PaymentMethodResult>;

  /**
   * Retrieve a [PaymentIntent](https://stripe.com/docs/api/payment_intents) using its [client secret](https://stripe.com/docs/api/payment_intents/object#payment_intent_object-client_secret).
   *
   * @docs https://stripe.com/docs/js/payment_intents/retrieve_payment_intent
   */
  retrievePaymentIntent(clientSecret: string): Promise<PaymentIntentResult>;

  /////////////////////////////
  /// Setup Intents
  ///
  /// https://stripe.com/docs/js/setup_intents
  /////////////////////////////

  /**
   * Use `stripe.confirmSetup` to confirm a SetupIntent using data collected by the [Payment Element](https://stripe.com/docs/js/element/payment_element).
   * When called, `stripe.confirmSetup` will attempt to complete any [required actions](https://stripe.com/docs/payments/intents), such as authenticating your user by displaying a 3DS dialog or redirecting them to a bank authorization page.
   * Your user will be redirected to the return_url you pass once the confirmation is complete.
   *
   * By default, stripe.`confirmSetup` will always redirect to your return_url after a successful confirmation.
   * If you set `redirect: "if_required"`, then `stripe.confirmSetup` will only redirect if your user chooses a redirect-based payment method.
   * Setting `if_required` requires that you handle successful confirmations for redirect-based and non-redirect based payment methods separately.
   *
   * @docs https://stripe.com/docs/js/setup_intents/confirm_setup
   */
  confirmSetup(options: {
    elements: StripeElements;
    confirmParams?: Partial<paymentIntents.ConfirmPaymentData>;
    redirect: 'if_required';
  }): Promise<SetupIntentResult>;

  /**
   * Use `stripe.confirmSetup` to confirm a SetupIntent using data collected by the [Payment Element](https://stripe.com/docs/js/element/payment_element).
   * When called, `stripe.confirmSetup` will attempt to complete any [required actions](https://stripe.com/docs/payments/intents), such as authenticating your user by displaying a 3DS dialog or redirecting them to a bank authorization page.
   * Your user will be redirected to the return_url you pass once the confirmation is complete.
   *
   * By default, stripe.`confirmSetup` will always redirect to your return_url after a successful confirmation.
   * If you set `redirect: "if_required"`, then `stripe.confirmSetup` will only redirect if your user chooses a redirect-based payment method.
   * Setting `if_required` requires that you handle successful confirmations for redirect-based and non-redirect based payment methods separately.
   *
   * @docs https://stripe.com/docs/js/setup_intents/confirm_setup
   */
  confirmSetup(options: {
    elements?: StripeElements;
    clientSecret: string;
    confirmParams?: Partial<paymentIntents.ConfirmPaymentData>;
    redirect: 'if_required';
  }): Promise<SetupIntentResult>;

  /**
   * Use `stripe.confirmSetup` to confirm a SetupIntent using data collected by the [Payment Element](https://stripe.com/docs/js/element/payment_element).
   * When called, `stripe.confirmSetup` will attempt to complete any [required actions](https://stripe.com/docs/payments/intents), such as authenticating your user by displaying a 3DS dialog or redirecting them to a bank authorization page.
   * Your user will be redirected to the return_url you pass once the confirmation is complete.
   *
   * @docs https://stripe.com/docs/js/setup_intents/confirm_setup
   */
  confirmSetup(options: {
    elements: StripeElements;
    confirmParams: paymentIntents.ConfirmPaymentData;
    redirect?: 'always';
  }): Promise<never | {error: StripeError}>;

  /**
   * Use `stripe.confirmSetup` to confirm a SetupIntent using data collected by the [Payment Element](https://stripe.com/docs/js/element/payment_element).
   * When called, `stripe.confirmSetup` will attempt to complete any [required actions](https://stripe.com/docs/payments/intents), such as authenticating your user by displaying a 3DS dialog or redirecting them to a bank authorization page.
   * Your user will be redirected to the return_url you pass once the confirmation is complete.
   *
   * @docs https://stripe.com/docs/js/setup_intents/confirm_setup
   */
  confirmSetup(options: {
    elements?: StripeElements;
    clientSecret: string;
    confirmParams: paymentIntents.ConfirmPaymentData;
    redirect?: 'always';
  }): Promise<never | {error: StripeError}>;

  /**
   * Use `stripe.confirmAcssDebitSetup` to [save details for future payments with pre-authorized debit in Canada](https://stripe.com/docs/payments/acss-debit/set-up-payment).
   * When called, it will automatically pop up a modal to collect bank account details and verification, accept the mandate, and confirm the [SetupIntent](https://stripe.com/docs/api/setup_intents) when the user submits the form.
   *
   * When you confirm a `SetupIntent`, it needs to have an attached [PaymentMethod](https://stripe.com/docs/api/payment_methods).
   * `stripe.confirmAcssDebitSetup` automatically creates a new `PaymentMethod` for you when your customer completes the modal UI.
   * It can also be called with an existing `PaymentMethod` which will load the modal UI to collect a new mandate agreement.
   * If you have already attached a `PaymentMethod`, you can call this method without needing to provide any additional data.
   *
   * @docs https://stripe.com/docs/js/setup_intents/confirm_acss_debit_setup
   */
  confirmAcssDebitSetup(
    clientSecret: string,
    data?: setupIntents.ConfirmAcssDebitSetupData,
    options?: setupIntents.ConfirmAcssDebitSetupOptions
  ): Promise<SetupIntentResult>;

  /**
   * Use `stripe.confirmUsBankAccountSetup` in the [Save bank details](https://stripe.com/docs/payments/ach-debit/set-up-payment) flow for the [ACH Direct Debit payment](https://stripe.com/docs/payments/ach-debit) method to record the customer’s authorization for future payments.
   *
   * When you confirm a [SetupIntent](https://stripe.com/docs/api/setup_intents), it needs to have an attached PaymentMethod.
   * Use `stripe.collectBankAccountForSetup` to collect and attach a [PaymentMethod](https://stripe.com/docs/api/payment_methods), or provide bank account details using the `data` parameter if a `PaymentMethod` was not already provided.
   *
   * @docs https://stripe.com/docs/js/setup_intents/confirm_us_bank_account_setup
   */
  confirmUsBankAccountSetup(
    clientSecret: string,
    data?: setupIntents.ConfirmUsBankAccountSetupData
  ): Promise<SetupIntentResult>;

  /**
   * Requires beta access:
   * Contact [Stripe support](https://support.stripe.com/) for more information.
   *
   * Use `stripe.confirmAuBecsDebitSetup` in the [BECS Direct Debit with Setup Intents](https://stripe.com/docs/payments/payment-methods/au-becs-debit-quickstart-setup-intents) flow when the customer submits your payment form.
   * When called, it will confirm the `SetupIntent` with `data` you provide.
   * Note that there are some additional requirements to this flow that are not covered in this reference.
   * Refer to our [integration guide](https://stripe.com/docs/payments/payment-methods/au-becs-debit-quickstart-setup-intents) for more details.
   *
   * When you confirm a `SetupIntent`, it needs to have an attached [PaymentMethod](https://stripe.com/docs/api/payment_methods).
   * In addition to confirming the `SetupIntent`, this method can automatically create and attach a new `PaymentMethod` for you.
   * It can also be called with an existing `PaymentMethod`, or if you have already attached a `PaymentMethod` you can call this method without needing to provide any additional data.
   *
   * @docs https://stripe.com/docs/js/setup_intents/confirm_au_becs_debit_setup
   */
  confirmAuBecsDebitSetup(
    clientSecret: string,
    data?: setupIntents.ConfirmAuBecsDebitSetupData
  ): Promise<SetupIntentResult>;

  /**
   * Use `stripe.confirmBacsDebitSetup` in the [Bacs Direct Debit Payments](https://stripe.com/docs/payments/payment-methods/bacs-debit) flow when the customer submits your payment form.
   * When called, it will confirm the [SetupIntent](https://stripe.com/docs/api/setup_intents) with `data` you provide.
   * Note that there are some additional requirements to this flow that are not covered in this reference.
   * Refer to our [integration guide](https://stripe.com/docs/payments/payment-methods/bacs-debit) for more details.
   *
   * When you confirm a `SetupIntent`, it needs to have an attached [PaymentMethod](https://stripe.com/docs/api/payment_methods).
   * In addition to confirming the `SetupIntent`, this method can automatically create and attach a new `PaymentMethod` for you.
   * It can also be called with an existing `PaymentMethod`, or if you have already attached a `PaymentMethod` you can call this method without needing to provide any additional data.
   *
   * @docs https://stripe.com/docs/js/setup_intents/confirm_bacs_debit_setup
   */
  confirmBacsDebitSetup(
    clientSecret: string,
    data?: setupIntents.ConfirmBacsDebitSetupData
  ): Promise<SetupIntentResult>;

  /**
   * Use `stripe.confirmBancontactSetup` in the [Set up future payments](https://stripe.com/docs/payments/bancontact/set-up-payment) flow to use Bancontact bank details to set up a SEPA Direct Debit payment method for future payments.
   * When called, it will confirm a `SetupIntent` with `data` you provide, and it will automatically redirect the customer to authorize the transaction.
   * Once authorization is complete, the customer will be redirected back to your specified `return_url`.
   * Note that there are some additional requirements to this flow that are not covered in this reference.
   * Refer to our [integration guide](https://stripe.com/docs/payments/bancontact/set-up-payment) for more details.
   *
   * When you confirm a `SetupIntent`, it needs to have an attached [PaymentMethod](https://stripe.com/docs/api/payment_methods).
   * In addition to confirming the `SetupIntent`, this method can automatically create and attach a new `PaymentMethod` for you.
   * It can also be called with an existing `PaymentMethod`, or if you have already attached a `PaymentMethod` you can call this method without needing to provide any additional data.
   *
   * @docs https://stripe.com/docs/js/payment_intents/confirm_bancontact_setup
   */
  confirmBancontactSetup(
    clientSecret: string,
    data?: setupIntents.ConfirmBancontactSetupData
  ): Promise<SetupIntentResult>;

  /**
   * Use `stripe.confirmCardSetup` in the [Setup Intents API flow](https://stripe.com/docs/payments/save-and-reuse) when the customer submits your payment form.
   * When called, it will confirm the [SetupIntent](https://stripe.com/docs/api/setup_intents) with `data` you provide and carry out 3DS or other next actions if they are required.
   *
   * When you confirm a `SetupIntent`, it needs to have an attached [PaymentMethod](https://stripe.com/docs/api/payment_methods).
   * In addition to confirming the `SetupIntent`, this method can automatically create and attach a new `PaymentMethod` for you.
   * It can also be called with an existing `PaymentMethod`, or if you have already attached a `PaymentMethod` you can call this method without needing to provide any additional data.
   *
   * @docs https://stripe.com/docs/js/setup_intents/confirm_card_setup
   */
  confirmCardSetup(
    clientSecret: string,
    data?: setupIntents.ConfirmCardSetupData,
    options?: setupIntents.ConfirmCardSetupOptions
  ): Promise<SetupIntentResult>;

  /**
   * Use `stripe.confirmCashappSetup` in the [Setup Intents API flow](https://stripe.com/docs/payments/save-and-reuse) when the customer submits your payment form.
   * When called, it will confirm the [SetupIntent](https://stripe.com/docs/api/setup_intents) with `data` you provide.
   * Refer to our [integration guide](https://stripe.com/docs/payments/cash-app-pay) for more details..
   *
   * When you confirm a `SetupIntent`, it needs to have an attached [PaymentMethod](https://stripe.com/docs/api/payment_methods).
   * In addition to confirming the `SetupIntent`, this method can automatically create and attach a new `PaymentMethod` for you.
   * It can also be called with an existing `PaymentMethod`, or if you have already attached a `PaymentMethod` you can call this method without needing to provide any additional data.
   *
   * @docs https://stripe.com/docs/js/payment_intents/confirm_cashapp_setup
   */
  confirmCashappSetup(
    clientSecret: string,
    data?: setupIntents.ConfirmCashappSetupData,
    options?: setupIntents.ConfirmCashappSetupOptions
  ): Promise<SetupIntentResult>;

  /**
   * Use `stripe.confirmIdealSetup` in the [Set up future payments](https://stripe.com/docs/payments/ideal/set-up-payment) flow to use iDEAL bank details to set up a SEPA Direct Debit payment method for future payments.
   * When called, it will confirm a `SetupIntent` with `data` you provide, and it will automatically redirect the customer to authorize the transaction.
   * Once authorization is complete, the customer will be redirected back to your specified `return_url`.
   * Note that there are some additional requirements to this flow that are not covered in this reference.
   * Refer to our [integration guide](https://stripe.com/docs/payments/ideal/set-up-payment) for more details.
   *
   * When you confirm a `SetupIntent`, it needs to have an attached [PaymentMethod](https://stripe.com/docs/api/payment_methods).
   * In addition to confirming the `SetupIntent`, this method can automatically create and attach a new `PaymentMethod` for you.
   * It can also be called with an existing `PaymentMethod`, or if you have already attached a `PaymentMethod` you can call this method without needing to provide any additional data.
   *
   * @docs https://stripe.com/docs/js/setup_intents/confirm_ideal_setup
   */
  confirmIdealSetup(
    clientSecret: string,
    data?: setupIntents.ConfirmIdealSetupData
  ): Promise<SetupIntentResult>;

  /**
   * Use `stripe.confirmPayPalSetup` in the [Set up future payments](https://stripe.com/docs/payments/paypal/set-up-future-payments) flow when the customer submits your payment form.
   * When called, it will confirm a `SetupIntent` with `data` you provide, and it will automatically redirect the customer to authorize the transaction.
   * Once authorization is complete, the customer will be redirected back to your specified `return_url`.
   * Note that there are some additional requirements to this flow that are not covered in this reference.
   * Refer to our [integration guide](https://stripe.com/docs/payments/paypal/set-up-future-payments) for more details.
   *
   * When you confirm a `SetupIntent`, it needs to have an attached [PaymentMethod](https://stripe.com/docs/api/payment_methods).
   * In addition to confirming the `SetupIntent`, this method can automatically create and attach a new `PaymentMethod` for you.
   * It can also be called with an existing `PaymentMethod`, or if you have already attached a `PaymentMethod` you can call this method without needing to provide any additional data.
   *
   * @docs https://stripe.com/docs/js/setup_intents/confirm_paypal_setup
   */
  confirmPayPalSetup(
    clientSecret: string,
    data?: setupIntents.ConfirmPayPalSetupData
  ): Promise<SetupIntentResult>;

  /**
   * Use `stripe.confirmSepaDebitSetup` in the [SEPA Direct Debit with Setup Intents](https://stripe.com/docs/payments/sepa-debit-setup-intents) flow when the customer submits your payment form.
   * When called, it will confirm the `SetupIntent` with `data` you provide.
   * Note that there are some additional requirements to this flow that are not covered in this reference.
   * Refer to our [integration guide](https://stripe.com/docs/payments/sepa-debit-setup-intents) for more details.
   *
   * When you confirm a `SetupIntent`, it needs to have an attached [PaymentMethod](https://stripe.com/docs/api/payment_methods).
   * In addition to confirming the `SetupIntent`, this method can automatically create and attach a new `PaymentMethod` for you.
   * It can also be called with an existing `PaymentMethod`, or if you have already attached a `PaymentMethod` you can call this method without needing to provide any additional data.
   *
   * @docs https://stripe.com/docs/js/setup_intents/confirm_sepa_debit_setup
   */
  confirmSepaDebitSetup(
    clientSecret: string,
    data?: setupIntents.ConfirmSepaDebitSetupData
  ): Promise<SetupIntentResult>;

  /*
   * Use `stripe.confirmSofortSetup` in the [Set up future payments](https://stripe.com/docs/payments/sofort/set-up-payment) flow to use SOFORT bank details to set up a SEPA Direct Debit payment method for future payments.
   * When called, it will confirm a `SetupIntent` with `data` you provide, and it will automatically redirect the customer to authorize the transaction.
   * Once authorization is complete, the customer will be redirected back to your specified `return_url`.
   * Note that there are some additional requirements to this flow that are not covered in this reference.
   * Refer to our [integration guide](https://stripe.com/docs/payments/sofort/set-up-payment) for more details.
   *
   * When you confirm a `SetupIntent`, it needs to have an attached [PaymentMethod](https://stripe.com/docs/api/payment_methods).
   * In addition to confirming the `SetupIntent`, this method can automatically create and attach a new `PaymentMethod` for you.
   * It can also be called with an existing `PaymentMethod`, or if you have already attached a `PaymentMethod` you can call this method without needing to provide any additional data.
   */
  confirmSofortSetup(
    clientSecret: string,
    data?: setupIntents.ConfirmSofortSetupData,
    options?: setupIntents.ConfirmSofortSetupOptions
  ): Promise<SetupIntentResult>;

  /**
   * Use `stripe.confirmAffirmPayment` in the [Affirm payments](https://stripe.com/docs/payments/affirm) flow when the customer submits your payment form.
   * When called, it will confirm the [PaymentIntent](https://stripe.com/docs/api/payment_intents).
   * Refer to our [integration guide](https://stripe.com/docs/payments/affirm/accept-a-payment) for more details.
   *
   * @docs https://stripe.com/docs/js/payment_intents/confirm_affirm_payment
   */

  confirmAffirmPayment(
    clientSecret: string,
    data?: paymentIntents.ConfirmAffirmPaymentData,
    options?: paymentIntents.ConfirmAffirmPaymentOptions
  ): Promise<PaymentIntentResult>;

  /**
   * Use `stripe.confirmAfterpayClearpayPayment` in the [Afterpay / Clearpay payments](https://stripe.com/docs/payments/afterpay-clearpay) flow when the customer submits your payment form.
   * When called, it will confirm the [PaymentIntent](https://stripe.com/docs/api/payment_intents).
   * Refer to our [integration guide](https://stripe.com/docs/payments/afterpay-clearpay/accept-a-payment) for more details.
   *
   * @docs https://stripe.com/docs/js/payment_intents/confirm_afterpay_clearpay_payment
   */

  confirmAfterpayClearpayPayment(
    clientSecret: string,
    data?: paymentIntents.ConfirmAfterpayClearpayPaymentData,
    options?: paymentIntents.ConfirmAfterpayClearpayPaymentOptions
  ): Promise<PaymentIntentResult>;

  /**
   * Use `stripe.verifyMicrodepositsForSetup` in the [Save details for future payments with pre-authorized debit in Canada](https://stripe.com/docs/payments/acss-debit/set-up-payment) flow
   * to verify customer's bank account with micro-deposits.
   *
   * @docs https://stripe.com/docs/js/payment_intents/verify_microdeposits_for_setup
   */
  verifyMicrodepositsForSetup(
    clientSecret: string,
    data?: setupIntents.VerifyMicrodepositsForSetupData
  ): Promise<SetupIntentResult>;

  /**
   * Use `stripe.collectBankAccountForSetup` in the [Save bank details](https://stripe.com/docs/payments/ach-debit/set-up-payment) flow for the [ACH Direct Debit](https://stripe.com/docs/payments/ach-debit)
   * payment method to collect the customer’s bank account in your payment form.
   *
   * @docs https://stripe.com/docs/js/setup_intents/collect_bank_account_for_setup
   */
  collectBankAccountForSetup(
    options: setupIntents.CollectBankAccountForSetupOptions
  ): Promise<SetupIntentResult>;

  /**
   * Retrieve a [SetupIntent](https://stripe.com/docs/api/setup_intents) using its client secret.
   *
   * @docs https://stripe.com/docs/js/setup_intents/retrieve_setup_intent
   */
  retrieveSetupIntent(clientSecret: string): Promise<SetupIntentResult>;

  /////////////////////////////
  /// Orders
  ///
  /// https://stripe.com/docs/js/orders
  /////////////////////////////

  /**
   * Use `stripe.processOrder` to submit and confirm payment for an [Order](https://stripe.com/docs/api/orders_v2) using data collected by the [Payment Element](https://stripe.com/docs/js/element/payment_element).
   * When called, `stripe.processOrder` will attempt to complete any required actions, such as authenticating your user by displaying a 3DS dialog or redirecting them to a bank authorization page.
   * Your user will be redirected to the return_url you pass once the confirmation is complete.
   *
   * By default, `stripe.processOrder` will always redirect to your return_url after a successful confirmation.
   * If you set `redirect: "if_required"`, then `stripe.processOrder` will only redirect if your user chooses a redirect-based method.
   * Setting `if_required` requires that you handle successful confirmations for redirect-based and non-redirect based payment methods separately.
   *
   * @docs https://stripe.com/docs/js/orders/process_order
   */
  processOrder(options: {
    elements: StripeElements;
    confirmParams?: Partial<orders.ProcessOrderParams>;
    redirect: 'if_required';
  }): Promise<ProcessOrderResult>;

  /**
   * Use `stripe.processOrder` to submit and confirm payment for an [Order](https://stripe.com/docs/api/orders_v2) using data collected by the [Payment Element](https://stripe.com/docs/js/element/payment_element).
   * When called, `stripe.processOrder` will attempt to complete any required actions, such as authenticating your user by displaying a 3DS dialog or redirecting them to a bank authorization page.
   * Your user will be redirected to the return_url you pass once the confirmation is complete.
   *
   * @docs https://stripe.com/docs/js/orders/process_order
   */
  processOrder(options: {
    elements: StripeElements;
    confirmParams: orders.ProcessOrderParams;
    redirect?: 'always';
  }): Promise<never | {error: StripeError}>;

  /**
   * Retrieve an [Order](https://stripe.com/docs/api/orders_v2) using its [client secret](https://stripe.com/docs/api/orders_v2/object#order_v2_object-client_secret).
   *
   * @docs https://stripe.com/docs/js/orders/retrieve_order
   */
  retrieveOrder(clientSecret: string): Promise<RetrieveOrderResult>;

  /////////////////////////////
  /// Payment Request
  ///
  /// https://stripe.com/docs/js/payment_request
  /////////////////////////////

  /**
   * Use `stripe.paymentRequest` to create a `PaymentRequest` object.
   * Creating a `PaymentRequest` requires that you configure it with an `options` object.
   *
   * In Safari, `stripe.paymentRequest` uses Apple Pay, and in other browsers it uses the [Payment Request API standard](https://www.w3.org/TR/payment-request/).
   */
  paymentRequest(options: PaymentRequestOptions): PaymentRequest;

  /////////////////////////////
  /// Token and Sources
  ///
  /// https://stripe.com/docs/js/tokens_sources
  /////////////////////////////

  /**
   * Use `stripe.createToken` to convert information collected by an `IbanElement` into a single-use [Token](https://stripe.com/docs/api#tokens) that you safely pass to your server to use in an API call.
   *
   * @docs https://stripe.com/docs/js/tokens_sources/create_token?type=ibanElement
   */
  createToken(
    tokenType: elements.StripeIbanElement,
    data: tokens.CreateTokenIbanData
  ): Promise<TokenResult>;

  /**
   * Use `stripe.createToken` to convert information collected by card elements into a single-use [Token](https://stripe.com/docs/api#tokens) that you safely pass to your server to use in an API call.
   *
   * @docs https://stripe.com/docs/js/tokens_sources/create_token?type=cardElement
   */
  createToken(
    tokenType: elements.StripeCardElement | elements.StripeCardNumberElement,
    data?: tokens.CreateTokenCardData
  ): Promise<TokenResult>;

  /**
   * Use `stripe.createToken` to convert personally identifiable information (PII) into a single-use [Token](https://stripe.com/docs/api#tokens) for account identity verification.
   *
   * @docs https://stripe.com/docs/js/tokens_sources/create_token?type=pii
   */
  createToken(
    tokenType: 'pii',
    data: tokens.CreateTokenPiiData
  ): Promise<TokenResult>;

  /**
   * Use `stripe.createToken` to convert bank account information into a single-use token that you safely pass to your server to use in an API call.
   *
   * @docs https://stripe.com/docs/js/tokens_sources/create_token?type=bank_account
   */
  createToken(
    tokenType: 'bank_account',
    data: tokens.CreateTokenBankAccountData
  ): Promise<TokenResult>;

  /**
     * Use `stripe.createToken` to tokenize the recollected CVC for a saved card.

     * First, render a `CardCvcElement` to collect the data.
     * Then pass the `CardCvcElement` to `stripe.createToken` to tokenize the collected data.
     *
     * @docs https://stripe.com/docs/js/tokens_sources/create_token?type=cvc_update
     */
  createToken(
    tokenType: 'cvc_update',
    element: elements.StripeCardCvcElement
  ): Promise<TokenResult>;

  /**
   * Use `stripe.createToken` to create a single-use token that wraps a user’s legal entity information.
   * Use this when creating or updating a Connect account.
   * See the [account tokens documentation](https://stripe.com/docs/connect/account-tokens) to learn more.
   */
  createToken(
    tokenType: 'account',
    data: api.TokenCreateParams.Account
  ): Promise<TokenResult>;

  /**
   * Use `stripe.createToken` to create a single-use token that represents the details for a person.
   * Use this when creating or updating persons associated with a Connect account.
   * See the [documentation](https://stripe.com/docs/connect/account-tokens) to learn more.
   */
  createToken(
    tokenType: 'person',
    data: api.TokenCreateParams.Person
  ): Promise<TokenResult>;

  /**
   * Use `stripe.createSource` to convert payment information collected by elements into a `Source` object that you safely pass to your server to use in an API call.
   * See the [Sources documentation](https://stripe.com/docs/sources) for more information about sources.
   */
  createSource(
    element: StripeElement,
    sourceData: tokens.CreateSourceData
  ): Promise<SourceResult>;

  /**
   * Use `stripe.createSource` to convert raw payment information into a `Source` object that you safely pass to your server to use in an API call.
   * See the [Sources documentation](https://stripe.com/docs/sources) for more information about sources.
   */
  createSource(sourceData: tokens.CreateSourceData): Promise<SourceResult>;

  /**
   * Retrieve a [Source](https://stripe.com/docs/api#sources) using its unique ID and client secret.
   *
   * @docs https://stripe.com/docs/js/tokens_sources/retrieve_source
   */
  retrieveSource(source: tokens.RetrieveSourceParam): Promise<SourceResult>;

  /////////////////////////////
  /// Analytics
  ///
  /////////////////////////////

  /**
   * Use `stripe.registerAppInfo` to register a frontend open source library.
   */
  registerAppInfo(wrapperLibrary: WrapperLibrary): void;

  /////////////////////////////
  /// Identity
  ///
  /////////////////////////////

  /**
   * Use `stripe.verifyIdentity` to display an [Identity](https://stripe.com/docs/identity) modal that securely collects verification information.
   *
   * * @docs https://stripe.com/docs/js/identity/modal
   */
  verifyIdentity(clientSecret: string): Promise<VerificationSessionResult>;

  /////////////////////////////
  /// Financial Connections
  ///
  /////////////////////////////

  /**
   * Use `stripe.collectFinancialConnectionsAccounts` to display a [Financial Connections](https://stripe.com/docs/financial-connections) modal that lets you securely collect financial accounts.
   *
   * * @docs https://stripe.com/docs/js/financial_connections/collect_financial_connections_accounts
   */
  collectFinancialConnectionsAccounts(
    options: financialConnections.CollectFinancialConnectionsAccountsOptions
  ): Promise<FinancialConnectionsSessionResult>;

  /**
   * Use `stripe.collectBankAccountToken` to display a [Financial Connections](https://stripe.com/docs/financial-connections) modal that lets you securely collect a [Bank Account Token](https://stripe.com/docs/api/tokens/object).
   *
   * * @docs https://stripe.com/docs/js/financial_connections/collect_bank_account_token
   */
  collectBankAccountToken(
    options: financialConnections.CollectBankAccountTokenOptions
  ): Promise<CollectBankAccountTokenResult>;

  /**
   * Use `stripe.createEphemeralKeyNonce` to create an ephemeral key nonce that lets you securely create ephemeral keys
   *
   * * @docs https://stripe.com/docs/js/issuing/create_ephemeral_key_nonce
   */
  createEphemeralKeyNonce(
    options: ephemeralKeys.EphemeralKeyNonceOptions
  ): Promise<EphemeralKeyNonceResult>;
}

export type PaymentIntentResult =
  | {paymentIntent: api.PaymentIntent; error?: undefined}
  | {paymentIntent?: undefined; error: StripeError};

export type SetupIntentResult =
  | {setupIntent: api.SetupIntent; error?: undefined}
  | {setupIntent?: undefined; error: StripeError};

export type PaymentIntentOrSetupIntentResult =
  | {
      paymentIntent: api.PaymentIntent;
      setupIntent?: undefined;
      error?: undefined;
    }
  | {paymentIntent?: undefined; setupIntent: api.SetupIntent; error?: undefined}
  | {paymentIntent?: undefined; setupIntent?: undefined; error: StripeError};

export type ProcessOrderResult =
  | {paymentIntent: api.PaymentIntent; order: api.Order; error?: undefined}
  | {paymentIntent?: undefined; order: api.Order; error?: undefined}
  | {paymentIntent?: undefined; order?: undefined; error: StripeError};

export type RetrieveOrderResult =
  | {order: api.Order; error?: undefined}
  | {order?: undefined; error: StripeError};

export type PaymentMethodResult =
  | {paymentMethod: api.PaymentMethod; error?: undefined}
  | {paymentMethod?: undefined; error: StripeError};

export type SourceResult =
  | {source: api.Source; error?: undefined}
  | {source?: undefined; error: StripeError};

export type TokenResult =
  | {token: api.Token; error?: undefined}
  | {token?: undefined; error: StripeError};

export type VerificationSessionResult =
  | {verificationSession: api.VerificationSession; error?: undefined}
  | {verificationSession?: undefined; error: StripeError};

export type FinancialConnectionsSessionResult =
  | {
      financialConnectionsSession: api.FinancialConnectionsSession;
      error?: undefined;
    }
  | {financialConnectionsSession: undefined; error: StripeError};

export type CollectBankAccountTokenResult =
  | {
      financialConnectionsSession: api.FinancialConnectionsSession;
      token: api.BankAccountToken;
      error?: undefined;
    }
  | {
      financialConnectionsSession: undefined;
      token: undefined;
      error: StripeError;
    };

export type EphemeralKeyNonceResult =
  | {nonce: string; error?: undefined}
  | {nonce?: undefined; error: StripeError};

/* A Radar Session is a snapshot of the browser metadata and device details that helps Radar make more accurate predictions on your payments. 
  This metadata includes information like IP address, browser, screen or device information, and other device characteristics. 
  You can find more details about how Radar uses this data by reading about how Radar performs [advanced fraud detection](https://stripe.com/docs/disputes/prevention/advanced-fraud-detection).
  */
export type RadarSessionPayload =
  | {radarSession: Record<any, any>; error?: undefined}
  | {radarSession?: undefined; error: StripeError};

export interface WrapperLibrary {
  /**
   * Your library’s name, maximum length is 30
   */
  name: string;

  /**
   * Required for Stripe Verified Partners, optional otherwise
   * Your Partner ID from the Partners section of the Dashboard
   */
  partner_id?: string;

  /**
   * Your library's version, in the format of x.x.x
   */
  version?: string;

  /**
   * The URL for your library's website with your contact details
   */
  url?: string;
}

/**
 * Use `Stripe(publishableKey, options?)` to create an instance of the `Stripe` object.
 * The Stripe object is your entrypoint to the rest of the Stripe.js SDK.
 *
 * Your Stripe publishable [API key](https://stripe.com/docs/keys) is required when calling this function, as it identifies your website to Stripe.
 *
 * When you’re ready to accept live payments, replace the test key with your live key in production.
 * Learn more about how API keys work in [test mode and live mode](https://stripe.com/docs/dashboard#viewing-test-data).
 */
export interface StripeConstructor {
  (
    /**
     * Your publishable key.
     */
    publishableKey: string,

    /**
     * Initialization options.
     */
    options?: StripeConstructorOptions
  ): Stripe;
}

export interface StripeConstructorOptions {
  /**
   * For usage with [Connect](https://stripe.com/docs/connect) only.
   * Specifying a connected account ID (e.g., `acct_24BFMpJ1svR5A89k`) allows you to perform actions on behalf of that account.
   */
  stripeAccount?: string;

  /**
   * Override your account's [API version](https://stripe.com/docs/api/versioning).
   */
  apiVersion?: string;

  /**
   * The [IETF language tag](https://en.wikipedia.org/wiki/IETF_language_tag) used to globally configure localization in Stripe.js.
   * Setting the locale here will localize error strings for all Stripe.js methods.
   * It will also configure the locale for [Elements](#element_mount) and [Checkout](https://stripe.com/docs/js/checkout/redirect_to_checkout). Default is `auto` (Stripe detects the locale of the browser).
   *
   * Supported values depend on which features you are using.
   * Checkout supports a slightly different set of locales than the rest of Stripe.js.
   * If you are planning on using Checkout, make sure to use a [value](#checkout_redirect_to_checkout-options-locale) that it supports.
   */
  locale?: StripeElementLocale | CheckoutLocale;

  /**
   * Opt-in to prerelease Stripe.js features by passing `betas` when instantiating a `Stripe` object.
   *
   * Supported values for the `betas` option can be found in integration guides for prerelease features.
   * Most users of Stripe.js do not pass this option.
   */
  betas?: string[];
}

export type StripeErrorType =
  /**
   * Failure to connect to Stripe's API.
   */
  | 'api_connection_error'

  /**
   * API errors cover any other type of problem (e.g., a temporary problem with Stripe's servers), and are extremely uncommon.
   */
  | 'api_error'

  /**
   * Failure to properly authenticate yourself in the request.
   */
  | 'authentication_error'

  /**
   * Card errors are the most common type of error you should expect to handle.
   * They result when the user enters a card that can't be charged for some reason.
   */
  | 'card_error'

  /**
   * Idempotency errors occur when an `Idempotency-Key` is re-used on a request that does not match the first request's API endpoint and parameters.
   */
  | 'idempotency_error'

  /**
   * Invalid request errors arise when your request has invalid parameters.
   */
  | 'invalid_request_error'

  /**
   * Too many requests hit the API too quickly.
   */
  | 'rate_limit_error'

  /**
   * Errors triggered by our client-side libraries when failing to validate fields (e.g., when a card number or expiration date is invalid or incomplete).
   */
  | 'validation_error';

export interface StripeError {
  /**
   * The type of error.
   */
  type: StripeErrorType;

  /**
   * For card errors, the ID of the failed charge
   */
  charge?: string;

  /**
   * For some errors that could be handled programmatically, a short string indicating the [error code](https://stripe.com/docs/error-codes) reported.
   */
  code?: string;

  /**
   * For card errors resulting from a card issuer decline, a short string indicating the [card issuer’s reason for the decline](https://stripe.com/docs/declines#issuer-declines) if they provide one.
   */
  decline_code?: string;

  /**
   * A URL to more information about the [error code](https://stripe.com/docs/error-codes) reported.
   */
  doc_url?: string;

  /**
   * A human-readable message providing more details about the error. For card errors, these messages can be shown to your users.
   */
  message?: string;

  /**
   * If the error is parameter-specific, the parameter related to the error.
   * For example, you can use this to display a message near the correct form field.
   */
  param?: string;

  /**
   * The `PaymentIntent` object for errors returned on a request involving a `PaymentIntent`.
   */
  payment_intent?: api.PaymentIntent;

  /**
   * The `PaymentMethod` object for errors returned on a request involving a `PaymentMethod`.
   */
  payment_method?: api.PaymentMethod;

  /**
   * The `SetupIntent` object for errors returned on a request involving a `SetupIntent`.
   */
  setup_intent?: api.SetupIntent;

  /**
   * The `Source` object for errors returned on a request involving a `Source`.
   */
  source?: api.Source;
}

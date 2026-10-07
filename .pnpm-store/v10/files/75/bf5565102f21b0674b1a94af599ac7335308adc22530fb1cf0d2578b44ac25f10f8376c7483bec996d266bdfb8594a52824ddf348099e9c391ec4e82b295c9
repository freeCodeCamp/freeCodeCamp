import {PaymentMethod} from './payment-methods';

/**
 * The SetupIntent object.
 */
export interface SetupIntent {
  /**
   * Unique identifier for the object.
   */
  id: string;

  /**
   * String representing the object's type. Objects of the same type share the same value.
   */
  object: 'setup_intent';

  /**
   * Reason for cancellation of this SetupIntent, one of `abandoned`, `requested_by_customer`, or `duplicate`.
   */
  cancellation_reason: SetupIntent.CancellationReason | null;

  /**
   * The client secret of this SetupIntent. Used for client-side retrieval using a publishable key.
   *
   * The client secret can be used to complete payment setup from your frontend. It should not be stored, logged, embedded in URLs, or exposed to anyone other than the customer. Make sure that you have TLS enabled on any page that includes the client secret.
   */
  client_secret: string | null;

  /**
   * Time at which the object was created. Measured in seconds since the Unix epoch.
   */
  created: number;

  /**
   * An arbitrary string attached to the object. Often useful for displaying to users.
   */
  description: string | null;

  /**
   * The error encountered in the previous SetupIntent confirmation.
   */
  last_setup_error: SetupIntent.LastSetupError | null;

  /**
   * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
   */
  livemode: boolean;

  /**
   * If present, this property tells you what actions you need to take in order for your customer to continue payment setup.
   */
  next_action: SetupIntent.NextAction | null;

  /**
   * ID of the payment method used with this SetupIntent, or the PaymentMethod itself if this field is expanded.
   */
  payment_method: string | null | PaymentMethod;

  /**
   * The list of payment method types (e.g. card) that this SetupIntent is allowed to set up.
   */
  payment_method_types: Array<string>;

  /**
   * [Status](https://stripe.com/docs/payments/intents#intent-statuses) of this SetupIntent, one of `requires_payment_method`, `requires_confirmation`, `requires_action`, `processing`, `canceled`, or `succeeded`.
   */
  status: SetupIntent.Status;

  /**
   * Indicates how the payment method is intended to be used in the future.
   *
   * Use `on_session` if you intend to only reuse the payment method when the customer is in your checkout flow. Use `off_session` if your customer may or may not be in your checkout flow. If not provided, this value defaults to `off_session`.
   */
  usage: string;
}

export namespace SetupIntent {
  export type CancellationReason =
    | 'abandoned'
    | 'duplicate'
    | 'requested_by_customer';

  export interface LastSetupError {
    /**
     * For card errors, the ID of the failed charge.
     */
    charge?: string;

    /**
     * For some errors that could be handled programmatically, a short string indicating the [error code](https://stripe.com/docs/error-codes) reported.
     */
    code?: string;

    /**
     * For card errors resulting from a card issuer decline, a short string indicating the [card issuer's reason for the decline](https://stripe.com/docs/declines#issuer-declines) if they provide one.
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
     * If the error is parameter-specific, the parameter related to the error. For example, you can use this to display a message near the correct form field.
     */
    param?: string;

    payment_method?: PaymentMethod;

    /**
     * The type of error returned. One of `api_connection_error`, `api_error`, `authentication_error`, `card_error`, `idempotency_error`, `invalid_request_error`, or `rate_limit_error`
     */
    type: LastSetupError.Type;
  }

  export namespace LastSetupError {
    export type Type =
      | 'api_connection_error'
      | 'api_error'
      | 'authentication_error'
      | 'card_error'
      | 'idempotency_error'
      | 'invalid_request_error'
      | 'rate_limit_error';
  }

  export interface NextAction {
    redirect_to_url?: NextAction.RedirectToUrl;

    /**
     * Type of the next action to perform, one of `redirect_to_url` or `use_stripe_sdk`.
     */
    type: string;

    /**
     * When confirming a SetupIntent with Stripe.js, Stripe.js depends on the contents of this dictionary to invoke authentication flows. The shape of the contents is subject to change and is only intended to be used by Stripe.js.
     */
    use_stripe_sdk?: NextAction.UseStripeSdk;
  }

  export namespace NextAction {
    export interface RedirectToUrl {
      /**
       * If the customer does not exit their browser while authenticating, they will be redirected to this specified URL after completion.
       */
      return_url: string | null;

      /**
       * The URL you must redirect your customer to in order to authenticate.
       */
      url: string | null;
    }

    export interface UseStripeSdk {}
  }

  export type Status =
    | 'canceled'
    | 'processing'
    | 'requires_action'
    | 'requires_confirmation'
    | 'requires_payment_method'
    | 'succeeded';
}

export interface SetupIntentConfirmParams {
  /**
   * This hash contains details about the Mandate to create
   */
  mandate_data?: {[k: string]: any};

  /**
   * The URL to redirect your customer back to after they authenticate on the payment method's app or site.
   * If you'd prefer to redirect to a mobile application, you can alternatively supply an application URI scheme.
   * This parameter is only used for cards and other redirect-based payment methods.
   */
  return_url?: string;
}

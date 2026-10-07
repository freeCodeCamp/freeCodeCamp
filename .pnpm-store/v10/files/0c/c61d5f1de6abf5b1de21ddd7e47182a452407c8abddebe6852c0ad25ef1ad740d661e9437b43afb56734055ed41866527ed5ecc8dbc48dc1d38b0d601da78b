import {StripeElementBase} from './base';
import {StripeError} from '../stripe';

export type StripeCartElement = StripeElementBase & {
  /**
   * The change event is triggered when the `Element`'s value changes.
   */
  on(
    eventType: 'change',
    handler: (event: StripeCartElementPayloadEvent) => any
  ): StripeCartElement;
  once(
    eventType: 'change',
    handler: (event: StripeCartElementPayloadEvent) => any
  ): StripeCartElement;
  off(
    eventType: 'change',
    handler?: (event: StripeCartElementPayloadEvent) => any
  ): StripeCartElement;

  /**
   * Triggered when the element is fully rendered and can accept `element.focus` calls.
   */
  on(
    eventType: 'ready',
    handler: (event: StripeCartElementPayloadEvent) => any
  ): StripeCartElement;
  once(
    eventType: 'ready',
    handler: (event: StripeCartElementPayloadEvent) => any
  ): StripeCartElement;
  off(
    eventType: 'ready',
    handler?: (event: StripeCartElementPayloadEvent) => any
  ): StripeCartElement;

  /**
   * Triggered when the element fails to load.
   */
  on(
    eventType: 'loaderror',
    handler: (event: {elementType: 'cart'; error: StripeError}) => any
  ): StripeCartElement;
  once(
    eventType: 'loaderror',
    handler: (event: {elementType: 'cart'; error: StripeError}) => any
  ): StripeCartElement;
  off(
    eventType: 'loaderror',
    handler?: (event: {elementType: 'cart'; error: StripeError}) => any
  ): StripeCartElement;

  /**
   * Triggered when the 'checkout' button in the element is clicked
   */
  on(
    eventType: 'checkout',
    handler: (event: StripeCartElementPayloadEvent) => any
  ): StripeCartElement;
  once(
    eventType: 'checkout',
    handler: (event: StripeCartElementPayloadEvent) => any
  ): StripeCartElement;
  off(
    eventType: 'checkout',
    handler?: (event: StripeCartElementPayloadEvent) => any
  ): StripeCartElement;

  /**
   * Triggered when a line item in the element is clicked
   */
  on(
    eventType: 'lineitemclick',
    handler: (event: StripeCartElementLineItemClickEvent) => any
  ): StripeCartElement;
  once(
    eventType: 'lineitemclick',
    handler: (event: StripeCartElementLineItemClickEvent) => any
  ): StripeCartElement;
  off(
    eventType: 'lineitemclick',
    handler?: (event: StripeCartElementLineItemClickEvent) => any
  ): StripeCartElement;

  /**
   * Updates the options the `CartElement` was initialized with.
   * Updates are merged into the existing configuration.
   */
  update(options: StripeCartElementUpdateOptions): StripeCartElement;

  /**
   * Makes the Cart Element visible
   */
  show(): StripeCartElement;

  /**
   * Makes the Cart Element not visible
   */
  hide(): StripeCartElement;

  /**
   * Cancels the "Check Out" button loader and displays an error message regarding why going to checkout failed
   */
  cancelCheckout(errorMessage?: string | null): StripeCartElement;

  /**
   * Adds a line item to the CartSession
   */
  addLineItem(
    lineItemData:
      | {
          product: string;
          price?: null;
          item_details?: null;
          quantity?: number | null;
        }
      | {
          product?: null;
          price: string;
          item_details?: null;
          quantity?: number | null;
        }
      | {
          price?: null;
          product?: null;
          item_details: CartItemDetails;
          quantity?: number | null;
        }
  ): Promise<{error?: StripeError}>;
};

export type CartItemDetails = {
  external_id: string;
  name: string;
  description?: string;
  image?: string;
  unit_amount: number;
};

export type CartDescriptor = 'cart' | 'bag' | 'basket';

export type CartShowOnAdd = 'never' | 'auto';

export interface StripeCartElementOptions {
  /**
   * Identifies the CartSession the Element will display and modify.
   */
  clientSecret: string;

  /**
   * Override the verbiage used within the Element to refer to itself.
   * By default the Cart Element will use the term 'cart'.
   */
  descriptor?: CartDescriptor | null;

  /**
   * Override the text used in the title of the Element.
   * By default the Cart Element will use the title 'Your [descriptor]'.
   */
  header?: {
    text?: string | null;
  };

  /**
   * Control whether the Element automatically appears when items are added to the cart.
   * By default, the Cart Element will use 'auto'.
   */
  showOnAdd?: CartShowOnAdd | null;
}

/*
 * Updatable options for an `Elements` instance
 */
export interface StripeCartElementUpdateOptions {
  /**
   * Override the text used in the title of the Element.
   * By default the Cart Element will use the title 'Your [descriptor]'.
   */
  header?: {
    text?: string | null;
  };

  /**
   * Control whether the Element automatically appears when items are added to the cart.
   * By default, the Cart Element will use 'auto'.
   */
  showOnAdd?: CartShowOnAdd | null;
}

export interface StripeCartElementPayloadEvent {
  /**
   * The type of element that emitted this event.
   */
  elementType: 'cart';

  /**
   * The ID of the CartSession associated with the Element.
   */
  id: string;

  /**
   * The number of line items currently in the cart.
   */
  lineItems: {
    count: number;
  };
}

export interface StripeCartElementLineItemClickEvent {
  /**
   * The type of element that emitted this event.
   */
  elementType: 'cart';

  /**
   * The ID of the CartSession associated with the Element.
   */
  preventDefault: () => void;

  /**
   * The type of element that emitted this event.
   */
  url: string;
}

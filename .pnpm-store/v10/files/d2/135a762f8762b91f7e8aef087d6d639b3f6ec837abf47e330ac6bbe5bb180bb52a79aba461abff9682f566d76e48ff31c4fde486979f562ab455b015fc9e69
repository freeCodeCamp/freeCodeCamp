import {StripeElementBase} from './base';
import {StripeError} from '../stripe';

export type StripeLinkAuthenticationElement = StripeElementBase & {
  /**
   * The change event is triggered when the `Element`'s value changes.
   */
  on(
    eventType: 'change',
    handler: (event: StripeLinkAuthenticationElementChangeEvent) => any
  ): StripeLinkAuthenticationElement;
  once(
    eventType: 'change',
    handler: (event: StripeLinkAuthenticationElementChangeEvent) => any
  ): StripeLinkAuthenticationElement;
  off(
    eventType: 'change',
    handler?: (event: StripeLinkAuthenticationElementChangeEvent) => any
  ): StripeLinkAuthenticationElement;

  /**
   * Triggered when the element is fully rendered and can accept `element.focus` calls.
   */
  on(
    eventType: 'ready',
    handler: (event: {elementType: 'linkAuthentication'}) => any
  ): StripeLinkAuthenticationElement;
  once(
    eventType: 'ready',
    handler: (event: {elementType: 'linkAuthentication'}) => any
  ): StripeLinkAuthenticationElement;
  off(
    eventType: 'ready',
    handler?: (event: {elementType: 'linkAuthentication'}) => any
  ): StripeLinkAuthenticationElement;

  /**
   * Triggered when the element gains focus.
   */
  on(
    eventType: 'focus',
    handler: (event: {elementType: 'linkAuthentication'}) => any
  ): StripeLinkAuthenticationElement;
  once(
    eventType: 'focus',
    handler: (event: {elementType: 'linkAuthentication'}) => any
  ): StripeLinkAuthenticationElement;
  off(
    eventType: 'focus',
    handler?: (event: {elementType: 'linkAuthentication'}) => any
  ): StripeLinkAuthenticationElement;

  /**
   * Triggered when the element loses focus.
   */
  on(
    eventType: 'blur',
    handler: (event: {elementType: 'linkAuthentication'}) => any
  ): StripeLinkAuthenticationElement;
  once(
    eventType: 'blur',
    handler: (event: {elementType: 'linkAuthentication'}) => any
  ): StripeLinkAuthenticationElement;
  off(
    eventType: 'blur',
    handler?: (event: {elementType: 'linkAuthentication'}) => any
  ): StripeLinkAuthenticationElement;

  /**
   * Triggered when the escape key is pressed within the element.
   */
  on(
    eventType: 'escape',
    handler: (event: {elementType: 'linkAuthentication'}) => any
  ): StripeLinkAuthenticationElement;
  once(
    eventType: 'escape',
    handler: (event: {elementType: 'linkAuthentication'}) => any
  ): StripeLinkAuthenticationElement;
  off(
    eventType: 'escape',
    handler?: (event: {elementType: 'linkAuthentication'}) => any
  ): StripeLinkAuthenticationElement;

  /**
   * Triggered when the element fails to load.
   */
  on(
    eventType: 'loaderror',
    handler: (event: {
      elementType: 'linkAuthentication';
      error: StripeError;
    }) => any
  ): StripeLinkAuthenticationElement;
  once(
    eventType: 'loaderror',
    handler: (event: {
      elementType: 'linkAuthentication';
      error: StripeError;
    }) => any
  ): StripeLinkAuthenticationElement;
  off(
    eventType: 'loaderror',
    handler?: (event: {
      elementType: 'linkAuthentication';
      error: StripeError;
    }) => any
  ): StripeLinkAuthenticationElement;

  /**
   * Triggered when the loader UI is mounted to the DOM and ready to be displayed.
   */
  on(
    eventType: 'loaderstart',
    handler: (event: {elementType: 'linkAuthentication'}) => any
  ): StripeLinkAuthenticationElement;
  once(
    eventType: 'loaderstart',
    handler: (event: {elementType: 'linkAuthentication'}) => any
  ): StripeLinkAuthenticationElement;
  off(
    eventType: 'loaderstart',
    handler?: (event: {elementType: 'linkAuthentication'}) => any
  ): StripeLinkAuthenticationElement;
};

export interface StripeLinkAuthenticationElementOptions {
  /**
   * Default value for LinkAuthenticationElement fields
   */
  defaultValues?: {
    email: string;
  };
}

export interface StripeLinkAuthenticationElementChangeEvent {
  /**
   * The type of element that emitted this event.
   */
  elementType: 'linkAuthentication';

  /**
   * Whether or not the LinkAuthentication Element is currently empty.
   */
  empty: boolean;

  /**
   * Whether or not the LinkAuthentication Element is complete.
   */
  complete: boolean;

  /**
   * An object containing the current email.
   */
  value: {
    email: string;
  };
}

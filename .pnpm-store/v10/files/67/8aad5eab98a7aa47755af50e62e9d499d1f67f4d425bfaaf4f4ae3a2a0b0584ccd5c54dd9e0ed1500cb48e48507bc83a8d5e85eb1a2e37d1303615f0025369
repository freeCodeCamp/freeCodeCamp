import {StripeElementType} from '../elements-group';

export type StripeElementBase = {
  /**
   * The `element.mount` method attaches your [Element](https://stripe.com/docs/js/element) to the DOM.
   * `element.mount` accepts either a CSS Selector (e.g., `'#card-element'`) or a DOM element.
   *
   * You need to create a container DOM element to mount an `Element`.
   * If the container DOM element has a label, the `Element` is automatically focused when its label is clicked.
   * There are two ways to do this:
   *
   * 1. Mount the instance within a `<label>`.
   * 2. Create a `<label>` with a `for` attribute, referencing the ID of your container.
   */
  mount(domElement: string | HTMLElement): void;

  /**
   * Blurs the element.
   */
  blur(): void;

  /**
   * Clears the value(s) of the element.
   */
  clear(): void;

  /**
   * Removes the element from the DOM and destroys it.
   * A destroyed element can not be re-activated or re-mounted to the DOM.
   */
  destroy(): void;

  /**
   * Focuses the element.
   */
  focus(): void;

  /**
   * Unmounts the element from the DOM.
   * Call `element.mount` to re-attach it to the DOM.
   */
  unmount(): void;
};

/**
 * Customize the appearance of an element using CSS properties passed in a `Style` object, which consists of CSS properties nested under objects for each variant.
 */
export interface StripeElementStyle {
  /**
   * Base variant—all other variants inherit from these styles.
   */
  base?: StripeElementStyleVariant;

  /**
   * Applied when the element has valid input.
   */
  complete?: StripeElementStyleVariant;

  /**
   * Applied when the element has no customer input.
   */
  empty?: StripeElementStyleVariant;

  /**
   * Applied when the element has invalid input.
   */
  invalid?: StripeElementStyleVariant;
}

/**
 * An object with `CSSProperties` supported by Stripe.js.
 * Pseudo-classes and pseudo-elements can also be styled using a nested object inside of a variant.
 */
export interface StripeElementStyleVariant extends StripeElementCSSProperties {
  ':hover'?: StripeElementCSSProperties;

  ':focus'?: StripeElementCSSProperties;

  '::placeholder'?: StripeElementCSSProperties;

  '::selection'?: StripeElementCSSProperties;

  ':-webkit-autofill'?: StripeElementCSSProperties;

  /**
   * Available for all elements except the `paymentRequestButton` element
   */
  ':disabled'?: StripeElementCSSProperties;

  /**
   * Available for the `cardNumber`, `cardExpiry`, and `cardCvc` elements.
   */
  '::-ms-clear'?: StripeElementCSSProperties & {display: string};
}

/**
 * CSS properties supported by Stripe.js.
 */
export interface StripeElementCSSProperties {
  /**
   * The [background-color](https://developer.mozilla.org/en-US/docs/Web/CSS/background-color) CSS property.
   *
   * This property works best with the `::selection` pseudo-class.
   * In other cases, consider setting the background color on the element's container instaed.
   */
  backgroundColor?: string;

  /**
   * The [color](https://developer.mozilla.org/en-US/docs/Web/CSS/color) CSS property.
   */
  color?: string;

  /**
   * The [font-family](https://developer.mozilla.org/en-US/docs/Web/CSS/font-family) CSS property.
   */
  fontFamily?: string;

  /**
   * The [font-size](https://developer.mozilla.org/en-US/docs/Web/CSS/font-size) CSS property.
   */
  fontSize?: string;

  /**
   * The [font-smoothing](https://developer.mozilla.org/en-US/docs/Web/CSS/font-smoothing) CSS property.
   */
  fontSmoothing?: string;

  /**
   * The [font-style](https://developer.mozilla.org/en-US/docs/Web/CSS/font-style) CSS property.
   */
  fontStyle?: string;

  /**
   * The [font-variant](https://developer.mozilla.org/en-US/docs/Web/CSS/font-variant) CSS property.
   */
  fontVariant?: string;

  /**
   * The [font-weight](https://developer.mozilla.org/en-US/docs/Web/CSS/font-weight) CSS property.
   */
  fontWeight?: string | number;

  /**
   * A custom property, used to set the color of the icons that are rendered in an element.
   */
  iconColor?: string;

  /**
   * The [line-height](https://developer.mozilla.org/en-US/docs/Web/CSS/line-height) CSS property.
   *
   * To avoid cursors being rendered inconsistently across browsers, consider using a padding on the element's container instead.
   */
  lineHeight?: string;

  /**
   * The [letter-spacing](https://developer.mozilla.org/en-US/docs/Web/CSS/letter-spacing) CSS property.
   */
  letterSpacing?: string;

  /**
   * The [text-align](https://developer.mozilla.org/en-US/docs/Web/CSS/text-align) CSS property.
   *
   * Available for the `cardNumber`, `cardExpiry`, and `cardCvc` elements.
   */
  textAlign?: string;

  /**
   * The [padding](https://developer.mozilla.org/en-US/docs/Web/CSS/padding) CSS property.
   *
   * Available for the `idealBank` element.
   * Accepts integer length with `px` unit as values.
   */
  padding?: string;

  /**
   * The [text-decoration](https://developer.mozilla.org/en-US/docs/Web/CSS/text-decoration) CSS property.
   */
  textDecoration?: string;

  /**
   * The [text-shadow](https://developer.mozilla.org/en-US/docs/Web/CSS/text-shadow) CSS property.
   */
  textShadow?: string;

  /**
   * The [text-transform](https://developer.mozilla.org/en-US/docs/Web/CSS/text-transform) CSS property.
   */
  textTransform?: string;
}

/**
 * Use `Classes` to set custom class names on the container DOM element when the Stripe element is in a particular state.
 */
export interface StripeElementClasses {
  /**
   * The base class applied to the container.
   * Defaults to `StripeElement`.
   */
  base?: string;

  /**
   * The class name to apply when the `Element` is complete.
   * Defaults to `StripeElement--complete`.
   */
  complete?: string;

  /**
   * The class name to apply when the `Element` is empty.
   * Defaults to `StripeElement--empty`.
   */
  empty?: string;

  /**
   * The class name to apply when the `Element` is focused.
   * Defaults to `StripeElement--focus`.
   */
  focus?: string;

  /**
   * The class name to apply when the `Element` is invalid.
   * Defaults to `StripeElement--invalid`.
   */
  invalid?: string;

  /**
   * The class name to apply when the `Element` has its value autofilled by the browser (only on Chrome and Safari).
   * Defaults to `StripeElement--webkit-autofill`.
   */
  webkitAutofill?: string;
}

export interface StripeElementChangeEvent {
  /**
   * The type of element that emitted this event.
   */
  elementType: StripeElementType;

  /**
   * `true` if the value is empty.
   */
  empty: boolean;

  /**
   * `true` if the value is well-formed and potentially complete.
   * The `complete` value can be used to progressively disclose the next parts of your form or to enable form submission.
   *
   * It is not an indicator of whether a customer is done with their input—it only indicates that the Element contains a potentially complete, well-formed value.
   * In many cases the customer could still add further input.
   *
   * The `complete` value should not be used to perform an action such as advancing the cursor to a subsequent field or performing a tokenization request.
   */
  complete: boolean;

  /**
   * The current validation error, if any.
   */
  error:
    | undefined
    | {
        type: 'validation_error';
        code: string;
        message: string;
      };
}

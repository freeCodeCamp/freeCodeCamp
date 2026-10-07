import * as React from 'react';

interface Offset {
  top?: number;
  right?: number;
  left?: number;
  bottom?: number;
}

type Place = 'top' | 'right' | 'bottom' | 'left';
type Type = 'dark' | 'success' | 'warning' | 'error' | 'info' | 'light';
type Effect = 'float' | 'solid';

type VoidFunc = (...args: any[]) => void;
type GetContentFunc = (toolTipStr: string) => React.ReactNode;
type GetContent = GetContentFunc | [GetContentFunc, number];

export interface TooltipProps {
  children?: React.ReactNode;
  uuid?: string;
  // Placement of tooltip
  place?: Place;
  // Tooltip styling theme
  type?: Type;
  // Behavior of tooltip
  effect?: Effect;
  // Global tooltip offset, e.g., offset={{ top: 10, left: 5 }}
  offset?: Offset;
  // Support <br /> to make explicitly multiline tooltip comments
  multiline?: boolean;
  // Add 1px white border
  border?: boolean;
  // A custom class name to use for the border
  borderClass?: string;
  // Popup text color
  textColor?: string;
  // Popup background color
  backgroundColor?: string;
  // Popup border color
  borderColor?: string;
  // Popup arrow color
  arrowColor?: string;
  // Whether to inject the style header into the page
  // dynamically (violates CSP style-src, but is a convenient default);
  // default = true
  insecure?: boolean;
  // Extra style class
  class?: string;
  // Extra style class
  className?: string;
  // HTML id attribute
  id?: string;
  // Inject raw HTML? (This is a security risk)
  html?: boolean;
  // Time delay for hiding popup
  delayHide?: number;
  // Time delay for updating popup
  delayUpdate?: number;
  // Time delay for showing popup
  delayShow?: number;
  // Custom event to trigger tooltip
  event?: keyof HTMLElementEventMap | string;
  // Custom event to hide tooltip
  // (this requires the event prop as well)
  eventOff?: keyof HTMLElementEventMap | string;
  // When set to true, custom event's propagation
  // mode will be captue
  isCapture?: boolean;
  // Global event to hide tooltip
  globalEventOff?: keyof HTMLElementEventMap | string;
  // Function to dynamically generate the tooltip content
  getContent?: GetContent;
  // Callback after tooltip is shown
  afterShow?: VoidFunc;
  // Callback after tooltip is hidden
  afterHide?: VoidFunc;
  // Callback to override the tooltip position
  overridePosition?: (
    position: { left: number; top: number },
    currentEvent: Event,
    currentTarget: EventTarget,
    // node is the ref argument, and the wrapper
    // is restricted to: div | span
    refNode: null | HTMLDivElement | HTMLSpanElement,
    place: Place,
    desiredPlace: Place,
    effect: Effect,
    offset: Offset
  ) => { left: number; top: number };
  // Manually disable the tooltip behavior
  disable?: boolean;
  // Hide the tooltip when scrolling;
  // default = true
  scrollHide?: boolean;
  // Hide the tooltip when risizing the window;
  // default = true
  resizeHide?: boolean;
  // The tooltip parent component;
  // default = 'div'
  wrapper?: 'div' | 'span';
  // Listen to body events vs. individual events
  bodyMode?: boolean;
  // List of potential custom events to trigger the popup (in body mode)
  possibleCustomEvents?: string;
  // List of potential custom events to hide the popup (in body mode)
  possibleCustomEventsOff?: string;
  // Should the tooltip by clickable?
  clickable?: boolean;
  // Aria role for the tooltip
  role?: string;
  // Padding attribute
  padding?: string;
  // Set internal style as optional
  disableInternalStyle?: boolean;
}

// ReactTooltip component is the default export
// You can overview demo examples here: https://bddeu.csb.app
export default class ReactTooltip extends React.Component<TooltipProps> {
  // static methods
  static show: (target: Element) => {};
  static hide: (target?: Element) => {};
  static rebuild: () => {};
}

import * as React from 'react';

export type MouseTrapKeySequence = string | Array<string>;

export type ActionName = string;
export type KeyName = string;

export type KeyEventName = 'keyup' | 'keydown' | 'keypress';

export interface KeyMapOptions {
  sequence: MouseTrapKeySequence;
  action: KeyEventName;
}

export interface ExtendedKeyMapOptions extends KeyMapOptions {
  sequences: Array<MouseTrapKeySequence> | Array<KeyMapOptions>;
  name?: string;
  group?: string;
  description?: string;
}

export type KeySequence = MouseTrapKeySequence | KeyMapOptions | ExtendedKeyMapOptions | Array<MouseTrapKeySequence> | Array<KeyMapOptions>;

export type KeyMap = { [key in ActionName]: KeySequence };

/**
 * Component that listens to key events when one of its children are in focus and
 * selectively triggers actions (that may be handled by handler functions) when a
 * sequence of events matches a list of pre-defined sequences or combinations
 */
export interface HotKeysEnabled extends React.Component<HotKeysProps, {}> { }

export interface GlobalHotKeysProps extends React.HTMLAttributes<HotKeys> {
  /**
   * A map from action names to Mousetrap or Browser key sequences
   */
  keyMap?: KeyMap;

  /**
   * A map from action names to event handler functions
   */
  handlers?: { [key: string]: (keyEvent?: KeyboardEvent) => void };

  /**
   * Whether the keyMap or handlers are permitted to change after the
   * component mounts. If false, changes to the keyMap and handlers
   * props will be ignored
   */
  allowChanges?: boolean;
}

export type TabIndex = string | number;

export interface HotKeysEnabledProps extends GlobalHotKeysProps {
  /**
   * Function to call when this component gains focus in the browser
   */
  onFocus?: () => void;

  /**
   * Function to call when this component loses focus in the browser
   */
  onBlur?: () => void;

  /**
   * Whether this is the root HotKeys node - this enables some special behaviour
   */
  root?: boolean;
}

/**
 * The props the DOM-mountable node rendered by component passed to HotKeys
 * must accept
 */
export interface ComponentPropsBase {
  /**
   * Function to bind to root node, in order for react-hotkeys to work
   */
  onFocus: () => void;

  /**
   * Function to bind to root node, in order for react-hotkeys to work
   */
  onBlur: () => void;

  /**
   * The value of the HTML tabindex attribute the root node will have
   */
  tabIndex: TabIndex;
}

/**
 * The props the component passed to HotKeys must accept, and pass down
 * to a DOM-mountable child (preferably the root)
 */
export interface ComponentProps extends ComponentPropsBase {
  ref?: React.MutableRefObject<React.ComponentClass>
}

export type ReactComponent = React.ComponentClass | string | React.SFC<ComponentProps>;

export interface HotKeysProps extends HotKeysEnabledProps {
  /**
   * The React component that should be used in the DOM to wrap the FocusTrap's
   * children and have the internal key listeners bound to
   */
  component?: ReactComponent;

  innerRef?: React.RefObject<HTMLElement>;
}

/**
 * @see HotKeysEnabled
 */
export class HotKeys extends React.Component<HotKeysProps, {}> { }

export class GlobalHotKeys extends React.Component<GlobalHotKeysProps, {}> { }

/**
 * Wraps a React component in a HotKeysEnabled component, which passes down the
 * callbacks and options necessary for React Hotkeys to work as a single prop value,
 * hotkeys. These must be unwrapped and applied to a DOM-mountable element within
 * the wrapped component (e.g. div, span, input, etc) in order for the key events
 * to be recorded.
 */
export declare function withHotKeys(Component: React.ComponentClass, hotKeysOptions: HotKeysEnabledProps): HotKeysEnabled;

export declare function deprecatedWithHotKeys(keyMap: { [key: string]: KeySequence }): HotKeys;

export type ListOfKeys = string | Array<string>;

/**
 * A component that causes React Hotkeys to ignore the results of
 * Configuration.ignoreEventCondition and instead either force the event to be
 * ignored or observed. By default, this is all key events, but you can use
 * the only prop to provide a whitelist, or the except prop to pass a blacklist.
 */
export interface HotKeysIgnoreOverride extends React.Component<HotKeysProps, {}> { }

export interface HotKeysOverrideProps extends React.HTMLAttributes<HotKeys> {
  /**
   * The whitelist of keys that keyevents should be ignored. i.e. if you place
   * a key in this list, all events related to it will be ignored by react hotkeys
   */
  only?: ListOfKeys,

  /**
   * The blacklist of keys that keyevents should be not ignored. i.e. if you place
   * a key in this list, all events related to it will be still be observed by react
   * hotkeys
   */
  except?: ListOfKeys
}

/**
 * A component that causes React Hotkeys to ignore all matching key events
 * triggered by its children. By default, this is all key events, but you can use
 * the only prop to provide a whitelist, or the except prop to pass a blacklist (and
 * cause HotKeys components to still observe these events).
 *
 * @see HotKeysIgnoreOverride
 */
export class IgnoreKeys extends React.Component<HotKeysOverrideProps, {}> { }

/**
 * Wraps a React component in a HotKeysIgnored component, which passes down the
 * callbacks and options necessary for React Hotkeys to work as a single prop value,
 * hotkeys. These must be unwrapped and applied to a DOM-mountable element within
 * the wrapped component (e.g. div, span, input, etc) in order for the key events
 * to be recorded.
 */
export declare function withIgnoreKeys(Component: React.ComponentClass, hotKeysIgnoreOptions: HotKeysOverrideProps): IgnoreKeys;

/**
 * A component that forces React Hotkeys to observe all matching key events
 * triggered by its children, even if they are matched by Configuration.ignoreEventsCondition.
 * By default, this is all key events, but you can use the only prop to provide a
 * whitelist, or the except prop to pass a blacklist.
 */
export class ObserveKeys extends React.Component<HotKeysOverrideProps, {}> { }

/**
 * Wraps a React component in a ObserveKeys component, which passes down the
 * callbacks and options necessary for React Hotkeys to work as a single prop value,
 * hotkeys. These must be unwrapped and applied to a DOM-mountable element within
 * the wrapped component (e.g. div, span, input, etc) in order for the key events
 * to be recorded.
 */
export declare function withObserveKeys(Component: React.ComponentClass, hotKeysIgnoreOptions: HotKeysOverrideProps): ObserveKeys;

export interface KeyMapDisplayOptions {
  sequences: Array<KeyMapOptions>;
  name?: string;
  group?: string;
  description?: string;
}

export type ApplicationKeyMap = { [key in ActionName]: KeyMapDisplayOptions };

/**
 * Generates and returns the application's key map, including not only those
 * that are live in the current focus, but all the key maps from all the
 * HotKeys and GlobalHotKeys components that are currently mounted
 */
export declare function getApplicationKeyMap(): ApplicationKeyMap;

/**
 * Description of key combination passed to the callback registered with
 * the recordKeyCombination function
 */
export interface KeyCombination {
  /**
   * Id of combination that could be used to define a keymap
   */
  id: MouseTrapKeySequence;
  /**
   * Dictionary of keys involved in the combination
   */
  keys: { [key in KeyName]: true };
}

/**
 * Function to call to cancel listening to the next key combination
 */
export declare type cancelKeyCombinationListener = () => void;

/**
 * Adds a listener function that will be called the next time a key combination completes
 * Returns a function to cancel listening.
 */
export declare function recordKeyCombination(callbackFunction: (keyCombination: KeyCombination) => void): cancelKeyCombinationListener;


export interface ConfigurationOptions {
  /**
   * The level of logging of its own behaviour React HotKeys should perform. Default
   * level is 'warn'.
   */
  logLevel?: string,

  /**
   * The default key event key maps are bound to, if left unspecified
   */
  defaultKeyEvent?: KeyEventName,

  /**
   * The default component type to wrap HotKey components' children in, to provide
   * the required focus and keyboard event listening for HotKeys to function
   */
  defaultComponent?: ReactComponent,

  /**
   * The default tabIndex value passed to the wrapping component used to contain
   * HotKey components' children. -1 skips focusing the element when tabbing through
   * the DOM, but allows focusing programmatically.
   */
  defaultTabIndex?: TabIndex,

  /**
   * The HTML tags that React HotKeys should ignore key events from. This only works
   * if you are using the default ignoreEventsCondition function.
   */
  ignoreTags?: Array<string>,

  /**
   * Whether to allow hard sequences, or the binding of handlers to actions that have
   * names that are valid key sequences, which implicitly define actions that are
   * triggered by that key sequence
   */
  enableHardSequences?: boolean,

  /**
   * Whether to ignore changes to keyMap and handlers props by default (this reduces
   * a significant amount of unnecessarily resetting internal state)
   */
  ignoreKeymapAndHandlerChangesByDefault?: boolean,

  /**
   * The function used to determine whether a key event should be ignored by React
   * Hotkeys. By default, keyboard events originating elements with a tag name in
   * ignoreTags, or a isContentEditable property of true, are ignored.
   */
  ignoreEventsCondition?: (keyEvent: KeyboardEvent) => boolean,

  /**
   * Whether to ignore repeated keyboard events when a key is being held down
   */
  ignoreRepeatedEventsWhenKeyHeldDown?: boolean,

  /**
   * Whether React HotKeys should simulate keypress events for the keys that do not
   * natively emit them.
   */
  simulateMissingKeyPressEvents?: boolean,

  /**
   * Whether to call stopPropagation() on events after they are handled (preventing
   * the event from bubbling up any further, both within React Hotkeys and any other
   * event listeners bound in React).
   *
   * This does not affect the behaviour of React Hotkeys, but rather what happens to
   * the event once React Hotkeys is done with it (whether it's allowed to propagate
   * any further through the Render tree).
   */
  stopEventPropagationAfterHandling?: boolean,

  /**
   * Whether to call stopPropagation() on events after they are ignored (preventing
   * the event from bubbling up any further, both within React Hotkeys and any other
   * event listeners bound in React).
   *
   * This does not affect the behaviour of React Hotkeys, but rather what happens to
   * the event once React Hotkeys is done with it (whether it's allowed to propagate
   * any further through the Render tree).
   */
  stopEventPropagationAfterIgnoring?: boolean,

  /**
   * Whether to allow combination submatches - e.g. if there is an action bound to
   * cmd, pressing shift+cmd will *not* trigger that action when
   * allowCombinationSubmatches is false.
   */
  allowCombinationSubmatches?: boolean,

  /**
   * A mapping of custom key codes to key names that you can then use in your
   * key sequences
   */
  customKeyCodes?: { [key: number]: string },
}

/**
 * Configure the behaviour of HotKeys
 */
export declare function configure(options: ConfigurationOptions): void;

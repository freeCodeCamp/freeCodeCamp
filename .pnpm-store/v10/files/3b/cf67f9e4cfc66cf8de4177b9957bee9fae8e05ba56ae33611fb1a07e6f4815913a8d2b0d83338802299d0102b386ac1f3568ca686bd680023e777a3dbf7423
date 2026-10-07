<p align="center">
  <img src="http://svgshare.com/i/3tk.svg"><br/>
  <h2 align="center">React HotKeys</h2>
</p>

[![npm](https://img.shields.io/npm/dm/react-hotkeys.svg)]()
[![Build Status](https://travis-ci.org/greena13/react-hotkeys.svg)](https://travis-ci.org/greena13/react-hotkeys)
[![GitHub license](https://img.shields.io/github/license/greena13/react-hotkeys.svg)](https://github.com/greena13/react-hotkeys/blob/master/LICENSE)
[![Maintainability](https://api.codeclimate.com/v1/badges/9eff94c396c9e8dd5d7b/maintainability)](https://codeclimate.com/github/greena13/react-hotkeys/maintainability)
[![Gitter](https://img.shields.io/gitter/room/chrisui/react-hotkeys.svg)](https://gitter.im/chrisui/react-hotkeys)

A declarative library for handling hotkeys and focus areas in React applications.

### Upgrading from 1.\*.\* ?

See the [upgrade notes](https://github.com/greena13/react-hotkeys/releases/tag/v2.0.0).

## Feature Overview

- Minimal declarative [JSX](#HotKeys-component-API) and [HoC](#withHotKeys-HoC-API) APIs
- [Browser key names](https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/key/Key_Values) and [Mousetrap syntax](https://github.com/ccampbell/mousetrap)
- Define [global](#GlobalHotKeys-component) and [in-focus](#HotKeys-component) hot keys
- [Display a list of available hot keys to the user](#Displaying-a-list-of-available-hot-keys)
- [Define custom key codes](#defining-custom-key-codes) for WebOS and other environments
- Allow users to [set their own keyboard shortcuts](#setting-dynamic-hotkeys-at-runtime)
- Works with React's Synthetic KeyboardEvents and event delegation and provides [predictable and expected behaviour](#Interaction-with-React) to anyone familiar with React
- Optimized by default, but allows you to turn off different optimisation measures in a granular fashion
- Customizable through a simple [configuration API](#Configuration)
- [Optimized for larger applications](#Optimizations), with many hot keys active at once
- Depends only on `prop-types` and a peer dependency of `react`
- Uses rollup and Uglify and strips out comments and logging for a small production build
- More than [2000 automated tests](https://github.com/greena13/react-hotkeys/tree/master/test)

## Basic Usage

#### Define a key map

```javascript
import { HotKeys } from "react-hotkeys";
import MyNode from "./MyNode";
import React from 'react';

const keyMap = {
  SNAP_LEFT: "command+left",
  DELETE_NODE: ["del", "backspace"]
};

const App = () => {
  return (
    <HotKeys keyMap={keyMap}>
      <div>
        <MyNode />
        <MyNode />
      </div>
    </HotKeys>
  );
};

export default App;
```

#### Define handlers

```javascript
import { HotKeys } from "react-hotkeys";
import React from 'react';

const MyNode = () => {
  const handlers = {
    DELETE_NODE: this.deleteNode
  };

  return <HotKeys handlers={handlers}>Node contents</HotKeys>;
};

export default MyNode;
```

## Contents

- [Licenses](#licenses)
- [Support](#support)
- [Install](#install)
    - [CommonJS & ES6 Modules](#commonjs--es6-modules)
        - [The latest pre-release](#the-latest-pre-release)
    - [UMD](#umd)
        - [Development build](#development-build)
        - [Minified production build](#minified-production-build)
    - [Bower](#bower)
- [Defining key maps](#defining-key-maps)
    - [Key Combinations vs Sequences](#key-combinations-vs-sequences)
    - [Full Reference](#full-reference)
    - [Alternative Hotkeys](#alternative-hotkeys)
    - [Specifying key events (keydown, keypress, keyup)](#specifying-key-events-keydown-keypress-keyup)
    - [Specifying key map display data](#specifying-key-map-display-data)
    - [Deciding which key map syntax to use](#deciding-which-key-map-syntax-to-use)
    - [Defining custom key codes](#defining-custom-key-codes)
    - [Setting dynamic hotkeys at runtime](#setting-dynamic-hotkeys-at-runtime)
- [Defining Handlers](#defining-handlers)
    - [DEPRECATED: Hard Sequence Handlers](#deprecated-hard-sequence-handlers)
- [Interaction with React](#interaction-with-react)
- [HotKeys components](#hotkeys-components)
- [HotKeys component API](#hotkeys-component-api)
- [withHotKeys HoC API](#withhotkeys-hoc-api)
    - [Simple use-case](#simple-use-case)
    - [Pre-defining default prop values](#pre-defining-default-prop-values)
- [GlobalHotKeys component](#globalhotkeys-component)
- [GlobalHotKeys component API](#globalhotkeys-component-api)
- [How actions are resolved](#how-actions-are-resolved)
    - [How nested key maps are matched](#how-nested-key-maps-are-matched)
    - [How combinations and sequences are matched](#how-combinations-and-sequences-are-matched)
- [How action handlers are resolved](#how-action-handlers-are-resolved)
- [Displaying a list of available hot keys](#displaying-a-list-of-available-hot-keys)
- [Allowing hotkeys and handlers props to change](#allowing-hotkeys-and-handlers-props-to-change)
- [Ignoring events](#ignoring-events)
    - [What it actually means to ignore an event](#what-it-actually-means-to-ignore-an-event)
    - [IgnoreKeys component](#ignorekeys-component)
    - [IgnoreKeys component API](#ignorekeys-component-api)
    - [withHotKeysIgnore HoC API](#withhotkeysignore-hoc-api)
    - [ObserveKeys component](#observekeys-component)
    - [ObserveKeys component API](#observekeys-component-api)
    - [withObserveKeys HoC API](#withobservekeys-hoc-api)
- [Configuration](#configuration)
- [Logging](#logging)
- [Optimizations](#optimizations)
    - [Code optimizations](#code-optimizations)
    - [Production optimizations](#production-optimizations)
- [Managing focus in the browser](#managing-focus-in-the-browser)
    - [Focusable elements](#focusable-elements)
    - [Tab Index](#tab-index)
    - [Autofocus](#autofocus)
    - [Programmatically manage focus](#programmatically-manage-focus)
    - [Get the element currently in focus](#get-the-element-currently-in-focus)
- [Preventing default browser behaviour](#preventing-default-browser-behaviour)
- [Troubleshooting & Gotchas](#troubleshooting--gotchas)
    - [Hotkeys is wrapping my components in a div that is breaking my styling](#hotkeys-is-wrapping-my-components-in-a-div-that-is-breaking-my-styling)
    - [Other keyboard event listeners are no longer being triggered](#other-keyboard-event-listeners-are-no-longer-being-triggered)
    - [Actions aren't being triggered when using withHotKeys](#actions-arent-being-triggered-when-using-withhotkeys)
    - [Actions aren't being triggered for HotKeys](#actions-arent-being-triggered-for-hotkeys)
    - [React Hotkeys thinks I'm holding down a key I've released](#react-hotkeys-thinks-im-holding-down-a-key-ive-released)
    - [Blue border appears around children of HotKeys](#blue-border-appears-around-children-of-hotkeys)
- [Stability & Maintenance](#stability--maintenance)
- [Contribute, please!](#contribute-please)
    - [Using GitHub Issues](#using-github-issues)
    - [Submitting a Pull Request](#submitting-a-pull-request)
    - [Commit messages](#commit-messages)
- [Build notes](#build-notes)
    - [Build scripts](#build-scripts)
    - [Development builds](#development-builds)
    - [Production builds](#production-builds)
    - [Build configuration](#build-configuration)
- [Authorship](#authorship)



## Licenses

`react-hotkeys` is released under the [ISC License](/LICENSE). 

However, please note: the source code found in the lib/vendor directory is under the MIT License - please see the license file for each directory for more information.

## Support

If you use React Hotkeys and it has saved you time or money, please consider contributing.  You will be supporting `react-hotkeys` by supporting its maintainer.

Please see my [Patreon Page](https://www.patreon.com/aleckgreenham) for details of why your support is needed, and how it will be used.
 
For recurring and publicly acknowledged support:

| Payment Option | Link/Address |
|:---|:----|
| Patreon | https://www.patreon.com/aleckgreenham |

For one-off or irregular contributions:

| Payment Option | Link/Address |
|:---|:----|
| Paypal | https://www.paypal.me/aleckgreenham |
| Bitcoin | 1ETTdVEahUqBaGXRQaiEgMhVjYQU1jQKKT |
| Ethereum | 0x6C9F9879f684e84314f5810f8F196bdB2c4e15c0 |
| Stellar | GBJ5T7V7YVRN4D2PBZTOCWREJXYWWGNDIQGRFDGQAZNTYYIW7BMWDRYA |

## Install

### CommonJS & ES6 Modules

`react-hotkeys` is available as a CommonJS or a ES6 Modules through npm or yarn. It uses `NODE_ENV` to determine whether to export the development or production build in your library or application.

It is expected you will use a bundling tool like Webpack or Uglify to remove the version of the bundle you are not using with each version of your application's code, to keep the library size to a minimum.

#### The latest pre-release

##### npm

```
npm install react-hotkeys@next --save
```

##### yarn

```
yarn add react-hotkeys@next
```

#### Latest stable release

##### npm

```
npm install react-hotkeys --save
```

##### yarn

```
yarn add react-hotkeys
```

### UMD

`react-hotkeys` as a UMD module is available on your CDN of choice.

Change `1.0.1` for the version that you would like to use.

#### Development build

```
<script crossorigin src="https://cdn.jsdelivr.net/npm/react-hotkeys@1.0.1/umd/react-hotkeys.js"></script>
```

```
<script crossorigin src="https://unpkg.com/react-hotkeys@1.0.1/umd/react-hotkeys.js"></script>
```

#### Minified production build

```
<script crossorigin src="https://cdn.jsdelivr.net/npm/react-hotkeys@1.0.1/umd/react-hotkeys.min.js"></script>
```

```
<script crossorigin src="https://unpkg.com/react-hotkeys@1.0.1/umd/react-hotkeys.min.js"></script>
```

### Bower

Bower support was removed in `v1.0.0`, but those who already rely on earlier versions of `react-hotkeys` through Bower can continue to do so using the following command:

```
bower install react-hotkeys@0.10.0
```

The Bower version of the package will **not** be supported going forward (including fixing any outstanding issues).

## Defining key maps

`react-hotkeys` uses key maps to decouple defining keyboard shortcuts from the functions they call. This allows hot keys and handler functions to be defined and maintained independent of one another.

> When a user presses the corresponding combination or sequence of keys, it is said they _match_ the hot keys, which causes an action to be _triggered_. `react-hotkeys` may then resolve an appropriate handler function to _handle_ the action.

Key maps are Plain Old JavaScript Objects, where the keys are the action names and the values are usually a [Mousetrap-supported](https://craig.is/killing/mice) or [Browser Key Values](https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/key/Key_Values) sequence string (but can also be an [array](#Alternative-Hotkeys) or an [object](#Key-Combination-vs-Sequences)) that must be matched in order to trigger the action.

```javascript
const keyMap = {
  deleteNode: "del",
  moveUp: "up"
};
```

#### Key Combinations vs Sequences

Every hotkey or sequence string is parsed and treated as a sequence of key combinations. The simplest case is a sequence of 1 key combination, consisting of 1 key: e.g. `'a'` or `'shift'`.

```
// Key sequence with a combination of a single key
'4'

// Special single key sequence (ie. shift is handled automagically)
'?'

// Sequence of a single combination with multiple keys (keys must be pressed at the same time)
'command+shift+k'

// Sequence of multiple combinations (keys must be pressed and released one after another)
'up down left right'
```

#### Full Reference

Please refer to [Mousetrap's documentation](https://craig.is/killing/mice) or [Browser Key Values](https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/key/Key_Values) for an exhaustive list of supported shortcuts and sequences.

#### Alternative Hotkeys

You can specify multiple _alternative_ key sequences (they will trigger the same action) using arrays:

```javascript
const keyMap = {
  DELETE_NODE: ["del", "backspace"],
  MOVE_UP: ["up", "w"]
};
```

#### Specifying key events (keydown, keypress, keyup)

By default, `react-hotkeys` will match hotkey sequences on the `keydown` event (or, more precisely: on the `keydown` event of the last key to complete the last combination in a sequence).

If you want to trigger a single action on a different key event, you can use the object syntax and the `action` attribute to explicitly set which key event you wish to bind to:

```javascript
const keyMap = {
  CONTRACT: "alt+down",
  COMMAND_DOWN: { sequence: "command", action: "keydown" }
};
```

If you want to change the default key event for all hotkeys, you can use the `defaultKeyEvent` option of the [configuration API](#Configuration).

The full list of valid key events is: `keypress`, `keydown`, and `keyup`.

#### Specifying key map display data

You can specify data used to display the application's key maps using the object syntax and the `name`, `description` and `group` attributes (each are optional):

```javascript
  {
    SHOW_DIALOG: { 
        name: 'Display keyboard shortcuts', 
        sequence: 'shift+?', 
        action: 'keyup' 
      }
  }
```

If you want to also provide alternative key sequences for the same action, use the `sequences` attribute:

```javascript
  {
    SHOW_DIALOG: { 
        name: 'Display keyboard shortcuts', 
        sequences: ['shift+?', { sequence: '`', action: 'keyup' }], 
        action: 'keyup' 
      }
  }
```


#### Deciding which key map syntax to use

As a general rule, you should use the syntax that is the most brief, but still allows you to express the configuration you want.

| Syntax Type                  | Use when you ...                                                                                                    |
| :--------------------------- | :------------------------------------------------------------------------------------------------------------------ |
| String                       | Have a single key sequence and don't have any special requirements (Default case)                                   | 
| Array of strings             | Need alternative key maps that trigger the same action, and are happy with them triggering on the default key event |
| Array of objects             | Need alternative key maps that trigger the same action, and want to them to trigger on a different key event        | 
| Object                       | Have a single key sequence and want to specify a different key event or display data                                | 
| Object (sequences attribute) | Have multiple key sequences that trigger the same action, and want to specify a different key event or display data | 

#### Defining custom key codes

When you are working in a WebOS environment, or a similar, you may have need to define custom key codes. You can do so using the `customKeyCodes` [Configuration option](#configuration):

```javascript

import {configure} from 'react-hotkeys';

configure({
  customKeyCodes: {
    10009: 'BackTV'    
  }
})
```

Once defined, you are then able to use the key names in you action sequences:

```javascript
const keyMap = {
  MY_ACTION: 'BackTV',
};
```

#### Setting dynamic hotkeys at runtime

`react-hotkeys` has basic support for setting dynamic hotkeys - i.e. letting the user set their own keyboard shortcuts at runtime. Once you have set up the necessary UI for [viewing the current keyboard shortcuts](#displaying-a-list-of-available-hot-keys) (and opting to change them), you can then use the `recordKeyCombination` function to capture the keys the user wishes to use.

`recordKeyCombination` accepts a callback function that will be called on the last `keyup` of the next key combination - immediately after the user has pressed the key combination they wish to assign. The callback then unbinds itself, so you do not have to worry about tidying up after it.

`recordKeyCombination` returns a function you can call at any time after binding the listener, to cancel listening without waiting for the key combination to complete. 

The callback function receives a single argument with the following schema:

```javascript
{
  /**
   * Combination ID that can be passed to the keyMap prop to (re)define an
   * action's key sequence 
   */
  id: '',
  /**
   * Dictionary of keys involved in the combination
   */
  keys: { keyName: true }
}

// Example:

{
  id: 'a', 
  keys: { a: true }
}
```

If you are updating hotkeys without changing focus or remounting the component that defines them, you will need to make sure you use the [`allowChanges` prop](#hotkeys-component-api) to ensure the new keymaps are honoured immediately.
 
An example, rendering two dialogs: 

* One for displaying the application's key maps using the [getApplicationKeyMap](#displaying-a-list-of-available-hot-keys) function
* Another for telling the user when to press the keys they want to bind to an action, meanwhile listening with `recordKeyCombination()` 

```javascript
import { recordKeyCombination } from 'react-hotkeys';
import React from 'react';

renderDialog(){
  if (this.state.showShortcutsDialog) {
    const keyMap = getApplicationKeyMap();

    return (
      <div style={styles.DIALOG}>
        <h2>
          Keyboard shortcuts
        </h2>

        <table>
          <tbody>
          { 
            Object.keys(keyMap).reduce((memo, actionName) => {
              const { sequences, name } = keyMap[actionName];
              
              memo.push(
                <tr key={name || actionName}>
                  <td style={styles.KEYMAP_TABLE_CELL}>
                    { name }
                  </td>
                  <td style={styles.KEYMAP_TABLE_CELL}>
                    { sequences.map(({sequence}) => <span key={sequence}>{sequence}</span>) }
                  </td>
                  <td style={styles.KEYMAP_TABLE_CELL}>
                    <button onClick={ () => this.showChangeShortcutDialog(actionName) }>
                      Change
                    </button>
                  </td>
                </tr>
              );
              
              return memo;
            })
          }
          </tbody>
        </table>
      </div>
    );
  } else if (this.state.changingActionShortcut) {
    const { cancel } = this.state.changingActionShortcut;
    
    const keyMap = getApplicationKeyMap();
    const { name } = keyMap[this.state.changingActionShortcut];
    
    return (
      <div style={styles.DIALOG}>
        Press the keys you would like to bind to #{name}.
        
        <button onClick={cancel}>
          Cancel
        </button>
      </div>       
    );
  }
}

showChangeShortcutDialog(actionName) {
  const cancelListening = recordKeyCombination(({id}) => {
      this.setState({
        showShortcutsDialog: true,
        changingActionShortcut: null,
        keyMap: {
          ...this.state.keyMap,
          [actionName]: id      
        }
      }); 
  });
  
  this.setState({
    showShortcutsDialog: false,
    changingActionShortcut: {
      cancel: () => {
        cancelListening();
        
        this.setState({
          showShortcutsDialog: true,
          changingActionShortcut: null
        }); 
      }
    }
  });    
}
```

## Defining Handlers

Key maps trigger actions when they match a key sequence. Handlers are the functions that `react-hotkeys` calls to handle those actions.

Handlers may be defined in the same `<HotKeys />` component as the key map:

```javascript
import { HotKeys } from "react-hotkeys";
import React from 'react';

const keyMap = {
  MOVE_UP: "up"
};

const handlers = {
  MOVE_UP: event => console.log("Move up hotkey called!")
};

<HotKeys keyMap={keyMap} handlers={handlers}>
  <input />
</HotKeys>;
```

Or they may be defined in any _descendant_ of the `<HotKeys />` component that defines the key map:

```javascript
import { HotKeys } from "react-hotkeys";
import React from 'react';

const keyMap = {
  MOVE_UP: "up"
};

const handlers = {
  MOVE_UP: event => console.log("Move up hotkey called!")
};

<HotKeys keyMap={keyMap}>
  <div>
    <HotKeys handlers={handlers}>
      <input />
    </HotKeys>
  </div>

  <div>
    <input />
  </div>
</HotKeys>;
```

#### DEPRECATED: Hard Sequence Handlers

Handlers associated to actions with names that are valid key sequence strings implicitly define actions that are matched by the corresponding key sequence. This means you do not have to define the key maps in order for these handlers to "just work".

This functionality is not advised and exists mainly for backwards compatibility. It is generally advisable to explicitly define an action in a key map rather than rely on this behaviour.

To use hard sequence handlers, you must first enable them using the `enableHardSequences` [configuration option](#Configuration).

```javascript
/**
 * If no named 'up' action has been defined in a key map and it is a valid
 * key sequence, react-hotkeys assumes it's a hard sequence handler and
 * implicitly defines an action for it
 */

const handlers = {
  up: event => console.log("up key called")
};
```

## Interaction with React

Rather than re-invent the wheel, `react-hotkeys` piggy-backs of the React SyntheticEvent and event propagation, so all of the normal React behaviour that you expect still applies.

- Key events propagate up from a source or target towards the root of the application.
- If an event has `stopPropagation()` called on it, it will not be seen by components higher up in the render tree.

## HotKeys components

`<HotKeys>` components listen only to key events that happen when one of their DOM-mounted descendents are in focus (`<div/>`, `<span/>`, `<input/>`, etc). This emulates (and re-uses) the behaviour of the browser and React's SyntheticEvent propagation.

This is the default type of `<HotKeys />` component, and should normally be your first choice for efficiency and clarity (the user generally expects keyboard input to affect the focused element in the browser).

## HotKeys component API

The HotKeys component provides a declarative and native JSX syntax that is best for succinctly declaring hotkeys in a way that best maintains separation and encapsulation with regards to the rest of your code base.

However, it [does require that its children be wrapped in a DOM-mounted node](#hotkeys-is-wrapping-my-components-in-a-div-that-is-breaking-my-styling), which can break styling and add extra levels to your render tree.

```javascript

<HotKeys
  /**
   * An object that defines actions as keys and key sequences as values
   * (using either a string, array or object).
   *
   * Actions defined in one HotKeys component are available to be handled
   * in an descendent HotKeys component.
   *
   * Optional.
   */
  keyMap={ {} }

  /**
   * An object that defines handler functions as values, and the actions
   * that they handle as keys.
   *
   * Optional.
   */
  handlers={ {} }

  /**
   * The type of DOM-mountable component that should be used to wrap
   * the component's children.
   */
  component={ 'div' }

  /**
   * tabindex value to pass to DOM-mountable component wrapping children
   */
  tabIndex={-1}

  /**
   * Whether the keyMap or handlers are permitted to change after the
   * component mounts. If false, changes to the keyMap and handlers
   * props will be ignored
   *
   * Optional.
   */
  allowChanges={false}

  /**
   * A ref to add to the underlying DOM-mountable node. Pass a function
   * to get a reference to the node, so you can call .focus() on it
   */
  innerRef: {undefined}
  
  /**
   * Whether this is the root HotKeys node - this enables some special 
   * behaviour
   */
  root={false}
  >

  /**
   * Wraps all children in a DOM-mountable component
   */
   { children }

</HotKeys>
```

## withHotKeys HoC API

The HotKeys component API is generally recommended, but if wrapping your component in a DOM-mountable node is not acceptable, or you need more control over how the `react-hotkeys` props are applied, then the `withHotKeys()` HoC is available.

### Simple use-case

The simplest use-case of `withHotKeys()` is to simply pass it your component class as the first argument. What is returned is a new component that will accept all of the same props as a `<HotKey>` component, so you can specify key maps and handlers at render time, for example.

> The component you wrap **must** take responsibility for passing the `hotKeys` props to a DOM-mountable element. If you fail to do this, key events will not be detected when a descendant of the component is in focus.

```javascript
import { withHotKeys } from "react-hotkeys";

class MyComponent extends Component {
  render() {
    /**
     * Must unwrap hotKeys prop and pass its values to a DOM-mountable
     * element (like the div below).
     */
    const { hotKeys, ...remainingProps } = this.props;

    return (
      <div {...{ ...hotKeys, ...remainingProps }}>
        <span>My HotKeys are effective here</span>

        {this.props.children}
      </div>
    );
  }
}

const MyHotKeysComponent = withHotKeys(MyComponent);

const keyMap = {
  TEST: "t"
};

const handlers = {
  TEST: () => console.log("Test")
};

<MyHotKeysComponent keyMap={keyMap} handlers={handlers}>
  <div>You can press 't' to log to the console.</div>
</MyHotKeysComponent>;
```

### Pre-defining default prop values

You can use the second argument of `withHotKeys` to specify default values for any props you would normally pass to `<HotKeys />`. This means you do not have to specify them at render-time.

> If you do provide prop values when you render the component, these will be merged with (and override) those defined in the second argument of `withHotKeys`.

```javascript
import { withHotKeys } from "react-hotkeys";
import React from 'react';

class MyComponent extends Component {
  render() {
    /**
     * Must unwrap hotKeys prop and pass its values to a DOM-mountable
     * element (like the div below).
     */
    const { hotKeys, ...remainingProps } = this.props;

    return (
      <div {...{ ...hotKeys, ...remainingProps }}>
        <span>My HotKeys are effective here</span>

        {this.props.children}
      </div>
    );
  }
}

const keyMap = {
  TEST: "t"
};

const handlers = {
  TEST: () => console.log("Test")
};

const MyHotKeysComponent = withHotKeys(MyComponent, { keyMap, handlers });

/**
 * Render without having to specify prop values
 */
<MyHotKeysComponent>
  <div>You can press 't' to log to the console.</div>
</MyHotKeysComponent>;
```

## GlobalHotKeys component

`<GlobalHotKeys>` components match key events that occur anywhere in the document (even when no part of your React application is in focus).

```javascript
const keyMap = { SHOW_ALL_HOTKEYS: "shift+?" };
const handlers = { SHOW_ALL_HOTKEYS: this.showHotKeysDialog };

<GlobalHotKeys keyMap={keyMap} handlers={handlers} />;
```

`<GlobalHotKeys>` generally have no need for children, so should use a self-closing tag (as shown above). The only exception is when you are nesting other `<GlobalHotKeys>` components somewhere in the descendents (these are mounted before their parents, and so are generally matched first).

## GlobalHotKeys component API

The GlobalHotKeys component provides a declarative and native JSX syntax for defining hotkeys that are applicable beyond you React application.

```javascript
<GlobalHotKeys
  /**
   * An object that defines actions as keys and key sequences as values
   * (using either a string, array or object).
   *
   * Actions defined in one HotKeys component are available to be handled
   * in an descendent HotKeys component.
   *
   * Optional.
   */
  keyMap={{}}
  /**
   * An object that defines handler functions as values, and the actions
   * that they handle as keys.
   *
   * Optional.
   */
  handlers={{}}
  /**
   * Whether the keyMap or handlers are permitted to change after the
   * component mounts. If false, changes to the keyMap and handlers
   * props will be ignored
   *
   * Optional.
   */
  allowChanges={false}
>
  /** * Wraps all children in a DOM-mountable component */
  {children}
</GlobalHotKeys>
```

## How actions are resolved

### How nested key maps are matched

For keymaps defined with `<HotKeys/>` components, how close your `<HotKeys/>` component is to the element currently focused in the DOM has the greatest affect on how actions are resolved. Whenever a key event occurs (`keydown`, `keypress` or `keyup`), `react-hotkeys` starts at the `<HotKeys/>` component closest to the event's target (the focused element in the browser) and searches up through the hierarchy of focused `<HotKeys/>` components, examining each `keyMap` for actions for which the current key completes the specified combination or sequence. 

Regardless of where `<GlobalHotKeys>` components appear in the render tree, they are matched with key events after the event has finished propagating through the React app (if the event originated in the React at all). This means if your React app is in focus and it handles a key event, it will be ignored by the `<GlobalHotKeys>` components.

The order used for resolving actions and handlers amongst `<GlobalHotKeys>` components, is the order in which they mounted (those mounted first, are given the chance to handle an action first). When a `<GlobalHotKeys>` component is unmounted, it is removed from consideration. This can get less deterministic over the course of a long session using a React app as components mount and unmount, so it is best to define actions and handlers that are globally unique.

It is recommended to use `<HotKeys>` components whenever possible for better performance and reliability.

> You can use the [autofocus attributes](#Autofocus) or [programmatically manage focus](#Programmatically-manage-focus) to automatically focus your React app so the user doesn't have to select it in order for hot keys to take effect. It is common practice to place a `<HotKeys>` component towards the top of your application to match hot keys across your entire React application.

### How combinations and sequences are matched

For key combinations, the action only matches if the key is the last one needed to complete the combination. For sequences, the action matches for the last key to complete the last combination in the sequence. 

By default, sub-matches are disabled so if you have two actions bound to `cmd+a` and `a`, and you press the `cmd` key and then the `a` key (without releasing the `cmd` key), then the `cmd+a` combination is matched. This allows you to define longer, application-wide key combinations at the top of your app, without them being hidden by shorter context-dependent combinations in different parts of your app. However, it does depend on the order the keys are pressed: in the above example, if `a` was pressed first and then `cmd`, the `a` action would be matched. The trade-off for this behaviour is that combinations are not permitted to overlap: if you have two actions bound to `a` and `b` and the user presses `a` and then `b` without first releasing `a`, only the action associated with `a` will be called (because there are no actions associated with `a+b`). If you want allow sub-matches, you can use the [`allowCombinationSubmatches` configuration option](#configuration).

The match occurs on the key event you have specified when defining your keymap (the default is `keydown` if you have not overridden the [`defaultKeyEvent` configuration option](#configuration)).   

Once a matching action is found, `react-hotkeys` then searches for the corresponding action handler.

## How action handlers are resolved

> If one of the DOM-mounted descendents of an `<HotKeys>` component are in focus (and it is listening to key events) AND those key events match a hot key in the component's key map, then the corresponding action is triggered.

`react-hotkeys` starts at the `<HotKeys/>` component closest to the event's target (the element that was in focus when the key was pressed) and works its way up through the component tree of focused `<HotKeys/>` components, looking for a matching handler for the action. The handler closest to the event target AND a descendant of the `<HotKeys/>` component that defines the action (or the component itself), is the one that is called.

That is:

- Unless one of the DOM-mounted descendents of a `<HotKeys>` component is in focus, the component's actions are not matched
- Unless a `<HotKeys>` component is nested within the `<HotKeys/>` component that defines the action (or is the same `<HotKeys />` component), its handler is not called
- If a `<HotKeys />` component closer to the event target has defined a handler for the same action, a `<HotKeys />` component's handler won't be called (the closer component's handler will)

A more exhaustive enumeration of `react-hotkeys` behaviour can be found by reviewing the [test suite](https://github.com/greena13/react-hotkeys/tree/master/test).

## Displaying a list of available hot keys

`react-hotkeys` provides the `getApplicationKeyMap()` function for getting a mapping of all actions and key sequences that have been defined by components that are currently mounted.

They are returned as an object, with the action names as keys, and the values are objects describing the key map.

Regardless of which syntax you used to define the keymap, they always appear in the following format:

```
{
  ACTION_NAME: {
    /**
     * Optional attributes - only present if you defined them
     */
     
    name: 'name',
    group: 'group',
    description: 'description',
    
    /**
     * Attributes always present
     * /
    sequences: [
      {
        action: 'keydown',
        sequence: 'alt+s'
      },
      // ...
    ]
  },
  // ... 
}
```

Below is how the example application renders a dialog of all available hot keys:

```javascript
import { getApplicationKeyMap } from 'react-hotkeys';
import React from 'react';

// ...

renderDialog(){
  if (this.state.showDialog) {
    const keyMap = getApplicationKeyMap();

    return (
      <div style={styles.DIALOG}>
        <h2>
          Keyboard shortcuts
        </h2>

        <table>
          <tbody>
          { Object.keys(keyMap).reduce((memo, actionName) => {
              const { sequences, name } = keyMap[actionName];
              
              memo.push(
                <tr key={name || actionName}>
                  <td style={styles.KEYMAP_TABLE_CELL}>
                    { name }
                  </td>
                  <td style={styles.KEYMAP_TABLE_CELL}>
                    { sequences.map(({sequence}) => <span key={sequence}>{sequence}</span>) }
                  </td>
                </tr>
              );
              
              return memo;
            })
           }
          </tbody>
        </table>
      </div>
    );
  }
}
```

## Allowing hotkeys and handlers props to change

For performance reasons, by default `react-hotkeys` takes the `keyMap` and `handlers` prop values when `<HotKeys>` components are focused and when `<GlobalHotKeys>` components are mounted. It ignores all subsequent updates
to their values when these props change.

If you need the ability to change them while `<HotKeys>` are still in focus, or while `<GlobalHotKeys>` are still mounted, then you can pass the `allowChanges` prop, permitting this behaviour for the particular component.

If you need to do this for all your `<HotKeys>` and `<GlobalHotKeys>` components, you can use the `ignoreKeymapAndHandlerChangesByDefault` option for the [Configuration API](#Configuration). This should normally never be done, as it can have significant performance implications.

## Ignoring events

By default, all key events that originate from `<input>`, `<select>` or `<textarea>`, or have a `isContentEditable` attribute of `true` are ignored by `react-hotkeys`.

If this is not what you want for your application, you can modify the list of tags using the `ignoreTags` [configuration option](#Configuration) or if you need additional control, you can specify a brand new function using the `ignoreEventsCondition` [configuration option](#Configuration).

If you want an exception to the global ignore policy for a particular part of your app, then you can use the ObserveKeys component.

### What it actually means to ignore an event

When a keyboard event occurs, two things happen:

* It's added to the record of the keys currently pressed (the current combination) and those were recently pressed (the current key sequence)
* It's compared against the list of hotkeys you have defined

When you ignore an event, if it's a keydown event (a new key is being pressed), it is not added to the key history and no attempt is made to match it against your hotkeys. If it's a keypress or a keyup event and the key already exists in the history, the event is recorded (the key is being released) but no attempt is made to find a corresponding hotkey.

This effectively means, no new ignored keys are recorded and any keys that are already pressed are recorded as being released so they don't bleed into subsequent key combinations.

### IgnoreKeys component

> You only need this component if you want to add extra key events to ignore, that are not already matched by `ignoreEventsCondition()`.

If you want `react-hotkeys` to ignore key events coming from a particular area of your app when it is in focus, you can use the `<IgnoreKeys/>` component:

```javascript
import { IgnoreKeys } from "react-hotkeys";
import React from 'react';

<IgnoreKeys>
  /** * Children that, when in focus, should have its key events ignored by *
  react hotkeys */
</IgnoreKeys>;
```

### IgnoreKeys component API

By default, `<IgnoreKeys />` will ignore all key events, but you can customize this behaviour by providing a whitelist or blacklist of events to ignore:

```javascript
<IgnoreKeys
    /**
     * The whitelist of keys that keyevents should be ignored. i.e. if you place
     * a key in this list, all events related to it will be ignored by react
     * hotkeys.
     *
     * Accepts a string or an array of strings.
     */
      only: { [] }

     /**
      * The blacklist of keys that keyevents should be not ignored. i.e.
      * if you place a key in this list, all events related to it will be
      * still be observed by react hotkeys
      */
     except: { [] }
    >

    /**
     * Children that, when in focus, should have its key events ignored by
     * react hotkeys
     */

     { children }

</IgnoreKeys>
```

### withHotKeysIgnore HoC API

Similar to the `<HotKeys>`'s `withHotKeys()` function, there is a `withIgnoreKeys()` function for achieving the `<IgnoreKeys>` functionality, without the need for rendering a surrounding DOM-mountable element.

```javascript
import { withHotKeysIgnore } from "react-hotkeys";
import React from 'react';

class MyComponent extends Component {
  render() {
    /**
     * Must unwrap hotKeys prop and pass its values to a DOM-mountable
     * element (like the div below).
     */
    const { hotKeys, ...remainingProps } = this.props;

    return (
      <div {...{ ...hotKeys, ...remainingProps }}>
        <span>HotKeys ignores key events from here</span>

        {this.props.children}
      </div>
    );
  }
}

const MyHotKeysComponent = withHotKeysIgnore(MyComponent);

<MyHotKeysComponent except={"Escape"}>
  <div>All key events except the 'Escape' key are ignored here</div>
</MyHotKeysComponent>;
```

`withIgnoreKeys()` also accepts a second argument that becomes the default props of the component it returns:

```javascript
import { withHotKeysIgnore } from "react-hotkeys";
import React from 'react';

class MyComponent extends Component {
  render() {
    /**
     * Must unwrap hotKeys prop and pass its values to a DOM-mountable
     * element (like the div below).
     */
    const { hotKeys, ...remainingProps } = this.props;

    return (
      <div {...{ ...hotKeys, ...remainingProps }}>
        <span>HotKeys ignores key events from here</span>

        {this.props.children}
      </div>
    );
  }
}

const MyHotKeysComponent = withHotKeysIgnore(MyComponent, { except: "Escape" });

<MyHotKeysComponent>
  <div>All key events except the 'Escape' key are ignored here</div>
</MyHotKeysComponent>;
```

### ObserveKeys component

> You only need this component if you want to add *exceptions* to the key events that are matched by `ignoreEventsCondition()` (i.e. you want to observe key events, even though they are globally ignored by default).

If you want `react-hotkeys` to always observe key events coming from a particular area of your app when it is in focus (despite the global `ignoreEventsCondition`), you can use the `<ObserveKeys/>` component:

```javascript
import {ObserveKeys} from 'react-hotkeys';
import React from 'react';

<ObserveKeys>
    /**
     * Children that, when in focus, should have its key events always
     * observed by react hotkeys
     */
</ObserveKeys>
```

### ObserveKeys component API

By default, `<ObserveKeys />` will force all key events to be observed, but you can customize this behaviour by providing a whitelist or blacklist of events to ignore:

```javascript
<ObserveKeys
    /**
     * The whitelist of keys that keyevents should be forced to be observed.
     * i.e. if you place a key in this list, all events related to it will be
     * observed by react hotkeys - even if it's ignored by the
     * ignoreEventsCondition.
     *
     * Accepts a string or an array of strings.
     */
      only: { [] }

     /**
      * The blacklist of keys that keyevents should be forced to be observed.
      * i.e. if you place a key in this list, all events related to it will be
      * still be ignored by react hotkeys if they match ignoreEventsCondition
      */
     except: { [] }
    >

    /**
     * Children that, when in focus, should have its key events observed by
     * react hotkeys - even if they match ignoreEventsCondition
     */

     { children }

</ObserveKeys>
```

### withObserveKeys HoC API

Similar to the `<HotKeys>`'s `withHotKeys()` function, there is a `withObserveKeys()` function for achieving the `<ObserveKeys>` functionality, without the need for rendering a surrounding DOM-mountable element.

```javascript
import {withObserveKeys} from 'react-hotkeys';
import React from 'react';

class MyComponent extends Component {
  render() {
    /**
     * Must unwrap hotKeys prop and pass its values to a DOM-mountable
     * element (like the div below).
     */
    const {hotKeys, ...remainingProps} = this.props;

    return (
      <div { ... { ...hotKeys, ...remainingProps } } >
        <span>HotKeys always observes key events from here</span>

       { this.props.children }
      </div>
    )
  }
}

const MyHotKeysComponent = withObserveKeys(MyComponent);

<MyHotKeysComponent except={ 'Escape' }>
  <div>
    All key events except the 'Escape' key are observed here
  </div>
</MyHotKeysComponent>
```

`withObserveKeys()` also accepts a second argument that becomes the default props of the component it returns:

```javascript
import {withObserveKeys} from 'react-hotkeys';
import React from 'react';

class MyComponent extends Component {
  render() {
    /**
     * Must unwrap hotKeys prop and pass its values to a DOM-mountable
     * element (like the div below).
     */
    const {hotKeys, ...remainingProps} = this.props;

    return (
      <div { ... { ...hotKeys, ...remainingProps } } >
        <span>HotKeys observes key events from here</span>

       { this.props.children }
      </div>
    )
  }
}

const MyHotKeysComponent = withObserveKeys(MyComponent, { except: 'Escape' });

<MyHotKeysComponent>
  <div>
    All key events that match the ignoreEventsCondition are still observed here, except the 'Escape' key
  </div>
</MyHotKeysComponent>
```

## Configuration

The default behaviour across all `<HotKeys>` components is configured using the `configure` method.

> configure() should be called as your app is initialising and before the first time you mount a `<HotKeys>` component anywhere your app.

The following options are available (**default values are shown**):

```javascript
import {configure} from 'react-hotkeys';

configure({
  /**
   * The level of logging of its own behaviour React HotKeys should perform.
   */
  logLevel: 'warn',

  /**
   * Default key event key maps are bound to (keydown|keypress|keyup)
   */
  defaultKeyEvent: 'keydown',

  /**
   * The default component type to wrap HotKey components' children in, to provide
   * the required focus and keyboard event listening for HotKeys to function
   */
  defaultComponent: 'div',

  /**
   * The default tabIndex value passed to the wrapping component used to contain
   * HotKey components' children. -1 skips focusing the element when tabbing through
   * the DOM, but allows focusing programmatically.
   */
  defaultTabIndex: '-1',

  /**
   * The HTML tags that React HotKeys should ignore key events from. This only works
   * if you are using the default ignoreEventsCondition function.
   * @type {String[]}
   */
  ignoreTags: ['input', 'select', 'textarea'],

  /**
   * The function used to determine whether a key event should be ignored by React
   * Hotkeys. By default, keyboard events originating elements with a tag name in
   * ignoreTags, or a isContentEditable property of true, are ignored.
   *
   * @type {Function<KeyboardEvent>}
   */
  ignoreEventsCondition: function,

  /**
   * Whether to allow hard sequences, or the binding of handlers to actions
   * that have names that are valid key sequences, which implicitly define
   * actions that are triggered by that key sequence
   */
  enableHardSequences: false,

  /**
   * Whether to ignore changes to keyMap and handlers props by default
   * (this reduces a significant amount of unnecessarily resetting
   * internal state)
   * @type {boolean}
   */
  ignoreKeymapAndHandlerChangesByDefault: true,

  /**
   * Whether to ignore repeated keyboard events when a key is being held down
   * @type {boolean}
   */
  ignoreRepeatedEventsWhenKeyHeldDown: true,
  
  /**
   * Whether React HotKeys should simulate keypress events for the keys that do not
   * natively emit them.
   * @type {boolean}
   */
  simulateMissingKeyPressEvents: true,

  /**
   * Whether to call stopPropagation() on events after they are
   * handled (preventing the event from bubbling up any further, both within
   * React Hotkeys and any other event listeners bound in React).
   *
   * This does not affect the behaviour of React Hotkeys, but rather what
   * happens to the event once React Hotkeys is done with it (whether it's
   * allowed to propagate any further through the Render tree).
   */
   stopEventPropagationAfterHandling: true,

  /**
   * Whether to call stopPropagation() on events after they are
   * ignored (preventing the event from bubbling up any further, both within
   * React Hotkeys and any other event listeners bound in React).
   *
   * This does not affect the behaviour of React Hotkeys, but rather what
   * happens to the event once React Hotkeys is done with it (whether it's
   * allowed to propagate any further through the Render tree).
   */
   stopEventPropagationAfterIgnoring: true,
   
   /**
   * Whether to allow combination submatches - e.g. if there is an action 
   * bound to cmd, pressing shift+cmd will *not* trigger that action when
   * allowCombinationSubmatches is false.
   */
  allowCombinationSubmatches: false,
  
  /**
   * A mapping of custom key codes to key names that you can then use in your
   * key sequences
   */
  customKeyCodes: {},
});
```

## Logging

`react-hotkeys` provides comprehensive logging of all of its internal behaviour and allows setting one of 6 log levels.

The default level is `warn`, which provides warnings and errors only, and is generally sufficient for most usage. However, if you are troubleshooting an issue or reporting a bug, you should increase the log level to `debug` or `verbose` to see what is going on, and be able to communicate it concisely.

You can set the logging level using the `logLevel` [configuration option](#Configuration).

For performance reasons, only some of the log levels are available in the production build. You will need to use the development build to get the full log output.

| Log Level | Severity  | Description                             | Available in Dev | Available in Prod |
| :-------- | :-------- | :-------------------------------------- | :--------------- | :---------------- |
| verbose   | (highest) | `debug` + internal data representations | Yes              | No                |
| debug     |           | `info` + event propagation info         | Yes              | No                |
| info      |           | `warn` + general info                   | Yes              | No                |
| warn      | (default) | `error` + warnings                      | Yes              | Yes               |
| error     |           | Errors only (ignore warnings)           | Yes              | Yes               |
| none      | (lowest)  | Log nothing                             | Yes              | Yes               |

Logs appear in the developer console of the browser.

Each line is prefixed with (where applicable):

- The focus tree id
- The component id
- The event id

Each id is also given a coloured emoticon, to make it easy to visually trace the propagation of particular events through multiple components.

## Optimizations

`react-hotkeys` uses a lot of optimizations to help keep it as performant as possible (both in terms of time and memory). It can be helpful to be aware of some of these measures if you are seeing unexpected behaviour:

### Code optimizations

- If an event is handled by an earlier handler, it is ignored by an further components (this is really a design decision, rather than an optimization, but it helps).
- By default, `stopPropagation()` is called on all key events once `react-hotkeys` has handled them. This can be disabled via the `stopEventPropagationAfterHandling` and `stopEventPropagationAfterIgnoring` [configuration options](#Configuration).
- Events are ignored unless an action exists that is bound to that particular event type (keydown, keypress, keyup)
- Events are processed at each level, as they propagate up the React render tree. If a action is triggered by a leaf node, `react-hotkeys` stops there (and does not build the full application's mappings of key sequences and handlers)
- Changes to keyMaps and handlers are ignored unless you explicitly opt-in to the behaviour of resetting them each time their prop value changes.
- Key histories longer than the longest registered key sequence are discarded.
- The mapping between an action's key sequences and handlers is built "on-the-fly", so unless a particular action is triggered, `react-hotkeys` doesn't do the work of finding its corresponding handler.
- Global event listeners are only bound to `document` when a global hotkey is defined (and are removed when the last one is unmounted).

### Production optimizations

- The production build strips out all comments and logging statements below a level of warning, before undergoing minification using Uglify.
- An es6 version is also available, that allows for tree-shaking in compatible build setups.

## Managing focus in the browser

### Focusable elements

HTML5 allows any element with a `tabindex` attribute to receive focus.

If you wish to support HTML4 you are limited to the following focusable elements:

- `<a>`
- `<area>`
- `<button>`
- `<input>`
- `<object>`
- `<select>`
- `<textarea>`

### Tab Index

If no elements have a `tabindex` in a HTML document, the browser will tab between [focusable elements](#Focusable-elements) in the order that they appear in the DOM.

If there are elements with `tabindex` values greater than zero, they are iterated over first, according their `tabindex` value (from smallest to largest). Then the browser tabs over the focusable elements with a `0` or unspecified `tabindex` in the order that they appear in the DOM.

If any element is given a negative `tabindex`, it will be skipped when a user tabs through the document. However, a user may still click or touch on that element and it can be focused programmatically (see below).

> By default, `<HotKeys>` render its children inside an element with a `tabindex` of `-1`. You can change this by passing a `tabIndex` prop to `<HotKeys>` or you can change the default `tabindex` value for all <HotKeys>`components using the`defaultTabIndex` option for the [Configuration API](#Configuration).

### Autofocus

HTML5 supports a boolean `autofocus` attribute on the following input elements:

- `<button>`
- `<input>`
- `<select>`
- `<textarea>`

It can be used to automatically focus parts of your React application, without the need to [programmatically manage focus](#Programmatically-manage-focus).

Only one element in the document should have this attribute at any one time (the last element to mount with the attribute will take effect).

### Programmatically manage focus

To programmatically focus a DOM element, it must meet two requirements:

- It must be a [focusable elements](#Focusable-element)
- You must have a reference to it

You can get a reference to an element using React's `ref` property:

```javascript
class MyComponent extends Component {
  componentDidUpdate(prevProps) {
    if (!prevProps.isFocused && this.props.isFocused) {
      this._container.focus();
    }
  }

  render() {
    return <div ref={c => (this._container = c)}>My focusable content</div>;
  }
}
```

To get a reference to the DOM-mountable node used as a wrapper by `<HotKeys />`, use the `innerRef` prop:

```javascript
class MyComponent extends Component {
    componentDidMount() {
        this._container.focus();
    }

    render() {
        return (
            <HotKeys innerRef={ (c) => this._container = c } >
                My focusable content
            </div>
        )
    }

}
```

### Get the element currently in focus

You can retrieve the element that is currently focused using the following:

```javascript
document.activeElement;
```

## Preventing default browser behaviour

If you find that you want to bind to a key sequence that is already used by the browser, you can prevent the default behaviour by calling the `preventDefault` method on the event object:

```javascript
event.preventDefault();
```

It's generally not advised to do this, as it likely violates the [Principle of Least Surprise](https://en.wikipedia.org/wiki/Principle_of_least_astonishment).

## Troubleshooting & Gotchas

#### Hotkeys is wrapping my components in a div that is breaking my styling

You have 3 options:

1. Use the [`component` prop](#HotKeys-component-API) to specify a `span` or some other alternative DOM-mountable component to wrap your component in, each time you render a component you don't want to wrap in a div element.
1. Use the [`defaultComponent` configuration option](#Configuration) to specify a `span` or some other alternative DOM-mountable component to wrap _all_ `<HotKeys>` children in.
1. Use the [withHotKeys HoC API](#withHotKeys-HoC-API) to avoid rendering a wrapping component at all.

#### Other keyboard event listeners are no longer being triggered

For improved performance, by default `react-hotkeys` calls `stopPropagation()` on all events that it handles. You can change this using the `stopEventPropagationAfterHandling` and `stopEventPropagationAfterIgnoring` [configuration options](#Configuration).

#### Actions aren't being triggered when using withHotKeys

Check that you are [correctly passing the hotKeys props to a DOM-mountable component](#Pre-defining-default-prop-values).

#### Actions aren't being triggered for HotKeys

Make sure you are focusing a descendant of the `<HotKeys>` component before you press the keys.

Check that the `<HotKeys>` component that defines the handler is also an ancestor of the focused component, and is above (or _is_) the component that defines the `handlers`.

Also make sure your React application is not calling `stopPropagation()` on the key events before they reach the `<HotKeys>` component that defines the `keyMap`.

Finally, make sure your key event are not coming from one of the [tags ignored by react-hotkeys](#Ignoring-events).

#### React Hotkeys thinks I'm holding down a key I've released

This can happen when you have an action handler that either unmounts the `<HotKeys>` component, or focuses an area of the application where there is no ancestor `<HotKeys>`. The solution is to add a `<HotKeys>` component with the `root` prop to the top of your application - or at least high enough to *not* be unmounted or unfocused by your action handler.

```javascript
<HotKeys root>
  // The parts of your application that are re-rendered or unfocused here
</HotKeys>
```

Alternatively, you can add a `<GlobalHotKeys/>` component anywhere in your application and it will close key combinations left hanging by your `<HotKeys />` components due to missed `keypress` and `keyup` events.

#### Blue border appears around children of HotKeys

`react-hotkeys` adds a `<div />` around its children with a `tabindex="-1"` to allow them to be programmatically focused. This can result in browsers rendering a blue outline around them to visually indicate that they are the elements in the document that is currently in focus.

This can be disabled using CSS similar to the following:

```css
div[tabindex="-1"]:focus {
  outline: 0;
}
```

## Support

Please use [Gitter](https://gitter.im/Chrisui/react-hotkeys) to ask any questions you may have regarding how to use `react-hotkeys`.

If you believe you have found a bug or have a feature request, please [open an issue](https://github.com/greena13/react-hotkeys/issues).

## Stability & Maintenance

`react-hotkeys` is considered stable and already being widely used (most notably Lystable and Whatsapp).

## Contribute, please!

If you're interested in helping out with the maintenance of `react-hotkeys`, make yourself known on [Gitter](https://gitter.im/Chrisui/react-hotkeys), [open an issue](https://github.com/greena13/react-hotkeys/issues) or create a pull request.

All contributions are welcome and greatly appreciated - from contributors of all levels of experience.

Collaboration is loosely being coordinated across [Gitter](https://gitter.im/Chrisui/react-hotkeys) and [Projects](https://github.com/greena13/react-hotkeys/projects).

### Using GitHub Issues

- Use the search feature to check for an existing issue
- Include as much information as possible and provide any relevant resources (Eg. screenshots)
- For bug reports ensure you have a reproducible test case
  - A pull request with a breaking test would be super preferable here but isn't required

### Submitting a Pull Request

- Squash commits
- Lint your code with eslint (config provided)
- Include relevant test updates/additions

### Commit messages

This repository uses the [meaningful emoji commits](http://greena13.github.io/blog/2016/08/19/emojis-are-the-solution-to-useless-commit-messages/) convention to help atomise and label commits.

## Build notes

`react-hotkeys` uses a mixture of build tools to create each of the development and production bundles, which can be confusing to navigate and understand.

### Build scripts

All build commands are included in the `package.json`:

| Command                      | Description                                                                                |
| :--------------------------- | :----------------------------------------------------------------------------------------- |
| `yarn prepublish`            | Build all bundles using babel and rollup                                                   |
| `yarn build-cjs`             | Build the development and production CommonJS bundles using babel and rollup, respectively |
| `yarn build-es`              | Build the development and production ES6 bundles using babel and rollup, respectively      |
| `yarn build-umd`             | Build the development and production UMD bundles using rollup                              |
| `yarn build-development`     | Build the development CommonJS bundle using babel                                          |
| `yarn build-es-development`  | Build the development ES6 bundle using babel                                               |
| `yarn build-umd-development` | Build the development ES6 bundle using rollup                                              |
| `yarn build-production`      | Build the production CommonJS bundle using rollup                                          |
| `yarn build-es-production`   | Build the production ES6 bundle using rollup                                               |
| `yarn build-umd-production`  | Build the production ES6 bundle using rollup                                               |

### Development builds

| Bundle   | Transpiled with | Modularized with | Output        |
| :------- | :-------------- | :--------------- | :------------ |
| CommonJS | Babel           | Babel            | /cjs/index.js |
| UMD      | Babel           | Rollup           | /umd/index.js |
| ES6      | Babel           | Babel            | /es/index.js  |

### Production builds

| Bundle   | Transpiled with | Optimized with | Minified with | Output                              |
| :------- | :-------------- | :------------- | :------------ | :---------------------------------- |
| CommonJS | Babel           | Rollup         | Uglify        | cjs/react-hotkeys.production.min.js |
| UMD      | Babel           | Rollup         | Uglify        | /umd/react-hotkeys.min.js           |
| ES6      | Babel           | Rollup         | Babel-minify  | /es/react-hotkeys.production.min.js |

### Build configuration

To understand the configuration for any one build, you need to consult 3 places:

- The CLI arguments used in the `scripts` of `package.json`
- The `.babelrc` file (match the env to the `BABEL_ENV` value set in `scripts` above)
- The `rollup.configs.js` (if applicable)

## Authorship

All credit, and many thanks, goes to [Chris Pearce](https://github.com/Chrisui) for the inception of `react-hotkeys` and all versions before `1.0.0`.

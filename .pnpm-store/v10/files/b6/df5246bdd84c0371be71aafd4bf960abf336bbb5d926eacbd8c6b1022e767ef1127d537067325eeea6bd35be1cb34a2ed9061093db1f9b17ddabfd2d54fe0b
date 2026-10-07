/**
 * @license React
 * react-dom-test-utils.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('react'), require('react-dom')) :
  typeof define === 'function' && define.amd ? define(['exports', 'react', 'react-dom'], factory) :
  (global = global || self, factory(global.ReactTestUtils = {}, global.React, global.ReactDOM));
}(this, (function (exports, React, ReactDOM) { 'use strict';

  var ReactSharedInternals = React.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;

  // by calls to these methods by a Babel plugin.
  //
  // In PROD (or in packages without access to React internals),
  // they are left as they are instead.

  function warn(format) {
    {
      {
        for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
          args[_key - 1] = arguments[_key];
        }

        printWarning('warn', format, args);
      }
    }
  }
  function error(format) {
    {
      {
        for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
          args[_key2 - 1] = arguments[_key2];
        }

        printWarning('error', format, args);
      }
    }
  }

  function printWarning(level, format, args) {
    // When changing this logic, you might want to also
    // update consoleWithStackDev.www.js as well.
    {
      var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;
      var stack = ReactDebugCurrentFrame.getStackAddendum();

      if (stack !== '') {
        format += '%s';
        args = args.concat([stack]);
      } // eslint-disable-next-line react-internal/safe-string-coercion


      var argsWithFormat = args.map(function (item) {
        return String(item);
      }); // Careful: RN currently depends on this prefix

      argsWithFormat.unshift('Warning: ' + format); // We intentionally don't use spread (or .apply) directly because it
      // breaks IE9: https://github.com/facebook/react/issues/13610
      // eslint-disable-next-line react-internal/no-production-logging

      Function.prototype.apply.call(console[level], console, argsWithFormat);
    }
  }

  /**
   * `ReactInstanceMap` maintains a mapping from a public facing stateful
   * instance (key) and the internal representation (value). This allows public
   * methods to accept the user facing instance as an argument and map them back
   * to internal methods.
   *
   * Note that this module is currently shared and assumed to be stateless.
   * If this becomes an actual Map, that will break.
   */
  function get(key) {
    return key._reactInternals;
  }

  var FunctionComponent = 0;
  var ClassComponent = 1;

  var HostRoot = 3; // Root of a host tree. Could be nested inside another node.

  var HostComponent = 5;
  var HostText = 6;

  // Don't change these two values. They're used by React Dev Tools.
  var NoFlags =
  /*                      */
  0;

  var Placement =
  /*                    */
  2;
  var Hydrating =
  /*                    */
  4096;

  var ReactCurrentOwner = ReactSharedInternals.ReactCurrentOwner;
  function getNearestMountedFiber(fiber) {
    var node = fiber;
    var nearestMounted = fiber;

    if (!fiber.alternate) {
      // If there is no alternate, this might be a new tree that isn't inserted
      // yet. If it is, then it will have a pending insertion effect on it.
      var nextNode = node;

      do {
        node = nextNode;

        if ((node.flags & (Placement | Hydrating)) !== NoFlags) {
          // This is an insertion or in-progress hydration. The nearest possible
          // mounted fiber is the parent but we need to continue to figure out
          // if that one is still mounted.
          nearestMounted = node.return;
        }

        nextNode = node.return;
      } while (nextNode);
    } else {
      while (node.return) {
        node = node.return;
      }
    }

    if (node.tag === HostRoot) {
      // TODO: Check if this was a nested HostRoot when used with
      // renderContainerIntoSubtree.
      return nearestMounted;
    } // If we didn't hit the root, that means that we're in an disconnected tree
    // that has been unmounted.


    return null;
  }

  function assertIsMounted(fiber) {
    if (getNearestMountedFiber(fiber) !== fiber) {
      throw new Error('Unable to find node on an unmounted component.');
    }
  }

  function findCurrentFiberUsingSlowPath(fiber) {
    var alternate = fiber.alternate;

    if (!alternate) {
      // If there is no alternate, then we only need to check if it is mounted.
      var nearestMounted = getNearestMountedFiber(fiber);

      if (nearestMounted === null) {
        throw new Error('Unable to find node on an unmounted component.');
      }

      if (nearestMounted !== fiber) {
        return null;
      }

      return fiber;
    } // If we have two possible branches, we'll walk backwards up to the root
    // to see what path the root points to. On the way we may hit one of the
    // special cases and we'll deal with them.


    var a = fiber;
    var b = alternate;

    while (true) {
      var parentA = a.return;

      if (parentA === null) {
        // We're at the root.
        break;
      }

      var parentB = parentA.alternate;

      if (parentB === null) {
        // There is no alternate. This is an unusual case. Currently, it only
        // happens when a Suspense component is hidden. An extra fragment fiber
        // is inserted in between the Suspense fiber and its children. Skip
        // over this extra fragment fiber and proceed to the next parent.
        var nextParent = parentA.return;

        if (nextParent !== null) {
          a = b = nextParent;
          continue;
        } // If there's no parent, we're at the root.


        break;
      } // If both copies of the parent fiber point to the same child, we can
      // assume that the child is current. This happens when we bailout on low
      // priority: the bailed out fiber's child reuses the current child.


      if (parentA.child === parentB.child) {
        var child = parentA.child;

        while (child) {
          if (child === a) {
            // We've determined that A is the current branch.
            assertIsMounted(parentA);
            return fiber;
          }

          if (child === b) {
            // We've determined that B is the current branch.
            assertIsMounted(parentA);
            return alternate;
          }

          child = child.sibling;
        } // We should never have an alternate for any mounting node. So the only
        // way this could possibly happen is if this was unmounted, if at all.


        throw new Error('Unable to find node on an unmounted component.');
      }

      if (a.return !== b.return) {
        // The return pointer of A and the return pointer of B point to different
        // fibers. We assume that return pointers never criss-cross, so A must
        // belong to the child set of A.return, and B must belong to the child
        // set of B.return.
        a = parentA;
        b = parentB;
      } else {
        // The return pointers point to the same fiber. We'll have to use the
        // default, slow path: scan the child sets of each parent alternate to see
        // which child belongs to which set.
        //
        // Search parent A's child set
        var didFindChild = false;
        var _child = parentA.child;

        while (_child) {
          if (_child === a) {
            didFindChild = true;
            a = parentA;
            b = parentB;
            break;
          }

          if (_child === b) {
            didFindChild = true;
            b = parentA;
            a = parentB;
            break;
          }

          _child = _child.sibling;
        }

        if (!didFindChild) {
          // Search parent B's child set
          _child = parentB.child;

          while (_child) {
            if (_child === a) {
              didFindChild = true;
              a = parentB;
              b = parentA;
              break;
            }

            if (_child === b) {
              didFindChild = true;
              b = parentB;
              a = parentA;
              break;
            }

            _child = _child.sibling;
          }

          if (!didFindChild) {
            throw new Error('Child was not found in either parent set. This indicates a bug ' + 'in React related to the return pointer. Please file an issue.');
          }
        }
      }

      if (a.alternate !== b) {
        throw new Error("Return fibers should always be each others' alternates. " + 'This error is likely caused by a bug in React. Please file an issue.');
      }
    } // If the root is not a host container, we're in a disconnected tree. I.e.
    // unmounted.


    if (a.tag !== HostRoot) {
      throw new Error('Unable to find node on an unmounted component.');
    }

    if (a.stateNode.current === a) {
      // We've determined that A is the current branch.
      return fiber;
    } // Otherwise B has to be current branch.


    return alternate;
  }

  var assign = Object.assign;

  /**
   * `charCode` represents the actual "character code" and is safe to use with
   * `String.fromCharCode`. As such, only keys that correspond to printable
   * characters produce a valid `charCode`, the only exception to this is Enter.
   * The Tab-key is considered non-printable and does not have a `charCode`,
   * presumably because it does not produce a tab-character in browsers.
   *
   * @param {object} nativeEvent Native browser event.
   * @return {number} Normalized `charCode` property.
   */
  function getEventCharCode(nativeEvent) {
    var charCode;
    var keyCode = nativeEvent.keyCode;

    if ('charCode' in nativeEvent) {
      charCode = nativeEvent.charCode; // FF does not set `charCode` for the Enter-key, check against `keyCode`.

      if (charCode === 0 && keyCode === 13) {
        charCode = 13;
      }
    } else {
      // IE8 does not implement `charCode`, but `keyCode` has the correct value.
      charCode = keyCode;
    } // IE and Edge (on Windows) and Chrome / Safari (on Windows and Linux)
    // report Enter as charCode 10 when ctrl is pressed.


    if (charCode === 10) {
      charCode = 13;
    } // Some non-printable keys are reported in `charCode`/`keyCode`, discard them.
    // Must not discard the (non-)printable Enter-key.


    if (charCode >= 32 || charCode === 13) {
      return charCode;
    }

    return 0;
  }

  function functionThatReturnsTrue() {
    return true;
  }

  function functionThatReturnsFalse() {
    return false;
  } // This is intentionally a factory so that we have different returned constructors.
  // If we had a single constructor, it would be megamorphic and engines would deopt.


  function createSyntheticEvent(Interface) {
    /**
     * Synthetic events are dispatched by event plugins, typically in response to a
     * top-level event delegation handler.
     *
     * These systems should generally use pooling to reduce the frequency of garbage
     * collection. The system should check `isPersistent` to determine whether the
     * event should be released into the pool after being dispatched. Users that
     * need a persisted event should invoke `persist`.
     *
     * Synthetic events (and subclasses) implement the DOM Level 3 Events API by
     * normalizing browser quirks. Subclasses do not necessarily have to implement a
     * DOM interface; custom application-specific events can also subclass this.
     */
    function SyntheticBaseEvent(reactName, reactEventType, targetInst, nativeEvent, nativeEventTarget) {
      this._reactName = reactName;
      this._targetInst = targetInst;
      this.type = reactEventType;
      this.nativeEvent = nativeEvent;
      this.target = nativeEventTarget;
      this.currentTarget = null;

      for (var _propName in Interface) {
        if (!Interface.hasOwnProperty(_propName)) {
          continue;
        }

        var normalize = Interface[_propName];

        if (normalize) {
          this[_propName] = normalize(nativeEvent);
        } else {
          this[_propName] = nativeEvent[_propName];
        }
      }

      var defaultPrevented = nativeEvent.defaultPrevented != null ? nativeEvent.defaultPrevented : nativeEvent.returnValue === false;

      if (defaultPrevented) {
        this.isDefaultPrevented = functionThatReturnsTrue;
      } else {
        this.isDefaultPrevented = functionThatReturnsFalse;
      }

      this.isPropagationStopped = functionThatReturnsFalse;
      return this;
    }

    assign(SyntheticBaseEvent.prototype, {
      preventDefault: function () {
        this.defaultPrevented = true;
        var event = this.nativeEvent;

        if (!event) {
          return;
        }

        if (event.preventDefault) {
          event.preventDefault(); // $FlowFixMe - flow is not aware of `unknown` in IE
        } else if (typeof event.returnValue !== 'unknown') {
          event.returnValue = false;
        }

        this.isDefaultPrevented = functionThatReturnsTrue;
      },
      stopPropagation: function () {
        var event = this.nativeEvent;

        if (!event) {
          return;
        }

        if (event.stopPropagation) {
          event.stopPropagation(); // $FlowFixMe - flow is not aware of `unknown` in IE
        } else if (typeof event.cancelBubble !== 'unknown') {
          // The ChangeEventPlugin registers a "propertychange" event for
          // IE. This event does not support bubbling or cancelling, and
          // any references to cancelBubble throw "Member not found".  A
          // typeof check of "unknown" circumvents this issue (and is also
          // IE specific).
          event.cancelBubble = true;
        }

        this.isPropagationStopped = functionThatReturnsTrue;
      },

      /**
       * We release all dispatched `SyntheticEvent`s after each event loop, adding
       * them back into the pool. This allows a way to hold onto a reference that
       * won't be added back into the pool.
       */
      persist: function () {// Modern event system doesn't use pooling.
      },

      /**
       * Checks if this event should be released back into the pool.
       *
       * @return {boolean} True if this should not be released, false otherwise.
       */
      isPersistent: functionThatReturnsTrue
    });
    return SyntheticBaseEvent;
  }
  /**
   * @interface Event
   * @see http://www.w3.org/TR/DOM-Level-3-Events/
   */


  var EventInterface = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (event) {
      return event.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0
  };
  var SyntheticEvent = createSyntheticEvent(EventInterface);

  var UIEventInterface = assign({}, EventInterface, {
    view: 0,
    detail: 0
  });

  var SyntheticUIEvent = createSyntheticEvent(UIEventInterface);
  var lastMovementX;
  var lastMovementY;
  var lastMouseEvent;

  function updateMouseMovementPolyfillState(event) {
    if (event !== lastMouseEvent) {
      if (lastMouseEvent && event.type === 'mousemove') {
        lastMovementX = event.screenX - lastMouseEvent.screenX;
        lastMovementY = event.screenY - lastMouseEvent.screenY;
      } else {
        lastMovementX = 0;
        lastMovementY = 0;
      }

      lastMouseEvent = event;
    }
  }
  /**
   * @interface MouseEvent
   * @see http://www.w3.org/TR/DOM-Level-3-Events/
   */


  var MouseEventInterface = assign({}, UIEventInterface, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: getEventModifierState,
    button: 0,
    buttons: 0,
    relatedTarget: function (event) {
      if (event.relatedTarget === undefined) return event.fromElement === event.srcElement ? event.toElement : event.fromElement;
      return event.relatedTarget;
    },
    movementX: function (event) {
      if ('movementX' in event) {
        return event.movementX;
      }

      updateMouseMovementPolyfillState(event);
      return lastMovementX;
    },
    movementY: function (event) {
      if ('movementY' in event) {
        return event.movementY;
      } // Don't need to call updateMouseMovementPolyfillState() here
      // because it's guaranteed to have already run when movementX
      // was copied.


      return lastMovementY;
    }
  });

  var SyntheticMouseEvent = createSyntheticEvent(MouseEventInterface);
  /**
   * @interface DragEvent
   * @see http://www.w3.org/TR/DOM-Level-3-Events/
   */

  var DragEventInterface = assign({}, MouseEventInterface, {
    dataTransfer: 0
  });

  var SyntheticDragEvent = createSyntheticEvent(DragEventInterface);
  /**
   * @interface FocusEvent
   * @see http://www.w3.org/TR/DOM-Level-3-Events/
   */

  var FocusEventInterface = assign({}, UIEventInterface, {
    relatedTarget: 0
  });

  var SyntheticFocusEvent = createSyntheticEvent(FocusEventInterface);
  /**
   * @interface Event
   * @see http://www.w3.org/TR/css3-animations/#AnimationEvent-interface
   * @see https://developer.mozilla.org/en-US/docs/Web/API/AnimationEvent
   */

  var AnimationEventInterface = assign({}, EventInterface, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  });

  var SyntheticAnimationEvent = createSyntheticEvent(AnimationEventInterface);
  /**
   * @interface Event
   * @see http://www.w3.org/TR/clipboard-apis/
   */

  var ClipboardEventInterface = assign({}, EventInterface, {
    clipboardData: function (event) {
      return 'clipboardData' in event ? event.clipboardData : window.clipboardData;
    }
  });

  var SyntheticClipboardEvent = createSyntheticEvent(ClipboardEventInterface);
  /**
   * @interface Event
   * @see http://www.w3.org/TR/DOM-Level-3-Events/#events-compositionevents
   */

  var CompositionEventInterface = assign({}, EventInterface, {
    data: 0
  });

  var SyntheticCompositionEvent = createSyntheticEvent(CompositionEventInterface);
  /**
   * Normalization of deprecated HTML5 `key` values
   * @see https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent#Key_names
   */

  var normalizeKey = {
    Esc: 'Escape',
    Spacebar: ' ',
    Left: 'ArrowLeft',
    Up: 'ArrowUp',
    Right: 'ArrowRight',
    Down: 'ArrowDown',
    Del: 'Delete',
    Win: 'OS',
    Menu: 'ContextMenu',
    Apps: 'ContextMenu',
    Scroll: 'ScrollLock',
    MozPrintableKey: 'Unidentified'
  };
  /**
   * Translation from legacy `keyCode` to HTML5 `key`
   * Only special keys supported, all others depend on keyboard layout or browser
   * @see https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent#Key_names
   */

  var translateToKey = {
    '8': 'Backspace',
    '9': 'Tab',
    '12': 'Clear',
    '13': 'Enter',
    '16': 'Shift',
    '17': 'Control',
    '18': 'Alt',
    '19': 'Pause',
    '20': 'CapsLock',
    '27': 'Escape',
    '32': ' ',
    '33': 'PageUp',
    '34': 'PageDown',
    '35': 'End',
    '36': 'Home',
    '37': 'ArrowLeft',
    '38': 'ArrowUp',
    '39': 'ArrowRight',
    '40': 'ArrowDown',
    '45': 'Insert',
    '46': 'Delete',
    '112': 'F1',
    '113': 'F2',
    '114': 'F3',
    '115': 'F4',
    '116': 'F5',
    '117': 'F6',
    '118': 'F7',
    '119': 'F8',
    '120': 'F9',
    '121': 'F10',
    '122': 'F11',
    '123': 'F12',
    '144': 'NumLock',
    '145': 'ScrollLock',
    '224': 'Meta'
  };
  /**
   * @param {object} nativeEvent Native browser event.
   * @return {string} Normalized `key` property.
   */

  function getEventKey(nativeEvent) {
    if (nativeEvent.key) {
      // Normalize inconsistent values reported by browsers due to
      // implementations of a working draft specification.
      // FireFox implements `key` but returns `MozPrintableKey` for all
      // printable characters (normalized to `Unidentified`), ignore it.
      var key = normalizeKey[nativeEvent.key] || nativeEvent.key;

      if (key !== 'Unidentified') {
        return key;
      }
    } // Browser does not implement `key`, polyfill as much of it as we can.


    if (nativeEvent.type === 'keypress') {
      var charCode = getEventCharCode(nativeEvent); // The enter-key is technically both printable and non-printable and can
      // thus be captured by `keypress`, no other non-printable key should.

      return charCode === 13 ? 'Enter' : String.fromCharCode(charCode);
    }

    if (nativeEvent.type === 'keydown' || nativeEvent.type === 'keyup') {
      // While user keyboard layout determines the actual meaning of each
      // `keyCode` value, almost all function keys have a universal value.
      return translateToKey[nativeEvent.keyCode] || 'Unidentified';
    }

    return '';
  }
  /**
   * Translation from modifier key to the associated property in the event.
   * @see http://www.w3.org/TR/DOM-Level-3-Events/#keys-Modifiers
   */


  var modifierKeyToProp = {
    Alt: 'altKey',
    Control: 'ctrlKey',
    Meta: 'metaKey',
    Shift: 'shiftKey'
  }; // Older browsers (Safari <= 10, iOS Safari <= 10.2) do not support
  // getModifierState. If getModifierState is not supported, we map it to a set of
  // modifier keys exposed by the event. In this case, Lock-keys are not supported.

  function modifierStateGetter(keyArg) {
    var syntheticEvent = this;
    var nativeEvent = syntheticEvent.nativeEvent;

    if (nativeEvent.getModifierState) {
      return nativeEvent.getModifierState(keyArg);
    }

    var keyProp = modifierKeyToProp[keyArg];
    return keyProp ? !!nativeEvent[keyProp] : false;
  }

  function getEventModifierState(nativeEvent) {
    return modifierStateGetter;
  }
  /**
   * @interface KeyboardEvent
   * @see http://www.w3.org/TR/DOM-Level-3-Events/
   */


  var KeyboardEventInterface = assign({}, UIEventInterface, {
    key: getEventKey,
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: getEventModifierState,
    // Legacy Interface
    charCode: function (event) {
      // `charCode` is the result of a KeyPress event and represents the value of
      // the actual printable character.
      // KeyPress is deprecated, but its replacement is not yet final and not
      // implemented in any major browser. Only KeyPress has charCode.
      if (event.type === 'keypress') {
        return getEventCharCode(event);
      }

      return 0;
    },
    keyCode: function (event) {
      // `keyCode` is the result of a KeyDown/Up event and represents the value of
      // physical keyboard key.
      // The actual meaning of the value depends on the users' keyboard layout
      // which cannot be detected. Assuming that it is a US keyboard layout
      // provides a surprisingly accurate mapping for US and European users.
      // Due to this, it is left to the user to implement at this time.
      if (event.type === 'keydown' || event.type === 'keyup') {
        return event.keyCode;
      }

      return 0;
    },
    which: function (event) {
      // `which` is an alias for either `keyCode` or `charCode` depending on the
      // type of the event.
      if (event.type === 'keypress') {
        return getEventCharCode(event);
      }

      if (event.type === 'keydown' || event.type === 'keyup') {
        return event.keyCode;
      }

      return 0;
    }
  });

  var SyntheticKeyboardEvent = createSyntheticEvent(KeyboardEventInterface);
  /**
   * @interface PointerEvent
   * @see http://www.w3.org/TR/pointerevents/
   */

  var PointerEventInterface = assign({}, MouseEventInterface, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0
  });

  var SyntheticPointerEvent = createSyntheticEvent(PointerEventInterface);
  /**
   * @interface TouchEvent
   * @see http://www.w3.org/TR/touch-events/
   */

  var TouchEventInterface = assign({}, UIEventInterface, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: getEventModifierState
  });

  var SyntheticTouchEvent = createSyntheticEvent(TouchEventInterface);
  /**
   * @interface Event
   * @see http://www.w3.org/TR/2009/WD-css3-transitions-20090320/#transition-events-
   * @see https://developer.mozilla.org/en-US/docs/Web/API/TransitionEvent
   */

  var TransitionEventInterface = assign({}, EventInterface, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  });

  var SyntheticTransitionEvent = createSyntheticEvent(TransitionEventInterface);
  /**
   * @interface WheelEvent
   * @see http://www.w3.org/TR/DOM-Level-3-Events/
   */

  var WheelEventInterface = assign({}, MouseEventInterface, {
    deltaX: function (event) {
      return 'deltaX' in event ? event.deltaX : // Fallback to `wheelDeltaX` for Webkit and normalize (right is positive).
      'wheelDeltaX' in event ? -event.wheelDeltaX : 0;
    },
    deltaY: function (event) {
      return 'deltaY' in event ? event.deltaY : // Fallback to `wheelDeltaY` for Webkit and normalize (down is positive).
      'wheelDeltaY' in event ? -event.wheelDeltaY : // Fallback to `wheelDelta` for IE<9 and normalize (down is positive).
      'wheelDelta' in event ? -event.wheelDelta : 0;
    },
    deltaZ: 0,
    // Browsers without "deltaMode" is reporting in raw wheel delta where one
    // notch on the scroll is always +/- 120, roughly equivalent to pixels.
    // A good approximation of DOM_DELTA_LINE (1) is 5% of viewport size or
    // ~40 pixels, for DOM_DELTA_SCREEN (2) it is 87.5% of viewport size.
    deltaMode: 0
  });

  var SyntheticWheelEvent = createSyntheticEvent(WheelEventInterface);

  /**
   * HTML nodeType values that represent the type of the node
   */
  var ELEMENT_NODE = 1;

  function invokeGuardedCallbackProd(name, func, context, a, b, c, d, e, f) {
    var funcArgs = Array.prototype.slice.call(arguments, 3);

    try {
      func.apply(context, funcArgs);
    } catch (error) {
      this.onError(error);
    }
  }

  var invokeGuardedCallbackImpl = invokeGuardedCallbackProd;

  {
    // In DEV mode, we swap out invokeGuardedCallback for a special version
    // that plays more nicely with the browser's DevTools. The idea is to preserve
    // "Pause on exceptions" behavior. Because React wraps all user-provided
    // functions in invokeGuardedCallback, and the production version of
    // invokeGuardedCallback uses a try-catch, all user exceptions are treated
    // like caught exceptions, and the DevTools won't pause unless the developer
    // takes the extra step of enabling pause on caught exceptions. This is
    // unintuitive, though, because even though React has caught the error, from
    // the developer's perspective, the error is uncaught.
    //
    // To preserve the expected "Pause on exceptions" behavior, we don't use a
    // try-catch in DEV. Instead, we synchronously dispatch a fake event to a fake
    // DOM node, and call the user-provided callback from inside an event handler
    // for that fake event. If the callback throws, the error is "captured" using
    // a global event handler. But because the error happens in a different
    // event loop context, it does not interrupt the normal program flow.
    // Effectively, this gives us try-catch behavior without actually using
    // try-catch. Neat!
    // Check that the browser supports the APIs we need to implement our special
    // DEV version of invokeGuardedCallback
    if (typeof window !== 'undefined' && typeof window.dispatchEvent === 'function' && typeof document !== 'undefined' && typeof document.createEvent === 'function') {
      var fakeNode = document.createElement('react');

      invokeGuardedCallbackImpl = function invokeGuardedCallbackDev(name, func, context, a, b, c, d, e, f) {
        // If document doesn't exist we know for sure we will crash in this method
        // when we call document.createEvent(). However this can cause confusing
        // errors: https://github.com/facebook/create-react-app/issues/3482
        // So we preemptively throw with a better message instead.
        if (typeof document === 'undefined' || document === null) {
          throw new Error('The `document` global was defined when React was initialized, but is not ' + 'defined anymore. This can happen in a test environment if a component ' + 'schedules an update from an asynchronous callback, but the test has already ' + 'finished running. To solve this, you can either unmount the component at ' + 'the end of your test (and ensure that any asynchronous operations get ' + 'canceled in `componentWillUnmount`), or you can change the test itself ' + 'to be asynchronous.');
        }

        var evt = document.createEvent('Event');
        var didCall = false; // Keeps track of whether the user-provided callback threw an error. We
        // set this to true at the beginning, then set it to false right after
        // calling the function. If the function errors, `didError` will never be
        // set to false. This strategy works even if the browser is flaky and
        // fails to call our global error handler, because it doesn't rely on
        // the error event at all.

        var didError = true; // Keeps track of the value of window.event so that we can reset it
        // during the callback to let user code access window.event in the
        // browsers that support it.

        var windowEvent = window.event; // Keeps track of the descriptor of window.event to restore it after event
        // dispatching: https://github.com/facebook/react/issues/13688

        var windowEventDescriptor = Object.getOwnPropertyDescriptor(window, 'event');

        function restoreAfterDispatch() {
          // We immediately remove the callback from event listeners so that
          // nested `invokeGuardedCallback` calls do not clash. Otherwise, a
          // nested call would trigger the fake event handlers of any call higher
          // in the stack.
          fakeNode.removeEventListener(evtType, callCallback, false); // We check for window.hasOwnProperty('event') to prevent the
          // window.event assignment in both IE <= 10 as they throw an error
          // "Member not found" in strict mode, and in Firefox which does not
          // support window.event.

          if (typeof window.event !== 'undefined' && window.hasOwnProperty('event')) {
            window.event = windowEvent;
          }
        } // Create an event handler for our fake event. We will synchronously
        // dispatch our fake event using `dispatchEvent`. Inside the handler, we
        // call the user-provided callback.


        var funcArgs = Array.prototype.slice.call(arguments, 3);

        function callCallback() {
          didCall = true;
          restoreAfterDispatch();
          func.apply(context, funcArgs);
          didError = false;
        } // Create a global error event handler. We use this to capture the value
        // that was thrown. It's possible that this error handler will fire more
        // than once; for example, if non-React code also calls `dispatchEvent`
        // and a handler for that event throws. We should be resilient to most of
        // those cases. Even if our error event handler fires more than once, the
        // last error event is always used. If the callback actually does error,
        // we know that the last error event is the correct one, because it's not
        // possible for anything else to have happened in between our callback
        // erroring and the code that follows the `dispatchEvent` call below. If
        // the callback doesn't error, but the error event was fired, we know to
        // ignore it because `didError` will be false, as described above.


        var error; // Use this to track whether the error event is ever called.

        var didSetError = false;
        var isCrossOriginError = false;

        function handleWindowError(event) {
          error = event.error;
          didSetError = true;

          if (error === null && event.colno === 0 && event.lineno === 0) {
            isCrossOriginError = true;
          }

          if (event.defaultPrevented) {
            // Some other error handler has prevented default.
            // Browsers silence the error report if this happens.
            // We'll remember this to later decide whether to log it or not.
            if (error != null && typeof error === 'object') {
              try {
                error._suppressLogging = true;
              } catch (inner) {// Ignore.
              }
            }
          }
        } // Create a fake event type.


        var evtType = "react-" + (name ? name : 'invokeguardedcallback'); // Attach our event handlers

        window.addEventListener('error', handleWindowError);
        fakeNode.addEventListener(evtType, callCallback, false); // Synchronously dispatch our fake event. If the user-provided function
        // errors, it will trigger our global error handler.

        evt.initEvent(evtType, false, false);
        fakeNode.dispatchEvent(evt);

        if (windowEventDescriptor) {
          Object.defineProperty(window, 'event', windowEventDescriptor);
        }

        if (didCall && didError) {
          if (!didSetError) {
            // The callback errored, but the error event never fired.
            // eslint-disable-next-line react-internal/prod-error-codes
            error = new Error('An error was thrown inside one of your components, but React ' + "doesn't know what it was. This is likely due to browser " + 'flakiness. React does its best to preserve the "Pause on ' + 'exceptions" behavior of the DevTools, which requires some ' + "DEV-mode only tricks. It's possible that these don't work in " + 'your browser. Try triggering the error in production mode, ' + 'or switching to a modern browser. If you suspect that this is ' + 'actually an issue with React, please file an issue.');
          } else if (isCrossOriginError) {
            // eslint-disable-next-line react-internal/prod-error-codes
            error = new Error("A cross-origin error was thrown. React doesn't have access to " + 'the actual error object in development. ' + 'See https://reactjs.org/link/crossorigin-error for more information.');
          }

          this.onError(error);
        } // Remove our event listeners


        window.removeEventListener('error', handleWindowError);

        if (!didCall) {
          // Something went really wrong, and our event was not dispatched.
          // https://github.com/facebook/react/issues/16734
          // https://github.com/facebook/react/issues/16585
          // Fall back to the production implementation.
          restoreAfterDispatch();
          return invokeGuardedCallbackProd.apply(this, arguments);
        }
      };
    }
  }

  var invokeGuardedCallbackImpl$1 = invokeGuardedCallbackImpl;

  var hasError = false;
  var caughtError = null; // Used by event system to capture/rethrow the first error.

  var hasRethrowError = false;
  var rethrowError = null;
  var reporter = {
    onError: function (error) {
      hasError = true;
      caughtError = error;
    }
  };
  /**
   * Call a function while guarding against errors that happens within it.
   * Returns an error if it throws, otherwise null.
   *
   * In production, this is implemented using a try-catch. The reason we don't
   * use a try-catch directly is so that we can swap out a different
   * implementation in DEV mode.
   *
   * @param {String} name of the guard to use for logging or debugging
   * @param {Function} func The function to invoke
   * @param {*} context The context to use when calling the function
   * @param {...*} args Arguments for function
   */

  function invokeGuardedCallback(name, func, context, a, b, c, d, e, f) {
    hasError = false;
    caughtError = null;
    invokeGuardedCallbackImpl$1.apply(reporter, arguments);
  }
  /**
   * Same as invokeGuardedCallback, but instead of returning an error, it stores
   * it in a global so it can be rethrown by `rethrowCaughtError` later.
   * TODO: See if caughtError and rethrowError can be unified.
   *
   * @param {String} name of the guard to use for logging or debugging
   * @param {Function} func The function to invoke
   * @param {*} context The context to use when calling the function
   * @param {...*} args Arguments for function
   */

  function invokeGuardedCallbackAndCatchFirstError(name, func, context, a, b, c, d, e, f) {
    invokeGuardedCallback.apply(this, arguments);

    if (hasError) {
      var error = clearCaughtError();

      if (!hasRethrowError) {
        hasRethrowError = true;
        rethrowError = error;
      }
    }
  }
  /**
   * During execution of guarded functions we will capture the first error which
   * we will rethrow to be handled by the top level error handler.
   */

  function rethrowCaughtError() {
    if (hasRethrowError) {
      var error = rethrowError;
      hasRethrowError = false;
      rethrowError = null;
      throw error;
    }
  }
  function clearCaughtError() {
    if (hasError) {
      var error = caughtError;
      hasError = false;
      caughtError = null;
      return error;
    } else {
      throw new Error('clearCaughtError was called but no error was captured. This error ' + 'is likely caused by a bug in React. Please file an issue.');
    }
  }

  var isArrayImpl = Array.isArray; // eslint-disable-next-line no-redeclare

  function isArray(a) {
    return isArrayImpl(a);
  }

  var SecretInternals = ReactDOM.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
  var EventInternals = SecretInternals.Events;
  var getInstanceFromNode = EventInternals[0];
  var getNodeFromInstance = EventInternals[1];
  var getFiberCurrentPropsFromNode = EventInternals[2];
  var enqueueStateRestore = EventInternals[3];
  var restoreStateIfNeeded = EventInternals[4];
  var reactAct = React.unstable_act;

  function Event(suffix) {}

  var hasWarnedAboutDeprecatedMockComponent = false;
  /**
   * @class ReactTestUtils
   */

  function findAllInRenderedFiberTreeInternal(fiber, test) {
    if (!fiber) {
      return [];
    }

    var currentParent = findCurrentFiberUsingSlowPath(fiber);

    if (!currentParent) {
      return [];
    }

    var node = currentParent;
    var ret = [];

    while (true) {
      if (node.tag === HostComponent || node.tag === HostText || node.tag === ClassComponent || node.tag === FunctionComponent) {
        var publicInst = node.stateNode;

        if (test(publicInst)) {
          ret.push(publicInst);
        }
      }

      if (node.child) {
        node.child.return = node;
        node = node.child;
        continue;
      }

      if (node === currentParent) {
        return ret;
      }

      while (!node.sibling) {
        if (!node.return || node.return === currentParent) {
          return ret;
        }

        node = node.return;
      }

      node.sibling.return = node.return;
      node = node.sibling;
    }
  }

  function validateClassInstance(inst, methodName) {
    if (!inst) {
      // This is probably too relaxed but it's existing behavior.
      return;
    }

    if (get(inst)) {
      // This is a public instance indeed.
      return;
    }

    var received;
    var stringified = String(inst);

    if (isArray(inst)) {
      received = 'an array';
    } else if (inst && inst.nodeType === ELEMENT_NODE && inst.tagName) {
      received = 'a DOM node';
    } else if (stringified === '[object Object]') {
      received = 'object with keys {' + Object.keys(inst).join(', ') + '}';
    } else {
      received = stringified;
    }

    throw new Error(methodName + "(...): the first argument must be a React class instance. " + ("Instead received: " + received + "."));
  }
  /**
   * Utilities for making it easy to test React components.
   *
   * See https://reactjs.org/docs/test-utils.html
   *
   * Todo: Support the entire DOM.scry query syntax. For now, these simple
   * utilities will suffice for testing purposes.
   * @lends ReactTestUtils
   */


  var didWarnAboutReactTestUtilsDeprecation = false;

  function renderIntoDocument(element) {
    {
      if (!didWarnAboutReactTestUtilsDeprecation) {
        didWarnAboutReactTestUtilsDeprecation = true;

        error('ReactDOMTestUtils is deprecated and will be removed in a future ' + 'major release, because it exposes internal implementation details ' + 'that are highly likely to change between releases. Upgrade to a ' + 'modern testing library, such as @testing-library/react. See ' + 'https://react.dev/warnings/react-dom-test-utils for more info.');
      }
    }

    var div = document.createElement('div'); // None of our tests actually require attaching the container to the
    // DOM, and doing so creates a mess that we rely on test isolation to
    // clean up, so we're going to stop honoring the name of this method
    // (and probably rename it eventually) if no problems arise.
    // document.documentElement.appendChild(div);

    return ReactDOM.render(element, div);
  }

  function isElement(element) {
    return React.isValidElement(element);
  }

  function isElementOfType(inst, convenienceConstructor) {
    return React.isValidElement(inst) && inst.type === convenienceConstructor;
  }

  function isDOMComponent(inst) {
    return !!(inst && inst.nodeType === ELEMENT_NODE && inst.tagName);
  }

  function isDOMComponentElement(inst) {
    return !!(inst && React.isValidElement(inst) && !!inst.tagName);
  }

  function isCompositeComponent(inst) {
    if (isDOMComponent(inst)) {
      // Accessing inst.setState warns; just return false as that'll be what
      // this returns when we have DOM nodes as refs directly
      return false;
    }

    return inst != null && typeof inst.render === 'function' && typeof inst.setState === 'function';
  }

  function isCompositeComponentWithType(inst, type) {
    if (!isCompositeComponent(inst)) {
      return false;
    }

    var internalInstance = get(inst);
    var constructor = internalInstance.type;
    return constructor === type;
  }

  function findAllInRenderedTree(inst, test) {
    validateClassInstance(inst, 'findAllInRenderedTree');

    if (!inst) {
      return [];
    }

    var internalInstance = get(inst);
    return findAllInRenderedFiberTreeInternal(internalInstance, test);
  }
  /**
   * Finds all instances of components in the rendered tree that are DOM
   * components with the class name matching `className`.
   * @return {array} an array of all the matches.
   */


  function scryRenderedDOMComponentsWithClass(root, classNames) {
    validateClassInstance(root, 'scryRenderedDOMComponentsWithClass');
    return findAllInRenderedTree(root, function (inst) {
      if (isDOMComponent(inst)) {
        var className = inst.className;

        if (typeof className !== 'string') {
          // SVG, probably.
          className = inst.getAttribute('class') || '';
        }

        var classList = className.split(/\s+/);

        if (!isArray(classNames)) {
          if (classNames === undefined) {
            throw new Error('TestUtils.scryRenderedDOMComponentsWithClass expects a ' + 'className as a second argument.');
          }

          classNames = classNames.split(/\s+/);
        }

        return classNames.every(function (name) {
          return classList.indexOf(name) !== -1;
        });
      }

      return false;
    });
  }
  /**
   * Like scryRenderedDOMComponentsWithClass but expects there to be one result,
   * and returns that one result, or throws exception if there is any other
   * number of matches besides one.
   * @return {!ReactDOMComponent} The one match.
   */


  function findRenderedDOMComponentWithClass(root, className) {
    validateClassInstance(root, 'findRenderedDOMComponentWithClass');
    var all = scryRenderedDOMComponentsWithClass(root, className);

    if (all.length !== 1) {
      throw new Error('Did not find exactly one match (found: ' + all.length + ') ' + 'for class:' + className);
    }

    return all[0];
  }
  /**
   * Finds all instances of components in the rendered tree that are DOM
   * components with the tag name matching `tagName`.
   * @return {array} an array of all the matches.
   */


  function scryRenderedDOMComponentsWithTag(root, tagName) {
    validateClassInstance(root, 'scryRenderedDOMComponentsWithTag');
    return findAllInRenderedTree(root, function (inst) {
      return isDOMComponent(inst) && inst.tagName.toUpperCase() === tagName.toUpperCase();
    });
  }
  /**
   * Like scryRenderedDOMComponentsWithTag but expects there to be one result,
   * and returns that one result, or throws exception if there is any other
   * number of matches besides one.
   * @return {!ReactDOMComponent} The one match.
   */


  function findRenderedDOMComponentWithTag(root, tagName) {
    validateClassInstance(root, 'findRenderedDOMComponentWithTag');
    var all = scryRenderedDOMComponentsWithTag(root, tagName);

    if (all.length !== 1) {
      throw new Error('Did not find exactly one match (found: ' + all.length + ') ' + 'for tag:' + tagName);
    }

    return all[0];
  }
  /**
   * Finds all instances of components with type equal to `componentType`.
   * @return {array} an array of all the matches.
   */


  function scryRenderedComponentsWithType(root, componentType) {
    validateClassInstance(root, 'scryRenderedComponentsWithType');
    return findAllInRenderedTree(root, function (inst) {
      return isCompositeComponentWithType(inst, componentType);
    });
  }
  /**
   * Same as `scryRenderedComponentsWithType` but expects there to be one result
   * and returns that one result, or throws exception if there is any other
   * number of matches besides one.
   * @return {!ReactComponent} The one match.
   */


  function findRenderedComponentWithType(root, componentType) {
    validateClassInstance(root, 'findRenderedComponentWithType');
    var all = scryRenderedComponentsWithType(root, componentType);

    if (all.length !== 1) {
      throw new Error('Did not find exactly one match (found: ' + all.length + ') ' + 'for componentType:' + componentType);
    }

    return all[0];
  }
  /**
   * Pass a mocked component module to this method to augment it with
   * useful methods that allow it to be used as a dummy React component.
   * Instead of rendering as usual, the component will become a simple
   * <div> containing any provided children.
   *
   * @param {object} module the mock function object exported from a
   *                        module that defines the component to be mocked
   * @param {?string} mockTagName optional dummy root tag name to return
   *                              from render method (overrides
   *                              module.mockTagName if provided)
   * @return {object} the ReactTestUtils object (for chaining)
   */


  function mockComponent(module, mockTagName) {
    {
      if (!hasWarnedAboutDeprecatedMockComponent) {
        hasWarnedAboutDeprecatedMockComponent = true;

        warn('ReactTestUtils.mockComponent() is deprecated. ' + 'Use shallow rendering or jest.mock() instead.\n\n' + 'See https://reactjs.org/link/test-utils-mock-component for more information.');
      }
    }

    mockTagName = mockTagName || module.mockTagName || 'div';
    module.prototype.render.mockImplementation(function () {
      return React.createElement(mockTagName, null, this.props.children);
    });
    return this;
  }

  function nativeTouchData(x, y) {
    return {
      touches: [{
        pageX: x,
        pageY: y
      }]
    };
  } // Start of inline: the below functions were inlined from
  // EventPropagator.js, as they deviated from ReactDOM's newer
  // implementations.

  /**
   * Dispatch the event to the listener.
   * @param {SyntheticEvent} event SyntheticEvent to handle
   * @param {function} listener Application-level callback
   * @param {*} inst Internal component instance
   */


  function executeDispatch(event, listener, inst) {
    var type = event.type || 'unknown-event';
    event.currentTarget = getNodeFromInstance(inst);
    invokeGuardedCallbackAndCatchFirstError(type, listener, undefined, event);
    event.currentTarget = null;
  }
  /**
   * Standard/simple iteration through an event's collected dispatches.
   */


  function executeDispatchesInOrder(event) {
    var dispatchListeners = event._dispatchListeners;
    var dispatchInstances = event._dispatchInstances;

    if (isArray(dispatchListeners)) {
      for (var i = 0; i < dispatchListeners.length; i++) {
        if (event.isPropagationStopped()) {
          break;
        } // Listeners and Instances are two parallel arrays that are always in sync.


        executeDispatch(event, dispatchListeners[i], dispatchInstances[i]);
      }
    } else if (dispatchListeners) {
      executeDispatch(event, dispatchListeners, dispatchInstances);
    }

    event._dispatchListeners = null;
    event._dispatchInstances = null;
  }
  /**
   * Dispatches an event and releases it back into the pool, unless persistent.
   *
   * @param {?object} event Synthetic event to be dispatched.
   * @private
   */


  var executeDispatchesAndRelease = function (event) {
    if (event) {
      executeDispatchesInOrder(event);

      if (!event.isPersistent()) {
        event.constructor.release(event);
      }
    }
  };

  function isInteractive(tag) {
    return tag === 'button' || tag === 'input' || tag === 'select' || tag === 'textarea';
  }

  function getParent(inst) {
    do {
      inst = inst.return; // TODO: If this is a HostRoot we might want to bail out.
      // That is depending on if we want nested subtrees (layers) to bubble
      // events to their parent. We could also go through parentNode on the
      // host node but that wouldn't work for React Native and doesn't let us
      // do the portal feature.
    } while (inst && inst.tag !== HostComponent);

    if (inst) {
      return inst;
    }

    return null;
  }
  /**
   * Simulates the traversal of a two-phase, capture/bubble event dispatch.
   */


  function traverseTwoPhase(inst, fn, arg) {
    var path = [];

    while (inst) {
      path.push(inst);
      inst = getParent(inst);
    }

    var i;

    for (i = path.length; i-- > 0;) {
      fn(path[i], 'captured', arg);
    }

    for (i = 0; i < path.length; i++) {
      fn(path[i], 'bubbled', arg);
    }
  }

  function shouldPreventMouseEvent(name, type, props) {
    switch (name) {
      case 'onClick':
      case 'onClickCapture':
      case 'onDoubleClick':
      case 'onDoubleClickCapture':
      case 'onMouseDown':
      case 'onMouseDownCapture':
      case 'onMouseMove':
      case 'onMouseMoveCapture':
      case 'onMouseUp':
      case 'onMouseUpCapture':
      case 'onMouseEnter':
        return !!(props.disabled && isInteractive(type));

      default:
        return false;
    }
  }
  /**
   * @param {object} inst The instance, which is the source of events.
   * @param {string} registrationName Name of listener (e.g. `onClick`).
   * @return {?function} The stored callback.
   */


  function getListener(inst, registrationName) {
    // TODO: shouldPreventMouseEvent is DOM-specific and definitely should not
    // live here; needs to be moved to a better place soon
    var stateNode = inst.stateNode;

    if (!stateNode) {
      // Work in progress (ex: onload events in incremental mode).
      return null;
    }

    var props = getFiberCurrentPropsFromNode(stateNode);

    if (!props) {
      // Work in progress.
      return null;
    }

    var listener = props[registrationName];

    if (shouldPreventMouseEvent(registrationName, inst.type, props)) {
      return null;
    }

    if (listener && typeof listener !== 'function') {
      throw new Error("Expected `" + registrationName + "` listener to be a function, instead got a value of `" + typeof listener + "` type.");
    }

    return listener;
  }

  function listenerAtPhase(inst, event, propagationPhase) {
    var registrationName = event._reactName;

    if (propagationPhase === 'captured') {
      registrationName += 'Capture';
    }

    return getListener(inst, registrationName);
  }

  function accumulateDispatches(inst, ignoredDirection, event) {
    if (inst && event && event._reactName) {
      var registrationName = event._reactName;
      var listener = getListener(inst, registrationName);

      if (listener) {
        if (event._dispatchListeners == null) {
          event._dispatchListeners = [];
        }

        if (event._dispatchInstances == null) {
          event._dispatchInstances = [];
        }

        event._dispatchListeners.push(listener);

        event._dispatchInstances.push(inst);
      }
    }
  }

  function accumulateDirectionalDispatches(inst, phase, event) {
    {
      if (!inst) {
        error('Dispatching inst must not be null');
      }
    }

    var listener = listenerAtPhase(inst, event, phase);

    if (listener) {
      if (event._dispatchListeners == null) {
        event._dispatchListeners = [];
      }

      if (event._dispatchInstances == null) {
        event._dispatchInstances = [];
      }

      event._dispatchListeners.push(listener);

      event._dispatchInstances.push(inst);
    }
  }

  function accumulateDirectDispatchesSingle(event) {
    if (event && event._reactName) {
      accumulateDispatches(event._targetInst, null, event);
    }
  }

  function accumulateTwoPhaseDispatchesSingle(event) {
    if (event && event._reactName) {
      traverseTwoPhase(event._targetInst, accumulateDirectionalDispatches, event);
    }
  } // End of inline


  var Simulate = {};
  var directDispatchEventTypes = new Set(['mouseEnter', 'mouseLeave', 'pointerEnter', 'pointerLeave']);
  /**
   * Exports:
   *
   * - `Simulate.click(Element)`
   * - `Simulate.mouseMove(Element)`
   * - `Simulate.change(Element)`
   * - ... (All keys from event plugin `eventTypes` objects)
   */

  function makeSimulator(eventType) {
    return function (domNode, eventData) {
      if (React.isValidElement(domNode)) {
        throw new Error('TestUtils.Simulate expected a DOM node as the first argument but received ' + 'a React element. Pass the DOM node you wish to simulate the event on instead. ' + 'Note that TestUtils.Simulate will not work if you are using shallow rendering.');
      }

      if (isCompositeComponent(domNode)) {
        throw new Error('TestUtils.Simulate expected a DOM node as the first argument but received ' + 'a component instance. Pass the DOM node you wish to simulate the event on instead.');
      }

      var reactName = 'on' + eventType[0].toUpperCase() + eventType.slice(1);
      var fakeNativeEvent = new Event();
      fakeNativeEvent.target = domNode;
      fakeNativeEvent.type = eventType.toLowerCase();
      var targetInst = getInstanceFromNode(domNode);
      var event = new SyntheticEvent(reactName, fakeNativeEvent.type, targetInst, fakeNativeEvent, domNode); // Since we aren't using pooling, always persist the event. This will make
      // sure it's marked and won't warn when setting additional properties.

      event.persist();
      assign(event, eventData);

      if (directDispatchEventTypes.has(eventType)) {
        accumulateDirectDispatchesSingle(event);
      } else {
        accumulateTwoPhaseDispatchesSingle(event);
      }

      ReactDOM.unstable_batchedUpdates(function () {
        // Normally extractEvent enqueues a state restore, but we'll just always
        // do that since we're by-passing it here.
        enqueueStateRestore(domNode);
        executeDispatchesAndRelease(event);
        rethrowCaughtError();
      });
      restoreStateIfNeeded();
    };
  } // A one-time snapshot with no plans to update. We'll probably want to deprecate Simulate API.


  var simulatedEventTypes = ['blur', 'cancel', 'click', 'close', 'contextMenu', 'copy', 'cut', 'auxClick', 'doubleClick', 'dragEnd', 'dragStart', 'drop', 'focus', 'input', 'invalid', 'keyDown', 'keyPress', 'keyUp', 'mouseDown', 'mouseUp', 'paste', 'pause', 'play', 'pointerCancel', 'pointerDown', 'pointerUp', 'rateChange', 'reset', 'resize', 'seeked', 'submit', 'touchCancel', 'touchEnd', 'touchStart', 'volumeChange', 'drag', 'dragEnter', 'dragExit', 'dragLeave', 'dragOver', 'mouseMove', 'mouseOut', 'mouseOver', 'pointerMove', 'pointerOut', 'pointerOver', 'scroll', 'toggle', 'touchMove', 'wheel', 'abort', 'animationEnd', 'animationIteration', 'animationStart', 'canPlay', 'canPlayThrough', 'durationChange', 'emptied', 'encrypted', 'ended', 'error', 'gotPointerCapture', 'load', 'loadedData', 'loadedMetadata', 'loadStart', 'lostPointerCapture', 'playing', 'progress', 'seeking', 'stalled', 'suspend', 'timeUpdate', 'transitionEnd', 'waiting', 'mouseEnter', 'mouseLeave', 'pointerEnter', 'pointerLeave', 'change', 'select', 'beforeInput', 'compositionEnd', 'compositionStart', 'compositionUpdate'];

  function buildSimulators() {
    simulatedEventTypes.forEach(function (eventType) {
      Simulate[eventType] = makeSimulator(eventType);
    });
  }

  buildSimulators();
  var didWarnAboutUsingAct = false;
  var act =  function actWithWarning(callback) {
    {
      if (!didWarnAboutUsingAct) {
        didWarnAboutUsingAct = true;

        error('`ReactDOMTestUtils.act` is deprecated in favor of `React.act`. ' + 'Import `act` from `react` instead of `react-dom/test-utils`. ' + 'See https://react.dev/warnings/react-dom-test-utils for more info.');
      }
    }

    return reactAct(callback);
  } ;

  exports.Simulate = Simulate;
  exports.act = act;
  exports.findAllInRenderedTree = findAllInRenderedTree;
  exports.findRenderedComponentWithType = findRenderedComponentWithType;
  exports.findRenderedDOMComponentWithClass = findRenderedDOMComponentWithClass;
  exports.findRenderedDOMComponentWithTag = findRenderedDOMComponentWithTag;
  exports.isCompositeComponent = isCompositeComponent;
  exports.isCompositeComponentWithType = isCompositeComponentWithType;
  exports.isDOMComponent = isDOMComponent;
  exports.isDOMComponentElement = isDOMComponentElement;
  exports.isElement = isElement;
  exports.isElementOfType = isElementOfType;
  exports.mockComponent = mockComponent;
  exports.nativeTouchData = nativeTouchData;
  exports.renderIntoDocument = renderIntoDocument;
  exports.scryRenderedComponentsWithType = scryRenderedComponentsWithType;
  exports.scryRenderedDOMComponentsWithClass = scryRenderedDOMComponentsWithClass;
  exports.scryRenderedDOMComponentsWithTag = scryRenderedDOMComponentsWithTag;
  exports.traverseTwoPhase = traverseTwoPhase;

})));

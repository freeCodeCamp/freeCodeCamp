function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

import KeyEventType from '../../const/KeyEventType';
import AbstractKeyEventStrategy from './AbstractKeyEventStrategy';
import describeKeyEventType from '../../helpers/logging/describeKeyEventType';
import KeyEventCounter from '../listening/KeyEventCounter';
import Logger from '../logging/Logger';
import isUndefined from '../../utils/isUndefined';
import printComponent from '../../helpers/logging/printComponent';
import getKeyName from '../../helpers/resolving-handlers/getKeyName';
import Configuration from '../config/Configuration';
import describeKeyEvent from '../../helpers/logging/describeKeyEvent';
import isCmdKey from '../../helpers/parsing-key-maps/isCmdKey';
import EventResponse from '../../const/EventResponse';
import contains from '../../utils/collection/contains';
import stateFromEvent from '../../helpers/parsing-key-maps/stateFromEvent';
import normalizeEventName from '../../utils/string/normalizeEventName';
/**
 * Defines behaviour for dealing with key maps defined in global HotKey components
 * @class
 */

var GlobalKeyEventStrategy =
/*#__PURE__*/
function (_AbstractKeyEventStra) {
  _inherits(GlobalKeyEventStrategy, _AbstractKeyEventStra);

  /********************************************************************************
   * Init & Reset
   ********************************************************************************/
  function GlobalKeyEventStrategy() {
    var _this;

    var configuration = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var keyEventManager = arguments.length > 1 ? arguments[1] : undefined;

    _classCallCheck(this, GlobalKeyEventStrategy);

    /**
     * Set state that gets cleared every time a component gets mounted or unmounted
     */
    _this = _possibleConstructorReturn(this, _getPrototypeOf(GlobalKeyEventStrategy).call(this, configuration, keyEventManager));
    /**
     * Set state that doesn't get cleared each time a new new component is mounted
     * or unmounted
     * @type {number}
     */

    /**
     * Whether the global key event handlers have been bound to document yet or not
     * @type {boolean}
     */

    _this.listenersBound = false;
    _this.eventOptions = {
      ignoreEventsCondition: Configuration.option('ignoreEventsCondition')
    };
    /**
     * Dictionary of listener functions - currently only intended to house
     * keyCombinationListener
     */

    _this.listeners = {};
    return _this;
  }
  /********************************************************************************
   * Enabling key maps and handlers
   ********************************************************************************/

  /**
   * Registers the actions and handlers of a HotKeys component that has mounted
   * @param {ComponentId} componentId - Id of the component that the keyMap belongs to
   * @param {KeyMap} actionNameToKeyMap - Map of actions to key expressions
   * @param {HandlersMap} actionNameToHandlersMap - Map of actions to handler functions
   * @param {Object} options Hash of options that configure how the actions
   *        and handlers are associated and called.
   * @param {Object} eventOptions - Options for how the event should be handled
   */


  _createClass(GlobalKeyEventStrategy, [{
    key: "enableHotKeys",
    value: function enableHotKeys(componentId) {
      var actionNameToKeyMap = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var actionNameToHandlersMap = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      var options = arguments.length > 3 ? arguments[3] : undefined;
      var eventOptions = arguments.length > 4 ? arguments[4] : undefined;
      this.eventOptions = eventOptions;

      this._addComponent(componentId, actionNameToKeyMap, actionNameToHandlersMap, options);

      this._updateDocumentHandlers();
      /**
       * Reset handler resolution state
       */


      this._initHandlerResolutionState();

      this.logger.debug(this._logPrefix(componentId, {
        eventId: false
      }), 'Mounted.');
      this.logger.verbose(this._logPrefix(componentId, {
        eventId: false
      }), 'Component options: \n', printComponent(this.componentList.get(componentId)));
    }
    /**
     * Handles when a mounted global HotKeys component updates its props and changes
     * either the keyMap or handlers prop value
     * @param {ComponentId} componentId - The component index of the component to
     *        update
     * @param {KeyMap} actionNameToKeyMap - Map of actions to key expressions
     * @param {HandlersMap} actionNameToHandlersMap - Map of actions to handler functions
     * @param {Object} options Hash of options that configure how the actions
     *        and handlers are associated and called.
     * @param {Object} eventOptions - Options for how the event should be handled
     */

  }, {
    key: "updateEnabledHotKeys",
    value: function updateEnabledHotKeys(componentId) {
      var actionNameToKeyMap = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var actionNameToHandlersMap = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      var options = arguments.length > 3 ? arguments[3] : undefined;
      var eventOptions = arguments.length > 4 ? arguments[4] : undefined;
      this.eventOptions = eventOptions;
      this.componentList.update(componentId, actionNameToKeyMap, actionNameToHandlersMap, options);
      this.getKeyHistory().setMaxLength(this.componentList.getLongestSequence());
      /**
       * Reset strategy state specific to the global strategy
       */

      this._updateDocumentHandlers();
      /**
       * Reset handler resolution state
       */


      this._initHandlerResolutionState();

      this.logger.debug(this._logPrefix(componentId, {
        eventId: false
      }), "Global component ".concat(componentId, " updated."));
      this.logger.verbose(this._logPrefix(componentId, {
        eventId: false
      }), 'Component options: \n', printComponent(this.componentList.get(componentId)));
    }
    /**
     * Handles when a component is unmounted
     * @param {ComponentId} componentId - Index of component that is being unmounted
     */

  }, {
    key: "disableHotKeys",
    value: function disableHotKeys(componentId) {
      /**
       * Manually update the registered key map state, usually reset using
       * _resetRegisteredKeyMapsState() method
       */
      this.componentList.remove(componentId);
      this.getKeyHistory().setMaxLength(this.componentList.getLongestSequence());

      this._updateDocumentHandlers();
      /**
       * Reset handler resolution state
       */


      this._initHandlerResolutionState();

      this.logger.debug(this._logPrefix(componentId, {
        eventId: false
      }), "Unmounted global component ".concat(componentId));
    }
  }, {
    key: "_updateDocumentHandlers",
    value: function _updateDocumentHandlers() {
      var _this2 = this;

      var listenersShouldBeBound = this._listenersShouldBeBound();

      if (!this.listenersBound && listenersShouldBeBound) {
        Object.values(KeyEventType).forEach(function (recordIndex) {
          var eventName = describeKeyEventType(recordIndex);

          document["on".concat(eventName)] = function (keyEvent) {
            _this2.keyEventManager["handleGlobal".concat(normalizeEventName(eventName))](keyEvent);
          };

          _this2.logger.debug(_this2._logPrefix(_this2.componentId, {
            eventId: false
          }), "Bound handler handleGlobal".concat(normalizeEventName(eventName), "() to document.on").concat(eventName, "()"));
        });
        this.listenersBound = true;
      } else if (this.listenersBound && !listenersShouldBeBound) {
        Object.values(KeyEventType).forEach(function (recordIndex) {
          var eventName = describeKeyEventType(recordIndex);
          delete document["on".concat(eventName)];

          _this2.logger.debug(_this2._logPrefix(_this2.componentId, {
            eventId: false
          }), "Removed handler handleGlobal".concat(normalizeEventName(eventName), "() from document.on").concat(eventName, "()"));
        });
        this.listenersBound = false;
      }
    }
    /**
     * Whether the document listeners should be bound, to record key events. Basically a check
     * to see if there are any global key maps, or whether the user is currently rebinding to
     * a new key combination.
     * @returns {boolean} True if the document listeners should be bound
     * @private
     */

  }, {
    key: "_listenersShouldBeBound",
    value: function _listenersShouldBeBound() {
      return this.componentList.any() || this.listeners.keyCombination;
    }
    /********************************************************************************
     * Recording key events
     ********************************************************************************/

    /**
     * Records a keydown keyboard event and matches it against the list of pre-registered
     * event handlers, calling the first matching handler with the highest priority if
     * one exists.
     *
     * This method is called once when a keyboard event bubbles up to document, and checks
     * the keymaps for all of the mounted global HotKey components.
     * @param {KeyboardEvent} event - Event containing the key name and state
     */

  }, {
    key: "handleKeydown",
    value: function handleKeydown(event) {
      var _key = getKeyName(event);

      if (event.repeat && Configuration.option('ignoreRepeatedEventsWhenKeyHeldDown')) {
        this.logger.debug(this._logPrefix(), "Ignored repeated ".concat(describeKeyEvent(event, _key, KeyEventType.keydown), " event."));
        return true;
      }

      this._checkForModifierFlagDiscrepancies(event, _key, KeyEventType.keydown);

      var reactAppResponse = this._howReactAppRespondedTo(event, _key, KeyEventType.keydown);

      if (reactAppResponse === EventResponse.unseen && this.eventOptions.ignoreEventsCondition(event)) {
        this.logger.debug(this._logPrefix(), "Ignored ".concat(describeKeyEvent(event, _key, KeyEventType.keydown), " event because ignoreEventsFilter rejected it."));
        return;
      }

      if (reactAppResponse !== EventResponse.ignored) {
        var keyEventState = stateFromEvent(event);
        var currentCombination = this.getCurrentCombination();

        if (currentCombination.isKeyIncluded(_key) || currentCombination.isEnding()) {
          this._startAndLogNewKeyCombination(_key, keyEventState);
        } else {
          this._addToAndLogCurrentKeyCombination(_key, KeyEventType.keydown, keyEventState);
        }
      }

      if (!contains([EventResponse.ignored, EventResponse.handled], reactAppResponse)) {
        this._callHandlerIfExists(event, _key, KeyEventType.keydown);
      }

      this._simulateKeyPressForNonPrintableKeys(event, _key);
    }
  }, {
    key: "_howReactAppRespondedTo",
    value: function _howReactAppRespondedTo(event, key, keyEventType) {
      var reactAppHistoryWithEvent = this.keyEventManager.reactAppHistoryWithEvent(key, keyEventType);

      switch (reactAppHistoryWithEvent) {
        case EventResponse.handled:
          this.logger.debug(this._logPrefix(), "Ignored ".concat(describeKeyEvent(event, key, keyEventType), " event because React app has already handled it."));
          break;

        case EventResponse.ignored:
          this.logger.debug(this._logPrefix(), "Ignored ".concat(describeKeyEvent(event, key, keyEventType), " event because React app has declared it should be ignored."));
          break;

        case EventResponse.seen:
          this.logger.debug(this._logPrefix(), "Received ".concat(describeKeyEvent(event, key, keyEventType), " event (that has already passed through React app)."));
          break;

        default:
          KeyEventCounter.incrementId();
          this.logger.debug(this._logPrefix(), "New ".concat(describeKeyEvent(event, key, keyEventType), " event (that has NOT passed through React app)."));
      }

      return reactAppHistoryWithEvent;
    }
    /**
     * Records a keypress keyboard event and matches it against the list of pre-registered
     * event handlers, calling the first matching handler with the highest priority if
     * one exists.
     *
     * This method is called once when a keyboard event bubbles up to document, and checks
     * the keymaps for all of the mounted global HotKey components.
     * @param {KeyboardEvent} event - Event containing the key name and state
     */

  }, {
    key: "handleKeyPress",
    value: function handleKeyPress(event) {
      var key = getKeyName(event);

      if (event.repeat && Configuration.option('ignoreRepeatedEventsWhenKeyHeldDown')) {
        this.logger.debug(this._logPrefix(), "Ignored repeated ".concat(describeKeyEvent(event, key, KeyEventType.keypress), " event."));
        return true;
      }

      var currentCombination = this.getCurrentCombination();

      if (currentCombination.isKeyPressSimulated(key)) {
        this.logger.debug(this._logPrefix(), "Ignored ".concat(describeKeyEvent(event, key, KeyEventType.keypress), " as it was not expected, and has already been simulated."));
        return true;
      }
      /**
       * We first decide if the keypress event should be handled (to ensure the correct
       * order of logging statements)
       */


      var reactAppResponse = this._howReactAppRespondedTo(event, key, KeyEventType.keypress);
      /**
       * Add new key event to key combination history
       */


      if (currentCombination.isKeyIncluded(key)) {
        this._addToAndLogCurrentKeyCombination(key, KeyEventType.keypress, stateFromEvent(event));
      }

      if (reactAppResponse === EventResponse.unseen) {
        /**
         * If the key event has not been seen by the React application, we ensure that
         * it's not still waiting for it. This occurs when action handlers bound to keydown
         * move the focus outside of the react app before it can record the keypress or
         * keyup
         */
        this.keyEventManager.closeHangingKeyCombination(key, KeyEventType.keypress);

        if (this.eventOptions.ignoreEventsCondition(event)) {
          this.logger.debug(this._logPrefix(), "Ignored ".concat(describeKeyEvent(event, key, KeyEventType.keypress), " event because ignoreEventsFilter rejected it."));
          return;
        }
      }

      if (!contains([EventResponse.ignored, EventResponse.handled], reactAppResponse)) {
        this._callHandlerIfExists(event, key, KeyEventType.keypress);
      }
    }
    /**
     * Records a keyup keyboard event and matches it against the list of pre-registered
     * event handlers, calling the first matching handler with the highest priority if
     * one exists.
     *
     * This method is called once when a keyboard event bubbles up to document, and checks
     * the keymaps for all of the mounted global HotKey components.
     * @param {KeyboardEvent} event - Event containing the key name and state
     */

  }, {
    key: "handleKeyUp",
    value: function handleKeyUp(event) {
      var key = getKeyName(event);
      var currentCombination = this.getCurrentCombination();

      if (currentCombination.isKeyUpSimulated(key)) {
        this.logger.debug(this._logPrefix(), "Ignored ".concat(describeKeyEvent(event, key, KeyEventType.keyup), " as it was not expected, and has already been simulated."));
        return true;
      }
      /**
       * We first decide if the keyup event should be handled (to ensure the correct
       * order of logging statements)
       */


      var reactAppResponse = this._howReactAppRespondedTo(event, key, KeyEventType.keyup);
      /**
       * We then add the keyup to our current combination - regardless of whether
       * it's to be handled or not. We need to do this to ensure that if a handler
       * function changes focus to a context that ignored events, the keyup event
       * is not lost (leaving react hotkeys thinking the key is still pressed).
       */


      if (currentCombination.isKeyIncluded(key)) {
        this._addToAndLogCurrentKeyCombination(key, KeyEventType.keyup, stateFromEvent(event));
      }

      if (reactAppResponse === EventResponse.unseen) {
        /**
         * If the key event has not been seen by the React application, we ensure that
         * it's not still waiting for it. This occurs when action handlers bound to keydown
         * or keypress move the focus outside of the react app before it can record the keyup
         */
        this.keyEventManager.closeHangingKeyCombination(key, KeyEventType.keyup);

        if (this.eventOptions.ignoreEventsCondition(event)) {
          this.logger.debug(this._logPrefix(), "Ignored ".concat(describeKeyEvent(event, key, KeyEventType.keyup), " event because ignoreEventsFilter rejected it."));
        } else {
          /**
           * We attempt to find a handler of the event, only if it has not already
           * been handled and should not be ignored
           */
          if (!contains([EventResponse.ignored, EventResponse.handled], reactAppResponse)) {
            this._callHandlerIfExists(event, key, KeyEventType.keyup);
          }
        }
      } else {
        /**
         * We attempt to find a handler of the event, only if it has not already
         * been handled and should not be ignored
         */
        if (!contains([EventResponse.ignored, EventResponse.handled], reactAppResponse)) {
          this._callHandlerIfExists(event, key, KeyEventType.keyup);
        }
      }
      /**
       * We simulate any hidden keyup events hidden by the command key, regardless
       * of whether the event should be ignored or not
       */


      this._simulateKeyUpEventsHiddenByCmd(event, key);

      if (this.listeners.keyCombination && this._allKeysAreReleased()) {
        this.listeners.keyCombination({
          keys: currentCombination.getKeyDictionary(),
          id: currentCombination.describe()
        });
      }
    }
  }, {
    key: "_simulateKeyPressForNonPrintableKeys",
    value: function _simulateKeyPressForNonPrintableKeys(event, key) {
      this.keyEventManager.simulatePendingKeyPressEvents();

      this._handleEventSimulation('handleKeyPress', this._shouldSimulate(KeyEventType.keypress, key), {
        event: event,
        key: key
      });
    }
  }, {
    key: "_simulateKeyUpEventsHiddenByCmd",
    value: function _simulateKeyUpEventsHiddenByCmd(event, key) {
      var _this3 = this;

      if (isCmdKey(key)) {
        /**
         * We simulate pending key events in the React app before we do it globally
         */
        this.keyEventManager.simulatePendingKeyUpEvents();
        this.getCurrentCombination().forEachKey(function (keyName) {
          if (isCmdKey(keyName)) {
            return;
          }

          _this3._handleEventSimulation('handleKeyUp', _this3._shouldSimulate(KeyEventType.keyup, keyName), {
            event: event,
            key: keyName
          });
        });
      }
    }
  }, {
    key: "_startAndLogNewKeyCombination",
    value: function _startAndLogNewKeyCombination(keyName, keyEventState) {
      this.getKeyHistory().startNewKeyCombination(keyName, keyEventState);
      this.logger.verbose(this._logPrefix(), "Started a new combination with '".concat(keyName, "'."));
      this.logger.verbose(this._logPrefix(), "Key history: ".concat(printComponent(this.getKeyHistory().toJSON()), "."));
    }
  }, {
    key: "_addToAndLogCurrentKeyCombination",
    value: function _addToAndLogCurrentKeyCombination(keyName, keyEventType, keyEventState) {
      this.getKeyHistory().addKeyToCurrentCombination(keyName, keyEventType, keyEventState);

      if (keyEventType === KeyEventType.keydown) {
        this.logger.verbose(this._logPrefix(), "Added '".concat(keyName, "' to current combination: '").concat(this.getCurrentCombination().describe(), "'."));
      }

      this.logger.verbose(this._logPrefix(), "Key history: ".concat(printComponent(this.getKeyHistory().toJSON()), "."));
    }
    /********************************************************************************
     * Event simulation
     ********************************************************************************/

  }, {
    key: "_handleEventSimulation",
    value: function _handleEventSimulation(handlerName, shouldSimulate, _ref) {
      var event = _ref.event,
          key = _ref.key;

      if (shouldSimulate && Configuration.option('simulateMissingKeyPressEvents')) {
        /**
         * If a key does not have a keypress event, we simulate one immediately after
         * the keydown event, to keep the behaviour consistent across all keys
         */
        var _event = this._cloneAndMergeEvent(event, {
          key: key,
          simulated: true
        });

        this[handlerName](_event);
      }
    }
    /********************************************************************************
     * Matching and calling handlers
     ********************************************************************************/

  }, {
    key: "_callHandlerIfExists",
    value: function _callHandlerIfExists(event, keyName, keyEventType) {
      var eventName = describeKeyEventType(keyEventType);
      var combinationName = this.getCurrentCombination().describe();

      if (!this.componentList.anyActionsForEventType(keyEventType)) {
        /**
         * If there are no handlers registered for the particular key event type
         * (keydown, keypress, keyup) then skip trying to find a matching handler
         * for the current key combination
         */
        this.logger.debug(this._logPrefix(), "Ignored '".concat(combinationName, "' ").concat(eventName, " because it doesn't have any ").concat(eventName, " handlers."));
        return;
      }
      /**
       * If there is at least one handler for the specified key event type (keydown,
       * keypress, keyup), then attempt to find a handler that matches the current
       * key combination
       */


      this.logger.verbose(this._logPrefix(), "Attempting to find action matching '".concat(combinationName, "' ").concat(eventName, " . . ."));

      this._callClosestMatchingHandler(event, keyName, keyEventType);
    }
  }, {
    key: "_callClosestMatchingHandler",
    value: function _callClosestMatchingHandler(event, keyName, keyEventType) {
      var componentListIterator = this.componentList.getNewIterator();

      while (componentListIterator.next()) {
        var matchFound = _get(_getPrototypeOf(GlobalKeyEventStrategy.prototype), "_callClosestMatchingHandler", this).call(this, event, keyName, keyEventType, componentListIterator.getPosition(), 0);

        if (matchFound) {
          this.logger.debug(this._logPrefix(), "Searching no further, as handler has been found (and called).");
          return;
        }
      }
    }
  }, {
    key: "_stopEventPropagation",
    value: function _stopEventPropagation(event, componentId) {
      this.logger.debug(this._logPrefix(componentId), 'Stopping further event propagation.');

      if (!event.simulated) {
        event.stopPropagation();
      }
    }
    /********************************************************************************
     * Recording key combination
     ********************************************************************************/

    /**
     * Add a new key combination listener function to be called the next time a key
     * combination completes (assuming the cancel function is not called).
     * @param {keyCombinationListener} callbackFunction Function to call with the next
     *        completed key combination
     * @returns {function} Function to call to cancel listening for the next key
     *        combination
     */

  }, {
    key: "addKeyCombinationListener",
    value: function addKeyCombinationListener(callbackFunction) {
      var _this4 = this;

      var cancel = function cancel() {
        delete _this4.listeners.keyCombination;
      };

      this.listeners.keyCombination = function (keyCombination) {
        callbackFunction(keyCombination);
        cancel();
      };

      this._updateDocumentHandlers();

      return cancel;
    }
    /********************************************************************************
     * Logging
     ********************************************************************************/

  }, {
    key: "_logPrefix",
    value: function _logPrefix(componentId) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var eventIcons = Logger.eventIcons;
      var componentIcons = Logger.componentIcons;
      var base = 'HotKeys (GLOBAL';

      if (options.eventId !== false) {
        var eventId = isUndefined(options.eventId) ? KeyEventCounter.getId() : options.eventId;
        base = "".concat(base, "-E").concat(eventId).concat(eventIcons[eventId % eventIcons.length]);
      }

      if (isUndefined(componentId)) {
        return "".concat(base, "):");
      } else {
        return "".concat(base, "-C").concat(componentId).concat(componentIcons[componentId % componentIcons.length], "):");
      }
    }
  }]);

  return GlobalKeyEventStrategy;
}(AbstractKeyEventStrategy);

export default GlobalKeyEventStrategy;
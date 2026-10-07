"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _AbstractKeyEventStrategy = _interopRequireDefault(require("./AbstractKeyEventStrategy"));

var _KeyEventType = _interopRequireDefault(require("../../const/KeyEventType"));

var _KeyEventCounter = _interopRequireDefault(require("../listening/KeyEventCounter"));

var _describeKeyEventType = _interopRequireDefault(require("../../helpers/logging/describeKeyEventType"));

var _Configuration = _interopRequireDefault(require("../config/Configuration"));

var _Logger = _interopRequireDefault(require("../logging/Logger"));

var _printComponent = _interopRequireDefault(require("../../helpers/logging/printComponent"));

var _isUndefined = _interopRequireDefault(require("../../utils/isUndefined"));

var _getKeyName = _interopRequireDefault(require("../../helpers/resolving-handlers/getKeyName"));

var _isCmdKey = _interopRequireDefault(require("../../helpers/parsing-key-maps/isCmdKey"));

var _describeKeyEvent = _interopRequireDefault(require("../../helpers/logging/describeKeyEvent"));

var _EventResponse = _interopRequireDefault(require("../../const/EventResponse"));

var _KeyEventState = _interopRequireDefault(require("../../const/KeyEventState"));

var _stateFromEvent = _interopRequireDefault(require("../../helpers/parsing-key-maps/stateFromEvent"));

var _EventPropagator = _interopRequireDefault(require("../listening/EventPropagator"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

/**
 * Defines behaviour for dealing with key maps defined in focus-only HotKey components
 * @class
 */
var FocusOnlyKeyEventStrategy =
/*#__PURE__*/
function (_AbstractKeyEventStra) {
  _inherits(FocusOnlyKeyEventStrategy, _AbstractKeyEventStra);

  /********************************************************************************
   * Init & Reset
   ********************************************************************************/
  function FocusOnlyKeyEventStrategy() {
    var _this;

    var configuration = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var keyEventManager = arguments.length > 1 ? arguments[1] : undefined;

    _classCallCheck(this, FocusOnlyKeyEventStrategy);

    /**
     * Set state that DOES get cleared on each new focus tree
     */
    _this = _possibleConstructorReturn(this, _getPrototypeOf(FocusOnlyKeyEventStrategy).call(this, configuration, keyEventManager));
    /**
     * State that doesn't get cleared on each new focus tree
     */

    /**
     * Unique identifier given to each focus tree - when the focus in the browser
     * changes, and a different tree of elements are focused, a new id is allocated
     * @typedef {number} FocusTreeId
     */

    /**
     * Counter to keep track of what focus tree ID should be allocated next
     * @type {FocusTreeId}
     */

    _this.focusTreeId = 0;
    return _this;
  }
  /**
   * Clears the internal state, wiping any history of key events and registered handlers
   * so they have no effect on the next tree of focused HotKeys components
   * @private
   */


  _createClass(FocusOnlyKeyEventStrategy, [{
    key: "_reset",
    value: function _reset() {
      _get(_getPrototypeOf(FocusOnlyKeyEventStrategy.prototype), "_reset", this).call(this);

      this.keypressEventsToSimulate = [];
      /**
       * Increase the unique ID associated with each unique focus tree
       * @type {number}
       */

      this.focusTreeId += 1;
      this.eventPropagator = new _EventPropagator.default(this.componentList, {
        logger: this.logger,
        logPrefix: this._logPrefix.bind(this)
      });
    }
    /********************************************************************************
     * Registering key maps and handlers
     ********************************************************************************/

    /**
     * Registers the actions and handlers of a HotKeys component that has gained focus
     * @param {ComponentId} componentId - Id of the component that the keyMap belongs to
     * @param {KeyMap} actionNameToKeyMap - Map of actions to key expressions
     * @param {HandlersMap} actionNameToHandlersMap - Map of actions to handler functions
     * @param {Object} options Hash of options that configure how the actions
     *        and handlers are associated and called.
     * @returns {FocusTreeId|undefined} The current focus tree's ID or undefined if the
     *        the <tt>componentId</tt> has already been registered (shouldn't normally
     *        occur).
     */

  }, {
    key: "enableHotKeys",
    value: function enableHotKeys(componentId) {
      var actionNameToKeyMap = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var actionNameToHandlersMap = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      var options = arguments.length > 3 ? arguments[3] : undefined;

      if (this.resetOnNextFocus) {
        /**
         * We know components have just lost focus or keymaps have already been built,
         * meaning we are either anticipating a new set of components to be focused or
         * we are receiving notice of a component being focused when we aren't expecting it.
         * In either case, the internal state needs to be reset.
         */
        this._reset();

        this.resetOnNextFocus = false;
      }

      if (this.componentList.containsId(componentId)) {
        /**
         * The <tt>componentId</tt> has already been registered - this occurs when the
         * same component has somehow managed to be focused twice, without being blurred
         * in between.
         *
         * @see https://github.com/greena13/react-hotkeys/issues/173
         */
        return undefined;
      }

      this._addComponent(componentId, actionNameToKeyMap, actionNameToHandlersMap, options);

      this.logger.debug(this._logPrefix(componentId, {
        eventId: false
      }), 'Focused. \n');
      this.logger.verbose(this._logPrefix(componentId, {
        eventId: false
      }), 'Component options:\n', (0, _printComponent.default)(this.componentList.get(componentId)));
      return this.focusTreeId;
    }
    /**
     * Handles when a HotKeys component that is in focus updates its props and changes
     * either the keyMap or handlers prop value
     * @param {FocusTreeId} focusTreeId - The ID of the focus tree the component is part of.
     *        Used to identify (and ignore) stale updates.
     * @param {ComponentId} componentId - The component index of the component to
     *        update
     * @param {KeyMap} actionNameToKeyMap - Map of key sequences to action names
     * @param {HandlersMap} actionNameToHandlersMap - Map of action names to handler
     *        functions
     * @param {Object} options Hash of options that configure how the actions
     *        and handlers are associated and called.
     */

  }, {
    key: "updateEnabledHotKeys",
    value: function updateEnabledHotKeys(focusTreeId, componentId) {
      var actionNameToKeyMap = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      var actionNameToHandlersMap = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
      var options = arguments.length > 4 ? arguments[4] : undefined;

      if (focusTreeId !== this.focusTreeId || !this.componentList.containsId(componentId)) {
        return;
      }

      this.componentList.update(componentId, actionNameToKeyMap, actionNameToHandlersMap, options);
      this.getKeyHistory().setMaxLength(this.componentList.getLongestSequence());
      this.logger.debug(this._logPrefix(componentId, {
        focusTreeId: focusTreeId,
        eventId: false
      }), 'Received new props.');
      /**
       * Reset handler resolution state
       */

      this._initHandlerResolutionState();

      this.logger.verbose(this._logPrefix(componentId, {
        focusTreeId: focusTreeId,
        eventId: false
      }), 'Component options:\n', (0, _printComponent.default)(this.componentList.get(componentId)));
    }
    /**
     * Handles when a component loses focus by resetting the internal state, ready to
     * receive the next tree of focused HotKeys components
     * @param {FocusTreeId} focusTreeId - Id of focus tree component thinks it's
     *        apart of
     * @param {ComponentId} componentId - Index of component that is blurring
     * @returns {boolean} Whether the component still has event propagation yet to handle
     */

  }, {
    key: "disableHotKeys",
    value: function disableHotKeys(focusTreeId, componentId) {
      if (!this.resetOnNextFocus) {
        this.resetOnNextFocus = true;
      }

      var outstandingEventPropagation = this.eventPropagator.isPendingPropagation();
      this.logger.debug("".concat(this._logPrefix(componentId, {
        focusTreeId: focusTreeId,
        eventId: false
      })), "Lost focus".concat(outstandingEventPropagation ? ' (Key event has yet to propagate through it)' : '', "."));
      return outstandingEventPropagation;
    }
    /********************************************************************************
     * Recording key events
     ********************************************************************************/

    /**
     * @typedef {KeyboardEvent} SyntheticKeyboardEvent
     * @property {function} persist
     */

    /**
     * Records a keydown keyboard event and matches it against the list of pre-registered
     * event handlers, calling the first matching handler with the highest priority if
     * one exists.
     *
     * This method is called many times as a keyboard event bubbles up through the React
     * render tree. The event is only registered the first time it is seen and results
     * of some calculations are cached. The event is matched against the handlers registered
     * at each component level, to ensure the proper handler declaration scoping.
     * @param {SyntheticKeyboardEvent} event - Event containing the key name and state
     * @param {FocusTreeId} focusTreeId - Id of focus tree component thinks it's apart of
     * @param {ComponentId} componentId - The id of the component that is currently handling
     *        the keyboard event as it bubbles towards the document root.
     * @param {Object} options - Hash of options that configure how the event is handled.
     * @returns Whether the event was discarded because it was part of an old focus tree
     */

  }, {
    key: "handleKeydown",
    value: function handleKeydown(event, focusTreeId, componentId) {
      var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
      var key = (0, _getKeyName.default)(event);

      if (focusTreeId !== this.focusTreeId) {
        this.logger.debug(this._logPrefix(componentId), "Ignored ".concat((0, _describeKeyEvent.default)(event, key, _KeyEventType.default.keydown), " event because it had an old focus tree id: ").concat(focusTreeId, "."));
        this.eventPropagator.ignoreEvent(event);
        return true;
      }

      var started = this.eventPropagator.startNewPropagationStep(componentId, event, key, _KeyEventType.default.keydown);

      if (!started) {
        return;
      }

      var responseAction = this._howToHandleKeyEvent(event, focusTreeId, componentId, key, options, _KeyEventType.default.keydown);

      if (responseAction === _EventResponse.default.handled) {
        var keyEventState = (0, _stateFromEvent.default)(event);
        var currentCombination = this.getCurrentCombination();

        if (currentCombination.isKeyIncluded(key) || currentCombination.isEnding()) {
          this._startAndLogNewKeyCombination(key, focusTreeId, componentId, keyEventState);
        } else {
          this._addToAndLogCurrentKeyCombination(key, _KeyEventType.default.keydown, focusTreeId, componentId, keyEventState);
        }

        this._callHandlerIfActionNotHandled(event, key, _KeyEventType.default.keydown, componentId, focusTreeId);
      }

      this._simulateKeyPressForNonPrintableKeys(event, key, focusTreeId, componentId, options);

      this.eventPropagator.finishPropagationStep();
      return false;
    }
  }, {
    key: "_howToHandleKeyEvent",
    value: function _howToHandleKeyEvent(event, focusTreeId, componentId, key, options, keyEventType) {
      if (this.eventPropagator.isFirstPropagationStep()) {
        if (options.ignoreEventsCondition(event) && this.eventPropagator.ignoreEvent(event)) {
          return this._eventIsToBeIgnored(event, componentId, key, keyEventType);
        }

        this.logger.debug(this._logPrefix(componentId), "New ".concat((0, _describeKeyEvent.default)(event, key, keyEventType), " event."));

        this._checkForModifierFlagDiscrepancies(event, key, keyEventType);
      } else if (this.eventPropagator.isIgnoringEvent()) {
        return this._eventIsToBeIgnored(event, componentId, key, keyEventType);
      }

      return _EventResponse.default.handled;
    }
  }, {
    key: "_eventIsToBeIgnored",
    value: function _eventIsToBeIgnored(event, componentId, key, keyEventType) {
      this.logger.debug(this._logPrefix(componentId), "Ignored ".concat((0, _describeKeyEvent.default)(event, key, keyEventType), " event because ignoreEventsFilter rejected it."));
      return _EventResponse.default.ignored;
    }
    /**
     * Records a keypress keyboard event and matches it against the list of pre-registered
     * event handlers, calling the first matching handler with the highest priority if
     * one exists.
     *
     * This method is called many times as a keyboard event bubbles up through the React
     * render tree. The event is only registered the first time it is seen and results
     * of some calculations are cached. The event is matched against the handlers registered
     * at each component level, to ensure the proper handler declaration scoping.
     * @param {KeyboardEvent} event - Event containing the key name and state
     * @param {FocusTreeId} focusTreeId Id - of focus tree component thinks it's apart of
     * @param {ComponentId} componentId - The index of the component that is currently handling
     *        the keyboard event as it bubbles towards the document root.
     * @param {Object} options - Hash of options that configure how the event
     *        is handled.
     * @returns {boolean} Whether the HotKeys component should discard its current focus
     *        tree Id, because it belongs to an old focus tree.
     */

  }, {
    key: "handleKeyPress",
    value: function handleKeyPress(event, focusTreeId, componentId, options) {
      var key = (0, _getKeyName.default)(event);
      var currentCombination = this.getCurrentCombination();

      if (currentCombination.isKeyPressSimulated(key)) {
        this.logger.debug(this._logPrefix(componentId), "Ignored ".concat((0, _describeKeyEvent.default)(event, key, _KeyEventType.default.keypress), " as it was not expected, and has already been simulated."));
        this.eventPropagator.ignoreEvent(event);
        return true;
      }

      var started = this.eventPropagator.startNewPropagationStep(componentId, event, key, _KeyEventType.default.keypress);

      if (!started) {
        return;
      }

      var shouldDiscardFocusTreeId = focusTreeId !== this.focusTreeId;
      /**
       * We first decide if the keypress event should be handled (to ensure the correct
       * order of logging statements)
       */

      var responseAction = this._howToHandleKeyEvent(event, focusTreeId, componentId, key, options, _KeyEventType.default.keypress);

      if (this.eventPropagator.isFirstPropagationStep(componentId) && currentCombination.isKeyIncluded(key)) {
        this._addToAndLogCurrentKeyCombination(key, _KeyEventType.default.keypress, focusTreeId, componentId, (0, _stateFromEvent.default)(event));
      }
      /**
       * We attempt to find a handler of the event, only if it has not already
       * been handled and should not be ignored
       */


      if (responseAction === _EventResponse.default.handled) {
        this._callHandlerIfActionNotHandled(event, key, _KeyEventType.default.keypress, componentId, focusTreeId);
      }

      this.eventPropagator.finishPropagationStep();
      return shouldDiscardFocusTreeId;
    }
    /**
     * Records a keyup keyboard event and matches it against the list of pre-registered
     * event handlers, calling the first matching handler with the highest priority if
     * one exists.
     *
     * This method is called many times as a keyboard event bubbles up through the React
     * render tree. The event is only registered the first time it is seen and results
     * of some calculations are cached. The event is matched against the handlers registered
     * at each component level, to ensure the proper handler declaration scoping.
     * @param {KeyboardEvent} event Event containing the key name and state
     * @param {FocusTreeId} focusTreeId Id of focus tree component thinks it's apart of
     * @param {ComponentId} componentId The index of the component that is currently handling
     *        the keyboard event as it bubbles towards the document root.
     * @param {Object} options Hash of options that configure how the event
     *        is handled.
     * @returns {boolean} Whether HotKeys component should discard its current focusTreeId
     *        because it's stale (part of an old focus tree)
     */

  }, {
    key: "handleKeyUp",
    value: function handleKeyUp(event, focusTreeId, componentId, options) {
      var key = (0, _getKeyName.default)(event);
      var currentCombination = this.getCurrentCombination();

      if (currentCombination.isKeyUpSimulated(key)) {
        this.logger.debug(this._logPrefix(componentId), "Ignored ".concat((0, _describeKeyEvent.default)(event, key, _KeyEventType.default.keyup), " as it was not expected, and has already been simulated."));
        this.eventPropagator.ignoreEvent(event);
        return true;
      }

      var started = this.eventPropagator.startNewPropagationStep(componentId, event, key, _KeyEventType.default.keyup);

      if (!started) {
        return;
      }

      var shouldDiscardFocusId = focusTreeId !== this.focusTreeId;
      /**
       * We first decide if the keyup event should be handled (to ensure the correct
       * order of logging statements)
       */

      var responseAction = this._howToHandleKeyEvent(event, focusTreeId, componentId, key, options, _KeyEventType.default.keyup);
      /**
       * We then add the keyup to our current combination - regardless of whether
       * it's to be handled or not. We need to do this to ensure that if a handler
       * function changes focus to a context that ignored events, the keyup event
       * is not lost (leaving react hotkeys thinking the key is still pressed).
       */


      if (this.eventPropagator.isFirstPropagationStep(componentId) && currentCombination.isKeyIncluded(key)) {
        this._addToAndLogCurrentKeyCombination(key, _KeyEventType.default.keyup, focusTreeId, componentId, (0, _stateFromEvent.default)(event));
      }
      /**
       * We attempt to find a handler of the event, only if it has not already
       * been handled and should not be ignored
       */


      if (responseAction === _EventResponse.default.handled) {
        this._callHandlerIfActionNotHandled(event, key, _KeyEventType.default.keyup, componentId, focusTreeId);
      }
      /**
       * We simulate any hidden keyup events hidden by the command key, regardless
       * of whether the event should be ignored or not
       */


      this._simulateKeyUpEventsHiddenByCmd(event, key, focusTreeId, componentId, options);

      this.eventPropagator.finishPropagationStep();
      return shouldDiscardFocusId;
    }
    /**
     * Closes any hanging key combinations that have not received the key event indicated
     * by recordIndex.
     * @param {KeyName} keyName The name of the key whose state should be updated if it
     *        is currently set to keydown or keypress.
     * @param {KeyEventType} recordIndex Index of key event to move the key state
     *        up to.
     */

  }, {
    key: "closeHangingKeyCombination",
    value: function closeHangingKeyCombination(keyName, recordIndex) {
      var currentCombination = this.getCurrentCombination();

      if (currentCombination.isKeyIncluded(keyName) && !currentCombination.isEventTriggered(keyName, recordIndex)) {
        /**
         * If the key is in the current combination and recorded as still being pressed
         * down (as either keydown or keypress), then we update the state
         * to keypress or keyup (depending on the value of recordIndex).
         */
        currentCombination.setKeyState(keyName, recordIndex, _KeyEventState.default.simulated);
      }
    }
  }, {
    key: "_simulateKeyPressForNonPrintableKeys",
    value: function _simulateKeyPressForNonPrintableKeys(event, key, focusTreeId, componentId, options) {
      this._handleEventSimulation('keypressEventsToSimulate', 'simulatePendingKeyPressEvents', this._shouldSimulate(_KeyEventType.default.keypress, key), {
        event: event,
        key: key,
        focusTreeId: focusTreeId,
        componentId: componentId,
        options: options
      });
    }
  }, {
    key: "_simulateKeyUpEventsHiddenByCmd",
    value: function _simulateKeyUpEventsHiddenByCmd(event, key, focusTreeId, componentId, options) {
      var _this2 = this;

      if ((0, _isCmdKey.default)(key)) {
        this.getCurrentCombination().forEachKey(function (keyName) {
          if ((0, _isCmdKey.default)(keyName)) {
            return;
          }

          _this2._handleEventSimulation('keyupEventsToSimulate', 'simulatePendingKeyUpEvents', _this2._shouldSimulate(_KeyEventType.default.keyup, keyName), {
            event: event,
            key: keyName,
            focusTreeId: focusTreeId,
            componentId: componentId,
            options: options
          });
        });
      }
    }
  }, {
    key: "_stopEventPropagation",
    value: function _stopEventPropagation(event, componentId) {
      if (this.eventPropagator.stop(event)) {
        this.logger.debug(this._logPrefix(componentId), 'Stopping further event propagation.');
      }
    }
  }, {
    key: "getEventPropagator",
    value: function getEventPropagator() {
      return this.eventPropagator;
    }
  }, {
    key: "_startAndLogNewKeyCombination",
    value: function _startAndLogNewKeyCombination(keyName, focusTreeId, componentId, keyEventState) {
      this.getKeyHistory().startNewKeyCombination(keyName, keyEventState);
      this.logger.verbose(this._logPrefix(componentId, {
        focusTreeId: focusTreeId
      }), "Started a new combination with '".concat(keyName, "'."));
      this.logger.verbose(this._logPrefix(componentId, {
        focusTreeId: focusTreeId
      }), "Key history: ".concat((0, _printComponent.default)(this.getKeyHistory().toJSON()), "."));
    }
  }, {
    key: "_addToAndLogCurrentKeyCombination",
    value: function _addToAndLogCurrentKeyCombination(keyName, keyEventType, focusTreeId, componentId, keyEventState) {
      this.getKeyHistory().addKeyToCurrentCombination(keyName, keyEventType, keyEventState);

      if (keyEventType === _KeyEventType.default.keydown) {
        this.logger.verbose(this._logPrefix(componentId, {
          focusTreeId: focusTreeId
        }), "Added '".concat(keyName, "' to current combination: '").concat(this.getCurrentCombination().describe(), "'."));
      }

      this.logger.verbose(this._logPrefix(componentId, {
        focusTreeId: focusTreeId
      }), "Key history: ".concat((0, _printComponent.default)(this.getKeyHistory().toJSON()), "."));
    }
    /********************************************************************************
     * Event simulation
     ********************************************************************************/

  }, {
    key: "_handleEventSimulation",
    value: function _handleEventSimulation(listName, handlerName, shouldSimulate, _ref) {
      var event = _ref.event,
          key = _ref.key,
          focusTreeId = _ref.focusTreeId,
          componentId = _ref.componentId,
          options = _ref.options;

      if (shouldSimulate && _Configuration.default.option('simulateMissingKeyPressEvents')) {
        /**
         * If a key does not have a keypress event, we save the details of the keydown
         * event to simulate the keypress event, as the keydown event bubbles through
         * the last focus-only HotKeysComponent
         */
        var _event = this._cloneAndMergeEvent(event, {
          key: key,
          simulated: true
        });

        this[listName].push({
          event: _event,
          focusTreeId: focusTreeId,
          componentId: componentId,
          options: options
        });
      }

      if (this.componentList.isRoot(componentId) || this.eventPropagator.isStopped()) {
        if (!this.keyEventManager.isGlobalListenersBound()) {
          this[handlerName]();
        }
        /**
         * else, we wait for keydown event to propagate through global strategy
         * before we simulate the keypress
         */

      }
    }
  }, {
    key: "simulatePendingKeyPressEvents",
    value: function simulatePendingKeyPressEvents() {
      this._simulatePendingKeyEvents('keypressEventsToSimulate', 'handleKeyPress');
    }
  }, {
    key: "simulatePendingKeyUpEvents",
    value: function simulatePendingKeyUpEvents() {
      this._simulatePendingKeyEvents('keyupEventsToSimulate', 'handleKeyUp');
    }
  }, {
    key: "_simulatePendingKeyEvents",
    value: function _simulatePendingKeyEvents(listName, handlerName) {
      var _this3 = this;

      if (this[listName].length > 0) {
        _KeyEventCounter.default.incrementId();
      }

      this[listName].forEach(function (_ref2) {
        var event = _ref2.event,
            focusTreeId = _ref2.focusTreeId,
            componentId = _ref2.componentId,
            options = _ref2.options;

        _this3[handlerName](event, focusTreeId, componentId, options);
      });
      this[listName] = [];
    }
    /********************************************************************************
     * Matching and calling handlers
     ********************************************************************************/

    /**
     * Calls the first handler that matches the current key event if the action has not
     * already been handled in a more deeply nested component
     * @param {KeyboardEvent} event Keyboard event object to be passed to the handler
     * @param {NormalizedKeyName} keyName Normalized key name
     * @param {KeyEventType} keyEventType The record index of the current key event type
     * @param {FocusTreeId} focusTreeId Id of focus tree component thinks it's apart of
     * @param {ComponentId} componentId Index of the component that is currently handling
     *        the keyboard event
     * @private
     */

  }, {
    key: "_callHandlerIfActionNotHandled",
    value: function _callHandlerIfActionNotHandled(event, keyName, keyEventType, componentId, focusTreeId) {
      var eventName = (0, _describeKeyEventType.default)(keyEventType);
      var combinationName = this.getCurrentCombination().describe();

      if (!this.componentList.anyActionsForEventType(keyEventType)) {
        this.logger.verbose(this._logPrefix(componentId, {
          focusTreeId: focusTreeId
        }), "Ignored '".concat(combinationName, "' ").concat(eventName, " because it doesn't have any ").concat(eventName, " handlers."));
        return;
      }

      if (this.eventPropagator.isHandled()) {
        this.logger.debug(this._logPrefix(componentId, {
          focusTreeId: focusTreeId
        }), "Ignored '".concat(combinationName, "' ").concat(eventName, " as it has already been handled."));
      } else {
        this.logger.verbose(this._logPrefix(componentId, {
          focusTreeId: focusTreeId
        }), "Attempting to find action matching '".concat(combinationName, "' ").concat(eventName, " . . ."));
        var previousComponentPosition = this.eventPropagator.getPreviousPosition();
        var componentPosition = this.componentList.getIndexById(componentId);

        var handlerWasCalled = this._callClosestMatchingHandler(event, keyName, keyEventType, componentPosition, previousComponentPosition === -1 ? 0 : previousComponentPosition);

        if (handlerWasCalled) {
          this.eventPropagator.setHandled();
        }
      }
    }
    /********************************************************************************
     * Logging
     ********************************************************************************/

  }, {
    key: "_logPrefix",
    value: function _logPrefix(componentId) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var logIcons = _Logger.default.logIcons;
      var eventIcons = _Logger.default.eventIcons;
      var componentIcons = _Logger.default.componentIcons;
      var base = 'HotKeys (';

      if (options.focusTreeId !== false) {
        var focusTreeId = (0, _isUndefined.default)(options.focusTreeId) ? this.focusTreeId : options.focusTreeId;
        base += "F".concat(focusTreeId).concat(logIcons[focusTreeId % logIcons.length], "-");
      }

      if (options.eventId !== false) {
        var eventId = (0, _isUndefined.default)(options.eventId) ? _KeyEventCounter.default.getId() : options.eventId;
        base += "E".concat(eventId).concat(eventIcons[eventId % eventIcons.length], "-");
      }

      base += "C".concat(componentId).concat(componentIcons[componentId % componentIcons.length]);
      var position = this.componentList.getIndexById(componentId);

      if (!(0, _isUndefined.default)(position)) {
        base += "-P".concat(position).concat(componentIcons[position % componentIcons.length], ":");
      }

      return "".concat(base, ")");
    }
  }]);

  return FocusOnlyKeyEventStrategy;
}(_AbstractKeyEventStrategy.default);

var _default = FocusOnlyKeyEventStrategy;
exports.default = _default;
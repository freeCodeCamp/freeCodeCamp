"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _KeyEventType = _interopRequireDefault(require("../../const/KeyEventType"));

var _ModifierFlagsDictionary = _interopRequireDefault(require("../../const/ModifierFlagsDictionary"));

var _Logger = _interopRequireDefault(require("../logging/Logger"));

var _KeyCombinationSerializer = _interopRequireDefault(require("../shared/KeyCombinationSerializer"));

var _Configuration = _interopRequireDefault(require("../config/Configuration"));

var _KeyHistory = _interopRequireDefault(require("../listening/KeyHistory"));

var _KeyCombination = _interopRequireDefault(require("../listening/KeyCombination"));

var _ComponentTree = _interopRequireDefault(require("../definitions/ComponentTree"));

var _ComponentOptionsList = _interopRequireDefault(require("../definitions/ComponentOptionsList"));

var _ActionResolver = _interopRequireDefault(require("../matching/ActionResolver"));

var _arrayFrom = _interopRequireDefault(require("../../utils/array/arrayFrom"));

var _isObject = _interopRequireDefault(require("../../utils/object/isObject"));

var _isUndefined = _interopRequireDefault(require("../../utils/isUndefined"));

var _copyAttributes = _interopRequireDefault(require("../../utils/object/copyAttributes"));

var _hasKey = _interopRequireDefault(require("../../utils/object/hasKey"));

var _describeKeyEventType = _interopRequireDefault(require("../../helpers/logging/describeKeyEventType"));

var _printComponent = _interopRequireDefault(require("../../helpers/logging/printComponent"));

var _hasKeyPressEvent = _interopRequireDefault(require("../../helpers/resolving-handlers/hasKeyPressEvent"));

var _keyupIsHiddenByCmd = _interopRequireDefault(require("../../helpers/resolving-handlers/keyupIsHiddenByCmd"));

var _stateFromEvent = _interopRequireDefault(require("../../helpers/parsing-key-maps/stateFromEvent"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var SEQUENCE_ATTRIBUTES = ['sequence', 'action'];
var KEYMAP_ATTRIBUTES = ['name', 'description', 'group'];
/**
 * Defines common behaviour for key event strategies
 * @abstract
 * @class
 */

var AbstractKeyEventStrategy =
/*#__PURE__*/
function () {
  /********************************************************************************
   * Init & Reset
   ********************************************************************************/

  /**
   * Creates a new instance of an event strategy (this class is an abstract one and
   * not intended to be instantiated directly).
   * @param {Object} options Options for how event strategy should behave
   * @param {Logger} options.logger The Logger to use to report event strategy actions
   * @param {KeyEventManager} keyEventManager KeyEventManager used for passing
   *        messages between key event strategies
   */
  function AbstractKeyEventStrategy() {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var keyEventManager = arguments.length > 1 ? arguments[1] : undefined;

    _classCallCheck(this, AbstractKeyEventStrategy);

    this.logger = options.logger || new _Logger.default('warn');
    /**
     * @typedef {number} ComponentId Unique index associated with every HotKeys component
     * as it becomes active.
     *
     * For focus-only components, this happens when the component is focused. The HotKeys
     * component closest to the DOM element in focus gets the smallest number (0) and
     * those further up the render tree get larger (incrementing) numbers. When a different
     * element is focused (triggering the creation of a new focus tree) all component indexes
     * are reset (de-allocated) and re-assigned to the new tree of HotKeys components that
     * are now in focus.
     *
     * For global components, component indexes are assigned when a HotKeys component is
     * mounted, and de-allocated when it unmounts. The component index counter is never reset
     * back to 0 and just keeps incrementing as new components are mounted.
     */

    /**
     * Counter to maintain what the next component index should be
     * @type {ComponentId}
     */

    this.componentId = -1;
    /**
     * Reference to key event manager, so that information may pass between the
     * global strategy and the focus-only strategy
     * @type {KeyEventManager}
     */

    this.keyEventManager = keyEventManager;
    this._componentTree = new _ComponentTree.default();
    this.rootComponentId = null;

    this._reset();

    this.resetKeyHistory();
  }
  /**
   * Resets all strategy state to the values it had when it was first created
   * @protected
   */


  _createClass(AbstractKeyEventStrategy, [{
    key: "_reset",
    value: function _reset() {
      this.componentList = new _ComponentOptionsList.default();

      this._initHandlerResolutionState();
    }
  }, {
    key: "_newKeyHistory",
    value: function _newKeyHistory() {
      return new _KeyHistory.default({
        maxLength: this.componentList.getLongestSequence()
      });
    }
  }, {
    key: "getKeyHistory",
    value: function getKeyHistory() {
      if (this._keyHistory) {
        return this._keyHistory;
      } else {
        this._keyHistory = this._newKeyHistory();
      }

      return this._keyHistory;
    }
    /**
     * Resets the state of the values used to resolve which handler function should be
     * called when key events match a registered key map
     * @protected
     */

  }, {
    key: "_initHandlerResolutionState",
    value: function _initHandlerResolutionState() {
      this._actionResolver = null;
    }
    /**
     * Reset the state values that record the current and recent state of key events
     * @param {Object} options An options hash
     * @param {boolean} options.force Whether to force a hard reset of the key
     *        combination history.
     */

  }, {
    key: "resetKeyHistory",
    value: function resetKeyHistory() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      this.keypressEventsToSimulate = [];
      this.keyupEventsToSimulate = [];

      if (this.getKeyHistory().any() && !options.force) {
        this._keyHistory = new _KeyHistory.default({
          maxLength: this.componentList.getLongestSequence()
        }, new _KeyCombination.default(this.getCurrentCombination().keysStillPressedDict()));
      } else {
        this._keyHistory = this._newKeyHistory();
      }
    }
    /********************************************************************************
     * Generating key maps
     ********************************************************************************/

    /**
     * Returns a mapping of all of the application's actions and the key sequences
     * needed to trigger them.
     *
     * @returns {ApplicationKeyMap} The application's key map
     */

  }, {
    key: "getApplicationKeyMap",
    value: function getApplicationKeyMap() {
      if (this.rootComponentId === null) {
        return {};
      }

      return this._buildApplicationKeyMap([this.rootComponentId], {});
    }
  }, {
    key: "_buildApplicationKeyMap",
    value: function _buildApplicationKeyMap(componentIds, keyMapSummary) {
      var _this = this;

      componentIds.forEach(function (componentId) {
        var _this$_componentTree$ = _this._componentTree.get(componentId),
            childIds = _this$_componentTree$.childIds,
            keyMap = _this$_componentTree$.keyMap;

        if (keyMap) {
          Object.keys(keyMap).forEach(function (actionName) {
            var keyMapConfig = keyMap[actionName];
            keyMapSummary[actionName] = {};

            if ((0, _isObject.default)(keyMapConfig)) {
              if ((0, _hasKey.default)(keyMapConfig, 'sequences')) {
                /**
                 * Support syntax:
                 *  {
                 *    sequences: [ {sequence: 'a+b', action: 'keyup' }],
                 *    name: 'My keymap',
                 *    description: 'Key to press for something special',
                 *    group: 'Vanity'
                 *  }
                 */
                (0, _copyAttributes.default)(keyMapConfig, keyMapSummary[actionName], KEYMAP_ATTRIBUTES);
                keyMapSummary[actionName].sequences = _this._createSequenceFromConfig(keyMapConfig.sequences);
              } else {
                /**
                 * Support syntax:
                 * {
                 *   sequence: 'a+b', action: 'keyup',
                 *   name: 'My keymap',
                 *   description: 'Key to press for something special',
                 *   group: 'Vanity'
                 * }
                 */
                (0, _copyAttributes.default)(keyMapConfig, keyMapSummary[actionName], KEYMAP_ATTRIBUTES);
                keyMapSummary[actionName].sequences = [(0, _copyAttributes.default)(keyMapConfig, {}, SEQUENCE_ATTRIBUTES)];
              }
            } else {
              keyMapSummary[actionName].sequences = _this._createSequenceFromConfig(keyMapConfig);
            }
          });
        }

        _this._buildApplicationKeyMap(childIds, keyMapSummary);
      });
      return keyMapSummary;
    }
  }, {
    key: "_createSequenceFromConfig",
    value: function _createSequenceFromConfig(keyMapConfig) {
      return (0, _arrayFrom.default)(keyMapConfig).map(function (sequenceOrKeyMapOptions) {
        if ((0, _isObject.default)(sequenceOrKeyMapOptions)) {
          /**
           * Support syntax:
           * [
           *   { sequence: 'a+b', action: 'keyup' },
           *   { sequence: 'c' }
           * ]
           */
          return (0, _copyAttributes.default)(sequenceOrKeyMapOptions, {}, SEQUENCE_ATTRIBUTES);
        } else {
          /**
           * Support syntax:
           * 'a+b'
           */
          return {
            sequence: sequenceOrKeyMapOptions
          };
        }
      });
    }
    /********************************************************************************
     * Registering key maps
     ********************************************************************************/

    /**
     * Registers a new mounted component's key map so that it can be included in the
     * application's key map
     * @param {KeyMap} keyMap - Map of actions to key expressions
     * @returns {ComponentId} Unique component ID to assign to the focused HotKeys
     *          component and passed back when handling a key event
     */

  }, {
    key: "registerKeyMap",
    value: function registerKeyMap(keyMap) {
      this.componentId += 1;

      this._componentTree.add(this.componentId, keyMap);

      this.logger.verbose(this._logPrefix(this.componentId), 'Registered component:\n', "".concat((0, _printComponent.default)(this._componentTree.get(this.componentId))));
      return this.componentId;
    }
    /**
     * Re-registers (updates) a mounted component's key map
     * @param {ComponentId} componentId - Id of the component that the keyMap belongs to
     * @param {KeyMap} keyMap - Map of actions to key expressions
     */

  }, {
    key: "reregisterKeyMap",
    value: function reregisterKeyMap(componentId, keyMap) {
      this._componentTree.update(componentId, keyMap);
    }
    /**
     * Registers that a component has now mounted, and declares its parent hot keys
     * component id so that actions may be properly resolved
     * @param {ComponentId} componentId - Id of the component that has mounted
     * @param {ComponentId} parentId - Id of the parent hot keys component
     */

  }, {
    key: "registerComponentMount",
    value: function registerComponentMount(componentId, parentId) {
      if (!(0, _isUndefined.default)(parentId)) {
        this._componentTree.setParent(componentId, parentId);
      } else {
        this.rootComponentId = componentId;
      }

      this.logger.verbose(this._logPrefix(componentId), 'Registered component mount:\n', "".concat((0, _printComponent.default)(this._componentTree.get(componentId))));
    }
    /**
     * De-registers (removes) a mounted component's key map from the registry
     * @param {ComponentId} componentId - Id of the component that the keyMap
     *        belongs to
     */

  }, {
    key: "deregisterKeyMap",
    value: function deregisterKeyMap(componentId) {
      this._componentTree.remove(componentId);

      this.logger.verbose(this._logPrefix(componentId), 'De-registered component. Remaining component Registry:\n', "".concat((0, _printComponent.default)(this._componentTree.toJSON())));

      if (componentId === this.rootComponentId) {
        this.rootComponentId = null;
      }
    }
    /********************************************************************************
     * Registering key maps and handlers
     ********************************************************************************/

    /**
     * Registers the hotkeys defined by a HotKeys component
     * @param {ComponentId} componentId - Index of the component
     * @param {KeyMap} actionNameToKeyMap - Definition of actions and key maps defined
     *        in the HotKeys component
     * @param {HandlersMap} actionNameToHandlersMap - Map of ActionNames to handlers
     *        defined in the HotKeys component
     * @param {Object} options - Hash of options that configure how the key map is built.
     * @protected
     */

  }, {
    key: "_addComponent",
    value: function _addComponent(componentId) {
      var actionNameToKeyMap = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var actionNameToHandlersMap = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      var options = arguments.length > 3 ? arguments[3] : undefined;
      this.componentList.add(componentId, actionNameToKeyMap, actionNameToHandlersMap, options);
      this.getKeyHistory().setMaxLength(this.componentList.getLongestSequence());
    }
    /********************************************************************************
     * Recording key events
     ********************************************************************************/

    /**
     * Whether there are any keys in the current combination still being pressed
     * @returns {boolean} True if all keys in the current combination are released
     * @protected
     */

  }, {
    key: "_allKeysAreReleased",
    value: function _allKeysAreReleased() {
      return this.getCurrentCombination().hasEnded();
    }
  }, {
    key: "getCurrentCombination",
    value: function getCurrentCombination() {
      return this.getKeyHistory().getCurrentCombination();
    }
  }, {
    key: "_shouldSimulate",
    value: function _shouldSimulate(eventType, keyName) {
      var keyHasNativeKeyPress = (0, _hasKeyPressEvent.default)(keyName);
      var currentCombination = this.getCurrentCombination();

      if (eventType === _KeyEventType.default.keypress) {
        return !keyHasNativeKeyPress || keyHasNativeKeyPress && currentCombination.isKeyStillPressed('Meta');
      } else if (eventType === _KeyEventType.default.keyup) {
        return (0, _keyupIsHiddenByCmd.default)(keyName) && currentCombination.isKeyReleased('Meta');
      }

      return false;
    }
  }, {
    key: "_cloneAndMergeEvent",
    value: function _cloneAndMergeEvent(event, extra) {
      var eventAttributes = Object.keys(_ModifierFlagsDictionary.default).reduce(function (memo, eventAttribute) {
        memo[eventAttribute] = event[eventAttribute];
        return memo;
      }, {});
      return _objectSpread({}, eventAttributes, extra);
    }
    /********************************************************************************
     * Matching and calling handlers
     ********************************************************************************/

  }, {
    key: "_callClosestMatchingHandler",
    value: function _callClosestMatchingHandler(event, keyName, keyEventType, componentPosition, componentSearchIndex) {
      if (!this._actionResolver) {
        this._actionResolver = new _ActionResolver.default(this.componentList);
      }

      while (componentSearchIndex <= componentPosition) {
        var keyHistoryMatcher = this._actionResolver.getKeyHistoryMatcher(componentSearchIndex);

        this.logger.verbose(this._logPrefix(componentSearchIndex), 'Internal key mapping:\n', "".concat((0, _printComponent.default)(keyHistoryMatcher.toJSON())));

        var sequenceMatch = this._actionResolver.findMatchingKeySequenceInComponent(componentSearchIndex, this.getKeyHistory(), keyName, keyEventType);

        var currentCombination = this.getCurrentCombination();

        if (sequenceMatch) {
          var eventSchema = sequenceMatch.events[keyEventType];

          if (_Configuration.default.option('allowCombinationSubmatches')) {
            var subMatchDescription = _KeyCombinationSerializer.default.serialize(sequenceMatch.keyDictionary);

            this.logger.debug(this._logPrefix(componentSearchIndex), "Found action that matches '".concat(currentCombination.describe(), "' (sub-match: '").concat(subMatchDescription, "'): ").concat(eventSchema.actionName, ". Calling handler . . ."));
          } else {
            this.logger.debug(this._logPrefix(componentSearchIndex), "Found action that matches '".concat(currentCombination.describe(), "': ").concat(eventSchema.actionName, ". Calling handler . . ."));
          }

          eventSchema.handler(event);

          this._stopEventPropagationAfterHandlingIfEnabled(event, componentSearchIndex);

          return true;
        } else {
          if (this._actionResolver.componentHasActionsBoundToEventType(componentSearchIndex, keyEventType)) {
            var eventName = (0, _describeKeyEventType.default)(keyEventType);
            this.logger.debug(this._logPrefix(componentSearchIndex), "No matching actions found for '".concat(currentCombination.describe(), "' ").concat(eventName, "."));
          } else {
            this.logger.debug(this._logPrefix(componentSearchIndex), "Doesn't define a handler for '".concat(currentCombination.describe(), "' ").concat((0, _describeKeyEventType.default)(keyEventType), "."));
          }
        }

        componentSearchIndex++;
      }
    }
  }, {
    key: "_stopEventPropagationAfterHandlingIfEnabled",
    value: function _stopEventPropagationAfterHandlingIfEnabled(event, componentId) {
      if (_Configuration.default.option('stopEventPropagationAfterHandling')) {
        this._stopEventPropagation(event, componentId);

        return true;
      }

      return false;
    }
  }, {
    key: "_stopEventPropagation",
    value: function _stopEventPropagation(event, componentId) {
      throw new Error('_stopEventPropagation must be overridden by a subclass');
    }
    /**
     * Synchronises the key combination history to match the modifier key flag attributes
     * on new key events
     * @param {KeyboardEvent} event - Event to check the modifier flags for
     * @param {string} key - Name of key that events relates to
     * @param {KeyEventType} keyEventType - The record index of the current
     *        key event type
     * @protected
     */

  }, {
    key: "_checkForModifierFlagDiscrepancies",
    value: function _checkForModifierFlagDiscrepancies(event, key, keyEventType) {
      var _this2 = this;

      /**
       * If a new key event is received with modifier key flags that contradict the
       * key combination history we are maintaining, we can surmise that some keyup events
       * for those modifier keys have been lost (possibly because the window lost focus).
       * We update the key combination to match the modifier flags
       */
      Object.keys(_ModifierFlagsDictionary.default).forEach(function (modifierKey) {
        /**
         * When a modifier key is being released (keyup), it sets its own modifier flag
         * to false. (e.g. On the keyup event for Command, the metaKey attribute is false).
         * If this the case, we want to handle it using the main algorithm and skip the
         * reconciliation algorithm.
         */
        if (key === modifierKey && keyEventType === _KeyEventType.default.keyup) {
          return;
        }

        var currentCombination = _this2.getCurrentCombination();

        var modifierStillPressed = currentCombination.isKeyStillPressed(modifierKey);

        _ModifierFlagsDictionary.default[modifierKey].forEach(function (attributeName) {
          if (event[attributeName] === false && modifierStillPressed) {
            currentCombination.setKeyState(modifierKey, _KeyEventType.default.keyup, (0, _stateFromEvent.default)(event));
          }
        });
      });
    }
    /**
     * Returns a prefix for all log entries related to the current event strategy
     * @protected
     * @abstract
     */

  }, {
    key: "_logPrefix",
    value: function _logPrefix() {}
  }]);

  return AbstractKeyEventStrategy;
}();

var _default = AbstractKeyEventStrategy;
exports.default = _default;
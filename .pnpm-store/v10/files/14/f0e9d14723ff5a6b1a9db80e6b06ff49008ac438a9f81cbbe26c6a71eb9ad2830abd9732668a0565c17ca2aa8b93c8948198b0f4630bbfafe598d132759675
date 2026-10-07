function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

import KeyEventType from '../../const/KeyEventType';
import ModifierFlagsDictionary from '../../const/ModifierFlagsDictionary';
import Logger from '../logging/Logger';
import KeyCombinationSerializer from '../shared/KeyCombinationSerializer';
import Configuration from '../config/Configuration';
import KeyHistory from '../listening/KeyHistory';
import KeyCombination from '../listening/KeyCombination';
import ComponentTree from '../definitions/ComponentTree';
import ComponentOptionsList from '../definitions/ComponentOptionsList';
import ActionResolver from '../matching/ActionResolver';
import arrayFrom from '../../utils/array/arrayFrom';
import isObject from '../../utils/object/isObject';
import isUndefined from '../../utils/isUndefined';
import copyAttributes from '../../utils/object/copyAttributes';
import hasKey from '../../utils/object/hasKey';
import describeKeyEventType from '../../helpers/logging/describeKeyEventType';
import printComponent from '../../helpers/logging/printComponent';
import hasKeyPressEvent from '../../helpers/resolving-handlers/hasKeyPressEvent';
import keyupIsHiddenByCmd from '../../helpers/resolving-handlers/keyupIsHiddenByCmd';
import stateFromEvent from '../../helpers/parsing-key-maps/stateFromEvent';
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

    this.logger = options.logger || new Logger('warn');
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
    this._componentTree = new ComponentTree();
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
      this.componentList = new ComponentOptionsList();

      this._initHandlerResolutionState();
    }
  }, {
    key: "_newKeyHistory",
    value: function _newKeyHistory() {
      return new KeyHistory({
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
        this._keyHistory = new KeyHistory({
          maxLength: this.componentList.getLongestSequence()
        }, new KeyCombination(this.getCurrentCombination().keysStillPressedDict()));
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

            if (isObject(keyMapConfig)) {
              if (hasKey(keyMapConfig, 'sequences')) {
                /**
                 * Support syntax:
                 *  {
                 *    sequences: [ {sequence: 'a+b', action: 'keyup' }],
                 *    name: 'My keymap',
                 *    description: 'Key to press for something special',
                 *    group: 'Vanity'
                 *  }
                 */
                copyAttributes(keyMapConfig, keyMapSummary[actionName], KEYMAP_ATTRIBUTES);
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
                copyAttributes(keyMapConfig, keyMapSummary[actionName], KEYMAP_ATTRIBUTES);
                keyMapSummary[actionName].sequences = [copyAttributes(keyMapConfig, {}, SEQUENCE_ATTRIBUTES)];
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
      return arrayFrom(keyMapConfig).map(function (sequenceOrKeyMapOptions) {
        if (isObject(sequenceOrKeyMapOptions)) {
          /**
           * Support syntax:
           * [
           *   { sequence: 'a+b', action: 'keyup' },
           *   { sequence: 'c' }
           * ]
           */
          return copyAttributes(sequenceOrKeyMapOptions, {}, SEQUENCE_ATTRIBUTES);
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

      this.logger.verbose(this._logPrefix(this.componentId), 'Registered component:\n', "".concat(printComponent(this._componentTree.get(this.componentId))));
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
      if (!isUndefined(parentId)) {
        this._componentTree.setParent(componentId, parentId);
      } else {
        this.rootComponentId = componentId;
      }

      this.logger.verbose(this._logPrefix(componentId), 'Registered component mount:\n', "".concat(printComponent(this._componentTree.get(componentId))));
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

      this.logger.verbose(this._logPrefix(componentId), 'De-registered component. Remaining component Registry:\n', "".concat(printComponent(this._componentTree.toJSON())));

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
      var keyHasNativeKeyPress = hasKeyPressEvent(keyName);
      var currentCombination = this.getCurrentCombination();

      if (eventType === KeyEventType.keypress) {
        return !keyHasNativeKeyPress || keyHasNativeKeyPress && currentCombination.isKeyStillPressed('Meta');
      } else if (eventType === KeyEventType.keyup) {
        return keyupIsHiddenByCmd(keyName) && currentCombination.isKeyReleased('Meta');
      }

      return false;
    }
  }, {
    key: "_cloneAndMergeEvent",
    value: function _cloneAndMergeEvent(event, extra) {
      var eventAttributes = Object.keys(ModifierFlagsDictionary).reduce(function (memo, eventAttribute) {
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
        this._actionResolver = new ActionResolver(this.componentList);
      }

      while (componentSearchIndex <= componentPosition) {
        var keyHistoryMatcher = this._actionResolver.getKeyHistoryMatcher(componentSearchIndex);

        this.logger.verbose(this._logPrefix(componentSearchIndex), 'Internal key mapping:\n', "".concat(printComponent(keyHistoryMatcher.toJSON())));

        var sequenceMatch = this._actionResolver.findMatchingKeySequenceInComponent(componentSearchIndex, this.getKeyHistory(), keyName, keyEventType);

        var currentCombination = this.getCurrentCombination();

        if (sequenceMatch) {
          var eventSchema = sequenceMatch.events[keyEventType];

          if (Configuration.option('allowCombinationSubmatches')) {
            var subMatchDescription = KeyCombinationSerializer.serialize(sequenceMatch.keyDictionary);
            this.logger.debug(this._logPrefix(componentSearchIndex), "Found action that matches '".concat(currentCombination.describe(), "' (sub-match: '").concat(subMatchDescription, "'): ").concat(eventSchema.actionName, ". Calling handler . . ."));
          } else {
            this.logger.debug(this._logPrefix(componentSearchIndex), "Found action that matches '".concat(currentCombination.describe(), "': ").concat(eventSchema.actionName, ". Calling handler . . ."));
          }

          eventSchema.handler(event);

          this._stopEventPropagationAfterHandlingIfEnabled(event, componentSearchIndex);

          return true;
        } else {
          if (this._actionResolver.componentHasActionsBoundToEventType(componentSearchIndex, keyEventType)) {
            var eventName = describeKeyEventType(keyEventType);
            this.logger.debug(this._logPrefix(componentSearchIndex), "No matching actions found for '".concat(currentCombination.describe(), "' ").concat(eventName, "."));
          } else {
            this.logger.debug(this._logPrefix(componentSearchIndex), "Doesn't define a handler for '".concat(currentCombination.describe(), "' ").concat(describeKeyEventType(keyEventType), "."));
          }
        }

        componentSearchIndex++;
      }
    }
  }, {
    key: "_stopEventPropagationAfterHandlingIfEnabled",
    value: function _stopEventPropagationAfterHandlingIfEnabled(event, componentId) {
      if (Configuration.option('stopEventPropagationAfterHandling')) {
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
      Object.keys(ModifierFlagsDictionary).forEach(function (modifierKey) {
        /**
         * When a modifier key is being released (keyup), it sets its own modifier flag
         * to false. (e.g. On the keyup event for Command, the metaKey attribute is false).
         * If this the case, we want to handle it using the main algorithm and skip the
         * reconciliation algorithm.
         */
        if (key === modifierKey && keyEventType === KeyEventType.keyup) {
          return;
        }

        var currentCombination = _this2.getCurrentCombination();

        var modifierStillPressed = currentCombination.isKeyStillPressed(modifierKey);
        ModifierFlagsDictionary[modifierKey].forEach(function (attributeName) {
          if (event[attributeName] === false && modifierStillPressed) {
            currentCombination.setKeyState(modifierKey, KeyEventType.keyup, stateFromEvent(event));
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

export default AbstractKeyEventStrategy;
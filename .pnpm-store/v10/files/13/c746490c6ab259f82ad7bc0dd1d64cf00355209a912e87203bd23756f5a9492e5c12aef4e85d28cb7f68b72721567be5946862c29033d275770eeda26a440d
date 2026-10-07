function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

import removeAtIndex from '../../utils/array/removeAtIndex';
import KeyEventStateArrayManager from '../shared/KeyEventStateArrayManager';
import Configuration from '../config/Configuration';
import KeyCombinationSerializer from '../shared/KeyCombinationSerializer';
import isObject from '../../utils/object/isObject';
import hasKey from '../../utils/object/hasKey';
import arrayFrom from '../../utils/array/arrayFrom';
import isUndefined from '../../utils/isUndefined';
import KeyEventType from '../../const/KeyEventType';
import KeySequenceParser from '../shared/KeySequenceParser';
import KeyEventState from '../../const/KeyEventState';
import ComponentOptionsListIterator from './ComponentOptionsListIterator';
/**
 * @typedef {Object} ComponentOptions a hotkeys component's options in a normalized
 *          format
 * @property {ActionDictionary} actions The dictionary of actions defined by the
 *           component
 */

/**
 * A mapping between ActionName and ActionConfiguration
 * @typedef {Object.<ActionName,ActionConfiguration>} ActionDictionary
 */

/**
 * Standardized format for defining an action
 * @typedef {Object} ActionConfiguration
 * @property {NormalizedKeySequenceId} prefix - String describing the sequence of key
 *          combinations, before the final key combination (an empty string for
 *          sequences that are a single key combination)
 * @property {ActionName} actionName - Name of the action
 * @property {number} sequenceLength - Number of combinations involved in the
 *           sequence
 * @property {KeyCombinationString} id - Serialized description of the key combinations
 *            that make up the sequence
 * @property {Object.<KeyName, Boolean>} keyDictionary - Dictionary of key names involved
 *           in the last key combination of the sequence
 * @property {KeyEventType} keyEventType - Record index for key event that
 *          the matcher should match on
 * @property {number} size - Number of keys involved in the final key combination
 */

/**
 * List of component options that define the application's currently enabled key
 * maps and handlers, starting from the inner-most (most deeply nested) component,
 * that is closest to the DOM element currently in focus, and ending with the options
 * of the root hotkeys component.
 * @class
 */

var ComponentOptionsList =
/*#__PURE__*/
function () {
  function ComponentOptionsList() {
    _classCallCheck(this, ComponentOptionsList);

    /**
     * List of ComponentOptions for the actions registered by each hot keys component.
     * @type {ComponentOptions[]}
     */
    this._list = [];
    /**
     * Dictionary mapping the ids of the components defining actions, and their
     * position in the list.
     * @type {Object.<ComponentId, Number>}
     */

    this._idToIndex = {};
    /**
     * Counter for the length of the longest sequence currently enabled.
     * @type {number}
     */

    this._longestSequence = 1;
    /**
     * The id of the component with the longest key sequence
     * @type {ComponentId}
     */

    this._longestSequenceComponentId = null;
    /**
     * Record of whether at least one keymap is bound to each event type (keydown,
     * keypress or keyup)
     * @type {KeyEvent}
     */

    this._keyMapEventRecord = KeyEventStateArrayManager.newRecord();
  }
  /**
   * Return a new iterator that can be used to enumerate the list
   * @returns {ComponentOptionsListIterator}
   */


  _createClass(ComponentOptionsList, [{
    key: "getNewIterator",
    value: function getNewIterator() {
      return new ComponentOptionsListIterator(this);
    }
    /**
     * Adds a new hot key component's options, to be parsed and standardised before being
     * added to the list
     * @param {ComponentId} componentId - Id of the component the options belong to
     * @param {KeyMap} actionNameToKeyMap - Map of actions to key maps
     * @param {HandlersMap} actionNameToHandlersMap - Map of actions to handlers
     * @param {Object} options - Hash of options that configure how the key map is built.
     * @param {string} options.defaultKeyEvent - The default key event to use for any
     *        action that does not explicitly define one.
     * @returns {number} The position the component options have in the list
     */

  }, {
    key: "add",
    value: function add(componentId, actionNameToKeyMap, actionNameToHandlersMap, options) {
      if (this.containsId(componentId)) {
        return this.update(componentId, actionNameToKeyMap, actionNameToHandlersMap, options);
      }

      var componentOptions = this._build(componentId, actionNameToKeyMap, actionNameToHandlersMap, options);

      this._list.push(componentOptions);

      var newIndex = this._getLastIndex();

      return this._idToIndex[componentId] = newIndex;
    }
    /**
     * Whether the list contains options for a component with the specified id
     * @param {ComponentId} id Id of the component
     * @returns {boolean} True if the list contains options for the component with the
     *        specified id
     */

  }, {
    key: "containsId",
    value: function containsId(id) {
      return !!this.get(id);
    }
    /**
     * Retrieves options for a component from the list
     * @param {ComponentId} id Id of the component to retrieve the options for
     * @returns {ComponentOptions} Options for the component with the specified id
     */

  }, {
    key: "get",
    value: function get(id) {
      return this.getAtPosition(this.getIndexById(id));
    }
    /**
     * Returns the position of the options belonging to the component with the specified
     * id.
     * @param {ComponentId} id Id of the component to retrieve the options for
     * @returns {number} The position of the component options in the list.
     */

  }, {
    key: "getIndexById",
    value: function getIndexById(id) {
      return this._idToIndex[id];
    }
    /**
     * Replaces the options of a component already in the list with new values
     * @param {ComponentId} componentId - Id of the component to replace the options of
     * @param {KeyMap} actionNameToKeyMap - Map of actions to key maps
     * @param {HandlersMap} actionNameToHandlersMap - Map of actions to handlers
     * @param {Object} options - Hash of options that configure how the key map is built.
     * @param {string} options.defaultKeyEvent - The default key event to use for any
     *        action that does not explicitly define one.
     * @returns {number} The position the component options have in the list
     */

  }, {
    key: "update",
    value: function update(componentId, actionNameToKeyMap, actionNameToHandlersMap, options) {
      /**
       * We record whether we're building new options for the component that currently
       * has the longest sequence, to decide whether we need to recalculate the longest
       * sequence.
       */
      var isUpdatingLongestSequenceComponent = this._isUpdatingComponentWithLongestSequence(componentId);

      var longestSequenceBefore = this.getLongestSequence();

      var componentOptions = this._build(componentId, actionNameToKeyMap, actionNameToHandlersMap, options);

      if (isUpdatingLongestSequenceComponent && componentOptions.sequenceLength !== longestSequenceBefore) {
        /**
         * Component with the longest sequence has just had new options registered
         * so we need to reset the longest sequence
         */
        if (componentOptions.sequenceLength > longestSequenceBefore) {
          /**
           * The same component has registered a longer sequence, so we just
           * need to update the sequence length to the new, larger number
           */
          this._longestSequence = componentOptions.sequenceLength;
        } else {
          /**
           * The component may no longer have the longest sequence, so we need to
           * recalculate
           */
          this._recalculateLongestSequence();
        }
      }

      this._list[this.getIndexById(componentId)] = componentOptions;
    }
    /**
     * Removes the options of a component from the list
     * @param {ComponentId} id The id of the component whose options are removed
     * @returns {void}
     */

  }, {
    key: "remove",
    value: function remove(id) {
      var isUpdatingLongestSequenceComponent = this._isUpdatingComponentWithLongestSequence(id);

      this.removeAtPosition(this.getIndexById(id));

      if (isUpdatingLongestSequenceComponent) {
        this._recalculateLongestSequence();
      }
    }
    /**
     * Whether the list has any options in it (non-empty)
     * @returns {boolean} true if the list has one or more options in it
     */

  }, {
    key: "any",
    value: function any() {
      return this.getLength() !== 0;
    }
    /**
     * Whether a component is the root component (the last one in the list)
     * @param {ComponentId} id Id of the component to query if it is the root
     * @returns {boolean} true if the component is the last in the list
     */

  }, {
    key: "isRoot",
    value: function isRoot(id) {
      return this.getIndexById(id) >= this.getLength() - 1;
    }
    /**
     * The length of the longest sequence currently defined.
     * @returns {number} The sequence length
     */

  }, {
    key: "getLongestSequence",
    value: function getLongestSequence() {
      return this._longestSequence;
    }
    /**
     * Whether the list contains at least one component with an action bound to a
     * particular keyboard event type.
     * @param {KeyEventType} keyEventType Index of the keyboard event type
     * @returns {boolean} true when the list contains a component with an action bound
     *          to the event type
     */

  }, {
    key: "anyActionsForEventType",
    value: function anyActionsForEventType(keyEventType) {
      return !!this._keyMapEventRecord[keyEventType];
    }
    /**
     * The number of components in the list
     * @returns {number} Number of components in the list
     */

  }, {
    key: "getLength",
    value: function getLength() {
      return this._list.length;
    }
    /**
     * The component options at particular position in the list
     * @param {number} position The position in the list
     * @returns {ComponentOptions} The component options at the position in the list
     */

  }, {
    key: "getAtPosition",
    value: function getAtPosition(position) {
      return this._list[position];
    }
    /**
     * Remove the component options at a position in the list
     * @param {number} position The position in the list to remove the options
     * return {void}
     */

  }, {
    key: "removeAtPosition",
    value: function removeAtPosition(position) {
      this._list = removeAtIndex(this._list, position);
      var counter = position;

      while (counter < this.getLength()) {
        this._idToIndex[this.getAtPosition(counter).componentId] = counter;
        counter++;
      }
    }
    /**
     * A plain JavaScript object representation of the component options list that can
     * be used for serialization or debugging
     * @returns {ComponentOptions[]} plain JavaScript object representation of the list
     */

  }, {
    key: "toJSON",
    value: function toJSON() {
      return this._list;
    }
    /********************************************************************************
     * Private methods
     ********************************************************************************/

  }, {
    key: "_getLastIndex",
    value: function _getLastIndex() {
      return this.getLength() - 1;
    }
    /**
     * Builds the internal representation that described the options passed to a hot keys
     * component
     * @param {ComponentId} componentId - Id of the component the options belong to
     * @param {KeyMap} actionNameToKeyMap - Map of actions to key maps
     * @param {HandlersMap} actionNameToHandlersMap - Map of actions to handlers
     * @param {Object} options - Hash of options that configure how the key map is built.
     * @returns {ComponentOptions} Options for the specified component
     * @private
     */

  }, {
    key: "_build",
    value: function _build(componentId, actionNameToKeyMap, actionNameToHandlersMap, options) {
      var _this$_applyHardSeque = this._applyHardSequences(actionNameToKeyMap, actionNameToHandlersMap),
          hardSequenceKeyMap = _this$_applyHardSeque.keyMap,
          includingHardSequenceHandlers = _this$_applyHardSeque.handlers;

      var actions = this._buildActionDictionary(_objectSpread({}, actionNameToKeyMap, hardSequenceKeyMap), options, componentId);

      return {
        actions: actions,
        handlers: includingHardSequenceHandlers,
        componentId: componentId,
        options: options
      };
    }
  }, {
    key: "_isUpdatingComponentWithLongestSequence",
    value: function _isUpdatingComponentWithLongestSequence(componentId) {
      return componentId === this._getLongestSequenceComponentId();
    }
  }, {
    key: "_getLongestSequenceComponentId",
    value: function _getLongestSequenceComponentId() {
      return this._longestSequenceComponentId;
    }
  }, {
    key: "_recalculateLongestSequence",
    value: function _recalculateLongestSequence() {
      var iterator = this.getNewIterator();

      while (iterator.next()) {
        var _iterator$getComponen = iterator.getComponent(),
            longestSequence = _iterator$getComponen.longestSequence,
            componentId = _iterator$getComponen.componentId;

        if (longestSequence > this.getLongestSequence()) {
          this._longestSequenceComponentId = componentId;
          this._longestSequence = longestSequence;
        }
      }
    }
    /**
     * Applies hard sequences (handlers attached to actions with names that are valid
     * KeySequenceStrings) that implicitly define a corresponding action name.
     * @param {KeyMap} actionNameToKeyMap - KeyMap specified by HotKeys component
     * @param {HandlersMap} actionMap - HandlersMap specified by HotKeys component
     * @returns {{keyMap: {}, handlers: {}}} Object containing keymap and handlers map
     *        with the hard sequence actions applied
     * @private
     */

  }, {
    key: "_applyHardSequences",
    value: function _applyHardSequences(actionNameToKeyMap, actionMap) {
      if (Configuration.option('enableHardSequences')) {
        return Object.keys(actionMap).reduce(function (memo, actionNameOrHardSequence) {
          var actionNameIsInKeyMap = !!actionNameToKeyMap[actionNameOrHardSequence];

          if (!actionNameIsInKeyMap && KeyCombinationSerializer.isValidKeySerialization(actionNameOrHardSequence)) {
            memo.keyMap[actionNameOrHardSequence] = actionNameOrHardSequence;
          }

          memo.handlers[actionNameOrHardSequence] = actionMap[actionNameOrHardSequence];
          return memo;
        }, {
          keyMap: {},
          handlers: {}
        });
      } else {
        return {
          keyMap: actionNameToKeyMap,
          handlers: actionMap
        };
      }
    }
    /**
     * Returns a mapping between ActionNames and ActionConfiguration
     * @param {KeyMap} actionNameToKeyMap - Mapping of ActionNames to key sequences.
     * @param {Object} options - Hash of options that configure how the key map is built.
     * @param {string} options.defaultKeyEvent - The default key event to use for any
     *        action that does not explicitly define one.
     * @param {ComponentId} componentId Index of the component the matcher belongs to
     * @returns {ActionDictionary} Map from ActionNames to ActionConfiguration
     * @private
     */

  }, {
    key: "_buildActionDictionary",
    value: function _buildActionDictionary(actionNameToKeyMap, options, componentId) {
      var _this = this;

      return Object.keys(actionNameToKeyMap).reduce(function (memo, actionName) {
        var keyMapConfig = actionNameToKeyMap[actionName];

        var keyMapOptions = function () {
          if (isObject(keyMapConfig) && hasKey(keyMapConfig, 'sequences')) {
            return arrayFrom(keyMapConfig.sequences);
          } else {
            return arrayFrom(keyMapConfig);
          }
        }();

        keyMapOptions.forEach(function (keyMapOption) {
          var _normalizeActionOptio = normalizeActionOptions(keyMapOption, options),
              keySequence = _normalizeActionOptio.keySequence,
              keyEventType = _normalizeActionOptio.keyEventType;

          _this._addActionOptions(memo, componentId, actionName, keySequence, keyEventType);
        });
        return memo;
      }, {});
    }
  }, {
    key: "_addActionOptions",
    value: function _addActionOptions(memo, componentId, actionName, keySequence, keyEventType) {
      var _KeySequenceParser$pa = KeySequenceParser.parse(keySequence, {
        keyEventType: keyEventType
      }),
          sequence = _KeySequenceParser$pa.sequence,
          combination = _KeySequenceParser$pa.combination;

      if (sequence.size > this.getLongestSequence()) {
        this._longestSequence = sequence.size;
        this._longestSequenceComponentId = componentId;
      }
      /**
       * Record that there is at least one key sequence in the focus tree bound to
       * the keyboard event
       */


      this._keyMapEventRecord[keyEventType] = KeyEventState.seen;

      if (!memo[actionName]) {
        memo[actionName] = [];
      }

      memo[actionName].push(_objectSpread({
        prefix: sequence.prefix,
        actionName: actionName,
        sequenceLength: sequence.size
      }, combination));
    }
  }]);

  return ComponentOptionsList;
}();

function normalizeActionOptions(keyMapOption, options) {
  if (isObject(keyMapOption)) {
    var sequence = keyMapOption.sequence,
        action = keyMapOption.action;
    return {
      keySequence: sequence,
      keyEventType: isUndefined(action) ? KeyEventType[options.defaultKeyEvent] : KeyEventType[action]
    };
  } else {
    return {
      keySequence: keyMapOption,
      keyEventType: KeyEventType[options.defaultKeyEvent]
    };
  }
}

export default ComponentOptionsList;
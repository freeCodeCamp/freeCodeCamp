"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Configuration = _interopRequireDefault(require("../config/Configuration"));

var _size = _interopRequireDefault(require("../../utils/collection/size"));

var _keyupIsHiddenByCmd = _interopRequireDefault(require("../../helpers/resolving-handlers/keyupIsHiddenByCmd"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * Object containing all information necessary to match a handler to a history of
 * key combinations
 * @typedef {Object} MatchingActionConfig
 * @property {NormalizedKeySequenceId} prefix - String describing the sequence of key
 *          combinations, before the final key combination (an empty string for
 *          sequences that are a single key combination)
 * @property {number} sequenceLength - Number of combinations involved in the
 *           sequence
 * @property {KeyCombinationString} id - Serialized description of the key combinations
 *            that make up the sequence
 * @property {Object.<KeyName, Boolean>} keyDictionary - Dictionary of key names involved
 *           in the last key combination of the sequence
 * @property {KeyEventType} keyEventType - Record index for key event that
 *          the matcher should match on
 * @property {number} size - Number of keys involved in the final key combination
 * @property {EventMatchDictionary} events - Dictionary of EventMatches
 */

/**
 * A dictionary mapping key event types to event matches
 * @typedef {Object.<KeyEventType, EventMatch>} EventMatchDictionary
 */

/**
 * Object containing information to call a handler if an event type matches a
 * key event
 * @typedef {Object} EventMatch
 * @property {ActionName} actionName - Name of the action
 * @property {Function} handler - Handler to call if event type matches
 */

/**
 * Matches a KeyCombination to a list of pre-registered ActionConfiguration and their
 * corresponding handler functions
 * @class
 */
var KeyCombinationMatcher =
/*#__PURE__*/
function () {
  /**
   * Returns a new instance of KeyCombinationMatcher
   * @returns {KeyCombinationMatcher}
   */
  function KeyCombinationMatcher() {
    _classCallCheck(this, KeyCombinationMatcher);

    this._actionConfigs = {};
    this._order = null;
  }
  /**
   * Adds a new ActionConfiguration and handler to those that can be used to match a
   * KeyCombination
   * @param {ActionConfiguration} actionConfig
   * @param {Function} handler Function to call if match is selected
   * @returns {void}
   */


  _createClass(KeyCombinationMatcher, [{
    key: "addMatch",
    value: function addMatch(actionConfig, handler) {
      if (this._includesMatcherForCombination(actionConfig.id)) {
        var keyEventType = actionConfig.keyEventType,
            actionName = actionConfig.actionName,
            id = actionConfig.id;

        this._addHandlerToActionConfig(id, {
          keyEventType: keyEventType,
          actionName: actionName,
          handler: handler
        });
      } else {
        this._addNewActionConfig(actionConfig, handler);
      }
    }
    /**
     * Finds a MatchingActionConfig for a KeyCombination, ReactKeyName and
     * KeyEventType
     * @param {KeyCombination} keyCombination Record of key combinations
     *         to use in the match
     * @param {ReactKeyName} keyName Name of the key to use in the match
     * @param {KeyEventType} keyEventType The type of key event to use in the match
     * @returns {MatchingActionConfig|null} A MatchingActionOptions that matches the
     *          KeyCombination, ReactKeyName and KeyEventType
     */

  }, {
    key: "findMatch",
    value: function findMatch(keyCombination, keyName, keyEventType) {
      if (!this._order) {
        this._setOrder();
      }

      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = this._order[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var combinationId = _step.value;
          var actionOptions = this._actionConfigs[combinationId];

          if (this._matchesActionConfig(keyCombination, keyName, keyEventType, actionOptions)) {
            return actionOptions;
          }
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return != null) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }

      return null;
    }
    /********************************************************************************
     * Presentation
     ********************************************************************************/

    /**
     * A plain JavaScript representation of the KeyCombinationMatcher, useful for
     * serialization or debugging
     * @returns {Object} Serialized representation of the key combination matcher
     */

  }, {
    key: "toJSON",
    value: function toJSON() {
      return {
        actionConfigs: this._actionConfigs,
        order: this._order
      };
    }
    /********************************************************************************
     * Private methods
     ********************************************************************************/

  }, {
    key: "_matchesActionConfig",
    value: function _matchesActionConfig(keyCombination, keyName, keyEventType, actionOptions) {
      if (!canBeMatched(keyCombination, actionOptions)) {
        return false;
      }

      var combinationHasHandlerForEventType = actionOptions.events[keyEventType];

      if (!combinationHasHandlerForEventType) {
        /**
         * If the combination does not have any actions bound to the key event we are
         * currently processing, we skip checking if it matches the current keys being
         * pressed.
         */
        return false;
      }

      var keyCompletesCombination = false;
      var combinationMatchesKeysPressed = Object.keys(actionOptions.keyDictionary).every(function (candidateKeyName) {
        if (keyCombination.isEventTriggered(candidateKeyName, keyEventType)) {
          if (keyName && keyName === keyCombination.getNormalizedKeyName(candidateKeyName)) {
            keyCompletesCombination = !keyCombination.wasEventPreviouslyTriggered(candidateKeyName, keyEventType);
          }

          return true;
        } else {
          return false;
        }
      });
      return combinationMatchesKeysPressed && keyCompletesCombination;
    }
  }, {
    key: "_setOrder",
    value: function _setOrder() {
      /**
       * The first time the component that is currently handling the key event has
       * its handlers searched for a match, order the combinations based on their
       * size so that they may be applied in the correct priority order
       */
      var combinationsPartitionedBySize = Object.values(this._actionConfigs).reduce(function (memo, _ref) {
        var id = _ref.id,
            size = _ref.size;

        if (!memo[size]) {
          memo[size] = [];
        }

        memo[size].push(id);
        return memo;
      }, {});
      this._order = Object.keys(combinationsPartitionedBySize).sort(function (a, b) {
        return b - a;
      }).reduce(function (memo, key) {
        return memo.concat(combinationsPartitionedBySize[key]);
      }, []);
    }
  }, {
    key: "_addNewActionConfig",
    value: function _addNewActionConfig(combinationSchema, handler) {
      var prefix = combinationSchema.prefix,
          sequenceLength = combinationSchema.sequenceLength,
          id = combinationSchema.id,
          keyDictionary = combinationSchema.keyDictionary,
          size = combinationSchema.size,
          keyEventType = combinationSchema.keyEventType,
          actionName = combinationSchema.actionName;

      this._setCombinationMatcher(id, {
        prefix: prefix,
        sequenceLength: sequenceLength,
        id: id,
        keyDictionary: keyDictionary,
        size: size,
        events: {}
      });

      this._addHandlerToActionConfig(id, {
        keyEventType: keyEventType,
        actionName: actionName,
        handler: handler
      });
    }
  }, {
    key: "_addHandlerToActionConfig",
    value: function _addHandlerToActionConfig(id, _ref2) {
      var keyEventType = _ref2.keyEventType,
          actionName = _ref2.actionName,
          handler = _ref2.handler;

      var combination = this._getCombinationMatcher(id);

      this._setCombinationMatcher(id, _objectSpread({}, combination, {
        events: _objectSpread({}, combination.events, _defineProperty({}, keyEventType, {
          actionName: actionName,
          handler: handler
        }))
      }));
    }
  }, {
    key: "_setCombinationMatcher",
    value: function _setCombinationMatcher(id, combinationMatcher) {
      this._actionConfigs[id] = combinationMatcher;
    }
  }, {
    key: "_getCombinationMatcher",
    value: function _getCombinationMatcher(id) {
      return this._actionConfigs[id];
    }
  }, {
    key: "_includesMatcherForCombination",
    value: function _includesMatcherForCombination(id) {
      return !!this._getCombinationMatcher(id);
    }
  }]);

  return KeyCombinationMatcher;
}();

function canBeMatched(keyCombination, combinationMatcher) {
  var combinationKeysNo = (0, _size.default)(combinationMatcher.keyDictionary);

  if (_Configuration.default.option('allowCombinationSubmatches') || keyUpIsBeingHidden(keyCombination)) {
    return keyCombination.getNumberOfKeys() >= combinationKeysNo;
  } else {
    /**
     * If sub-matches are not allow, the number of keys in the key state and the
     * number of keys in the combination we are attempting to match, must be
     * exactly the same
     */
    return keyCombination.getNumberOfKeys() === combinationKeysNo;
  }
}

function keyUpIsBeingHidden(keyCombination) {
  if (keyCombination.isKeyStillPressed('Meta')) {
    return keyCombination.some(function (keyName) {
      return (0, _keyupIsHiddenByCmd.default)(keyName);
    });
  }

  return false;
}

var _default = KeyCombinationMatcher;
exports.default = _default;
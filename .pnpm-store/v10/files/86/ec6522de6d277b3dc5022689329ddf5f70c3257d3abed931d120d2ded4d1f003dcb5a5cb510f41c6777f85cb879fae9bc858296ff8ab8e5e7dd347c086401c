'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _tslib = require('./_virtual/_tslib.js');
var utils = require('./utils.js');
var State = require('./State.js');
var actionTypes = require('./actionTypes.js');
var actions = require('./actions.js');
var environment = require('./environment.js');
var constants = require('./constants.js');
var stateUtils = require('./stateUtils.js');
var Actor = require('./Actor.js');
var invokeUtils = require('./invokeUtils.js');

var NULL_EVENT = '';
var STATE_IDENTIFIER = '#';
var WILDCARD = '*';
var EMPTY_OBJECT = {};

var isStateId = function (str) {
  return str[0] === STATE_IDENTIFIER;
};

var createDefaultOptions = function () {
  return {
    actions: {},
    guards: {},
    services: {},
    activities: {},
    delays: {}
  };
};

var validateArrayifiedTransitions = function (stateNode, event, transitions) {
  var hasNonLastUnguardedTarget = transitions.slice(0, -1).some(function (transition) {
    return !('cond' in transition) && !('in' in transition) && (utils.isString(transition.target) || utils.isMachine(transition.target));
  });
  var eventText = event === NULL_EVENT ? 'the transient event' : "event '".concat(event, "'");
  utils.warn(!hasNonLastUnguardedTarget, "One or more transitions for ".concat(eventText, " on state '").concat(stateNode.id, "' are unreachable. ") + "Make sure that the default transition is the last one defined.");
};

var StateNode =
/*#__PURE__*/

/** @class */
function () {
  function StateNode(
  /**
   * The raw config used to create the machine.
   */
  config, options,
  /**
   * The initial extended state
   */
  _context, // TODO: this is unsafe, but we're removing it in v5 anyway
  _stateInfo) {
    if (_context === void 0) {
      _context = 'context' in config ? config.context : undefined;
    }

    var _this = this;

    var _a;

    this.config = config;
    this._context = _context;
    /**
     * The order this state node appears. Corresponds to the implicit SCXML document order.
     */

    this.order = -1;
    this.__xstatenode = true;
    this.__cache = {
      events: undefined,
      relativeValue: new Map(),
      initialStateValue: undefined,
      initialState: undefined,
      on: undefined,
      transitions: undefined,
      candidates: {},
      delayedTransitions: undefined
    };
    this.idMap = {};
    this.tags = [];
    this.options = Object.assign(createDefaultOptions(), options);
    this.parent = _stateInfo === null || _stateInfo === void 0 ? void 0 : _stateInfo.parent;
    this.key = this.config.key || (_stateInfo === null || _stateInfo === void 0 ? void 0 : _stateInfo.key) || this.config.id || '(machine)';
    this.machine = this.parent ? this.parent.machine : this;
    this.path = this.parent ? this.parent.path.concat(this.key) : [];
    this.delimiter = this.config.delimiter || (this.parent ? this.parent.delimiter : constants.STATE_DELIMITER);
    this.id = this.config.id || _tslib.__spreadArray([this.machine.key], _tslib.__read(this.path), false).join(this.delimiter);
    this.version = this.parent ? this.parent.version : this.config.version;
    this.type = this.config.type || (this.config.parallel ? 'parallel' : this.config.states && Object.keys(this.config.states).length ? 'compound' : this.config.history ? 'history' : 'atomic');
    this.schema = this.parent ? this.machine.schema : (_a = this.config.schema) !== null && _a !== void 0 ? _a : {};
    this.description = this.config.description;

    if (!environment.IS_PRODUCTION) {
      utils.warn(!('parallel' in this.config), "The \"parallel\" property is deprecated and will be removed in version 4.1. ".concat(this.config.parallel ? "Replace with `type: 'parallel'`" : "Use `type: '".concat(this.type, "'`"), " in the config for state node '").concat(this.id, "' instead."));
    }

    this.initial = this.config.initial;
    this.states = this.config.states ? utils.mapValues(this.config.states, function (stateConfig, key) {
      var _a;

      var stateNode = new StateNode(stateConfig, {}, undefined, {
        parent: _this,
        key: key
      });
      Object.assign(_this.idMap, _tslib.__assign((_a = {}, _a[stateNode.id] = stateNode, _a), stateNode.idMap));
      return stateNode;
    }) : EMPTY_OBJECT; // Document order

    var order = 0;

    function dfs(stateNode) {
      var e_1, _a;

      stateNode.order = order++;

      try {
        for (var _b = _tslib.__values(stateUtils.getAllChildren(stateNode)), _c = _b.next(); !_c.done; _c = _b.next()) {
          var child = _c.value;
          dfs(child);
        }
      } catch (e_1_1) {
        e_1 = {
          error: e_1_1
        };
      } finally {
        try {
          if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
        } finally {
          if (e_1) throw e_1.error;
        }
      }
    }

    dfs(this); // History config

    this.history = this.config.history === true ? 'shallow' : this.config.history || false;
    this._transient = !!this.config.always || (!this.config.on ? false : Array.isArray(this.config.on) ? this.config.on.some(function (_a) {
      var event = _a.event;
      return event === NULL_EVENT;
    }) : NULL_EVENT in this.config.on);
    this.strict = !!this.config.strict; // TODO: deprecate (entry)

    this.onEntry = utils.toArray(this.config.entry || this.config.onEntry).map(function (action) {
      return actions.toActionObject(action);
    }); // TODO: deprecate (exit)

    this.onExit = utils.toArray(this.config.exit || this.config.onExit).map(function (action) {
      return actions.toActionObject(action);
    });
    this.meta = this.config.meta;
    this.doneData = this.type === 'final' ? this.config.data : undefined;
    this.invoke = utils.toArray(this.config.invoke).map(function (invokeConfig, i) {
      var _a, _b;

      if (utils.isMachine(invokeConfig)) {
        var invokeId = utils.createInvokeId(_this.id, i);
        _this.machine.options.services = _tslib.__assign((_a = {}, _a[invokeId] = invokeConfig, _a), _this.machine.options.services);
        return invokeUtils.toInvokeDefinition({
          src: invokeId,
          id: invokeId
        });
      } else if (utils.isString(invokeConfig.src)) {
        var invokeId = invokeConfig.id || utils.createInvokeId(_this.id, i);
        return invokeUtils.toInvokeDefinition(_tslib.__assign(_tslib.__assign({}, invokeConfig), {
          id: invokeId,
          src: invokeConfig.src
        }));
      } else if (utils.isMachine(invokeConfig.src) || utils.isFunction(invokeConfig.src)) {
        var invokeId = invokeConfig.id || utils.createInvokeId(_this.id, i);
        _this.machine.options.services = _tslib.__assign((_b = {}, _b[invokeId] = invokeConfig.src, _b), _this.machine.options.services);
        return invokeUtils.toInvokeDefinition(_tslib.__assign(_tslib.__assign({
          id: invokeId
        }, invokeConfig), {
          src: invokeId
        }));
      } else {
        var invokeSource = invokeConfig.src;
        return invokeUtils.toInvokeDefinition(_tslib.__assign(_tslib.__assign({
          id: utils.createInvokeId(_this.id, i)
        }, invokeConfig), {
          src: invokeSource
        }));
      }
    });
    this.activities = utils.toArray(this.config.activities).concat(this.invoke).map(function (activity) {
      return actions.toActivityDefinition(activity);
    });
    this.transition = this.transition.bind(this);
    this.tags = utils.toArray(this.config.tags); // TODO: this is the real fix for initialization once
    // state node getters are deprecated
    // if (!this.parent) {
    //   this._init();
    // }
  }

  StateNode.prototype._init = function () {
    if (this.__cache.transitions) {
      return;
    }

    stateUtils.getAllStateNodes(this).forEach(function (stateNode) {
      return stateNode.on;
    });
  };
  /**
   * Clones this state machine with custom options and context.
   *
   * @param options Options (actions, guards, activities, services) to recursively merge with the existing options.
   * @param context Custom context (will override predefined context)
   */


  StateNode.prototype.withConfig = function (options, context) {
    var _a = this.options,
        actions = _a.actions,
        activities = _a.activities,
        guards = _a.guards,
        services = _a.services,
        delays = _a.delays;
    return new StateNode(this.config, {
      actions: _tslib.__assign(_tslib.__assign({}, actions), options.actions),
      activities: _tslib.__assign(_tslib.__assign({}, activities), options.activities),
      guards: _tslib.__assign(_tslib.__assign({}, guards), options.guards),
      services: _tslib.__assign(_tslib.__assign({}, services), options.services),
      delays: _tslib.__assign(_tslib.__assign({}, delays), options.delays)
    }, context !== null && context !== void 0 ? context : this.context);
  };
  /**
   * Clones this state machine with custom context.
   *
   * @param context Custom context (will override predefined context, not recursive)
   */


  StateNode.prototype.withContext = function (context) {
    return new StateNode(this.config, this.options, context);
  };

  Object.defineProperty(StateNode.prototype, "context", {
    get: function () {
      return utils.isFunction(this._context) ? this._context() : this._context;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(StateNode.prototype, "definition", {
    /**
     * The well-structured state node definition.
     */
    get: function () {
      return {
        id: this.id,
        key: this.key,
        version: this.version,
        context: this.context,
        type: this.type,
        initial: this.initial,
        history: this.history,
        states: utils.mapValues(this.states, function (state) {
          return state.definition;
        }),
        on: this.on,
        transitions: this.transitions,
        entry: this.onEntry,
        exit: this.onExit,
        activities: this.activities || [],
        meta: this.meta,
        order: this.order || -1,
        data: this.doneData,
        invoke: this.invoke,
        description: this.description,
        tags: this.tags
      };
    },
    enumerable: false,
    configurable: true
  });

  StateNode.prototype.toJSON = function () {
    return this.definition;
  };

  Object.defineProperty(StateNode.prototype, "on", {
    /**
     * The mapping of events to transitions.
     */
    get: function () {
      if (this.__cache.on) {
        return this.__cache.on;
      }

      var transitions = this.transitions;
      return this.__cache.on = transitions.reduce(function (map, transition) {
        map[transition.eventType] = map[transition.eventType] || [];
        map[transition.eventType].push(transition);
        return map;
      }, {});
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(StateNode.prototype, "after", {
    get: function () {
      return this.__cache.delayedTransitions || (this.__cache.delayedTransitions = this.getDelayedTransitions(), this.__cache.delayedTransitions);
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(StateNode.prototype, "transitions", {
    /**
     * All the transitions that can be taken from this state node.
     */
    get: function () {
      return this.__cache.transitions || (this.__cache.transitions = this.formatTransitions(), this.__cache.transitions);
    },
    enumerable: false,
    configurable: true
  });

  StateNode.prototype.getCandidates = function (eventName) {
    if (this.__cache.candidates[eventName]) {
      return this.__cache.candidates[eventName];
    }

    var transient = eventName === NULL_EVENT;
    var candidates = this.transitions.filter(function (transition) {
      var sameEventType = transition.eventType === eventName; // null events should only match against eventless transitions

      return transient ? sameEventType : sameEventType || transition.eventType === WILDCARD;
    });
    this.__cache.candidates[eventName] = candidates;
    return candidates;
  };
  /**
   * All delayed transitions from the config.
   */


  StateNode.prototype.getDelayedTransitions = function () {
    var _this = this;

    var afterConfig = this.config.after;

    if (!afterConfig) {
      return [];
    }

    var mutateEntryExit = function (delay, i) {
      var delayRef = utils.isFunction(delay) ? "".concat(_this.id, ":delay[").concat(i, "]") : delay;
      var eventType = actions.after(delayRef, _this.id);

      _this.onEntry.push(actions.send(eventType, {
        delay: delay
      }));

      _this.onExit.push(actions.cancel(eventType));

      return eventType;
    };

    var delayedTransitions = utils.isArray(afterConfig) ? afterConfig.map(function (transition, i) {
      var eventType = mutateEntryExit(transition.delay, i);
      return _tslib.__assign(_tslib.__assign({}, transition), {
        event: eventType
      });
    }) : utils.flatten(Object.keys(afterConfig).map(function (delay, i) {
      var configTransition = afterConfig[delay];
      var resolvedTransition = utils.isString(configTransition) ? {
        target: configTransition
      } : configTransition;
      var resolvedDelay = !isNaN(+delay) ? +delay : delay;
      var eventType = mutateEntryExit(resolvedDelay, i);
      return utils.toArray(resolvedTransition).map(function (transition) {
        return _tslib.__assign(_tslib.__assign({}, transition), {
          event: eventType,
          delay: resolvedDelay
        });
      });
    }));
    return delayedTransitions.map(function (delayedTransition) {
      var delay = delayedTransition.delay;
      return _tslib.__assign(_tslib.__assign({}, _this.formatTransition(delayedTransition)), {
        delay: delay
      });
    });
  };
  /**
   * Returns the state nodes represented by the current state value.
   *
   * @param state The state value or State instance
   */


  StateNode.prototype.getStateNodes = function (state) {
    var _a;

    var _this = this;

    if (!state) {
      return [];
    }

    var stateValue = state instanceof State.State ? state.value : utils.toStateValue(state, this.delimiter);

    if (utils.isString(stateValue)) {
      var initialStateValue = this.getStateNode(stateValue).initial;
      return initialStateValue !== undefined ? this.getStateNodes((_a = {}, _a[stateValue] = initialStateValue, _a)) : [this, this.states[stateValue]];
    }

    var subStateKeys = Object.keys(stateValue);
    var subStateNodes = [this];
    subStateNodes.push.apply(subStateNodes, _tslib.__spreadArray([], _tslib.__read(utils.flatten(subStateKeys.map(function (subStateKey) {
      return _this.getStateNode(subStateKey).getStateNodes(stateValue[subStateKey]);
    }))), false));
    return subStateNodes;
  };
  /**
   * Returns `true` if this state node explicitly handles the given event.
   *
   * @param event The event in question
   */


  StateNode.prototype.handles = function (event) {
    var eventType = utils.getEventType(event);
    return this.events.includes(eventType);
  };
  /**
   * Resolves the given `state` to a new `State` instance relative to this machine.
   *
   * This ensures that `.events` and `.nextEvents` represent the correct values.
   *
   * @param state The state to resolve
   */


  StateNode.prototype.resolveState = function (state) {
    var stateFromConfig = state instanceof State.State ? state : State.State.create(state);
    var configuration = Array.from(stateUtils.getConfiguration([], this.getStateNodes(stateFromConfig.value)));
    return new State.State(_tslib.__assign(_tslib.__assign({}, stateFromConfig), {
      value: this.resolve(stateFromConfig.value),
      configuration: configuration,
      done: stateUtils.isInFinalState(configuration, this),
      tags: stateUtils.getTagsFromConfiguration(configuration),
      machine: this.machine
    }));
  };

  StateNode.prototype.transitionLeafNode = function (stateValue, state, _event) {
    var stateNode = this.getStateNode(stateValue);
    var next = stateNode.next(state, _event);

    if (!next || !next.transitions.length) {
      return this.next(state, _event);
    }

    return next;
  };

  StateNode.prototype.transitionCompoundNode = function (stateValue, state, _event) {
    var subStateKeys = Object.keys(stateValue);
    var stateNode = this.getStateNode(subStateKeys[0]);

    var next = stateNode._transition(stateValue[subStateKeys[0]], state, _event);

    if (!next || !next.transitions.length) {
      return this.next(state, _event);
    }

    return next;
  };

  StateNode.prototype.transitionParallelNode = function (stateValue, state, _event) {
    var e_2, _a;

    var transitionMap = {};

    try {
      for (var _b = _tslib.__values(Object.keys(stateValue)), _c = _b.next(); !_c.done; _c = _b.next()) {
        var subStateKey = _c.value;
        var subStateValue = stateValue[subStateKey];

        if (!subStateValue) {
          continue;
        }

        var subStateNode = this.getStateNode(subStateKey);

        var next = subStateNode._transition(subStateValue, state, _event);

        if (next) {
          transitionMap[subStateKey] = next;
        }
      }
    } catch (e_2_1) {
      e_2 = {
        error: e_2_1
      };
    } finally {
      try {
        if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
      } finally {
        if (e_2) throw e_2.error;
      }
    }

    var stateTransitions = Object.keys(transitionMap).map(function (key) {
      return transitionMap[key];
    });
    var enabledTransitions = utils.flatten(stateTransitions.map(function (st) {
      return st.transitions;
    }));
    var willTransition = stateTransitions.some(function (st) {
      return st.transitions.length > 0;
    });

    if (!willTransition) {
      return this.next(state, _event);
    }

    var configuration = utils.flatten(Object.keys(transitionMap).map(function (key) {
      return transitionMap[key].configuration;
    }));
    return {
      transitions: enabledTransitions,
      exitSet: utils.flatten(stateTransitions.map(function (t) {
        return t.exitSet;
      })),
      configuration: configuration,
      source: state,
      actions: utils.flatten(Object.keys(transitionMap).map(function (key) {
        return transitionMap[key].actions;
      }))
    };
  };

  StateNode.prototype._transition = function (stateValue, state, _event) {
    // leaf node
    if (utils.isString(stateValue)) {
      return this.transitionLeafNode(stateValue, state, _event);
    } // hierarchical node


    if (Object.keys(stateValue).length === 1) {
      return this.transitionCompoundNode(stateValue, state, _event);
    } // orthogonal node


    return this.transitionParallelNode(stateValue, state, _event);
  };

  StateNode.prototype.getTransitionData = function (state, event) {
    return this._transition(state.value, state, utils.toSCXMLEvent(event));
  };

  StateNode.prototype.next = function (state, _event) {
    var e_3, _a;

    var _this = this;

    var eventName = _event.name;
    var actions = [];
    var nextStateNodes = [];
    var selectedTransition;

    try {
      for (var _b = _tslib.__values(this.getCandidates(eventName)), _c = _b.next(); !_c.done; _c = _b.next()) {
        var candidate = _c.value;
        var cond = candidate.cond,
            stateIn = candidate.in;
        var resolvedContext = state.context;
        var isInState = stateIn ? utils.isString(stateIn) && isStateId(stateIn) ? // Check if in state by ID
        state.matches(utils.toStateValue(this.getStateNodeById(stateIn).path, this.delimiter)) : // Check if in state by relative grandparent
        utils.matchesState(utils.toStateValue(stateIn, this.delimiter), utils.path(this.path.slice(0, -2))(state.value)) : true;
        var guardPassed = false;

        try {
          guardPassed = !cond || utils.evaluateGuard(this.machine, cond, resolvedContext, _event, state);
        } catch (err) {
          throw new Error("Unable to evaluate guard '".concat(cond.name || cond.type, "' in transition for event '").concat(eventName, "' in state node '").concat(this.id, "':\n").concat(err.message));
        }

        if (guardPassed && isInState) {
          if (candidate.target !== undefined) {
            nextStateNodes = candidate.target;
          }

          actions.push.apply(actions, _tslib.__spreadArray([], _tslib.__read(candidate.actions), false));
          selectedTransition = candidate;
          break;
        }
      }
    } catch (e_3_1) {
      e_3 = {
        error: e_3_1
      };
    } finally {
      try {
        if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
      } finally {
        if (e_3) throw e_3.error;
      }
    }

    if (!selectedTransition) {
      return undefined;
    }

    if (!nextStateNodes.length) {
      return {
        transitions: [selectedTransition],
        exitSet: [],
        configuration: state.value ? [this] : [],
        source: state,
        actions: actions
      };
    }

    var allNextStateNodes = utils.flatten(nextStateNodes.map(function (stateNode) {
      return _this.getRelativeStateNodes(stateNode, state.historyValue);
    }));
    var isInternal = !!selectedTransition.internal;
    return {
      transitions: [selectedTransition],
      exitSet: isInternal ? [] : utils.flatten(nextStateNodes.map(function (targetNode) {
        return _this.getPotentiallyReenteringNodes(targetNode);
      })),
      configuration: allNextStateNodes,
      source: state,
      actions: actions
    };
  }; // even though the name of this function mentions reentry nodes
  // we are pushing its result into `exitSet`
  // that's because what we exit might be reentered (it's an invariant of reentrancy)


  StateNode.prototype.getPotentiallyReenteringNodes = function (targetNode) {
    if (this.order < targetNode.order) {
      return [this];
    }

    var nodes = [];
    var marker = this;
    var possibleAncestor = targetNode;

    while (marker && marker !== possibleAncestor) {
      nodes.push(marker);
      marker = marker.parent;
    }

    if (marker !== possibleAncestor) {
      // we never got to `possibleAncestor`, therefore the initial `marker` "escapes" it
      // it's in a different part of the tree so no states will be reentered for such an external transition
      return [];
    }

    nodes.push(possibleAncestor);
    return nodes;
  };

  StateNode.prototype.getActions = function (resolvedConfig, isDone, transition, currentContext, _event, prevState, predictableExec) {
    var e_4, _a, e_5, _b;

    var _this = this;

    var prevConfig = prevState ? stateUtils.getConfiguration([], this.getStateNodes(prevState.value)) : [];
    var entrySet = new Set();

    try {
      for (var _c = _tslib.__values(Array.from(resolvedConfig).sort(function (a, b) {
        return a.order - b.order;
      })), _d = _c.next(); !_d.done; _d = _c.next()) {
        var sn = _d.value;

        if (!stateUtils.has(prevConfig, sn) || stateUtils.has(transition.exitSet, sn) || sn.parent && entrySet.has(sn.parent)) {
          entrySet.add(sn);
        }
      }
    } catch (e_4_1) {
      e_4 = {
        error: e_4_1
      };
    } finally {
      try {
        if (_d && !_d.done && (_a = _c.return)) _a.call(_c);
      } finally {
        if (e_4) throw e_4.error;
      }
    }

    try {
      for (var prevConfig_1 = _tslib.__values(prevConfig), prevConfig_1_1 = prevConfig_1.next(); !prevConfig_1_1.done; prevConfig_1_1 = prevConfig_1.next()) {
        var sn = prevConfig_1_1.value;

        if (!stateUtils.has(resolvedConfig, sn) || stateUtils.has(transition.exitSet, sn.parent)) {
          transition.exitSet.push(sn);
        }
      }
    } catch (e_5_1) {
      e_5 = {
        error: e_5_1
      };
    } finally {
      try {
        if (prevConfig_1_1 && !prevConfig_1_1.done && (_b = prevConfig_1.return)) _b.call(prevConfig_1);
      } finally {
        if (e_5) throw e_5.error;
      }
    }

    transition.exitSet.sort(function (a, b) {
      return b.order - a.order;
    });
    var entryStates = Array.from(entrySet).sort(function (a, b) {
      return a.order - b.order;
    });
    var exitStates = new Set(transition.exitSet);
    var doneEvents = utils.flatten(entryStates.map(function (sn) {
      var events = [];

      if (sn.type !== 'final') {
        return events;
      }

      var parent = sn.parent;

      if (!parent.parent) {
        return events;
      }

      events.push(actions.done(sn.id, sn.doneData), // TODO: deprecate - final states should not emit done events for their own state.
      actions.done(parent.id, sn.doneData ? utils.mapContext(sn.doneData, currentContext, _event) : undefined));
      var grandparent = parent.parent;

      if (grandparent.type === 'parallel') {
        if (stateUtils.getChildren(grandparent).every(function (parentNode) {
          return stateUtils.isInFinalState(transition.configuration, parentNode);
        })) {
          events.push(actions.done(grandparent.id));
        }
      }

      return events;
    }));
    var entryActions = entryStates.map(function (stateNode) {
      var entryActions = stateNode.onEntry;
      var invokeActions = stateNode.activities.map(function (activity) {
        return actions.start(activity);
      });
      return {
        type: 'entry',
        actions: actions.toActionObjects(predictableExec ? _tslib.__spreadArray(_tslib.__spreadArray([], _tslib.__read(entryActions), false), _tslib.__read(invokeActions), false) : _tslib.__spreadArray(_tslib.__spreadArray([], _tslib.__read(invokeActions), false), _tslib.__read(entryActions), false), _this.machine.options.actions)
      };
    }).concat({
      type: 'state_done',
      actions: doneEvents.map(function (event) {
        return actions.raise(event);
      })
    });
    var exitActions = Array.from(exitStates).map(function (stateNode) {
      return {
        type: 'exit',
        actions: actions.toActionObjects(_tslib.__spreadArray(_tslib.__spreadArray([], _tslib.__read(stateNode.onExit), false), _tslib.__read(stateNode.activities.map(function (activity) {
          return actions.stop(activity);
        })), false), _this.machine.options.actions)
      };
    });
    var actions$1 = exitActions.concat({
      type: 'transition',
      actions: actions.toActionObjects(transition.actions, this.machine.options.actions)
    }).concat(entryActions);

    if (isDone) {
      var stopActions = actions.toActionObjects(utils.flatten(_tslib.__spreadArray([], _tslib.__read(resolvedConfig), false).sort(function (a, b) {
        return b.order - a.order;
      }).map(function (stateNode) {
        return stateNode.onExit;
      })), this.machine.options.actions).filter(function (action) {
        return !utils.isRaisableAction(action);
      });
      return actions$1.concat({
        type: 'stop',
        actions: stopActions
      });
    }

    return actions$1;
  };
  /**
   * Determines the next state given the current `state` and sent `event`.
   *
   * @param state The current State instance or state value
   * @param event The event that was sent at the current state
   * @param context The current context (extended state) of the current state
   */


  StateNode.prototype.transition = function (state, event, context, exec) {
    if (state === void 0) {
      state = this.initialState;
    }

    var _event = utils.toSCXMLEvent(event);

    var currentState;

    if (state instanceof State.State) {
      currentState = context === undefined ? state : this.resolveState(State.State.from(state, context));
    } else {
      var resolvedStateValue = utils.isString(state) ? this.resolve(utils.pathToStateValue(this.getResolvedPath(state))) : this.resolve(state);
      var resolvedContext = context !== null && context !== void 0 ? context : this.machine.context;
      currentState = this.resolveState(State.State.from(resolvedStateValue, resolvedContext));
    }

    if (!environment.IS_PRODUCTION && _event.name === WILDCARD) {
      throw new Error("An event cannot have the wildcard type ('".concat(WILDCARD, "')"));
    }

    if (this.strict) {
      if (!this.events.includes(_event.name) && !utils.isBuiltInEvent(_event.name)) {
        throw new Error("Machine '".concat(this.id, "' does not accept event '").concat(_event.name, "'"));
      }
    }

    var stateTransition = this._transition(currentState.value, currentState, _event) || {
      transitions: [],
      configuration: [],
      exitSet: [],
      source: currentState,
      actions: []
    };
    var prevConfig = stateUtils.getConfiguration([], this.getStateNodes(currentState.value));
    var resolvedConfig = stateTransition.configuration.length ? stateUtils.getConfiguration(prevConfig, stateTransition.configuration) : prevConfig;
    stateTransition.configuration = _tslib.__spreadArray([], _tslib.__read(resolvedConfig), false);
    return this.resolveTransition(stateTransition, currentState, currentState.context, exec, _event);
  };

  StateNode.prototype.resolveRaisedTransition = function (state, _event, originalEvent, predictableExec) {
    var _a;

    var currentActions = state.actions;
    state = this.transition(state, _event, undefined, predictableExec); // Save original event to state
    // TODO: this should be the raised event! Delete in V5 (breaking)

    state._event = originalEvent;
    state.event = originalEvent.data;

    (_a = state.actions).unshift.apply(_a, _tslib.__spreadArray([], _tslib.__read(currentActions), false));

    return state;
  };

  StateNode.prototype.resolveTransition = function (stateTransition, currentState, context, predictableExec, _event) {
    var e_6, _a, e_7, _b;

    var _this = this;

    if (_event === void 0) {
      _event = actions.initEvent;
    }

    var configuration = stateTransition.configuration; // Transition will "apply" if:
    // - this is the initial state (there is no current state)
    // - OR there are transitions

    var willTransition = !currentState || stateTransition.transitions.length > 0;
    var resolvedConfiguration = willTransition ? stateTransition.configuration : currentState ? currentState.configuration : [];
    var isDone = stateUtils.isInFinalState(resolvedConfiguration, this);
    var resolvedStateValue = willTransition ? stateUtils.getValue(this.machine, configuration) : undefined;
    var historyValue = currentState ? currentState.historyValue ? currentState.historyValue : stateTransition.source ? this.machine.historyValue(currentState.value) : undefined : undefined;
    var actionBlocks = this.getActions(new Set(resolvedConfiguration), isDone, stateTransition, context, _event, currentState, predictableExec);
    var activities = currentState ? _tslib.__assign({}, currentState.activities) : {};

    try {
      for (var actionBlocks_1 = _tslib.__values(actionBlocks), actionBlocks_1_1 = actionBlocks_1.next(); !actionBlocks_1_1.done; actionBlocks_1_1 = actionBlocks_1.next()) {
        var block = actionBlocks_1_1.value;

        try {
          for (var _c = (e_7 = void 0, _tslib.__values(block.actions)), _d = _c.next(); !_d.done; _d = _c.next()) {
            var action = _d.value;

            if (action.type === actionTypes.start) {
              activities[action.activity.id || action.activity.type] = action;
            } else if (action.type === actionTypes.stop) {
              activities[action.activity.id || action.activity.type] = false;
            }
          }
        } catch (e_7_1) {
          e_7 = {
            error: e_7_1
          };
        } finally {
          try {
            if (_d && !_d.done && (_b = _c.return)) _b.call(_c);
          } finally {
            if (e_7) throw e_7.error;
          }
        }
      }
    } catch (e_6_1) {
      e_6 = {
        error: e_6_1
      };
    } finally {
      try {
        if (actionBlocks_1_1 && !actionBlocks_1_1.done && (_a = actionBlocks_1.return)) _a.call(actionBlocks_1);
      } finally {
        if (e_6) throw e_6.error;
      }
    }

    var _e = _tslib.__read(actions.resolveActions(this, currentState, context, _event, actionBlocks, predictableExec, this.machine.config.predictableActionArguments || this.machine.config.preserveActionOrder), 2),
        resolvedActions = _e[0],
        updatedContext = _e[1];

    var _f = _tslib.__read(utils.partition(resolvedActions, utils.isRaisableAction), 2),
        raisedEvents = _f[0],
        nonRaisedActions = _f[1];

    var invokeActions = resolvedActions.filter(function (action) {
      var _a;

      return action.type === actionTypes.start && ((_a = action.activity) === null || _a === void 0 ? void 0 : _a.type) === actionTypes.invoke;
    });
    var children = invokeActions.reduce(function (acc, action) {
      acc[action.activity.id] = Actor.createInvocableActor(action.activity, _this.machine, updatedContext, _event);
      return acc;
    }, currentState ? _tslib.__assign({}, currentState.children) : {});
    var nextState = new State.State({
      value: resolvedStateValue || currentState.value,
      context: updatedContext,
      _event: _event,
      // Persist _sessionid between states
      _sessionid: currentState ? currentState._sessionid : null,
      historyValue: resolvedStateValue ? historyValue ? utils.updateHistoryValue(historyValue, resolvedStateValue) : undefined : currentState ? currentState.historyValue : undefined,
      history: !resolvedStateValue || stateTransition.source ? currentState : undefined,
      actions: resolvedStateValue ? nonRaisedActions : [],
      activities: resolvedStateValue ? activities : currentState ? currentState.activities : {},
      events: [],
      configuration: resolvedConfiguration,
      transitions: stateTransition.transitions,
      children: children,
      done: isDone,
      tags: stateUtils.getTagsFromConfiguration(resolvedConfiguration),
      machine: this
    });
    var didUpdateContext = context !== updatedContext;
    nextState.changed = _event.name === actionTypes.update || didUpdateContext; // Dispose of penultimate histories to prevent memory leaks

    var history = nextState.history;

    if (history) {
      delete history.history;
    } // There are transient transitions if the machine is not in a final state
    // and if some of the state nodes have transient ("always") transitions.


    var hasAlwaysTransitions = !isDone && (this._transient || configuration.some(function (stateNode) {
      return stateNode._transient;
    })); // If there are no enabled transitions, check if there are transient transitions.
    // If there are transient transitions, continue checking for more transitions
    // because an transient transition should be triggered even if there are no
    // enabled transitions.
    //
    // If we're already working on an transient transition then stop to prevent an infinite loop.
    //
    // Otherwise, if there are no enabled nor transient transitions, we are done.

    if (!willTransition && (!hasAlwaysTransitions || _event.name === NULL_EVENT)) {
      return nextState;
    }

    var maybeNextState = nextState;

    if (!isDone) {
      if (hasAlwaysTransitions) {
        maybeNextState = this.resolveRaisedTransition(maybeNextState, {
          type: actionTypes.nullEvent
        }, _event, predictableExec);
      }

      while (raisedEvents.length) {
        var raisedEvent = raisedEvents.shift();
        maybeNextState = this.resolveRaisedTransition(maybeNextState, raisedEvent._event, _event, predictableExec);
      }
    } // Detect if state changed


    var changed = maybeNextState.changed || (history ? !!maybeNextState.actions.length || didUpdateContext || typeof history.value !== typeof maybeNextState.value || !State.stateValuesEqual(maybeNextState.value, history.value) : undefined);
    maybeNextState.changed = changed; // Preserve original history after raised events

    maybeNextState.history = history;
    return maybeNextState;
  };
  /**
   * Returns the child state node from its relative `stateKey`, or throws.
   */


  StateNode.prototype.getStateNode = function (stateKey) {
    if (isStateId(stateKey)) {
      return this.machine.getStateNodeById(stateKey);
    }

    if (!this.states) {
      throw new Error("Unable to retrieve child state '".concat(stateKey, "' from '").concat(this.id, "'; no child states exist."));
    }

    var result = this.states[stateKey];

    if (!result) {
      throw new Error("Child state '".concat(stateKey, "' does not exist on '").concat(this.id, "'"));
    }

    return result;
  };
  /**
   * Returns the state node with the given `stateId`, or throws.
   *
   * @param stateId The state ID. The prefix "#" is removed.
   */


  StateNode.prototype.getStateNodeById = function (stateId) {
    var resolvedStateId = isStateId(stateId) ? stateId.slice(STATE_IDENTIFIER.length) : stateId;

    if (resolvedStateId === this.id) {
      return this;
    }

    var stateNode = this.machine.idMap[resolvedStateId];

    if (!stateNode) {
      throw new Error("Child state node '#".concat(resolvedStateId, "' does not exist on machine '").concat(this.id, "'"));
    }

    return stateNode;
  };
  /**
   * Returns the relative state node from the given `statePath`, or throws.
   *
   * @param statePath The string or string array relative path to the state node.
   */


  StateNode.prototype.getStateNodeByPath = function (statePath) {
    if (typeof statePath === 'string' && isStateId(statePath)) {
      try {
        return this.getStateNodeById(statePath.slice(1));
      } catch (e) {// try individual paths
        // throw e;
      }
    }

    var arrayStatePath = utils.toStatePath(statePath, this.delimiter).slice();
    var currentStateNode = this;

    while (arrayStatePath.length) {
      var key = arrayStatePath.shift();

      if (!key.length) {
        break;
      }

      currentStateNode = currentStateNode.getStateNode(key);
    }

    return currentStateNode;
  };
  /**
   * Resolves a partial state value with its full representation in this machine.
   *
   * @param stateValue The partial state value to resolve.
   */


  StateNode.prototype.resolve = function (stateValue) {
    var _a;

    var _this = this;

    if (!stateValue) {
      return this.initialStateValue || EMPTY_OBJECT; // TODO: type-specific properties
    }

    switch (this.type) {
      case 'parallel':
        return utils.mapValues(this.initialStateValue, function (subStateValue, subStateKey) {
          return subStateValue ? _this.getStateNode(subStateKey).resolve(stateValue[subStateKey] || subStateValue) : EMPTY_OBJECT;
        });

      case 'compound':
        if (utils.isString(stateValue)) {
          var subStateNode = this.getStateNode(stateValue);

          if (subStateNode.type === 'parallel' || subStateNode.type === 'compound') {
            return _a = {}, _a[stateValue] = subStateNode.initialStateValue, _a;
          }

          return stateValue;
        }

        if (!Object.keys(stateValue).length) {
          return this.initialStateValue || {};
        }

        return utils.mapValues(stateValue, function (subStateValue, subStateKey) {
          return subStateValue ? _this.getStateNode(subStateKey).resolve(subStateValue) : EMPTY_OBJECT;
        });

      default:
        return stateValue || EMPTY_OBJECT;
    }
  };

  StateNode.prototype.getResolvedPath = function (stateIdentifier) {
    if (isStateId(stateIdentifier)) {
      var stateNode = this.machine.idMap[stateIdentifier.slice(STATE_IDENTIFIER.length)];

      if (!stateNode) {
        throw new Error("Unable to find state node '".concat(stateIdentifier, "'"));
      }

      return stateNode.path;
    }

    return utils.toStatePath(stateIdentifier, this.delimiter);
  };

  Object.defineProperty(StateNode.prototype, "initialStateValue", {
    get: function () {
      var _a;

      if (this.__cache.initialStateValue) {
        return this.__cache.initialStateValue;
      }

      var initialStateValue;

      if (this.type === 'parallel') {
        initialStateValue = utils.mapFilterValues(this.states, function (state) {
          return state.initialStateValue || EMPTY_OBJECT;
        }, function (stateNode) {
          return !(stateNode.type === 'history');
        });
      } else if (this.initial !== undefined) {
        if (!this.states[this.initial]) {
          throw new Error("Initial state '".concat(this.initial, "' not found on '").concat(this.key, "'"));
        }

        initialStateValue = stateUtils.isLeafNode(this.states[this.initial]) ? this.initial : (_a = {}, _a[this.initial] = this.states[this.initial].initialStateValue, _a);
      } else {
        // The finite state value of a machine without child states is just an empty object
        initialStateValue = {};
      }

      this.__cache.initialStateValue = initialStateValue;
      return this.__cache.initialStateValue;
    },
    enumerable: false,
    configurable: true
  });

  StateNode.prototype.getInitialState = function (stateValue, context) {
    this._init(); // TODO: this should be in the constructor (see note in constructor)


    var configuration = this.getStateNodes(stateValue);
    return this.resolveTransition({
      configuration: configuration,
      exitSet: [],
      transitions: [],
      source: undefined,
      actions: []
    }, undefined, context !== null && context !== void 0 ? context : this.machine.context, undefined);
  };

  Object.defineProperty(StateNode.prototype, "initialState", {
    /**
     * The initial State instance, which includes all actions to be executed from
     * entering the initial state.
     */
    get: function () {
      var initialStateValue = this.initialStateValue;

      if (!initialStateValue) {
        throw new Error("Cannot retrieve initial state from simple state '".concat(this.id, "'."));
      }

      return this.getInitialState(initialStateValue);
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(StateNode.prototype, "target", {
    /**
     * The target state value of the history state node, if it exists. This represents the
     * default state value to transition to if no history value exists yet.
     */
    get: function () {
      var target;

      if (this.type === 'history') {
        var historyConfig = this.config;

        if (utils.isString(historyConfig.target)) {
          target = isStateId(historyConfig.target) ? utils.pathToStateValue(this.machine.getStateNodeById(historyConfig.target).path.slice(this.path.length - 1)) : historyConfig.target;
        } else {
          target = historyConfig.target;
        }
      }

      return target;
    },
    enumerable: false,
    configurable: true
  });
  /**
   * Returns the leaf nodes from a state path relative to this state node.
   *
   * @param relativeStateId The relative state path to retrieve the state nodes
   * @param history The previous state to retrieve history
   * @param resolve Whether state nodes should resolve to initial child state nodes
   */

  StateNode.prototype.getRelativeStateNodes = function (relativeStateId, historyValue, resolve) {
    if (resolve === void 0) {
      resolve = true;
    }

    return resolve ? relativeStateId.type === 'history' ? relativeStateId.resolveHistory(historyValue) : relativeStateId.initialStateNodes : [relativeStateId];
  };

  Object.defineProperty(StateNode.prototype, "initialStateNodes", {
    get: function () {
      var _this = this;

      if (stateUtils.isLeafNode(this)) {
        return [this];
      } // Case when state node is compound but no initial state is defined


      if (this.type === 'compound' && !this.initial) {
        if (!environment.IS_PRODUCTION) {
          utils.warn(false, "Compound state node '".concat(this.id, "' has no initial state."));
        }

        return [this];
      }

      var initialStateNodePaths = utils.toStatePaths(this.initialStateValue);
      return utils.flatten(initialStateNodePaths.map(function (initialPath) {
        return _this.getFromRelativePath(initialPath);
      }));
    },
    enumerable: false,
    configurable: true
  });
  /**
   * Retrieves state nodes from a relative path to this state node.
   *
   * @param relativePath The relative path from this state node
   * @param historyValue
   */

  StateNode.prototype.getFromRelativePath = function (relativePath) {
    if (!relativePath.length) {
      return [this];
    }

    var _a = _tslib.__read(relativePath),
        stateKey = _a[0],
        childStatePath = _a.slice(1);

    if (!this.states) {
      throw new Error("Cannot retrieve subPath '".concat(stateKey, "' from node with no states"));
    }

    var childStateNode = this.getStateNode(stateKey);

    if (childStateNode.type === 'history') {
      return childStateNode.resolveHistory();
    }

    if (!this.states[stateKey]) {
      throw new Error("Child state '".concat(stateKey, "' does not exist on '").concat(this.id, "'"));
    }

    return this.states[stateKey].getFromRelativePath(childStatePath);
  };

  StateNode.prototype.historyValue = function (relativeStateValue) {
    if (!Object.keys(this.states).length) {
      return undefined;
    }

    return {
      current: relativeStateValue || this.initialStateValue,
      states: utils.mapFilterValues(this.states, function (stateNode, key) {
        if (!relativeStateValue) {
          return stateNode.historyValue();
        }

        var subStateValue = utils.isString(relativeStateValue) ? undefined : relativeStateValue[key];
        return stateNode.historyValue(subStateValue || stateNode.initialStateValue);
      }, function (stateNode) {
        return !stateNode.history;
      })
    };
  };
  /**
   * Resolves to the historical value(s) of the parent state node,
   * represented by state nodes.
   *
   * @param historyValue
   */


  StateNode.prototype.resolveHistory = function (historyValue) {
    var _this = this;

    if (this.type !== 'history') {
      return [this];
    }

    var parent = this.parent;

    if (!historyValue) {
      var historyTarget = this.target;
      return historyTarget ? utils.flatten(utils.toStatePaths(historyTarget).map(function (relativeChildPath) {
        return parent.getFromRelativePath(relativeChildPath);
      })) : parent.initialStateNodes;
    }

    var subHistoryValue = utils.nestedPath(parent.path, 'states')(historyValue).current;

    if (utils.isString(subHistoryValue)) {
      return [parent.getStateNode(subHistoryValue)];
    }

    return utils.flatten(utils.toStatePaths(subHistoryValue).map(function (subStatePath) {
      return _this.history === 'deep' ? parent.getFromRelativePath(subStatePath) : [parent.states[subStatePath[0]]];
    }));
  };

  Object.defineProperty(StateNode.prototype, "stateIds", {
    /**
     * All the state node IDs of this state node and its descendant state nodes.
     */
    get: function () {
      var _this = this;

      var childStateIds = utils.flatten(Object.keys(this.states).map(function (stateKey) {
        return _this.states[stateKey].stateIds;
      }));
      return [this.id].concat(childStateIds);
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(StateNode.prototype, "events", {
    /**
     * All the event types accepted by this state node and its descendants.
     */
    get: function () {
      var e_8, _a, e_9, _b;

      if (this.__cache.events) {
        return this.__cache.events;
      }

      var states = this.states;
      var events = new Set(this.ownEvents);

      if (states) {
        try {
          for (var _c = _tslib.__values(Object.keys(states)), _d = _c.next(); !_d.done; _d = _c.next()) {
            var stateId = _d.value;
            var state = states[stateId];

            if (state.states) {
              try {
                for (var _e = (e_9 = void 0, _tslib.__values(state.events)), _f = _e.next(); !_f.done; _f = _e.next()) {
                  var event_1 = _f.value;
                  events.add("".concat(event_1));
                }
              } catch (e_9_1) {
                e_9 = {
                  error: e_9_1
                };
              } finally {
                try {
                  if (_f && !_f.done && (_b = _e.return)) _b.call(_e);
                } finally {
                  if (e_9) throw e_9.error;
                }
              }
            }
          }
        } catch (e_8_1) {
          e_8 = {
            error: e_8_1
          };
        } finally {
          try {
            if (_d && !_d.done && (_a = _c.return)) _a.call(_c);
          } finally {
            if (e_8) throw e_8.error;
          }
        }
      }

      return this.__cache.events = Array.from(events);
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(StateNode.prototype, "ownEvents", {
    /**
     * All the events that have transitions directly from this state node.
     *
     * Excludes any inert events.
     */
    get: function () {
      var events = new Set(this.transitions.filter(function (transition) {
        return !(!transition.target && !transition.actions.length && transition.internal);
      }).map(function (transition) {
        return transition.eventType;
      }));
      return Array.from(events);
    },
    enumerable: false,
    configurable: true
  });

  StateNode.prototype.resolveTarget = function (_target) {
    var _this = this;

    if (_target === undefined) {
      // an undefined target signals that the state node should not transition from that state when receiving that event
      return undefined;
    }

    return _target.map(function (target) {
      if (!utils.isString(target)) {
        return target;
      }

      var isInternalTarget = target[0] === _this.delimiter; // If internal target is defined on machine,
      // do not include machine key on target

      if (isInternalTarget && !_this.parent) {
        return _this.getStateNodeByPath(target.slice(1));
      }

      var resolvedTarget = isInternalTarget ? _this.key + target : target;

      if (_this.parent) {
        try {
          var targetStateNode = _this.parent.getStateNodeByPath(resolvedTarget);

          return targetStateNode;
        } catch (err) {
          throw new Error("Invalid transition definition for state node '".concat(_this.id, "':\n").concat(err.message));
        }
      } else {
        return _this.getStateNodeByPath(resolvedTarget);
      }
    });
  };

  StateNode.prototype.formatTransition = function (transitionConfig) {
    var _this = this;

    var normalizedTarget = utils.normalizeTarget(transitionConfig.target);
    var internal = 'internal' in transitionConfig ? transitionConfig.internal : normalizedTarget ? normalizedTarget.some(function (_target) {
      return utils.isString(_target) && _target[0] === _this.delimiter;
    }) : true;
    var guards = this.machine.options.guards;
    var target = this.resolveTarget(normalizedTarget);

    var transition = _tslib.__assign(_tslib.__assign({}, transitionConfig), {
      actions: actions.toActionObjects(utils.toArray(transitionConfig.actions)),
      cond: utils.toGuard(transitionConfig.cond, guards),
      target: target,
      source: this,
      internal: internal,
      eventType: transitionConfig.event,
      toJSON: function () {
        return _tslib.__assign(_tslib.__assign({}, transition), {
          target: transition.target ? transition.target.map(function (t) {
            return "#".concat(t.id);
          }) : undefined,
          source: "#".concat(_this.id)
        });
      }
    });

    return transition;
  };

  StateNode.prototype.formatTransitions = function () {
    var e_10, _a;

    var _this = this;

    var onConfig;

    if (!this.config.on) {
      onConfig = [];
    } else if (Array.isArray(this.config.on)) {
      onConfig = this.config.on;
    } else {
      var _b = this.config.on,
          _c = WILDCARD,
          _d = _b[_c],
          wildcardConfigs = _d === void 0 ? [] : _d,
          strictTransitionConfigs_1 = _tslib.__rest(_b, [typeof _c === "symbol" ? _c : _c + ""]);

      onConfig = utils.flatten(Object.keys(strictTransitionConfigs_1).map(function (key) {
        if (!environment.IS_PRODUCTION && key === NULL_EVENT) {
          utils.warn(false, "Empty string transition configs (e.g., `{ on: { '': ... }}`) for transient transitions are deprecated. Specify the transition in the `{ always: ... }` property instead. " + "Please check the `on` configuration for \"#".concat(_this.id, "\"."));
        }

        var transitionConfigArray = utils.toTransitionConfigArray(key, strictTransitionConfigs_1[key]);

        if (!environment.IS_PRODUCTION) {
          validateArrayifiedTransitions(_this, key, transitionConfigArray);
        }

        return transitionConfigArray;
      }).concat(utils.toTransitionConfigArray(WILDCARD, wildcardConfigs)));
    }

    var eventlessConfig = this.config.always ? utils.toTransitionConfigArray('', this.config.always) : [];
    var doneConfig = this.config.onDone ? utils.toTransitionConfigArray(String(actions.done(this.id)), this.config.onDone) : [];

    if (!environment.IS_PRODUCTION) {
      utils.warn(!(this.config.onDone && !this.parent), "Root nodes cannot have an \".onDone\" transition. Please check the config of \"".concat(this.id, "\"."));
    }

    var invokeConfig = utils.flatten(this.invoke.map(function (invokeDef) {
      var settleTransitions = [];

      if (invokeDef.onDone) {
        settleTransitions.push.apply(settleTransitions, _tslib.__spreadArray([], _tslib.__read(utils.toTransitionConfigArray(String(actions.doneInvoke(invokeDef.id)), invokeDef.onDone)), false));
      }

      if (invokeDef.onError) {
        settleTransitions.push.apply(settleTransitions, _tslib.__spreadArray([], _tslib.__read(utils.toTransitionConfigArray(String(actions.error(invokeDef.id)), invokeDef.onError)), false));
      }

      return settleTransitions;
    }));
    var delayedTransitions = this.after;
    var formattedTransitions = utils.flatten(_tslib.__spreadArray(_tslib.__spreadArray(_tslib.__spreadArray(_tslib.__spreadArray([], _tslib.__read(doneConfig), false), _tslib.__read(invokeConfig), false), _tslib.__read(onConfig), false), _tslib.__read(eventlessConfig), false).map(function (transitionConfig) {
      return utils.toArray(transitionConfig).map(function (transition) {
        return _this.formatTransition(transition);
      });
    }));

    try {
      for (var delayedTransitions_1 = _tslib.__values(delayedTransitions), delayedTransitions_1_1 = delayedTransitions_1.next(); !delayedTransitions_1_1.done; delayedTransitions_1_1 = delayedTransitions_1.next()) {
        var delayedTransition = delayedTransitions_1_1.value;
        formattedTransitions.push(delayedTransition);
      }
    } catch (e_10_1) {
      e_10 = {
        error: e_10_1
      };
    } finally {
      try {
        if (delayedTransitions_1_1 && !delayedTransitions_1_1.done && (_a = delayedTransitions_1.return)) _a.call(delayedTransitions_1);
      } finally {
        if (e_10) throw e_10.error;
      }
    }

    return formattedTransitions;
  };

  return StateNode;
}();

exports.StateNode = StateNode;

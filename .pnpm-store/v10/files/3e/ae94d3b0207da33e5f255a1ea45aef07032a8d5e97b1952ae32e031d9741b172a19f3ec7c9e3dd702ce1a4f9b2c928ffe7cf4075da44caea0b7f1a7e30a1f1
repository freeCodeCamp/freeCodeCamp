/**
 * Serialization/deserialization classes and functions for communication between a main Mocha process and worker processes.
 * @module serializer
 * @private
 */

'use strict';

const {type, breakCircularDeps} = require('../utils');
const {createInvalidArgumentTypeError} = require('../errors');
// this is not named `mocha:parallel:serializer` because it's noisy and it's
// helpful to be able to write `DEBUG=mocha:parallel*` and get everything else.
const debug = require('debug')('mocha:serializer');

const SERIALIZABLE_RESULT_NAME = 'SerializableWorkerResult';
const SERIALIZABLE_TYPES = new Set(['object', 'array', 'function', 'error']);

/**
 * The serializable result of a test file run from a worker.
 * @private
 */
class SerializableWorkerResult {
  /**
   * Creates instance props; of note, the `__type` prop.
   *
   * Note that the failure count is _redundant_ and could be derived from the
   * list of events; but since we're already doing the work, might as well use
   * it.
   * @param {SerializableEvent[]} [events=[]] - Events to eventually serialize
   * @param {number} [failureCount=0] - Failure count
   */
  constructor(events = [], failureCount = 0) {
    /**
     * The number of failures in this run
     * @type {number}
     */
    this.failureCount = failureCount;
    /**
     * All relevant events emitted from the {@link Runner}.
     * @type {SerializableEvent[]}
     */
    this.events = events;

    /**
     * Symbol-like value needed to distinguish when attempting to deserialize
     * this object (once it's been received over IPC).
     * @type {Readonly<"SerializableWorkerResult">}
     */
    Object.defineProperty(this, '__type', {
      value: SERIALIZABLE_RESULT_NAME,
      enumerable: true,
      writable: false
    });
  }

  /**
   * Instantiates a new {@link SerializableWorkerResult}.
   * @param {...any} args - Args to constructor
   * @returns {SerializableWorkerResult}
   */
  static create(...args) {
    return new SerializableWorkerResult(...args);
  }

  /**
   * Serializes each {@link SerializableEvent} in our `events` prop;
   * makes this object read-only.
   * @returns {Readonly<SerializableWorkerResult>}
   */
  serialize() {
    this.events.forEach(event => {
      event.serialize();
    });
    return Object.freeze(this);
  }

  /**
   * Deserializes a {@link SerializedWorkerResult} into something reporters can
   * use; calls {@link SerializableEvent.deserialize} on each item in its
   * `events` prop.
   * @param {SerializedWorkerResult} obj
   * @returns {SerializedWorkerResult}
   */
  static deserialize(obj) {
    obj.events.forEach(event => {
      SerializableEvent.deserialize(event);
    });
    return obj;
  }

  /**
   * Returns `true` if this is a {@link SerializedWorkerResult} or a
   * {@link SerializableWorkerResult}.
   * @param {*} value - A value to check
   * @returns {boolean} If true, it's deserializable
   */
  static isSerializedWorkerResult(value) {
    return (
      value instanceof SerializableWorkerResult ||
      (type(value) === 'object' && value.__type === SERIALIZABLE_RESULT_NAME)
    );
  }
}

/**
 * Represents an event, emitted by a {@link Runner}, which is to be transmitted
 * over IPC.
 *
 * Due to the contents of the event data, it's not possible to send them
 * verbatim. When received by the main process--and handled by reporters--these
 * objects are expected to contain {@link Runnable} instances.  This class
 * provides facilities to perform the translation via serialization and
 * deserialization.
 * @private
 */
class SerializableEvent {
  /**
   * Constructs a `SerializableEvent`, throwing if we receive unexpected data.
   *
   * Practically, events emitted from `Runner` have a minimum of zero (0)
   * arguments-- (for example, {@link Runnable.constants.EVENT_RUN_BEGIN}) and a
   * maximum of two (2) (for example,
   * {@link Runnable.constants.EVENT_TEST_FAIL}, where the second argument is an
   * `Error`).  The first argument, if present, is a {@link Runnable}. This
   * constructor's arguments adhere to this convention.
   * @param {string} eventName - A non-empty event name.
   * @param {any} [originalValue] - Some data. Corresponds to extra arguments
   * passed to `EventEmitter#emit`.
   * @param {Error} [originalError] - An error, if there's an error.
   * @throws If `eventName` is empty, or `originalValue` is a non-object.
   */
  constructor(eventName, originalValue, originalError) {
    if (!eventName) {
      throw createInvalidArgumentTypeError(
        'Empty `eventName` string argument',
        'eventName',
        'string'
      );
    }
    /**
     * The event name.
     * @memberof SerializableEvent
     */
    this.eventName = eventName;
    const originalValueType = type(originalValue);
    if (originalValueType !== 'object' && originalValueType !== 'undefined') {
      throw createInvalidArgumentTypeError(
        `Expected object but received ${originalValueType}`,
        'originalValue',
        'object'
      );
    }
    /**
     * An error, if present.
     * @memberof SerializableEvent
     */
    Object.defineProperty(this, 'originalError', {
      value: originalError,
      enumerable: false
    });

    /**
     * The raw value.
     *
     * We don't want this value sent via IPC; making it non-enumerable will do that.
     *
     * @memberof SerializableEvent
     */
    Object.defineProperty(this, 'originalValue', {
      value: originalValue,
      enumerable: false
    });
  }

  /**
   * In case you hated using `new` (I do).
   *
   * @param  {...any} args - Args for {@link SerializableEvent#constructor}.
   * @returns {SerializableEvent} A new `SerializableEvent`
   */
  static create(...args) {
    return new SerializableEvent(...args);
  }

  /**
   * Used internally by {@link SerializableEvent#serialize}.
   * @ignore
   * @param {Array<object|string>} pairs - List of parent/key tuples to process; modified in-place. This JSDoc type is an approximation
   * @param {object} parent - Some parent object
   * @param {string} key - Key to inspect
   */
  static _serialize(pairs, parent, key) {
    let value = parent[key];
    let _type = type(value);
    if (_type === 'error') {
      // we need to reference the stack prop b/c it's lazily-loaded.
      // `__type` is necessary for deserialization to create an `Error` later.
      // `message` is apparently not enumerable, so we must handle it specifically.
      value = Object.assign(Object.create(null), value, {
        stack: value.stack,
        message: value.message,
        __type: 'Error'
      });
      parent[key] = value;
      // after this, set the result of type(value) to be `object`, and we'll throw
      // whatever other junk is in the original error into the new `value`.
      _type = 'object';
    }
    switch (_type) {
      case 'object':
        if (type(value.serialize) === 'function') {
          parent[key] = value.serialize();
        } else {
          // by adding props to the `pairs` array, we will process it further
          pairs.push(
            ...Object.keys(value)
              .filter(key => SERIALIZABLE_TYPES.has(type(value[key])))
              .map(key => [value, key])
          );
        }
        break;
      case 'function':
        // we _may_ want to dig in to functions for some assertion libraries
        // that might put a usable property on a function.
        // for now, just zap it.
        delete parent[key];
        break;
      case 'array':
        pairs.push(
          ...value
            .filter(value => SERIALIZABLE_TYPES.has(type(value)))
            .map((value, index) => [value, index])
        );
        break;
    }
  }

  /**
   * Modifies this object *in place* (for theoretical memory consumption &
   * performance reasons); serializes `SerializableEvent#originalValue` (placing
   * the result in `SerializableEvent#data`) and `SerializableEvent#error`.
   * Freezes this object. The result is an object that can be transmitted over
   * IPC.
   * If this quickly becomes unmaintainable, we will want to move towards immutable
   * objects post-haste.
   */
  serialize() {
    // given a parent object and a key, inspect the value and decide whether
    // to replace it, remove it, or add it to our `pairs` array to further process.
    // this is recursion in loop form.
    const originalValue = this.originalValue;
    const result = Object.assign(Object.create(null), {
      data:
        type(originalValue) === 'object' &&
        type(originalValue.serialize) === 'function'
          ? originalValue.serialize()
          : originalValue,
      error: this.originalError
    });

    // mutates the object
    breakCircularDeps(result.error);

    const pairs = Object.keys(result).map(key => [result, key]);
    const seenPairs = new Set();
    let pair;

    while ((pair = pairs.shift())) {
      if (seenPairs.has(pair[1])) {
        continue;
      }

      seenPairs.add(pair[1]);
      SerializableEvent._serialize(pairs, ...pair);
    }

    this.data = result.data;
    this.error = result.error;

    return Object.freeze(this);
  }

  /**
   * Used internally by {@link SerializableEvent.deserialize}; creates an `Error`
   * from an `Error`-like (serialized) object
   * @ignore
   * @param {Object} value - An Error-like value
   * @returns {Error} Real error
   */
  static _deserializeError(value) {
    const error = new Error(value.message);
    error.stack = value.stack;
    Object.assign(error, value);
    delete error.__type;
    return error;
  }

  /**
   * Used internally by {@link SerializableEvent.deserialize}; recursively
   * deserializes an object in-place.
   * @param {object|Array} parent - Some object or array
   * @param {string|number} key - Some prop name or array index within `parent`
   */
  static _deserializeObject(parent, key) {
    if (key === '__proto__') {
      delete parent[key];
      return;
    }
    const value = parent[key];
    // keys beginning with `$$` are converted into functions returning the value
    // and renamed, stripping the `$$` prefix.
    // functions defined this way cannot be array members!
    if (type(key) === 'string' && key.startsWith('$$')) {
      const newKey = key.slice(2);
      parent[newKey] = () => value;
      delete parent[key];
      key = newKey;
    }
    if (type(value) === 'array') {
      value.forEach((_, idx) => {
        SerializableEvent._deserializeObject(value, idx);
      });
    } else if (type(value) === 'object') {
      if (value.__type === 'Error') {
        parent[key] = SerializableEvent._deserializeError(value);
      } else {
        Object.keys(value).forEach(key => {
          SerializableEvent._deserializeObject(value, key);
        });
      }
    }
  }

  /**
   * Deserialize value returned from a worker into something more useful.
   * Does not return the same object.
   * @todo do this in a loop instead of with recursion (if necessary)
   * @param {SerializedEvent} obj - Object returned from worker
   * @returns {SerializedEvent} Deserialized result
   */
  static deserialize(obj) {
    if (!obj) {
      throw createInvalidArgumentTypeError('Expected value', obj);
    }

    obj = Object.assign(Object.create(null), obj);

    if (obj.data) {
      Object.keys(obj.data).forEach(key => {
        SerializableEvent._deserializeObject(obj.data, key);
      });
    }

    if (obj.error) {
      obj.error = SerializableEvent._deserializeError(obj.error);
    }

    return obj;
  }
}

/**
 * "Serializes" a value for transmission over IPC as a message.
 *
 * If value is an object and has a `serialize()` method, call that method; otherwise return the object and hope for the best.
 *
 * @param {*} [value] - A value to serialize
 */
exports.serialize = function serialize(value) {
  const result =
    type(value) === 'object' && type(value.serialize) === 'function'
      ? value.serialize()
      : value;
  debug('serialized: %O', result);
  return result;
};

/**
 * "Deserializes" a "message" received over IPC.
 *
 * This could be expanded with other objects that need deserialization,
 * but at present time we only care about {@link SerializableWorkerResult} objects.
 *
 * @param {*} [value] - A "message" to deserialize
 */
exports.deserialize = function deserialize(value) {
  const result = SerializableWorkerResult.isSerializedWorkerResult(value)
    ? SerializableWorkerResult.deserialize(value)
    : value;
  debug('deserialized: %O', result);
  return result;
};

exports.SerializableEvent = SerializableEvent;
exports.SerializableWorkerResult = SerializableWorkerResult;

/**
 * The result of calling `SerializableEvent.serialize`, as received
 * by the deserializer.
 * @private
 * @typedef {Object} SerializedEvent
 * @property {object?} data - Optional serialized data
 * @property {object?} error - Optional serialized `Error`
 */

/**
 * The result of calling `SerializableWorkerResult.serialize` as received
 * by the deserializer.
 * @private
 * @typedef {Object} SerializedWorkerResult
 * @property {number} failureCount - Number of failures
 * @property {SerializedEvent[]} events - Serialized events
 * @property {"SerializedWorkerResult"} __type - Symbol-like to denote the type of object this is
 */

const { Readable } = require('stream');
const {
    normalizeReplacer,
    normalizeSpace,
    replaceValue,
    getTypeAsync,
    type: {
        PRIMITIVE,
        OBJECT,
        ARRAY,
        PROMISE,
        STRING_STREAM,
        OBJECT_STREAM
    }
} = require('./utils');
const noop = () => {};
const hasOwnProperty = Object.prototype.hasOwnProperty;

// TODO: Remove when drop support for Node.js 10
// Node.js 10 has no well-formed JSON.stringify()
// https://github.com/tc39/proposal-well-formed-stringify
// Adopted code from https://bugs.chromium.org/p/v8/issues/detail?id=7782#c12
const wellformedStringStringify = JSON.stringify('\ud800') === '"\\ud800"'
    ? JSON.stringify
    : s => JSON.stringify(s).replace(
        /\p{Surrogate}/gu,
        m => `\\u${m.charCodeAt(0).toString(16)}`
    );

function push() {
    this.push(this._stack.value);
    this.popStack();
}

function pushPrimitive(value) {
    switch (typeof value) {
        case 'string':
            this.push(this.encodeString(value));
            break;

        case 'number':
            this.push(Number.isFinite(value) ? this.encodeNumber(value) : 'null');
            break;

        case 'boolean':
            this.push(value ? 'true' : 'false');
            break;

        case 'undefined':
        case 'object': // typeof null === 'object'
            this.push('null');
            break;

        default:
            this.destroy(new TypeError(`Do not know how to serialize a ${value.constructor && value.constructor.name || typeof value}`));
    }
}

function processObjectEntry(key) {
    const current = this._stack;

    if (!current.first) {
        current.first = true;
    } else {
        this.push(',');
    }

    if (this.space) {
        this.push(`\n${this.space.repeat(this._depth)}${this.encodeString(key)}: `);
    } else {
        this.push(this.encodeString(key) + ':');
    }
}

function processObject() {
    const current = this._stack;

    // when no keys left, remove obj from stack
    if (current.index === current.keys.length) {
        if (this.space && current.first) {
            this.push(`\n${this.space.repeat(this._depth - 1)}}`);
        } else {
            this.push('}');
        }

        this.popStack();
        return;
    }

    const key = current.keys[current.index];

    this.processValue(current.value, key, current.value[key], processObjectEntry);
    current.index++;
}

function processArrayItem(index) {
    if (index !== 0) {
        this.push(',');
    }

    if (this.space) {
        this.push(`\n${this.space.repeat(this._depth)}`);
    }
}

function processArray() {
    const current = this._stack;

    if (current.index === current.value.length) {
        if (this.space && current.index > 0) {
            this.push(`\n${this.space.repeat(this._depth - 1)}]`);
        } else {
            this.push(']');
        }

        this.popStack();
        return;
    }

    this.processValue(current.value, current.index, current.value[current.index], processArrayItem);
    current.index++;
}

function createStreamReader(fn) {
    return function() {
        const current = this._stack;
        const data = current.value.read(this._readSize);

        if (data !== null) {
            current.first = false;
            fn.call(this, data, current);
        } else {
            if ((current.first && !current.value._readableState.reading) || current.ended) {
                this.popStack();
            } else {
                current.first = true;
                current.awaiting = true;
            }
        }
    };
}

const processReadableObject = createStreamReader(function(data, current) {
    this.processValue(current.value, current.index, data, processArrayItem);
    current.index++;
});

const processReadableString = createStreamReader(function(data) {
    this.push(data);
});

class JsonStringifyStream extends Readable {
    constructor(value, replacer, space) {
        super({
            autoDestroy: true
        });

        this.getKeys = Object.keys;
        this.replacer = normalizeReplacer(replacer);

        if (Array.isArray(this.replacer)) {
            const allowlist = this.replacer;

            this.getKeys = (value) => allowlist.filter(key => hasOwnProperty.call(value, key));
            this.replacer = null;
        }

        this.space = normalizeSpace(space);
        this._depth = 0;

        this.error = null;
        this._processing = false;
        this._ended = false;

        this._readSize = 0;
        this._buffer = '';

        this._stack = null;
        this._visited = new WeakSet();

        this.pushStack({
            handler: () => {
                this.popStack();
                this.processValue({ '': value }, '', value, noop);
            }
        });
    }

    encodeString(value) {
        if (/[^\x20-\uD799]|[\x22\x5c]/.test(value)) {
            return wellformedStringStringify(value);
        }

        return '"' + value + '"';
    }

    encodeNumber(value) {
        return value;
    }

    processValue(holder, key, value, callback) {
        value = replaceValue(holder, key, value, this.replacer);

        let type = getTypeAsync(value);

        switch (type) {
            case PRIMITIVE:
                if (callback !== processObjectEntry || value !== undefined) {
                    callback.call(this, key);
                    pushPrimitive.call(this, value);
                }
                break;

            case OBJECT:
                callback.call(this, key);

                // check for circular structure
                if (this._visited.has(value)) {
                    return this.destroy(new TypeError('Converting circular structure to JSON'));
                }

                this._visited.add(value);
                this._depth++;
                this.push('{');
                this.pushStack({
                    handler: processObject,
                    value,
                    index: 0,
                    first: false,
                    keys: this.getKeys(value)
                });
                break;

            case ARRAY:
                callback.call(this, key);

                // check for circular structure
                if (this._visited.has(value)) {
                    return this.destroy(new TypeError('Converting circular structure to JSON'));
                }

                this._visited.add(value);

                this.push('[');
                this.pushStack({
                    handler: processArray,
                    value,
                    index: 0
                });
                this._depth++;
                break;

            case PROMISE:
                this.pushStack({
                    handler: noop,
                    awaiting: true
                });

                Promise.resolve(value)
                    .then(resolved => {
                        this.popStack();
                        this.processValue(holder, key, resolved, callback);
                        this.processStack();
                    })
                    .catch(error => {
                        this.destroy(error);
                    });
                break;

            case STRING_STREAM:
            case OBJECT_STREAM:
                callback.call(this, key);

                // TODO: Remove when drop support for Node.js 10
                // Used `_readableState.endEmitted` as fallback, since Node.js 10 has no `readableEnded` getter
                if (value.readableEnded || value._readableState.endEmitted) {
                    return this.destroy(new Error('Readable Stream has ended before it was serialized. All stream data have been lost'));
                }

                if (value.readableFlowing) {
                    return this.destroy(new Error('Readable Stream is in flowing mode, data may have been lost. Trying to pause stream.'));
                }

                if (type === OBJECT_STREAM) {
                    this.push('[');
                    this.pushStack({
                        handler: push,
                        value: this.space ? '\n' + this.space.repeat(this._depth) + ']' : ']'
                    });
                    this._depth++;
                }

                const self = this.pushStack({
                    handler: type === OBJECT_STREAM ? processReadableObject : processReadableString,
                    value,
                    index: 0,
                    first: false,
                    ended: false,
                    awaiting: !value.readable || value.readableLength === 0
                });
                const continueProcessing = () => {
                    if (self.awaiting) {
                        self.awaiting = false;
                        this.processStack();
                    }
                };

                value.once('error', error => this.destroy(error));
                value.once('end', () => {
                    self.ended = true;
                    continueProcessing();
                });
                value.on('readable', continueProcessing);
                break;
        }
    }

    pushStack(node) {
        node.prev = this._stack;
        return this._stack = node;
    }

    popStack() {
        const { handler, value } = this._stack;

        if (handler === processObject || handler === processArray || handler === processReadableObject) {
            this._visited.delete(value);
            this._depth--;
        }

        this._stack = this._stack.prev;
    }

    processStack() {
        if (this._processing || this._ended) {
            return;
        }

        try {
            this._processing = true;

            while (this._stack !== null && !this._stack.awaiting) {
                this._stack.handler.call(this);

                if (!this._processing) {
                    return;
                }
            }

            this._processing = false;
        } catch (error) {
            this.destroy(error);
            return;
        }

        if (this._stack === null && !this._ended) {
            this._finish();
            this.push(null);
        }
    }

    push(data) {
        if (data !== null) {
            this._buffer += data;

            // check buffer overflow
            if (this._buffer.length < this._readSize) {
                return;
            }

            // flush buffer
            data = this._buffer;
            this._buffer = '';
            this._processing = false;
        }

        super.push(data);
    }

    _read(size) {
        // start processing
        this._readSize = size || this.readableHighWaterMark;
        this.processStack();
    }

    _finish() {
        this._ended = true;
        this._processing = false;
        this._stack = null;
        this._visited = null;

        if (this._buffer && this._buffer.length) {
            super.push(this._buffer); // flush buffer
        }

        this._buffer = '';
    }

    _destroy(error, cb) {
        this.error = this.error || error;
        this._finish();
        cb(error);
    }
}

module.exports = function createJsonStringifyStream(value, replacer, space) {
    return new JsonStringifyStream(value, replacer, space);
};

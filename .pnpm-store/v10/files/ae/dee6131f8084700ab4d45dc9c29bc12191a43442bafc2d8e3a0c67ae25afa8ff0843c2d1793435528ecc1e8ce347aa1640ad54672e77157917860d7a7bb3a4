"use strict";
// The whole point behind this internal module is to allow Node.js to no
// longer be forced to treat every error message change as a semver-major
// change. The NodeError classes here all expose a `code` property whose
// value statically and permanently identifies the error. While the error
// message may change, the code should not.
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.E = exports.AssertionError = exports.message = exports.RangeError = exports.TypeError = exports.Error = void 0;
var assert = require("assert");
var util = require("util");
var kCode = typeof Symbol === 'undefined' ? '_kCode' : Symbol('code');
var messages = {}; // new Map();
function makeNodeError(Base) {
    return /** @class */ (function (_super) {
        __extends(NodeError, _super);
        function NodeError(key) {
            var args = [];
            for (var _i = 1; _i < arguments.length; _i++) {
                args[_i - 1] = arguments[_i];
            }
            var _this = _super.call(this, message(key, args)) || this;
            _this.code = key;
            _this[kCode] = key;
            _this.name = "".concat(_super.prototype.name, " [").concat(_this[kCode], "]");
            return _this;
        }
        return NodeError;
    }(Base));
}
var g = typeof globalThis !== 'undefined' ? globalThis : global;
var AssertionError = /** @class */ (function (_super) {
    __extends(AssertionError, _super);
    function AssertionError(options) {
        var _this = this;
        if (typeof options !== 'object' || options === null) {
            throw new exports.TypeError('ERR_INVALID_ARG_TYPE', 'options', 'object');
        }
        if (options.message) {
            _this = _super.call(this, options.message) || this;
        }
        else {
            _this = _super.call(this, "".concat(util.inspect(options.actual).slice(0, 128), " ") +
                "".concat(options.operator, " ").concat(util.inspect(options.expected).slice(0, 128))) || this;
        }
        _this.generatedMessage = !options.message;
        _this.name = 'AssertionError [ERR_ASSERTION]';
        _this.code = 'ERR_ASSERTION';
        _this.actual = options.actual;
        _this.expected = options.expected;
        _this.operator = options.operator;
        exports.Error.captureStackTrace(_this, options.stackStartFunction);
        return _this;
    }
    return AssertionError;
}(g.Error));
exports.AssertionError = AssertionError;
function message(key, args) {
    assert.strictEqual(typeof key, 'string');
    // const msg = messages.get(key);
    var msg = messages[key];
    assert(msg, "An invalid error message key was used: ".concat(key, "."));
    var fmt;
    if (typeof msg === 'function') {
        fmt = msg;
    }
    else {
        fmt = util.format;
        if (args === undefined || args.length === 0)
            return msg;
        args.unshift(msg);
    }
    return String(fmt.apply(null, args));
}
exports.message = message;
// Utility function for registering the error codes. Only used here. Exported
// *only* to allow for testing.
function E(sym, val) {
    messages[sym] = typeof val === 'function' ? val : String(val);
}
exports.E = E;
exports.Error = makeNodeError(g.Error);
exports.TypeError = makeNodeError(g.TypeError);
exports.RangeError = makeNodeError(g.RangeError);
// To declare an error message, use the E(sym, val) function above. The sym
// must be an upper case string. The val can be either a function or a string.
// The return value of the function must be a string.
// Examples:
// E('EXAMPLE_KEY1', 'This is the error value');
// E('EXAMPLE_KEY2', (a, b) => return `${a} ${b}`);
//
// Once an error code has been assigned, the code itself MUST NOT change and
// any given error code must never be reused to identify a different error.
//
// Any error code added here should also be added to the documentation
//
// Note: Please try to keep these in alphabetical order
E('ERR_ARG_NOT_ITERABLE', '%s must be iterable');
E('ERR_ASSERTION', '%s');
E('ERR_BUFFER_OUT_OF_BOUNDS', bufferOutOfBounds);
E('ERR_CHILD_CLOSED_BEFORE_REPLY', 'Child closed before reply received');
E('ERR_CONSOLE_WRITABLE_STREAM', 'Console expects a writable stream instance for %s');
E('ERR_CPU_USAGE', 'Unable to obtain cpu usage %s');
E('ERR_DNS_SET_SERVERS_FAILED', function (err, servers) { return "c-ares failed to set servers: \"".concat(err, "\" [").concat(servers, "]"); });
E('ERR_FALSY_VALUE_REJECTION', 'Promise was rejected with falsy value');
E('ERR_ENCODING_NOT_SUPPORTED', function (enc) { return "The \"".concat(enc, "\" encoding is not supported"); });
E('ERR_ENCODING_INVALID_ENCODED_DATA', function (enc) { return "The encoded data was not valid for encoding ".concat(enc); });
E('ERR_HTTP_HEADERS_SENT', 'Cannot render headers after they are sent to the client');
E('ERR_HTTP_INVALID_STATUS_CODE', 'Invalid status code: %s');
E('ERR_HTTP_TRAILER_INVALID', 'Trailers are invalid with this transfer encoding');
E('ERR_INDEX_OUT_OF_RANGE', 'Index out of range');
E('ERR_INVALID_ARG_TYPE', invalidArgType);
E('ERR_INVALID_ARRAY_LENGTH', function (name, len, actual) {
    assert.strictEqual(typeof actual, 'number');
    return "The array \"".concat(name, "\" (length ").concat(actual, ") must be of length ").concat(len, ".");
});
E('ERR_INVALID_BUFFER_SIZE', 'Buffer size must be a multiple of %s');
E('ERR_INVALID_CALLBACK', 'Callback must be a function');
E('ERR_INVALID_CHAR', 'Invalid character in %s');
E('ERR_INVALID_CURSOR_POS', 'Cannot set cursor row without setting its column');
E('ERR_INVALID_FD', '"fd" must be a positive integer: %s');
E('ERR_INVALID_FILE_URL_HOST', 'File URL host must be "localhost" or empty on %s');
E('ERR_INVALID_FILE_URL_PATH', 'File URL path %s');
E('ERR_INVALID_HANDLE_TYPE', 'This handle type cannot be sent');
E('ERR_INVALID_IP_ADDRESS', 'Invalid IP address: %s');
E('ERR_INVALID_OPT_VALUE', function (name, value) {
    return "The value \"".concat(String(value), "\" is invalid for option \"").concat(name, "\"");
});
E('ERR_INVALID_OPT_VALUE_ENCODING', function (value) { return "The value \"".concat(String(value), "\" is invalid for option \"encoding\""); });
E('ERR_INVALID_REPL_EVAL_CONFIG', 'Cannot specify both "breakEvalOnSigint" and "eval" for REPL');
E('ERR_INVALID_SYNC_FORK_INPUT', 'Asynchronous forks do not support Buffer, Uint8Array or string input: %s');
E('ERR_INVALID_THIS', 'Value of "this" must be of type %s');
E('ERR_INVALID_TUPLE', '%s must be an iterable %s tuple');
E('ERR_INVALID_URL', 'Invalid URL: %s');
E('ERR_INVALID_URL_SCHEME', function (expected) { return "The URL must be ".concat(oneOf(expected, 'scheme')); });
E('ERR_IPC_CHANNEL_CLOSED', 'Channel closed');
E('ERR_IPC_DISCONNECTED', 'IPC channel is already disconnected');
E('ERR_IPC_ONE_PIPE', 'Child process can have only one IPC pipe');
E('ERR_IPC_SYNC_FORK', 'IPC cannot be used with synchronous forks');
E('ERR_MISSING_ARGS', missingArgs);
E('ERR_MULTIPLE_CALLBACK', 'Callback called multiple times');
E('ERR_NAPI_CONS_FUNCTION', 'Constructor must be a function');
E('ERR_NAPI_CONS_PROTOTYPE_OBJECT', 'Constructor.prototype must be an object');
E('ERR_NO_CRYPTO', 'Node.js is not compiled with OpenSSL crypto support');
E('ERR_NO_LONGER_SUPPORTED', '%s is no longer supported');
E('ERR_PARSE_HISTORY_DATA', 'Could not parse history data in %s');
E('ERR_SOCKET_ALREADY_BOUND', 'Socket is already bound');
E('ERR_SOCKET_BAD_PORT', 'Port should be > 0 and < 65536');
E('ERR_SOCKET_BAD_TYPE', 'Bad socket type specified. Valid types are: udp4, udp6');
E('ERR_SOCKET_CANNOT_SEND', 'Unable to send data');
E('ERR_SOCKET_CLOSED', 'Socket is closed');
E('ERR_SOCKET_DGRAM_NOT_RUNNING', 'Not running');
E('ERR_STDERR_CLOSE', 'process.stderr cannot be closed');
E('ERR_STDOUT_CLOSE', 'process.stdout cannot be closed');
E('ERR_STREAM_WRAP', 'Stream has StringDecoder set or is in objectMode');
E('ERR_TLS_CERT_ALTNAME_INVALID', "Hostname/IP does not match certificate's altnames: %s");
E('ERR_TLS_DH_PARAM_SIZE', function (size) { return "DH parameter size ".concat(size, " is less than 2048"); });
E('ERR_TLS_HANDSHAKE_TIMEOUT', 'TLS handshake timeout');
E('ERR_TLS_RENEGOTIATION_FAILED', 'Failed to renegotiate');
E('ERR_TLS_REQUIRED_SERVER_NAME', '"servername" is required parameter for Server.addContext');
E('ERR_TLS_SESSION_ATTACK', 'TSL session renegotiation attack detected');
E('ERR_TRANSFORM_ALREADY_TRANSFORMING', 'Calling transform done when still transforming');
E('ERR_TRANSFORM_WITH_LENGTH_0', 'Calling transform done when writableState.length != 0');
E('ERR_UNKNOWN_ENCODING', 'Unknown encoding: %s');
E('ERR_UNKNOWN_SIGNAL', 'Unknown signal: %s');
E('ERR_UNKNOWN_STDIN_TYPE', 'Unknown stdin file type');
E('ERR_UNKNOWN_STREAM_TYPE', 'Unknown stream file type');
E('ERR_V8BREAKITERATOR', 'Full ICU data not installed. ' + 'See https://github.com/nodejs/node/wiki/Intl');
function invalidArgType(name, expected, actual) {
    assert(name, 'name is required');
    // determiner: 'must be' or 'must not be'
    var determiner;
    if (expected.includes('not ')) {
        determiner = 'must not be';
        expected = expected.split('not ')[1];
    }
    else {
        determiner = 'must be';
    }
    var msg;
    if (Array.isArray(name)) {
        var names = name.map(function (val) { return "\"".concat(val, "\""); }).join(', ');
        msg = "The ".concat(names, " arguments ").concat(determiner, " ").concat(oneOf(expected, 'type'));
    }
    else if (name.includes(' argument')) {
        // for the case like 'first argument'
        msg = "The ".concat(name, " ").concat(determiner, " ").concat(oneOf(expected, 'type'));
    }
    else {
        var type = name.includes('.') ? 'property' : 'argument';
        msg = "The \"".concat(name, "\" ").concat(type, " ").concat(determiner, " ").concat(oneOf(expected, 'type'));
    }
    // if actual value received, output it
    if (arguments.length >= 3) {
        msg += ". Received type ".concat(actual !== null ? typeof actual : 'null');
    }
    return msg;
}
function missingArgs() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    assert(args.length > 0, 'At least one arg needs to be specified');
    var msg = 'The ';
    var len = args.length;
    args = args.map(function (a) { return "\"".concat(a, "\""); });
    switch (len) {
        case 1:
            msg += "".concat(args[0], " argument");
            break;
        case 2:
            msg += "".concat(args[0], " and ").concat(args[1], " arguments");
            break;
        default:
            msg += args.slice(0, len - 1).join(', ');
            msg += ", and ".concat(args[len - 1], " arguments");
            break;
    }
    return "".concat(msg, " must be specified");
}
function oneOf(expected, thing) {
    assert(expected, 'expected is required');
    assert(typeof thing === 'string', 'thing is required');
    if (Array.isArray(expected)) {
        var len = expected.length;
        assert(len > 0, 'At least one expected value needs to be specified');
        // tslint:disable-next-line
        expected = expected.map(function (i) { return String(i); });
        if (len > 2) {
            return "one of ".concat(thing, " ").concat(expected.slice(0, len - 1).join(', '), ", or ") + expected[len - 1];
        }
        else if (len === 2) {
            return "one of ".concat(thing, " ").concat(expected[0], " or ").concat(expected[1]);
        }
        else {
            return "of ".concat(thing, " ").concat(expected[0]);
        }
    }
    else {
        return "of ".concat(thing, " ").concat(String(expected));
    }
}
function bufferOutOfBounds(name, isWriting) {
    if (isWriting) {
        return 'Attempt to write outside buffer bounds';
    }
    else {
        return "\"".concat(name, "\" is outside of buffer bounds");
    }
}

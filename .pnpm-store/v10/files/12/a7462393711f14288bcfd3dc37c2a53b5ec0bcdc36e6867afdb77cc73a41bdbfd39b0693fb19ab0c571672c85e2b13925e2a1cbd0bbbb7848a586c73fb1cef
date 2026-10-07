"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MongoLogger = exports.MongoLoggableComponent = exports.SEVERITY_LEVEL_MAP = exports.DEFAULT_MAX_DOCUMENT_LENGTH = exports.SeverityLevel = void 0;
exports.parseSeverityFromString = parseSeverityFromString;
exports.createStdioLogger = createStdioLogger;
exports.stringifyWithMaxLen = stringifyWithMaxLen;
exports.defaultLogTransform = defaultLogTransform;
const util_1 = require("util");
const bson_1 = require("./bson");
const constants_1 = require("./constants");
const utils_1 = require("./utils");
/**
 * @public
 * Severity levels align with unix syslog.
 * Most typical driver functions will log to debug.
 */
exports.SeverityLevel = Object.freeze({
    EMERGENCY: 'emergency',
    ALERT: 'alert',
    CRITICAL: 'critical',
    ERROR: 'error',
    WARNING: 'warn',
    NOTICE: 'notice',
    INFORMATIONAL: 'info',
    DEBUG: 'debug',
    TRACE: 'trace',
    OFF: 'off'
});
/** @internal */
exports.DEFAULT_MAX_DOCUMENT_LENGTH = 1000;
/** @internal */
class SeverityLevelMap extends Map {
    constructor(entries) {
        const newEntries = [];
        for (const [level, value] of entries) {
            newEntries.push([value, level]);
        }
        newEntries.push(...entries);
        super(newEntries);
    }
    getNumericSeverityLevel(severity) {
        return this.get(severity);
    }
    getSeverityLevelName(level) {
        return this.get(level);
    }
}
/** @internal */
exports.SEVERITY_LEVEL_MAP = new SeverityLevelMap([
    [exports.SeverityLevel.OFF, -Infinity],
    [exports.SeverityLevel.EMERGENCY, 0],
    [exports.SeverityLevel.ALERT, 1],
    [exports.SeverityLevel.CRITICAL, 2],
    [exports.SeverityLevel.ERROR, 3],
    [exports.SeverityLevel.WARNING, 4],
    [exports.SeverityLevel.NOTICE, 5],
    [exports.SeverityLevel.INFORMATIONAL, 6],
    [exports.SeverityLevel.DEBUG, 7],
    [exports.SeverityLevel.TRACE, 8]
]);
/** @public */
exports.MongoLoggableComponent = Object.freeze({
    COMMAND: 'command',
    TOPOLOGY: 'topology',
    SERVER_SELECTION: 'serverSelection',
    CONNECTION: 'connection',
    CLIENT: 'client'
});
/**
 * Parses a string as one of SeverityLevel
 * @internal
 *
 * @param s - the value to be parsed
 * @returns one of SeverityLevel if value can be parsed as such, otherwise null
 */
function parseSeverityFromString(s) {
    const validSeverities = Object.values(exports.SeverityLevel);
    const lowerSeverity = s?.toLowerCase();
    if (lowerSeverity != null && validSeverities.includes(lowerSeverity)) {
        return lowerSeverity;
    }
    return null;
}
/** @internal */
function createStdioLogger(stream) {
    return {
        write: (0, util_1.promisify)((log, cb) => {
            const logLine = (0, util_1.inspect)(log, { compact: true, breakLength: Infinity });
            stream.write(`${logLine}\n`, 'utf-8', cb);
            return;
        })
    };
}
/**
 * resolves the MONGODB_LOG_PATH and mongodbLogPath options from the environment and the
 * mongo client options respectively. The mongodbLogPath can be either 'stdout', 'stderr', a NodeJS
 * Writable or an object which has a `write` method with the signature:
 * ```ts
 * write(log: Log): void
 * ```
 *
 * @returns the MongoDBLogWritable object to write logs to
 */
function resolveLogPath({ MONGODB_LOG_PATH }, { mongodbLogPath }) {
    if (typeof mongodbLogPath === 'string' && /^stderr$/i.test(mongodbLogPath)) {
        return { mongodbLogPath: createStdioLogger(process.stderr), mongodbLogPathIsStdErr: true };
    }
    if (typeof mongodbLogPath === 'string' && /^stdout$/i.test(mongodbLogPath)) {
        return { mongodbLogPath: createStdioLogger(process.stdout), mongodbLogPathIsStdErr: false };
    }
    if (typeof mongodbLogPath === 'object' && typeof mongodbLogPath?.write === 'function') {
        return { mongodbLogPath: mongodbLogPath, mongodbLogPathIsStdErr: false };
    }
    if (MONGODB_LOG_PATH && /^stderr$/i.test(MONGODB_LOG_PATH)) {
        return { mongodbLogPath: createStdioLogger(process.stderr), mongodbLogPathIsStdErr: true };
    }
    if (MONGODB_LOG_PATH && /^stdout$/i.test(MONGODB_LOG_PATH)) {
        return { mongodbLogPath: createStdioLogger(process.stdout), mongodbLogPathIsStdErr: false };
    }
    return { mongodbLogPath: createStdioLogger(process.stderr), mongodbLogPathIsStdErr: true };
}
function resolveSeverityConfiguration(clientOption, environmentOption, defaultSeverity) {
    return (parseSeverityFromString(clientOption) ??
        parseSeverityFromString(environmentOption) ??
        defaultSeverity);
}
function compareSeverity(s0, s1) {
    const s0Num = exports.SEVERITY_LEVEL_MAP.getNumericSeverityLevel(s0);
    const s1Num = exports.SEVERITY_LEVEL_MAP.getNumericSeverityLevel(s1);
    return s0Num < s1Num ? -1 : s0Num > s1Num ? 1 : 0;
}
/** @internal */
function stringifyWithMaxLen(value, maxDocumentLength, options = {}) {
    let strToTruncate = '';
    let currentLength = 0;
    const maxDocumentLengthEnsurer = function maxDocumentLengthEnsurer(key, value) {
        if (currentLength >= maxDocumentLength) {
            return undefined;
        }
        // Account for root document
        if (key === '') {
            // Account for starting brace
            currentLength += 1;
            return value;
        }
        // +4 accounts for 2 quotation marks, colon and comma after value
        // Note that this potentially undercounts since it does not account for escape sequences which
        // will have an additional backslash added to them once passed through JSON.stringify.
        currentLength += key.length + 4;
        if (value == null)
            return value;
        switch (typeof value) {
            case 'string':
                // +2 accounts for quotes
                // Note that this potentially undercounts similarly to the key length calculation
                currentLength += value.length + 2;
                break;
            case 'number':
            case 'bigint':
                currentLength += String(value).length;
                break;
            case 'boolean':
                currentLength += value ? 4 : 5;
                break;
            case 'object':
                if ((0, utils_1.isUint8Array)(value)) {
                    // '{"$binary":{"base64":"<base64 string>","subType":"XX"}}'
                    // This is an estimate based on the fact that the base64 is approximately 1.33x the length of
                    // the actual binary sequence https://en.wikipedia.org/wiki/Base64
                    currentLength += (22 + value.byteLength + value.byteLength * 0.33 + 18) | 0;
                }
                else if ('_bsontype' in value) {
                    const v = value;
                    switch (v._bsontype) {
                        case 'Int32':
                            currentLength += String(v.value).length;
                            break;
                        case 'Double':
                            // Account for representing integers as <value>.0
                            currentLength +=
                                (v.value | 0) === v.value ? String(v.value).length + 2 : String(v.value).length;
                            break;
                        case 'Long':
                            currentLength += v.toString().length;
                            break;
                        case 'ObjectId':
                            // '{"$oid":"XXXXXXXXXXXXXXXXXXXXXXXX"}'
                            currentLength += 35;
                            break;
                        case 'MaxKey':
                        case 'MinKey':
                            // '{"$maxKey":1}' or '{"$minKey":1}'
                            currentLength += 13;
                            break;
                        case 'Binary':
                            // '{"$binary":{"base64":"<base64 string>","subType":"XX"}}'
                            // This is an estimate based on the fact that the base64 is approximately 1.33x the length of
                            // the actual binary sequence https://en.wikipedia.org/wiki/Base64
                            currentLength += (22 + value.position + value.position * 0.33 + 18) | 0;
                            break;
                        case 'Timestamp':
                            // '{"$timestamp":{"t":<t>,"i":<i>}}'
                            currentLength += 19 + String(v.t).length + 5 + String(v.i).length + 2;
                            break;
                        case 'Code':
                            // '{"$code":"<code>"}' or '{"$code":"<code>","$scope":<scope>}'
                            if (v.scope == null) {
                                currentLength += v.code.length + 10 + 2;
                            }
                            else {
                                // Ignoring actual scope object, so this undercounts by a significant amount
                                currentLength += v.code.length + 10 + 11;
                            }
                            break;
                        case 'BSONRegExp':
                            // '{"$regularExpression":{"pattern":"<pattern>","options":"<options>"}}'
                            currentLength += 34 + v.pattern.length + 13 + v.options.length + 3;
                            break;
                    }
                }
        }
        return value;
    };
    if (typeof value === 'string') {
        strToTruncate = value;
    }
    else if (typeof value === 'function') {
        strToTruncate = value.name;
    }
    else {
        try {
            if (maxDocumentLength !== 0) {
                strToTruncate = bson_1.EJSON.stringify(value, maxDocumentLengthEnsurer, 0, options);
            }
            else {
                strToTruncate = bson_1.EJSON.stringify(value, options);
            }
        }
        catch (e) {
            strToTruncate = `Extended JSON serialization failed with: ${e.message}`;
        }
    }
    // handle truncation that occurs in the middle of multi-byte codepoints
    if (maxDocumentLength !== 0 &&
        strToTruncate.length > maxDocumentLength &&
        strToTruncate.charCodeAt(maxDocumentLength - 1) !==
            strToTruncate.codePointAt(maxDocumentLength - 1)) {
        maxDocumentLength--;
        if (maxDocumentLength === 0) {
            return '';
        }
    }
    return maxDocumentLength !== 0 && strToTruncate.length > maxDocumentLength
        ? `${strToTruncate.slice(0, maxDocumentLength)}...`
        : strToTruncate;
}
function isLogConvertible(obj) {
    const objAsLogConvertible = obj;
    // eslint-disable-next-line no-restricted-syntax
    return objAsLogConvertible.toLog !== undefined && typeof objAsLogConvertible.toLog === 'function';
}
function attachServerSelectionFields(log, serverSelectionEvent, maxDocumentLength = exports.DEFAULT_MAX_DOCUMENT_LENGTH) {
    const { selector, operation, topologyDescription, message } = serverSelectionEvent;
    log.selector = stringifyWithMaxLen(selector, maxDocumentLength);
    log.operation = operation;
    log.topologyDescription = stringifyWithMaxLen(topologyDescription, maxDocumentLength);
    log.message = message;
    return log;
}
function attachCommandFields(log, commandEvent) {
    log.commandName = commandEvent.commandName;
    log.requestId = commandEvent.requestId;
    log.driverConnectionId = commandEvent.connectionId;
    const { host, port } = utils_1.HostAddress.fromString(commandEvent.address).toHostPort();
    log.serverHost = host;
    log.serverPort = port;
    if (commandEvent?.serviceId) {
        log.serviceId = commandEvent.serviceId.toHexString();
    }
    log.databaseName = commandEvent.databaseName;
    log.serverConnectionId = commandEvent.serverConnectionId;
    return log;
}
function attachConnectionFields(log, event) {
    const { host, port } = utils_1.HostAddress.fromString(event.address).toHostPort();
    log.serverHost = host;
    log.serverPort = port;
    return log;
}
function attachSDAMFields(log, sdamEvent) {
    log.topologyId = sdamEvent.topologyId;
    return log;
}
function attachServerHeartbeatFields(log, serverHeartbeatEvent) {
    const { awaited, connectionId } = serverHeartbeatEvent;
    log.awaited = awaited;
    log.driverConnectionId = serverHeartbeatEvent.connectionId;
    const { host, port } = utils_1.HostAddress.fromString(connectionId).toHostPort();
    log.serverHost = host;
    log.serverPort = port;
    return log;
}
/** @internal */
function defaultLogTransform(logObject, maxDocumentLength = exports.DEFAULT_MAX_DOCUMENT_LENGTH) {
    let log = Object.create(null);
    switch (logObject.name) {
        case constants_1.SERVER_SELECTION_STARTED:
            log = attachServerSelectionFields(log, logObject, maxDocumentLength);
            return log;
        case constants_1.SERVER_SELECTION_FAILED:
            log = attachServerSelectionFields(log, logObject, maxDocumentLength);
            log.failure = logObject.failure?.message;
            return log;
        case constants_1.SERVER_SELECTION_SUCCEEDED:
            log = attachServerSelectionFields(log, logObject, maxDocumentLength);
            log.serverHost = logObject.serverHost;
            log.serverPort = logObject.serverPort;
            return log;
        case constants_1.WAITING_FOR_SUITABLE_SERVER:
            log = attachServerSelectionFields(log, logObject, maxDocumentLength);
            log.remainingTimeMS = logObject.remainingTimeMS;
            return log;
        case constants_1.COMMAND_STARTED:
            log = attachCommandFields(log, logObject);
            log.message = 'Command started';
            log.command = stringifyWithMaxLen(logObject.command, maxDocumentLength, { relaxed: true });
            log.databaseName = logObject.databaseName;
            return log;
        case constants_1.COMMAND_SUCCEEDED:
            log = attachCommandFields(log, logObject);
            log.message = 'Command succeeded';
            log.durationMS = logObject.duration;
            log.reply = stringifyWithMaxLen(logObject.reply, maxDocumentLength, { relaxed: true });
            return log;
        case constants_1.COMMAND_FAILED:
            log = attachCommandFields(log, logObject);
            log.message = 'Command failed';
            log.durationMS = logObject.duration;
            log.failure = logObject.failure?.message ?? '(redacted)';
            return log;
        case constants_1.CONNECTION_POOL_CREATED:
            log = attachConnectionFields(log, logObject);
            log.message = 'Connection pool created';
            if (logObject.options) {
                const { maxIdleTimeMS, minPoolSize, maxPoolSize, maxConnecting, waitQueueTimeoutMS } = logObject.options;
                log = {
                    ...log,
                    maxIdleTimeMS,
                    minPoolSize,
                    maxPoolSize,
                    maxConnecting,
                    waitQueueTimeoutMS
                };
            }
            return log;
        case constants_1.CONNECTION_POOL_READY:
            log = attachConnectionFields(log, logObject);
            log.message = 'Connection pool ready';
            return log;
        case constants_1.CONNECTION_POOL_CLEARED:
            log = attachConnectionFields(log, logObject);
            log.message = 'Connection pool cleared';
            if (logObject.serviceId?._bsontype === 'ObjectId') {
                log.serviceId = logObject.serviceId?.toHexString();
            }
            return log;
        case constants_1.CONNECTION_POOL_CLOSED:
            log = attachConnectionFields(log, logObject);
            log.message = 'Connection pool closed';
            return log;
        case constants_1.CONNECTION_CREATED:
            log = attachConnectionFields(log, logObject);
            log.message = 'Connection created';
            log.driverConnectionId = logObject.connectionId;
            return log;
        case constants_1.CONNECTION_READY:
            log = attachConnectionFields(log, logObject);
            log.message = 'Connection ready';
            log.driverConnectionId = logObject.connectionId;
            log.durationMS = logObject.durationMS;
            return log;
        case constants_1.CONNECTION_CLOSED:
            log = attachConnectionFields(log, logObject);
            log.message = 'Connection closed';
            log.driverConnectionId = logObject.connectionId;
            switch (logObject.reason) {
                case 'stale':
                    log.reason = 'Connection became stale because the pool was cleared';
                    break;
                case 'idle':
                    log.reason =
                        'Connection has been available but unused for longer than the configured max idle time';
                    break;
                case 'error':
                    log.reason = 'An error occurred while using the connection';
                    if (logObject.error) {
                        log.error = logObject.error;
                    }
                    break;
                case 'poolClosed':
                    log.reason = 'Connection pool was closed';
                    break;
                default:
                    log.reason = `Unknown close reason: ${logObject.reason}`;
            }
            return log;
        case constants_1.CONNECTION_CHECK_OUT_STARTED:
            log = attachConnectionFields(log, logObject);
            log.message = 'Connection checkout started';
            return log;
        case constants_1.CONNECTION_CHECK_OUT_FAILED:
            log = attachConnectionFields(log, logObject);
            log.message = 'Connection checkout failed';
            switch (logObject.reason) {
                case 'poolClosed':
                    log.reason = 'Connection pool was closed';
                    break;
                case 'timeout':
                    log.reason = 'Wait queue timeout elapsed without a connection becoming available';
                    break;
                case 'connectionError':
                    log.reason = 'An error occurred while trying to establish a new connection';
                    if (logObject.error) {
                        log.error = logObject.error;
                    }
                    break;
                default:
                    log.reason = `Unknown close reason: ${logObject.reason}`;
            }
            log.durationMS = logObject.durationMS;
            return log;
        case constants_1.CONNECTION_CHECKED_OUT:
            log = attachConnectionFields(log, logObject);
            log.message = 'Connection checked out';
            log.driverConnectionId = logObject.connectionId;
            log.durationMS = logObject.durationMS;
            return log;
        case constants_1.CONNECTION_CHECKED_IN:
            log = attachConnectionFields(log, logObject);
            log.message = 'Connection checked in';
            log.driverConnectionId = logObject.connectionId;
            return log;
        case constants_1.SERVER_OPENING:
            log = attachSDAMFields(log, logObject);
            log = attachConnectionFields(log, logObject);
            log.message = 'Starting server monitoring';
            return log;
        case constants_1.SERVER_CLOSED:
            log = attachSDAMFields(log, logObject);
            log = attachConnectionFields(log, logObject);
            log.message = 'Stopped server monitoring';
            return log;
        case constants_1.SERVER_HEARTBEAT_STARTED:
            log = attachSDAMFields(log, logObject);
            log = attachServerHeartbeatFields(log, logObject);
            log.message = 'Server heartbeat started';
            return log;
        case constants_1.SERVER_HEARTBEAT_SUCCEEDED:
            log = attachSDAMFields(log, logObject);
            log = attachServerHeartbeatFields(log, logObject);
            log.message = 'Server heartbeat succeeded';
            log.durationMS = logObject.duration;
            log.serverConnectionId = logObject.serverConnectionId;
            log.reply = stringifyWithMaxLen(logObject.reply, maxDocumentLength, { relaxed: true });
            return log;
        case constants_1.SERVER_HEARTBEAT_FAILED:
            log = attachSDAMFields(log, logObject);
            log = attachServerHeartbeatFields(log, logObject);
            log.message = 'Server heartbeat failed';
            log.durationMS = logObject.duration;
            log.failure = logObject.failure?.message;
            return log;
        case constants_1.TOPOLOGY_OPENING:
            log = attachSDAMFields(log, logObject);
            log.message = 'Starting topology monitoring';
            return log;
        case constants_1.TOPOLOGY_CLOSED:
            log = attachSDAMFields(log, logObject);
            log.message = 'Stopped topology monitoring';
            return log;
        case constants_1.TOPOLOGY_DESCRIPTION_CHANGED:
            log = attachSDAMFields(log, logObject);
            log.message = 'Topology description changed';
            log.previousDescription = log.reply = stringifyWithMaxLen(logObject.previousDescription, maxDocumentLength);
            log.newDescription = log.reply = stringifyWithMaxLen(logObject.newDescription, maxDocumentLength);
            return log;
        default:
            for (const [key, value] of Object.entries(logObject)) {
                if (value != null)
                    log[key] = value;
            }
    }
    return log;
}
/** @internal */
class MongoLogger {
    constructor(options) {
        this.pendingLog = null;
        /**
         * This method should be used when logging errors that do not have a public driver API for
         * reporting errors.
         */
        this.error = this.log.bind(this, 'error');
        /**
         * This method should be used to log situations where undesirable application behaviour might
         * occur. For example, failing to end sessions on `MongoClient.close`.
         */
        this.warn = this.log.bind(this, 'warn');
        /**
         * This method should be used to report high-level information about normal driver behaviour.
         * For example, the creation of a `MongoClient`.
         */
        this.info = this.log.bind(this, 'info');
        /**
         * This method should be used to report information that would be helpful when debugging an
         * application. For example, a command starting, succeeding or failing.
         */
        this.debug = this.log.bind(this, 'debug');
        /**
         * This method should be used to report fine-grained details related to logic flow. For example,
         * entering and exiting a function body.
         */
        this.trace = this.log.bind(this, 'trace');
        this.componentSeverities = options.componentSeverities;
        this.maxDocumentLength = options.maxDocumentLength;
        this.logDestination = options.logDestination;
        this.logDestinationIsStdErr = options.logDestinationIsStdErr;
        this.severities = this.createLoggingSeverities();
    }
    createLoggingSeverities() {
        const severities = Object();
        for (const component of Object.values(exports.MongoLoggableComponent)) {
            severities[component] = {};
            for (const severityLevel of Object.values(exports.SeverityLevel)) {
                severities[component][severityLevel] =
                    compareSeverity(severityLevel, this.componentSeverities[component]) <= 0;
            }
        }
        return severities;
    }
    turnOffSeverities() {
        for (const component of Object.values(exports.MongoLoggableComponent)) {
            this.componentSeverities[component] = exports.SeverityLevel.OFF;
            for (const severityLevel of Object.values(exports.SeverityLevel)) {
                this.severities[component][severityLevel] = false;
            }
        }
    }
    logWriteFailureHandler(error) {
        if (this.logDestinationIsStdErr) {
            this.turnOffSeverities();
            this.clearPendingLog();
            return;
        }
        this.logDestination = createStdioLogger(process.stderr);
        this.logDestinationIsStdErr = true;
        this.clearPendingLog();
        this.error(exports.MongoLoggableComponent.CLIENT, {
            toLog: function () {
                return {
                    message: 'User input for mongodbLogPath is now invalid. Logging is halted.',
                    error: error.message
                };
            }
        });
        this.turnOffSeverities();
        this.clearPendingLog();
    }
    clearPendingLog() {
        this.pendingLog = null;
    }
    willLog(component, severity) {
        if (severity === exports.SeverityLevel.OFF)
            return false;
        return this.severities[component][severity];
    }
    log(severity, component, message) {
        if (!this.willLog(component, severity))
            return;
        let logMessage = { t: new Date(), c: component, s: severity };
        if (typeof message === 'string') {
            logMessage.message = message;
        }
        else if (typeof message === 'object') {
            if (isLogConvertible(message)) {
                logMessage = { ...logMessage, ...message.toLog() };
            }
            else {
                logMessage = { ...logMessage, ...defaultLogTransform(message, this.maxDocumentLength) };
            }
        }
        if ((0, utils_1.isPromiseLike)(this.pendingLog)) {
            this.pendingLog = this.pendingLog
                .then(() => this.logDestination.write(logMessage))
                .then(this.clearPendingLog.bind(this), this.logWriteFailureHandler.bind(this));
            return;
        }
        try {
            const logResult = this.logDestination.write(logMessage);
            if ((0, utils_1.isPromiseLike)(logResult)) {
                this.pendingLog = logResult.then(this.clearPendingLog.bind(this), this.logWriteFailureHandler.bind(this));
            }
        }
        catch (error) {
            this.logWriteFailureHandler(error);
        }
    }
    /**
     * Merges options set through environment variables and the MongoClient, preferring environment
     * variables when both are set, and substituting defaults for values not set. Options set in
     * constructor take precedence over both environment variables and MongoClient options.
     *
     * @remarks
     * When parsing component severity levels, invalid values are treated as unset and replaced with
     * the default severity.
     *
     * @param envOptions - options set for the logger from the environment
     * @param clientOptions - options set for the logger in the MongoClient options
     * @returns a MongoLoggerOptions object to be used when instantiating a new MongoLogger
     */
    static resolveOptions(envOptions, clientOptions) {
        // client options take precedence over env options
        const resolvedLogPath = resolveLogPath(envOptions, clientOptions);
        const combinedOptions = {
            ...envOptions,
            ...clientOptions,
            mongodbLogPath: resolvedLogPath.mongodbLogPath,
            mongodbLogPathIsStdErr: resolvedLogPath.mongodbLogPathIsStdErr
        };
        const defaultSeverity = resolveSeverityConfiguration(combinedOptions.mongodbLogComponentSeverities?.default, combinedOptions.MONGODB_LOG_ALL, exports.SeverityLevel.OFF);
        return {
            componentSeverities: {
                command: resolveSeverityConfiguration(combinedOptions.mongodbLogComponentSeverities?.command, combinedOptions.MONGODB_LOG_COMMAND, defaultSeverity),
                topology: resolveSeverityConfiguration(combinedOptions.mongodbLogComponentSeverities?.topology, combinedOptions.MONGODB_LOG_TOPOLOGY, defaultSeverity),
                serverSelection: resolveSeverityConfiguration(combinedOptions.mongodbLogComponentSeverities?.serverSelection, combinedOptions.MONGODB_LOG_SERVER_SELECTION, defaultSeverity),
                connection: resolveSeverityConfiguration(combinedOptions.mongodbLogComponentSeverities?.connection, combinedOptions.MONGODB_LOG_CONNECTION, defaultSeverity),
                client: resolveSeverityConfiguration(combinedOptions.mongodbLogComponentSeverities?.client, combinedOptions.MONGODB_LOG_CLIENT, defaultSeverity),
                default: defaultSeverity
            },
            maxDocumentLength: combinedOptions.mongodbLogMaxDocumentLength ??
                (0, utils_1.parseUnsignedInteger)(combinedOptions.MONGODB_LOG_MAX_DOCUMENT_LENGTH) ??
                1000,
            logDestination: combinedOptions.mongodbLogPath,
            logDestinationIsStdErr: combinedOptions.mongodbLogPathIsStdErr
        };
    }
}
exports.MongoLogger = MongoLogger;
//# sourceMappingURL=mongo_logger.js.map
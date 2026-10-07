"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SENSITIVE_COMMANDS = exports.CommandFailedEvent = exports.CommandSucceededEvent = exports.CommandStartedEvent = void 0;
const constants_1 = require("../constants");
const utils_1 = require("../utils");
const commands_1 = require("./commands");
/**
 * An event indicating the start of a given command
 * @public
 * @category Event
 */
class CommandStartedEvent {
    /**
     * Create a started event
     *
     * @internal
     * @param pool - the pool that originated the command
     * @param command - the command
     */
    constructor(connection, command, serverConnectionId) {
        /** @internal */
        this.name = constants_1.COMMAND_STARTED;
        const cmd = extractCommand(command);
        const commandName = extractCommandName(cmd);
        const { address, connectionId, serviceId } = extractConnectionDetails(connection);
        // TODO: remove in major revision, this is not spec behavior
        if (exports.SENSITIVE_COMMANDS.has(commandName)) {
            this.commandObj = {};
            this.commandObj[commandName] = true;
        }
        this.address = address;
        this.connectionId = connectionId;
        this.serviceId = serviceId;
        this.requestId = command.requestId;
        this.databaseName = command.databaseName;
        this.commandName = commandName;
        this.command = maybeRedact(commandName, cmd, cmd);
        this.serverConnectionId = serverConnectionId;
    }
    /* @internal */
    get hasServiceId() {
        return !!this.serviceId;
    }
}
exports.CommandStartedEvent = CommandStartedEvent;
/**
 * An event indicating the success of a given command
 * @public
 * @category Event
 */
class CommandSucceededEvent {
    /**
     * Create a succeeded event
     *
     * @internal
     * @param pool - the pool that originated the command
     * @param command - the command
     * @param reply - the reply for this command from the server
     * @param started - a high resolution tuple timestamp of when the command was first sent, to calculate duration
     */
    constructor(connection, command, reply, started, serverConnectionId) {
        /** @internal */
        this.name = constants_1.COMMAND_SUCCEEDED;
        const cmd = extractCommand(command);
        const commandName = extractCommandName(cmd);
        const { address, connectionId, serviceId } = extractConnectionDetails(connection);
        this.address = address;
        this.connectionId = connectionId;
        this.serviceId = serviceId;
        this.requestId = command.requestId;
        this.commandName = commandName;
        this.duration = (0, utils_1.calculateDurationInMs)(started);
        this.reply = maybeRedact(commandName, cmd, extractReply(reply));
        this.serverConnectionId = serverConnectionId;
        this.databaseName = command.databaseName;
    }
    /* @internal */
    get hasServiceId() {
        return !!this.serviceId;
    }
}
exports.CommandSucceededEvent = CommandSucceededEvent;
/**
 * An event indicating the failure of a given command
 * @public
 * @category Event
 */
class CommandFailedEvent {
    /**
     * Create a failure event
     *
     * @internal
     * @param pool - the pool that originated the command
     * @param command - the command
     * @param error - the generated error or a server error response
     * @param started - a high resolution tuple timestamp of when the command was first sent, to calculate duration
     */
    constructor(connection, command, error, started, serverConnectionId) {
        /** @internal */
        this.name = constants_1.COMMAND_FAILED;
        const cmd = extractCommand(command);
        const commandName = extractCommandName(cmd);
        const { address, connectionId, serviceId } = extractConnectionDetails(connection);
        this.address = address;
        this.connectionId = connectionId;
        this.serviceId = serviceId;
        this.requestId = command.requestId;
        this.commandName = commandName;
        this.duration = (0, utils_1.calculateDurationInMs)(started);
        this.failure = maybeRedact(commandName, cmd, error);
        this.serverConnectionId = serverConnectionId;
        this.databaseName = command.databaseName;
    }
    /* @internal */
    get hasServiceId() {
        return !!this.serviceId;
    }
}
exports.CommandFailedEvent = CommandFailedEvent;
/**
 * Commands that we want to redact because of the sensitive nature of their contents
 * @internal
 */
exports.SENSITIVE_COMMANDS = new Set([
    'authenticate',
    'saslStart',
    'saslContinue',
    'getnonce',
    'createUser',
    'updateUser',
    'copydbgetnonce',
    'copydbsaslstart',
    'copydb'
]);
const HELLO_COMMANDS = new Set(['hello', constants_1.LEGACY_HELLO_COMMAND, constants_1.LEGACY_HELLO_COMMAND_CAMEL_CASE]);
// helper methods
const extractCommandName = (commandDoc) => Object.keys(commandDoc)[0];
const collectionName = (command) => command.ns.split('.')[1];
const maybeRedact = (commandName, commandDoc, result) => exports.SENSITIVE_COMMANDS.has(commandName) ||
    (HELLO_COMMANDS.has(commandName) && commandDoc.speculativeAuthenticate)
    ? {}
    : result;
const LEGACY_FIND_QUERY_MAP = {
    $query: 'filter',
    $orderby: 'sort',
    $hint: 'hint',
    $comment: 'comment',
    $maxScan: 'maxScan',
    $max: 'max',
    $min: 'min',
    $returnKey: 'returnKey',
    $showDiskLoc: 'showRecordId',
    $maxTimeMS: 'maxTimeMS',
    $snapshot: 'snapshot'
};
const LEGACY_FIND_OPTIONS_MAP = {
    numberToSkip: 'skip',
    numberToReturn: 'batchSize',
    returnFieldSelector: 'projection'
};
/** Extract the actual command from the query, possibly up-converting if it's a legacy format */
function extractCommand(command) {
    if (command instanceof commands_1.OpMsgRequest) {
        const cmd = { ...command.command };
        // For OP_MSG with payload type 1 we need to pull the documents
        // array out of the document sequence for monitoring.
        if (cmd.ops instanceof commands_1.DocumentSequence) {
            cmd.ops = cmd.ops.documents;
        }
        if (cmd.nsInfo instanceof commands_1.DocumentSequence) {
            cmd.nsInfo = cmd.nsInfo.documents;
        }
        return cmd;
    }
    if (command.query?.$query) {
        let result;
        if (command.ns === 'admin.$cmd') {
            // up-convert legacy command
            result = Object.assign({}, command.query.$query);
        }
        else {
            // up-convert legacy find command
            result = { find: collectionName(command) };
            Object.keys(LEGACY_FIND_QUERY_MAP).forEach(key => {
                if (command.query[key] != null) {
                    result[LEGACY_FIND_QUERY_MAP[key]] = { ...command.query[key] };
                }
            });
        }
        Object.keys(LEGACY_FIND_OPTIONS_MAP).forEach(key => {
            const legacyKey = key;
            if (command[legacyKey] != null) {
                result[LEGACY_FIND_OPTIONS_MAP[legacyKey]] = command[legacyKey];
            }
        });
        return result;
    }
    let clonedQuery = {};
    const clonedCommand = { ...command };
    if (command.query) {
        clonedQuery = { ...command.query };
        clonedCommand.query = clonedQuery;
    }
    return command.query ? clonedQuery : clonedCommand;
}
function extractReply(reply) {
    if (!reply) {
        return reply;
    }
    return reply.result ? reply.result : reply;
}
function extractConnectionDetails(connection) {
    let connectionId;
    if ('id' in connection) {
        connectionId = connection.id;
    }
    return {
        address: connection.address,
        serviceId: connection.serviceId,
        connectionId
    };
}
//# sourceMappingURL=command_monitoring_events.js.map
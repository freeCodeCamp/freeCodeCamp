export class Exception extends Error {
    error;
    message;
    stacktrace;
    constructor(error, message, stacktrace) {
        super();
        this.error = error;
        this.message = message;
        this.stacktrace = stacktrace;
    }
    toErrorResponse(commandId) {
        return {
            type: 'error',
            id: commandId,
            error: this.error,
            message: this.message,
            stacktrace: this.stacktrace,
        };
    }
}
export class InvalidArgumentException extends Exception {
    constructor(message, stacktrace) {
        super("invalid argument" /* ErrorCode.InvalidArgument */, message, stacktrace);
    }
}
export class InvalidSelectorException extends Exception {
    constructor(message, stacktrace) {
        super("invalid selector" /* ErrorCode.InvalidSelector */, message, stacktrace);
    }
}
export class InvalidSessionIdException extends Exception {
    constructor(message, stacktrace) {
        super("invalid session id" /* ErrorCode.InvalidSessionId */, message, stacktrace);
    }
}
export class MoveTargetOutOfBoundsException extends Exception {
    constructor(message, stacktrace) {
        super("move target out of bounds" /* ErrorCode.MoveTargetOutOfBounds */, message, stacktrace);
    }
}
export class NoSuchAlertException extends Exception {
    constructor(message, stacktrace) {
        super("no such alert" /* ErrorCode.NoSuchAlert */, message, stacktrace);
    }
}
export class NoSuchElementException extends Exception {
    constructor(message, stacktrace) {
        super("no such element" /* ErrorCode.NoSuchElement */, message, stacktrace);
    }
}
export class NoSuchFrameException extends Exception {
    constructor(message, stacktrace) {
        super("no such frame" /* ErrorCode.NoSuchFrame */, message, stacktrace);
    }
}
export class NoSuchHandleException extends Exception {
    constructor(message, stacktrace) {
        super("no such handle" /* ErrorCode.NoSuchHandle */, message, stacktrace);
    }
}
export class NoSuchHistoryEntryException extends Exception {
    constructor(message, stacktrace) {
        super("no such history entry" /* ErrorCode.NoSuchHistoryEntry */, message, stacktrace);
    }
}
export class NoSuchInterceptException extends Exception {
    constructor(message, stacktrace) {
        super("no such intercept" /* ErrorCode.NoSuchIntercept */, message, stacktrace);
    }
}
export class NoSuchNodeException extends Exception {
    constructor(message, stacktrace) {
        super("no such node" /* ErrorCode.NoSuchNode */, message, stacktrace);
    }
}
export class NoSuchRequestException extends Exception {
    constructor(message, stacktrace) {
        super("no such request" /* ErrorCode.NoSuchRequest */, message, stacktrace);
    }
}
export class NoSuchScriptException extends Exception {
    constructor(message, stacktrace) {
        super("no such script" /* ErrorCode.NoSuchScript */, message, stacktrace);
    }
}
export class NoSuchUserContextException extends Exception {
    constructor(message, stacktrace) {
        super("no such user context" /* ErrorCode.NoSuchUserContext */, message, stacktrace);
    }
}
export class SessionNotCreatedException extends Exception {
    constructor(message, stacktrace) {
        super("session not created" /* ErrorCode.SessionNotCreated */, message, stacktrace);
    }
}
export class UnknownCommandException extends Exception {
    constructor(message, stacktrace) {
        super("unknown command" /* ErrorCode.UnknownCommand */, message, stacktrace);
    }
}
export class UnknownErrorException extends Exception {
    constructor(message, stacktrace = new Error().stack) {
        super("unknown error" /* ErrorCode.UnknownError */, message, stacktrace);
    }
}
export class UnableToCaptureScreenException extends Exception {
    constructor(message, stacktrace) {
        super("unable to capture screen" /* ErrorCode.UnableToCaptureScreen */, message, stacktrace);
    }
}
export class UnableToCloseBrowserException extends Exception {
    constructor(message, stacktrace) {
        super("unable to close browser" /* ErrorCode.UnableToCloseBrowser */, message, stacktrace);
    }
}
export class UnsupportedOperationException extends Exception {
    constructor(message, stacktrace) {
        super("unsupported operation" /* ErrorCode.UnsupportedOperation */, message, stacktrace);
    }
}
export class NoSuchStoragePartitionException extends Exception {
    constructor(message, stacktrace) {
        super("no such storage partition" /* ErrorCode.NoSuchStoragePartition */, message, stacktrace);
    }
}
export class UnableToSetCookieException extends Exception {
    constructor(message, stacktrace) {
        super("unable to set cookie" /* ErrorCode.UnableToSetCookie */, message, stacktrace);
    }
}
export class UnableToSetFileInputException extends Exception {
    constructor(message, stacktrace) {
        super("unable to set file input" /* ErrorCode.UnableToSetFileInput */, message, stacktrace);
    }
}
export class UnderspecifiedStoragePartitionException extends Exception {
    constructor(message, stacktrace) {
        super("underspecified storage partition" /* ErrorCode.UnderspecifiedStoragePartition */, message, stacktrace);
    }
}
export class InvalidWebExtensionException extends Exception {
    constructor(message, stacktrace) {
        super("invalid web extension" /* ErrorCode.InvalidWebExtension */, message, stacktrace);
    }
}
export class NoSuchWebExtensionException extends Exception {
    constructor(message, stacktrace) {
        super("no such web extension" /* ErrorCode.NoSuchWebExtension */, message, stacktrace);
    }
}
export class NoSuchNetworkCollectorException extends Exception {
    constructor(message, stacktrace) {
        super("no such network collector" /* ErrorCode.NoSuchNetworkCollector */, message, stacktrace);
    }
}
export class NoSuchNetworkDataException extends Exception {
    constructor(message, stacktrace) {
        super("no such network data" /* ErrorCode.NoSuchNetworkData */, message, stacktrace);
    }
}
export class UnavailableNetworkDataException extends Exception {
    constructor(message, stacktrace) {
        super("unavailable network data" /* ErrorCode.UnavailableNetworkData */, message, stacktrace);
    }
}
//# sourceMappingURL=ErrorResponse.js.map
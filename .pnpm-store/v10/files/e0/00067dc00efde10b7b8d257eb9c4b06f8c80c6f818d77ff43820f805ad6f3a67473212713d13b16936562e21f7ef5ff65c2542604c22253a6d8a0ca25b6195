/**
 * Copyright 2023 Google LLC.
 * Copyright (c) Microsoft Corporation.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
import type { ErrorResponse } from './generated/webdriver-bidi.js';
import { ErrorCode } from './generated/webdriver-bidi.js';
export declare class Exception extends Error {
    error: ErrorCode;
    message: string;
    stacktrace?: string | undefined;
    constructor(error: ErrorCode, message: string, stacktrace?: string | undefined);
    toErrorResponse(commandId: number): ErrorResponse;
}
export declare class InvalidArgumentException extends Exception {
    constructor(message: string, stacktrace?: string);
}
export declare class InvalidSelectorException extends Exception {
    constructor(message: string, stacktrace?: string);
}
export declare class InvalidSessionIdException extends Exception {
    constructor(message: string, stacktrace?: string);
}
export declare class MoveTargetOutOfBoundsException extends Exception {
    constructor(message: string, stacktrace?: string);
}
export declare class NoSuchAlertException extends Exception {
    constructor(message: string, stacktrace?: string);
}
export declare class NoSuchElementException extends Exception {
    constructor(message: string, stacktrace?: string);
}
export declare class NoSuchFrameException extends Exception {
    constructor(message: string, stacktrace?: string);
}
export declare class NoSuchHandleException extends Exception {
    constructor(message: string, stacktrace?: string);
}
export declare class NoSuchHistoryEntryException extends Exception {
    constructor(message: string, stacktrace?: string);
}
export declare class NoSuchInterceptException extends Exception {
    constructor(message: string, stacktrace?: string);
}
export declare class NoSuchNodeException extends Exception {
    constructor(message: string, stacktrace?: string);
}
export declare class NoSuchRequestException extends Exception {
    constructor(message: string, stacktrace?: string);
}
export declare class NoSuchScriptException extends Exception {
    constructor(message: string, stacktrace?: string);
}
export declare class NoSuchUserContextException extends Exception {
    constructor(message: string, stacktrace?: string);
}
export declare class SessionNotCreatedException extends Exception {
    constructor(message: string, stacktrace?: string);
}
export declare class UnknownCommandException extends Exception {
    constructor(message: string, stacktrace?: string);
}
export declare class UnknownErrorException extends Exception {
    constructor(message: string, stacktrace?: string | undefined);
}
export declare class UnableToCaptureScreenException extends Exception {
    constructor(message: string, stacktrace?: string);
}
export declare class UnableToCloseBrowserException extends Exception {
    constructor(message: string, stacktrace?: string);
}
export declare class UnsupportedOperationException extends Exception {
    constructor(message: string, stacktrace?: string);
}
export declare class NoSuchStoragePartitionException extends Exception {
    constructor(message: string, stacktrace?: string);
}
export declare class UnableToSetCookieException extends Exception {
    constructor(message: string, stacktrace?: string);
}
export declare class UnableToSetFileInputException extends Exception {
    constructor(message: string, stacktrace?: string);
}
export declare class UnderspecifiedStoragePartitionException extends Exception {
    constructor(message: string, stacktrace?: string);
}
export declare class InvalidWebExtensionException extends Exception {
    constructor(message: string, stacktrace?: string);
}
export declare class NoSuchWebExtensionException extends Exception {
    constructor(message: string, stacktrace?: string);
}
export declare class NoSuchNetworkCollectorException extends Exception {
    constructor(message: string, stacktrace?: string);
}
export declare class NoSuchNetworkDataException extends Exception {
    constructor(message: string, stacktrace?: string);
}
export declare class UnavailableNetworkDataException extends Exception {
    constructor(message: string, stacktrace?: string);
}

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

export interface ErrorListenerCallback {
	(error: any): void;
}

export interface ErrorListenerUnbind {
	(): void;
}

// Avoid circular dependency on EventEmitter by implementing a subset of the interface.
export class ErrorHandler {
	private unexpectedErrorHandler: (e: any) => void;
	private listeners: ErrorListenerCallback[];

	constructor() {

		this.listeners = [];

		this.unexpectedErrorHandler = function (e: any) {
			setTimeout(() => {
				if (e.stack) {
					if (ErrorNoTelemetry.isErrorNoTelemetry(e)) {
						throw new ErrorNoTelemetry(e.message + '\n\n' + e.stack);
					}

					throw new Error(e.message + '\n\n' + e.stack);
				}

				throw e;
			}, 0);
		};
	}

	addListener(listener: ErrorListenerCallback): ErrorListenerUnbind {
		this.listeners.push(listener);

		return () => {
			this._removeListener(listener);
		};
	}

	private emit(e: any): void {
		this.listeners.forEach((listener) => {
			listener(e);
		});
	}

	private _removeListener(listener: ErrorListenerCallback): void {
		this.listeners.splice(this.listeners.indexOf(listener), 1);
	}

	setUnexpectedErrorHandler(newUnexpectedErrorHandler: (e: any) => void): void {
		this.unexpectedErrorHandler = newUnexpectedErrorHandler;
	}

	getUnexpectedErrorHandler(): (e: any) => void {
		return this.unexpectedErrorHandler;
	}

	onUnexpectedError(e: any): void {
		this.unexpectedErrorHandler(e);
		this.emit(e);
	}

	// For external errors, we don't want the listeners to be called
	onUnexpectedExternalError(e: any): void {
		this.unexpectedErrorHandler(e);
	}
}

export const errorHandler = new ErrorHandler();

/** @skipMangle */
export function setUnexpectedErrorHandler(newUnexpectedErrorHandler: (e: any) => void): void {
	errorHandler.setUnexpectedErrorHandler(newUnexpectedErrorHandler);
}

/**
 * Returns if the error is a SIGPIPE error. SIGPIPE errors should generally be
 * logged at most once, to avoid a loop.
 *
 * @see https://github.com/microsoft/vscode-remote-release/issues/6481
 */
export function isSigPipeError(e: unknown): e is Error {
	if (!e || typeof e !== 'object') {
		return false;
	}

	const cast = e as Record<string, string | undefined>;
	return cast.code === 'EPIPE' && cast.syscall?.toUpperCase() === 'WRITE';
}

export function onUnexpectedError(e: any): undefined {
	// ignore errors from cancelled promises
	if (!isCancellationError(e)) {
		errorHandler.onUnexpectedError(e);
	}
	return undefined;
}

export function onUnexpectedExternalError(e: any): undefined {
	// ignore errors from cancelled promises
	if (!isCancellationError(e)) {
		errorHandler.onUnexpectedExternalError(e);
	}
	return undefined;
}

export interface SerializedError {
	readonly $isError: true;
	readonly name: string;
	readonly message: string;
	readonly stack: string;
	readonly noTelemetry: boolean;
}

export function transformErrorForSerialization(error: Error): SerializedError;
export function transformErrorForSerialization(error: any): any;
export function transformErrorForSerialization(error: any): any {
	if (error instanceof Error) {
		const { name, message } = error;
		const stack: string = (<any>error).stacktrace || (<any>error).stack;
		return {
			$isError: true,
			name,
			message,
			stack,
			noTelemetry: ErrorNoTelemetry.isErrorNoTelemetry(error)
		};
	}

	// return as is
	return error;
}

export function transformErrorFromSerialization(data: SerializedError): Error {
	let error: Error;
	if (data.noTelemetry) {
		error = new ErrorNoTelemetry();
	} else {
		error = new Error();
		error.name = data.name;
	}
	error.message = data.message;
	error.stack = data.stack;
	return error;
}

// see https://github.com/v8/v8/wiki/Stack%20Trace%20API#basic-stack-traces
export interface V8CallSite {
	getThis(): unknown;
	getTypeName(): string | null;
	getFunction(): Function | undefined;
	getFunctionName(): string | null;
	getMethodName(): string | null;
	getFileName(): string | null;
	getLineNumber(): number | null;
	getColumnNumber(): number | null;
	getEvalOrigin(): string | undefined;
	isToplevel(): boolean;
	isEval(): boolean;
	isNative(): boolean;
	isConstructor(): boolean;
	toString(): string;
}

const canceledName = 'Canceled';

/**
 * Checks if the given error is a promise in canceled state
 */
export function isCancellationError(error: any): boolean {
	if (error instanceof CancellationError) {
		return true;
	}
	return error instanceof Error && error.name === canceledName && error.message === canceledName;
}

// !!!IMPORTANT!!!
// Do NOT change this class because it is also used as an API-type.
export class CancellationError extends Error {
	constructor() {
		super(canceledName);
		this.name = this.message;
	}
}

/**
 * @deprecated use {@link CancellationError `new CancellationError()`} instead
 */
export function canceled(): Error {
	const error = new Error(canceledName);
	error.name = error.message;
	return error;
}

export function illegalArgument(name?: string): Error {
	if (name) {
		return new Error(`Illegal argument: ${name}`);
	} else {
		return new Error('Illegal argument');
	}
}

export function illegalState(name?: string): Error {
	if (name) {
		return new Error(`Illegal state: ${name}`);
	} else {
		return new Error('Illegal state');
	}
}

export class ReadonlyError extends TypeError {
	constructor(name?: string) {
		super(name ? `${name} is read-only and cannot be changed` : 'Cannot change read-only property');
	}
}

export function getErrorMessage(err: any): string {
	if (!err) {
		return 'Error';
	}

	if (err.message) {
		return err.message;
	}

	if (err.stack) {
		return err.stack.split('\n')[0];
	}

	return String(err);
}

export class NotImplementedError extends Error {
	constructor(message?: string) {
		super('NotImplemented');
		if (message) {
			this.message = message;
		}
	}
}

export class NotSupportedError extends Error {
	constructor(message?: string) {
		super('NotSupported');
		if (message) {
			this.message = message;
		}
	}
}

export class ExpectedError extends Error {
	readonly isExpected = true;
}

/**
 * Error that when thrown won't be logged in telemetry as an unhandled error.
 */
export class ErrorNoTelemetry extends Error {
	override readonly name: string;

	constructor(msg?: string) {
		super(msg);
		this.name = 'CodeExpectedError';
	}

	public static fromError(err: Error): ErrorNoTelemetry {
		if (err instanceof ErrorNoTelemetry) {
			return err;
		}

		const result = new ErrorNoTelemetry();
		result.message = err.message;
		result.stack = err.stack;
		return result;
	}

	public static isErrorNoTelemetry(err: Error): err is ErrorNoTelemetry {
		return err.name === 'CodeExpectedError';
	}
}

/**
 * This error indicates a bug.
 * Do not throw this for invalid user input.
 * Only catch this error to recover gracefully from bugs.
 */
export class BugIndicatingError extends Error {
	constructor(message?: string) {
		super(message || 'An unexpected bug occurred.');
		Object.setPrototypeOf(this, BugIndicatingError.prototype);

		// Because we know for sure only buggy code throws this,
		// we definitely want to break here and fix the bug.
		// eslint-disable-next-line no-debugger
		// debugger;
	}
}

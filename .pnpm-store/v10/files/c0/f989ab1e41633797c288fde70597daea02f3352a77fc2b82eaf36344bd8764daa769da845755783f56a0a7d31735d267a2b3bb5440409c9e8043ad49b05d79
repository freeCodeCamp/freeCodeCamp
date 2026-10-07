/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
import { autorun } from 'vs/base/common/observableInternal/autorun';
import { IObservable, IReader, observableValue, transaction } from './base';
import { Derived, derived } from 'vs/base/common/observableInternal/derived';
import { CancellationToken, CancellationTokenSource } from 'vs/base/common/cancellation';
import { DebugNameData, DebugOwner } from 'vs/base/common/observableInternal/debugName';
import { strictEquals } from 'vs/base/common/equals';
import { CancellationError } from 'vs/base/common/errors';

export class ObservableLazy<T> {
	private readonly _value = observableValue<T | undefined>(this, undefined);

	/**
	 * The cached value.
	 * Does not force a computation of the value.
	 */
	public get cachedValue(): IObservable<T | undefined> { return this._value; }

	constructor(private readonly _computeValue: () => T) {
	}

	/**
	 * Returns the cached value.
	 * Computes the value if the value has not been cached yet.
	 */
	public getValue() {
		let v = this._value.get();
		if (!v) {
			v = this._computeValue();
			this._value.set(v, undefined);
		}
		return v;
	}
}

/**
 * A promise whose state is observable.
 */
export class ObservablePromise<T> {
	public static fromFn<T>(fn: () => Promise<T>): ObservablePromise<T> {
		return new ObservablePromise(fn());
	}

	private readonly _value = observableValue<PromiseResult<T> | undefined>(this, undefined);

	/**
	 * The promise that this object wraps.
	 */
	public readonly promise: Promise<T>;

	/**
	 * The current state of the promise.
	 * Is `undefined` if the promise didn't resolve yet.
	 */
	public readonly promiseResult: IObservable<PromiseResult<T> | undefined> = this._value;

	constructor(promise: Promise<T>) {
		this.promise = promise.then(value => {
			transaction(tx => {
				/** @description onPromiseResolved */
				this._value.set(new PromiseResult(value, undefined), tx);
			});
			return value;
		}, error => {
			transaction(tx => {
				/** @description onPromiseRejected */
				this._value.set(new PromiseResult<T>(undefined, error), tx);
			});
			throw error;
		});
	}
}

export class PromiseResult<T> {
	constructor(
		/**
		 * The value of the resolved promise.
		 * Undefined if the promise rejected.
		 */
		public readonly data: T | undefined,

		/**
		 * The error in case of a rejected promise.
		 * Undefined if the promise resolved.
		 */
		public readonly error: unknown | undefined,
	) {
	}

	/**
	 * Returns the value if the promise resolved, otherwise throws the error.
	 */
	public getDataOrThrow(): T {
		if (this.error) {
			throw this.error;
		}
		return this.data!;
	}
}

/**
 * A lazy promise whose state is observable.
 */
export class ObservableLazyPromise<T> {
	private readonly _lazyValue = new ObservableLazy(() => new ObservablePromise(this._computePromise()));

	/**
	 * Does not enforce evaluation of the promise compute function.
	 * Is undefined if the promise has not been computed yet.
	 */
	public readonly cachedPromiseResult = derived(this, reader => this._lazyValue.cachedValue.read(reader)?.promiseResult.read(reader));

	constructor(private readonly _computePromise: () => Promise<T>) {
	}

	public getPromise(): Promise<T> {
		return this._lazyValue.getValue().promise;
	}
}

/**
 * Resolves the promise when the observables state matches the predicate.
 */
export function waitForState<T>(observable: IObservable<T | null | undefined>): Promise<T>;
export function waitForState<T, TState extends T>(observable: IObservable<T>, predicate: (state: T) => state is TState, isError?: (state: T) => boolean | unknown | undefined, cancellationToken?: CancellationToken): Promise<TState>;
export function waitForState<T>(observable: IObservable<T>, predicate: (state: T) => boolean, isError?: (state: T) => boolean | unknown | undefined, cancellationToken?: CancellationToken): Promise<T>;
export function waitForState<T>(observable: IObservable<T>, predicate?: (state: T) => boolean, isError?: (state: T) => boolean | unknown | undefined, cancellationToken?: CancellationToken): Promise<T> {
	if (!predicate) {
		predicate = state => state !== null && state !== undefined;
	}
	return new Promise((resolve, reject) => {
		let isImmediateRun = true;
		let shouldDispose = false;
		const stateObs = observable.map(state => {
			/** @description waitForState.state */
			return {
				isFinished: predicate(state),
				error: isError ? isError(state) : false,
				state
			};
		});
		const d = autorun(reader => {
			/** @description waitForState */
			const { isFinished, error, state } = stateObs.read(reader);
			if (isFinished || error) {
				if (isImmediateRun) {
					// The variable `d` is not initialized yet
					shouldDispose = true;
				} else {
					d.dispose();
				}
				if (error) {
					reject(error === true ? state : error);
				} else {
					resolve(state);
				}
			}
		});
		if (cancellationToken) {
			const dc = cancellationToken.onCancellationRequested(() => {
				d.dispose();
				dc.dispose();
				reject(new CancellationError());
			});
			if (cancellationToken.isCancellationRequested) {
				d.dispose();
				dc.dispose();
				reject(new CancellationError());
				return;
			}
		}
		isImmediateRun = false;
		if (shouldDispose) {
			d.dispose();
		}
	});
}

export function derivedWithCancellationToken<T>(computeFn: (reader: IReader, cancellationToken: CancellationToken) => T): IObservable<T>;
export function derivedWithCancellationToken<T>(owner: object, computeFn: (reader: IReader, cancellationToken: CancellationToken) => T): IObservable<T>;
export function derivedWithCancellationToken<T>(computeFnOrOwner: ((reader: IReader, cancellationToken: CancellationToken) => T) | object, computeFnOrUndefined?: ((reader: IReader, cancellationToken: CancellationToken) => T)): IObservable<T> {
	let computeFn: (reader: IReader, store: CancellationToken) => T;
	let owner: DebugOwner;
	if (computeFnOrUndefined === undefined) {
		computeFn = computeFnOrOwner as any;
		owner = undefined;
	} else {
		owner = computeFnOrOwner;
		computeFn = computeFnOrUndefined as any;
	}

	let cancellationTokenSource: CancellationTokenSource | undefined = undefined;
	return new Derived(
		new DebugNameData(owner, undefined, computeFn),
		r => {
			if (cancellationTokenSource) {
				cancellationTokenSource.dispose(true);
			}
			cancellationTokenSource = new CancellationTokenSource();
			return computeFn(r, cancellationTokenSource.token);
		}, undefined,
		undefined,
		() => cancellationTokenSource?.dispose(),
		strictEquals,
	);
}

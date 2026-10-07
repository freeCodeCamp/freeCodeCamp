/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

import { strictEquals, EqualityComparer } from 'vs/base/common/equals';
import { DisposableStore, IDisposable } from 'vs/base/common/lifecycle';
import { keepObserved, recomputeInitiallyAndOnChange } from 'vs/base/common/observable';
import { DebugNameData, DebugOwner, getFunctionName } from 'vs/base/common/observableInternal/debugName';
import type { derivedOpts } from 'vs/base/common/observableInternal/derived';
import { getLogger } from 'vs/base/common/observableInternal/logging';

/**
 * Represents an observable value.
 *
 * @template T The type of the values the observable can hold.
 * @template TChange The type used to describe value changes
 * (usually `void` and only used in advanced scenarios).
 * While observers can miss temporary values of an observable,
 * they will receive all change values (as long as they are subscribed)!
 */
export interface IObservable<T, TChange = unknown> {
	/**
	 * Returns the current value.
	 *
	 * Calls {@link IObserver.handleChange} if the observable notices that the value changed.
	 * Must not be called from {@link IObserver.handleChange}!
	 */
	get(): T;

	/**
	 * Forces the observable to check for changes and report them.
	 *
	 * Has the same effect as calling {@link IObservable.get}, but does not force the observable
	 * to actually construct the value, e.g. if change deltas are used.
	 * Calls {@link IObserver.handleChange} if the observable notices that the value changed.
	 * Must not be called from {@link IObserver.handleChange}!
	 */
	reportChanges(): void;

	/**
	 * Adds the observer to the set of subscribed observers.
	 * This method is idempotent.
	 */
	addObserver(observer: IObserver): void;

	/**
	 * Removes the observer from the set of subscribed observers.
	 * This method is idempotent.
	 */
	removeObserver(observer: IObserver): void;

	/**
	 * Reads the current value and subscribes the reader to this observable.
	 *
	 * Calls {@link IReader.readObservable} if a reader is given, otherwise {@link IObservable.get}
	 * (see {@link ConvenientObservable.read} for the implementation).
	 */
	read(reader: IReader | undefined): T;

	/**
	 * Creates a derived observable that depends on this observable.
	 * Use the reader to read other observables
	 * (see {@link ConvenientObservable.map} for the implementation).
	 */
	map<TNew>(fn: (value: T, reader: IReader) => TNew): IObservable<TNew>;
	map<TNew>(owner: object, fn: (value: T, reader: IReader) => TNew): IObservable<TNew>;

	/**
	 * Makes sure this value is computed eagerly.
	 */
	recomputeInitiallyAndOnChange(store: DisposableStore, handleValue?: (value: T) => void): IObservable<T>;

	/**
	 * Makes sure this value is cached.
	 */
	keepObserved(store: DisposableStore): IObservable<T>;

	/**
	 * A human-readable name for debugging purposes.
	 */
	readonly debugName: string;

	/**
	 * This property captures the type of the change object. Do not use it at runtime!
	 */
	readonly TChange: TChange;
}

export interface IReader {
	/**
	 * Reads the value of an observable and subscribes to it.
	 */
	readObservable<T>(observable: IObservable<T, any>): T;
}

/**
 * Represents an observer that can be subscribed to an observable.
 *
 * If an observer is subscribed to an observable and that observable didn't signal
 * a change through one of the observer methods, the observer can assume that the
 * observable didn't change.
 * If an observable reported a possible change, {@link IObservable.reportChanges} forces
 * the observable to report an actual change if there was one.
 */
export interface IObserver {
	/**
	 * Signals that the given observable might have changed and a transaction potentially modifying that observable started.
	 * Before the given observable can call this method again, is must call {@link IObserver.endUpdate}.
	 *
	 * Implementations must not get/read the value of other observables, as they might not have received this event yet!
	 * The method {@link IObservable.reportChanges} can be used to force the observable to report the changes.
	 */
	beginUpdate<T>(observable: IObservable<T>): void;

	/**
	 * Signals that the transaction that potentially modified the given observable ended.
	 * This is a good place to react to (potential) changes.
	 */
	endUpdate<T>(observable: IObservable<T>): void;

	/**
	 * Signals that the given observable might have changed.
	 * The method {@link IObservable.reportChanges} can be used to force the observable to report the changes.
	 *
	 * Implementations must not get/read the value of other observables, as they might not have received this event yet!
	 * The change should be processed lazily or in {@link IObserver.endUpdate}.
	 */
	handlePossibleChange<T>(observable: IObservable<T>): void;

	/**
	 * Signals that the given {@link observable} changed.
	 *
	 * Implementations must not get/read the value of other observables, as they might not have received this event yet!
	 * The change should be processed lazily or in {@link IObserver.endUpdate}.
	 *
	 * @param change Indicates how or why the value changed.
	 */
	handleChange<T, TChange>(observable: IObservable<T, TChange>, change: TChange): void;
}

export interface ISettable<T, TChange = void> {
	/**
	 * Sets the value of the observable.
	 * Use a transaction to batch multiple changes (with a transaction, observers only react at the end of the transaction).
	 *
	 * @param transaction When given, value changes are handled on demand or when the transaction ends.
	 * @param change Describes how or why the value changed.
	 */
	set(value: T, transaction: ITransaction | undefined, change: TChange): void;
}

export interface ITransaction {
	/**
	 * Calls {@link Observer.beginUpdate} immediately
	 * and {@link Observer.endUpdate} when the transaction ends.
	 */
	updateObserver(observer: IObserver, observable: IObservable<any, any>): void;
}

let _recomputeInitiallyAndOnChange: typeof recomputeInitiallyAndOnChange;
export function _setRecomputeInitiallyAndOnChange(recomputeInitiallyAndOnChange: typeof _recomputeInitiallyAndOnChange) {
	_recomputeInitiallyAndOnChange = recomputeInitiallyAndOnChange;
}

let _keepObserved: typeof keepObserved;
export function _setKeepObserved(keepObserved: typeof _keepObserved) {
	_keepObserved = keepObserved;
}


let _derived: typeof derivedOpts;
/**
 * @internal
 * This is to allow splitting files.
*/
export function _setDerivedOpts(derived: typeof _derived) {
	_derived = derived;
}

export abstract class ConvenientObservable<T, TChange> implements IObservable<T, TChange> {
	get TChange(): TChange { return null!; }

	public abstract get(): T;

	public reportChanges(): void {
		this.get();
	}

	public abstract addObserver(observer: IObserver): void;
	public abstract removeObserver(observer: IObserver): void;

	/** @sealed */
	public read(reader: IReader | undefined): T {
		if (reader) {
			return reader.readObservable(this);
		} else {
			return this.get();
		}
	}

	/** @sealed */
	public map<TNew>(fn: (value: T, reader: IReader) => TNew): IObservable<TNew>;
	public map<TNew>(owner: DebugOwner, fn: (value: T, reader: IReader) => TNew): IObservable<TNew>;
	public map<TNew>(fnOrOwner: DebugOwner | ((value: T, reader: IReader) => TNew), fnOrUndefined?: (value: T, reader: IReader) => TNew): IObservable<TNew> {
		const owner = fnOrUndefined === undefined ? undefined : fnOrOwner as DebugOwner;
		const fn = fnOrUndefined === undefined ? fnOrOwner as (value: T, reader: IReader) => TNew : fnOrUndefined;

		return _derived(
			{
				owner,
				debugName: () => {
					const name = getFunctionName(fn);
					if (name !== undefined) {
						return name;
					}

					// regexp to match `x => x.y` or `x => x?.y` where x and y can be arbitrary identifiers (uses backref):
					const regexp = /^\s*\(?\s*([a-zA-Z_$][a-zA-Z_$0-9]*)\s*\)?\s*=>\s*\1(?:\??)\.([a-zA-Z_$][a-zA-Z_$0-9]*)\s*$/;
					const match = regexp.exec(fn.toString());
					if (match) {
						return `${this.debugName}.${match[2]}`;
					}
					if (!owner) {
						return `${this.debugName} (mapped)`;
					}
					return undefined;
				},
				debugReferenceFn: fn,
			},
			(reader) => fn(this.read(reader), reader),
		);
	}

	public recomputeInitiallyAndOnChange(store: DisposableStore, handleValue?: (value: T) => void): IObservable<T> {
		store.add(_recomputeInitiallyAndOnChange!(this, handleValue));
		return this;
	}

	/**
	 * Ensures that this observable is observed. This keeps the cache alive.
	 * However, in case of deriveds, it does not force eager evaluation (only when the value is read/get).
	 * Use `recomputeInitiallyAndOnChange` for eager evaluation.
	 */
	public keepObserved(store: DisposableStore): IObservable<T> {
		store.add(_keepObserved!(this));
		return this;
	}

	public abstract get debugName(): string;

	protected get debugValue() {
		return this.get();
	}
}

export abstract class BaseObservable<T, TChange = void> extends ConvenientObservable<T, TChange> {
	protected readonly observers = new Set<IObserver>();

	public addObserver(observer: IObserver): void {
		const len = this.observers.size;
		this.observers.add(observer);
		if (len === 0) {
			this.onFirstObserverAdded();
		}
	}

	public removeObserver(observer: IObserver): void {
		const deleted = this.observers.delete(observer);
		if (deleted && this.observers.size === 0) {
			this.onLastObserverRemoved();
		}
	}

	protected onFirstObserverAdded(): void { }
	protected onLastObserverRemoved(): void { }
}

/**
 * Starts a transaction in which many observables can be changed at once.
 * {@link fn} should start with a JS Doc using `@description` to give the transaction a debug name.
 * Reaction run on demand or when the transaction ends.
 */

export function transaction(fn: (tx: ITransaction) => void, getDebugName?: () => string): void {
	const tx = new TransactionImpl(fn, getDebugName);
	try {
		fn(tx);
	} finally {
		tx.finish();
	}
}

let _globalTransaction: ITransaction | undefined = undefined;

export function globalTransaction(fn: (tx: ITransaction) => void) {
	if (_globalTransaction) {
		fn(_globalTransaction);
	} else {
		const tx = new TransactionImpl(fn, undefined);
		_globalTransaction = tx;
		try {
			fn(tx);
		} finally {
			tx.finish(); // During finish, more actions might be added to the transaction.
			// Which is why we only clear the global transaction after finish.
			_globalTransaction = undefined;
		}
	}
}

export async function asyncTransaction(fn: (tx: ITransaction) => Promise<void>, getDebugName?: () => string): Promise<void> {
	const tx = new TransactionImpl(fn, getDebugName);
	try {
		await fn(tx);
	} finally {
		tx.finish();
	}
}

/**
 * Allows to chain transactions.
 */
export function subtransaction(tx: ITransaction | undefined, fn: (tx: ITransaction) => void, getDebugName?: () => string): void {
	if (!tx) {
		transaction(fn, getDebugName);
	} else {
		fn(tx);
	}
}

export class TransactionImpl implements ITransaction {
	private updatingObservers: { observer: IObserver; observable: IObservable<any> }[] | null = [];

	constructor(public readonly _fn: Function, private readonly _getDebugName?: () => string) {
		getLogger()?.handleBeginTransaction(this);
	}

	public getDebugName(): string | undefined {
		if (this._getDebugName) {
			return this._getDebugName();
		}
		return getFunctionName(this._fn);
	}

	public updateObserver(observer: IObserver, observable: IObservable<any>): void {
		// When this gets called while finish is active, they will still get considered
		this.updatingObservers!.push({ observer, observable });
		observer.beginUpdate(observable);
	}

	public finish(): void {
		const updatingObservers = this.updatingObservers!;
		for (let i = 0; i < updatingObservers.length; i++) {
			const { observer, observable } = updatingObservers[i];
			observer.endUpdate(observable);
		}
		// Prevent anyone from updating observers from now on.
		this.updatingObservers = null;
		getLogger()?.handleEndTransaction();
	}
}

/**
 * A settable observable.
 */
export interface ISettableObservable<T, TChange = void> extends IObservable<T, TChange>, ISettable<T, TChange> {
}

/**
 * Creates an observable value.
 * Observers get informed when the value changes.
 * @template TChange An arbitrary type to describe how or why the value changed. Defaults to `void`.
 * Observers will receive every single change value.
 */
export function observableValue<T, TChange = void>(name: string, initialValue: T): ISettableObservable<T, TChange>;
export function observableValue<T, TChange = void>(owner: object, initialValue: T): ISettableObservable<T, TChange>;
export function observableValue<T, TChange = void>(nameOrOwner: string | object, initialValue: T): ISettableObservable<T, TChange> {
	let debugNameData: DebugNameData;
	if (typeof nameOrOwner === 'string') {
		debugNameData = new DebugNameData(undefined, nameOrOwner, undefined);
	} else {
		debugNameData = new DebugNameData(nameOrOwner, undefined, undefined);
	}
	return new ObservableValue(debugNameData, initialValue, strictEquals);
}

export class ObservableValue<T, TChange = void>
	extends BaseObservable<T, TChange>
	implements ISettableObservable<T, TChange> {
	protected _value: T;

	get debugName() {
		return this._debugNameData.getDebugName(this) ?? 'ObservableValue';
	}

	constructor(
		private readonly _debugNameData: DebugNameData,
		initialValue: T,
		private readonly _equalityComparator: EqualityComparer<T>,
	) {
		super();
		this._value = initialValue;
	}
	public override get(): T {
		return this._value;
	}

	public set(value: T, tx: ITransaction | undefined, change: TChange): void {
		if (change === undefined && this._equalityComparator(this._value, value)) {
			return;
		}

		let _tx: TransactionImpl | undefined;
		if (!tx) {
			tx = _tx = new TransactionImpl(() => { }, () => `Setting ${this.debugName}`);
		}
		try {
			const oldValue = this._value;
			this._setValue(value);
			getLogger()?.handleObservableChanged(this, { oldValue, newValue: value, change, didChange: true, hadValue: true });

			for (const observer of this.observers) {
				tx.updateObserver(observer, this);
				observer.handleChange(this, change);
			}
		} finally {
			if (_tx) {
				_tx.finish();
			}
		}
	}

	override toString(): string {
		return `${this.debugName}: ${this._value}`;
	}

	protected _setValue(newValue: T): void {
		this._value = newValue;
	}
}

/**
 * A disposable observable. When disposed, its value is also disposed.
 * When a new value is set, the previous value is disposed.
 */
export function disposableObservableValue<T extends IDisposable | undefined, TChange = void>(nameOrOwner: string | object, initialValue: T): ISettableObservable<T, TChange> & IDisposable {
	let debugNameData: DebugNameData;
	if (typeof nameOrOwner === 'string') {
		debugNameData = new DebugNameData(undefined, nameOrOwner, undefined);
	} else {
		debugNameData = new DebugNameData(nameOrOwner, undefined, undefined);
	}
	return new DisposableObservableValue(debugNameData, initialValue, strictEquals);
}

export class DisposableObservableValue<T extends IDisposable | undefined, TChange = void> extends ObservableValue<T, TChange> implements IDisposable {
	protected override _setValue(newValue: T): void {
		if (this._value === newValue) {
			return;
		}
		if (this._value) {
			this._value.dispose();
		}
		this._value = newValue;
	}

	public dispose(): void {
		this._value?.dispose();
	}
}

export interface IChangeTracker {
	/**
	 * Returns if this change should cause an invalidation.
	 * Implementations can record changes.
	*/
	handleChange(context: IChangeContext): boolean;
}

export interface IChangeContext {
	readonly changedObservable: IObservable<any, any>;
	readonly change: unknown;

	/**
	 * Returns if the given observable caused the change.
	 */
	didChange<T, TChange>(observable: IObservable<T, TChange>): this is { change: TChange };
}

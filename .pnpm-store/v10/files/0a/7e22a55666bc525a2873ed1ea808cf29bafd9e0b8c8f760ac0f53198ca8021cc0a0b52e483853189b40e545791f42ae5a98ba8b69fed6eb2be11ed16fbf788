/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

import { assertFn } from 'vs/base/common/assert';
import { EqualityComparer, strictEquals } from 'vs/base/common/equals';
import { DisposableStore, IDisposable } from 'vs/base/common/lifecycle';
import { BaseObservable, IChangeContext, IObservable, IObserver, IReader, ISettableObservable, ITransaction, _setDerivedOpts, } from 'vs/base/common/observableInternal/base';
import { DebugNameData, IDebugNameData, DebugOwner } from 'vs/base/common/observableInternal/debugName';
import { getLogger } from 'vs/base/common/observableInternal/logging';

/**
 * Creates an observable that is derived from other observables.
 * The value is only recomputed when absolutely needed.
 *
 * {@link computeFn} should start with a JS Doc using `@description` to name the derived.
 */
export function derived<T>(computeFn: (reader: IReader) => T): IObservable<T>;
export function derived<T>(owner: DebugOwner, computeFn: (reader: IReader) => T): IObservable<T>;
export function derived<T>(computeFnOrOwner: ((reader: IReader) => T) | DebugOwner, computeFn?: ((reader: IReader) => T) | undefined): IObservable<T> {
	if (computeFn !== undefined) {
		return new Derived(
			new DebugNameData(computeFnOrOwner, undefined, computeFn),
			computeFn,
			undefined,
			undefined,
			undefined,
			strictEquals
		);
	}
	return new Derived(
		new DebugNameData(undefined, undefined, computeFnOrOwner as any),
		computeFnOrOwner as any,
		undefined,
		undefined,
		undefined,
		strictEquals
	);
}

export function derivedWithSetter<T>(owner: DebugOwner | undefined, computeFn: (reader: IReader) => T, setter: (value: T, transaction: ITransaction | undefined) => void): ISettableObservable<T> {
	return new DerivedWithSetter(
		new DebugNameData(owner, undefined, computeFn),
		computeFn,
		undefined,
		undefined,
		undefined,
		strictEquals,
		setter,
	);
}

export function derivedOpts<T>(
	options: IDebugNameData & {
		equalsFn?: EqualityComparer<T>;
		onLastObserverRemoved?: (() => void);
	},
	computeFn: (reader: IReader) => T
): IObservable<T> {
	return new Derived(
		new DebugNameData(options.owner, options.debugName, options.debugReferenceFn),
		computeFn,
		undefined,
		undefined,
		options.onLastObserverRemoved,
		options.equalsFn ?? strictEquals
	);
}

_setDerivedOpts(derivedOpts);

/**
 * Represents an observable that is derived from other observables.
 * The value is only recomputed when absolutely needed.
 *
 * {@link computeFn} should start with a JS Doc using `@description` to name the derived.
 *
 * Use `createEmptyChangeSummary` to create a "change summary" that can collect the changes.
 * Use `handleChange` to add a reported change to the change summary.
 * The compute function is given the last change summary.
 * The change summary is discarded after the compute function was called.
 *
 * @see derived
 */
export function derivedHandleChanges<T, TChangeSummary>(
	options: IDebugNameData & {
		createEmptyChangeSummary: () => TChangeSummary;
		handleChange: (context: IChangeContext, changeSummary: TChangeSummary) => boolean;
		equalityComparer?: EqualityComparer<T>;
	},
	computeFn: (reader: IReader, changeSummary: TChangeSummary) => T
): IObservable<T> {
	return new Derived(
		new DebugNameData(options.owner, options.debugName, undefined),
		computeFn,
		options.createEmptyChangeSummary,
		options.handleChange,
		undefined,
		options.equalityComparer ?? strictEquals
	);
}

export function derivedWithStore<T>(computeFn: (reader: IReader, store: DisposableStore) => T): IObservable<T>;
export function derivedWithStore<T>(owner: object, computeFn: (reader: IReader, store: DisposableStore) => T): IObservable<T>;
export function derivedWithStore<T>(computeFnOrOwner: ((reader: IReader, store: DisposableStore) => T) | object, computeFnOrUndefined?: ((reader: IReader, store: DisposableStore) => T)): IObservable<T> {
	let computeFn: (reader: IReader, store: DisposableStore) => T;
	let owner: DebugOwner;
	if (computeFnOrUndefined === undefined) {
		computeFn = computeFnOrOwner as any;
		owner = undefined;
	} else {
		owner = computeFnOrOwner;
		computeFn = computeFnOrUndefined as any;
	}

	const store = new DisposableStore();
	return new Derived(
		new DebugNameData(owner, undefined, computeFn),
		r => {
			store.clear();
			return computeFn(r, store);
		}, undefined,
		undefined,
		() => store.dispose(),
		strictEquals
	);
}

export function derivedDisposable<T extends IDisposable | undefined>(computeFn: (reader: IReader) => T): IObservable<T>;
export function derivedDisposable<T extends IDisposable | undefined>(owner: DebugOwner, computeFn: (reader: IReader) => T): IObservable<T>;
export function derivedDisposable<T extends IDisposable | undefined>(computeFnOrOwner: ((reader: IReader) => T) | DebugOwner, computeFnOrUndefined?: ((reader: IReader) => T)): IObservable<T> {
	let computeFn: (reader: IReader) => T;
	let owner: DebugOwner;
	if (computeFnOrUndefined === undefined) {
		computeFn = computeFnOrOwner as any;
		owner = undefined;
	} else {
		owner = computeFnOrOwner;
		computeFn = computeFnOrUndefined as any;
	}

	let store: DisposableStore | undefined = undefined;
	return new Derived(
		new DebugNameData(owner, undefined, computeFn),
		r => {
			if (!store) {
				store = new DisposableStore();
			} else {
				store.clear();
			}
			const result = computeFn(r);
			if (result) {
				store.add(result);
			}
			return result;
		}, undefined,
		undefined,
		() => {
			if (store) {
				store.dispose();
				store = undefined;
			}
		},
		strictEquals
	);
}

const enum DerivedState {
	/** Initial state, no previous value, recomputation needed */
	initial = 0,

	/**
	 * A dependency could have changed.
	 * We need to explicitly ask them if at least one dependency changed.
	 */
	dependenciesMightHaveChanged = 1,

	/**
	 * A dependency changed and we need to recompute.
	 * After recomputation, we need to check the previous value to see if we changed as well.
	 */
	stale = 2,

	/**
	 * No change reported, our cached value is up to date.
	 */
	upToDate = 3,
}

export class Derived<T, TChangeSummary = any> extends BaseObservable<T, void> implements IReader, IObserver {
	private state = DerivedState.initial;
	private value: T | undefined = undefined;
	private updateCount = 0;
	private dependencies = new Set<IObservable<any>>();
	private dependenciesToBeRemoved = new Set<IObservable<any>>();
	private changeSummary: TChangeSummary | undefined = undefined;

	public override get debugName(): string {
		return this._debugNameData.getDebugName(this) ?? '(anonymous)';
	}

	constructor(
		public readonly _debugNameData: DebugNameData,
		public readonly _computeFn: (reader: IReader, changeSummary: TChangeSummary) => T,
		private readonly createChangeSummary: (() => TChangeSummary) | undefined,
		private readonly _handleChange: ((context: IChangeContext, summary: TChangeSummary) => boolean) | undefined,
		private readonly _handleLastObserverRemoved: (() => void) | undefined = undefined,
		private readonly _equalityComparator: EqualityComparer<T>,
	) {
		super();
		this.changeSummary = this.createChangeSummary?.();
		getLogger()?.handleDerivedCreated(this);
	}

	protected override onLastObserverRemoved(): void {
		/**
		 * We are not tracking changes anymore, thus we have to assume
		 * that our cache is invalid.
		 */
		this.state = DerivedState.initial;
		this.value = undefined;
		for (const d of this.dependencies) {
			d.removeObserver(this);
		}
		this.dependencies.clear();

		this._handleLastObserverRemoved?.();
	}

	public override get(): T {
		if (this.observers.size === 0) {
			// Without observers, we don't know when to clean up stuff.
			// Thus, we don't cache anything to prevent memory leaks.
			const result = this._computeFn(this, this.createChangeSummary?.()!);
			// Clear new dependencies
			this.onLastObserverRemoved();
			return result;
		} else {
			do {
				// We might not get a notification for a dependency that changed while it is updating,
				// thus we also have to ask all our depedencies if they changed in this case.
				if (this.state === DerivedState.dependenciesMightHaveChanged) {
					for (const d of this.dependencies) {
						/** might call {@link handleChange} indirectly, which could make us stale */
						d.reportChanges();

						if (this.state as DerivedState === DerivedState.stale) {
							// The other dependencies will refresh on demand, so early break
							break;
						}
					}
				}

				// We called report changes of all dependencies.
				// If we are still not stale, we can assume to be up to date again.
				if (this.state === DerivedState.dependenciesMightHaveChanged) {
					this.state = DerivedState.upToDate;
				}

				this._recomputeIfNeeded();
				// In case recomputation changed one of our dependencies, we need to recompute again.
			} while (this.state !== DerivedState.upToDate);
			return this.value!;
		}
	}

	private _recomputeIfNeeded() {
		if (this.state === DerivedState.upToDate) {
			return;
		}
		const emptySet = this.dependenciesToBeRemoved;
		this.dependenciesToBeRemoved = this.dependencies;
		this.dependencies = emptySet;

		const hadValue = this.state !== DerivedState.initial;
		const oldValue = this.value;
		this.state = DerivedState.upToDate;

		const changeSummary = this.changeSummary!;
		this.changeSummary = this.createChangeSummary?.();
		try {
			/** might call {@link handleChange} indirectly, which could invalidate us */
			this.value = this._computeFn(this, changeSummary);
		} finally {
			// We don't want our observed observables to think that they are (not even temporarily) not being observed.
			// Thus, we only unsubscribe from observables that are definitely not read anymore.
			for (const o of this.dependenciesToBeRemoved) {
				o.removeObserver(this);
			}
			this.dependenciesToBeRemoved.clear();
		}

		const didChange = hadValue && !(this._equalityComparator(oldValue!, this.value));

		getLogger()?.handleDerivedRecomputed(this, {
			oldValue,
			newValue: this.value,
			change: undefined,
			didChange,
			hadValue,
		});

		if (didChange) {
			for (const r of this.observers) {
				r.handleChange(this, undefined);
			}
		}
	}

	public override toString(): string {
		return `LazyDerived<${this.debugName}>`;
	}

	// IObserver Implementation
	public beginUpdate<T>(_observable: IObservable<T>): void {
		this.updateCount++;
		const propagateBeginUpdate = this.updateCount === 1;
		if (this.state === DerivedState.upToDate) {
			this.state = DerivedState.dependenciesMightHaveChanged;
			// If we propagate begin update, that will already signal a possible change.
			if (!propagateBeginUpdate) {
				for (const r of this.observers) {
					r.handlePossibleChange(this);
				}
			}
		}
		if (propagateBeginUpdate) {
			for (const r of this.observers) {
				r.beginUpdate(this); // This signals a possible change
			}
		}
	}

	public endUpdate<T>(_observable: IObservable<T>): void {
		this.updateCount--;
		if (this.updateCount === 0) {
			// End update could change the observer list.
			const observers = [...this.observers];
			for (const r of observers) {
				r.endUpdate(this);
			}
		}
		assertFn(() => this.updateCount >= 0);
	}

	public handlePossibleChange<T>(observable: IObservable<T, unknown>): void {
		// In all other states, observers already know that we might have changed.
		if (this.state === DerivedState.upToDate && this.dependencies.has(observable) && !this.dependenciesToBeRemoved.has(observable)) {
			this.state = DerivedState.dependenciesMightHaveChanged;
			for (const r of this.observers) {
				r.handlePossibleChange(this);
			}
		}
	}

	public handleChange<T, TChange>(observable: IObservable<T, TChange>, change: TChange): void {
		if (this.dependencies.has(observable) && !this.dependenciesToBeRemoved.has(observable)) {
			const shouldReact = this._handleChange ? this._handleChange({
				changedObservable: observable,
				change,
				didChange: (o): this is any => o === observable as any,
			}, this.changeSummary!) : true;
			const wasUpToDate = this.state === DerivedState.upToDate;
			if (shouldReact && (this.state === DerivedState.dependenciesMightHaveChanged || wasUpToDate)) {
				this.state = DerivedState.stale;
				if (wasUpToDate) {
					for (const r of this.observers) {
						r.handlePossibleChange(this);
					}
				}
			}
		}
	}

	// IReader Implementation
	public readObservable<T>(observable: IObservable<T>): T {
		// Subscribe before getting the value to enable caching
		observable.addObserver(this);
		/** This might call {@link handleChange} indirectly, which could invalidate us */
		const value = observable.get();
		// Which is why we only add the observable to the dependencies now.
		this.dependencies.add(observable);
		this.dependenciesToBeRemoved.delete(observable);
		return value;
	}

	public override addObserver(observer: IObserver): void {
		const shouldCallBeginUpdate = !this.observers.has(observer) && this.updateCount > 0;
		super.addObserver(observer);

		if (shouldCallBeginUpdate) {
			observer.beginUpdate(this);
		}
	}

	public override removeObserver(observer: IObserver): void {
		const shouldCallEndUpdate = this.observers.has(observer) && this.updateCount > 0;
		super.removeObserver(observer);

		if (shouldCallEndUpdate) {
			// Calling end update after removing the observer makes sure endUpdate cannot be called twice here.
			observer.endUpdate(this);
		}
	}
}


export class DerivedWithSetter<T, TChangeSummary = any> extends Derived<T, TChangeSummary> implements ISettableObservable<T> {
	constructor(
		debugNameData: DebugNameData,
		computeFn: (reader: IReader, changeSummary: TChangeSummary) => T,
		createChangeSummary: (() => TChangeSummary) | undefined,
		handleChange: ((context: IChangeContext, summary: TChangeSummary) => boolean) | undefined,
		handleLastObserverRemoved: (() => void) | undefined = undefined,
		equalityComparator: EqualityComparer<T>,
		public readonly set: (value: T, tx: ITransaction | undefined) => void,
	) {
		super(
			debugNameData,
			computeFn,
			createChangeSummary,
			handleChange,
			handleLastObserverRemoved,
			equalityComparator,
		);
	}
}

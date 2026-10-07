/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

import { EqualityComparer } from 'vs/base/common/equals';
import { ISettableObservable, ITransaction } from 'vs/base/common/observable';
import { BaseObservable, IObserver, TransactionImpl } from 'vs/base/common/observableInternal/base';
import { DebugNameData } from 'vs/base/common/observableInternal/debugName';

/**
 * Holds off updating observers until the value is actually read.
*/
export class LazyObservableValue<T, TChange = void>
	extends BaseObservable<T, TChange>
	implements ISettableObservable<T, TChange> {
	protected _value: T;
	private _isUpToDate = true;
	private readonly _deltas: TChange[] = [];

	get debugName() {
		return this._debugNameData.getDebugName(this) ?? 'LazyObservableValue';
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
		this._update();
		return this._value;
	}

	private _update(): void {
		if (this._isUpToDate) {
			return;
		}
		this._isUpToDate = true;

		if (this._deltas.length > 0) {
			for (const observer of this.observers) {
				for (const change of this._deltas) {
					observer.handleChange(this, change);
				}
			}
			this._deltas.length = 0;
		} else {
			for (const observer of this.observers) {
				observer.handleChange(this, undefined);
			}
		}
	}

	private _updateCounter = 0;

	private _beginUpdate(): void {
		this._updateCounter++;
		if (this._updateCounter === 1) {
			for (const observer of this.observers) {
				observer.beginUpdate(this);
			}
		}
	}

	private _endUpdate(): void {
		this._updateCounter--;
		if (this._updateCounter === 0) {
			this._update();

			// End update could change the observer list.
			const observers = [...this.observers];
			for (const r of observers) {
				r.endUpdate(this);
			}
		}
	}

	public override addObserver(observer: IObserver): void {
		const shouldCallBeginUpdate = !this.observers.has(observer) && this._updateCounter > 0;
		super.addObserver(observer);

		if (shouldCallBeginUpdate) {
			observer.beginUpdate(this);
		}
	}

	public override removeObserver(observer: IObserver): void {
		const shouldCallEndUpdate = this.observers.has(observer) && this._updateCounter > 0;
		super.removeObserver(observer);

		if (shouldCallEndUpdate) {
			// Calling end update after removing the observer makes sure endUpdate cannot be called twice here.
			observer.endUpdate(this);
		}
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
			this._isUpToDate = false;
			this._setValue(value);
			if (change !== undefined) {
				this._deltas.push(change);
			}

			tx.updateObserver({
				beginUpdate: () => this._beginUpdate(),
				endUpdate: () => this._endUpdate(),
				handleChange: (observable, change) => { },
				handlePossibleChange: (observable) => { },
			}, this);

			if (this._updateCounter > 1) {
				// We already started begin/end update, so we need to manually call handlePossibleChange
				for (const observer of this.observers) {
					observer.handlePossibleChange(this);
				}
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

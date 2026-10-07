/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

import { EqualityComparer, strictEquals } from 'vs/base/common/equals';
import { ISettableObservable } from 'vs/base/common/observable';
import { ObservableValue } from 'vs/base/common/observableInternal/base';
import { IDebugNameData, DebugNameData } from 'vs/base/common/observableInternal/debugName';
import { LazyObservableValue } from 'vs/base/common/observableInternal/lazyObservableValue';

export function observableValueOpts<T, TChange = void>(
	options: IDebugNameData & {
		equalsFn?: EqualityComparer<T>;
		lazy?: boolean;
	},
	initialValue: T
): ISettableObservable<T, TChange> {
	if (options.lazy) {
		return new LazyObservableValue(
			new DebugNameData(options.owner, options.debugName, undefined),
			initialValue,
			options.equalsFn ?? strictEquals,
		);
	}
	return new ObservableValue(
		new DebugNameData(options.owner, options.debugName, undefined),
		initialValue,
		options.equalsFn ?? strictEquals,
	);
}

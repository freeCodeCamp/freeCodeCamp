import { CompareKeys } from '@vitest/pretty-format';

/**
* Copyright (c) Meta Platforms, Inc. and affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/

type DiffOptionsColor = (arg: string) => string;
interface DiffOptions {
	aAnnotation?: string;
	aColor?: DiffOptionsColor;
	aIndicator?: string;
	bAnnotation?: string;
	bColor?: DiffOptionsColor;
	bIndicator?: string;
	changeColor?: DiffOptionsColor;
	changeLineTrailingSpaceColor?: DiffOptionsColor;
	commonColor?: DiffOptionsColor;
	commonIndicator?: string;
	commonLineTrailingSpaceColor?: DiffOptionsColor;
	contextLines?: number;
	emptyFirstOrLastLinePlaceholder?: string;
	expand?: boolean;
	includeChangeCounts?: boolean;
	omitAnnotationLines?: boolean;
	patchColor?: DiffOptionsColor;
	printBasicPrototype?: boolean;
	maxDepth?: number;
	compareKeys?: CompareKeys;
	truncateThreshold?: number;
	truncateAnnotation?: string;
	truncateAnnotationColor?: DiffOptionsColor;
}
interface SerializedDiffOptions {
	aAnnotation?: string;
	aIndicator?: string;
	bAnnotation?: string;
	bIndicator?: string;
	commonIndicator?: string;
	contextLines?: number;
	emptyFirstOrLastLinePlaceholder?: string;
	expand?: boolean;
	includeChangeCounts?: boolean;
	omitAnnotationLines?: boolean;
	printBasicPrototype?: boolean;
	maxDepth?: number;
	truncateThreshold?: number;
	truncateAnnotation?: string;
}

export type { DiffOptions as D, SerializedDiffOptions as S, DiffOptionsColor as a };

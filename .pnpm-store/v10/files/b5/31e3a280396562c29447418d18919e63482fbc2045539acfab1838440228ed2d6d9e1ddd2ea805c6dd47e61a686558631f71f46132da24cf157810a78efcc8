/*
 * Copyright 2024 Google LLC.
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
/**
 * Check if the given string is a single complex grapheme. A complex grapheme is one that
 * is made up of multiple characters.
 */
export function isSingleComplexGrapheme(value) {
    return isSingleGrapheme(value) && value.length > 1;
}
/**
 * Check if the given string is a single grapheme.
 */
export function isSingleGrapheme(value) {
    // Theoretically there can be some strings considered a grapheme in some locales, like
    // slovak "ch" digraph. Use english locale for consistency.
    // https://www.unicode.org/reports/tr29/#Grapheme_Cluster_Boundaries
    const segmenter = new Intl.Segmenter('en', { granularity: 'grapheme' });
    return [...segmenter.segment(value)].length === 1;
}
//# sourceMappingURL=graphemeTools.js.map
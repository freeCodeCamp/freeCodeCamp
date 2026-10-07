/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */


/// <reference no-default-lib="true"/>

/// <reference lib="es2024.collection" />

interface ReadonlySetLike<T> {
    /**
     * Despite its name, returns an iterator of the values in the set-like.
     */
    keys(): Iterator<T>;
    /**
     * @returns a boolean indicating whether an element with the specified value exists in the set-like or not.
     */
    has(value: T): boolean;
    /**
     * @returns the number of (unique) elements in the set-like.
     */
    readonly size: number;
}

interface Set<T> {
    /**
     * @returns a new Set containing all the elements in this Set and also all the elements in the argument.
     */
    union<U>(other: ReadonlySetLike<U>): Set<T | U>;
    /**
     * @returns a new Set containing all the elements which are both in this Set and in the argument.
     */
    intersection<U>(other: ReadonlySetLike<U>): Set<T & U>;
    /**
     * @returns a new Set containing all the elements in this Set which are not also in the argument.
     */
    difference<U>(other: ReadonlySetLike<U>): Set<T>;
    /**
     * @returns a new Set containing all the elements which are in either this Set or in the argument, but not in both.
     */
    symmetricDifference<U>(other: ReadonlySetLike<U>): Set<T | U>;
    /**
     * @returns a boolean indicating whether all the elements in this Set are also in the argument.
     */
    isSubsetOf(other: ReadonlySetLike<unknown>): boolean;
    /**
     * @returns a boolean indicating whether all the elements in the argument are also in this Set.
     */
    isSupersetOf(other: ReadonlySetLike<unknown>): boolean;
    /**
     * @returns a boolean indicating whether this Set has no elements in common with the argument.
     */
    isDisjointFrom(other: ReadonlySetLike<unknown>): boolean;
}

interface ReadonlySet<T> {
    /**
     * @returns a new Set containing all the elements in this Set and also all the elements in the argument.
     */
    union<U>(other: ReadonlySetLike<U>): Set<T | U>;
    /**
     * @returns a new Set containing all the elements which are both in this Set and in the argument.
     */
    intersection<U>(other: ReadonlySetLike<U>): Set<T & U>;
    /**
     * @returns a new Set containing all the elements in this Set which are not also in the argument.
     */
    difference<U>(other: ReadonlySetLike<U>): Set<T>;
    /**
     * @returns a new Set containing all the elements which are in either this Set or in the argument, but not in both.
     */
    symmetricDifference<U>(other: ReadonlySetLike<U>): Set<T | U>;
    /**
     * @returns a boolean indicating whether all the elements in this Set are also in the argument.
     */
    isSubsetOf(other: ReadonlySetLike<unknown>): boolean;
    /**
     * @returns a boolean indicating whether all the elements in the argument are also in this Set.
     */
    isSupersetOf(other: ReadonlySetLike<unknown>): boolean;
    /**
     * @returns a boolean indicating whether this Set has no elements in common with the argument.
     */
    isDisjointFrom(other: ReadonlySetLike<unknown>): boolean;
}

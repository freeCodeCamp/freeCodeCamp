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

declare namespace Reflect {
    /**
     * Calls the function with the specified object as the this value
     * and the elements of specified array as the arguments.
     * @param target The function to call.
     * @param thisArgument The object to be used as the this object.
     * @param argumentsList An array of argument values to be passed to the function.
     */
    function apply<T, A extends readonly any[], R>(
        target: (this: T, ...args: A) => R,
        thisArgument: T,
        argumentsList: Readonly<A>,
    ): R;
    function apply(target: Function, thisArgument: any, argumentsList: ArrayLike<any>): any;

    /**
     * Constructs the target with the elements of specified array as the arguments
     * and the specified constructor as the `new.target` value.
     * @param target The constructor to invoke.
     * @param argumentsList An array of argument values to be passed to the constructor.
     * @param newTarget The constructor to be used as the `new.target` object.
     */
    function construct<A extends readonly any[], R>(
        target: new (...args: A) => R,
        argumentsList: Readonly<A>,
        newTarget?: new (...args: any) => any,
    ): R;
    function construct(target: Function, argumentsList: ArrayLike<any>, newTarget?: Function): any;

    /**
     * Adds a property to an object, or modifies attributes of an existing property.
     * @param target Object on which to add or modify the property. This can be a native JavaScript object
     *        (that is, a user-defined object or a built in object) or a DOM object.
     * @param propertyKey The property name.
     * @param attributes Descriptor for the property. It can be for a data property or an accessor property.
     */
    function defineProperty(target: object, propertyKey: PropertyKey, attributes: PropertyDescriptor & ThisType<any>): boolean;

    /**
     * Removes a property from an object, equivalent to `delete target[propertyKey]`,
     * except it won't throw if `target[propertyKey]` is non-configurable.
     * @param target Object from which to remove the own property.
     * @param propertyKey The property name.
     */
    function deleteProperty(target: object, propertyKey: PropertyKey): boolean;

    /**
     * Gets the property of target, equivalent to `target[propertyKey]` when `receiver === target`.
     * @param target Object that contains the property on itself or in its prototype chain.
     * @param propertyKey The property name.
     * @param receiver The reference to use as the `this` value in the getter function,
     *        if `target[propertyKey]` is an accessor property.
     */
    function get<T extends object, P extends PropertyKey>(
        target: T,
        propertyKey: P,
        receiver?: unknown,
    ): P extends keyof T ? T[P] : any;

    /**
     * Gets the own property descriptor of the specified object.
     * An own property descriptor is one that is defined directly on the object and is not inherited from the object's prototype.
     * @param target Object that contains the property.
     * @param propertyKey The property name.
     */
    function getOwnPropertyDescriptor<T extends object, P extends PropertyKey>(
        target: T,
        propertyKey: P,
    ): TypedPropertyDescriptor<P extends keyof T ? T[P] : any> | undefined;

    /**
     * Returns the prototype of an object.
     * @param target The object that references the prototype.
     */
    function getPrototypeOf(target: object): object | null;

    /**
     * Equivalent to `propertyKey in target`.
     * @param target Object that contains the property on itself or in its prototype chain.
     * @param propertyKey Name of the property.
     */
    function has(target: object, propertyKey: PropertyKey): boolean;

    /**
     * Returns a value that indicates whether new properties can be added to an object.
     * @param target Object to test.
     */
    function isExtensible(target: object): boolean;

    /**
     * Returns the string and symbol keys of the own properties of an object. The own properties of an object
     * are those that are defined directly on that object, and are not inherited from the object's prototype.
     * @param target Object that contains the own properties.
     */
    function ownKeys(target: object): (string | symbol)[];

    /**
     * Prevents the addition of new properties to an object.
     * @param target Object to make non-extensible.
     * @return Whether the object has been made non-extensible.
     */
    function preventExtensions(target: object): boolean;

    /**
     * Sets the property of target, equivalent to `target[propertyKey] = value` when `receiver === target`.
     * @param target Object that contains the property on itself or in its prototype chain.
     * @param propertyKey Name of the property.
     * @param receiver The reference to use as the `this` value in the setter function,
     *        if `target[propertyKey]` is an accessor property.
     */
    function set<T extends object, P extends PropertyKey>(
        target: T,
        propertyKey: P,
        value: P extends keyof T ? T[P] : any,
        receiver?: any,
    ): boolean;
    function set(target: object, propertyKey: PropertyKey, value: any, receiver?: any): boolean;

    /**
     * Sets the prototype of a specified object o to object proto or null.
     * @param target The object to change its prototype.
     * @param proto The value of the new prototype or null.
     * @return Whether setting the prototype was successful.
     */
    function setPrototypeOf(target: object, proto: object | null): boolean;
}

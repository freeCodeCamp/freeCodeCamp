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

interface ProxyHandler<T extends object> {
    /**
     * A trap method for a function call.
     * @param target The original callable object which is being proxied.
     */
    apply?(target: T, thisArg: any, argArray: any[]): any;

    /**
     * A trap for the `new` operator.
     * @param target The original object which is being proxied.
     * @param newTarget The constructor that was originally called.
     */
    construct?(target: T, argArray: any[], newTarget: Function): object;

    /**
     * A trap for `Object.defineProperty()`.
     * @param target The original object which is being proxied.
     * @returns A `Boolean` indicating whether or not the property has been defined.
     */
    defineProperty?(target: T, property: string | symbol, attributes: PropertyDescriptor): boolean;

    /**
     * A trap for the `delete` operator.
     * @param target The original object which is being proxied.
     * @param p The name or `Symbol` of the property to delete.
     * @returns A `Boolean` indicating whether or not the property was deleted.
     */
    deleteProperty?(target: T, p: string | symbol): boolean;

    /**
     * A trap for getting a property value.
     * @param target The original object which is being proxied.
     * @param p The name or `Symbol` of the property to get.
     * @param receiver The proxy or an object that inherits from the proxy.
     */
    get?(target: T, p: string | symbol, receiver: any): any;

    /**
     * A trap for `Object.getOwnPropertyDescriptor()`.
     * @param target The original object which is being proxied.
     * @param p The name of the property whose description should be retrieved.
     */
    getOwnPropertyDescriptor?(target: T, p: string | symbol): PropertyDescriptor | undefined;

    /**
     * A trap for the `[[GetPrototypeOf]]` internal method.
     * @param target The original object which is being proxied.
     */
    getPrototypeOf?(target: T): object | null;

    /**
     * A trap for the `in` operator.
     * @param target The original object which is being proxied.
     * @param p The name or `Symbol` of the property to check for existence.
     */
    has?(target: T, p: string | symbol): boolean;

    /**
     * A trap for `Object.isExtensible()`.
     * @param target The original object which is being proxied.
     */
    isExtensible?(target: T): boolean;

    /**
     * A trap for `Reflect.ownKeys()`.
     * @param target The original object which is being proxied.
     */
    ownKeys?(target: T): ArrayLike<string | symbol>;

    /**
     * A trap for `Object.preventExtensions()`.
     * @param target The original object which is being proxied.
     */
    preventExtensions?(target: T): boolean;

    /**
     * A trap for setting a property value.
     * @param target The original object which is being proxied.
     * @param p The name or `Symbol` of the property to set.
     * @param receiver The object to which the assignment was originally directed.
     * @returns A `Boolean` indicating whether or not the property was set.
     */
    set?(target: T, p: string | symbol, newValue: any, receiver: any): boolean;

    /**
     * A trap for `Object.setPrototypeOf()`.
     * @param target The original object which is being proxied.
     * @param newPrototype The object's new prototype or `null`.
     */
    setPrototypeOf?(target: T, v: object | null): boolean;
}

interface ProxyConstructor {
    /**
     * Creates a revocable Proxy object.
     * @param target A target object to wrap with Proxy.
     * @param handler An object whose properties define the behavior of Proxy when an operation is attempted on it.
     */
    revocable<T extends object>(target: T, handler: ProxyHandler<T>): { proxy: T; revoke: () => void; };

    /**
     * Creates a Proxy object. The Proxy object allows you to create an object that can be used in place of the
     * original object, but which may redefine fundamental Object operations like getting, setting, and defining
     * properties. Proxy objects are commonly used to log property accesses, validate, format, or sanitize inputs.
     * @param target A target object to wrap with Proxy.
     * @param handler An object whose properties define the behavior of Proxy when an operation is attempted on it.
     */
    new <T extends object>(target: T, handler: ProxyHandler<T>): T;
}
declare var Proxy: ProxyConstructor;

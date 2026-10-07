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

/**
 * The decorator context types provided to class element decorators.
 */
type ClassMemberDecoratorContext =
    | ClassMethodDecoratorContext
    | ClassGetterDecoratorContext
    | ClassSetterDecoratorContext
    | ClassFieldDecoratorContext
    | ClassAccessorDecoratorContext;

/**
 * The decorator context types provided to any decorator.
 */
type DecoratorContext =
    | ClassDecoratorContext
    | ClassMemberDecoratorContext;

type DecoratorMetadataObject = Record<PropertyKey, unknown> & object;

type DecoratorMetadata = typeof globalThis extends { Symbol: { readonly metadata: symbol; }; } ? DecoratorMetadataObject : DecoratorMetadataObject | undefined;

/**
 * Context provided to a class decorator.
 * @template Class The type of the decorated class associated with this context.
 */
interface ClassDecoratorContext<
    Class extends abstract new (...args: any) => any = abstract new (...args: any) => any,
> {
    /** The kind of element that was decorated. */
    readonly kind: "class";

    /** The name of the decorated class. */
    readonly name: string | undefined;

    /**
     * Adds a callback to be invoked after the class definition has been finalized.
     *
     * @example
     * ```ts
     * function customElement(name: string): ClassDecoratorFunction {
     *   return (target, context) => {
     *     context.addInitializer(function () {
     *       customElements.define(name, this);
     *     });
     *   }
     * }
     *
     * @customElement("my-element")
     * class MyElement {}
     * ```
     */
    addInitializer(initializer: (this: Class) => void): void;

    readonly metadata: DecoratorMetadata;
}

/**
 * Context provided to a class method decorator.
 * @template This The type on which the class element will be defined. For a static class element, this will be
 * the type of the constructor. For a non-static class element, this will be the type of the instance.
 * @template Value The type of the decorated class method.
 */
interface ClassMethodDecoratorContext<
    This = unknown,
    Value extends (this: This, ...args: any) => any = (this: This, ...args: any) => any,
> {
    /** The kind of class element that was decorated. */
    readonly kind: "method";

    /** The name of the decorated class element. */
    readonly name: string | symbol;

    /** A value indicating whether the class element is a static (`true`) or instance (`false`) element. */
    readonly static: boolean;

    /** A value indicating whether the class element has a private name. */
    readonly private: boolean;

    /** An object that can be used to access the current value of the class element at runtime. */
    readonly access: {
        /**
         * Determines whether an object has a property with the same name as the decorated element.
         */
        has(object: This): boolean;
        /**
         * Gets the current value of the method from the provided object.
         *
         * @example
         * let fn = context.access.get(instance);
         */
        get(object: This): Value;
    };

    /**
     * Adds a callback to be invoked either after static methods are defined but before
     * static initializers are run (when decorating a `static` element), or before instance
     * initializers are run (when decorating a non-`static` element).
     *
     * @example
     * ```ts
     * const bound: ClassMethodDecoratorFunction = (value, context) {
     *   if (context.private) throw new TypeError("Not supported on private methods.");
     *   context.addInitializer(function () {
     *     this[context.name] = this[context.name].bind(this);
     *   });
     * }
     *
     * class C {
     *   message = "Hello";
     *
     *   @bound
     *   m() {
     *     console.log(this.message);
     *   }
     * }
     * ```
     */
    addInitializer(initializer: (this: This) => void): void;

    readonly metadata: DecoratorMetadata;
}

/**
 * Context provided to a class getter decorator.
 * @template This The type on which the class element will be defined. For a static class element, this will be
 * the type of the constructor. For a non-static class element, this will be the type of the instance.
 * @template Value The property type of the decorated class getter.
 */
interface ClassGetterDecoratorContext<
    This = unknown,
    Value = unknown,
> {
    /** The kind of class element that was decorated. */
    readonly kind: "getter";

    /** The name of the decorated class element. */
    readonly name: string | symbol;

    /** A value indicating whether the class element is a static (`true`) or instance (`false`) element. */
    readonly static: boolean;

    /** A value indicating whether the class element has a private name. */
    readonly private: boolean;

    /** An object that can be used to access the current value of the class element at runtime. */
    readonly access: {
        /**
         * Determines whether an object has a property with the same name as the decorated element.
         */
        has(object: This): boolean;
        /**
         * Invokes the getter on the provided object.
         *
         * @example
         * let value = context.access.get(instance);
         */
        get(object: This): Value;
    };

    /**
     * Adds a callback to be invoked either after static methods are defined but before
     * static initializers are run (when decorating a `static` element), or before instance
     * initializers are run (when decorating a non-`static` element).
     */
    addInitializer(initializer: (this: This) => void): void;

    readonly metadata: DecoratorMetadata;
}

/**
 * Context provided to a class setter decorator.
 * @template This The type on which the class element will be defined. For a static class element, this will be
 * the type of the constructor. For a non-static class element, this will be the type of the instance.
 * @template Value The type of the decorated class setter.
 */
interface ClassSetterDecoratorContext<
    This = unknown,
    Value = unknown,
> {
    /** The kind of class element that was decorated. */
    readonly kind: "setter";

    /** The name of the decorated class element. */
    readonly name: string | symbol;

    /** A value indicating whether the class element is a static (`true`) or instance (`false`) element. */
    readonly static: boolean;

    /** A value indicating whether the class element has a private name. */
    readonly private: boolean;

    /** An object that can be used to access the current value of the class element at runtime. */
    readonly access: {
        /**
         * Determines whether an object has a property with the same name as the decorated element.
         */
        has(object: This): boolean;
        /**
         * Invokes the setter on the provided object.
         *
         * @example
         * context.access.set(instance, value);
         */
        set(object: This, value: Value): void;
    };

    /**
     * Adds a callback to be invoked either after static methods are defined but before
     * static initializers are run (when decorating a `static` element), or before instance
     * initializers are run (when decorating a non-`static` element).
     */
    addInitializer(initializer: (this: This) => void): void;

    readonly metadata: DecoratorMetadata;
}

/**
 * Context provided to a class `accessor` field decorator.
 * @template This The type on which the class element will be defined. For a static class element, this will be
 * the type of the constructor. For a non-static class element, this will be the type of the instance.
 * @template Value The type of decorated class field.
 */
interface ClassAccessorDecoratorContext<
    This = unknown,
    Value = unknown,
> {
    /** The kind of class element that was decorated. */
    readonly kind: "accessor";

    /** The name of the decorated class element. */
    readonly name: string | symbol;

    /** A value indicating whether the class element is a static (`true`) or instance (`false`) element. */
    readonly static: boolean;

    /** A value indicating whether the class element has a private name. */
    readonly private: boolean;

    /** An object that can be used to access the current value of the class element at runtime. */
    readonly access: {
        /**
         * Determines whether an object has a property with the same name as the decorated element.
         */
        has(object: This): boolean;

        /**
         * Invokes the getter on the provided object.
         *
         * @example
         * let value = context.access.get(instance);
         */
        get(object: This): Value;

        /**
         * Invokes the setter on the provided object.
         *
         * @example
         * context.access.set(instance, value);
         */
        set(object: This, value: Value): void;
    };

    /**
     * Adds a callback to be invoked immediately after the auto `accessor` being
     * decorated is initialized (regardless if the `accessor` is `static` or not).
     */
    addInitializer(initializer: (this: This) => void): void;

    readonly metadata: DecoratorMetadata;
}

/**
 * Describes the target provided to class `accessor` field decorators.
 * @template This The `this` type to which the target applies.
 * @template Value The property type for the class `accessor` field.
 */
interface ClassAccessorDecoratorTarget<This, Value> {
    /**
     * Invokes the getter that was defined prior to decorator application.
     *
     * @example
     * let value = target.get.call(instance);
     */
    get(this: This): Value;

    /**
     * Invokes the setter that was defined prior to decorator application.
     *
     * @example
     * target.set.call(instance, value);
     */
    set(this: This, value: Value): void;
}

/**
 * Describes the allowed return value from a class `accessor` field decorator.
 * @template This The `this` type to which the target applies.
 * @template Value The property type for the class `accessor` field.
 */
interface ClassAccessorDecoratorResult<This, Value> {
    /**
     * An optional replacement getter function. If not provided, the existing getter function is used instead.
     */
    get?(this: This): Value;

    /**
     * An optional replacement setter function. If not provided, the existing setter function is used instead.
     */
    set?(this: This, value: Value): void;

    /**
     * An optional initializer mutator that is invoked when the underlying field initializer is evaluated.
     * @param value The incoming initializer value.
     * @returns The replacement initializer value.
     */
    init?(this: This, value: Value): Value;
}

/**
 * Context provided to a class field decorator.
 * @template This The type on which the class element will be defined. For a static class element, this will be
 * the type of the constructor. For a non-static class element, this will be the type of the instance.
 * @template Value The type of the decorated class field.
 */
interface ClassFieldDecoratorContext<
    This = unknown,
    Value = unknown,
> {
    /** The kind of class element that was decorated. */
    readonly kind: "field";

    /** The name of the decorated class element. */
    readonly name: string | symbol;

    /** A value indicating whether the class element is a static (`true`) or instance (`false`) element. */
    readonly static: boolean;

    /** A value indicating whether the class element has a private name. */
    readonly private: boolean;

    /** An object that can be used to access the current value of the class element at runtime. */
    readonly access: {
        /**
         * Determines whether an object has a property with the same name as the decorated element.
         */
        has(object: This): boolean;

        /**
         * Gets the value of the field on the provided object.
         */
        get(object: This): Value;

        /**
         * Sets the value of the field on the provided object.
         */
        set(object: This, value: Value): void;
    };

    /**
     * Adds a callback to be invoked immediately after the field being decorated
     * is initialized (regardless if the field is `static` or not).
     */
    addInitializer(initializer: (this: This) => void): void;

    readonly metadata: DecoratorMetadata;
}

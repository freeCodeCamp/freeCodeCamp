/**
Matches a [`class`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes).

@category Class
*/
export type Class<T, Arguments extends unknown[] = any[]> = Constructor<T, Arguments> & {prototype: T};

/**
Matches a [`class` constructor](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes).

@category Class
*/
export type Constructor<T, Arguments extends unknown[] = any[]> = new(...arguments_: Arguments) => T;

/**
Matches a JSON object.

This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. Don't use this as a direct return type as the user would have to double-cast it: `jsonObject as unknown as CustomResponse`. Instead, you could extend your CustomResponse type from it to ensure your type only uses JSON-compatible types: `interface CustomResponse extends JsonObject { … }`.

@category JSON
*/
export type JsonObject = {[Key in string]?: JsonValue};

/**
Matches a JSON array.

@category JSON
*/
export type JsonArray = JsonValue[];

/**
Matches any valid JSON primitive value.

@category JSON
*/
export type JsonPrimitive = string | number | boolean | null;

/**
Matches any valid JSON value.

@see `Jsonify` if you need to transform a type to one that is assignable to `JsonValue`.

@category JSON
*/
export type JsonValue = JsonPrimitive | JsonObject | JsonArray;

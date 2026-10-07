# babel-jsx-utils

This library allows you to resolve the actual values of attributes when parsing JSX with Babel. This is useful for things like Babel plugins. It evaluates the value in the local scope, so local variables are ok, but properties passed to the component are not.

For example:

```jsx
// OK
export function Logo() {
    const src = "trex.png";

    return <img src={src} alt="T-Rex" />;
}
```

```jsx
// Not OK
export function Logo({ src }) {
    return <img src={src} alt="T-Rex" />;
}
```

It can handle expressions, but not function calls:

```jsx
// OK
export function Logo() {
    const width = 100 * 2;

    return <img src={"trex.png"} width={width} alt="T-Rex" />;
}
```

```jsx
// Not OK
export function Logo() {
    function double(value) {
        return value * 2;
    }

    const width = double(100);

    return <img src={"trex.png"} width={width} alt="T-Rex" />;
}
```

## Installation

Install:

```shell
yarn install babel-jsx-utils
```
or

```shell
npm install babel-jsx-utils
```

## Usage

```js
import { parse, traverse } from "@babel/core";

const ast = parse(`<Foo bar="hello" />`, {
    filename: "foo.js",
    presets: ["@babel/preset-react"],
});

traverse(ast, {
    JSXOpeningElement(nodePath) {
        const values = getAttributeValues(nodePath);
        // values = { bar: "Hello" }
    },
});
```

For more examples, see the tests

## API

```typescript
/**
 * Get all attribute values of a JSX element. This only includes values that can be
 * statically-analysed. Pass the `onError` callback to be notified if an attribute cannot be resolved.
 *
 * @param nodePath The NodePath of the JSX opening element
 * @param onError Called with the attribute name if it is present but cannot be resolved
 * @param include If present, only these props are evaluated. Does not apply to spread attributes.
 */
export declare function getAttributeValues(
    nodePath:
        | CoreNodePath<JSXOpeningElement>
        | TraverseNodePath<JSXOpeningElement>,
    onError?: (attributeName: string) => void,
    include?: Set<string>
): Record<string, any>;
/**
 * Attempt to get the value of a JSX attribute. Returns an object with the
 * properties `confident`, which is false if the value cannot be resolved
 * in the current scope, and `value` which is the value if it can be.
 *
 * If the attribute is empty, then the returned value is `true`, e.g.
 * `<Image eager />` would return `true` for the `eager` attribute.
 *
 * @param nodePath The NodePath of the JSXAttribute
 */
export declare function getAttributeValue<T = unknown>(
    nodePath: CoreNodePath<JSXAttribute> | TraverseNodePath<JSXAttribute>
): {
    confident: boolean;
    value: T | true;
};
```

---
description: 'Enforce using `String#startsWith` and `String#endsWith` over other equivalent methods of checking substrings.'
---

> 🛑 This file is source code, not the primary documentation location! 🛑
>
> See **https://typescript-eslint.io/rules/prefer-string-starts-ends-with** for documentation.

There are multiple ways to verify if a string starts or ends with a specific string, such as `foo.indexOf('bar') === 0`.
As of ES2015, the most common way in JavaScript is to use `String#startsWith` and `String#endsWith`.
Keeping to those methods consistently helps with code readability.

This rule reports when a string method can be replaced safely with `String#startsWith` or `String#endsWith`.

## Examples

<!--tabs-->

### ❌ Incorrect

```ts
declare const foo: string;

// starts with
foo[0] === 'b';
foo.charAt(0) === 'b';
foo.indexOf('bar') === 0;
foo.slice(0, 3) === 'bar';
foo.substring(0, 3) === 'bar';
foo.match(/^bar/) != null;
/^bar/.test(foo);

// ends with
foo[foo.length - 1] === 'b';
foo.charAt(foo.length - 1) === 'b';
foo.lastIndexOf('bar') === foo.length - 3;
foo.slice(-3) === 'bar';
foo.substring(foo.length - 3) === 'bar';
foo.match(/bar$/) != null;
/bar$/.test(foo);
```

### ✅ Correct

```ts
declare const foo: string;

// starts with
foo.startsWith('bar');

// ends with
foo.endsWith('bar');
```

## When Not To Use It

If you don't mind that style, you can turn this rule off safely.

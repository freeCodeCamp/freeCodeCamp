---
description: 'Disallow aliasing `this`.'
---

> 🛑 This file is source code, not the primary documentation location! 🛑
>
> See **https://typescript-eslint.io/rules/no-this-alias** for documentation.

Assigning a variable to `this` instead of properly using arrow lambdas may be a symptom of pre-ES6 practices
or not managing scope well.

## Examples

<!--tabs-->

### ❌ Incorrect

```js
const self = this;

setTimeout(function () {
  self.doWork();
});
```

### ✅ Correct

```js
setTimeout(() => {
  this.doWork();
});
```

## Options

## When Not To Use It

If you need to assign `this` to variables, you shouldn’t use this rule.

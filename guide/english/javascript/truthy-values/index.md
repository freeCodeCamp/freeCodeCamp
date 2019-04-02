---
title: Truthy Value
---
## Description
A **truthy** value is a value that translates to **true** when evaluated in a _Boolean_ context.

All values are **truthy** unless they are defined as **[falsy](https://github.com/freeCodeCamp/freeCodeCamp/blob/master/guide/english/javascript/falsy-values/index.md)** (i.e. except for `false`, `0`, `""`, `null`, `undefined` and `NaN`).

## Checking for Truthy Values on Variables

It is possible to check for a truthy value in a variable with a simple conditional:

```javascript
if (variable) {
  // When the variable has a truthy value the condition is true.
}
```

You can also get the boolean value of a variable by using the bang operator (`!`) twice:

```javascript
!!variable // When the variable is truthy, a double bang (!!) will evaluate to the Boolean true.
```

### Interesting JavaScript Rules concerning Truthy Values

#### These Are Interesting Truthy Values
* '0' (a string containing a single zero)
* 'false' (a string containing the text “false”)
* [] (an empty array)
* {} (an empty object)
* function(){} (an “empty” function)

#### Comparing Interesting Truthy Values
* `false`, `zero` and `''`(empty strings) are all equivalent.
* `null` and `undefined` are equivalent to themselves and each other but nothing else.
* `NaN` is not equivalent to anything – including another `NaN!
* `Infinity` is truthy – but cannot be compared to `true` or `false`!
* An empty array(`[]`) is truthy – yet comparing with `true` is `false` and comparing with `false` is `true`?!

## More Information
See also: <a>falsy</a> | <a href='https://developer.mozilla.org/en-US/docs/Glossary/Truthy' target='_blank' rel='nofollow'>MDN</a>

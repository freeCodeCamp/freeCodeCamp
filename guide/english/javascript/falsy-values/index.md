---
title: Falsy Values
---

## Description

A falsy value is something which evaluates to FALSE, for instance when checking a variable. There are only six falsy values in JavaScript: `undefined`, `null`, `NaN`, `0`, `""` or `''` (empty string), and the Boolean `false` of course. All other values are [truthy](https://github.com/freeCodeCamp/freeCodeCamp/edit/master/guide/english/javascript/truthy-values/index.md).

## Checking for falsy values on variables

It is possible to check for a falsy value in a variable with a simple conditional:

```javascript
if (!variable) {
  // When the variable has a falsy value the condition is true.
}
```

You can also get the boolean value of a variable by using the bang operator (`!`) twice:
```javascript
!!variable // When the variable is falsy, a double bang (!!) will evaluate to the Boolean false.
```

## General Examples

```javascript
const string = ""; // <-- falsy

const filledString = "some string in here"; // <-- truthy

const zero = 0; // <-- falsy

const numberGreaterThanZero; // <-- falsy

const emptyArray = []; // <-- truthy, we'll explore more about this next

const emptyObject = {}; // <-- truthy
```

## Fun With Arrays

```javascript
if ([] == false) // <-- truthy, will run code in if-block

if ([]) // <-- truthy, will also run code in if-block

if ([] == true) // <-- falsy, will NOT run code in if-block

if (![]) // <-- falsy, will also NOT run code in if-block
```

## Caveat

Be aware of the data type when evaluating a value in a Boolean context. If the data type of the value is meant to be a _number_, the truthy/falsy evaluation can result in an unexpected outcome:
```javascript
const match = { teamA: 0, teamB: 1 }
if (match.teamA)
  // The following won't run due to the falsy evaluation
  console.log('Team A: ' + match.teamA);
}
```

An alternative to the use case above is to evaluate the value using `typeof`:
```javascript
const match = { teamA: 0, teamB: 1 }
if (typeof match.teamA === 'number')
  console.log('Team A: ' + match.teamA);
}
```

## More Information

- <a>**truthy**</a> | <a href='http://james.padolsey.com/javascript/truthy-falsey/' target='_blank' rel='nofollow'>Blog Post - Truthy & Falsey</a>

- [ Falsy | Glossary | MDN](https://developer.mozilla.org/en-US/docs/Glossary/Falsy)

- [Truthy and Falsy: When All is Not Equal in JavaScript](https://www.sitepoint.com/javascript-truthy-falsy/)

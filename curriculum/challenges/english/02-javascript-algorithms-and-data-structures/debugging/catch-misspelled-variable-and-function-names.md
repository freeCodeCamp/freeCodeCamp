---
id: 587d7b84367417b2b2512b35
title: Catch Misspelled Variable and Function Names
challengeType: 1
forumTopicId: 301186
dashedName: catch-misspelled-variable-and-function-names
---

# --description--

The `console.log()` and `typeof` methods are the two primary ways to check intermediate values and types of program output. Now it's time to get into the common forms that bugs take. One syntax-level issue that fast typers can commiserate with is the humble spelling error.

Transposed, missing, or mis-capitalized characters in a variable or function name will have the browser looking for an object that doesn't exist - and complain in the form of a reference error. JavaScript variable and function names are case-sensitive.

# --instructions--

Fix the two spelling errors in the code so the `netWorkingCapital` calculation works.

# --hints--

Check the spelling of the two variables used in the netWorkingCapital calculation, the console output should show that "Net working capital is: 2".

```js
assert(netWorkingCapital === 2);
```

There should be no instances of mis-spelled variables in the code.

```js
assert(!code.match(/recievables/g));
```

The `receivables` variable should be declared and used properly in the code.

```js
assert(code.match(/receivables/g).length == 2);
```

There should be no instances of mis-spelled variables in the code.

```js
assert(!code.match(/payable;/g));
```

The `payables` variable should be declared and used properly in the code.

```js
assert(code.match(/payables/g).length == 2);
```

# --seed--

## --seed-contents--

```js
let receivables = 10;
let payables = 8;
let netWorkingCapital = recievables - payable;
console.log(`Net working capital is: ${netWorkingCapital}`);
```

# --solutions--

```js
let receivables = 10;
let payables = 8;
let netWorkingCapital = receivables - payables;
console.log(`Net working capital is: ${netWorkingCapital}`);
```

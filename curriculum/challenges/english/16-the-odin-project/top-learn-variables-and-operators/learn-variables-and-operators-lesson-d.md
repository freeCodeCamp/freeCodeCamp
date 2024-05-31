---
id: 65e1985e500d930ce8ed90a7
title: Learn Variables and Operators Question D
challengeType: 15
dashedName: learn-variables-and-operators-question-d
---
# --description--

There are two limitations on variable names in JavaScript:

1. The name must contain only letters, digits, or the symbols `$` and `_`.
1. The first character must not be a digit.

Examples of valid names:

```js
let userName;
let test123;
```

What’s interesting – the dollar sign `'$'` and the underscore `'_'` can also be used in names. They are regular symbols, just like letters, without any special meaning.

These names are valid:

```js
let $ = 1; // declared a variable with the name "$"
let _ = 2; // and now a variable with the name "_"

console.log($ + _); // 3
```

Examples of incorrect variable names:

```js
let 1a; // cannot start with a digit

let my-name; // hyphens '-' aren't allowed in the name
```

# --question--

## --text--

Which of the following is a valid JavaScript variable name?

## --answers--

`let 2things;`

---

`let my-name;`

---

`let var!;`

---

`let $myVar;`


## --video-solution--

4

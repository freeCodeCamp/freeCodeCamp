---
id: 594faaab4e2a8626833e9c3d
title: Tokenize a string with escaping
challengeType: 1
forumTopicId: 302338
dashedName: tokenize-a-string-with-escaping
---

# --description--

Write a function or program that can split a string at each non-escaped occurrence of a separator character.

It should accept three input parameters:

<ul>
  <li>The <strong>string</strong></li>
  <li>The <strong>separator character</strong></li>
  <li>The <strong>escape character</strong></li>
</ul>

It should output a list of strings.

Rules for splitting:

<ul>
  <li>The fields that were separated by the separators, become the elements of the output list.</li>
  <li>Empty fields should be preserved, even at the start and end.</li>
</ul>

Rules for escaping:

<ul>
  <li>"Escaped" means preceded by an occurrence of the escape character that is not already escaped itself.</li>
  <li>When the escape character precedes a character that has no special meaning, it still counts as an escape (but does not do anything special).</li>
  <li>Each occurrences of the escape character that was used to escape something, should not become part of the output.</li>
</ul>

Demonstrate that your function satisfies the following test-case:

Given the string

<pre>one^|uno||three^^^^|four^^^|^cuatro|</pre>

and using `|` as a separator and `^` as escape character, your function should output the following array:

<pre>  ['one|uno', '', 'three^^', 'four^|cuatro', '']
</pre>

# --hints--

`tokenize` should be a function.

```js
assert(typeof tokenize === 'function');
```

`tokenize` should return an array.

```js
assert(typeof tokenize('a', 'b', 'c') === 'object');
```

`tokenize('one^|uno||three^^^^|four^^^|^cuatro|', '|', '^')` should return `['one|uno', '', 'three^^', 'four^|cuatro', '']`

```js
assert.deepEqual(tokenize(testStr1, '|', '^'), res1);
```

`tokenize('a@&bcd&ef&&@@hi', '&', '@')` should return `['a&bcd', 'ef', '', '@hi']`

```js
assert.deepEqual(tokenize(testStr2, '&', '@'), res2);
```

`tokenize('hello^|world^|how^are^you^|', '|', '^')` should return ` ['hello|world', 'how^are^you|']`

```js
assert.deepEqual(tokenize(testStr3, '|', '^'), res3);
```

`tokenize('^|^|^^^|^|^^', '|', '^') ` should return `['', '', '^|', '', '^']`

```js
assert.deepEqual(tokenize(testStr4, '|', '^'), res4);
```

`tokenize('one|two|three|four|', '|', '^') ` should return ` ['one', 'two', 'three', 'four', '']`

```js
assert.deepEqual(tokenize(testStr5, '|', '^'), res5);
```

` tokenize('one|two|three|four|', '|', '^') ` should return `['one', 'two', 'three', 'four', '']`

# --seed--

## --after-user-code--

```js
const testStr1 = 'one^|uno||three^^^^|four^^^|^cuatro|';
const res1 = ['one|uno', '', 'three^^', 'four^|cuatro', ''];

const testStr2 = 'a@&bcd&ef&&@@hi';
const res2 = ['a&bcd', 'ef', '', '@hi'];

const testStr3 = 'hello^|world^|how^are^you^|';
const res3 = ['hello|world', 'how^are^you|'];

const testStr4 = '^|^|^^^|^|^^';
const res4 = ['', '', '^|', '', '^'];

const testStr5 = 'one|two|three|four|';
const res5 = ['one', 'two', 'three', 'four', ''];
```

## --seed-contents--

```js
function tokenize(str, sep, esc) {
  return true;
}
```

# --solutions--

```js
// tokenize :: String -> Character -> Character -> [String]
function tokenize(str, charDelim, charEsc) {
  let result = [];
  let currentToken = '';
  let escaped = false;

  for (let i = 0; i < str.length; i++) {
    const char = str[i];

    if (escaped) {
      currentToken += char;
      escaped = false;
    } else if (char === charEsc) {
      escaped = true;
    } else if (char === charDelim) {
      result.push(currentToken);
      currentToken = '';
    } else {
      currentToken += char;
    }
  }

  result.push(currentToken);

  return result;
}
```

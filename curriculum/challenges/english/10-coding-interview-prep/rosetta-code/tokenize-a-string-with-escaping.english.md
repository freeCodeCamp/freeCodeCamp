---
title: Tokenize a string with escaping
id: 594faaab4e2a8626833e9c3d
challengeType: 5
forumTopicId: 302338
---

## Description
<section id='description'>
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
and using <code>|</code> as a separator and <code>^</code> as escape character, your function should output the following array:
<pre>
  ['one|uno', '', 'three^^', 'four^|cuatro', '']
</pre>
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>tokenize</code> should be a function.
    testString: assert(typeof tokenize === 'function');
  - text: <code>tokenize</code> should return an array.
    testString: assert(typeof tokenize('a', 'b', 'c') === 'object');
  - text: <code>tokenize('one^|uno||three^^^^|four^^^|^cuatro|', '|', '^') </code> should return <code>['one|uno', '', 'three^^', 'four^|cuatro', '']</code>
    testString: assert.deepEqual(tokenize(testStr1, '|', '^'), res1);
  - text: <code>tokenize('a@&bcd&ef&&@@hi', '&', '@')</code> should return <code>['a&bcd', 'ef', '', '@hi']</code>
    testString: assert.deepEqual(tokenize(testStr2, '&', '@'), res2);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function tokenize(str, sep, esc) {
  return true;
}
```

</div>


### After Test
<div id='js-teardown'>

```js
const testStr1 = 'one^|uno||three^^^^|four^^^|^cuatro|';
const res1 = ['one|uno', '', 'three^^', 'four^|cuatro', ''];

// TODO add more tests
const testStr2 = 'a@&bcd&ef&&@@hi';
const res2 = ['a&bcd', 'ef', '', '@hi'];
```

</div>

</section>

## Solution
<section id='solution'>


```js
// tokenize :: String -> Character -> Character -> [String]
function tokenize(str, charDelim, charEsc) {
  const dctParse = str.split('')
    .reduce((a, x) => {
      const blnEsc = a.esc;
      const blnBreak = !blnEsc && x === charDelim;
      const blnEscChar = !blnEsc && x === charEsc;

      return {
        esc: blnEscChar,
        token: blnBreak ? '' : (
          a.token + (blnEscChar ? '' : x)
        ),
        list: a.list.concat(blnBreak ? a.token : [])
      };
    }, {
      esc: false,
      token: '',
      list: []
    });

  return dctParse.list.concat(
    dctParse.token
  );
}

```

</section>

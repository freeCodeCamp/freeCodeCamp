---
title: Tokenize a string with escaping
id: 594faaab4e2a8626833e9c3d
challengeType: 5
---

## Description
<section id='description'>
<p>
Write a function or program that can split a string at each non-escaped occurrence of a separator character.
</p>
<p>
It should accept three input parameters:
</p>
  The <b>string</b>
  The <b>separator character</b>
  The <b>escape character</b>
<p>It should output a list of strings.</p>
<p>Rules for splitting:</p>
  The fields that were separated by the separators, become the elements of the output list.
  Empty fields should be preserved, even at the start and end.
<p>Rules for escaping:</p>
  "Escaped" means preceded by an occurrence of the escape character that is not already escaped itself.
  When the escape character precedes a character that has no special meaning, it still counts as an escape (but does not do anything special).
  Each occurrences of the escape character that was used to escape something, should not become part of the output.
<p>Demonstrate that your function satisfies the following test-case:
  Given string <pre>one^|uno||three^^^^|four^^^|^cuatro|</pre> and using
  <pre>|</pre> as a separator and <pre>^</pre> as escape character, your
  function should output the following array:
</p>
  <pre>
  ['one|uno', '', 'three^^', 'four^|quatro', '']
  </pre>
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>tokenize</code> is a function.
    testString: 'assert(typeof tokenize === ''function'', ''<code>tokenize</code> is a function.'');'
  - text: <code>tokenize</code> should return an array.
    testString: 'assert(typeof tokenize(''a'', ''b'', ''c'') === ''object'', ''<code>tokenize</code> should return an array.'');'
  - text: '<code>tokenize(''one^|uno||three^^^^|four^^^|^cuatro|'', ''|'', ''^'') </code> should return [''one|uno'', '''', ''three^^'', ''four^|cuatro'', '''']")'
    testString: 'assert.deepEqual(tokenize(testStr1, ''|'', ''^''), res1, "<code>tokenize(''one^|uno||three^^^^|four^^^|^cuatro|'', ''|'', ''^'') </code> should return [''one|uno'', '''', ''three^^'', ''four^|cuatro'', '''']");'
  - text: '<code>tokenize(''a@&bcd&ef&&@@hi'', ''&'', ''@'')</code> should return <code>[''a&bcd'', ''ef'', '''', ''@hi'']</code>'
    testString: 'assert.deepEqual(tokenize(testStr2, ''&'', ''@''), res2, ''<code>tokenize("a@&bcd&ef&&@@hi", "&", "@")</code> should return <code>["a&bcd", "ef", "", "@hi"]</code>'');'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function tokenize(str, esc, sep) {
  return true;
}
```

</div>


### After Test
<div id='js-teardown'>

```js
console.info('after the test');
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

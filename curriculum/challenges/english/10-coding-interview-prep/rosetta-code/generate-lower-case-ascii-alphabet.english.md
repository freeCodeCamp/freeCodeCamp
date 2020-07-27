---
title: Generate lower case ASCII alphabet
id: 5a23c84252665b21eecc7e7a
challengeType: 5
isHidden: false
forumTopicId: 302274
---

## Description
<section id='description'>
Write a function to generate an array of lower case ASCII characters for a given range. For example, given the range <code>['a', 'd']</code>, the function should return <code>['a', 'b', 'c', 'd']</code>.
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>lascii</code> should be a function.
    testString: assert(typeof lascii=='function');
  - text: <code>lascii("a","d")</code> should return an array.
    testString: assert(Array.isArray(lascii('a','d')));
  - text: "<code>lascii('a','d')</code> should return <code>[ 'a', 'b', 'c', 'd' ]</code>."
    testString: assert.deepEqual(lascii("a","d"),results[0]);
  - text: <code>lascii('c','i')</code> should return <code>[ 'c', 'd', 'e', 'f', 'g', 'h', 'i' ]</code>.
    testString: assert.deepEqual(lascii("c","i"),results[1]);
  - text: <code>lascii('m','q')</code> should return <code>[ 'm', 'n', 'o', 'p', 'q' ]</code>.
    testString: assert.deepEqual(lascii("m","q"),results[2]);
  - text: <code>lascii('k','n')</code> should return <code>[ 'k', 'l', 'm', 'n' ]</code>.
    testString: assert.deepEqual(lascii("k","n"),results[3]);
  - text: <code>lascii('t','z')</code> should return <code>[ 't', 'u', 'v', 'w', 'x', 'y', 'z' ]</code>.
    testString: assert.deepEqual(lascii("t","z"),results[4]);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function lascii(cFrom, cTo) {
  // Good luck!
}
```

</div>


### After Test
<div id='js-teardown'>

```js
let results=[
  [ 'a', 'b', 'c', 'd' ],
  [ 'c', 'd', 'e', 'f', 'g', 'h', 'i' ],
  [ 'm', 'n', 'o', 'p', 'q' ],
  [ 'k', 'l', 'm', 'n' ],
  [ 't', 'u', 'v', 'w', 'x', 'y', 'z' ]
]
```

</div>

</section>

## Solution
<section id='solution'>


```js
function lascii(cFrom, cTo) {

  function cRange(cFrom, cTo) {
    var iStart = cFrom.charCodeAt(0);

    return Array.apply(
      null, Array(cTo.charCodeAt(0) - iStart + 1)
    ).map(function (_, i) {

      return String.fromCharCode(iStart + i);

    });
  }

  return cRange(cFrom, cTo);

}

```

</section>

---
id: 5e6dd14192286d95fc43046e
title: Longest string challenge
challengeType: 5
forumTopicId: 385275
---

## Description
<section id='description'>
In this challenge, you have to find the strings that are the longest among the given strings.
</section>

## Instructions
<section id='instructions'>
Write a function that takes an array of strings and returns the strings that have a length equal to the longest length.
</section>

## Tests
<section id='tests'>

``` yml
tests:
  - text: <code>longestString</code> should be a function.
    testString: assert(typeof longestString == 'function');
  - text: <code>longestString(["a", "bb", "ccc", "ee", "f", "ggg"])</code> should return a array.
    testString: assert(Array.isArray(longestString(["a", "bb", "ccc", "ee", "f", "ggg"])));
  - text: <code>longestString(["a", "bb", "ccc", "ee", "f", "ggg"])</code> should return <code>["ccc", "ggg"]'</code>.
    testString: assert.deepEqual(longestString(["a", "bb", "ccc", "ee", "f", "ggg"]), ["ccc", "ggg"]);
  - text: <code>longestString(["afedg", "bb", "sdccc", "efdee", "f", "geegg"])</code> should return <code>["afedg", "sdccc", "efdee", "geegg"]</code>.
    testString: assert.deepEqual(longestString(["afedg", "bb", "sdccc", "efdee", "f", "geegg"]), ["afedg", "sdccc", "efdee", "geegg"]);
  - text: <code>longestString(["a", "bhghgb", "ccc", "efde", "fssdrr", "ggg"])</code> should return <code>["bhghgb", "fssdrr"]</code>.
    testString: assert.deepEqual(longestString(["a", "bhghgb", "ccc", "efde", "fssdrr", "ggg"]), ["bhghgb", "fssdrr"]);
  - text: <code>longestString(["ahgfhg", "bdsfsb", "ccc", "ee", "f", "ggdsfg"])</code> should return <code>["ahgfhg", "bdsfsb", "ggdsfg"]</code>.
    testString: assert.deepEqual(longestString(["ahgfhg", "bdsfsb", "ccc", "ee", "f", "ggdsfg"]), ["ahgfhg", "bdsfsb", "ggdsfg"]);
  - text: <code>longestString(["a", "bbdsf", "ccc", "edfe", "gzzzgg"])</code> should return <code>["gzzzgg"]</code>.
    testString: assert.deepEqual(longestString(["a", "bbdsf", "ccc", "edfe", "gzzzgg"]), ["gzzzgg"]);
```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function longestString(strings) {

}
```

</div>

</section>

## Solution
<section id='solution'>

```js
function longestString(strings) {
    var mx = 0;
    var result = []
    strings.forEach(function (e) {
        if (e.length > mx) {
            mx = e.length
            result = [e]
        } else if (e.length == mx)
            result.push(e)
    })

    return result
}
```

</section>

---
id: a7bf700cd123b9a54eef01d5
title: No Repeats Please
challengeType: 5
videoUrl: ''
localeTitle: ''
---

## Description
undefined

## Instructions
undefined

## Tests
<section id='tests'>

```yml
tests:
  - text: ''
    testString: 'assert.isNumber(permAlone("aab"), "<code>permAlone("aab")</code> should return a number.");'
  - text: ''
    testString: 'assert.strictEqual(permAlone("aab"), 2, "<code>permAlone("aab")</code> should return 2.");'
  - text: ''
    testString: 'assert.strictEqual(permAlone("aaa"), 0, "<code>permAlone("aaa")</code> should return 0.");'
  - text: ''
    testString: 'assert.strictEqual(permAlone("aabb"), 8, "<code>permAlone("aabb")</code> should return 8.");'
  - text: ''
    testString: 'assert.strictEqual(permAlone("abcdefa"), 3600, "<code>permAlone("abcdefa")</code> should return 3600.");'
  - text: <code>permAlone(&quot;abfdefa&quot;)</code> يجب إرجاع 2640.
    testString: 'assert.strictEqual(permAlone("abfdefa"), 2640, "<code>permAlone("abfdefa")</code> should return 2640.");'
  - text: ''
    testString: 'assert.strictEqual(permAlone("zzzzzzzz"), 0, "<code>permAlone("zzzzzzzz")</code> should return 0.");'
  - text: ''
    testString: 'assert.strictEqual(permAlone("a"), 1, "<code>permAlone("a")</code> should return 1.");'
  - text: ''
    testString: 'assert.strictEqual(permAlone("aaab"), 0, "<code>permAlone("aaab")</code> should return 0.");'
  - text: ''
    testString: 'assert.strictEqual(permAlone("aaabb"), 12, "<code>permAlone("aaabb")</code> should return 12.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function permAlone(str) {
  return str;
}

permAlone('aab');

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>

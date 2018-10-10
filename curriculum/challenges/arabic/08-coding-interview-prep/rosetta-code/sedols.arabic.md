---
title: SEDOLs
id: 59d9c6bc214c613ba73ff012
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
    testString: 'assert(typeof sedol === "function", "<code>sedol</code> is a function.");'
  - text: ''
    testString: 'assert(sedol("a") === null, "<code>sedol("a")</code> should return null.");'
  - text: ''
    testString: 'assert(sedol("710889") === "7108899", "<code>sedol("710889")</code> should return "7108899".");'
  - text: ''
    testString: 'assert(sedol("BOATER") === null, "<code>sedol("BOATER")</code> should return null.");'
  - text: ''
    testString: 'assert(sedol("228276") === "2282765", "<code>sedol("228276")</code> should return "2282765".");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function sedol (input) {
  // Good luck!
  return true;
}

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>

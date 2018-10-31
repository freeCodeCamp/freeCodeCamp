---
title: Tokenize a string with escaping
id: 594faaab4e2a8626833e9c3d
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
    testString: 'assert(typeof tokenize === "function", "<code>tokenize</code> is a function.");'
  - text: ''
    testString: 'assert(typeof tokenize("a", "b", "c") === "object", "<code>tokenize</code> should return an array.");'
  - text: ''
    testString: 'assert.deepEqual(tokenize(testStr1, "|", "^"), res1, "<code>tokenize("one^|uno||three^^^^|four^^^|^cuatro|", "|", "^") </code> should return ["one|uno", "", "three^^", "four^|cuatro", ""]");'
  - text: ''
    testString: 'assert.deepEqual(tokenize(testStr2, "&", "@"), res2, "<code>tokenize("a@&bcd&ef&&@@hi", "&", "@")</code> should return <code>["a&bcd", "ef", "", "@hi"]</code>");'

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
// solution required
```
</section>

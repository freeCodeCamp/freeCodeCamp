---
title: Top rank per group
id: 595011cba5a81735713873bd
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
    testString: 'assert(typeof topRankPerGroup === "function", "<code>topRankPerGroup</code> is a function.");'
  - text: ''
    testString: 'assert(typeof topRankPerGroup(-1, []) === "undefined", "<code>topRankPerGroup</code> returns undefined on negative n values.");'
  - text: ''
    testString: 'assert.equal(res1[0][0].dept, "D050", "First department must be D050");'
  - text: ''
    testString: 'assert.equal(res1[0][1].salary, 21900, "First department must be D050");'
  - text: ''
    testString: 'assert.equal(res1[3][3].dept, "D202", "The last department must be D202");'
  - text: ''
    testString: 'assert.equal(res2[2].length, 1, "<code>topRankPerGroup(1, ...)</code> must return only top ranking result per group.");'
  - text: ''
    testString: 'assert.equal(res3[2][1].name, "Maze Runner", "<code>topRankPerGroup(1, ...)</code> must return only top ranking result per group.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function topRankPerGroup(n, data, groupName, rankName) {
  // Good luck!
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

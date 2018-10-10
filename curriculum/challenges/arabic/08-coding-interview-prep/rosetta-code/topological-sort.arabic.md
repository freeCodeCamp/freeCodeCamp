---
title: Topological sort
id: 594fa2746886f41f7d8bf225
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
    testString: 'assert(typeof topologicalSort === "function", "<code>topologicalSort</code> is a function.");'
  - text: ''
    testString: 'assert.deepEqual(topologicalSort(libsSimple), ["bbb", "aaa"], "<code>topologicalSort</code> must return correct library order..");'
  - text: ''
    testString: 'assert.deepEqual(topologicalSort(libsVHDL), solutionVHDL, "<code>topologicalSort</code> must return correct library order..");'
  - text: ''
    testString: 'assert.deepEqual(topologicalSort(libsCustom), solutionCustom, "<code>topologicalSort</code> must return correct library order..");'
  - text: ''
    testString: 'assert.deepEqual(topologicalSort(libsUnorderable), solutionUnorderable, "<code>topologicalSort</code> must ignore unorderable dependencies..");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function topologicalSort(libs) {
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

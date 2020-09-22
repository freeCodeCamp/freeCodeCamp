---
id: a39963a4c10bc8b4d4f06d7e
title: Seek and Destroy
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
    testString: 'assert.deepEqual(destroyer([1, 2, 3, 1, 2, 3], 2, 3), [1, 1], "<code>destroyer([1, 2, 3, 1, 2, 3], 2, 3)</code> should return <code>[1, 1]</code>.");'
  - text: ''
    testString: 'assert.deepEqual(destroyer([1, 2, 3, 5, 1, 2, 3], 2, 3), [1, 5, 1], "<code>destroyer([1, 2, 3, 5, 1, 2, 3], 2, 3)</code> should return <code>[1, 5, 1]</code>.");'
  - text: ''
    testString: 'assert.deepEqual(destroyer([3, 5, 1, 2, 2], 2, 3, 5), [1], "<code>destroyer([3, 5, 1, 2, 2], 2, 3, 5)</code> should return <code>[1]</code>.");'
  - text: ''
    testString: 'assert.deepEqual(destroyer([2, 3, 2, 3], 2, 3), [], "<code>destroyer([2, 3, 2, 3], 2, 3)</code> should return <code>[]</code>.");'
  - text: ''
    testString: 'assert.deepEqual(destroyer(["tree", "hamburger", 53], "tree", 53), ["hamburger"], "<code>destroyer(["tree", "hamburger", 53], "tree", 53)</code> should return <code>["hamburger"]</code>.");'
  - text: ''
    testString: 'assert.deepEqual(destroyer(["possum", "trollo", 12, "safari", "hotdog", 92, 65, "grandma", "bugati", "trojan", "yacht"], "yacht", "possum", "trollo", "safari", "hotdog", "grandma", "bugati", "trojan"), [12,92,65], "<code>destroyer(["possum", "trollo", 12, "safari", "hotdog", 92, 65, "grandma", "bugati", "trojan", "yacht"], "yacht", "possum", "trollo", "safari", "hotdog", "grandma", "bugati", "trojan")</code> should return <code>[12,92,65]</code>.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function destroyer(arr) {
  // Remove all the values
  return arr;
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>

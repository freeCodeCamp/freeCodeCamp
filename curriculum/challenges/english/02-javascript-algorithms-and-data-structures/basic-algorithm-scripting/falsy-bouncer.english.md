---
id: adf08ec01beb4f99fc7a68f2
title: Falsy Bouncer
challengeType: 5
forumTopicId: 16014
---

## Description
<section id='description'>
Remove all falsy values from an array.
Falsy values in JavaScript are <code>false</code>, <code>null</code>, <code>0</code>, <code>""</code>, <code>undefined</code>, and <code>NaN</code>.
Hint: Try converting each value to a Boolean.
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>bouncer([7, "ate", "", false, 9])</code> should return <code>[7, "ate", 9]</code>.
    testString: assert.deepEqual(bouncer([7, "ate", "", false, 9]), [7, "ate", 9]);
  - text: <code>bouncer(["a", "b", "c"])</code> should return <code>["a", "b", "c"]</code>.
    testString: assert.deepEqual(bouncer(["a", "b", "c"]), ["a", "b", "c"]);
  - text: <code>bouncer([false, null, 0, NaN, undefined, ""])</code> should return <code>[]</code>.
    testString: assert.deepEqual(bouncer([false, null, 0, NaN, undefined, ""]), []);
  - text: <code>bouncer([null, NaN, 1, 2, undefined])</code> should return <code>[1, 2]</code>.
    testString: assert.deepEqual(bouncer([null, NaN, 1, 2, undefined]), [1, 2]);
```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function bouncer(arr) {
  return arr;
}

bouncer([7, "ate", "", false, 9]);
```

</div>



</section>

## Solution
<section id='solution'>


```js
function bouncer(arr) {
  return arr.filter(e => e);
}

bouncer([7, "ate", "", false, 9]);

```

</section>

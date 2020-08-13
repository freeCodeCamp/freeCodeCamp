---
title: 100 doors
id: 594810f028c0303b75339acb
challengeType: 5
videoUrl: ''
localeTitle: 100门
---

## Description
<section id="description"><p>连续100个门都是最初关闭的。你可以在门口进行100次通行证。第一次通过，访问每扇门并“切换”门（如果门关闭，打开它;如果它打开，关闭它）。第二次，只访问每个第二个门（即门＃2，＃4，＃6，......）并切换它。第三次，访问每个第3门（即3号门，＃6号，＃9号，......）等，直到您只访问第100个门。 </p><p>实现一个功能，以确定最后一次通过后门的状态。将最终结果返回到数组中，如果数组打开，则只包含数字中包含的门号。 </p></section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>getFinalOpenedDoors</code>是一个函数。
    testString: assert(typeof getFinalOpenedDoors === 'function');
  - text: <code>getFinalOpenedDoors</code>应该返回一个数组。
    testString: assert(Array.isArray(getFinalOpenedDoors(100)));
  - text: <code>getFinalOpenedDoors</code>没有产生正确的结果。
    testString: assert.deepEqual(getFinalOpenedDoors(100), solution);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function getFinalOpenedDoors (numDoors) {
  // Good luck!
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

/section>

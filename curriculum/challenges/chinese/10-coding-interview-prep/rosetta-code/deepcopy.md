---
id: 596a8888ab7c01048de257d5
challengeType: 5
videoUrl: ''
title: deepcopy的
---

## Description
<section id="description">任务： <p>编写一个返回给定对象的深层副本的函数。 </p><p>副本不得与给定的对象相同。 </p><p>此任务不会测试： </p>具有属性属性的对象Date对象或具有Date对象属性的对象RegEx或具有RegEx对象属性的对象原型复制</section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>deepcopy</code>应该是一个功能。
    testString: assert(typeof deepcopy === 'function');
  - text: '<code>deepcopy({test: "test"})</code>应返回一个对象。'
    testString: 'assert(typeof deepcopy(obj1) === ''object'');'
  - text: 不应该返回提供的相同对象。
    testString: assert(deepcopy(obj2) != obj2);
  - text: 传递包含数组的对象时，应返回该对象的深层副本。
    testString: assert.deepEqual(deepcopy(obj2), obj2);
  - text: 传递包含另一个对象的对象时，应返回该对象的深层副本。
    testString: assert.deepEqual(deepcopy(obj3), obj3);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function deepcopy (obj) {
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

/section>

---
id: 59669d08d75b60482359409f
challengeType: 5
videoUrl: ''
title: 日期格式
---

## Description
<section id="description">任务： <p>返回包含以下格式的当前日期的数组： </p><p> -  2007-11-23和</p><p> -  2007年11月23日星期日</p><p>示例输出： <code>[&#39;2007-11-23&#39;, &#39;Sunday, November 23, 2007&#39;]</code> </p></section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>getDateFormats</code>是一个函数。
    testString: assert(typeof getDateFormats === 'function');
  - text: 应该返回一个对象。
    testString: assert(typeof getDateFormats() === 'object');
  - text: 应该返回一个包含2个元素的数组。
    testString: assert(getDateFormats().length === 2);
  - text: 应以正​​确的格式返回正确的日期
    testString: assert.deepEqual(getDateFormats(), dates, equalsMessage);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function getDateFormats () {
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

---
title: Day of the week
id: 5966f99c45e8976909a85575
challengeType: 5
videoUrl: ''
localeTitle: 一周中的天
---

## Description
<section id="description"><p>一家公司决定，每当圣诞节落在星期天，他们将给予他们的工人所有额外带薪假期，这样，在任何公共假期，工人将不必在下一周（12月25日到1月1日之间）工作。 </p><p>任务： </p><p>编写一个开始年份和结束年份的函数，并返回12月25日为星期日的所有年份的数组。 </p></section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>findXmasSunday</code>是一个函数。
    testString: assert(typeof findXmasSunday === 'function');
  - text: '<code>findChristmasSunday(2000, 2100)</code>应该返回一个数组。'
    testString: assert(typeof findXmasSunday(2000, 2100) === 'object');
  - text: '<code>findChristmasSunday(2008, 2121</code>应该回归[1977,1983,1988,1994,2005,2011,2016]'
    testString: assert.deepEqual(findXmasSunday(1970, 2017), firstSolution);
  - text: '<code>findChristmasSunday(2008, 2121</code>应该返回[2011,2016,2022,2033,2039,2044,2050,2061,2067,2072,2078,2089,2095,2101,2107,2112,2118]'
    testString: assert.deepEqual(findXmasSunday(2008, 2121), secondSolution);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function findXmasSunday (start, end) {
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

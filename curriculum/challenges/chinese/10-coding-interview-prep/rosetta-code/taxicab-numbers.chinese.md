---
title: Taxicab numbers
id: 594ecc0d9a8cf816e3340187
challengeType: 5
videoUrl: ''
localeTitle: 出租车号码
---

## Description
<section id="description"> <a href="https://en.wikipedia.org/wiki/Hardy–Ramanujan number" title="wp：Hardy-Ramanujan号码">出租车编号</a> （此处使用的定义）是一个正整数，可以用多种方式表示为两个正立方体的总和。第一个出租车编号是1729，即：1 <sup>3</sup> + 12 <sup>3</sup>和9 <sup>3</sup> + 10 <sup>3</sup> 。出租车号码也被称为：*出租车号码*出租车号码*出租车号码* Hardy-Ramanujan号码任务：编写一个返回最低N个出租车号码的函数。对于每个出租车编号，显示数字以及它的构成立方体。另请参阅：在线整数序列百科全书上的[http://oeis.org/A001235 A001235出租车编号]。 MathWorld上的<a href="http://mathworld.wolfram.com/Hardy-RamanujanNumber.html">Hardy-Ramanujan数字</a> 。 MathWorld上的<a href="http://mathworld.wolfram.com/TaxicabNumber.html">出租车编号</a> 。维基百科上的<a href="https://en.wikipedia.org/wiki/Taxicab_number">出租车号码</a> 。 </section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>taxicabNumbers</code>是一个功能。
    testString: assert(typeof taxicabNumbers === 'function');
  - text: <code>taxicabNumbers</code>应该返回一个数组。
    testString: assert(typeof taxicabNumbers(2) === 'object');
  - text: <code>taxicabNumbers</code>应返回一组数字。
    testString: assert(typeof taxicabNumbers(100)[0] === 'number');
  - text: '<code>taxicabNumbers(4)</code>必须返回[1729,4104,13832,20683]。'
    testString: assert.deepEqual(taxicabNumbers(4), res4);
  - text: 'taxicabNumbers（25）应该返回[1729,4104,13832,20683,32832,39312,40033,46683,64232,65728,110656,110808,134379,149389,165464,171288,195841,216027,216125,262656,314696,320264 ，327763,373464,402597]'
    testString: assert.deepEqual(taxicabNumbers(25), res25);
  - text: 'taxicabNumbers（39）由20  -  29得到的数字应为[314496,320264,327763,373464,402597,439101,443889,513000,513856]。'
    testString: assert.deepEqual(taxicabNumbers(39).slice(20, 29), res39From20To29);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function taxicabNumbers (n) {
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

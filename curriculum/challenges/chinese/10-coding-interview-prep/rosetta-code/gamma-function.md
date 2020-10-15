---
id: 5a23c84252665b21eecc7e76
challengeType: 5
videoUrl: ''
title: 伽玛功能
---

## Description
<section id="description">实现一个算法（或更多）来计算<a href="https://en.wikipedia.org/wiki/Gamma function">Gamma</a> （$ \ Gamma $）函数（仅在实际字段中）。 Gamma功能可以定义为： <div style="padding-left: 4em;"> <big><big>$ \ Gamma（x）= \ displaystyle \ int_0 ^ \ infty t ^ {x-1} e ^ { -  t} dt $</big></big> </div></section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>gamma</code>应该是一个功能。
    testString: assert(typeof gamma=='function')
  - text: '<code>gamma(&quot;+tests[0]+&quot;)</code>应该返回一个数字。'
    testString: assert(typeof gamma(.1)=='number')
  - text: '<code>gamma(&quot;+tests[0]+&quot;)</code>应该返回<code>&quot;+results[0]+&quot;</code> 。'
    testString: assert.equal(round(gamma(.1)), round(9.513507698668736))
  - text: '<code>gamma(&quot;+tests[1]+&quot;)</code>应该返回<code>&quot;+results[1]+&quot;</code> 。'
    testString: assert.equal(round(gamma(.2)), round(4.590843711998803))
  - text: '<code>gamma(&quot;+tests[2]+&quot;)</code>应该返回<code>&quot;+results[2]+&quot;</code> 。'
    testString: assert.equal(round(gamma(.3)), round(2.9915689876875904))
  - text: '<code>gamma(&quot;+tests[3]+&quot;)</code>应该返回<code>&quot;+results[3]+&quot;</code> 。'
    testString: assert.equal(round(gamma(.4)), round(2.218159543757687))
  - text: '<code>gamma(&quot;+tests[4]+&quot;)</code>应返回<code>&quot;+results[4]+&quot;</code> 。'
    testString: assert.equal(round(gamma(.5)), round(1.7724538509055159))

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function gamma (x) {
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

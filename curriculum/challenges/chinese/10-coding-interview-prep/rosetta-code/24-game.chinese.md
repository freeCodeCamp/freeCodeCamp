---
title: 24 game
id: 5951e88f64ebf159166a1176
challengeType: 5
videoUrl: ''
localeTitle: 24场比赛
---

## Description
<section id="description"><p>实现一个以四位数字串为参数的函数，每个数字从1──►9（含），允许重复，并返回一个算术表达式，其值为24。如果不存在这样的解，则返回“没有解决方案。“ </p><p>规则： </p>只允许以下运算符/函数：乘法，除法，加法，减法除法应使用浮点或有理算术等来保留余数。不允许从提供的数字中形成多位数字。 （所以当给出1,2,2和1时，12 + 12的答案是错误的）。给定的数字顺序不必保留。 <p>示例输入： </p> <code>solve24(&quot;4878&quot;);</code> <code>solve24(&quot;1234&quot;);</code> <code>solve24(&quot;6789&quot;);</code> <code>solve24(&quot;1127&quot;);</code> <p>示例输出（字符串）： </p> <code>(7-8/8)*4</code> <code>3*1*4*2</code> <code>(6*8)/(9-7)</code> <code>(1+7)*(2+1)</code> </section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>solve24</code>是一个函数。
    testString: assert(typeof solve24 === 'function');
  - text: <code>solve24(&quot;4878&quot;)</code>应返回<code>(7-8/8)*4</code>或<code>4*(7-8/8)</code>
    testString: assert(include(answers[0], solve24(testCases[0])));
  - text: <code>solve24(&quot;1234&quot;)</code>应返回<code>1*2*3*4</code>任何排列
    testString: assert(include(answers[1], solve24(testCases[1])));
  - text: <code>solve24(&quot;6789&quot;)</code>应返回<code>(6*8)/(9-7)</code>或<code>(8*6)/(9-7)</code>
    testString: assert(include(answers[2], solve24(testCases[2])));
  - text: <code>solve24(&quot;1127&quot;)</code>应该返回<code>(1+7)*(1*2)</code>的排列
    testString: assert(include(answers[3], solve24(testCases[3])));

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function solve24 (numStr) {
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

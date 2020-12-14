---
id: 597089c87eec450c68aa1643
challengeType: 5
videoUrl: ''
title: 定义原始数据类型
---

## Description
<section id="description">任务： <p>定义一个行为类似于整数但最低有效值为1且最高有效值为10的类型。 </p>错误：如果您尝试实例化一个值超出1  -  10的<code>Num</code> ，它应该抛出一个错误消息为<code>&#39;Out of range&#39;</code>的<code>TypeError</code> 。如果您尝试使用不是<code>Num</code>的值实例化<code>Num</code> ，则应抛出<code>TypeError</code>并显示错误消息<code>&#39;Not a Number&#39;</code> 。 </section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>Num</code>应该是一个功能。
    testString: assert(typeof Num === 'function');
  - text: <code>new Num(4)</code>应返回一个对象。
    testString: assert(typeof (new Num(4)) === 'object');
  - text: '<code>new Num(\&#39;test\&#39;)</code>应抛出一个带有消息“非数字”的TypeError。'
    testString: assert.throws(() => new Num('test'), TypeError);
  - text: <code>new Num(0)</code>应该抛出一个带有消息“超出范围”的TypeError。
    testString: assert.throws(() => new Num(0), TypeError);
  - text: <code>new Num(-5)</code>应该抛出一个带有消息“超出范围”的TypeError。
    testString: assert.throws(() => new Num(-5), TypeError);
  - text: <code>new Num(10)</code>应抛出一个带有消息“超出范围”的TypeError。
    testString: assert.throws(() => new Num(11), TypeError);
  - text: <code>new Num(20)</code>应抛出一个带有消息“超出范围”的TypeError。
    testString: assert.throws(() => new Num(20), TypeError);
  - text: <code>new Num(3) + new Num(4)</code>应该等于7。
    testString: assert.equal(new Num(3) + new Num(4), 7);
  - text: <code>new Num(3) - new Num(4)</code>应该等于-1。
    testString: assert.equal(new Num(3) - new Num(4), -1);
  - text: <code>new Num(3) * new Num(4)</code>应该等于12。
    testString: assert.equal(new Num(3) * new Num(4), 12);
  - text: <code>new Num(3) / new Num(4)</code>应该等于0.75。
    testString: assert.equal(new Num(3) / new Num(4), 0.75);
  - text: <code>new Num(3) &lt; new Num(4)</code>应该是真的。
    testString: assert(new Num(3) < new Num(4));
  - text: <code>new Num(3) &gt; new Num(4)</code>应该是假的。
    testString: assert(!(new Num(3) > new Num(4)));
  - text: '<code>(new Num(5)).toString()</code>应返回\&#39;5 \&#39;'
    testString: assert.equal((new Num(5)).toString(), '5');

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function Num (n) {
  // Good luck!
  return n;
}

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```

/section>

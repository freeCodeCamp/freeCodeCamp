---
id: 5900f5151000cf542c510028
challengeType: 5
title: 'Problem 425: Prime connection'
videoUrl: ''
localeTitle: 问题425：主要连接
---

## Description
<section id="description">
如果满足以下条件之一，则称两个正数A和B被连接（用“ A↔B”表示）：
（1）A和B的长度相同，且仅相差一位数； 例如123↔173。
（2）在A（或B）的左边加一位使B（或A）成为数字； 例如23↔223和123↔23。


如果在2和P之间存在连接的素数链，并且链中没有素数超过P，则我们称素数为P a 2的相对数。


例如，127是2的亲戚。 可能的链之一如下所示：
2分3分13分113分103分107分127
但是，11和103不是2的亲戚。


令F（N）为素数≤N的和，它们不是2的相对数。
我们可以验证F（103）= 431和F（104）= 78728。


找出F（107）。
</section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>euler425()</code>应该返回46479497324。
    testString: assert.strictEqual(euler425(), 46479497324);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function euler425() {
  // Good luck!
  return true;
}

euler425();

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```

/section>

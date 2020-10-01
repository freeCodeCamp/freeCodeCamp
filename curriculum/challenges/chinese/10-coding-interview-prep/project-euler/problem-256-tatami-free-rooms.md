---
id: 5900f46c1000cf542c50ff7e
challengeType: 5
videoUrl: ''
title: 问题256：无榻榻米房间
---

## Description
<section id="description">榻榻米是长方形垫子，用于完全覆盖房间的地板，没有重叠。 <p>假设唯一可用的榻榻米尺寸为1×2，那么可以覆盖的房间的形状和大小显然存在一些限制。 </p><p>对于这个问题，我们只考虑具有整数尺寸a，b和均匀尺寸s = a·b的矩形房间。我们使用术语“大小”来表示房间的地板表面积，并且 - 不失一般性 - 我们添加条件a≤b。 </p><p>铺设榻榻米时要遵循一条规则：四个不同垫子的角落必须相遇。例如，考虑下面两个4×4房间的安排： </p><p>左边的排列是可以接受的，而右边的排列则不是：中间的红色“X”标志着四个榻榻米相遇的点。 </p><p>由于这个规则，某些大小合适的房间不能覆盖榻榻米：我们称之为榻榻米房间。此外，我们将T（s）定义为大小为s的无榻榻米房间的数量。 </p><p>最小的无榻榻米房间尺寸为s = 70，尺寸为7×10。所有其他尺寸为s = 70的房间都可以铺上榻榻米;它们是：1×70,2×35和5×14。因此，T（70）= 1。 </p><p>类似地，我们可以验证T（1320）= 5，因为正好有5个无榻榻米的房间，大小为s = 1320：20×66,22×60,24×55,30×44和33×40。事实上，s = 1320是T（s）= 5的最小房间尺寸。 </p><p>找到T（s）= 200的最小房间大小。 </p></section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>euler256()</code>应该返回85765680。
    testString: assert.strictEqual(euler256(), 85765680);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function euler256() {
  // Good luck!
  return true;
}

euler256();

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```

/section>

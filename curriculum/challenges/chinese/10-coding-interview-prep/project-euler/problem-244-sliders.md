---
id: 5900f4601000cf542c50ff72
challengeType: 5
videoUrl: ''
title: 问题244：滑块
---

## Description
<section id="description">你可能知道游戏Fifteen Puzzle。在这里，我们有7个红色瓷砖和8个蓝色瓷砖，而不是编号瓷砖。移动由方块（左，右，上，下）的大写初始值表示，其中区块滑动，例如从配置（S）开始，通过序列LULUR我们到达配置（E）： <p> （S），（E） </p><p>对于每个路径，其校验和由（伪代码）计算： </p><p> checksum = 0 checksum =（checksum×243 + m1）mod 100 000 007 checksum =（checksum×243 + m2）mod 100 000 007 ... checksum =（checksum×243 + mn）mod 100 000 007其中mk是ASCII值移动序列中的第k个字母和移动的ASCII值为： </p><p> L76R82U85D68 </p><p>对于上面给出的序列LULUR，校验和将是19761398.现在，从配置（S）开始，找到达到配置（T）的所有最短路径。 </p><p> （S），（T） </p><p>具有最小长度的路径的所有校验和的总和是多少？ </p></section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>euler244()</code>应该返回96356848。
    testString: assert.strictEqual(euler244(), 96356848);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function euler244() {
  // Good luck!
  return true;
}

euler244();

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```

/section>

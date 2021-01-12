---
id: 5900f4601000cf542c50ff72
title: 问题244：滑块
challengeType: 5
videoUrl: ''
dashedName: problem-244-sliders
---

# --description--

你可能知道游戏Fifteen Puzzle。在这里，我们有7个红色瓷砖和8个蓝色瓷砖，而不是编号瓷砖。移动由方块（左，右，上，下）的大写初始值表示，其中区块滑动，例如从配置（S）开始，通过序列LULUR我们到达配置（E）：

（S），（E）

对于每个路径，其校验和由（伪代码）计算：

checksum = 0 checksum =（checksum×243 + m1）mod 100 000 007 checksum =（checksum×243 + m2）mod 100 000 007 ... checksum =（checksum×243 + mn）mod 100 000 007其中mk是ASCII值移动序列中的第k个字母和移动的ASCII值为：

L76R82U85D68

对于上面给出的序列LULUR，校验和将是19761398.现在，从配置（S）开始，找到达到配置（T）的所有最短路径。

（S），（T）

具有最小长度的路径的所有校验和的总和是多少？

# --hints--

`euler244()`应该返回96356848。

```js
assert.strictEqual(euler244(), 96356848);
```

# --seed--

## --seed-contents--

```js
function euler244() {

  return true;
}

euler244();
```

# --solutions--

```js
// solution required
```

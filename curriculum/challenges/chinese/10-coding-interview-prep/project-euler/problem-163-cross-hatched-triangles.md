---
id: 5900f40f1000cf542c50ff22
title: 问题163：阴影线三角形
challengeType: 5
videoUrl: ''
dashedName: problem-163-cross-hatched-triangles
---

# --description--

考虑等边三角形，其中从每个顶点到相对侧的中间绘制直线，例如在下面草图中的1号三角形中。

现在可以在该三角形中观察到具有不同形状或大小或方向或位置的十六个三角形。使用大小为1的三角形作为构建块，可以形成更大的三角形，例如上面草图中的大小为2的三角形。现在可以在该尺寸2三角形中观察到具有不同形状或尺寸或方向或位置的一百四十个三角形。可以观察到，2号三角形包含4个1号三角形构造块。大小为3的三角形将包含9个大小为1的三角形构建块，因此大小为n的三角形将包含n2个大小为1的三角形构建块。如果我们将T（n）表示为大小为n的三角形中存在的三角形的数量，则T（1）= 16 T（2）= 104 Find T（36）。

# --hints--

`euler163()`应返回343047。

```js
assert.strictEqual(euler163(), 343047);
```

# --seed--

## --seed-contents--

```js
function euler163() {

  return true;
}

euler163();
```

# --solutions--

```js
// solution required
```

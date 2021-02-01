---
id: 5900f3fc1000cf542c50ff0f
title: 问题144：研究激光束的多次反射
challengeType: 5
videoUrl: ''
dashedName: problem-144-investigating-multiple-reflections-of-a-laser-beam
---

# --description--

在激光物理学中，“白色单元”是镜像系统，其充当激光束的延迟线。光束进入细胞，在镜子上反弹，最终恢复原状。我们将考虑的特定白色单元是椭圆形，其等式为4x2 + y2 = 100。顶部对应于-0.01≤x≤+ 0.01的部分缺失，允许光线通过孔进入和退出。

此问题中的光束从白色单元外部的点（0.0,10.1）开始，光束首先在（1.4，-9.6）处撞击镜子。每次激光束撞击椭圆的表面时，它遵循通常的反射定律“入射角等于反射角”。也就是说，入射光束和反射光束都与入射点处的法线形成相同的角度。在左图中，红线表示激光束与白色单元壁之间的前两个接触点;蓝线表示在第一次反弹入射点处与椭圆相切的直线。给定椭圆的任意点（x，y）处的切线的斜率m为：m = -4x / y法线为垂直于入射点处的该切线。右侧的动画显示了光束的前10个反射。

在离开之前，光束到达白细胞内表面的次数是多少？

# --hints--

`euler144()`应返回354。

```js
assert.strictEqual(euler144(), 354);
```

# --seed--

## --seed-contents--

```js
function euler144() {

  return true;
}

euler144();
```

# --solutions--

```js
// solution required
```

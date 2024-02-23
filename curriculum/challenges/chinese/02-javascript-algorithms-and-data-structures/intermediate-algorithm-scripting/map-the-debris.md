---
id: af4afb223120f7348cdfc9fd
title: 计算轨道周期
challengeType: 1
forumTopicId: 16021
dashedName: map-the-debris
---

# --description--

根据开普勒第三定律，在环状或椭圆轨道上在轨两个点质量的 $T$ 轨道期为：

$$ T = 2 \pi \sqrt{\frac{a^{3}}{\mu}} $$

- $a$ 是轨道的半主轴
- $μ = GM$ 是标准重力参数
- $G$ 是引力常量
- $M$ 是较大天体的质量

返回一个新数组，将元素的平均高度转换为轨道周期（以秒为单位）。

数组将包含 `{name: 'name', avgAlt: avgAlt}` 格式的对象 。

最终的计算结果应取整到最接近的整数。 正在轨道上的物体是地球。

地球半径为 6367.4447 公里，地球的 GM 值为 398600.4418 km <sup>3</sup> s <sup>-2</sup> 。

# --hints--

`orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}])` 应返回 `[{name: "sputnik", orbitalPeriod: 86400}]` 。

```js
assert.deepEqual(orbitalPeriod([{ name: 'sputnik', avgAlt: 35873.5553 }]), [
  { name: 'sputnik', orbitalPeriod: 86400 }
]);
```

`orbitalPeriod([{name: "iss", avgAlt: 413.6}, {name: "hubble", avgAlt: 556.7}, {name: "moon", avgAlt: 378632.553}])` 应返回 `[{name : "iss", orbitalPeriod: 5557}, {name: "hubble", orbitalPeriod: 5734}, {name: "moon", orbitalPeriod: 2377399}]`。

```js
assert.deepEqual(
  orbitalPeriod([
    { name: 'iss', avgAlt: 413.6 },
    { name: 'hubble', avgAlt: 556.7 },
    { name: 'moon', avgAlt: 378632.553 }
  ]),
  [
    { name: 'iss', orbitalPeriod: 5557 },
    { name: 'hubble', orbitalPeriod: 5734 },
    { name: 'moon', orbitalPeriod: 2377399 }
  ]
);
```

# --seed--

## --seed-contents--

```js
function orbitalPeriod(arr) {
  const GM = 398600.4418;
  const earthRadius = 6367.4447;
  return arr;
}

orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]);
```

# --solutions--

```js
function orbitalPeriod(arr) {
  const GM = 398600.4418;
  const earthRadius = 6367.4447;
  const TAU = 2 * Math.PI;
  return arr.map(function(obj) {
    return {
      name: obj.name,
      orbitalPeriod: Math.round(TAU * Math.sqrt(Math.pow(obj.avgAlt+earthRadius, 3)/GM))
    };
  });
}
```

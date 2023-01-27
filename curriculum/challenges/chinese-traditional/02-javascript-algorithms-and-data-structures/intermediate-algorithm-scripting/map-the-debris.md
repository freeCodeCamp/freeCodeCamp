---
id: af4afb223120f7348cdfc9fd
title: 計算軌道週期
challengeType: 1
forumTopicId: 16021
dashedName: map-the-debris
---

# --description--

根據開普勒第三定律，在環狀或橢圓軌道上在軌兩個點質量的 $T$ 軌道期爲：

$$ T = 2 \pi \sqrt{\frac{a^{3}}{\mu}} $$

- $a$ 是軌道的半主軸
- $μ = GM$ 是標準重力參數
- $G$ 是引力常量
- $M$ 是較大天體的質量

返回一個新數組，將元素的平均高度轉換爲軌道週期（以秒爲單位）。

數組將包含 `{name: 'name', avgAlt: avgAlt}` 格式的對象 。

最終的計算結果應取整到最接近的整數。 正在軌道上的物體是地球。

地球半徑爲 6367.4447 公里，地球的 GM 值爲 398600.4418 km <sup>3</sup> s <sup>-2</sup> 。

# --hints--

`orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}])` 應返回 `[{name: "sputnik", orbitalPeriod: 86400}]` 。

```js
assert.deepEqual(orbitalPeriod([{ name: 'sputnik', avgAlt: 35873.5553 }]), [
  { name: 'sputnik', orbitalPeriod: 86400 }
]);
```

`orbitalPeriod([{name: "iss", avgAlt: 413.6}, {name: "hubble", avgAlt: 556.7}, {name: "moon", avgAlt: 378632.553}])` 應返回 `[{name : "iss", orbitalPeriod: 5557}, {name: "hubble", orbitalPeriod: 5734}, {name: "moon", orbitalPeriod: 2377399}]`。

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

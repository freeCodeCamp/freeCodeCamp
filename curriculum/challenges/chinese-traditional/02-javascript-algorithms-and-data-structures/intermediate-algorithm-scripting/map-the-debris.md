---
id: af4afb223120f7348cdfc9fd
title: 計算軌道週期
challengeType: 5
forumTopicId: 16021
dashedName: map-the-debris
---

# --description--

在這道題目中，我們需要寫一個計算天體軌道週期（單位是秒）的函數。

它接收一個對象數組參數 arr，對象中包含表示天體名稱的 name 屬性，及表示天體表面平均海拔的 avgAlt 屬性。 就像這樣：`{name: 'name', avgAlt: avgAlt}`。

你可以在這條[維基百科](http://en.wikipedia.org/wiki/Orbital_period)的鏈接中找到軌道週期的計算公式：

最終的計算結果應取整到最接近的整數。 在這裏計算地球的軌道週期。

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
  var GM = 398600.4418;
  var earthRadius = 6367.4447;
  return arr;
}

orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]);
```

# --solutions--

```js
function orbitalPeriod(arr) {
  var GM = 398600.4418;
  var earthRadius = 6367.4447;
  var TAU = 2 * Math.PI;
  return arr.map(function(obj) {
    return {
      name: obj.name,
      orbitalPeriod: Math.round(TAU * Math.sqrt(Math.pow(obj.avgAlt+earthRadius, 3)/GM))
    };
  });
}

orbitalPeriod([{name : "sputkin", avgAlt : 35873.5553}]);
```

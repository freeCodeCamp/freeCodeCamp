---
id: af4afb223120f7348cdfc9fd
title: 计算轨道周期
challengeType: 5
forumTopicId: 16021
---

# --description--

在这道题目中，我们需要写一个计算天体轨道周期（单位是秒）的函数。

它接收一个对象数组参数 `arr`，对象中包含表示天体名称的 `name` 属性，及表示天体表面平均海拔的 `avgAlt` 属性。就像这样：`{name: 'name', avgAlt: avgAlt}`。

这个函数的返回值也是一个对象数组，应保留原对象中的 `name` 属性及其属性值，然后根据 `avgAlt` 的属性值求出轨道周期（单位是秒），并赋值给 `orbitalPeriod` 属性。返回值中不应保留原数据中的 `avgAlt` 属性。

你可以在这条[维基百科](http://en.wikipedia.org/wiki/Orbital_period)的链接中找到轨道周期的计算公式：

```
T = 2π*(a^3/GM)^(1/2)
```

轨道周期的计算以地球为基准（即环绕地球的轨道周期），因此公式中的 `a` 为数组对象中的 `avgAlt` 加上地球半径。最终的计算结果应取整到最接近的整数。

地球的半径是 6367.4447 千米，地球的 GM 值为 398600.4418 km<sup>3</sup>s<sup>-2</sup>。

# --hints--

`orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}])` 应返回 `[{name: "sputnik", orbitalPeriod: 86400}]`。

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

# --solutions--


---
id: af4afb223120f7348cdfc9fd
title: デブリをマップする
challengeType: 5
forumTopicId: 16021
dashedName: map-the-debris
---

# --description--

要素の平均高度を軌道周期 (秒単位) に変換する新しい配列を返してください。

配列には、`{name: 'name', avgAlt: avgAlt}` という形式のオブジェクトを含めます。

軌道周期については [ Wikipedia](http://en.wikipedia.org/wiki/Orbital_period) で読むことができます。

値は、最も近い整数に端数を丸められます。 周回している天体は地球です。

地球の半径は 6367.4447 キロメートルで、地球の GM 値は 398600.4418km<sup>3</sup>s<sup>-2</sup> です。

# --hints--

`orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}])` は `[{name: "sputnik", orbitalPeriod: 86400}]` を返す必要があります。

```js
assert.deepEqual(orbitalPeriod([{ name: 'sputnik', avgAlt: 35873.5553 }]), [
  { name: 'sputnik', orbitalPeriod: 86400 }
]);
```

`orbitalPeriod([{name: "iss", avgAlt: 413.6}, {name: "hubble", avgAlt: 556.7}, {name: "moon", avgAlt: 378632.553}])` は `[{name : "iss", orbitalPeriod: 5557}, {name: "hubble", orbitalPeriod: 5734}, {name: "moon", orbitalPeriod: 2377399}]` を返す必要があります。

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

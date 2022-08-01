---
id: af4afb223120f7348cdfc9fd
title: デブリをマップする
challengeType: 1
forumTopicId: 16021
dashedName: map-the-debris
---

# --description--

ケプラーの第 3 法則によれば、円軌道または楕円軌道で互いに周回している 2 つの質点の軌道周期 $T$ は次のように表されます:

$$ T = 2 \pi \sqrt{\frac{a^{3}}{\mu}} $$

- $a$ は軌道長半径です
- $μ = GM$ は標準重力パラメータです
- $G$ は万有引力定数であり、
- $M$ はより大きい方の天体の質量です。

要素の平均高度を軌道周期 (秒単位) に変換する新しい配列を返してください。

配列には、`{name: 'name', avgAlt: avgAlt}` という形式のオブジェクトが含まれます。

値は、最も近い整数に端数を丸められます。 公転の母天体は地球です。

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

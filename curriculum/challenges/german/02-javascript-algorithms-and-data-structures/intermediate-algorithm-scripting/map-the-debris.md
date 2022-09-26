---
id: af4afb223120f7348cdfc9fd
title: Kartiere die Trümmer
challengeType: 1
forumTopicId: 16021
dashedName: map-the-debris
---

# --description--

Nach dem Dritten Keplerschen Gesetz beträgt die Umlaufzeit $T$ zweier Punktmassen, die sich auf einer kreisförmigen oder elliptischen Bahn umkreisen:

$$ T = 2 \pi \sqrt{\frac{a^{3}}{\mu}} $$

- $a$ ist die Halbachse der Umlaufbahn
- $μ = GM$ ist der Standard-Gravitationsparameter
- $G$ ist die Gravitationskonstante,
- $M$ ist die Masse des massereicheren Körpers.

Gibt ein neues Array zurück, das die durchschnittliche Höhe der Elemente in ihre Umlaufzeit (in Sekunden) umwandelt.

Die Auflistung wird Objekte im Format `{name: 'name', avgAlt: avgAlt}` enthalten.

Die Werte sollten auf die nächste ganze Zahl gerundet werden. Der umkreiste Körper ist die Erde.

Der Radius der Erde beträgt 6367,4447 Kilometer, und der GM-Wert der Erde beträgt 398600,4418 km<sup>3</sup>s<sup>-2</sup>.

# --hints--

`orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}])` sollte `[{name: "sputnik", orbitalPeriod: 86400}]` zurückgeben.

```js
assert.deepEqual(orbitalPeriod([{ name: 'sputnik', avgAlt: 35873.5553 }]), [
  { name: 'sputnik', orbitalPeriod: 86400 }
]);
```

`orbitalPeriod([{name: "iss", avgAlt: 413.6}, {name: "hubble", avgAlt: 556.7}, {name: "moon", avgAlt: 378632.553}])` sollte `[{name : "iss", orbitalPeriod: 5557}, {name: "hubble", orbitalPeriod: 5734}, {name: "moon", orbitalPeriod: 2377399}]` zurückgeben.

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

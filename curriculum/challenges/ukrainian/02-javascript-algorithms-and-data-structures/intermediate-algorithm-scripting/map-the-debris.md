---
id: af4afb223120f7348cdfc9fd
title: Мапа Debris
challengeType: 5
forumTopicId: 16021
dashedName: map-the-debris
---

# --description--

Повернути новий масив, який трансформує середню висоту елементів у їхні орбітальні періоди (у секундах).

Масив буде містити об'єкти у форматі `{name: 'name', avgAlt: avgAlt}`.

Ви можете прочитати про орбітальні періоди [у Вікіпедії](http://en.wikipedia.org/wiki/Orbital_period).

Значення потрібно округлити до найближчого цілого числа. Тіло, що знаходиться на орбіті - це Земля.

Радіус Землі - 6367.4447 кілометрів, а значення GM Землі - 398600.4418 km<sup>3</sup>s<sup>-2</sup>.

# --hints--

`orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}])` повинен повертатися як `[{name: "sputnik", orbitalPeriod: 86400}]`.

```js
assert.deepEqual(orbitalPeriod([{ name: 'sputnik', avgAlt: 35873.5553 }]), [
  { name: 'sputnik', orbitalPeriod: 86400 }
]);
```

`orbitalPeriod([{name: "iss", avgAlt: 413.6}, {name: "hubble", avgAlt: 556.7}, {name: "moon", avgAlt: 378632.553}])` повинен повертатися як `[{name : "iss", orbitalPeriod: 5557}, {name: "hubble", orbitalPeriod: 5734}, {name: "moon", orbitalPeriod: 2377399}]`.

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

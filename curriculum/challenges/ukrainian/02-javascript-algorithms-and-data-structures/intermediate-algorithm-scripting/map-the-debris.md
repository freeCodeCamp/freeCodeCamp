---
id: af4afb223120f7348cdfc9fd
title: Карта орбіт
challengeType: 1
forumTopicId: 16021
dashedName: map-the-debris
---

# --description--

Згідно з третім законом Кеплера, орбітальний період $T$ двох точкових мас, що обертаються навколо одна одної по круговій або еліптичній орбіті, є:

$$ T = 2 \pi \sqrt{\frac{a^{3}}{\mu}} $$

- $a$ – велика піввісь орбіти
- $μ = GM$ – стандартний гравітаційний параметр
- $G$ – гравітаційна стала,
- $M$ – маса масивнішого тіла.

Поверніть новий масив, який трансформує середню висоту елементів у їхні орбітальні періоди (у секундах).

Масив міститиме об'єкти у форматі `{name: 'name', avgAlt: avgAlt}`.

Значення потрібно округлити до найближчого цілого числа. Тіло, навколо якого потрібно обертатися, – Земля.

Радіус Землі становить 6367.4447 кілометрів, а значення GM Землі – 398600.4418 км<sup>3</sup>с<sup>-2</sup>.

# --hints--

`orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}])` має повертати `[{name: "sputnik", orbitalPeriod: 86400}]`.

```js
assert.deepEqual(orbitalPeriod([{ name: 'sputnik', avgAlt: 35873.5553 }]), [
  { name: 'sputnik', orbitalPeriod: 86400 }
]);
```

`orbitalPeriod([{name: "iss", avgAlt: 413.6}, {name: "hubble", avgAlt: 556.7}, {name: "moon", avgAlt: 378632.553}])` має повертати `[{name : "iss", orbitalPeriod: 5557}, {name: "hubble", orbitalPeriod: 5734}, {name: "moon", orbitalPeriod: 2377399}]`.

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

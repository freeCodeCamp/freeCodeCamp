---
id: af4afb223120f7348cdfc9fd
title: Mappare i detriti
challengeType: 1
forumTopicId: 16021
dashedName: map-the-debris
---

# --description--

Secondo la Terza Legge di Keplero, il periodo orbitale $T$ di una massa puntuale in orbitante attorno a un'altra, in una orbita ellittica o circolare è:

$$ T = 2 \pi \sqrt{\frac{a^{3}}{\mu}} $$

- $a$ è il semi asse maggiore dell'orbita
- $μ = GM$ è il parametro gravitazionale standard
- $G$ è la costante gravitazionale,
- $M$ è la massa del corpo più massivo.

Restituisci un nuovo array che trasformi l'altitudine media degli elementi nei loro periodi orbitali (in secondi).

L'array conterrà oggetti nel formato `{name: 'name', avgAlt: avgAlt}`.

I valori devono essere arrotondati al numero intero più vicino. Il corpo attorno al quale si sta orbitando è la Terra.

Il raggio della terra è 6367.4447 chilometri, e il valore GM della Terra è 398600.4418 km<sup>3</sup>s<sup>-2</sup>.

# --hints--

`orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}])` dovrebbe restituire `[{name: "sputnik", orbitalPeriod: 86400}]`.

```js
assert.deepEqual(orbitalPeriod([{ name: 'sputnik', avgAlt: 35873.5553 }]), [
  { name: 'sputnik', orbitalPeriod: 86400 }
]);
```

`orbitalPeriod([{name: "iss", avgAlt: 413.6}, {name: "hubble", avgAlt: 556.7}, {name: "moon", avgAlt: 378632.553}])` dovrebbe restituire `[{name : "iss", orbitalPeriod: 5557}, {name: "hubble", orbitalPeriod: 5734}, {name: "moon", orbitalPeriod: 2377399}]`.

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

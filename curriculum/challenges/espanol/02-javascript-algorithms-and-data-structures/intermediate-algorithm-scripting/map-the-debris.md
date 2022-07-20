---
id: af4afb223120f7348cdfc9fd
title: Mapea el Debris
challengeType: 1
forumTopicId: 16021
dashedName: map-the-debris
---

# --description--

De acuerdo con la Tercera Ley de Kepler, el período orbital $T$ de dos puntos se orbitan mutuamente en una órbita circular o elíptica es:

$$ T = 2 \pi \sqrt{\frac{a^{3}}{\mu}} $$

- $a$ es el eje semi-mayor de la órbita
- $μ = GM$ es el parámetro gravitatorio estándar
- $G$ es la constante gravitatoria,
- $M$ es la masa del cuerpo más masivo.

Devuelve un nuevo arreglo que transforma la altitud media de los elementos en sus periodos orbitales (en segundos).

El arreglo contendrá objetos en el formato `{name: 'name', avgAlt: avgAlt}`.

Los valores deben redondearse al número entero más cercano. El cuerpo orbitado es la Tierra.

El radio de la tierra es de, 6367.4447 kilómetros y el valor GM de la tierra es de, 398600.4418 km<sup>3</sup>s<sup>-2</sup>.

# --hints--

`orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}])` debe devolver `[{name: "sputnik", orbitalPeriod: 86400}]`.

```js
assert.deepEqual(orbitalPeriod([{ name: 'sputnik', avgAlt: 35873.5553 }]), [
  { name: 'sputnik', orbitalPeriod: 86400 }
]);
```

`orbitalPeriod([{name: "iss", avgAlt: 413.6}, {name: "hubble", avgAlt: 556.7}, {name: "moon", avgAlt: 378632.553}])` debe devolver `[{name : "iss", orbitalPeriod: 5557}, {name: "hubble", orbitalPeriod: 5734}, {name: "moon", orbitalPeriod: 2377399}]`.

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

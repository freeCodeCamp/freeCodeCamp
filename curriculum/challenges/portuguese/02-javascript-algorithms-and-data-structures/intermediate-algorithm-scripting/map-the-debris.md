---
id: af4afb223120f7348cdfc9fd
title: Mapear órbitas
challengeType: 1
forumTopicId: 16021
dashedName: map-the-debris
---

# --description--

De acordo com a Terceira Lei de Kepler, o período orbital $T$ de dois pontos de massa orbitando uma à outra em uma órbita circular ou elíptica é:

$$ T = 2 \pi \sqrt{\frac{a^{3}}{\mu}} $$

- $a$ é o eixo semimaior da órbita
- $μ = GM$ é o parâmetro gravitacional padrão
- $G$ é a constante gravitacional,
- $M$ é a massa do maior corpo.

Retorna um novo array que transforma a altitude média dos elementos em seus períodos órbita (em segundos).

O array conterá objetos no formato `{name: 'name', avgAlt: avgAlt}`.

Os valores devem estar arredondados para o número inteiro mais próximo. O corpo sendo orbitado é a Terra.

O raio da terra é 6367,4447 quilômetros, e o valor de GM da térra é 398600,4418 km<sup>3</sup>s<sup>-2</sup>.

# --hints--

`orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}])` deve retornar `[{name: "sputnik", orbitalPeriod: 86400}]`.

```js
assert.deepEqual(orbitalPeriod([{ name: 'sputnik', avgAlt: 35873.5553 }]), [
  { name: 'sputnik', orbitalPeriod: 86400 }
]);
```

`orbitalPeriod([{name: "iss", avgAlt: 413.6}, {name: "hubble", avgAlt: 556.7}, {name: "moon", avgAlt: 378632.553}])` deve retornar `[{name : "iss", orbitalPeriod: 5557}, {name: "hubble", orbitalPeriod: 5734}, {name: "moon", orbitalPeriod: 2377399}]`.

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

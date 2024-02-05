---
id: 5eb3e497b8d6d7f63c5517ea
title: Suche in einer Liste von Datensätzen
challengeType: 1
forumTopicId: 385315
dashedName: search-a-list-of-records
---

# --description--

A record consists of attributes that describe an entity. Each attribute has a name and a value. For example, a person can have an attribute `age` with a value of 25. An important operation on a list of records is to find a record with a particular attribute value.

# --instructions--

Schreibe eine Funktion, die eine Zeichenkette als Parameter annimmt. Die Funktion sollte den Index des Eintrags in `list` zurückgeben, bei dem der Wert des Attributs `name` mit der angegebenen Zeichenkette übereinstimmt.

# --hints--

`searchCity` sollte eine Funktion sein.

```js
assert(typeof searchCity === 'function');
```

`searchCity("Dar Es Salaam")` sollte eine Zahl zurückgeben.

```js
assert(typeof searchCity('Dar Es Salaam') === 'number');
```

`searchCity("Dar Es Salaam")` sollte `6` zurückgeben.

```js
assert.equal(searchCity('Dar Es Salaam'), 6);
```

`searchCity("Casablanca")` sollte `9` zurückgeben.

```js
assert.equal(searchCity('Casablanca'), 9);
```

`searchCity("Cairo")` sollte `1` zurückgeben.

```js
assert.equal(searchCity('Cairo'), 1);
```

`searchCity("Mogadishu")` sollte `4` zurückgeben.

```js
assert.equal(searchCity('Mogadishu'), 4);
```

`searchCity("Lagos")` sollte `0` zurückgeben.

```js
assert.equal(searchCity('Lagos'), 0);
```

# --seed--

## --seed-contents--

```js
function searchCity(name) {

}

const list = [
  { name: 'Lagos', population: 21.0 },
  { name: 'Cairo', population: 15.2 },
  { name: 'Kinshasa-Brazzaville', population: 11.3 },
  { name: 'Greater Johannesburg', population: 7.55 },
  { name: 'Mogadishu', population: 5.85 },
  { name: 'Khartoum-Omdurman', population: 4.98 },
  { name: 'Dar Es Salaam', population: 4.7 },
  { name: 'Alexandria', population: 4.58 },
  { name: 'Abidjan', population: 4.4 },
  { name: 'Casablanca', population: 3.98 }
];
```

# --solutions--

```js
function searchCity(name) {
  return list.findIndex(item => item.name === name);
}

const list = [
  { name: 'Lagos', population: 21.0 },
  { name: 'Cairo', population: 15.2 },
  { name: 'Kinshasa-Brazzaville', population: 11.3 },
  { name: 'Greater Johannesburg', population: 7.55 },
  { name: 'Mogadishu', population: 5.85 },
  { name: 'Khartoum-Omdurman', population: 4.98 },
  { name: 'Dar Es Salaam', population: 4.7 },
  { name: 'Alexandria', population: 4.58 },
  { name: 'Abidjan', population: 4.4 },
  { name: 'Casablanca', population: 3.98 }
];
```

---
id: 5eb3e497b8d6d7f63c5517ea
title: Search a list of records
challengeType: 1
forumTopicId: 385315
dashedName: search-a-list-of-records
---

# --description--

A record consists of attributes that describe an entity. Each attribute has a name and a value. For example, a person can have an attribute `age` with a value of 25. An important operation on a list of records is to find a record with a particular attribute value.

# --instructions--

Write a function that takes a string as a parameter. The function should return the index of the item in `list` for which the value of the `name` attribute matches the given string.

# --hints--

`searchCity` should be a function.

```js
assert(typeof searchCity === 'function');
```

`searchCity("Dar Es Salaam")` should return a number.

```js
assert(typeof searchCity('Dar Es Salaam') === 'number');
```

`searchCity("Dar Es Salaam")` should return `6`.

```js
assert.equal(searchCity('Dar Es Salaam'), 6);
```

`searchCity("Casablanca")` should return `9`.

```js
assert.equal(searchCity('Casablanca'), 9);
```

`searchCity("Cairo")` should return `1`.

```js
assert.equal(searchCity('Cairo'), 1);
```

`searchCity("Mogadishu")` should return `4`.

```js
assert.equal(searchCity('Mogadishu'), 4);
```

`searchCity("Lagos")` should return `0`.

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

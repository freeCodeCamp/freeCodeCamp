---
id: 5eb3e497b8d6d7f63c5517ea
title: Procurar em uma lista de registros
challengeType: 1
forumTopicId: 385315
dashedName: search-a-list-of-records
---

# --description--

Um registro é composto de atributos que descrevem uma entidade. Cada atributo tem um nome e um valor. Por exemplo, uma pessoa pode ter um atributo `age` (idade) com um valor de 25. Uma operação importante em uma lista de registros é encontrar um registro com um valor de atributo específico.

# --instructions--

Escreva uma função que receba uma string como parâmetro. A função deve retornar o índice do item na `list` para o qual o valor do atributo `name` corresponde à string fornecida.

# --hints--

`searchCity` deve ser uma função.

```js
assert(typeof searchCity === 'function');
```

`searchCity("Dar Es Salaam")` deve retornar um número.

```js
assert(typeof searchCity('Dar Es Salaam') === 'number');
```

`searchCity("Dar Es Salaam")` deve retornar `6`.

```js
assert.equal(searchCity('Dar Es Salaam'), 6);
```

`searchCity("Casablanca")` deve retornar `9`.

```js
assert.equal(searchCity('Casablanca'), 9);
```

`searchCity("Cairo")` deve retornar `1`.

```js
assert.equal(searchCity('Cairo'), 1);
```

`searchCity("Mogadishu")` deve retornar `4`.

```js
assert.equal(searchCity('Mogadishu'), 4);
```

`searchCity("Lagos")` deve retornar `0`.

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

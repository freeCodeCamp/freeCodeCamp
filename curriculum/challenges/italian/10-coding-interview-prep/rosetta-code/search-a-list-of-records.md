---
id: 5eb3e497b8d6d7f63c5517ea
title: Cerca in una lista di record
challengeType: 1
forumTopicId: 385315
dashedName: search-a-list-of-records
---

# --description--

Un record è costituito da attributi che descrivono un'entità. Ogni attributo ha un nome e un valore. Ad esempio, una persona può avere un attributo `age` con un valore di 25. Un'operazione importante su un elenco di record è quella di trovare un record con un particolare valore di attributo.

# --instructions--

Scrivi una funzione che prende una stringa come parametro. La funzione dovrebbe restituire l'indice dell'elemento nella `list` per cui il valore dell'attributo `name` combacia con la stringa data.

# --hints--

`searchCity` dovrebbe essere una funzione.

```js
assert(typeof searchCity === 'function');
```

`searchCity("Dar Es Salaam")` dovrebbe restituire un numero.

```js
assert(typeof searchCity('Dar Es Salaam') === 'number');
```

`searchCity("Dar Es Salaam")` dovrebbe restituire `6`.

```js
assert.equal(searchCity('Dar Es Salaam'), 6);
```

`searchCity("Casablanca")` dovrebbe restituire `9`.

```js
assert.equal(searchCity('Casablanca'), 9);
```

`searchCity("Cairo")` dovrebbe restituire `1`.

```js
assert.equal(searchCity('Cairo'), 1);
```

`searchCity("Mogadishu")` dovrebbe restituire `4`.

```js
assert.equal(searchCity('Mogadishu'), 4);
```

`searchCity("Lagos")` dovrebbe restituire `0`.

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

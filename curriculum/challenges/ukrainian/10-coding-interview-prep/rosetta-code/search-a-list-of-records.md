---
id: 5eb3e497b8d6d7f63c5517ea
title: Пошук списку записів
challengeType: 1
forumTopicId: 385315
dashedName: search-a-list-of-records
---

# --description--

Запис складається з атрибутів, що описують сутність. Кожен атрибут має назву та значення. Наприклад, людина може мати атрибут `age` зі значенням 25. Важливою операцією в списку записів є пошук запису з конкретним значенням атрибуту.

# --instructions--

Напишіть функцію, яка бере рядок як параметр. Функція має повернути індекс елемента в `list`, для якого значення `name` атрибута відповідає заданому рядку.

# --hints--

`searchCity` має бути функцією.

```js
assert(typeof searchCity === 'function');
```

`searchCity("Dar Es Salaam")` має повернутися числом.

```js
assert(typeof searchCity('Dar Es Salaam') === 'number');
```

`searchCity("Dar Es Salaam")` має повернутись `6`.

```js
assert.equal(searchCity('Dar Es Salaam'), 6);
```

`searchCity("Casablanca")` має повернути `9`.

```js
assert.equal(searchCity('Casablanca'), 9);
```

`searchCity("Cairo")` має повернути `1`.

```js
assert.equal(searchCity('Cairo'), 1);
```

`searchCity("Mogadishu")` має повернути `4`.

```js
assert.equal(searchCity('Mogadishu'), 4);
```

`searchCity("Lagos")` має повернути `0`.

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

---
id: 587d7b7c367417b2b2512b1a
title: Доступ до назв властивостей за допомогою дужок
challengeType: 1
forumTopicId: 301150
dashedName: access-property-names-with-bracket-notation
---

# --description--

У першому завданні про об'єкт ми згадували використання дужок як спосіб доступу до значень властивостей за допомогою оцінювання змінної. Наприклад, уявіть, що наш об'єкт `foods` використовується в програмі для касового апарату супермаркету. У нас є функція, яка встановлює `selectedFood` і ми хочемо перевірити наш об'єкт `foods` на наявність цієї їжі. Це може виглядати так:

```js
let selectedFood = getCurrentFood(scannedItem);
let inventory = foods[selectedFood];
```

Цей код оцінить значення, яке зберігається в змінній `selectedFood` та поверне значення цього ключа в об'єкт`foods`, або `undefined` якщо він відсутній. Дужки дуже корисні, тому що іноді властивості об'єкта невідомі до часу виконання або нам потрібно отримати до них доступ більш динамічним способом.

# --instructions--

Ми визначили функцію, `checkInventory`, яка отримує відсканований елемент в якості аргументу. Повернути поточне значення ключа `scannedItem` в об'єкті `foods`. Ви можете припустити, що тільки дійсні ключі будуть надані в якості аргументу для `checkInventory`.

# --hints--

`checkInventory` має бути функцією.

```js
assert.strictEqual(typeof checkInventory, 'function');
```

Об'єкт `foods` повинен мати тільки наступні пари ключових значень: `apples: 25`, `oranges: 32`, `plums: 28`, `bananas: 13`, `grapes: 35`, `strawberries: 27`.

```js
assert.deepEqual(foods, {
  apples: 25,
  oranges: 32,
  plums: 28,
  bananas: 13,
  grapes: 35,
  strawberries: 27
});
```

`checkInventory("apples")` повинен повернути `25`.

```js
assert.strictEqual(checkInventory('apples'), 25);
```

`checkInventory("bananas")` повинен повернути `13`.

```js
assert.strictEqual(checkInventory('bananas'), 13);
```

`checkInventory("strawberries")` повинен повернути `27`.

```js
assert.strictEqual(checkInventory('strawberries'), 27);
```

# --seed--

## --seed-contents--

```js
let foods = {
  apples: 25,
  oranges: 32,
  plums: 28,
  bananas: 13,
  grapes: 35,
  strawberries: 27
};

function checkInventory(scannedItem) {
  // Only change code below this line

  // Only change code above this line
}

console.log(checkInventory("apples"));
```

# --solutions--

```js
let foods = {
  apples: 25,
  oranges: 32,
  plums: 28,
  bananas: 13,
  grapes: 35,
  strawberries: 27
};

function checkInventory(scannedItem) {
  return foods[scannedItem];
}
```

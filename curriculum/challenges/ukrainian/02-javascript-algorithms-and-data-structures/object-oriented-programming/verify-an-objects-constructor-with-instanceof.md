---
id: 587d7dae367417b2b2512b7a
title: Перевірка конструктора об'єкта за допомогою instanceof
challengeType: 1
forumTopicId: 301337
dashedName: verify-an-objects-constructor-with-instanceof
---

# --description--

Щоразу, коли конструктор функцій створює новий об'єкт, він стає <dfn>instance</dfn> для його конструктора. JavaScript є найзручнішим засобом підтвердження оператору `instanceof`. `instanceof` надає змогу порівняти об'єкт із конструктором, повернути `true` або `false` залежно від того, чи був об'єкт створений за допомогою конструктору. Наприклад:

```js
let Bird = function(name, color) {
  this.name = name;
  this.color = color;
  this.numLegs = 2;
}

let crow = new Bird("Alexis", "black");

crow instanceof Bird;
```

Цей метод — `instanceof` — має повернути `true`.

Якщо об'єкт створено без використання конструктору, `instanceof` підтвердить це:

```js
let canary = {
  name: "Mildred",
  color: "Yellow",
  numLegs: 2
};

canary instanceof Bird;
```

Цей метод — `instanceof` — має повернути `false`.

# --instructions--

Створіть нову частину конструктору `House`, викличте її `myHouse` й передайте кількість спалень. Потім використайте `instanceof`, щоб підтвердити, що це є частиною `House`.

# --hints--

`myHouse` має мати атрибути `numBedrooms`, виражені числом.

```js
assert(typeof myHouse.numBedrooms === 'number');
```

Ви повинні перевірити, що `myHouse` є частиною `House`, за допомогою оператора `instanceof`.

```js
assert(/myHouse\s*instanceof\s*House/.test(code));
```

# --seed--

## --seed-contents--

```js
function House(numBedrooms) {
  this.numBedrooms = numBedrooms;
}

// Only change code below this line
```

# --solutions--

```js
function House(numBedrooms) {
  this.numBedrooms = numBedrooms;
}
const myHouse = new House(4);
console.log(myHouse instanceof House);
```

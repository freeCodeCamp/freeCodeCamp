---
id: 587d7b8c367417b2b2512b54
title: Гетери й сетери для управління доступом до об’єкта
challengeType: 1
forumTopicId: 301220
dashedName: use-getters-and-setters-to-control-access-to-an-object
---

# --description--

Ви можете отримати значення з об’єкта та встановити значення властивості всередині об’єкта.

Ці дії називають <dfn>гетерами</dfn> й <dfn>сетерами</dfn>.

Гетери повертають (отримують) значення приватної змінної об’єкта користувачу, але користувач не має прямого доступу до приватної змінної.

Сетери змінюють (встановлюють) значення приватної змінної об’єкта на основі значення, переданого до сетера. Ця зміна може потребувати обчислень або навіть повністю перезаписати попереднє значення.

```js
class Book {
  constructor(author) {
    this._author = author;
  }
  // getter
  get writer() {
    return this._author;
  }
  // setter
  set writer(updatedAuthor) {
    this._author = updatedAuthor;
  }
}
const novel = new Book('anonymous');
console.log(novel.writer);
novel.writer = 'newAuthor';
console.log(novel.writer);
```

Консоль показуватиме рядки `anonymous` та `newAuthor`.

Зверніть увагу на синтаксис для виклику гетерів й сетерів. Вони навіть не схожі на функції. Гетери і сетери важливі, оскільки вони приховують внутрішні деталі реалізації.

**Примітка:** згідно з конвенцією перед назвою приватної змінної ставиться підкреслення (`_`). Однак це не робить змінну приватною.

# --instructions--

Використайте ключове слово `class`, щоб створити клас `Thermostat`. `constructor` приймає температуру в градусах Фаренгейта.

У класі створіть `getter`, щоб отримати температуру в градусах Цельсія, та `setter`, щоб встановити температуру в градусах Цельсія.

Пам’ятайте, що `C = 5/9 * (F - 32)` та `F = C * 9.0 / 5 + 32`, де `F` є значенням температури за Фаренгейтом, а `C` є значенням за Цельсієм.

**Примітка:** під час реалізації ви відстежуватимете температуру в межах класу за шкалою Фаренгейта або Цельсія.

У цьому сила гетерів й сетерів. Ви створюєте API для іншого користувача, який може отримати правильний результат, незалежно від того, що саме ви досліджуєте.

Іншими словами, ви приховуєте деталі реалізації від користувача.

# --hints--

`Thermostat` повинен бути класом (`class`) із визначеним методом `constructor`.

```js
assert(
  typeof Thermostat === 'function' &&
    typeof Thermostat.constructor === 'function'
);
```

Використайте ключове слово `class`.

```js
assert(code.match(/class/g));
```

`Thermostat` повинен бути реалізованим.

```js
assert(
  (() => {
    const t = new Thermostat(122);
    return typeof t === 'object';
  })()
);
```

Коли значення за Фаренгейтом буде реалізоване, `Thermostat` повинен встановити правильну `temperature`.

```js
assert(
  (() => {
    const t = new Thermostat(122);
    return t.temperature === 50;
  })()
);
```

`getter` має бути визначеним.

```js
assert(
  (() => {
    const desc = Object.getOwnPropertyDescriptor(
      Thermostat.prototype,
      'temperature'
    );
    return !!desc && typeof desc.get === 'function';
  })()
);
```

`setter` має бути визначеним.

```js
assert(
  (() => {
    const desc = Object.getOwnPropertyDescriptor(
      Thermostat.prototype,
      'temperature'
    );
    return !!desc && typeof desc.set === 'function';
  })()
);
```

Виклик `setter` зі значенням за Цельсієм має встановити `temperature`.

```js
assert(
  (() => {
    const t = new Thermostat(32);
    t.temperature = 26;
    const u = new Thermostat(32);
    u.temperature = 50;
    return t.temperature === 26 && u.temperature === 50;
  })()
);
```

# --seed--

## --seed-contents--

```js
// Only change code below this line

// Only change code above this line

const thermos = new Thermostat(76); // Setting in Fahrenheit scale
let temp = thermos.temperature; // 24.44 in Celsius
thermos.temperature = 26;
temp = thermos.temperature; // 26 in Celsius
```

# --solutions--

```js
class Thermostat {
  constructor(fahrenheit) {
    this._tempInCelsius = 5/9 * (fahrenheit - 32);
  }
  get temperature(){
    return this._tempInCelsius;
  }
  set temperature(newTemp){
    this._tempInCelsius = newTemp;
  }
}

const thermos = new Thermostat(76); // Setting in Fahrenheit scale
let temp = thermos.temperature; // 24.44 in Celsius
thermos.temperature = 26;
temp = thermos.temperature; // 26 in Celsius
```

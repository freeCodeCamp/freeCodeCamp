---
id: 587d7b8c367417b2b2512b54
title: Використовуйте ґетери й сетери для Управління доступом до об'єкта
challengeType: 1
forumTopicId: 301220
dashedName: use-getters-and-setters-to-control-access-to-an-object
---

# --description--

Ви можете отримати значення від об'єкта й встановити значення властивості без об'єкта.

Це має назву <dfn>getters</dfn> й <dfn>setters</dfn>.

Функції ґетерів призначені для повернення (або отримання) значення приватної змінної без користувача, що безпосередньо має доступ до приватної змінної.

Функції сетерів призначені для змінення (або встановлення) значення приватної змінної об'єкту, що надалі використовується в функції сетерів. У складі цієї змінної може бути обчислення або навіть перезаписування попереднього значення.

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

Ця консоль буде зображати рядки `anonymous` й `newAuthor`.

Зверніть увагу на синтаксис, що використовується для виклику ґетерів й сетерів. Вони навіть не схожі на функції. Ґетери і сетери мають велике значення, бо вони приховують внутрішні деталі реалізації.

**Примітка:** Важливо використовувати підкреслювання (`_`) перед назвою приватної змінної. Однак сама практика не створює приватні змінні.

# --instructions--

Використовуйте `class` ключове слово для створення `Thermostat` класу. Конструктор `constructor` припускає температуру Фаренгейту.

На занятті створіть `getter` для отримання температури Цельсія й `setter` для її встановлення.

Пам'ятайте, що `C = 5/9 * (F - 32)` й`F = C * 9.0 / 5 + 32`, де `F` це значення температури за Фаренгейтом, а `C` значення тієї ж самої температури, але за Цельсієм.

**Примітка:** Під час виконання ви можете дослідити температуру в класі за Фаренгейтом або за Цельсієм.

У цьому сила ґетерів й сетерів. Ви створюєте API для іншого користувача, що може отримати правильний результат, незалежно від того, що саме ви досліджуєте.

Інакше кажучи, ви приховуєте деталі реалізації від користувача.

# --hints--

`Thermostat` має бути `class` визначеним за допомогою `constructor`.

```js
assert(
  typeof Thermostat === 'function' &&
    typeof Thermostat.constructor === 'function'
);
```

Використовуйте ключове слово `class`.

```js
assert(code.match(/class/g));
```

Має бути встановлено `Thermostat`.

```js
assert(
  (() => {
    const t = new Thermostat(122);
    return typeof t === 'object';
  })()
);
```

Після встановлення змінної за Фаренгейтом `Thermostat` має встановити правильну `temperature`.

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

A `setter` should be defined.

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

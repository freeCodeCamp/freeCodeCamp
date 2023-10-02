---
id: 587d7db2367417b2b2512b8c
title: IIFE для створення модуля
challengeType: 1
forumTopicId: 301332
dashedName: use-an-iife-to-create-a-module
---

# --description--

Вираз негайно викликаної функції (IIFE) часто використовують, щоб згрупувати пов’язану функціональність в один об’єкт або <dfn>модуль</dfn>. Наприклад, попереднє завдання визначило два міксини:

```js
function glideMixin(obj) {
  obj.glide = function() {
    console.log("Gliding on the water");
  };
}
function flyMixin(obj) {
  obj.fly = function() {
    console.log("Flying, wooosh!");
  };
}
```

Ми можемо згрупувати ці міксини в модуль:

```js
let motionModule = (function () {
  return {
    glideMixin: function(obj) {
      obj.glide = function() {
        console.log("Gliding on the water");
      };
    },
    flyMixin: function(obj) {
      obj.fly = function() {
        console.log("Flying, wooosh!");
      };
    }
  }
})();
```

Зверніть увагу, що ви маєте вираз негайно викликаної функції (IIFE), який повертає об’єкт `motionModule`. Повернений об’єкт містить поведінку міксинів як властивості об’єкта. Перевага модуля в тому, що поведінку руху можна розмістити в одному об’єкті, який потім можуть використовувати інші частини коду. Ось приклад використання:

```js
motionModule.glideMixin(duck);
duck.glide();
```

# --instructions--

Створіть модуль під назвою `funModule`, щоб загорнути два міксини (`isCuteMixin` та `singMixin`). `funModule` має повернути об’єкт.

# --hints--

`funModule` має бути визначеним та повернути об’єкт.

```js
assert(typeof funModule === 'object');
```

`funModule.isCuteMixin` повинен мати доступ до функції.

```js
assert(typeof funModule.isCuteMixin === 'function');
```

`funModule.singMixin` повинен мати доступ до функції.

```js
assert(typeof funModule.singMixin === 'function');
```

# --seed--

## --seed-contents--

```js
let isCuteMixin = function(obj) {
  obj.isCute = function() {
    return true;
  };
};
let singMixin = function(obj) {
  obj.sing = function() {
    console.log("Singing to an awesome tune");
  };
};
```

# --solutions--

```js
const funModule = (function () {
  return {
    isCuteMixin: obj => {
      obj.isCute = () => true;
    },
    singMixin: obj => {
      obj.sing = () => console.log("Singing to an awesome tune");
    }
  };
})();
```

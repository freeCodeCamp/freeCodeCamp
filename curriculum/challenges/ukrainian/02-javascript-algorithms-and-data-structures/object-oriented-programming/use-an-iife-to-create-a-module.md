---
id: 587d7db2367417b2b2512b8c
title: Використовуйте IIFE щоб створити модуль
challengeType: 1
forumTopicId: 301332
dashedName: use-an-iife-to-create-a-module
---

# --description--

Вираз функції (IIFE), який негайно викликається, часто використовується для об'єднання зв'язаних функцій в один об'єкт чи <dfn>module</dfn>. Наприклад, попередній виклик визначив два міксини:

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

Ми можемо згрупувати ці міксини в модуль наступний чином:

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

Зверніть увагу, що у вас є вираз функції (IIFE), який негайно викликається та повертає об'єкт `motionModule`. Цей об'єкт, що повертається, містить всі змішані види поведінки як властивості об'єкта. Перевага моделі модуля полягає в тому, що всі моделі поведінки руху можуть бути упаковані в один об'єкт, який потім можуть використовувати інші частини вашого коду. Ось приклад, як це використовувати:

```js
motionModule.glideMixin(duck);
duck.glide();
```

# --instructions--

Створіть модуль з назвою `funModule` для обгортки двох змішувань `isCuteMixin` та `singMixin`. `funModule` повинен повернути об'єкт.

# --hints--

`funModule` повинен визначити та повернути об'єкт.

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

---
id: 587d7db2367417b2b2512b89
title: Використайте Mixin для встановлення спільної поведінки між непов'язаними об'єктами
challengeType: 1
forumTopicId: 301331
dashedName: use-a-mixin-to-add-common-behavior-between-unrelated-objects
---

# --description--

Як ви помітили, поведінка розділюється внаслідок успадкування. Однак є випадки, коли успадкування не є найкращим рішенням. Успадкування не працює у випадку зі непов'язаними об'єктами, наприклад, як `Bird` й `Airplane`. Вони обидві здатні літати, але `Bird` не належить до типу `Airplane` і навпаки.

Для непов'язаних об'єктів краще використовувати <dfn>mixins</dfn>. Завдяки mixin об'єкти здатні використовувати набір функцій.

```js
let flyMixin = function(obj) {
  obj.fly = function() {
    console.log("Flying, wooosh!");
  }
};
```

`flyMixin` обирає один об'єкт й привласнює йому метод `fly`.

```js
let bird = {
  name: "Donald",
  numLegs: 2
};

let plane = {
  model: "777",
  numPassengers: 524
};

flyMixin(bird);
flyMixin(plane);
```

Таким чином `bird` й `plane` привласнені `flyMixin`, що присвоює функції `fly` для кожного об'єкта. Наразі й `bird`, й `plane` можуть літати:

```js
bird.fly();
plane.fly();
```

Консоль буде показувати рядок `Flying, wooosh!` двічі для кожного `.fly()` виклику.

Зверніть увагу, що `fly` метод може бути використано повторно непов'язаними об'єктами `bird` й `plane`.

# --instructions--

Створіть mixin під назвою `glideMixin`, що визначає метод під назвою `glide`. Після цього використайте `glideMixin`, щоб водночас надати `bird` й `boat` можливість поступового переходу.

# --hints--

Ваш код має задати змінну `glideMixin` як функцію.

```js
assert(typeof glideMixin === 'function');
```

Завдяки використаному у вашому коді `glideMixin` в об'єкті `bird`, ви можете завдати метод `glide`.

```js
assert(typeof bird.glide === 'function');
```

Ваш код повинен містить в собі `glideMixin` в об'єкті `boat` для завдання методу `glide`.

```js
assert(typeof boat.glide === 'function');
```

# --seed--

## --seed-contents--

```js
let bird = {
  name: "Donald",
  numLegs: 2
};

let boat = {
  name: "Warrior",
  type: "race-boat"
};

// Only change code below this line
```

# --solutions--

```js
let bird = {
  name: "Donald",
  numLegs: 2
};

let boat = {
  name: "Warrior",
  type: "race-boat"
};
function glideMixin (obj) {
  obj.glide = () => 'Gliding!';
}

glideMixin(bird);
glideMixin(boat);
```

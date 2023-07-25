---
id: 587d7db2367417b2b2512b89
title: Міксини, щоб налаштувати спільну поведінку між непов’язаними об’єктами
challengeType: 1
forumTopicId: 301331
dashedName: use-a-mixin-to-add-common-behavior-between-unrelated-objects
---

# --description--

Як ви помітили, поведінка розділяється внаслідок успадкування. Однак є випадки, коли успадкування не є найкращим рішенням. Успадкування не працює належним чином з непов’язаними об’єктами (наприклад, `Bird` та `Airplane`). Вони обидві здатні літати, але `Bird` не належить до типу `Airplane` і навпаки.

Для непов’язаних об’єктів краще використовувати <dfn>міксини</dfn>. Міксини дозволяють об’єктам використовувати набір функцій.

```js
let flyMixin = function(obj) {
  obj.fly = function() {
    console.log("Flying, wooosh!");
  }
};
```

`flyMixin` приймає будь-який об’єкт та надає йому метод `fly`.

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

У прикладі `bird` та `plane` передані до `flyMixin`, що потім присвоює функцію `fly` до кожного об’єкта. Тепер `bird` та `plane` можуть літати:

```js
bird.fly();
plane.fly();
```

Консоль виведе рядок `Flying, wooosh!` для кожного виклику `.fly()`.

Зверніть увагу, як міксин дозволяє непов’язаним об’єктам `bird` та `plane` використовувати метод `fly` повторно.

# --instructions--

Створіть міксин під назвою `glideMixin`, який визначає метод під назвою `glide`. Потім використайте `glideMixin`, щоб надати `bird` та `boat` можливість плавно рухатись.

# --hints--

Код має оголосити змінну `glideMixin`, яка є функцією.

```js
assert(typeof glideMixin === 'function');
```

Код має використати `glideMixin` на об’єкті `bird`, щоб надати йому метод `glide`.

```js
assert(typeof bird.glide === 'function');
```

Код має використати `glideMixin` на об’єкті `boat`, щоб надати йому метод `glide`.

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

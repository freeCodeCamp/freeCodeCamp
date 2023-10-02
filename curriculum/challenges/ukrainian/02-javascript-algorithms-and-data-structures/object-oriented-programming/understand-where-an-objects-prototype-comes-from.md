---
id: 587d7db0367417b2b2512b81
title: Звідки з’являється прототип об’єкта
challengeType: 1
forumTopicId: 301330
dashedName: understand-where-an-objects-prototype-comes-from
---

# --description--

Люди успадковують гени від своїх батьків, а об’єкт успадковує `prototype` від функції-конструктора, яка його створила. Наприклад, конструктор `Bird` створює об’єкт `duck`:

```js
function Bird(name) {
  this.name = name;
}

let duck = new Bird("Donald");
```

`duck` успадковує `prototype` від функції-конструктора `Bird`. Такі зв’язки можна показати за допомогою методу `isPrototypeOf`:

```js
Bird.prototype.isPrototypeOf(duck);
```

Повернеться `true`.

# --instructions--

Використайте `isPrototypeOf`, щоб перевірити `beagle` `prototype`.

# --hints--

Ви повинні показати, що `Dog.prototype` є прототипом `beagle`

```js
assert(/Dog\.prototype\.isPrototypeOf\(beagle\)/.test(code));
```

# --seed--

## --seed-contents--

```js
function Dog(name) {
  this.name = name;
}

let beagle = new Dog("Snoopy");

// Only change code below this line
```

# --solutions--

```js
function Dog(name) {
  this.name = name;
}
let beagle = new Dog("Snoopy");
Dog.prototype.isPrototypeOf(beagle);
```

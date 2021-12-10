---
id: 587d7db0367417b2b2512b81
title: Розуміння того, звідки з'являється прототип об'єкта
challengeType: 1
forumTopicId: 301330
dashedName: understand-where-an-objects-prototype-comes-from
---

# --description--

Так само, як люди успадковують гени від своїх батьків, об'єкт успадковує його `prototype` безпосередньо від функції конструктора, яка його створила. Наприклад, `Bird`конструктор створює об'єкт `duck`:

```js
function Bird(name) {
  this.name = name;
}

let duck = new Bird("Donald");
```

`duck` наслідує `prototype` з функції конструктора `Bird`. Ви можете показати це відношення з методом `isPrototypeOf`:

```js
Bird.prototype.isPrototypeOf(duck);
```

Вони повернуть `true`.

# --instructions--

Використовуйте `isPrototypeOf` щоб перевірити `prototyp` of `beagle`.

# --hints--

Ви повинні показати, що `Dog.prototype` це є `prototype` `beagle`

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

---
id: 587d7db0367417b2b2512b82
title: Ланцюг прототипів
challengeType: 1
forumTopicId: 301329
dashedName: understand-the-prototype-chain
---

# --description--

Усі об’єкти в JavaScript (за парою винятків) мають `prototype`. До того ж сам прототип об’єкта є об’єктом.

```js
function Bird(name) {
  this.name = name;
}

typeof Bird.prototype;
```

Оскільки `prototype` є об’єктом, `prototype` може мати власний `prototype`! У цьому випадку `prototype` `Bird.prototype` є `Object.prototype`:

```js
Object.prototype.isPrototypeOf(Bird.prototype);
```

Чим це корисно? Згадайте метод `hasOwnProperty` із попереднього завдання:

```js
let duck = new Bird("Donald");
duck.hasOwnProperty("name");
```

Метод `hasOwnProperty` визначений в `Object.prototype`, до якого можна отримати доступ завдяки `Bird.prototype`, до якого можна отримати доступ завдяки `duck`. Це приклад ланцюга прототипів. `Bird` у цьому ланцюзі прототипів є супертипом для `duck`, а `duck` є підтипом. `Object` є супертипом для `Bird` та `duck`. `Object` є супертипом для всіх об’єктів у JavaScript. Отже, будь-який об’єкт може використовувати метод `hasOwnProperty`.

# --instructions--

Змініть код, щоб показувати правильний ланцюг прототипів.

# --hints--

Код має показувати, що `Object.prototype` є прототипом `Dog.prototype`

```js
assert(/Object\.prototype\.isPrototypeOf/.test(code));
```

# --seed--

## --seed-contents--

```js
function Dog(name) {
  this.name = name;
}

let beagle = new Dog("Snoopy");

Dog.prototype.isPrototypeOf(beagle);  // yields true

// Fix the code below so that it evaluates to true
???.isPrototypeOf(Dog.prototype);
```

# --solutions--

```js
function Dog(name) {
  this.name = name;
}
let beagle = new Dog("Snoopy");
Dog.prototype.isPrototypeOf(beagle);
Object.prototype.isPrototypeOf(Dog.prototype);
```

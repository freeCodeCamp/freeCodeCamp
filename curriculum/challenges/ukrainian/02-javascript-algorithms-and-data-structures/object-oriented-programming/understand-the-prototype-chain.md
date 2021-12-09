---
id: 587d7db0367417b2b2512b82
title: Зрозумійте використання ланцюга прототипів
challengeType: 1
forumTopicId: 301329
dashedName: understand-the-prototype-chain
---

# --description--

Усі об'єкти JavaScript (за невеликими винятками) мають `prototype`. Також сам `prototype` є об'єктом.

```js
function Bird(name) {
  this.name = name;
}

typeof Bird.prototype;
```

Тому що `prototype` — це об'єкт, `prototype` може мати свій `prototype`! Таким чином `prototype` `Bird.prototype` це `Object.prototype`:

```js
Object.prototype.isPrototypeOf(Bird.prototype);
```

Чим це корисно? Ви можете викликати `hasOwnProperty` метод із попереднього завдання:

```js
let duck = new Bird("Donald");
duck.hasOwnProperty("name");
```

Метод `hasOwnProperty` визначається `Object.prototype` й може бути доступним для `Bird.prototype`, що так само може бути доступним для `duck`. Це приклад ланцюга `prototype`. У цьому `prototype` ланцюга, `Bird` є `supertype` для `duck`, доки `duck` це `subtype`. `Object` це `supertype` водночас для `Bird` й `duck`. `Object` це `supertype` для усіх об'єктів JavaScript. Внаслідок цього будь-який об'єкт може використовувати метод `hasOwnProperty`.

# --instructions--

Змініть код для демонстрації правильного ланцюжка прототипів.

# --hints--

Ваш код має відбивати, що `Object.prototype` є прототипом для `Dog.prototype`

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

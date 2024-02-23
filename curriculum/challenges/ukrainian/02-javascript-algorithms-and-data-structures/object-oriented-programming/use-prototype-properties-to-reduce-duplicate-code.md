---
id: 587d7dae367417b2b2512b7c
title: Властивості прототипу, щоб зменшити дублювання коду
challengeType: 1
forumTopicId: 301336
dashedName: use-prototype-properties-to-reduce-duplicate-code
---

# --description--

Оскільки `numLegs`, ймовірно, матиме однакове значення для всіх екземплярів `Bird`, у вас по суті є дубльована змінна `numLegs` всередині кожного екземпляра `Bird`.

Це не може бути проблемою, коли існує тільки два випадки, але уявіть собі, якщо є мільйони екземплярів. Буде багато дубльованих змінних.

Краще використати `Bird` `prototype`. Властивості в `prototype` є загальними для ВСІХ екземплярів `Bird`. Ось так можна додати `numLegs` до `Bird prototype`:

```js
Bird.prototype.numLegs = 2;
```

Тепер всі екземпляри `Bird` мають властивість `numLegs`.

```js
console.log(duck.numLegs);
console.log(canary.numLegs);
```

Оскільки всі екземпляри автоматично мають властивості `prototype`, вважайте `prototype` «рецептом» для створення об’єктів. Зверніть увагу, що `duck` та `canary` `prototype` є частиною конструктора `Bird` як `Bird.prototype`.

# --instructions--

Додайте властивість `numLegs` до `Dog` `prototype`

# --hints--

`beagle` повинен мати властивість `numLegs`.

```js
assert(beagle.numLegs !== undefined);
```

`beagle.numLegs` має бути числом.

```js
assert(typeof beagle.numLegs === 'number');
```

`numLegs` повинна бути властивістю `prototype`, а не власною властивістю.

```js
assert(beagle.hasOwnProperty('numLegs') === false);
```

# --seed--

## --seed-contents--

```js
function Dog(name) {
  this.name = name;
}



// Only change code above this line
let beagle = new Dog("Snoopy");
```

# --solutions--

```js
function Dog (name) {
  this.name = name;
}
Dog.prototype.numLegs = 4;
let beagle = new Dog("Snoopy");
```

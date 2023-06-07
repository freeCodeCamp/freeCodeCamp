---
id: 587d7dae367417b2b2512b7c
title: Використання властивостей прототипу для зменшення дублювання коду
challengeType: 1
forumTopicId: 301336
dashedName: use-prototype-properties-to-reduce-duplicate-code
---

# --description--

Оскільки `numLegs`, ймовірно, матиме однакове значення для всіх екземплярів `Bird`у вас по суті є дубльована змінна`numLegs` всередині кожного `Bird`.

Це не може бути проблемою, коли існує тільки два випадки, але уявіть собі, якщо є мільйони екземплярів. Буде багато дублюючих змінних.

Кращий спосіб - використовувати `prototype` `Bird`. Особливості в `prototype` є загальними для всіх примірників`Bird`. Наприклад можна ось так додати `numLegs` до `Bird prototype`:

```js
Bird.prototype.numLegs = 2;
```

Тепер всі випадки`Bird` мають властивість `numLegs`.

```js
console.log(duck.numLegs);
console.log(canary.numLegs);
```

Оскільки всі екземпляри автоматично мають властивості `prototype`, подумайти про `prototype` як "рецепт" для створення об'єктів. Зверніть увагу, що`prototype` `duck` і `canary` є частиною конструктора `Bird` як `Bird.prototype`.

# --instructions--

Додати `numLegs` властивість `prototype` з `Dog`

# --hints--

`beagle` повинен мати властивість `numLegs` визначену числом.

```js
assert(beagle.numLegs !== undefined);
```

`beagle.numLegs` має бути числом.

```js
assert(typeof beagle.numLegs === 'number');
```

`numLegs` має мати властивість `prototype` а не власну властивість.

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

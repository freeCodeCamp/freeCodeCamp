---
id: 587d7daf367417b2b2512b80
title: Не забудьте встановити властивості Конструктора під час зміни прототипу
challengeType: 1
forumTopicId: 301323
dashedName: remember-to-set-the-constructor-property-when-changing-the-prototype
---

# --description--

Існує один важливий побічний ефект ручного встановлення прототипу до нового об'єкту. Це призводить до знищення властивостей `constructor`! Завдяки цій властивості можна дізнатися, яка функція конструктора створила приклад, але це може давати хибні результати, якщо параметр було перезаписано:

```js
duck.constructor === Bird;
duck.constructor === Object;
duck instanceof Bird;
```

Тоді ці вирази будуть оцінюватися таким чином: `false`, `true` й `true`.

Для виправлення, не забудьте власноруч зазначати властивість `constructor` під час встановлення прототипу:

```js
Bird.prototype = {
  constructor: Bird,
  numLegs: 2,
  eat: function() {
    console.log("nom nom nom");
  },
  describe: function() {
    console.log("My name is " + this.name); 
  }
};
```

# --instructions--

Визначте властивість `constructor` для `Dog` `prototype`.

# --hints--

`Dog.prototype` повинен встановлювати властивість `constructor`.

```js
assert(Dog.prototype.constructor === Dog);
```

# --seed--

## --seed-contents--

```js
function Dog(name) {
  this.name = name;
}

// Only change code below this line
Dog.prototype = {

  numLegs: 4,
  eat: function() {
    console.log("nom nom nom");
  },
  describe: function() {
    console.log("My name is " + this.name);
  }
};
```

# --solutions--

```js
function Dog(name) {
  this.name = name;
}
Dog.prototype = {
  constructor: Dog,
  numLegs: 4,
  eat: function() {
    console.log("nom nom nom");
  },
  describe: function() {
    console.log("My name is " + this.name);
  }
};
```

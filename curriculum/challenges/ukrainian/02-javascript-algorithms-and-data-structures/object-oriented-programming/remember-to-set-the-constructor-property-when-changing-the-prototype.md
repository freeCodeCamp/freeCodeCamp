---
id: 587d7daf367417b2b2512b80
title: Не забудьте налаштувати властивості конструктора під час зміни прототипу
challengeType: 1
forumTopicId: 301323
dashedName: remember-to-set-the-constructor-property-when-changing-the-prototype
---

# --description--

Існує один важливий побічний ефект після налаштування прототипу на новий об’єкт вручну. Це призводить до знищення властивості `constructor`! Завдяки цій властивості можна дізнатися, яка функція-конструктор створила екземпляр, але вона була перезаписана, тому надає хибні результати:

```js
duck.constructor === Bird;
duck.constructor === Object;
duck instanceof Bird;
```

Тоді ці вирази будуть оцінюватися таким чином: `false`, `true` й `true`.

Щоб виправити це, не забудьте власноруч визначити властивість `constructor` під час налаштування прототипу:

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

Визначте властивість `constructor` для `prototype` `Dog`.

# --hints--

`Dog.prototype` має налаштувати властивість `constructor`.

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

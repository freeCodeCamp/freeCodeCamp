---
id: 587d7db1367417b2b2512b85
title: Встановіть дочірній прототип до екземпляру батьківського класу
challengeType: 1
forumTopicId: 301325
dashedName: set-the-childs-prototype-to-an-instance-of-the-parent
---

# --description--

В попередніх завданнях ви дізналися перші кроки до успадкування поведінки від супертипу (або батьківського компонента) `Animal`: створення власного прикладу `Animal`.

Це завдання присвячено наступному кроку: завдання `prototype` для підтипу: у цьому випадку `Bird` як частини `Animal`.

```js
Bird.prototype = Object.create(Animal.prototype);
```

Пам'ятайте, що `prototype` є своєрідним «рецептом» для створення об'єкта. Таким чином основні «інгредієнти» `Animal` є частиною рецепту `Bird`.

```js
let duck = new Bird("Donald");
duck.eat();
```

`duck` успадковує усі властивості `Animal` разом зі методом `eat`.

# --instructions--

Змініть код так, щоб усі частини `Dog` були успадковані від `Animal`.

# --hints--

`Dog.prototype` має бути частиною `Animal`.

```js
assert(Animal.prototype.isPrototypeOf(Dog.prototype));
```

# --seed--

## --seed-contents--

```js
function Animal() { }

Animal.prototype = {
  constructor: Animal,
  eat: function() {
    console.log("nom nom nom");
  }
};

function Dog() { }

// Only change code below this line


let beagle = new Dog();
```

# --solutions--

```js
function Animal() { }

Animal.prototype = {
  constructor: Animal,
  eat: function() {
    console.log("nom nom nom");
  }
};

function Dog() { }
Dog.prototype = Object.create(Animal.prototype);

let beagle = new Dog();
beagle.eat();
```

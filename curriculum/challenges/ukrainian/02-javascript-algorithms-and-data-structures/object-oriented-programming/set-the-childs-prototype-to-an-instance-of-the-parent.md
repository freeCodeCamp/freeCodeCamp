---
id: 587d7db1367417b2b2512b85
title: Налаштування прототипу дочірнього елемента на екземпляр батьківського елемента
challengeType: 1
forumTopicId: 301325
dashedName: set-the-childs-prototype-to-an-instance-of-the-parent
---

# --description--

У попередньому завданні ви побачили перший крок для успадкування поведінки від супертипу (або батька) `Animal`: створення нового екземпляру `Animal`.

Це завдання присвячене наступному кроку: налаштуванню `prototype` підтипу (або дочірнього елемента) — у нашому випадку `Bird` — як екземпляр `Animal`.

```js
Bird.prototype = Object.create(Animal.prototype);
```

Пам’ятайте, що `prototype` є своєрідним «рецептом» для створення об’єкта. Таким чином ключові «інгредієнти» з `Animal` тепер є частиною рецепту `Bird`.

```js
let duck = new Bird("Donald");
duck.eat();
```

`duck` успадковує усі властивості `Animal`, включно з методом `eat`.

# --instructions--

Змініть код, щоб екземпляри `Dog` успадковували від `Animal`.

# --hints--

`Dog.prototype` має бути екземпляром `Animal`.

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

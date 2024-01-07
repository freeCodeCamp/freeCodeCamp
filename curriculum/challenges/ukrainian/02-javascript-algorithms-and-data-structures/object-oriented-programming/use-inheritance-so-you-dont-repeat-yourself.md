---
id: 587d7db0367417b2b2512b83
title: Успадкування, щоб не повторюватися
challengeType: 1
forumTopicId: 301334
dashedName: use-inheritance-so-you-dont-repeat-yourself
---

# --description--

У програмуванні існує принцип <dfn>Don't Repeat Yourself (DRY)</dfn>, що в перекладі означає «Не повторюйся». Повторюваний код є проблемою через те, що будь-яка зміна вимагає виправлення коду в декількох місцях. Зазвичай це завдає більше роботи програмістам і призводить до більшої кількості помилок.

Зверніть увагу, що у прикладі метод `describe` розповсюджується на `Bird` та `Dog`:

```js
Bird.prototype = {
  constructor: Bird,
  describe: function() {
    console.log("My name is " + this.name);
  }
};

Dog.prototype = {
  constructor: Dog,
  describe: function() {
    console.log("My name is " + this.name);
  }
};
```

Метод `describe` повторюється у двох місцях. Код можна редагувати відповідно до принципу DRY, створивши `supertype` (або батьківський елемент) під назвою `Animal`:

```js
function Animal() { };

Animal.prototype = {
  constructor: Animal, 
  describe: function() {
    console.log("My name is " + this.name);
  }
};
```

Оскільки `Animal` містить метод `describe`, його можна видалити з `Bird` та `Dog`:

```js
Bird.prototype = {
  constructor: Bird
};

Dog.prototype = {
  constructor: Dog
};
```

# --instructions--

Метод `eat` повторюється як у `Cat`, так і `Bear`. Відредагуйте код за принципом DRY, перемістивши метод `eat` до `Animal` `supertype`.

# --hints--

`Animal.prototype` повинен мати властивість `eat`.

```js
assert(Animal.prototype.hasOwnProperty('eat'));
```

`Bear.prototype` не повинен мати властивість `eat`.

```js
assert(!Bear.prototype.hasOwnProperty('eat'));
```

`Cat.prototype` не повинен мати властивість `eat`.

```js
assert(!Cat.prototype.hasOwnProperty('eat'));
```

# --seed--

## --seed-contents--

```js
function Cat(name) {
  this.name = name;
}

Cat.prototype = {
  constructor: Cat,
  eat: function() {
    console.log("nom nom nom");
  }
};

function Bear(name) {
  this.name = name;
}

Bear.prototype = {
  constructor: Bear,
  eat: function() {
    console.log("nom nom nom");
  }
};

function Animal() { }

Animal.prototype = {
  constructor: Animal,

};
```

# --solutions--

```js
function Cat(name) {
  this.name = name;
}

Cat.prototype = {
  constructor: Cat
};

function Bear(name) {
  this.name = name;
}

Bear.prototype = {
  constructor: Bear
};

function Animal() { }

Animal.prototype = {
  constructor: Animal,
  eat: function() {
    console.log("nom nom nom");
  }
};
```

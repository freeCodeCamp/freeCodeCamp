---
id: 587d7db0367417b2b2512b83
title: Використовуйте успадкування, щоб не повторюватися
challengeType: 1
forumTopicId: 301334
dashedName: use-inheritance-so-you-dont-repeat-yourself
---

# --description--

У програмуванні існує принцип під назвою <dfn>Don't Repeat Yourself (DRY)</dfn>, який перекладається "Не повторюйтесь". Повторюваний код є проблемою через те, що будь-яка зміна вимагає виправлення коду в декількох місцях. Зазвичай це завдає більше роботи програмістам і призводить до більшої кількості помилок.

Зверніть увагу на те, що у наведеному прикладі нижче метод `describe` розповсюджується на `Bird` і `Dog`:

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

Метод `describe` повторюється у двох місцях. Код можна редагувати відповідно до принципу DRY ("Не повторюйтесь"), створивши `supertype` (або батьківський) під назвою `Animal`:

```js
function Animal() { };

Animal.prototype = {
  constructor: Animal, 
  describe: function() {
    console.log("My name is " + this.name);
  }
};
```

Оскільки `Animal` містить `describe` метод, ви можете видалити його з `Bird` і `Dog`:

```js
Bird.prototype = {
  constructor: Bird
};

Dog.prototype = {
  constructor: Dog
};
```

# --instructions--

Метод `eat` повторюється як у `Cat`, так і `Bear`. Відредагуйте код за принципом DRY, перемістивши метод `eat` до `supertype` `Animal`.

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

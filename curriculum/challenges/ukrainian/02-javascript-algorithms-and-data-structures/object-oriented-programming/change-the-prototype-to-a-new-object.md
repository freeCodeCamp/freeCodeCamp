---
id: 587d7daf367417b2b2512b7f
title: Зміна прототипа новим об'єктом
challengeType: 1
forumTopicId: 301316
dashedName: change-the-prototype-to-a-new-object
---

# --description--

До цього часу ви окремо додавали властивості до `prototype`:

```js
Bird.prototype.numLegs = 2;
```

Використання більше ніж декількох властивостей виснажує.

```js
Bird.prototype.eat = function() {
  console.log("nom nom nom");
}

Bird.prototype.describe = function() {
  console.log("My name is " + this.name);
}
```

Більш ефективним способом буде встановлення `prototype` до нового об’єкта, який вже містить ці властивості. Так, властивості додаються одразу:

```js
Bird.prototype = {
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

Додайте властивість `numLegs` і два методи `eat()` і `describe()` до `prototype` з `Dog`, встановивши `prototype` до нового об'єкта.

# --hints--

`Dog.prototype` має бути встановлений на новий об'єкт.

```js
assert(/Dog\.prototype\s*?=\s*?{/.test(code));
```

`Dog.prototype` повинен містити властивість `numLegs`.

```js
assert(Dog.prototype.numLegs !== undefined);
```

`Dog.prototype` повинен містити метод `eat()`.

```js
assert(typeof Dog.prototype.eat === 'function');
```

`Dog.prototype` повинен містити метод `describe()`.

```js
assert(typeof Dog.prototype.describe === 'function');
```

# --seed--

## --seed-contents--

```js
function Dog(name) {
  this.name = name;
}

Dog.prototype = {
  // Only change code below this line

};
```

# --solutions--

```js
function Dog(name) {
  this.name = name;
}
Dog.prototype = {
numLegs: 4,
  eat () {
    console.log('nom nom nom');
  },
  describe () {
    console.log('My name is ' + this.name);
  }
};
```

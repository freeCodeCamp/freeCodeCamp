---
id: 587d7b8f367417b2b2512b64
title: Implementierung der Filter-Methode auf einen Prototypen
challengeType: 1
forumTopicId: 301231
dashedName: implement-the-filter-method-on-a-prototype
---

# --description--

Du kannst viel über die `filter`-Methode lernen, wenn du deine eigene Version implementierst. Es wird empfohlen, eine `for`-Schleife oder `Array.prototype.forEach()` zu verwenden.

# --instructions--

Schreibe deinen eigenen `Array.prototype.myFilter()`, der sich genau wie `Array.prototype.filter()` verhält. Du solltest die eingebaute `filter`-Methode nicht verwenden. Die `Array`-Instanz kann in der `myFilter`-Methode mit `this` aufgerufen werden.

# --hints--

`new_s` sollte `[23, 65, 5, ]` entsprechen.

```js
assert(JSON.stringify(new_s) === JSON.stringify([23, 65, 5]));
```

Dein Code sollte nicht die `filter` Methode verwenden.

```js
assert(!code.match(/\.?[\s\S]*?filter/g));
```

# --seed--

## --seed-contents--

```js
// The global variable
const s = [23, 65, 98, 5];

Array.prototype.myFilter = function(callback) {
  // Only change code below this line
  const newArray = [];
  // Only change code above this line
  return newArray;
};

const new_s = s.myFilter(function(item) {
  return item % 2 === 1;
});
```

# --solutions--

```js
const s = [23, 65, 98, 5];

Array.prototype.myFilter = function(callback) {
  const newArray = [];
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i])) newArray.push(this[i]);
  }
  return newArray;
};

const new_s = s.myFilter(function(item) {
  return item % 2 === 1;
});
```

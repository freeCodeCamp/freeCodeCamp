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

`[23, 65, 98, 5, 13].myFilter(item => item % 2)` sollte `[23, 65, 5, 13]` ergeben.

```js
const _test_s = [23, 65, 98, 5, 13];
const _callback = item => item % 2;
assert(JSON.stringify(_test_s.filter(_callback)) === JSON.stringify(_test_s.myFilter(_callback)));
```

`["naomi", "quincy", "camperbot"].myFilter(element => element === "naomi")` sollte `["naomi"]` zurückgeben.

```js
const _test_s = ["naomi", "quincy", "camperbot"];
const _callback = element => element === "naomi";
assert(JSON.stringify(_test_s.filter(_callback)) === JSON.stringify(_test_s.myFilter(_callback)));
```

`[1, 1, 2, 5, 2].myFilter((element, index, array) => array.indexOf(element) === index)` sollte `[1, 2, 5]` zurückgeben.

```js
const _test_s = [1, 1, 2, 5, 2];
const _callback = (element, index, array) => array.indexOf(element) === index;
assert(JSON.stringify(_test_s.filter(_callback)) === JSON.stringify(_test_s.myFilter(_callback)));
```

Dein Code sollte die Methode `filter` nicht verwenden.

```js
assert(!code.match(/\.?[\s\S]*?filter/g));
```

# --seed--

## --seed-contents--

```js
Array.prototype.myFilter = function(callback) {
  const newArray = [];
  // Only change code below this line

  // Only change code above this line
  return newArray;
};
```

# --solutions--

```js
Array.prototype.myFilter = function(callback) {
  const newArray = [];
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i], i, this)) newArray.push(this[i]);
  }
  return newArray;
};

// Test case
const s = [23, 65, 98, 5];
const odd_s = s.myFilter(item => item % 2 === 1);
```

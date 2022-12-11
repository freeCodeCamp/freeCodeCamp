---
id: 587d7b8f367417b2b2512b64
title: Implementar o método filter em um protótipo
challengeType: 1
forumTopicId: 301231
dashedName: implement-the-filter-method-on-a-prototype
---

# --description--

Você pode aprender muito sobre o método `filter` se você implementá-lo por conta própria. Recomenda-se que você use um loop `for` ou o método `Array.prototype.forEach()`.

# --instructions--

Escreva o seu próprio `Array.prototype.myFilter()` e faça com que ele se comporte como o `Array.prototype.filter()`. Você não deve usar o método `filter` disponibilizado. O objeto `Array` pode ser acessado dentro de `myFilter` pelo `this`.

# --hints--

`[23, 65, 98, 5, 13].myFilter(item => item % 2)` deve ser igual a `[23, 65, 5, 13]`.

```js
const _test_s = [23, 65, 98, 5, 13];
const _callback = item => item % 2;
assert(JSON.stringify(_test_s.filter(_callback)) === JSON.stringify(_test_s.myFilter(_callback)));
```

`["naomi", "quincy", "camperbot"].myFilter(element => element === "naomi")` deve retornar `["naomi"]`.

```js
const _test_s = ["naomi", "quincy", "camperbot"];
const _callback = element => element === "naomi";
assert(JSON.stringify(_test_s.filter(_callback)) === JSON.stringify(_test_s.myFilter(_callback)));
```

`[1, 1, 2, 5, 2].myFilter((element, index, array) => array.indexOf(element) === index)` deve retornar `[1, 2, 5]`.

```js
const _test_s = [1, 1, 2, 5, 2];
const _callback = (element, index, array) => array.indexOf(element) === index;
assert(JSON.stringify(_test_s.filter(_callback)) === JSON.stringify(_test_s.myFilter(_callback)));
```

Você não deve usar o método `filter`.

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

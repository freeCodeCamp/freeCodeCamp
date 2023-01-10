---
id: 587d7b8f367417b2b2512b62
title: Implementar map em um protótipo
challengeType: 1
forumTopicId: 301230
dashedName: implement-map-on-a-prototype
---

# --description--

Como você viu ao aplicar `Array.prototype.map()`, ou simplesmente `map()` mais cedo, o método `map` retorna um array do mesmo tamanho que o no qual chamamos o método. Ele também não altera o array original desde que a função de callback não o faça.

Em outras palavras, `map` é uma função pura e a sua saída depende somente de suas entradas. Além disso, ele recebe outra função como argumento.

Você pode aprender muito sobre o método `map` se você implementá-lo por conta própria. Recomenda-se que você use um loop `for` ou o método `Array.prototype.forEach()`.

# --instructions--

Escreva o seu próprio `Array.prototype.myMap()` e faça com que ele se comporte como o `Array.prototype.map()`. Você não deve usar o método `map` disponibilizado. O objeto `Array` pode ser acessado dentro de `myMap` pelo `this`.

# --hints--

`[23, 65, 98, 5, 13].myMap(item => item * 2)` deve ser igual a `[46, 130, 196, 10, 26]`.

```js
const _test_s = [23, 65, 98, 5, 13];
const _callback = item => item * 2;
assert(JSON.stringify(_test_s.map(_callback)) === JSON.stringify(_test_s.myMap(_callback)));
```

`["naomi", "quincy", "camperbot"].myMap(element => element.toUpperCase())` deve retornar `["NAOMI", "QUINCY", "CAMPERBOT"]`.

```js
const _test_s = ["naomi", "quincy", "camperbot"];
const _callback = element => element.toUpperCase();
assert(JSON.stringify(_test_s.map(_callback)) === JSON.stringify(_test_s.myMap(_callback)));
```

`[1, 1, 2, 5, 2].myMap((element, index, array) => array[index + 1] || array[0])` deve retornar `[1, 2, 5, 2, 1]`.

```js
const _test_s = [1, 1, 2, 5, 2];
const _callback = (element, index, array) => array[index + 1] || array[0];
assert(JSON.stringify(_test_s.map(_callback)) === JSON.stringify(_test_s.myMap(_callback)));
```

Você não deve usar o método `map`.

```js
assert(!code.match(/\.?[\s\S]*?map/g));
```

# --seed--

## --seed-contents--

```js
Array.prototype.myMap = function(callback) {
  const newArray = [];
  // Only change code below this line

  // Only change code above this line
  return newArray;
};
```

# --solutions--

```js
Array.prototype.myMap = function(callback) {
  const newArray = [];
  for (let i = 0; i < this.length; i++) {
    newArray.push(callback(this[i], i, this));
  }
  return newArray;
};

// Test case
const s = [23, 65, 98, 5];
const doubled_s = s.myMap(item => item * 2);
```

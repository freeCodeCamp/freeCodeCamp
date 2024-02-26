---
id: 594d8d0ab97724821379b1e6
title: Médias/Moda
challengeType: 1
forumTopicId: 302226
dashedName: averagesmode
---

# --description--

Escreva uma função `mode` para encontrar o valor que mais aparece em um array.

O caso em que a coleção está vazia pode ser ignorado. É preciso ter cuidado para lidar com o caso em que a moda não é única.

Se não for apropriado ou possível dar suporte a uma coleção geral, use um vetor (array), se possível. Se não é apropriado ou possível dar suporte a um tipo de valor não especificado, use números inteiros.

# --hints--

`mode` deve ser uma função.

```js
assert(typeof mode === 'function');
```

`mode([1, 3, 6, 6, 6, 6, 7, 7, 12, 12, 17])` deve ser igual a `[6]`

```js
assert.deepEqual(mode(arr1), [6]);
```

`mode([1, 2, 4, 4, 1])` deve ser igual a `[1, 4]`.

```js
assert.deepEqual(mode(arr2).sort(), [1, 4]);
```

# --seed--

## --after-user-code--

```js
const arr1 = [1, 3, 6, 6, 6, 6, 7, 7, 12, 12, 17];
const arr2 = [1, 2, 4, 4, 1];
```

## --seed-contents--

```js
function mode(arr) {

  return true;
}
```

# --solutions--

```js
function mode(arr) {
  const counter = {};
  let result = [];
  let max = 0;
  // for (const i in arr) {
  arr.forEach(el => {
    if (!(el in counter)) {
      counter[el] = 0;
    }
    counter[el]++;

    if (counter[el] === max) {
      result.push(el);
    }
    else if (counter[el] > max) {
      max = counter[el];
      result = [el];
    }
  });
  return result;
}
```

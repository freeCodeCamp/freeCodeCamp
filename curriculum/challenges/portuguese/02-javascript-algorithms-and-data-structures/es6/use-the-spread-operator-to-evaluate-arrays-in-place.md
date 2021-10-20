---
id: 587d7b89367417b2b2512b48
title: Usar o operador spread para avaliar arrays na hora
challengeType: 1
forumTopicId: 301222
dashedName: use-the-spread-operator-to-evaluate-arrays-in-place
---

# --description--

ES6 introduz o <dfn>operador spread</dfn>, o qual nos permite expandir arrays e outras expressões no lugar aonde é esperado diversos parâmetros ou elementos.

O código em ES5 abaixo usa `apply()` para calcular o valor máximo de um array:

```js
var arr = [6, 89, 3, 45];
var maximus = Math.max.apply(null, arr);
```

`maximus` teria o valor de `89`.

Tivemos de usar `Math.max.apply(null, arr)` porque `Math.max(arr)` retorna `NaN`. `Math.max()` espera argumentos separados por vírgula, mas não um array. O operador spread torna essa sintaxe muito mais legível e mais fácil de manter.

```js
const arr = [6, 89, 3, 45];
const maximus = Math.max(...arr);
```

`maximus` teria o valor de `89`.

`...arr` retorna um array descompactado. Em outras palavras, ele *espalha (spreads)* o array. No entanto, o operador spread apenas funciona no local, como em um argumento para uma função ou em um array literal. O código a seguir não funcionará:

```js
const spreaded = ...arr;
```

# --instructions--

Copie todo o conteúdo de `arr1` em outro array `arr2` usando o operador spread.

# --hints--

`arr2` deve ser uma cópia correta de `arr1`.

```js
assert(arr2.every((v, i) => v === arr1[i]) && arr2.length);
```

O operador spread `...` deve ser usado para duplicar `arr1`.

```js
assert(code.match(/Array\(\s*\.\.\.arr1\s*\)|\[\s*\.\.\.arr1\s*\]/));
```

`arr2` deve continuar inalterado quando `arr1` é modificado=.

```js
assert((arr1, arr2) => {
  arr1.push('JUN');
  return arr2.length < arr1.length;
});
```

# --seed--

## --seed-contents--

```js
const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
let arr2;

arr2 = [];  // Change this line

console.log(arr2);
```

# --solutions--

```js
const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
let arr2;

arr2 = [...arr1];
```

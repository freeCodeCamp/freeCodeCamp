---
id: 56bbb991ad1ed5201cd392ca
title: Acessar array de dados com índices
challengeType: 1
videoUrl: 'https://scrimba.com/c/cBZQbTz'
forumTopicId: 16158
dashedName: access-array-data-with-indexes
---

# --description--

Podemos acessar os dados dentro de arrays usando <dfn>indexes</dfn>.

Os índices de um array são escritos na mesma notação com colchetes que as strings usam. Porém, em vez de especificar um caractere, eles estão especificando um item do array. Assim como ocorre com as strings, os arrays usam indexação <dfn>de base zero</dfn>, de forma que o primeiro elemento de um array possui índice `0`.

<br>

**Exemplo**

```js
const array = [50, 60, 70];
console.log(array[0]);
const data = array[1];
```

O `console.log(array[0])` exibirá `50` e `data` terá o valor de `60`.

# --instructions--

Crie uma variável chamada `myData` e defina-a como igual ao primeiro valor de `myArray` usando notação de colchetes.

# --hints--

A variável `myData` deve ser igual ao primeiro valor de `myArray`.

```js
assert(
  (function () {
    if (
      typeof myArray !== 'undefined' &&
      typeof myData !== 'undefined' &&
      myArray[0] === myData
    ) {
      return true;
    } else {
      return false;
    }
  })()
);
```

O dado na variável `myArray` deve ser acessado usando notação de colchetes.

```js
assert(
  (function () {
    if (code.match(/\s*=\s*myArray\[0\]/g)) {
      return true;
    } else {
      return false;
    }
  })()
);
```

# --seed--

## --after-user-code--

```js
if(typeof myArray !== "undefined" && typeof myData !== "undefined"){(function(y,z){return 'myArray = ' + JSON.stringify(y) + ', myData = ' + JSON.stringify(z);})(myArray, myData);}
```

## --seed-contents--

```js
const myArray = [50, 60, 70];


```

# --solutions--

```js
const myArray = [50, 60, 70];
const myData = myArray[0];
```

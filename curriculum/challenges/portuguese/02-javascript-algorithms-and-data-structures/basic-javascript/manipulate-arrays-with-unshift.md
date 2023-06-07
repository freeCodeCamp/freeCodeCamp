---
id: 56bbb991ad1ed5201cd392ce
title: Manipular arrays com o método unshift
challengeType: 1
videoUrl: 'https://scrimba.com/c/ckNDESv'
forumTopicId: 18239
dashedName: manipulate-arrays-with-unshift
---

# --description--

Você pode não apenas usar `shift` para remover elementos do início de um array, como também pode usar `unshift` para adicionar elementos ao início de um array, ou seja, adicionar elementos na posição inicial do array.

`.unshift()` funciona exatamente como `.push()`, mas, ao invés de adicionar o elemento ao final do array, `unshift()` adiciona o elemento no início do array.

Exemplo:

```js
const ourArray = ["Stimpson", "J", "cat"];
ourArray.shift();
ourArray.unshift("Happy");
```

Após o `shift`, `ourArray` teria o valor `["J","cat"]`. Após o `unshift`, `ourArray` teria o valor `["Happy","J","cat"]`.

# --instructions--

Adicione `["Paul", 35]` ao início da variável `myArray` usando `unshift()`.

# --hints--

`myArray` agora deve ter `[["Paul", 35], ["dog", 3]]`.

```js
assert(
  (function (d) {
    if (
      typeof d[0] === 'object' &&
      d[0][0] == 'Paul' &&
      d[0][1] === 35 &&
      d[1][0] != undefined &&
      d[1][0] == 'dog' &&
      d[1][1] != undefined &&
      d[1][1] == 3
    ) {
      return true;
    } else {
      return false;
    }
  })(myArray)
);
```

# --seed--

## --after-user-code--

```js
(function(y, z){return 'myArray = ' + JSON.stringify(y);})(myArray);
```

## --seed-contents--

```js
// Setup
const myArray = [["John", 23], ["dog", 3]];
myArray.shift();

// Only change code below this line

```

# --solutions--

```js
const myArray = [["John", 23], ["dog", 3]];
myArray.shift();
myArray.unshift(["Paul", 35]);
```

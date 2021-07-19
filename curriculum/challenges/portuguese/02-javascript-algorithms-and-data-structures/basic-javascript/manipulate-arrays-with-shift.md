---
id: 56bbb991ad1ed5201cd392cd
title: Manipule Arrays Com shift()
challengeType: 1
videoUrl: 'https://scrimba.com/c/cRbVETW'
forumTopicId: 18238
dashedName: manipulate-arrays-with-shift
---

# --description--

`pop()` sempre remove o último elemento de um array. E se você quiser remover o primeiro?

É aí que o `.shift()` vem a ser útil. Ele funciona da mesma forma que `.pop()`, exceto que ele remove o primeiro elemento ao invés do último.

Exemplo:

```js
var ourArray = ["Stimpson", "J", ["cat"]];
var removedFromOurArray = ourArray.shift();
```

`removedFromOurArray` teria o valor da string `Stimpson` e `ourArray` teria o valor de `["J", ["cat"]]`.

# --instructions--

Use a função `.shift()` para remover o primeiro item de `myArray`, atribuindo o valor "removido" para `removedFromMyArray`.

# --hints--

`myArray` agora deve ser igual a `[["dog", 3]]`.

```js
assert(
  (function (d) {
    if (d[0][0] == 'dog' && d[0][1] === 3 && d[1] == undefined) {
      return true;
    } else {
      return false;
    }
  })(myArray)
);
```

`removedFromMyArray` deve conter `["John", 23]`.

```js
assert(
  (function (d) {
    if (
      d[0] == 'John' &&
      d[1] === 23 &&
      typeof removedFromMyArray === 'object'
    ) {
      return true;
    } else {
      return false;
    }
  })(removedFromMyArray)
);
```

# --seed--

## --after-user-code--

```js
(function(y, z){return 'myArray = ' + JSON.stringify(y) + ' & removedFromMyArray = ' + JSON.stringify(z);})(myArray, removedFromMyArray);
```

## --seed-contents--

```js
// Setup
var myArray = [["John", 23], ["dog", 3]];

// Only change code below this line
var removedFromMyArray;
```

# --solutions--

```js
var myArray = [["John", 23], ["dog", 3]];

// Only change code below this line
var removedFromMyArray = myArray.shift();
```

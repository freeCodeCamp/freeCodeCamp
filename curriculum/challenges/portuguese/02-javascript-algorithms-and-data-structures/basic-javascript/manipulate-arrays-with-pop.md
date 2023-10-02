---
id: 56bbb991ad1ed5201cd392cc
title: Manipular arrays com o método pop
challengeType: 1
videoUrl: 'https://scrimba.com/c/cRbVZAB'
forumTopicId: 18236
dashedName: manipulate-arrays-with-pop
---

# --description--

Outra forma de alterar os dados em um array é com a função `.pop()`.

`.pop()` é usado para remover um valor do final do array. Nós podemos armazenar esse valor removido atribuindo-o a uma variável. Em outras palavras, `.pop()` remove o último elemento de um array e retorna aquele elemento.

Qualquer tipo de entrada pode ser removida de um array - numbers, strings e até mesmo arrays aninhados.

```js
const threeArr = [1, 4, 6];
const oneDown = threeArr.pop();
console.log(oneDown);
console.log(threeArr);
```

O primeiro `console.log` exibirá o valor `6` e o segundo exibirá o valor `[1, 4]`.

# --instructions--

Use a função `.pop()` para remover o último item de `myArray` e atribuir o valor removido para uma nova variável, `removedFromMyArray`.

# --hints--

`myArray` deve conter apenas `[["John", 23]]`.

```js
assert(
  (function (d) {
    if (d[0][0] == 'John' && d[0][1] === 23 && d[1] == undefined) {
      return true;
    } else {
      return false;
    }
  })(myArray)
);
```

Você deve usar `pop()` em `myArray`.

```js
assert(/removedFromMyArray\s*=\s*myArray\s*.\s*pop\s*(\s*)/.test(code));
```

`removedFromMyArray` deve conter apenas `["cat", 2]`.

```js
assert(
  (function (d) {
    if (d[0] == 'cat' && d[1] === 2 && d[2] == undefined) {
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
if (typeof removedFromMyArray !== 'undefined') (function(y, z){return 'myArray = ' + JSON.stringify(y) + ' & removedFromMyArray = ' + JSON.stringify(z);})(myArray, removedFromMyArray);
```

## --seed-contents--

```js
// Setup
const myArray = [["John", 23], ["cat", 2]];

// Only change code below this line

```

# --solutions--

```js
const myArray = [["John", 23], ["cat", 2]];
const removedFromMyArray = myArray.pop();
```

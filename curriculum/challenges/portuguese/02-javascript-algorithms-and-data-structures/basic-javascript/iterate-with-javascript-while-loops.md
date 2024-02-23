---
id: cf1111c1c11feddfaeb1bdef
title: Iterar com laços while em JavaScript
challengeType: 1
videoUrl: 'https://scrimba.com/c/c8QbnCM'
forumTopicId: 18220
dashedName: iterate-with-javascript-while-loops
---

# --description--

Você pode rodar o mesmo código várias vezes usando um laço.

O primeiro tipo de laço que aprenderemos é chamado de laço `while` porque ele rodará enquanto uma condição específica for verdadeira e vai parar uma vez que a condição não for mais verdadeira.

```js
const ourArray = [];
let i = 0;

while (i < 5) {
  ourArray.push(i);
  i++;
}
```

No código de exemplo acima, o laço `while` executará por 5 vezes e adicionará os números de 0 até 4 a `ourArray`.

Vamos tentar fazer um laço while funcionar empurrando valores para um array.

# --instructions--

Adicione os números de 5 até 0 (inclusive) em ordem descendente para `myArray` usando um laço `while`.

# --hints--

Você deve usar um laço `while` para isso.

```js
assert(code.match(/while/g));
```

`myArray` deve ser igual a `[5, 4, 3, 2, 1, 0]`.

```js
assert.deepEqual(myArray, [5, 4, 3, 2, 1, 0]);
```

# --seed--

## --after-user-code--

```js
if(typeof myArray !== "undefined"){(function(){return myArray;})();}
```

## --seed-contents--

```js
// Setup
const myArray = [];

// Only change code below this line

```

# --solutions--

```js
const myArray = [];
let i = 5;
while (i >= 0) {
  myArray.push(i);
  i--;
}
```

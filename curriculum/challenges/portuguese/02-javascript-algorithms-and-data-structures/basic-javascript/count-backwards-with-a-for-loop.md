---
id: 56105e7b514f539506016a5e
title: Contar para trás com um laço for
challengeType: 1
videoUrl: 'https://scrimba.com/c/c2R6BHa'
forumTopicId: 16808
dashedName: count-backwards-with-a-for-loop
---

# --description--

Um laço for também pode contar pra trás, contanto que possamos definir as condições certas.

Para decrementar em dois cada iteração, nós precisamos alterar nossa inicialização, condição e expressão final.

Nós começaremos em `i = 10` e vamos iterar enquanto `i > 0`. Nós decrementamos `i` por dois em cada iteração com `i -= 2`.

```js
const ourArray = [];

for (let i = 10; i > 0; i -= 2) {
  ourArray.push(i);
}
```

`ourArray` agora vai conter `[10, 8, 6, 4, 2]`. Vamos mudar nossa inicialização e expressão final para que possamos contar para trás em dois para criar um array de números ímpares decrescentes.

# --instructions--

Adicione (push) os números ímpares de 9 até 1 para `myArray` usando um laço `for`.

# --hints--

Você deve estar usando um laço `for` para isso.

```js
assert(/for\s*\([^)]+?\)/.test(code));
```

Você deve usar o método de array `push`.

```js
assert(code.match(/myArray.push/));
```

`myArray` deve ser igual a `[9, 7, 5, 3, 1]`.

```js
assert.deepEqual(myArray, [9, 7, 5, 3, 1]);
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
for (let i = 9; i > 0; i -= 2) {
  myArray.push(i);
}
```

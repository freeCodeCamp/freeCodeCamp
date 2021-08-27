---
id: 587d78b2367417b2b2512b0f
title: Remover itens de um array com pop() e shift()
challengeType: 1
forumTopicId: 301165
dashedName: remove-items-from-an-array-with-pop-and-shift
---

# --description--

Tanto `push()` e `unshift()` possuem métodos correspondentes que são quase opostos funcionais: `pop()` e `shift()`. Como você já pode ter adivinhado, em vez de adicionar, `pop()` *remove* um elemento do fim de um array, enquanto `shift()` remove um elemento do início. A diferença chave entre `pop()` e `shift()` e seus primos `push()` e `unshift()`, é que nenhum dos métodos recebe parâmetros. Cada um deles só permite que seja modificado um elemento por vez em um array.

Vamos dar uma olhada:

```js
let greetings = ['whats up?', 'hello', 'see ya!'];

greetings.pop();
```

`greetings` teria o valor `['whats up?', 'hello']`.

```js
greetings.shift();
```

`greetings` teria o valor `['hello']`.

Nós também podemos retornar o valor do elemento removido com qualquer método dessa forma:

```js
let popped = greetings.pop();
```

`greetings` teria o valor `[]` e `popped` teria o valor `hello`.

# --instructions--

Nós definimos uma função, `popShift`, a qual recebe um array como argumento e retorna um novo array. Modifique a função, usando `pop()` e `shift()`, para remover o primeiro e o último elemento do array passado como argumento, e atribua os valores removidos para suas variáveis correspondentes, para que o array retornado contenha seus valores.

# --hints--

`popShift(["challenge", "is", "not", "complete"])` deve retornar `["challenge", "complete"]`

```js
assert.deepEqual(popShift(['challenge', 'is', 'not', 'complete']), [
  'challenge',
  'complete'
]);
```

A função `popShift` deve utilizar o método `pop()`

```js
assert.notStrictEqual(popShift.toString().search(/\.pop\(/), -1);
```

A função `popShift` deve utilizar o método `shift()`

```js
assert.notStrictEqual(popShift.toString().search(/\.shift\(/), -1);
```

# --seed--

## --seed-contents--

```js
function popShift(arr) {
  let popped; // Change this line
  let shifted; // Change this line
  return [shifted, popped];
}

console.log(popShift(['challenge', 'is', 'not', 'complete']));
```

# --solutions--

```js
function popShift(arr) {
  let popped = arr.pop(); // Change this line
  let shifted = arr.shift(); // Change this line
  return [shifted, popped];
}
```

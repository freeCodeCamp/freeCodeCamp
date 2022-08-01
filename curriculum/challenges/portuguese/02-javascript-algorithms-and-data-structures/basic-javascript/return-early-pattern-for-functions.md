---
id: 56533eb9ac21ba0edf2244c4
title: Retornar o padrão inicial para funções
challengeType: 1
videoUrl: 'https://scrimba.com/c/cQe39Sq'
forumTopicId: 18272
dashedName: return-early-pattern-for-functions
---

# --description--

Quando uma instrução `return` é alcançada, a execução da função atual para e retorna o código para o local da chamada da função.

**Exemplo**

```js
function myFun() {
  console.log("Hello");
  return "World";
  console.log("byebye")
}
myFun();
```

O código acima exibirá no console a string `Hello`, e retorna a string `World`. A string `byebye` nunca vai ser exibida no console, porque a função termina na instrução `return`.

# --instructions--

Modifique a função `abTest` para que se `a` ou `b` forem menores que `0` a função irá imediatamente terminar retornando o valor de `undefined`.

**Dica**  
Lembre-se de que <a href="https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/understanding-uninitialized-variables" target="_blank" rel="noopener noreferrer nofollow"><code>undefined</code> é uma palavra-chave</a> e não uma string.

# --hints--

`abTest(2, 2)` deve retornar um número

```js
assert(typeof abTest(2, 2) === 'number');
```

`abTest(2, 2)` deve retornar `8`

```js
assert(abTest(2, 2) === 8);
```

`abTest(-2, 2)` deve retornar `undefined`

```js
assert(abTest(-2, 2) === undefined);
```

`abTest(2, -2)` deve retornar `undefined`

```js
assert(abTest(2, -2) === undefined);
```

`abTest(2, 8)` deve retornar `18`

```js
assert(abTest(2, 8) === 18);
```

`abTest(3, 3)` deve retornar `12`

```js
assert(abTest(3, 3) === 12);
```

`abTest(0, 0)` deve retornar `0`

```js
assert(abTest(0, 0) === 0);
```

# --seed--

## --seed-contents--

```js
// Setup
function abTest(a, b) {
  // Only change code below this line



  // Only change code above this line

  return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
}

abTest(2,2);
```

# --solutions--

```js
function abTest(a, b) {
  if(a < 0 || b < 0) {
    return undefined;
  }
  return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
}
```

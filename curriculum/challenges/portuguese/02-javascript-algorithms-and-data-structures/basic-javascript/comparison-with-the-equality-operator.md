---
id: 56533eb9ac21ba0edf2244d0
title: Comparar com o operador de igualdade
challengeType: 1
videoUrl: 'https://scrimba.com/c/cKyVMAL'
forumTopicId: 16784
dashedName: comparison-with-the-equality-operator
---

# --description--

Há muitos <dfn>operadores de comparação</dfn> em JavaScript. Todos esses operadores retornam um valor booleano `true` ou `false`.

O operador mais básico é o operador de igualdade `==`. O operador de igualdade compara dois valores e retorna `true` se eles são equivalentes ou `false` se não são. Observe que o operador de igualdade é diferente do operador de atribuição (`=`), que atribui o valor à direita do operador para uma variável à esquerda.

```js
function equalityTest(myVal) {
  if (myVal == 10) {
    return "Equal";
  }
  return "Not Equal";
}
```

Se `myVal` é igual a `10`, o operador de igualdade retorna `true`, assim o código nas chaves será executado e a função retornará `Equal`. Caso contrário, a função retornará `Not Equal`. Para que o JavaScript possa comparar dois <dfn>tipos de dados</dfn> diferentes (por exemplo, `numbers` e `strings`), deve converter um tipo para outro. Isto é conhecido como coerção de tipo (casting ou type coercion). No entanto, uma vez que a faça, você pode comparar os termos da seguinte forma:

```js
1   ==  1  // true
1   ==  2  // false
1   == '1' // true
"3" ==  3  // true
```

# --instructions--

Adicione o operador de igualdade à linha indicada para que a função retorne a string `Equal` quando `val` for equivalente a `12`.

# --hints--

`testEqual(10)` deve retornar a string `Not Equal`

```js
assert(testEqual(10) === 'Not Equal');
```

`testEqual(12)` deve retornar a string `Equal`

```js
assert(testEqual(12) === 'Equal');
```

`testEqual("12")` deve retornar a string `Equal`

```js
assert(testEqual('12') === 'Equal');
```

Você deve utilizar o operador `==`

```js
assert(code.match(/==/g) && !code.match(/===/g));
```

# --seed--

## --seed-contents--

```js
// Setup
function testEqual(val) {
  if (val) { // Change this line
    return "Equal";
  }
  return "Not Equal";
}

testEqual(10);
```

# --solutions--

```js
function testEqual(val) {
  if (val == 12) {
    return "Equal";
  }
  return "Not Equal";
}
```

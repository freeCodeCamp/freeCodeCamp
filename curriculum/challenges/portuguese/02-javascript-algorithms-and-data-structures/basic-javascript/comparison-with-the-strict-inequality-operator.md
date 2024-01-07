---
id: 56533eb9ac21ba0edf2244d3
title: Comparar com o operador de desigualdade estrita
challengeType: 1
videoUrl: 'https://scrimba.com/c/cKekkUy'
forumTopicId: 16791
dashedName: comparison-with-the-strict-inequality-operator
---

# --description--

O operador de desigualdade estrito (`!==`) é o oposto lógico do operador de igualdade estrito. Significa que "não é estritamente igual" e retorna `false` onde a igualdade estrita retornaria `true` e *vice-versa*. O operador de desigualdade estrita não converterá tipos de dados.

**Exemplos**

```js
3 !==  3  // false
3 !== '3' // true
4 !==  3  // true
```

# --instructions--

Adicione o operador de desigualdade estrita ao comando `if` para que a função retorne a string `Not Equal` quando `val` não é estritamente igual a `17`

# --hints--

`testStrictNotEqual(17)` deve retornar a string `Equal`

```js
assert(testStrictNotEqual(17) === 'Equal');
```

`testStrictNotEqual("17")` deve retornar a string `Not Equal`

```js
assert(testStrictNotEqual('17') === 'Not Equal');
```

`testStrictNotEqual(12)` deve retornar a string `Not Equal`

```js
assert(testStrictNotEqual(12) === 'Not Equal');
```

`testStrictNotEqual("bob")` deve retornar a string `Not Equal`

```js
assert(testStrictNotEqual('bob') === 'Not Equal');
```

Você deve usar o operador `!==`

```js
assert(code.match(/(val\s*!==\s*\d+)|(\d+\s*!==\s*val)/g).length > 0);
```

# --seed--

## --seed-contents--

```js
// Setup
function testStrictNotEqual(val) {
  if (val) { // Change this line
    return "Not Equal";
  }
  return "Equal";
}

testStrictNotEqual(10);
```

# --solutions--

```js
function testStrictNotEqual(val) {
  if (val !== 17) {
    return "Not Equal";
  }
  return "Equal";
}
```

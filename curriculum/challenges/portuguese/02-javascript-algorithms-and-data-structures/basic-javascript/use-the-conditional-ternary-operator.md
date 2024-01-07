---
id: 587d7b7e367417b2b2512b24
title: Usar o operador condicional (ternário)
challengeType: 1
forumTopicId: 301181
dashedName: use-the-conditional-ternary-operator
---

# --description--

O <dfn>operador condicional</dfn>, também chamado de <dfn>operador ternário</dfn>, pode ser usado como uma expressão if-else de uma linha.

A sintaxe é `a ? b : c`, onde `a` é a condição, `b` é o código executado quando a condição retorna `true` e `c` é o código executado quando a condição retorna `false`.

A função a seguir usa a instrução `if/else` para verificar uma condição:

```js
function findGreater(a, b) {
  if(a > b) {
    return "a is greater";
  }
  else {
    return "b is greater or equal";
  }
}
```

Isto pode ser reescrito usando o operador condicional:

```js
function findGreater(a, b) {
  return a > b ? "a is greater" : "b is greater or equal";
}
```

# --instructions--

Use o operador condicional na função `checkEqual` para verificar se dois números são iguais ou não. A função deve retornar ou a string `Equal` ou a string `Not Equal`.

# --hints--

`checkEqual` deve usar o operador condicional

```js
assert(/.+?\s*?\?\s*?.+?\s*?:\s*?.+?/.test(code));
```

`checkEqual(1, 2)` deve retornar a string `Not Equal`

```js
assert(checkEqual(1, 2) === 'Not Equal');
```

`checkEqual(1, 1)` deve retornar a string `Equal`

```js
assert(checkEqual(1, 1) === 'Equal');
```

`checkEqual(1, -1)` deve retornar a string `Not Equal`

```js
assert(checkEqual(1, -1) === 'Not Equal');
```

# --seed--

## --seed-contents--

```js
function checkEqual(a, b) {

}

checkEqual(1, 2);
```

# --solutions--

```js
function checkEqual(a, b) {
  return a === b ? "Equal" : "Not Equal";
}
```

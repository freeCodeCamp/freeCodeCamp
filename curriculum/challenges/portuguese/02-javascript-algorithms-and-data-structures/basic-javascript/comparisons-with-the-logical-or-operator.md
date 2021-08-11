---
id: 56533eb9ac21ba0edf2244d9
title: Comparar com o operador lógico OR
challengeType: 1
videoUrl: 'https://scrimba.com/c/cEPrGTN'
forumTopicId: 16800
dashedName: comparisons-with-the-logical-or-operator
---

# --description--

O <dfn>operador lógico OR</dfn> (`||`) retorna `true` se qualquer um dos <dfn>operandos</dfn> for `true`. Caso contrário, retorna `false`.

O <dfn>operador lógico ou</dfn> é composto por dois símbolos de pipe: (`||`). Normalmente, ele pode ser encontrado entre as teclas Backspace e Enter.

O padrão abaixo deve parecer familiar aos pontos das passagens anteriores:

```js
if (num > 10) {
  return "No";
}
if (num < 5) {
  return "No";
}
return "Yes";
```

retornará `Yes` apenas se `num` for entre `5` e `10` (5 e 10 incluídos). A mesma lógica pode ser escrita assim:

```js
if (num > 10 || num < 5) {
  return "No";
}
return "Yes";
```

# --instructions--

Combine as duas instruções `if` em uma mesma instrução a qual retorna a string `Outside` se `val` não estiver entre `10` e `20`, inclusos 10 e 20. Caso contrário, retorna a string `Inside`.

# --hints--

Você deve usar o operador `||` uma vez

```js
assert(code.match(/\|\|/g).length === 1);
```

Você deve ter apenas uma instrução `if`

```js
assert(code.match(/if/g).length === 1);
```

`testLogicalOr(0)` deve retornar a string `Outside`

```js
assert(testLogicalOr(0) === 'Outside');
```

`testLogicalOr(9)` deve retornar a string `Outside`

```js
assert(testLogicalOr(9) === 'Outside');
```

`testLogicalOr(10)` deve retornar a string `Inside`

```js
assert(testLogicalOr(10) === 'Inside');
```

`testLogicalOr(15)` deve retornar a string `Inside`

```js
assert(testLogicalOr(15) === 'Inside');
```

`testLogicalOr(19)` deve retornar a string `Inside`

```js
assert(testLogicalOr(19) === 'Inside');
```

`testLogicalOr(20)` deve retornar a string `Inside`

```js
assert(testLogicalOr(20) === 'Inside');
```

`testLogicalOr(21)` deve retornar a string `Outside`

```js
assert(testLogicalOr(21) === 'Outside');
```

`testLogicalOr(25)` deve retornar a string `Outside`

```js
assert(testLogicalOr(25) === 'Outside');
```

# --seed--

## --seed-contents--

```js
function testLogicalOr(val) {
  // Only change code below this line

  if (val) {
    return "Outside";
  }

  if (val) {
    return "Outside";
  }

  // Only change code above this line
  return "Inside";
}

testLogicalOr(15);
```

# --solutions--

```js
function testLogicalOr(val) {
  if (val < 10 || val > 20) {
    return "Outside";
  }
  return "Inside";
}
```

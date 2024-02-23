---
id: 5690307fddb111c6084545d7
title: Usar a ordem lógica em instruções if else
challengeType: 1
videoUrl: 'https://scrimba.com/c/cwNvMUV'
forumTopicId: 18228
dashedName: logical-order-in-if-else-statements
---

# --description--

A ordem é importante em instruções `if` e `else if`.

A função é executada de cima para baixo, então você deve ser cuidadoso com qual instrução vem primeiro.

Tomemos como exemplo estas duas funções.

Aqui está a primeira:

```js
function foo(x) {
  if (x < 1) {
    return "Less than one";
  } else if (x < 2) {
    return "Less than two";
  } else {
    return "Greater than or equal to two";
  }
}
```

A segunda apenas altera a ordem das instruções if e else if:

```js
function bar(x) {
  if (x < 2) {
    return "Less than two";
  } else if (x < 1) {
    return "Less than one";
  } else {
    return "Greater than or equal to two";
  }
}
```

Embora as duas funções pareçam praticamente idênticas, se passarmos um número para ambas, teremos saídas diferentes.

```js
foo(0)
bar(0)
```

`foo(0)` retornará a string `Less than one` e `bar(0)` retornará a string `Less than two`.

# --instructions--

Altere a ordem lógica na função para que retorne as instruções corretas em todos os cenários.

# --hints--

`orderMyLogic(4)` deve retornar a string `Less than 5`

```js
assert(orderMyLogic(4) === 'Less than 5');
```

`orderMyLogic(6)` deve retornar a string `Less than 10`

```js
assert(orderMyLogic(6) === 'Less than 10');
```

`orderMyLogic(11)` deve retornar a string `Greater than or equal to 10`

```js
assert(orderMyLogic(11) === 'Greater than or equal to 10');
```

# --seed--

## --seed-contents--

```js
function orderMyLogic(val) {
  if (val < 10) {
    return "Less than 10";
  } else if (val < 5) {
    return "Less than 5";
  } else {
    return "Greater than or equal to 10";
  }
}

orderMyLogic(7);
```

# --solutions--

```js
function orderMyLogic(val) {
  if(val < 5) {
    return "Less than 5";
  } else if (val < 10) {
    return "Less than 10";
  } else {
    return "Greater than or equal to 10";
  }
}
```

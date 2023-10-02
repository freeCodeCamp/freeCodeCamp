---
id: 587d7b7e367417b2b2512b21
title: Usa múltiples operadores condicionales (ternarios)
challengeType: 1
videoUrl: 'https://scrimba.com/c/cyWJBT4'
forumTopicId: 301179
dashedName: use-multiple-conditional-ternary-operators
---

# --description--

En el desafío anterior, usaste un único operador condicional. También puedes encadenarlos para comprobar múltiples condiciones.

La siguiente función utiliza sentencias `if`, `else if`, y `else` para comprobar múltiples condiciones:

```js
function findGreaterOrEqual(a, b) {
  if (a === b) {
    return "a and b are equal";
  }
  else if (a > b) {
    return "a is greater";
  }
  else {
    return "b is greater";
  }
}
```

La función anterior puede ser reescrita utilizando múltiples operadores condicionales:

```js
function findGreaterOrEqual(a, b) {
  return (a === b) ? "a and b are equal" 
    : (a > b) ? "a is greater" 
    : "b is greater";
}
```

Se considera buena práctica dar formato a múltiples operadores condicionales de forma que cada condición esté en una línea separada, como se muestra arriba. Usar múltiples operadores condicionales sin una indentación adecuada puede hacer tu código difícil de leer. Por ejemplo:

```js
function findGreaterOrEqual(a, b) {
  return (a === b) ? "a and b are equal" : (a > b) ? "a is greater" : "b is greater";
}
```

# --instructions--

En la función `checkSign`, usa múltiples operadores condicionales (siguiendo el formato recomendado usado en `findGreaterOrEqual`) para comprobar si un número es positivo, negativo o cero. La función debe devolver `positive`, `negative` o `zero`.

# --hints--

`checkSign` debe utilizar múltiples operadores condicionales

```js
assert(/.+?\s*?\?\s*?.+?\s*?:\s*?.+?\s*?\?\s*?.+?\s*?:\s*?.+?/gi.test(code));
```

`checkSign(10)` debe devolver la cadena `positive`. Ten en cuenta que la capitalización importa

```js
assert(checkSign(10) === 'positive');
```

`checkSign(-12)` debe devolver la cadena `negative`. Ten en cuenta que la capitalización importa

```js
assert(checkSign(-12) === 'negative');
```

`checkSign(0)` debe devolver la cadena `zero`. Ten en cuenta que la capitalización importa

```js
assert(checkSign(0) === 'zero');
```

# --seed--

## --seed-contents--

```js
function checkSign(num) {

}

checkSign(10);
```

# --solutions--

```js
function checkSign(num) {
  return (num > 0) ? 'positive' : (num < 0) ? 'negative' : 'zero';
}
```

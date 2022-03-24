---
id: 56533eb9ac21ba0edf2244b3
title: Converter Celsius para Fahrenheit
challengeType: 1
forumTopicId: 16806
dashedName: convert-celsius-to-fahrenheit
---

# --description--

A fórmula para converter de Celsius para Fahrenheit é a temperatura em Celsius vezes `9/5`, mais `32`.

Você tem uma variável `celsius` representando uma temperatura em Celsius. Use a variável `fahrenheit` já definida e atribua a ela a temperatura equivalente à temperatura Celsius indicada. Use a fórmula mencionada acima para ajudar a converter a temperatura em Celsius para Fahrenheit.

# --hints--

`convertToF(0)` deve retornar um número

```js
assert(typeof convertToF(0) === 'number');
```

`convertToF(-30)` deve retornar um valor de `-22`

```js
assert(convertToF(-30) === -22);
```

`convertToF(-10)` deve retornar um valor de `14`

```js
assert(convertToF(-10) === 14);
```

`convertToF(0)` deve retornar um valor de `32`

```js
assert(convertToF(0) === 32);
```

`convertToF(20)` deve retornar um valor de `68`

```js
assert(convertToF(20) === 68);
```

`convertToF(30)` deve retornar um valor de `86`

```js
assert(convertToF(30) === 86);
```

# --seed--

## --seed-contents--

```js
function convertToF(celsius) {
  let fahrenheit;
  return fahrenheit;
}

convertToF(30);
```

# --solutions--

```js
function convertToF(celsius) {
  let fahrenheit = celsius * 9/5 + 32;

  return fahrenheit;
}

convertToF(30);
```

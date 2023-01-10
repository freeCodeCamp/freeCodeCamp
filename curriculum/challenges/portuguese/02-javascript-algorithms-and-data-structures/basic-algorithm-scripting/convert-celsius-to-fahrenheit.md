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

`convertCtoF(0)` deve retornar um número

```js
assert(typeof convertCtoF(0) === 'number');
```

`convertCtoF(-30)` deve retornar um valor de `-22`

```js
assert(convertCtoF(-30) === -22);
```

`convertCtoF(-10)` deve retornar um valor de `14`

```js
assert(convertCtoF(-10) === 14);
```

`convertCtoF(0)` deve retornar um valor de `32`

```js
assert(convertCtoF(0) === 32);
```

`convertCtoF(20)` deve retornar um valor de `68`

```js
assert(convertCtoF(20) === 68);
```

`convertCtoF(30)` deve retornar um valor de `86`

```js
assert(convertCtoF(30) === 86);
```

# --seed--

## --seed-contents--

```js
function convertCtoF(celsius) {
  let fahrenheit;
  return fahrenheit;
}

convertCtoF(30);
```

# --solutions--

```js
function convertCtoF(celsius) {
  let fahrenheit = celsius * 9/5 + 32;
  return fahrenheit;
}

convertCtoF(30);
```

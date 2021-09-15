---
id: 587d7b7a367417b2b2512b12
title: Copiar itens de um array usando slice()
challengeType: 1
forumTopicId: 301158
dashedName: copy-array-items-using-slice
---

# --description--

O próximo método que abordaremos é `slice()`. Em vez de modificar um array, `slice()` copia ou *extrai* um determinado número de elementos para um novo array, deixando o array em que o método é chamado inalterado. `slice()` recebe apenas 2 parâmetros — o primeiro é o índice aonde começar a extração e o segundo é o índice no qual parar a extração (a extração ocorrerá até esse índice mas não o incluirá). Considere isto:

```js
let weatherConditions = ['rain', 'snow', 'sleet', 'hail', 'clear'];

let todaysWeather = weatherConditions.slice(1, 3);
```

`todaysWeather` teria o valor `['snow', 'sleet']`, enquanto `weatherConditions` ainda teria `['rain', 'snow', 'sleet', 'hail', 'clear']`.

Assim, criamos um novo array extraindo elementos de um array existente.

# --instructions--

Definimos uma função, `forecast`, que recebe um array como argumento. Modifique a função usando `slice()` para extrair a informação do array passado como argumento e retorne um novo array contendo os elementos strings `warm` e `sunny`.

# --hints--

`forecast` deve retornar `["warm", "sunny"]`

```js
assert.deepEqual(
  forecast(['cold', 'rainy', 'warm', 'sunny', 'cool', 'thunderstorms']),
  ['warm', 'sunny']
);
```

A função `forecast` deve usar o método `slice()`

```js
assert(/\.slice\(/.test(code));
```

# --seed--

## --seed-contents--

```js
function forecast(arr) {
  // Only change code below this line

  return arr;
}

// Only change code above this line
console.log(forecast(['cold', 'rainy', 'warm', 'sunny', 'cool', 'thunderstorms']));
```

# --solutions--

```js
function forecast(arr) {
  return arr.slice(2,4);
}
```

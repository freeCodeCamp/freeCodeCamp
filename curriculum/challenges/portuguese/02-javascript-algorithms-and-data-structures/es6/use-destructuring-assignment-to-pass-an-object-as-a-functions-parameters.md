---
id: 587d7b8a367417b2b2512b4d
title: Usar atribuição de desestruturação para passar um objeto como parâmetro de uma função
challengeType: 1
forumTopicId: 301217
dashedName: use-destructuring-assignment-to-pass-an-object-as-a-functions-parameters
---

# --description--

Em alguns casos, você pode desestruturar um objeto no próprio argumento da função.

Considere o código abaixo:

```js
const profileUpdate = (profileData) => {
  const { name, age, nationality, location } = profileData;

}
```

Isso desestrutura efetivamente o objeto enviado para a função. Isso também pode ser feito no lugar:

```js
const profileUpdate = ({ name, age, nationality, location }) => {

}
```

Quando `profileData` é passado para a função acima, os valores são desestruturados do parâmetro da função para ser usado dentro da função.

# --instructions--

Use atribuição de desestruturação dentro do argumento para a função `half` para enviar apenas `max` e `min` para dentro da função.

# --hints--

`stats` deve ser um `object`.

```js
assert(typeof stats === 'object');
```

`half(stats)` deve ser `28.015`

```js
assert(half(stats) === 28.015);
```

Desestruturação deve ser usado.

```js
assert(__helpers.removeWhiteSpace(code).match(/half=\({\w+,\w+}\)/));
```

O parâmetro desestruturado deve ser usado.

```js
assert(!code.match(/stats\.max|stats\.min/));
```

# --seed--

## --seed-contents--

```js
const stats = {
  max: 56.78,
  standard_deviation: 4.34,
  median: 34.54,
  mode: 23.87,
  min: -0.75,
  average: 35.85
};

// Only change code below this line
const half = (stats) => (stats.max + stats.min) / 2.0; 
// Only change code above this line
```

# --solutions--

```js
const stats = {
  max: 56.78,
  standard_deviation: 4.34,
  median: 34.54,
  mode: 23.87,
  min: -0.75,
  average: 35.85
};

const half = ( {max, min} ) => (max + min) / 2.0;
```

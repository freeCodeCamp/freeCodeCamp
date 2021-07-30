---
id: 587d7b8a367417b2b2512b4f
title: Escrever declarações literais de objetos concisas usando a forma abreviada de propriedade de objeto
challengeType: 1
forumTopicId: 301225
dashedName: write-concise-object-literal-declarations-using-object-property-shorthand
---

# --description--

ES6 adiciona alguns suportes legais para facilmente definir literais de objetos.

Considere o seguinte código:

```js
const getMousePosition = (x, y) => ({
  x: x,
  y: y
});
```

`getMousePosition` é uma função simples que retorna um objeto contendo duas propriedades. ES6 fornece o açúcar sintático para eliminar a redundância de ter de escrever `x: x`. Você pode simplesmente escrever `x` uma vez, e será convertido para `x: x` (ou algo equivalente). Aqui está a mesma função que acima rescrita para usar a nova sintaxe:

```js
const getMousePosition = (x, y) => ({ x, y });
```

# --instructions--

Use a abreviação de propriedade de objeto com literais de objeto para criar e retornar um objeto com as propriedades `name`, `age` e `gender`.

# --hints--

`createPerson("Zodiac Hasbro", 56, "male")` deve retornar `{name: "Zodiac Hasbro", age: 56, gender: "male"}`.

```js
assert.deepEqual(
  { name: 'Zodiac Hasbro', age: 56, gender: 'male' },
  createPerson('Zodiac Hasbro', 56, 'male')
);
```

O código deve usar `key:value`.

```js
(getUserInput) => assert(!getUserInput('index').match(/:/g));
```

# --seed--

## --seed-contents--

```js
const createPerson = (name, age, gender) => {
  // Only change code below this line
  return {
    name: name,
    age: age,
    gender: gender
  };
  // Only change code above this line
};
```

# --solutions--

```js
const createPerson = (name, age, gender) => {
  return {
    name,
    age,
    gender
  };
};
```

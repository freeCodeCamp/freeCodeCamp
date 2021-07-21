---
id: 56bbb991ad1ed5201cd392d0
title: Criar objetos JavaScript
challengeType: 1
videoUrl: 'https://scrimba.com/c/cWGkbtd'
forumTopicId: 16769
dashedName: build-javascript-objects
---

# --description--

Você talvez tenha ouvido o termo `objeto` antes.

Objetos são similares a `arrays`, exceto que, ao invés de usar índices para acessar e modificar seus dados, você acessa os dados em objetos através do que se chama `propriedades`.

Objetos são úteis para armazenar dados de forma estruturada e podem representar objetos do mundo real, como um gato.

Aqui está um exemplo de objeto gato:

```js
var cat = {
  "name": "Whiskers",
  "legs": 4,
  "tails": 1,
  "enemies": ["Water", "Dogs"]
};
```

Neste exemplo, todas as propriedades são armazenadas como strings, como - `name`, `legs`e `tails`. Porém, você também pode usar números como propriedades. Você pode até omitir as aspas para propriedades de string com uma única palavra, da seguinte forma:

```js
var anotherObject = {
  make: "Ford",
  5: "five",
  "model": "focus"
};
```

No entanto, se seu objeto tem quaisquer propriedades que não seja string, o JavaScript irá automaticamente definir seus tipos como strings.

# --instructions--

Faça um objeto que representa um cachorro chamado `myDog` que contém as propriedades `name` (uma string), `legs`, `tails` e `friends`.

Você pode definir essas propriedades do objeto para os valores que deseja, contanto que `name` seja uma string, `legs` e `tails` são números, e `friends` é um array.

# --hints--

`myDog` deve conter a propriedade `name` e deve ser uma `string`.

```js
assert(
  (function (z) {
    if (
      z.hasOwnProperty('name') &&
      z.name !== undefined &&
      typeof z.name === 'string'
    ) {
      return true;
    } else {
      return false;
    }
  })(myDog)
);
```

`myDog` deve conter a propriedade `name` e deve ser uma `string`.

```js
assert(
  (function (z) {
    if (
      z.hasOwnProperty('legs') &&
      z.legs !== undefined &&
      typeof z.legs === 'number'
    ) {
      return true;
    } else {
      return false;
    }
  })(myDog)
);
```

`myDog` deve conter a propriedade `tails` e deve ser um `número`.

```js
assert(
  (function (z) {
    if (
      z.hasOwnProperty('tails') &&
      z.tails !== undefined &&
      typeof z.tails === 'number'
    ) {
      return true;
    } else {
      return false;
    }
  })(myDog)
);
```

`myDog` deve conter a propriedade `friends` e deve ser um `array`.

```js
assert(
  (function (z) {
    if (
      z.hasOwnProperty('friends') &&
      z.friends !== undefined &&
      Array.isArray(z.friends)
    ) {
      return true;
    } else {
      return false;
    }
  })(myDog)
);
```

`myDog` deve conter apenas todas as propriedades fornecidas.

```js
assert(
  (function (z) {
    return Object.keys(z).length === 4;
  })(myDog)
);
```

# --seed--

## --after-user-code--

```js
(function(z){return z;})(myDog);
```

## --seed-contents--

```js
var myDog = {
// Only change code below this line


// Only change code above this line
};
```

# --solutions--

```js
var myDog = {
  "name": "Camper",
  "legs": 4,
  "tails": 1,
  "friends": ["everything!"]
};
```

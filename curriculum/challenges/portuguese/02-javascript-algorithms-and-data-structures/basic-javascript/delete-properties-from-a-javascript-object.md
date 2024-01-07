---
id: 56bbb991ad1ed5201cd392d3
title: Excluir propriedades de um objeto JavaScript
challengeType: 1
videoUrl: 'https://scrimba.com/c/cDqKdTv'
forumTopicId: 17560
dashedName: delete-properties-from-a-javascript-object
---

# --description--

Podemos também excluir propriedades de objetos dessa forma:

```js
delete ourDog.bark;
```

Exemplo:

```js
const ourDog = {
  "name": "Camper",
  "legs": 4,
  "tails": 1,
  "friends": ["everything!"],
  "bark": "bow-wow"
};

delete ourDog.bark;
```

Após a última linha mostrada acima, `ourDog` se parece com:

```js
{
  "name": "Camper",
  "legs": 4,
  "tails": 1,
  "friends": ["everything!"]
}
```

# --instructions--

Exclua a propriedade `tails` de `myDog`. Você pode usar tanto notação de ponto quanto notação de colchetes.

# --hints--

Você deve excluir a propriedade `tails` de `myDog`.

```js
assert(typeof myDog === 'object' && myDog.tails === undefined);
```

Você não deve modificar a configuração de `myDog`.

```js
assert(code.match(/"tails": 1/g).length > 0);
```

# --seed--

## --after-user-code--

```js
(function(z){return z;})(myDog);
```

## --seed-contents--

```js
// Setup
const myDog = {
  "name": "Happy Coder",
  "legs": 4,
  "tails": 1,
  "friends": ["freeCodeCamp Campers"],
  "bark": "woof"
};

// Only change code below this line

```

# --solutions--

```js
const myDog = {
  "name": "Happy Coder",
  "legs": 4,
  "tails": 1,
  "friends": ["freeCodeCamp Campers"],
  "bark": "woof"
};
delete myDog.tails;
```

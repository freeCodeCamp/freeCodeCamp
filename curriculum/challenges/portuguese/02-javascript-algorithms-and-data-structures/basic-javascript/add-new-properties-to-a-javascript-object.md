---
id: 56bbb991ad1ed5201cd392d2
title: Adicionar novas propriedades para um objeto JavaScript
challengeType: 1
videoUrl: 'https://scrimba.com/c/cQe38UD'
forumTopicId: 301169
dashedName: add-new-properties-to-a-javascript-object
---

# --description--

Você pode adicionar novas propriedades para um objeto JavaScript existente da mesma forma pela qual você os modificaria.

Aqui está como adicionaríamos uma propriedade `bark` para `ourDog`:

```js
ourDog.bark = "bow-wow";
```

ou

```js
ourDog["bark"] = "bow-wow";
```

Agora, quando acessamos `ourDog.bark`, nós teremos o seu latido, `bow-wow`.

Exemplo:

```js
const ourDog = {
  "name": "Camper",
  "legs": 4,
  "tails": 1,
  "friends": ["everything!"]
};

ourDog.bark = "bow-wow";
```

# --instructions--

Adicione a propriedade `bark` para `myDog` e defina-a para um som de um cachorro, como "woof". Você pode usar tanto notação de ponto quando de colchetes.

# --hints--

Você deve adicionar a propriedade `bark` para `myDog`.

```js
assert(myDog.bark !== undefined);
```

Você não deve adicionar `bark` na inicialização de `myDog`.

```js
assert(!/bark[^\n]:/.test(code));
```

# --seed--

## --after-user-code--

```js
(function(z){return z;})(myDog);
```

## --seed-contents--

```js
const myDog = {
  "name": "Happy Coder",
  "legs": 4,
  "tails": 1,
  "friends": ["freeCodeCamp Campers"]
};


```

# --solutions--

```js
const myDog = {
  "name": "Happy Coder",
  "legs": 4,
  "tails": 1,
  "friends": ["freeCodeCamp Campers"]
};
myDog.bark = "Woof Woof";
```

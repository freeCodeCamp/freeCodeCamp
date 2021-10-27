---
id: 56bbb991ad1ed5201cd392d1
title: Atualizar propriedades do objeto
challengeType: 1
videoUrl: 'https://scrimba.com/c/c9yEJT4'
forumTopicId: 18336
dashedName: updating-object-properties
---

# --description--

Depois de criar um objeto JavaScript, você pode atualizar suas propriedades a qualquer momento, como você atualizaria qualquer outra variável. Você pode usar notação de ponto ou colchete para atualizar.

Por exemplo, vamos dar uma olhada em `ourDog`:

```js
const ourDog = {
  "name": "Camper",
  "legs": 4,
  "tails": 1,
  "friends": ["everything!"]
};
```

Como ele é um cachorro particularmente feliz, vamos mudar seu nome para o texto `Happy Camper`. Veja como atualizamos a propriedade name do objeto: `ourDog.name = "Happy Camper";` ou `ourDog["name"] = "Happy Camper";` Agora, quando avaliamos `ourDog.name`, em vez de obter `Camper`, teremos seu novo nome, `Happy Camper`.

# --instructions--

Atualize a propriedade name do objeto `myDog`. Vamos alterar o valor da propriedade name dele de `Coder` para `Happy Coder`. Você pode usar notação de ponto ou de colchetes.

# --hints--

Você deve atualizar a propriedade `name` de `myDog` para ser igual a `Happy Coder`.

```js
assert(/happy coder/gi.test(myDog.name));
```

Você não deve editar a definição de `myDog`.

```js
assert(/"name": "Coder"/.test(code));
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
  "name": "Coder",
  "legs": 4,
  "tails": 1,
  "friends": ["freeCodeCamp Campers"]
};

// Only change code below this line

```

# --solutions--

```js
const myDog = {
  "name": "Coder",
  "legs": 4,
  "tails": 1,
  "friends": ["freeCodeCamp Campers"]
};
myDog.name = "Happy Coder";
```

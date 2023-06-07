---
id: 587d7db2367417b2b2512b89
title: Usar um mixin para adicionar comportamentos comuns entre objetos não relacionados
challengeType: 1
forumTopicId: 301331
dashedName: use-a-mixin-to-add-common-behavior-between-unrelated-objects
---

# --description--

Como você já viu, comportamento é compartilhado através de herança. Porém, existem casos em que a herança não é a melhor solução. Herança não funciona muito bem para objetos não-relacionados como `Bird` e `Airplane`. Ambos podem voar, mas um `Bird` não é um tipo de `Airplane` e vice-versa.

Para objetos não relacionados, é melhor usar <dfn>mixins</dfn>. Um mixin permite outros objetos para utilizar uma coleção de funções.

```js
let flyMixin = function(obj) {
  obj.fly = function() {
    console.log("Flying, wooosh!");
  }
};
```

O `flyMixin` recebe qualquer objeto e dá a ele o método `fly`.

```js
let bird = {
  name: "Donald",
  numLegs: 2
};

let plane = {
  model: "777",
  numPassengers: 524
};

flyMixin(bird);
flyMixin(plane);
```

Aqui `bird` e `plane` são passados para `flyMixin`, o que em seguida atribui a função `fly` para cada objeto. Agora `bird` e `plane` podem ambos voar:

```js
bird.fly();
plane.fly();
```

O console irá mostrar a string `Flying, woosh!` duas vezes, uma para cada chamada a `.fly()`.

Note como o mixin permite que o mesmo método `fly` seja reutilizado por objetos não-relacionados `bird` e `plane`.

# --instructions--

Crie um mixin chamado `glideMixin` que define o método chamado `glide`. Em seguida, use `glideMixin` para dar ambos `bird` e `boat` a habilidade de deslizar (glide).

# --hints--

O código deve declarar a variável `glideMixin`, a qual é uma função.

```js
assert(typeof glideMixin === 'function');
```

O código deve utilizar o `glideMixin` no objeto `bird` para dar ao objeto o método `glide`.

```js
assert(typeof bird.glide === 'function');
```

O código deve utilizar `glideMixin` no objeto `boat` para dar ao objeto o método `glide`.

```js
assert(typeof boat.glide === 'function');
```

# --seed--

## --seed-contents--

```js
let bird = {
  name: "Donald",
  numLegs: 2
};

let boat = {
  name: "Warrior",
  type: "race-boat"
};

// Only change code below this line
```

# --solutions--

```js
let bird = {
  name: "Donald",
  numLegs: 2
};

let boat = {
  name: "Warrior",
  type: "race-boat"
};
function glideMixin (obj) {
  obj.glide = () => 'Gliding!';
}

glideMixin(bird);
glideMixin(boat);
```

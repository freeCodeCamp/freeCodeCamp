---
id: 587d7db2367417b2b2512b89
title: Usare un Mixin per aggiungere un comportamento comune tra oggetti non correlati
challengeType: 1
forumTopicId: 301331
dashedName: use-a-mixin-to-add-common-behavior-between-unrelated-objects
---

# --description--

Come hai visto, il comportamento è condiviso attraverso l'ereditarietà. Tuttavia, ci sono casi in cui l'ereditarietà non è la soluzione migliore. L'ereditarietà non funziona bene per oggetti non correlati come `Bird` e `Airplane`. Entrambi possono volare, ma un `Bird` non è un tipo di `Airplane` e viceversa.

Per gli oggetti non correlati, è meglio utilizzare i <dfn>mixin</dfn>. Un mixin permette ad altri oggetti di utilizzare una raccolta di funzioni.

```js
let flyMixin = function(obj) {
  obj.fly = function() {
    console.log("Flying, wooosh!");
  }
};
```

`flyMixin` prende qualsiasi oggetto e gli dà il metodo `fly`.

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

Qui `bird` e `plane` sono passati a `flyMixin`, che assegna la funzione `fly` ad entrambi. Ora `bird` e `plane` possono entrambi volare:

```js
bird.fly();
plane.fly();
```

La console visualizzerà la stringa `Flying, wooosh!` due volte, una volta per ogni chiamata di `.fly()`.

Nota come il mixin permette di riutilizzare lo stesso metodo `fly` agli oggetti non correlati `bird` e `plane`.

# --instructions--

Crea un mixin chiamato `glideMixin` che definisce un metodo chiamato `glide`. Quindi usa il `glideMixin` per dare sia a `bird` che a `boat` la capacità di scivolare.

# --hints--

Il tuo codice dovrebbe dichiarare una variabile `glideMixin` che sia una funzione.

```js
assert(typeof glideMixin === 'function');
```

Il tuo codice dovrebbe utilizzare il `glideMixin` sull'oggetto `bird` per dargli il metodo `glide`.

```js
assert(typeof bird.glide === 'function');
```

Il tuo codice dovrebbe utilizzare il `glideMixin` sull'oggetto `boat` per dargli il metodo `glide`.

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

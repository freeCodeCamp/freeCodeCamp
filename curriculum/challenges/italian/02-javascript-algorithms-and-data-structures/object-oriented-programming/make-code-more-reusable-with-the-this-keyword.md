---
id: 587d7dad367417b2b2512b76
title: Rendere il codice più riutilizzabile con la parola chiave this
challengeType: 1
forumTopicId: 301321
dashedName: make-code-more-reusable-with-the-this-keyword
---

# --description--

L'ultima sfida ha introdotto un metodo nell'oggetto `duck`. Ha usato la notazione a punti `duck.name` per accedere al valore per la proprietà `name` all'interno dell'istruzione return:

```js
sayName: function() {return "The name of this duck is " + duck.name + ".";}
```

Anche se questo è un modo valido per accedere alla proprietà dell'oggetto, c'è una trappola... Se il nome della variabile cambia, anche qualsiasi porzione di programma che si riferisca al nome originale dovrebbe essere aggiornato. In una definizione dell'oggetto breve, questo non sarà un problema, ma se un oggetto ha molti riferimenti alle sue proprietà ci sarà una maggiore probabilità di errore.

Un modo per evitare questi problemi è con la parola chiave `this`:

```js
let duck = {
  name: "Aflac",
  numLegs: 2,
  sayName: function() {return "The name of this duck is " + this.name + ".";}
};
```

`this` è un concetto profondo, e l'esempio di cui sopra è solo un modo per usarlo. Nel contesto corrente, `this` si riferisce all'oggetto a cui il metodo è associato: `duck`. Se il nome dell'oggetto viene cambiato in `mallard`, non sarà necessario trovare tutti i riferimenti a `duck` nel codice. Questo rende il codice riutilizzabile e più facile da leggere.

# --instructions--

Modifica il metodo `dog.sayLegs` per rimuovere qualsiasi riferimento a `dog`. Usa l'esempio `duck` come guida.

# --hints--

`dog.sayLegs()` dovrebbe restituire la stringa data.

```js
assert(dog.sayLegs() === 'This dog has 4 legs.');
```

Il tuo codice dovrebbe utilizzare la parola chiave `this` per accedere alla proprietà `numLegs` di `dog`.

```js
assert(code.match(/this\.numLegs/g));
```

# --seed--

## --seed-contents--

```js
let dog = {
  name: "Spot",
  numLegs: 4,
  sayLegs: function() {return "This dog has " + dog.numLegs + " legs.";}
};

dog.sayLegs();
```

# --solutions--

```js
let dog = {
  name: "Spot",
  numLegs: 4,
  sayLegs () {
    return 'This dog has ' + this.numLegs + ' legs.';
  }
};

dog.sayLegs();
```

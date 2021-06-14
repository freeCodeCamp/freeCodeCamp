---
id: 587d7daf367417b2b2512b80
title: Impostare la proprietà Costruttore quando si cambia il prototipo
challengeType: 1
forumTopicId: 301323
dashedName: remember-to-set-the-constructor-property-when-changing-the-prototype
---

# --description--

C'è un effetto collaterale cruciale quando si imposta manualmente il prototipo su un nuovo oggetto. Questo cancella la proprietà `constructor`! Questa proprietà può essere utilizzata per verificare quale funzione costruttore ha creato l'istanza, ma poiché la proprietà è stata sovrascritta, ora dà come risultato false:

```js
duck.constructor === Bird;
duck.constructor === Object;
duck instanceof Bird;
```

Nell'ordine, queste espressioni restituiscono `false`,`true` e `true`.

Per risolvere questo problema, ogni volta che imposti manualmente un prototipo su un nuovo oggetto, ricorda di definire la proprietà `constructor`:

```js
Bird.prototype = {
  constructor: Bird,
  numLegs: 2,
  eat: function() {
    console.log("nom nom nom");
  },
  describe: function() {
    console.log("My name is " + this.name); 
  }
};
```

# --instructions--

Definisci la proprietà `constructor` sul `prototype` di `Dog`.

# --hints--

`Dog.prototype` dovrebbe impostare la proprietà `constructor`.

```js
assert(Dog.prototype.constructor === Dog);
```

# --seed--

## --seed-contents--

```js
function Dog(name) {
  this.name = name;
}

// Only change code below this line
Dog.prototype = {

  numLegs: 4,
  eat: function() {
    console.log("nom nom nom");
  },
  describe: function() {
    console.log("My name is " + this.name);
  }
};
```

# --solutions--

```js
function Dog(name) {
  this.name = name;
}
Dog.prototype = {
  constructor: Dog,
  numLegs: 4,
  eat: function() {
    console.log("nom nom nom");
  },
  describe: function() {
    console.log("My name is " + this.name);
  }
};
```

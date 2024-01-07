---
id: 587d7db1367417b2b2512b85
title: Impostare il prototipo del figlio su un'istanza del genitore
challengeType: 1
forumTopicId: 301325
dashedName: set-the-childs-prototype-to-an-instance-of-the-parent
---

# --description--

Nella sfida precedente hai visto il primo passo per ereditare il comportamento dal supertipo (o genitore) `Animal`: creare una nuova istanza di `Animal`.

Questa sfida copre la fase successiva: impostare il `prototype` del sottotipo (o figlio) — in questo caso `Bird`— in modo che sia un'istanza di `Animal`.

```js
Bird.prototype = Object.create(Animal.prototype);
```

Ricorda che il `prototype` è come la "ricetta" per creare un oggetto. In un certo senso, la ricetta per `Bird` ora include tutti gli "ingredienti" chiave di `Animal`.

```js
let duck = new Bird("Donald");
duck.eat();
```

`duck` eredita tutte le proprietà di `Animal`, compreso il metodo `eat`.

# --instructions--

Modifica il codice in modo che le istanze di `Dog` ereditino da `Animal`.

# --hints--

`Dog.prototype` dovrebbe essere un'istanza di `Animal`.

```js
assert(Animal.prototype.isPrototypeOf(Dog.prototype));
```

# --seed--

## --seed-contents--

```js
function Animal() { }

Animal.prototype = {
  constructor: Animal,
  eat: function() {
    console.log("nom nom nom");
  }
};

function Dog() { }

// Only change code below this line


let beagle = new Dog();
```

# --solutions--

```js
function Animal() { }

Animal.prototype = {
  constructor: Animal,
  eat: function() {
    console.log("nom nom nom");
  }
};

function Dog() { }
Dog.prototype = Object.create(Animal.prototype);

let beagle = new Dog();
beagle.eat();
```

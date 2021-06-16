---
id: 587d7db0367417b2b2512b82
title: Comprendere la catena dei prototipi
challengeType: 1
forumTopicId: 301329
dashedName: understand-the-prototype-chain
---

# --description--

Tutti gli oggetti in JavaScript (con alcune eccezioni) hanno un `prototype`. Inoltre, il `prototype` di un oggetto è esso stesso un oggetto.

```js
function Bird(name) {
  this.name = name;
}

typeof Bird.prototype;
```

Poiché un `prototype` è un oggetto, un `prototype` può avere il proprio `prototype`! In questo caso, il `prototype` di `Bird.prototype` è `Object.prototype`:

```js
Object.prototype.isPrototypeOf(Bird.prototype);
```

Come può esserti utile questo? Ricorderai il metodo `hasOwnProperty` da una sfida precedente:

```js
let duck = new Bird("Donald");
duck.hasOwnProperty("name");
```

Il metodo `hasOwnProperty` è definito in `Object.prototype`, a cui è possibile accedere da `Bird.prototype`, al quale si può a sua volta accedere da `duck`. Questo è un esempio della catena dei `prototype`. In questa catena di `prototype`, `Bird` è il `supertype` di `duck`, mentre `duck` è il `subtype`. `Object` è un `supertype` sia di `Bird` che di `duck`. `Object` è un `supertype` per tutti gli oggetti in JavaScript. Pertanto, qualsiasi oggetto può utilizzare il metodo `hasOwnProperty`.

# --instructions--

Modifica il codice per mostrare la corretta catena del prototipo.

# --hints--

Il tuo codice dovrebbe mostrare che `Object.prototype` è il prototype di `Dog.prototype`

```js
assert(/Object\.prototype\.isPrototypeOf/.test(code));
```

# --seed--

## --seed-contents--

```js
function Dog(name) {
  this.name = name;
}

let beagle = new Dog("Snoopy");

Dog.prototype.isPrototypeOf(beagle);  // yields true

// Fix the code below so that it evaluates to true
???.isPrototypeOf(Dog.prototype);
```

# --solutions--

```js
function Dog(name) {
  this.name = name;
}
let beagle = new Dog("Snoopy");
Dog.prototype.isPrototypeOf(beagle);
Object.prototype.isPrototypeOf(Dog.prototype);
```

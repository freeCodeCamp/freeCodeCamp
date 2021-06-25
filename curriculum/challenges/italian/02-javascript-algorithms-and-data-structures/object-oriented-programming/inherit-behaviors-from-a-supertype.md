---
id: 587d7db0367417b2b2512b84
title: Ereditare comportamenti da un Supertipo
challengeType: 1
forumTopicId: 301319
dashedName: inherit-behaviors-from-a-supertype
---

# --description--

Nella sfida precedente, hai creato un `supertype` chiamato `Animal` che definiva i comportamenti condivisi da tutti gli animali:

```js
function Animal() { }
Animal.prototype.eat = function() {
  console.log("nom nom nom");
};
```

Questa e la prossima sfida mostreranno come riutilizzare i metodi di `Animal` all'interno di `Bird` e `Dog` senza definirli nuovamente. Useremo una tecnica chiamata ereditarietà (inheritance). Questa sfida riguarda il primo passo: creare un'istanza del `supertype` (o genitore). Conosci già un modo per creare un'istanza di `Animal` utilizzando l'operatore `new`:

```js
let animal = new Animal();
```

Ci sono alcuni svantaggi quando si utilizza questa sintassi per l'ereditarietà, che è troppo complessa per questa sfida. Ecco invece un approccio alternativo senza questi svantaggi:

```js
let animal = Object.create(Animal.prototype);
```

`Object.create(obj)` crea un nuovo oggetto e imposta `obj` come suo `prototype`. Ricorda che il `prototype` è come la "ricetta" per creare un oggetto. Impostando il `prototype` di `animal` al `prototype` di `Animal`, stai di fatto dando all'istanza `animal` la stessa "ricetta" di qualsiasi altra istanza di `Animal`.

```js
animal.eat();
animal instanceof Animal;
```

Il metodo `instanceof` qui restituirebbe `true`.

# --instructions--

Usa `Object.create` per creare due istanze di `Animal` chiamate `duck` e `beagle`.

# --hints--

La variabile `duck` dovrebbe essere definita.

```js
assert(typeof duck !== 'undefined');
```

La variabile `beagle` dovrebbe essere definita.

```js
assert(typeof beagle !== 'undefined');
```

La variabile `duck` dovrebbe essere inizializzata con `Object.create`.

```js
assert(
  /(let|const|var)\s{1,}duck\s*=\s*Object\.create\s*\(\s*Animal\.prototype\s*\)\s*/.test(
    code
  )
);
```

La variabile `beagle` dovrebbe essere inizializzata con `Object.create`.

```js
assert(
  /(let|const|var)\s{1,}beagle\s*=\s*Object\.create\s*\(\s*Animal\.prototype\s*\)\s*/.test(
    code
  )
);
```

`duck` dovrebbe avere un `prototype` di `Animal`.

```js
assert(duck instanceof Animal);
```

`beagle` dovrebbe avere un `prototype` di `Animal`.

```js
assert(beagle instanceof Animal);
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

// Only change code below this line

let duck; // Change this line
let beagle; // Change this line
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
let duck = Object.create(Animal.prototype);
let beagle = Object.create(Animal.prototype);

duck.eat();
beagle.eat();
```

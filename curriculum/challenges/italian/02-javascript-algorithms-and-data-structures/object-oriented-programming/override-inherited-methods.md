---
id: 587d7db1367417b2b2512b88
title: Sovrascrivere metodi ereditati
challengeType: 1
forumTopicId: 301322
dashedName: override-inherited-methods
---

# --description--

Nelle lezioni precedenti, hai imparato che un oggetto può ereditare il suo comportamento (i metodi) da un altro oggetto facendo riferimento al suo oggetto `prototype`:

```js
ChildObject.prototype = Object.create(ParentObject.prototype);
```

Quindi il `ChildObject` ha ricevuto i propri metodi concatenandoli a quelli del suo `prototype`:

```js
ChildObject.prototype.methodName = function() {...};
```

È possibile sovrascrivere un metodo ereditato. Lo si fa nello stesso modo: aggiungendo un metodo a `ChildObject.prototype` usando lo stesso nome di metodo di quello da sovrascrivere. Ecco un esempio di `Bird` che sovrascrive il metodo `eat()` ereditato da `Animal`:

```js
function Animal() { }
Animal.prototype.eat = function() {
  return "nom nom nom";
};
function Bird() { }

Bird.prototype = Object.create(Animal.prototype);

Bird.prototype.eat = function() {
  return "peck peck peck";
};
```

Se hai un'istanza `let duck = new Bird();` e chiami `duck.eat()`, ecco come JavaScript cerca il metodo nella catena del `prototype` di `duck`:

1.  `duck` => `eat()` è definito qui? No.
2.  `Bird` => `eat()` è definito qui? => Sì. Eseguilo e smetti di cercare.
3.  `Animal` => anche qui è definito `eat()`, ma JavaScript ha smesso di cercare prima di raggiungere questo livello.
4.  Object => JavaScript ha smesso di cercare prima di raggiungere questo livello.

# --instructions--

Sovrascrivi il metodo `fly()` di `Penguin` in modo che restituisca la stringa `Alas, this is a flightless bird.`

# --hints--

`penguin.fly()` dovrebbe restituire la stringa `Alas, this is a flightless bird.`

```js
assert(penguin.fly() === 'Alas, this is a flightless bird.');
```

Il metodo `bird.fly()` dovrebbe restituire la stringa `I am flying!`

```js
assert(new Bird().fly() === 'I am flying!');
```

# --seed--

## --seed-contents--

```js
function Bird() { }

Bird.prototype.fly = function() { return "I am flying!"; };

function Penguin() { }
Penguin.prototype = Object.create(Bird.prototype);
Penguin.prototype.constructor = Penguin;

// Only change code below this line



// Only change code above this line

let penguin = new Penguin();
console.log(penguin.fly());
```

# --solutions--

```js
function Bird() { }

Bird.prototype.fly = function() { return "I am flying!"; };

function Penguin() { }
Penguin.prototype = Object.create(Bird.prototype);
Penguin.prototype.constructor = Penguin;
Penguin.prototype.fly = () => 'Alas, this is a flightless bird.';
let penguin = new Penguin();
console.log(penguin.fly());
```

---
id: 587d7dae367417b2b2512b7a
title: Verificare il costruttore di un oggetto con instanceof
challengeType: 1
forumTopicId: 301337
dashedName: verify-an-objects-constructor-with-instanceof
---

# --description--

Ogni volta che una funzione costruttore crea un nuovo oggetto, si dice che l'oggetto è un'<dfn>istanza</dfn> del suo costruttore. JavaScript offre un modo conveniente per verificarlo con l'operatore `instanceof`. `instanceof` ti permette di confrontare un oggetto con un costruttore, restituendo `true` o `false` in base al fatto che l'oggetto sia stato creato o meno con quel costruttore. Ecco un esempio:

```js
let Bird = function(name, color) {
  this.name = name;
  this.color = color;
  this.numLegs = 2;
}

let crow = new Bird("Alexis", "black");

crow instanceof Bird;
```

Questo metodo `instanceof` restituirà `true`.

Se un oggetto viene creato senza usare un costruttore, `instanceof` verificherà che non si tratta di un'istanza di quel costruttore:

```js
let canary = {
  name: "Mildred",
  color: "Yellow",
  numLegs: 2
};

canary instanceof Bird;
```

Questo metodo `instanceof` restituirà `false`.

# --instructions--

Crea una nuova istanza del costruttore `House`, chiamandola `myHouse` e passando un numero di camere da letto (bedrooms). Quindi, usa `instanceof` per verificare che si tratti di un'istanza di `House`.

# --hints--

`myHouse` dovrebbe avere un attributo `numBedrooms` impostato su un numero.

```js
assert(typeof myHouse.numBedrooms === 'number');
```

Dovresti verificare che `myHouse` sia un'istanza di `House` usando l'operatore `instanceof`.

```js
assert(/myHouse\s*instanceof\s*House/.test(code));
```

# --seed--

## --seed-contents--

```js
function House(numBedrooms) {
  this.numBedrooms = numBedrooms;
}

// Only change code below this line
```

# --solutions--

```js
function House(numBedrooms) {
  this.numBedrooms = numBedrooms;
}
const myHouse = new House(4);
console.log(myHouse instanceof House);
```

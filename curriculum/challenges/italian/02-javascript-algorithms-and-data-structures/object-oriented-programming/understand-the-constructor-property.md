---
id: 587d7daf367417b2b2512b7e
title: Comprendere la proprietà Costruttore
challengeType: 1
forumTopicId: 301327
dashedName: understand-the-constructor-property
---

# --description--

C'è una proprietà speciale `constructor` situata nelle istanze oggetto `duck` e `beagle` che sono state create nelle sfide precedenti:

```js
let duck = new Bird();
let beagle = new Dog();

console.log(duck.constructor === Bird); 
console.log(beagle.constructor === Dog);
```

Entrambe queste chiamate a `console.log` visualizzeranno `true` nella console.

Nota che la proprietà `constructor` è un riferimento alla funzione costruttore che ha creato l'istanza. Il vantaggio della proprietà `constructor` è che è possibile controllare questa proprietà per scoprire di che tipo di oggetto si tratta. Ecco un esempio di come usarlo:

```js
function joinBirdFraternity(candidate) {
  if (candidate.constructor === Bird) {
    return true;
  } else {
    return false;
  }
}
```

**Nota:** Poiché la proprietà `constructor` può essere sovrascritta (come vedremo nelle prossime due sfide) normalmente è meglio utilizzare il metodo `instanceof` per controllare il tipo di un oggetto.

# --instructions--

Scrivi una funzione `joinDogFraternity` che richieda un parametro `candidate` e, utilizzando la proprietà `constructor`, restituisca `true` se il candidato è un `Dog`, altrimenti restituisca `false`.

# --hints--

`joinDogFraternity` dovrebbe essere definita come una funzione.

```js
assert(typeof joinDogFraternity === 'function');
```

`joinDogFraternity` dovrebbe restituire `true` se `candidate` è un'istanza di `Dog`.

```js
assert(joinDogFraternity(new Dog('')) === true);
```

`joinDogFraternity` dovrebbe utilizzare la proprietà `constructor`.

```js
assert(/\.constructor/.test(code) && !/instanceof/.test(code));
```

# --seed--

## --seed-contents--

```js
function Dog(name) {
  this.name = name;
}

// Only change code below this line
function joinDogFraternity(candidate) {

}
```

# --solutions--

```js
function Dog(name) {
  this.name = name;
}
function joinDogFraternity(candidate) {
  return candidate.constructor === Dog;
}
```

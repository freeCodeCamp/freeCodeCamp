---
id: 587d7dae367417b2b2512b7b
title: Comprendere le proprietà proprie
challengeType: 1
forumTopicId: 301326
dashedName: understand-own-properties
---

# --description--

Nell'esempio seguente, il costruttore di `Bird` definisce due proprietà: `name` e `numLegs`:

```js
function Bird(name) {
  this.name = name;
  this.numLegs = 2;
}

let duck = new Bird("Donald");
let canary = new Bird("Tweety");
```

`name` e `numLegs` sono chiamati <dfn>proprietà proprie</dfn>, perché sono definite direttamente nell'oggetto istanza. Questo significa che sia `duck` che `canary` hanno la propria copia separata di queste proprietà. Di fatto ogni istanza di `Bird` avrà la propria copia di queste proprietà. Il seguente codice aggiunge tutte le proprietà proprie di `duck` all'array `ownProps`:

```js
let ownProps = [];

for (let property in duck) {
  if(duck.hasOwnProperty(property)) {
    ownProps.push(property);
  }
}

console.log(ownProps);
```

La console visualizzerà il valore `["name", "numLegs"]`.

# --instructions--

Aggiungi le proprietà proprie di `canary` all'array `ownProps`.

# --hints--

`ownProps` dovrebbe includere i valori `numLegs` e `name`.

```js
assert(ownProps.indexOf('name') !== -1 && ownProps.indexOf('numLegs') !== -1);
```

Dovresti risolvere questa sfida senza usare il metodo integrato `Object.keys()`.

```js
assert(!/Object(\.keys|\[(['"`])keys\2\])/.test(code));
```

Dovresti risolvere questa sfida senza predefinire il contenuto dell'array `ownProps` nel codice.

```js
assert(
  !/\[\s*(?:'|")(?:name|numLegs)|(?:push|concat)\(\s*(?:'|")(?:name|numLegs)/.test(
    code
  )
);
```

# --seed--

## --seed-contents--

```js
function Bird(name) {
  this.name = name;
  this.numLegs = 2;
}

let canary = new Bird("Tweety");
let ownProps = [];
// Only change code below this line
```

# --solutions--

```js
function Bird(name) {
  this.name = name;
  this.numLegs = 2;
}

let canary = new Bird("Tweety");
function getOwnProps (obj) {
  const props = [];

  for (let prop in obj) {
    if (obj.hasOwnProperty(prop)) {
      props.push(prop);
    }
  }

  return props;
}

const ownProps = getOwnProps(canary);
```

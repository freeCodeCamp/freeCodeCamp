---
id: 587d7dad367417b2b2512b77
title: Definire una funzione costruttore
challengeType: 1
forumTopicId: 16804
dashedName: define-a-constructor-function
---

# --description--

I <dfn>costruttori</dfn> sono funzioni che creano nuovi oggetti. Essi definiscono proprietà e comportamenti che appartengono al nuovo oggetto. Pensa ad essi come a progetti per la creazione di nuovi oggetti.

Ecco un esempio di costruttore:

```js
function Bird() {
  this.name = "Albert";
  this.color = "blue";
  this.numLegs = 2;
}
```

Questo costruttore definisce un oggetto `Bird` con proprietà `name`, `color`, e `numLegs` impostati rispettivamente su Albert, blue e 2. I costruttori seguono alcune convenzioni:

<ul><li>I costruttori sono definiti con un nome con l'iniziale maiuscola per distinguerli dalle altre funzioni che non sono costruttori (<code>constructors</code>).</li><li>I costruttori usano la parola chiave <code>this</code> per impostare le proprietà dell'oggetto che creeranno. All'interno del costruttore, <code>this</code> si riferisce al nuovo oggetto che creerà.</li><li>I costruttori definiscono proprietà e comportamenti invece di restituire un valore come fanno le normali funzioni.</li></ul>

# --instructions--

Crea un costruttore, `Dog`, con le proprietà `name`, `color`, e `numLegs` impostate rispettivamente su una stringa, una stringa, e un numero.

# --hints--

`Dog` dovrebbe avere una proprietà `name` impostata su una stringa.

```js
assert(typeof new Dog().name === 'string');
```

`Dog` dovrebbe avere una proprietà `color` impostata su una stringa.

```js
assert(typeof new Dog().color === 'string');
```

`Dog` dovrebbe avere una proprietà `numLegs` impostata su un numero.

```js
assert(typeof new Dog().numLegs === 'number');
```

# --seed--

## --seed-contents--

```js

```

# --solutions--

```js
function Dog (name, color, numLegs) {
  this.name = 'name';
  this.color = 'color';
  this.numLegs = 4;
}
```

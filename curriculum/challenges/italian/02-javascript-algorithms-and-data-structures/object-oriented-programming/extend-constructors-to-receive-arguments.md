---
id: 587d7dae367417b2b2512b79
title: Estendere i costruttori facendogli ricevere argomenti
challengeType: 1
forumTopicId: 18235
dashedName: extend-constructors-to-receive-arguments
---

# --description--

I costruttori `Bird` e `Dog` dell'ultima sfida hanno funzionato bene. Tuttavia, nota che tutti i `Birds` che vengono creati con il costruttore `Bird` sono automaticamente chiamati Albert, sono di colore blu e hanno due zampe. E se volessi degli uccelli con valori diversi per nome e colore? È possibile cambiare manualmente le proprietà di ogni uccello, ma questo sarebbe molto laborioso:

```js
let swan = new Bird();
swan.name = "Carlos";
swan.color = "white";
```

Supponi di voler scrivere un programma per tenere traccia di centinaia o addirittura migliaia di uccelli diversi in una voliera. Ci vorrebbe molto tempo per creare tutti gli uccelli e successivamente cambiare le proprietà impostando valori diversi per tutti. Per creare più facilmente diversi oggetti `Bird`, puoi progettare il tuo costruttore Bird in modo che accetti dei parametri:

```js
function Bird(name, color) {
  this.name = name;
  this.color = color;
  this.numLegs = 2;
}
```

Potrai quindi passargli dei valori come argomenti al costruttore `Bird` per definire ogni singolo uccello: `let cardinal = new Bird("Bruce", "red");` crea una nuova istanza di `Bird` con le proprietà `name` e `color` impostate rispettivamente a `Bruce` e `red`. La proprietà `numLegs` è ancora impostata a 2. Il `cardinal` ha queste proprietà:

```js
cardinal.name
cardinal.color
cardinal.numLegs
```

Il costruttore è più flessibile. Ora è possibile definire le proprietà per ogni `Bird` al momento della creazione, che è uno dei motivi per cui i costruttori JavaScript sono così utili. Essi raggruppano gli oggetti in base a caratteristiche e comportamenti condivisi e definiscono un progetto che automatizza la loro creazione.

# --instructions--

Crea un altro costruttore per `Dog`. Questa volta, impostalo in modo che riceva i parametri `name` e `color`, e abbia la proprietà `numLegs` fissata a 4. Quindi crea un nuovo `Dog` salvandolo in una variabile `terrier`. Passagli due stringhe come argomenti per le proprietà `name` e `color`.

# --hints--

`Dog` dovrebbe ricevere un argomento per `name`.

```js
assert(new Dog('Clifford').name === 'Clifford');
```

`Dog` dovrebbe ricevere un argomento per `color`.

```js
assert(new Dog('Clifford', 'yellow').color === 'yellow');
```

`Dog` dovrebbe avere la proprietà `numLegs` impostata a 4.

```js
assert(new Dog('Clifford').numLegs === 4);
```

`terrier` dovrebbe essere creato usando il costruttore `Dog`.

```js
assert(terrier instanceof Dog);
```

# --seed--

## --seed-contents--

```js
function Dog() {

}
```

# --solutions--

```js
function Dog (name, color) {
  this.numLegs = 4;
  this.name = name;
  this.color = color;
}

const terrier = new Dog();
```

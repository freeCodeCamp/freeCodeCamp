---
id: 587d7db2367417b2b2512b8a
title: >-
  Usare le closure per proteggere da modifiche esterne le proprietà di un oggetto
challengeType: 1
forumTopicId: 18234
dashedName: >-
  use-closure-to-protect-properties-within-an-object-from-being-modified-externally
---

# --description--

Nella sfida precedente, `bird` aveva una proprietà pubblica `name`. È considerata pubblica perché può essere consultata e modificata dal di fuori della definizione di `bird`.

```js
bird.name = "Duffy";
```

Pertanto, qualsiasi parte del tuo codice può facilmente cambiare il nome di `bird` impostandolo a qualsiasi valore. Pensa a cosa succederebbe se cise come password e conti bancari fossero facilmente modificabili da qualsiasi parte del tuo codice. Questo potrebbe causare un sacco di problemi.

Il modo più semplice per rendere privata questa proprietà pubblica è quello di creare una variabile all'interno della funzione costruttore. Questo fa in modo che il campo di applicazione di questa variabile sia solo quello interno alla funzione costruttore, e non la rende più disponibile a livello globale. In questo modo, la variabile può essere consultata e modificata solo da metodi che siano anch'essi all'interno della funzione costruttore.

```js
function Bird() {
  let hatchedEgg = 10;

  this.getHatchedEggCount = function() { 
    return hatchedEgg;
  };
}
let ducky = new Bird();
ducky.getHatchedEggCount();
```

`getHatchedEggCount` è un metodo privilegiato, perché ha accesso alla variabile privata `hatchedEgg`. Questo è possibile perché `hatchedEgg` è dichiarato nello stesso contesto di `getHatchedEggCount`. In JavaScript, una funzione ha sempre accesso al contesto in cui è stata creata. Questa si chiama `closure` (chiusura).

# --instructions--

Cambia il modo in cui `weight` è dichiarata nella funzione `Bird` in modo che diventi una variabile privata. Quindi, crea un metodo `getWeight` che restituisca il valore di `weight` 15.

# --hints--

La proprietà `weight` dovrebbe essere una variabile privata e dovrebbe avere il valore di `15`.

```js
assert(code.match(/(var|let|const)\s+weight\s*\=\s*15\;?/g));
```

Il tuo codice dovrebbe creare un metodo in `Bird` chiamato `getWeight` che restituisca il valore della variabile privata `weight`.

```js
assert(new Bird().getWeight() === 15);
```

La funzione `getWeight` dovrebbe restituire la variabile privata `weight`.

```js
assert(code.match(/((return\s+)|(\(\s*\)\s*\=\>\s*))weight\;?/g));
```

# --seed--

## --seed-contents--

```js
function Bird() {
  this.weight = 15;


}
```

# --solutions--

```js
function Bird() {
  let weight = 15;

  this.getWeight = () => weight;
}
```

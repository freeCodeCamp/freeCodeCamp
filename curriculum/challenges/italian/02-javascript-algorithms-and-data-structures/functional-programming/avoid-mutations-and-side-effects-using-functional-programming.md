---
id: 587d7b8e367417b2b2512b5e
title: Evitare mutazioni ed effetti collaterali utilizzando la programmazione funzionale
challengeType: 1
forumTopicId: 301228
dashedName: avoid-mutations-and-side-effects-using-functional-programming
---

# --description--

Come avrai già capito, il problema nella sfida precedente è stato con la chiamata a `splice` nella funzione `tabClose()`. Sfortunatamente, `splice` cambia l'array su cui viene chiamato, così la seconda chiamata ad esso usava un array modificato, dando risultati inaspettati.

Questo è un piccolo esempio di un modello molto più grande - si chiama una funzione su una variabile, un array, o un oggetto, e la funzione cambia la variabile o qualcosa nell'oggetto.

Uno dei principi fondamentali della programmazione funzionale è di non cambiare le cose. Le modifiche portano a bug. È più facile prevenire i bug sapendo che le tue funzioni non cambiano nulla, inclusi gli argomenti delle funzioni o qualsiasi variabile globale.

L'esempio precedente non aveva operazioni complicate ma il metodo `splice` ha cambiato l'array originale e ha provocato un bug.

Ricorda che nella programmazione funzionale, la modifica o alterazione delle cose è chiamata <dfn>mutazione</dfn>, e il risultato è chiamato <dfn>effetto collaterale</dfn>. Una funzione, idealmente, dovrebbe essere una <dfn>funzione pura</dfn>, cioè non dovrebbe provocare effetti collaterali.

Cerchiamo di padroneggiare questa disciplina e non modificare alcuna variabile o oggetto nel nostro codice.

# --instructions--

Compila il codice per la funzione `incrementer` in modo che restituisca il valore della variabile globale `fixedValue` aumentata di uno.

# --hints--

La tua funzione `incrementer` non dovrebbe cambiare il valore di `fixedValue` (che è `4`).

```js
incrementer();
assert(fixedValue === 4);
```

La tua funzione `incrementer` dovrebbe restituire un valore di una unità più grande del valore `fixedValue`.

```js
const __newValue = incrementer();
assert(__newValue === 5);
```

La tua funzione `incrementer` dovrebbe restituire un valore basato sul valore della variabile globale `fixedValue`.

```js
(function () {
  fixedValue = 10;
  const newValue = incrementer();
  assert(fixedValue === 10 && newValue === 11);
  fixedValue = 4;
})();
```

# --seed--

## --seed-contents--

```js
// The global variable
let fixedValue = 4;

function incrementer() {
  // Only change code below this line


  // Only change code above this line
}
```

# --solutions--

```js
let fixedValue = 4

function incrementer() {
  return fixedValue + 1
}
```

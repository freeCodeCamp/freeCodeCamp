---
id: 587d7b8e367417b2b2512b5f
title: Passare gli argomenti per evitare la dipendenza esterna in una funzione
challengeType: 1
forumTopicId: 301234
dashedName: pass-arguments-to-avoid-external-dependence-in-a-function
---

# --description--

L'ultima sfida è stata un passo più vicino ai principi della programmazione funzionale, ma manca ancora qualcosa.

Non abbiamo modificato il valore globale della variabile, ma la funzione `incrementer` non avrebbe funzionato senza che la variabile globale `fixedValue` fosse lì.

Un altro principio della programmazione funzionale è quello di dichiarare sempre esplicitamente le dipendenze. Questo significa che se una funzione dipende dalla presenza di una variabile o di un oggetto, devi passare quella variabile o l'oggetto direttamente nella funzione come argomento.

Da questo principio derivano diverse buone conseguenze. La funzione è più facile da testare, si sa esattamente che input prende, e non dipenderà da nient'altro nel tuo programma.

Questo può darti più fiducia quando alteri, rimuovi o aggiungi del codice. Saprai cosa puoi o non puoi cambiare e potrai vedere dove sono le potenziali trappole.

Infine, la funzione produrrà sempre lo stesso output per lo stesso insieme di input, indipendentemente da quale parte del codice lo esegue.

# --instructions--

Aggiorniamo la funzione `incrementer` per dichiarare chiaramente le sue dipendenze.

Scrivi la funzione `incrementer` in modo che richieda un argomento, quindi restituisca un risultato dopo aver aumentato il valore di uno.

# --hints--

La tua funzione `incrementer` non dovrebbe cambiare il valore di `fixedValue` (che è `4`).

```js
assert(fixedValue === 4);
```

La tua funzione `incrementer` dovrebbe prendere un argomento.

```js
assert(incrementer.length === 1);
```

La tua funzione `incrementer` dovrebbe restituire il valore di `fixedValue` aumentato di una unità.

```js
const __newValue = incrementer(fixedValue);
assert(__newValue === 5);
```

# --seed--

## --seed-contents--

```js
// The global variable
let fixedValue = 4;

// Only change code below this line
function incrementer() {


  // Only change code above this line
}
```

# --solutions--

```js
let fixedValue = 4;

function incrementer(fixedValue) {
  return fixedValue + 1;
}
```

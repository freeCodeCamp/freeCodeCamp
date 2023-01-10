---
id: 587d7b87367417b2b2512b40
title: Confrontare la visibilità delle parole chiave var e let
challengeType: 1
forumTopicId: 301195
dashedName: compare-scopes-of-the-var-and-let-keywords
---

# --description--

Se non hai familiarità con `let`, vedi questa <a href="/learn/javascript-algorithms-and-data-structures/basic-javascript/explore-differences-between-the-var-and-let-keywords" target="_blank" rel="noopener noreferrer nofollow"> sfida sulle differenze tra <code>let</code> e <code>var</code></a>.

Quando si dichiara una variabile con la parola chiave `var`, essa viene dichiarata globalmente, o localmente se dichiarata all'interno di una funzione.

La parola chiave `let` si comporta allo stesso modo, ma con alcune funzioni extra. Quando si dichiara una variabile con la parola chiave `let` all'interno di un blocco, di una dichiarazione o di un'espressione, la sua visibilità è limitata a tale blocco, dichiarazione o espressione.

Per esempio:

```js
var numArray = [];
for (var i = 0; i < 3; i++) {
  numArray.push(i);
}
console.log(numArray);
console.log(i);
```

Qui la console mostrerà i valori `[0, 1, 2]` e `3`.

Con la parola chiave `var`, `i` viene dichiarata globalmente. Quindi, l'esecuzione di `i++` aggiorna la variabile globale. Questo codice è simile al seguente:

```js
var numArray = [];
var i;
for (i = 0; i < 3; i++) {
  numArray.push(i);
}
console.log(numArray);
console.log(i);
```

Qui la console mostrerà i valori `[0, 1, 2]` e `3`.

Questo comportamento causerà problemi se dovessi creare una funzione e memorizzarla per un uso successivo all'interno di un loop `for` che utilizza la variabile `i`. Questo perché la funzione memorizzata si riferirà sempre al valore della variabile globale `i` aggiornata.

```js
var printNumTwo;
for (var i = 0; i < 3; i++) {
  if (i === 2) {
    printNumTwo = function() {
      return i;
    };
  }
}
console.log(printNumTwo());
```

Qui la console mostrerà il valore `3`.

Come puoi vedere, `printNumTwo()` stampa 3 e non 2. Questo perché il valore assegnato a `i` è stato aggiornato e `printNumTwo()` restituisce la variabile globale `i` e non il valore `i` che aveva quando la funzione è stata creata nel loop. La parola chiave `let` non segue questo comportamento:

```js
let printNumTwo;
for (let i = 0; i < 3; i++) {
  if (i === 2) {
    printNumTwo = function() {
      return i;
    };
  }
}
console.log(printNumTwo());
console.log(i);
```

Qui la console mostrerà il valore `2` e l'errore `i is not defined` (i non è definita).

`i` non è definita perché non è dichiarata globalmente. È dichiarata solo all'interno dell'istruzione del loop `for`. `printNumTwo()` ha restituito il valore corretto perché tre variabili `i` differenti con valori univoci (0, 1, e 2) sono state create con la parola chiave `let` all'interno del'istruzione del loop.

# --instructions--

Correggi il codice in modo che la variabile `i` dichiarata nell'istruzione `if` sia una variabile separata dalla `i` dichiarata nella prima riga della funzione. Assicurati di non usare la parola chiave `var` in nessun punto del tuo codice.

Questo esercizio è progettato per illustrare la differenza tra il modo in cui le parole chiave `var` e `let` assegnano la visibilità alla variabile dichiarata. Quando si programma una funzione simile a quella utilizzata in questo esercizio, è spesso meglio usare nomi di variabili diversi per evitare confusione.

# --hints--

`var` non dovrebbe esistere nel codice.

```js
assert(!code.match(/var/g));
```

La variabile `i` dichiarata nell'istruzione `if` dovrebbe essere uguale alla stringa `block scope`.

```js
assert(code.match(/(i\s*=\s*).*\s*.*\s*.*\1('|")block\s*scope\2/g));
```

`checkScope()` dovrebbe restituire la stringa `function scope`

```js
assert(checkScope() === 'function scope');
```

# --seed--

## --seed-contents--

```js
function checkScope() {
  var i = 'function scope';
  if (true) {
    i = 'block scope';
    console.log('Block scope i is: ', i);
  }
  console.log('Function scope i is: ', i);
  return i;
}
```

# --solutions--

```js
function checkScope() {
  let i = 'function scope';
  if (true) {
    let i = 'block scope';
    console.log('Block scope i is: ', i);
  }

  console.log('Function scope i is: ', i);
  return i;
}
```

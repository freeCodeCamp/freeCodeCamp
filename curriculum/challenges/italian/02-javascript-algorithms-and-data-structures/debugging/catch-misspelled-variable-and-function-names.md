---
id: 587d7b84367417b2b2512b35
title: Scovare i nomi di funzioni e variabili scritti male
challengeType: 1
forumTopicId: 301186
dashedName: catch-misspelled-variable-and-function-names
---

# --description--

I metodi `console.log()` e `typeof` sono i due modi principali per controllare i valori intermedi e i tipi degli output del programma. Ora è il momento di approfondire le forme più comuni di bug. Un problema di sintassi di cui si rammaricano i digitatori veloci è il semplice errore di ortografia.

Caratteri spostati, mancanti, o con maiuscole errate nel nome di una variabile o di una funzione costringeranno il browser a cercare un oggetto che non esiste - e a lamentarsi tramite un errore di riferimento. In JavaScript, le variabili e i nomi di funzione sono sensibili alle maiuscole.

# --instructions--

Correggi i due errori di ortografia nel codice in modo che il calcolo di `netWorkingCapital` funzioni.

# --hints--

Controlla l'ortografia delle due variabili utilizzate nel calcolo di netWorkingCapital, l'output della console dovrebbe mostrare che "Net working capital is: 2".

```js
assert(netWorkingCapital === 2);
```

Non ci dovrebbero essere casi di variabili scritte male nel codice.

```js
assert(!code.match(/recievables/g));
```

La variabile `receivables` dovrebbe essere dichiarata e utilizzata correttamente nel codice.

```js
assert(code.match(/receivables/g).length == 2);
```

Non ci dovrebbero essere casi di variabili scritte male nel codice.

```js
assert(!code.match(/payable;/g));
```

La variabile `payables` dovrebbe essere dichiarata e utilizzata correttamente nel codice.

```js
assert(code.match(/payables/g).length == 2);
```

# --seed--

## --seed-contents--

```js
let receivables = 10;
let payables = 8;
let netWorkingCapital = recievables - payable;
console.log(`Net working capital is: ${netWorkingCapital}`);
```

# --solutions--

```js
let receivables = 10;
let payables = 8;
let netWorkingCapital = receivables - payables;
console.log(`Net working capital is: ${netWorkingCapital}`);
```

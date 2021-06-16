---
id: 587d7b84367417b2b2512b36
title: 'Scovare parentesi tonde, quadre, graffe e virgolette rimaste aperte'
challengeType: 1
forumTopicId: 301190
dashedName: catch-unclosed-parentheses-brackets-braces-and-quotes
---

# --description--

Un altro errore di sintassi a cui bisogna stare attenti è che ogni apertura di parentesi tonde, quadre, graffe e virgolette richiede una chiusura. Dimenticarne una parte tende a succedere quando si sta modificando il codice esistente per inserire elementi che hanno una di queste coppie. Inoltre, presta attenzione quando annidi un blocco di codice dentro a un altro, ad esempio per aggiungere una funzione di callback come argomento a un metodo.

Un modo per evitare questo errore è, non appena viene digitato il carattere di apertura, inserire immediatamente la chiusura corrispondente, quindi spostare il cursore indietro tra di esse e continuare a scrivere. Fortunatamente, la maggior parte degli editor di codice moderni generano automaticamente la seconda metà della coppia.

# --instructions--

Correggi gli errori delle due coppie nel codice.

# --hints--

Il tuo codice dovrebbe aggiungere la parte mancante dell'array.

```js
assert(code.match(/myArray\s*?=\s*?\[\s*?1\s*?,\s*?2\s*?,\s*?3\s*?\];/g));
```

Il tuo codice dovrebbe correggere la parte mancante del metodo `.reduce()`. L'output su console dovrebbe mostrare che `Sum of array values is: 6`.

```js
assert(arraySum === 6);
```

# --seed--

## --seed-contents--

```js
let myArray = [1, 2, 3;
let arraySum = myArray.reduce((previous, current =>  previous + current);
console.log(`Sum of array values is: ${arraySum}`);
```

# --solutions--

```js
let myArray = [1, 2, 3];
let arraySum = myArray.reduce((previous, current) =>  previous + current);
console.log(`Sum of array values is: ${arraySum}`);
```

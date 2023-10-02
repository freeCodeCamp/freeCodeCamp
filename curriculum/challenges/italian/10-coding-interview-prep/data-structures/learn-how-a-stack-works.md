---
id: 587d8250367417b2b2512c5e
title: Impara come funziona uno stack
challengeType: 1
forumTopicId: 301705
dashedName: learn-how-a-stack-works
---

# --description--

Probabilmente hai familiarità con la pila di libri sul tuo tavolo. Probabilmente hai usato la funzione di annullamento di un editor di testo. Probabilmente sei anche abituato a premere il pulsante indietro sul telefono per tornare alla vista precedente nella tua app.

Sai cos'hanno in comune queste cose? Tutte memorizzano i dati in modo che possano essere ripercorsi all'indietro.

Il libro più in alto nella pila è quello che era stato messo lì per ultimo. Se si rimuove quel libro dalla cima della pila, si espone il libro che è stato messo lì prima dell'ultimo e così via.

Se ci pensi, in tutti gli esempi di cui sopra, si sta ottenendo il tipo di servizio <dfn>Last-In-First-Out</dfn>. Cercheremo di imitarlo con il nostro codice.

Questo schema di memorizzazione dati è chiamato <dfn>Stack</dfn> (pila). In particolare, dovremmo implementare il metodo `push()` che inserisce gli oggetti JavaScript nella parte superiore della pila; e il metodo `pop()`, che rimuove l'oggetto JavaScript in cima ad essa al momento attuale.

# --instructions--

Qui abbiamo una pila di compiti a casa rappresentati come un array: `"BIO12"` è alla base dello stack, e `"PSY44"` è in cima.

Modifica l'array dato e trattarlo come uno `stack` utilizzando i metodi JavaScript sopra menzionati. Rimuovi l'elemento superiore `"PSY44"` dallo stack. Quindi aggiungi `"CS50"` in modo che sia il nuovo elemento in cima allo stack.

# --hints--

`homeworkStack` dovrebbe contenere solo 4 elementi.

```js
assert(homeworkStack.length === 4);
```

L'ultimo elemento in `homeworkStack` dovrebbe essere `"CS50"`.

```js
assert(homeworkStack[3] === 'CS50');
```

`homeworkStack` non dovrebbe contenere `"PSY44"`.

```js
assert(homeworkStack.indexOf('PSY44') === -1);
```

La dichiarazione iniziale di `homeworkStack` non dovrebbe essere modificata.

```js
assert(
  code.match(/=/g).length === 1 &&
    /homeworkStack\s*=\s*\["BIO12"\s*,\s*"HIS80"\s*,\s*"MAT122"\s*,\s*"PSY44"\]/.test(
      code
    )
);
```

# --seed--

## --seed-contents--

```js
var homeworkStack = ["BIO12","HIS80","MAT122","PSY44"];
// Only change code below this line
```

# --solutions--

```js
// solution required
```

---
id: 565bbe00e9cc8ac0725390f4
title: Contare le carte
challengeType: 1
videoUrl: 'https://scrimba.com/c/c6KE7ty'
forumTopicId: 16809
dashedName: counting-cards
---

# --description--

Nel gioco di casinò Blackjack, un giocatore può determinare se nella mano successiva ha un vantaggio sul banco tenendo traccia del numero relativo di carte alte e basse rimanenti nel mazzo. Questo si chiama contare le carte.

Avere più carte alte rimanenti nel mazzo favorisce il giocatore. Ad ogni carta è assegnato un valore secondo la tabella sottostante. Quando il conteggio è positivo, il giocatore dovrebbe puntare alto. Quando il conteggio è zero o negativo, il giocatore dovrebbe puntare basso.

<table class='table table-striped'><thead><tr><th>Cambio del conteggio</th><th>Carte</th></tr></thead><tbody><tr><td>+1</td><td>2, 3, 4, 5, 6</td></tr><tr><td>0</td><td>7, 8, 9</td></tr><tr><td>-1</td><td>10, 'J', 'Q', 'K', 'A'</td></tr></tbody></table>

Scriverai una funzione che conta le carte. Riceverà un parametro `card`, che può essere un numero o una stringa, e incrementerà o decrementerà la variabile globale `count` in base al valore della carta (vedi tabella). La funzione restituirà una stringa con il conteggio corrente e la stringa `Bet` se il conteggio è positivo, o `Hold` se il conteggio è zero o negativo. Il conteggio corrente e la decisione del giocatore (`Bet` o `Hold`) dovrebbero essere separati da un singolo spazio.

**Output di esempio:** `-3 Hold` o `5 Bet`

**Suggerimento**  
NON resettare `count` a 0 quando il valore è 7, 8 o 9. NON restituire un array.  
NON includere virgolette (singole o doppie) nell'output.

# --hints--

La tua funzione dovrebbe restituire un valore per count e del testo (`Bet` o `Hold`) con uno spazio tra di loro.

```js
assert(//
  (function () {
    count = 0;
    let out = cc(10);
    const hasSpace = /-?\d+ (Bet|Hold)/.test('' + out);
    return hasSpace;
  })()
);
```

La sequenza di carte 2, 3, 4, 5, 6 dovrebbe restituire la stringa `5 Bet`

```js
assert(
  (function () {
    count = 0;
    cc(2);
    cc(3);
    cc(4);
    cc(5);
    var out = cc(6);
    if (out === '5 Bet') {
      return true;
    }
    return false;
  })()
);
```

La sequenza di carte 7, 8, 9 dovrebbe restituire la stringa `0 Hold`

```js
assert(
  (function () {
    count = 0;
    cc(7);
    cc(8);
    var out = cc(9);
    if (out === '0 Hold') {
      return true;
    }
    return false;
  })()
);
```

La sequenza di carte 10, J, Q, K, A dovrebbe restituire la stringa `-5 Hold`

```js
assert(
  (function () {
    count = 0;
    cc(10);
    cc('J');
    cc('Q');
    cc('K');
    var out = cc('A');
    if (out === '-5 Hold') {
      return true;
    }
    return false;
  })()
);
```

La sequenza di carte 3, 7, Q, 8, A dovrebbe restituire la stringa `-1 Hold`

```js
assert(
  (function () {
    count = 0;
    cc(3);
    cc(7);
    cc('Q');
    cc(8);
    var out = cc('A');
    if (out === '-1 Hold') {
      return true;
    }
    return false;
  })()
);
```

La sequenza di carte 2, J, 9, 2, 7 dovrebbe restituire la stringa `1 Bet`

```js
assert(
  (function () {
    count = 0;
    cc(2);
    cc('J');
    cc(9);
    cc(2);
    var out = cc(7);
    if (out === '1 Bet') {
      return true;
    }
    return false;
  })()
);
```

La sequenza di carte 2, 2, 10 dovrebbe restituire la stringa `1 Bet`

```js
assert(
  (function () {
    count = 0;
    cc(2);
    cc(2);
    var out = cc(10);
    if (out === '1 Bet') {
      return true;
    }
    return false;
  })()
);
```

La sequenza di carte 3, 2, A, 10, K dovrebbe restituire la stringa `-1 Hold`

```js
assert(
  (function () {
    count = 0;
    cc(3);
    cc(2);
    cc('A');
    cc(10);
    var out = cc('K');
    if (out === '-1 Hold') {
      return true;
    }
    return false;
  })()
);
```

# --seed--

## --seed-contents--

```js
let count = 0;

function cc(card) {
  // Only change code below this line


  return "Change Me";
  // Only change code above this line
}

cc(2); cc(3); cc(7); cc('K'); cc('A');
```

# --solutions--

```js
let count = 0;
function cc(card) {
  switch(card) {
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
      count++;
      break;
    case 10:
    case 'J':
    case 'Q':
    case 'K':
    case 'A':
      count--;
  }
  if(count > 0) {
    return count + " Bet";
  } else {
    return count + " Hold";
  }
}
```

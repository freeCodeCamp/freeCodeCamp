---
id: 565bbe00e9cc8ac0725390f4
title: Karten zählen
challengeType: 1
videoUrl: 'https://scrimba.com/c/c6KE7ty'
forumTopicId: 16809
dashedName: counting-cards
---

# --description--

Beim Kasinospiel Blackjack kann ein Spieler, indem er die relative Anzahl der im Deck verbliebenen hohen und niedrigen Karten im Auge behält, herausfinden, ob er in der nächsten Runde über einen Vorteil gegenüber dem Haus verfügt. Das nennt man das Zählen von Karten.

Wenn mehr hohe Karten im Deck verbleiben, ist der Spieler im Vorteil. Jeder Karte wird ein Wert gemäß der folgenden Tabelle zugewiesen. Wenn die Zählung positiv ist, sollte der Spieler hoch setzen. Wenn die Anzahl null oder negativ ist, sollte der Spieler niedrig setzen.

<table class='table table-striped'><thead><tr><th>Veränderung der Zählung</th><th>Karten</th></tr></thead><tbody><tr><td>+1</td><td>2, 3, 4, 5, 6</td></tr><tr><td>0</td><td>7, 8, 9</td></tr><tr><td>-1</td><td>10, 'J', 'Q', 'K', 'A'</td></tr></tbody></table>

Du wirst eine Funktion zum Zählen von Karten schreiben. Sie erhält einen `card`-Parameter, der eine Zahl oder ein String sein kann, und erhöht oder verringert die globale `count`-Variable entsprechend dem Wert der Karte (siehe Tabelle). Die Funktion gibt dann einen String mit dem aktuellen Zählerstand und dem String `Bet` zurück, wenn der Zählerstand positiv ist, oder `Hold`, wenn der Zählerstand null oder negativ ist. Die aktuelle Anzahl und die Entscheidung des Spielers (`Bet` oder `Hold`) sollten durch ein einzelnes Leerzeichen getrennt werden.

**Beispielausgaben:** `-3 Hold` oder `5 Bet`

**Hinweis**  
Setze `count` NICHT auf 0 zurück, wenn der Wert 7, 8 oder 9 ist. Gib KEIN Array zurück.  
Die Ausgabe darf KEINE Anführungszeichen (einfach oder doppelt) enthalten.

# --hints--

Deine Funktion sollte einen Wert für die Anzahl und den Text (`Bet` oder `Hold`), mit einem Leerzeichen dazwischen, zurückgeben.

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

Die Kartenfolge 2, 3, 4, 5, 6 sollte den String `5 Bet` zurückgeben

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

Die Kartenfolge 7, 8, 9 sollte den String `0 Hold` zurückgeben

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

Die Kartenfolge 10, J, Q, K, A sollte den String `-5 Hold` zurückgeben

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

Die Kartenfolge 3, 7, Q, 8, A sollte den String `-1 Hold` zurückgeben

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

Die Kartenfolge 2, J, 9, 2, 7 sollte den String `1 Bet` zurückgeben

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

Die Kartenfolge 2, 2, 10 sollte den String `1 Bet` zurückgeben

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

Die Kartenfolge 3, 2, A, 10, K sollte den String `-1 Hold` zurückgeben

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

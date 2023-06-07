---
id: 5900f5221000cf542c510033
title: 'Problema 436: scommessa ingiusta'
challengeType: 1
forumTopicId: 302107
dashedName: problem-436-unfair-wager
---

# --description--

Julie propone la seguente scommessa a sua sorella Louise.

Propone di fare un gioco di probabilità per determinare chi laverà i piatti.

Per questo gioco, useranno un generatore di numeri casuali indipendenti uniformemente distribuiti tra 0 e 1.

Il gioco inizia con $S = 0$.

Il primo giocatore, Louise, somma a $S$ vari numeri casuali dal generatore fino a che $S > 1$ e prende nota del suo ultimo numero casuale '$x$'.

Il secondo giocatore, Julie, continua a sommare a $S$ diversi numeri casuali dal generatore fino a che $S > 2$ e prende nota del suo ultimo numero casuale '$y$'.

Il giocatore con il punteggio più alto vince e il perdente lava i piatti, cioè se $y > x$ il secondo giocatore vince.

Per esempio, se il primo giocatore estrae 0.63 e 0.44, il turno del primo giocatore finisce visto che $0.62 + 0.44 > 1$ e $x = 0.44$. Se il secondo giocatore estrae 0.1, 0.27 e 0.91, il turno del secondo giocatore finisce visto che $0.62 + 0.44 + 0.1 + 0.27 + 0.91 > 2$ e $y = 0.91$. Visto che $y > x$, il secondo giocatore vince.

Luise ci pensa un secondo, e obbietta: "Non è onesto".

Qual è la probabilità che il secondo giocatore vinca? Dai la tua risposta arrotondata a 10 cifre decimali dopo la virgola nella forma 0.abcdefghijl

# --hints--

`unfairWager()` dovrebbe restituire `0.5276662759`.

```js
assert.strictEqual(unfairWager(), 0.5276662759);
```

# --seed--

## --seed-contents--

```js
function unfairWager() {

  return true;
}

unfairWager();
```

# --solutions--

```js
// solution required
```

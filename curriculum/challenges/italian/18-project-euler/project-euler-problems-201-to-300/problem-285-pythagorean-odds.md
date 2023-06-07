---
id: 5900f48a1000cf542c50ff9c
title: 'Problema 285: disparità pitagoriche'
challengeType: 1
forumTopicId: 301936
dashedName: problem-285-pythagorean-odds
---

# --description--

Albert sceglie un numero intero positivo $k$, quindi due numeri reali $a$, $b$ sono scelti casualmente nell'intervallo [0,1] con distribuzione uniforme.

La radice quadrata della somma ${(ka + 1)}^2 + {(kb + 1)}^2$ viene quindi calcolata e arrotondata alla cifra intera più vicina. Se il risultato è uguale a $k$, ottiene $k$ punti; altrimenti non ottiene nulla.

Per esempio, se $k = 6$, $a = 0.2$ e $b = 0.85$, poi ${(ka + 1)}^2 + {(kb + 1)}^2 = 42.05$. La radice quadrata di 42.05 è 6.484... che arrotondata al numero intero più vicino, diventa 6. Questo è uguale a $k$, quindi ottiene 6 punti.

Si può dimostrare che se gioca 10 turni con $k = 1, k = 2, \ldots, k = 10$, il valore previsto del suo punteggio totale, arrotondato al quinto decimale, è 10.20914.

Se gioca ${10}^5$ turni con $k = 1, k = 2, k = 3, \ldots, k = {10}^5$, qual è il valore previsto del suo punteggio totale, arrotondato al quinto decimale?

# --hints--

`pythagoreanOdds()` dovrebbe restituire `157055.80999`.

```js
assert.strictEqual(pythagoreanOdds(), 157055.80999);
```

# --seed--

## --seed-contents--

```js
function pythagoreanOdds() {

  return true;
}

pythagoreanOdds();
```

# --solutions--

```js
// solution required
```

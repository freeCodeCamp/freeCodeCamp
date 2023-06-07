---
id: 5900f47f1000cf542c50ff91
title: 'Problema 274: Moltiplicatori di divisibilità'
challengeType: 1
forumTopicId: 301924
dashedName: problem-274-divisibility-multipliers
---

# --description--

Per ogni intero $p > 1$ coprimo a 10 c'è un moltiplicatore di divisibilità positivo $m &lt; p$ che preserva la divisibilità per $p$ per la seguente funzione su qualsiasi intero positivo, $n$:

$f(n) = (\text{all but the last digit of} \\; n) + (\text{the last digit of} \\; n) \times m$

Cioè, se $m$ è il moltiplicatore di divisibilità per $p$, poi $f(n)$ è divisibile per $p$ se e solo se $n$ è divisibile per $p$.

(Quando $n$ è molto più grande di $p$, $f(n)$ sarà inferiore a $n$ e l'applicazione ripetuta di $f$ fornisce un test di divisibilità moltiplicativa per $p$.)

Ad esempio, il moltiplicatore di divisibilità per 113 è 34.

$f(76275) = 7627 + 5 \times 34 = 7797$: 76275 e 7797 sono entrambi divisibili per 113

$f(12345) = 1234 + 5 \times 34 = 1404$: 12345 e 1404 non sono entrambi divisibili per 113

La somma dei moltiplicatori di divisibilità per i primi che sono coprimi a 10 e minori di 1000 è 39517. Qual è la somma dei moltiplicatori di divisibilità per i primi che sono coprimi a 10 e minori di ${10}^7$?

# --hints--

`divisibilityMultipliers()` dovrebbe restituire `1601912348822`.

```js
assert.strictEqual(divisibilityMultipliers(), 1601912348822);
```

# --seed--

## --seed-contents--

```js
function divisibilityMultipliers() {

  return true;
}

divisibilityMultipliers();
```

# --solutions--

```js
// solution required
```

---
id: 5900f5021000cf542c510015
title: 'Problema 406: gioco degli indovinelli'
challengeType: 1
forumTopicId: 302074
dashedName: problem-406-guessing-game
---

# --description--

Stiamo cercando di trovare un numero nascosto selezionato dal set di interi {1, 2, ..., $n$} facendo domande. Per ogni numero (domanda) che chiediamo, otteniamo una di tre possibili risposte:

- "Your guess is lower than the hidden number" (il tuo numero è più piccolo del numero nascosto) (e hai una perdita di a), o
- "Your guess is higher than the hidden number" (Il tuo numero è più alto del numero nascosto) (e hai una perdita di b), o
- "Yes, that's it!" (Sì, è quello!) (e il gioco conclude).

Dati i valori di $n$, $a$, e $b$, una strategia ottimale minimizza la perdita totale per <u>il peggior caso possibile</u>.

Per esempio, se $n = 5$, $a = 2$, e $b = 3$, allora potremmo iniziare chiedendo "<strong>2</strong>" come prima domanda.

Se ci viene detto che 2 è più grande del numero nascosto, (per una perdita di $b = 3$), allora siamo sicuri che "<strong>1</strong>" è il numero nascosto (per una perdita totale di <strong><span style="color: blue;">3</span></strong>).

Se ci viene detto che 2 è più basso del numero nascosto (per un costo di $a = 2$), allora la nostra prossima domanda sarà "<strong>4</strong>".

Se ci viene detto che 4 è più alto del numero nascosto (per un costo di $b 0 3$), allora siamo sicuri che "<strong>3</strong>" è il numero nascosto (per un costo totale di $2 + 3 \color{blue}{\mathbf{5}}$).

Se ci viene detto che 4 è più basso del numero nascosto (per un costo di $a = 2$), allora siamo sicuri che "<strong>5</strong>" è il numero nascosto (per un costo totale di $2 + 2 = \color{blue}{\mathbf{4}}$).

Quindi, per lo scenario peggiore, il costo ottenuto con questa strategia è <strong><span style="color: red">5</span></strong>. Si può anche mostrare che questo è il più basso costo per il peggior scenario ceh può essere ottenuto. Quindi, infatti, abbiamo apena descritto una strategia ottimale per i valori dati di $n$, $a$, e $b$.

Sia $C(n, a, b)$ il costo per il peggio scenario ottenuto da una strategia ottimale per i dati valori di $n$, $a$, e $b$.

Ecco alcuni esempi:

$$\begin{align}   & C(5, 2, 3) = 5 \\\\
  & C(500, \sqrt{2}, \sqrt{3}) = 13.220\\,731\\,97\ldots \\\\   & C(20\\,000, 5, 7) = 82 \\\\
  & C(2\\,000\\,000, √5, √7) = 49.637\\,559\\,55\ldots \\\\ \end{align}$$

Siano $F_k$ i numeri di Fibonacci: $F_k = F_{k - 1} + F_{k - 2}$ con i casi base $F_1 = F_2 = 1$.

Trova $\displaystyle\sum_{k = 1}^{30} C({10}^{12}, \sqrt{k}, \sqrt{F_k})$, e dai la tua risposta arrotondata a 8 decimali dietro il punto.

# --hints--

`guessingGame()` dovrebbe restituire `36813.12757207`.

```js
assert.strictEqual(guessingGame(), 36813.12757207);
```

# --seed--

## --seed-contents--

```js
function guessingGame() {

  return true;
}

guessingGame();
```

# --solutions--

```js
// solution required
```

---
id: 5900f4e51000cf542c50fff7
title: 'Problema 376: Set di dadi non transitivo'
challengeType: 1
forumTopicId: 302038
dashedName: problem-376-nontransitive-sets-of-dice
---

# --description--

Considera la seguente serie di dadi con pallini non standard:

$$$\begin{array}{}   \text{Dado A: } & 1 & 4 & 4 & 4 & 4 & 4 \\\\
  \text{Dado B: } & 2 & 2 & 2 & 5 & 5 & 5 \\\\   \text{Dado C: } & 3 & 3 & 3 & 3 & 3 & 6 \\\\
\end{array}$$

Un gioco è giocato da due giocatori scegliendo un dado a turno e lanciandolo. Il giocatore che lancia il valore più alto vince.

Se il primo giocatore sceglie dado $A$ e il secondo giocatore sceglie dado $B$ otteniamo

$P(\text{secondo giocatore vince}) = \frac{7}{12} > \frac{1}{2}$

Se il primo giocatore sceglie dado $B$ e il secondo giocatore sceglie dado $C$ otteniamo

$P(\text{secondo giocatore vince}) = \frac{7}{12} > \frac{1}{2}$

Se il primo giocatore sceglie dado $C$ e il secondo giocatore sceglie dado $A$ otteniamo

$P(\text{secondo giocatore vince}) = \frac{25}{36} > \frac{1}{2}$

Quindi, qualunque scelta faccia il primo giocatore, il secondo giocatore può scegliere un altro dado e avere una probabilità maggiore del 50% di vittoria. Un set di dadi che hanno questa proprietà è chiamato un set di dadi non transitivi.

Vogliamo indagare quanti insiemi di dadi non transitivi esistono. Assumeremo le seguenti condizioni:

- Ci sono tre dadi a sei facce con ogni faccia che ha tra 1 e $N$ pallini, inclusi.
- I dadi con lo stesso set di pallini sono uguali, indipendentemente dalla faccia del dado su cui i pallini sono situati.
- Lo stesso valore di pallini può apparire su più dadi; se entrambi i giocatori lanciano lo stesso valore nessuno vince.
- I set di dadi $\\{A, B, C\\}$, $\\{B, C, A\\}$ e $\\{C, A, B\\}$ sono lo stesso set.

Per $N = 7$ troviamo 9780 set di questo tipo.

Quanti ce ne sono per $N = 30$?

# --hints--

`nontransitiveSetsOfDice()` dovrebbe restituire `973059630185670`.

```js
assert.strictEqual(nontransitiveSetsOfDice(), 973059630185670);
```

# --seed--

## --seed-contents--

```js
function nontransitiveSetsOfDice() {

  return true;
}

nontransitiveSetsOfDice();
```

# --solutions--

```js
// solution required
```

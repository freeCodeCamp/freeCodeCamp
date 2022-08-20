---
id: 5900f4d51000cf542c50ffe8
title: 'Problema 361: sottosequenza della sequenza di Thue-Morse'
challengeType: 1
forumTopicId: 302022
dashedName: problem-361-subsequence-of-thue-morse-sequence
---

# --description--

La sequenza Thue-Morse \\{T_n\\}$ è una sequenza binaria che soddisfa:

- $T_0 = 0$
- $T_{2n} = T_n$
- $T_{2n + 1} = 1 - T_n$

I primi termini di $\\{T_n\\}$ sono dati come segue: $01101001\color{red}{10010}1101001011001101001\ldots$.

Definiamo $\\{A_n\\}$ come la sequenza ordinata di interi in modo che l'espressione binaria di ogni elemento appaia come successiva in $\\{T_n\\}$. Ad esempio, il numero decimale 18 è espresso come 10010 in binario. 10010 appare in $\\{T_n\\}$ ($T_8$ a $T_{12}$), quindi 18 è un elemento di $\\{A_n\\}$. Il numero decimale 14 è espresso come 1110 in binario. 1110 non appare mai in $\\{T_n\\}$, quindi 14 non è un elemento di $\\{A_n\\}$.

I primi svariati termini di $A_n$ sono dati come segue:

$$\begin{array}{cr}   n   & 0 & 1 & 2 & 3 & 4 & 5 & 6 & 7 &  8 &  9 & 10 & 11 & 12 & \ldots \\\\
  A_n & 0 & 1 & 2 & 3 & 4 & 5 & 6 & 9 & 10 & 11 & 12 & 13 & 18 & \ldots \end{array}$$

Possiamo verificare che $A_{100} = 3251$ e $A_{1000} = 80\\,852\\,364\\,498$.

Trova le ultime 9 cifre di \displaystyle\sum_{k = 1}^{18} A_{{10}^k}$.

# --hints--

`subsequenceOfThueMorseSequence()` dovrebbe restituire `178476944`.

```js
assert.strictEqual(subsequenceOfThueMorseSequence(), 178476944);
```

# --seed--

## --seed-contents--

```js
function subsequenceOfThueMorseSequence() {

  return true;
}

subsequenceOfThueMorseSequence();
```

# --solutions--

```js
// solution required
```

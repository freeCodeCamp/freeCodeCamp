---
id: 5900f5381000cf542c51004b
title: 'Problema 460: Una formica in movimento'
challengeType: 1
forumTopicId: 302135
dashedName: problem-460-an-ant-on-the-move
---

# --description--

Sul piano euclideo, una formica viaggia dal punto $A(0, 1)$ al punto $B(d, 1)$ per un numero intero $d$.

Ad ogni passo, la formica al punto ($x_0$, $y_0$) sceglie uno dei punti sul reticolo ($x_1$, $y_1$) che soddisfano $x_1 ≥ 0$ e $y_1 ≥ 1$ e va dritta a ($x_1$, $y_1$) ad una velocità costante $v$. Il valore di $v$ dipende da $y_0$ e $y_1$ come segue:

- Se $y_0 = y_1$, il valore di $v$ è uguale a $y_0$.
- Se $y_0 ≠ y_1$, il valore di $v$ è pari a $\frac{y_1 - y_0}{\ln y_1 - \ln y_0}$.

L'immagine a sinistra è uno dei percorsi possibili per $d = 4$. Prima la formica va da $A(0, 1)$ a $P_1(1, 3)$ a una velocità $\frac{3 - 1}{\ln 3 - \ln 1} ≈ 1.8205$. Quindi il tempo richiesto è $\frac{\sqrt{5}}{1.820} ≈ 1.2283$.

Da $P_1(1, 3)$ a $P_2(3, 3)$ la formica viaggia a velocità 3 quindi il tempo richiesto è $\frac{2}{3} ≈ 0.6667$. Da $P_2(3, 3)$ a $B(4, 1)$ la formica viaggia a velocità $\frac{1 - 3}{\ln 1 - \ln 3} ≈ 1.8205$ quindi il tempo richiesto è $\frac{\sqrt{5}}{1.8205} ≈ 1.2283$.

Così il tempo totale richiesto è $1.2283 + 0.6667 + 1.2283 = 3.1233$.

L'immagine a destra è un altro percorso. Il tempo totale richiesto è calcolato come $0.98026 + 1 + 0.98026 = 2.96052$. Può essere dimostrato che questo è il percorso più veloce per $d = 4$.

<img class="img-responsive center-block" alt="due possibili percorsi per d = 4" src="https://cdn.freecodecamp.org/curriculum/project-euler/an-ant-on-the-move.jpg" style="background-color: white; padding: 10px;" />

Sia $F(d)$ il tempo totale richiesto se la formica sceglie il percorso più veloce. Ad esempio, $F(4) ≈ 2.960\\,516\\,287$. Siamo in grado di verificare che $F(10) ≈ 4.668\\,187\\,834$ e $F(100) ≈ 9.217\\,221\\,972$.

Trova $F(10\\,000)$. Dai la risposta arrotondata a nove cifre decimali.

# --hints--

`antOnTheMove()` dovrebbe restituire `18.420738199`.

```js
assert.strictEqual(antOnTheMove(), 18.420738199);
```

# --seed--

## --seed-contents--

```js
function antOnTheMove() {

  return true;
}

antOnTheMove();
```

# --solutions--

```js
// solution required
```

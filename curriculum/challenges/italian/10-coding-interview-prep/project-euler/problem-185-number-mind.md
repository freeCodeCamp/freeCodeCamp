---
id: 5900f4251000cf542c50ff38
title: 'Problema 185: Number Mind'
challengeType: 1
forumTopicId: 301821
dashedName: problem-185-number-mind
---

# --description--

Il gioco Number Mind è una variante del ben noto gioco Master Mind.

Invece di chiodini colorati, devi indovinare una sequenza segreta di cifre. Dopo ogni ipotesi ti viene detto solo in quanti posti hai indovinato la cifra corretta. Quindi, se la sequenza era 1234 e avete indovinato 2036, vi sarebbe stato detto che avete una cifra corretta; tuttavia, NON ti sarà detto che hai anche un'altra cifra nel posto sbagliato.

Per esempio, date le seguenti ipotesi per una sequenza segreta di 5 cifre,

$$\begin{align}   & 90342 ;2\\;\text{correct}\\\\
  & 70794 ;0\\;\text{correct}\\\\   & 39458 ;2\\;\text{correct}\\\\
  & 34109 ;1\\;\text{correct}\\\\   & 51545 ;2\\;\text{correct}\\\\
  & 12531 ;1\\;\text{correct} \end{align}$$

La sequenza corretta 39542 è unica.

Sulla base delle ipotesi seguenti,

$$\begin{align}   & 5616185650518293 ;2\\;\text{correct}\\\\
  & 3847439647293047 ;1\\;\text{correct}\\\\   & 5855462940810587 ;3\\;\text{correct}\\\\
  & 9742855507068353 ;3\\;\text{correct}\\\\   & 4296849643607543 ;3\\;\text{correct}\\\\
  & 3174248439465858 ;1\\;\text{correct}\\\\   & 4513559094146117 ;2\\;\text{correct}\\\\
  & 7890971548908067 ;3\\;\text{correct}\\\\   & 8157356344118483 ;1\\;\text{correct}\\\\
  & 2615250744386899 ;2\\;\text{correct}\\\\   & 8690095851526254 ;3\\;\text{correct}\\\\
  & 6375711915077050 ;1\\;\text{correct}\\\\   & 6913859173121360 ;1\\;\text{correct}\\\\
  & 6442889055042768 ;2\\;\text{correct}\\\\   & 2321386104303845 ;0\\;\text{correct}\\\\
  & 2326509471271448 ;2\\;\text{correct}\\\\   & 5251583379644322 ;2\\;\text{correct}\\\\
  & 1748270476758276 ;3\\;\text{correct}\\\\   & 4895722652190306 ;1\\;\text{correct}\\\\
  & 3041631117224635 ;3\\;\text{correct}\\\\   & 1841236454324589 ;3\\;\text{correct}\\\\
  & 2659862637316867 ;2\\;\text{correct} \end{align}$$

Trova la sequenza segreta unica a 16 cifre.

# --hints--

`numberMind()` dovrebbe restituire `4640261571849533`.

```js
assert.strictEqual(numberMind(), 4640261571849533);
```

# --seed--

## --seed-contents--

```js
function numberMind() {

  return true;
}

numberMind();
```

# --solutions--

```js
// solution required
```

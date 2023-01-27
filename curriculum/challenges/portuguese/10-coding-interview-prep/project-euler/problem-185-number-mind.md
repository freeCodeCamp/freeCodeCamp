---
id: 5900f4251000cf542c50ff38
title: 'Problema 185: Senha de números'
challengeType: 1
forumTopicId: 301821
dashedName: problem-185-number-mind
---

# --description--

A mente dos Senha de números é uma variante do conhecido jogo Senha.

Em vez de peças coloridas, você tem que adivinhar uma sequência secreta de algarismos. Depois de cada palpite você é informado apenas em quantos lugares você adivinhou o algarismo correto. Então, se a sequência for 1234 e seu palpite for 2036, você será informado de que tem um algarismo correto. No entanto, NÃO será informado se você tem outro algarismo correto, mas no lugar errado.

Por exemplo, dados os seguintes palpites para uma sequência secreta de 5 algarismos

$$\begin{align}   & 90342 ;2\\;\text{correct}\\\\
  & 70794 ;0\\;\text{correct}\\\\   & 39458 ;2\\;\text{correct}\\\\
  & 34109 ;1\\;\text{correct}\\\\   & 51545 ;2\\;\text{correct}\\\\
  & 12531 ;1\\;\text{correct} \end{align}$$

A sequência correta 39542 é única.

Com base nos palpites abaixo

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

Encontre a sequência secreta única de 16 algarismos.

# --hints--

`numberMind()` deve retornar `4640261571849533`.

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

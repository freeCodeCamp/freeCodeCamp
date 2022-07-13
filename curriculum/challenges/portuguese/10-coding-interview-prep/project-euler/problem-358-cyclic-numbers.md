---
id: 5900f4d21000cf542c50ffe5
title: 'Problema 358: Números cíclicos'
challengeType: 1
forumTopicId: 302018
dashedName: problem-358-cyclic-numbers
---

# --description--

Um número cíclico com $n$ algarismos possui uma propriedade muito interessante:

Quando é multiplicado por 1, 2, 3, 4, ... $n$, todos os produtos têm exatamente os mesmos algarismos, na mesma ordem, mas giraram de modo circular!

O menor número cíclico é o número de 6 algarismos 142857:

$$\begin{align}   & 142857 × 1 = 142857 \\\\
  & 142857 × 2 = 285714 \\\\   & 142857 × 3 = 428571 \\\\
  & 142857 × 4 = 571428 \\\\   & 142857 × 5 = 714285 \\\\
  & 142857 × 6 = 857142 \end{align}$$

O próximo número cíclico é 0588235294117647, com 16 algarismos:

$$\begin{align}   & 0588235294117647 × 1 = 0588235294117647 \\\\
  & 0588235294117647 × 2 = 1176470588235294 \\\\   & 0588235294117647 × 3 = 1764705882352941 \\\\
  & \ldots \\\\ & 0588235294117647 × 16 = 9411764705882352 \end{align}$$

Observe que, para números cíclicos, zeros à esquerda são importantes.

Há apenas um número cíclico para o qual os onze algarismos mais à esquerda são 00000000137 e os cinco algarismos mais à direita são 56789 (ou seja, tem a forma $00000000137\ldots56789$ com um número desconhecido de algarismos no meio). Encontre a soma de todos os seus algarismos.

# --hints--

`cyclicNumbers()` deve retornar `3284144505`.

```js
assert.strictEqual(cyclicNumbers(), 3284144505);
```

# --seed--

## --seed-contents--

```js
function cyclicNumbers() {

  return true;
}

cyclicNumbers();
```

# --solutions--

```js
// solution required
```

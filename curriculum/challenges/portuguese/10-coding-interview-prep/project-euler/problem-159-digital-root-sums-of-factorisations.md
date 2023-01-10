---
id: 5900f40c1000cf542c50ff1e
title: 'Problema 159: Somas das raízes dos algarismos de fatorações'
challengeType: 1
forumTopicId: 301790
dashedName: problem-159-digital-root-sums-of-factorisations
---

# --description--

Um número composto pode ser fatorado de várias maneiras.

Por exemplo, não incluindo a multiplicação por um, 24 podem ser fatorado de 7 formas distintas:

$$\begin{align}   & 24 = 2 \times 2 \times 2 \times 3\\\\
  & 24 = 2 \times 3 \times 4  \\\\   & 24 = 2 \times 2 \times 6  \\\\
  & 24 = 4 \times 6    \\\\   & 24 = 3 \times 8    \\\\
  & 24 = 2 \times 12   \\\\ & 24 = 24 \end{align}$$

Lembre-se de que a raiz de algarismos de um número, na base 10, é encontrada adicionando os algarismos daquele número e repetindo esse processo até que um número chegue a menos de 10. Assim, a raiz dos algarismos de 467 é 8.

Vamos chamar a um soma da raiz dos algarismos (DRS) a soma das raízes dos algarismos dos fatores individuais do nosso número. A tabela abaixo demonstra todos os valores de DRS para 24.

| Fatoração | Soma da raiz dos algarismos |
| --------- | --------------------------- |
| 2x2x2x3   | 9                           |
| 2x3x4     | 9                           |
| 2x2x6     | 10                          |
| 4x6       | 10                          |
| 3x8       | 11                          |
| 2x12      | 5                           |
| 24        | 6                           |

A soma da raiz dos algarismos máxima de 24 é 11. A função $mdrs(n)$ fornece a soma da raiz dos algarismos máxima de $n$. Portanto, $mdrs(24) = 11$.

Encontre $\sum{mdrs(n)}$ para $1 &lt; n &lt; 1.000.000$.

# --hints--

`euler159()` deve retornar `14489159`.

```js
assert.strictEqual(euler159(), 14489159);
```

# --seed--

## --seed-contents--

```js
function euler159() {

  return true;
}

euler159();
```

# --solutions--

```js
// solution required
```

---
id: 5900f4e51000cf542c50fff7
title: 'Problema 376: Conjuntos de dados não transitivos'
challengeType: 1
forumTopicId: 302038
dashedName: problem-376-nontransitive-sets-of-dice
---

# --description--

Considere o seguinte conjunto de dados com valores fora do padrão de 1 a 6:

$$\begin{array}{}   \text{Die A: } & 1 & 4 & 4 & 4 & 4 & 4 \\\\
  \text{Die B: } & 2 & 2 & 2 & 5 & 5 & 5 \\\\   \text{Die C: } & 3 & 3 & 3 & 3 & 3 & 6 \\\\
\end{array}$$

Um jogo é disputado por dois jogadores que escolhem um dado por vez e o rolam. O jogador que rolar nos dados o maior valor ganha.

Se o primeiro jogador escolher o dado $A$ e o segundo jogador escolher o dado $B$, temos

$P(\text{vitória do segundo jogador}) = \frac{7}{12} > \frac{1}{2}$

Se o primeiro jogador escolher o dado $B$ e o segundo jogador escolher o dado $C$, temos

$P(\text{vitória do segundo jogador}) = \frac{7}{12} > \frac{1}{2}$

Se o primeiro jogador escolher o dado $C$ e o segundo jogador escolher o dado $A$, nós temos

$P(\text{vitória do segundo jogador}) = \frac{25}{36} > \frac{1}{2}$

Portanto, seja qual for o dado que o primeiro jogador escolher, o segundo jogador pode escolher outro dado e ter mais de 50% de chance de ganhar. Um conjunto de dados com esta propriedade é denominado conjunto de dados não transitivo.

Queremos investigar quantos conjuntos de dados não transitivos existem. Assumiremos as seguintes condições:

- Existem três dados de seis lados com cada lado tendo entre 1 e $N$ pontos, inclusive.
- Dados com o mesmo conjunto de pontos são iguais, independentemente de qual lado no dado o ponto está localizado.
- O mesmo valor de pontos pode aparecer em vários dados. Se ambos os jogadores obtiverem o mesmo valor, nenhum deles ganhará.
- Os conjuntos de dados $\\{A, B, C\\}$, $\\{B, C, A\\}$ e $\\{C, A, B\\}$ são o mesmo conjunto.

Para $N = 7$ encontramos 9780 desses conjuntos.

Quantos são para $N = 30$?

# --hints--

`nontransitiveSetsOfDice()` deve retornar `973059630185670`.

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

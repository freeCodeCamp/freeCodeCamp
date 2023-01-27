---
id: 5900f43e1000cf542c50ff4f
title: 'Problema 209: Lógica circular'
challengeType: 1
forumTopicId: 301850
dashedName: problem-209-circular-logic
---

# --description--

Uma tabela verdade binária de $k$ entradas é um mapa de $k$ bits de entrada (algarismos binários, 0 [false] ou 1 [true]) para 1 bit de saída. Por exemplo, as tabelas verdade binárias de $2$ entradas para as funções lógicas de $AND$ e $XOR$ são:

| x | y | x AND y |
| - | - | ------- |
| 0 | 0 | 0       |
| 0 | 1 | 0       |
| 1 | 0 | 0       |
| 1 | 1 | 1       |

| x | y | x XOR y |
| - | - | ------- |
| 0 | 0 | 0       |
| 0 | 1 | 1       |
| 1 | 0 | 1       |
| 1 | 1 | 0       |

Quantas tabelas verdade binárias de $6$ entradas, $τ$, satisfazem a fórmula

$$τ(a, b, c, d, e, f) \\; AND \\; τ(b, c, d, e, f, a \\; XOR \\; (b \\; AND \\; c)) = 0$$

para todas as entradas de $6$ bits ($a$, $b$, $c$, $d$, $e$, $f$)?

# --hints--

`circularLogic()` deve retornar `15964587728784`.

```js
assert.strictEqual(circularLogic(), 15964587728784);
```

# --seed--

## --seed-contents--

```js
function circularLogic() {

  return true;
}

circularLogic();
```

# --solutions--

```js
// solution required
```

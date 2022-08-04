---
id: 5900f4891000cf542c50ff9b
title: 'Problema 284: Quadrados estáveis'
challengeType: 1
forumTopicId: 301935
dashedName: problem-284-steady-squares
---

# --description--

O número de 3 algarismos 376 no sistema de numeração decimal é um exemplo de números com a propriedade especial de que o quadrado termina com os mesmos algarismos: ${376}^2 = 141376$. Vamos chamar um número com essa propriedade de um quadrado estável.

Os quadrados estáveis também podem ser observados em outros sistemas de numeração. No sistema de numeração de base 14, o número de 3 algarismos $c37$ também é um quadrado estável: $c37^2 = aa0c37$ e a soma de seus algarismos é $c+3+7=18$ no mesmo sistema de numeração. As letras $a$, $b$, $c$ e $d$ são usadas para os algarismos 10, 11, 12 e 13, respectivamente, de uma maneira semelhante ao sistema de numeração hexadecimal.

Para $1 ≤ n ≤ 9$, a soma dos algarismos de todos os quadrados estáveis de $n$ algarismos no sistema de numeração de base 14 é $2d8$ (582 no sistema decimal). Não são permitidos quadrados estáveis com zeros à esquerda.

Encontre a soma dos algarismos de todos os quadrados estáveis de $n$ algarismos no sistema de numeração de base 14 para $1 ≤ n ≤ 10000$ (no sistema decimal) e dê sua resposta como uma string no sistema de base 14 usando letras minúsculas, quando necessário.

# --hints--

`steadySquares()` deve retornar uma string.

```js
assert(typeof steadySquares() === 'string');
```

`steadySquares()` deve retornar a string `5a411d7b`.

```js
assert.strictEqual(steadySquares(), '5a411d7b');
```

# --seed--

## --seed-contents--

```js
function steadySquares() {

  return true;
}

steadySquares();
```

# --solutions--

```js
// solution required
```

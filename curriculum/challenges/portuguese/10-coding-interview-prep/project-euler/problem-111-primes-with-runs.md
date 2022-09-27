---
id: 5900f3db1000cf542c50feee
title: 'Problema 111: Primos com execuções'
challengeType: 1
forumTopicId: 301736
dashedName: problem-111-primes-with-runs
---

# --description--

Considerando primos de 4 algarismos contendo algarismos repetidos, é claro que eles não podem ser todos iguais: 1111 é divisível por 11, 2222 é divisível por 22, e assim por diante. Mas há nove primos de 4 algarismos que contêm três números 1:

$$1117, 1151, 1171, 1181, 1511, 1811, 2111, 4111, 8111$$

Vamos dizer que $M(n, d)$ representa o número máximo de algarismos repetidos para um primo de n algarismos, onde d é o algarismo repetido, $N(n, d)$ representa quantos desses primos existem, e $S(n, d)$ representa a soma desses primos.

Então $M(4, 1) = 3$ é o número máximo de algarismos repetidos para um primo de 4 algarismos, onde 1 é o algarismo repetido, há $N(4, 1) = 9$ primos desses, e a soma desses primos é $S(4, 1) = 22275$. Acontece que, para d = 0, só é possível ter $M(4, 0) = 2$ algarismos repetidos, mas há $N(4, 0) = 13$ desses casos.

Da mesma forma, obtemos os seguintes resultados para primos de 4 algarismos.

| Algarismo, d | $M(4, d)$ | $N(4, d)$ | $S(4, d)$ |
| ------------ | --------- | --------- | --------- |
| 0            | 2         | 13        | 67061     |
| 1            | 3         | 9         | 22275     |
| 2            | 3         | 1         | 2221      |
| 3            | 3         | 12        | 46214     |
| 4            | 3         | 2         | 8888      |
| 5            | 3         | 1         | 5557      |
| 6            | 3         | 1         | 6661      |
| 7            | 3         | 9         | 57863     |
| 8            | 3         | 1         | 8887      |
| 9            | 3         | 7         | 48073     |

Para d = 0 até 9, a soma de todos $S(4, d)$ é 273700. Calcule a soma de todos os $S(10, d)$.

# --hints--

`primesWithRuns()` deve retornar `612407567715`.

```js
assert.strictEqual(primesWithRuns(), 612407567715);
```

# --seed--

## --seed-contents--

```js
function primesWithRuns() {

  return true;
}

primesWithRuns();
```

# --solutions--

```js
// solution required
```

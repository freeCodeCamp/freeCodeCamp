---
id: 5900f4971000cf542c50ffa9
title: 'Problema 298: Amnésia seletiva'
challengeType: 1
forumTopicId: 301950
dashedName: problem-298-selective-amnesia
---

# --description--

Larry e Robin jogam um jogo de memória envolvendo uma sequência de números aleatórios entre 1 e 10, que são chamado um a cada turno. Cada jogador pode se lembrar de até 5 números anteriores. Quando o número chamado estiver na memória de um jogador, este jogador recebe um ponto. Caso contrário, o jogador adiciona o número chamado à memória, removendo outro número se a memória estiver cheia.

Os dois jogadores começam com as memórias vazias. Os dois jogadores sempre adicionam novos números perdidos à sua memória, mas usam uma estratégia diferente para decidir qual número remover: a estratégia de Larry é remover o número que não foi chamado há mais tempo. A estratégia de Robin é remover o número que esteve na memória por mais tempo.

Jogo de exemplo:

| Turno | Número chamado | Memória de Larry | Pontuação de Larry | Memória de Robin | Pontuação de Robin |
| ----- | -------------- | ----------------:| ------------------ | ---------------- | ------------------ |
| 1     | 1              |                1 | 0                  | 1                | 0                  |
| 2     | 2              |              1,2 | 0                  | 1,2              | 0                  |
| 3     | 4              |            1,2,4 | 0                  | 1,2,4            | 0                  |
| 4     | 6              |          1,2,4,6 | 0                  | 1,2,4,6          | 0                  |
| 5     | 1              |          1,2,4,6 | 1                  | 1,2,4,6          | 1                  |
| 6     | 8              |        1,2,4,6,8 | 1                  | 1,2,4,6,8        | 1                  |
| 7     | 10             |       1,4,6,8,10 | 1                  | 2,4,6,8,10       | 1                  |
| 8     | 2              |       1,2,6,8,10 | 1                  | 2,4,6,8,10       | 2                  |
| 9     | 4              |       1,2,4,8,10 | 1                  | 2,4,6,8,10       | 3                  |
| 10    | 1              |       1,2,4,8,10 | 2                  | 1,4,6,8,10       | 3                  |

Chamando a pontuação de Larry de $L$ e a pontuação do Robin de $R$, qual é o valor esperado de $|L - R|$ após 50 turnos? Arredonde sua resposta para até oito casas decimais usando o formato x.xxxxxxxx.

# --hints--

`selectiveAmnesia()` deve retornar `1.76882294`.

```js
assert.strictEqual(selectiveAmnesia(), 1.76882294);
```

# --seed--

## --seed-contents--

```js
function selectiveAmnesia() {

  return true;
}

selectiveAmnesia();
```

# --solutions--

```js
// solution required
```

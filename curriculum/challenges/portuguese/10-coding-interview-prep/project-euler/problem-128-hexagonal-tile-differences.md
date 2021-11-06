---
id: 5900f3ec1000cf542c50feff
title: 'Problema 128: Diferenças de blocos hexagonais'
challengeType: 5
forumTopicId: 301755
dashedName: problem-128-hexagonal-tile-differences
---

# --description--

Um bloco hexagonal com o número 1 é cercado por um anel de seis blocos hexagonais, começando às "12 horas" e numerando os blocos de 2 a 7 em direção anti-horária.

Novos anéis são adicionados da mesma forma, com os próximos anéis sendo numerados de 8 a 19, 20 a 37, 38 a 61, e assim por diante. O diagrama abaixo mostra os três primeiros anéis.

<img class="img-responsive center-block" alt="três primeiros anéis de blocos hexagonais dispostos com números de 1 a 37 e com os blocos 8 e 17 destacados" src="https://cdn.freecodecamp.org/curriculum/project-euler/hexagonal-tile-differences.png" style="background-color: white; padding: 10px;" />

Ao calcular a diferença entre o bloco $n$ e cada um de seus seis vizinhos, definiremos $PD(n)$ como o número dessas diferenças primas, que são primos.

Por exemplo, trabalhando no sentido horário em torno do bloco 8, as diferenças são 12, 29, 11, 6, 1 e 13. Portanto, $PD(8) = 3$.

Da mesma forma, as diferenças em torno do bloco 17 são 1, 17, 16, 1, 11 e 10. Portanto, $PD(17) = 2$.

Pode-se ser mostrar que o valor máximo de $PD(n)$ é $3$.

Se todos os blocos para os quais $PD(n) = 3$ estiverem listados em ordem ascendente para formar uma sequência, o décimo bloco seria 271.

Encontre o 2000º bloco desta sequência.

# --hints--

`hexagonalTile()` deve retornar `14516824220`.

```js
assert.strictEqual(hexagonalTile(), 14516824220);
```

# --seed--

## --seed-contents--

```js
function hexagonalTile() {

  return true;
}

hexagonalTile();
```

# --solutions--

```js
// solution required
```

---
id: 5664820f61c48e80c9fa476c
title: Jogar golfe de código
challengeType: 1
videoUrl: 'https://scrimba.com/c/c9ykNUR'
forumTopicId: 18195
dashedName: golf-code
---

# --description--

No jogo de golfe, cada buraco tem um `par`, significando o número médio de `strokes` que se espera que golfista faça a fim de derrubar a bola no buraco para completar a jogada. Dependendo da distância acima ou abaixo de `par` que seu número de `strokes` estiver, há diferentes apelidos.

Sua função receberá os argumentos `par` e `strokes`. Retorne a string correta de acordo com esta tabela que lista os strokes em ordem de prioridade; superior (mais alta) para o final (mais baixo):

<table class='table table-striped'><thead><tr><th>Strokes</th><th>Retorno</th></tr></thead><tbody><tr><td>1</td><td>"Hole-in-one!"</td></tr><tr><td>&#x3C;= par - 2</td><td>"Eagle"</td></tr><tr><td>par - 1</td><td>"Birdie"</td></tr><tr><td>par</td><td>"Par"</td></tr><tr><td>par + 1</td><td>"Bogey"</td></tr><tr><td>par + 2</td><td>"Double Bogey"</td></tr><tr><td>>= par + 3</td><td>"Go Home!"</td></tr></tbody></table>

`par` e `strokes` sempre será um número e positivo. Nós adicionamos um array com todos os nomes para sua conveniência.

# --hints--

`golfScore(4, 1)` deve retornar a string `Hole-in-one!`

```js
assert(golfScore(4, 1) === 'Hole-in-one!');
```

`golfScore(4, 2)` deve retornar a string `Eagle`

```js
assert(golfScore(4, 2) === 'Eagle');
```

`golfScore(5, 2)` deve retornar a string `Eagle`

```js
assert(golfScore(5, 2) === 'Eagle');
```

`golfScore(4, 3)` deve retornar a string `Birdie`

```js
assert(golfScore(4, 3) === 'Birdie');
```

`golfScore(4, 4)` deve retornar a string `Par`

```js
assert(golfScore(4, 4) === 'Par');
```

`golfScore(1, 1)` deve retornar a string `Hole-in-one!`

```js
assert(golfScore(1, 1) === 'Hole-in-one!');
```

`golfScore(5, 5)` deve retornar a string `Par`

```js
assert(golfScore(5, 5) === 'Par');
```

`golfScore(4, 5)` deve retornar a string `Bogey`

```js
assert(golfScore(4, 5) === 'Bogey');
```

`golfScore(4, 6)` deve retornar a string `Double Bogey`

```js
assert(golfScore(4, 6) === 'Double Bogey');
```

`golfScore(4, 7)` deve retornar a string `Go Home!`

```js
assert(golfScore(4, 7) === 'Go Home!');
```

`golfScore(5, 9)` deve retornar a string `Go Home!`

```js
assert(golfScore(5, 9) === 'Go Home!');
```

# --seed--

## --seed-contents--

```js
const names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];

function golfScore(par, strokes) {
  // Only change code below this line


  return "Change Me";
  // Only change code above this line
}

golfScore(5, 4);
```

# --solutions--

```js
function golfScore(par, strokes) {
  if (strokes === 1) {
    return "Hole-in-one!";
  }

  if (strokes <= par - 2) {
    return "Eagle";
  }

  if (strokes === par - 1) {
    return "Birdie";
  }

  if (strokes === par) {
    return "Par";
  }

  if (strokes === par + 1) {
    return "Bogey";
  }

  if(strokes === par + 2) {
    return "Double Bogey";
  }

  return "Go Home!";
}
```

---
id: 5900f47c1000cf542c50ff8e
title: 'Problema 270: Corte dos quadrados'
challengeType: 1
forumTopicId: 301920
dashedName: problem-270-cutting-squares
---

# --description--

Um pedaço de papel quadrado com dimensões inteiras $N×N$ é colocado com um canto na origem e dois de seus lados ao longo dos eixos $x$ e $y$. Depois, cortamos os quadrados respeitando as seguintes regras:

- Fazemos apenas cortes retos entre dois pontos que estejam em lados diferentes do quadrado e que tenham como coordenadas números inteiros.
- Dois cortes não podem se cruzar, mas vários cortes podem se encontrar no mesmo ponto das arestas.
- Prosseguimos até que não seja possível fazer mais cortes.

Contando quaisquer reflexões ou rotações distintas, chamamos de $C(N)$ o número de maneiras de cortar um quadrado $N×N$. Por exemplo, $C(1) = 2$ e $C(2) = 30$ (mostrados abaixo).

<img class="img-responsive center-block" alt="maneiras de cortar o quadrado 2x2, contando reflexões e rotações como distintas" src="https://cdn.freecodecamp.org/curriculum/project-euler/cutting-squares.gif" style="background-color: white; padding: 10px;" />

Qual é o $C(30)\bmod {10}^8$ ?

# --hints--

`cuttingSquares()` deve retornar `82282080`.

```js
assert.strictEqual(cuttingSquares(), 82282080);
```

# --seed--

## --seed-contents--

```js
function cuttingSquares() {

  return true;
}

cuttingSquares();
```

# --solutions--

```js
// solution required
```

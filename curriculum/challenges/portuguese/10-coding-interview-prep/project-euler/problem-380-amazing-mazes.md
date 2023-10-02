---
id: 5900f4e81000cf542c50fffb
title: 'Problema 380: Labirintos fantásticos!'
challengeType: 1
forumTopicId: 302044
dashedName: problem-380-amazing-mazes
---

# --description--

Um labirinto $m×n$ é uma grade retangular $m×n$ com paredes colocadas entre as células da malha de forma que haja exatamente um caminho do quadrado superior esquerdo para qualquer outro quadrado. Os exemplos a seguir são de um labirinto 9×12 e de um labirinto 15×20:

<img class="img-responsive center-block" alt="labirinto 9x12 e labirinto 15x20" src="https://cdn.freecodecamp.org/curriculum/project-euler/amazing-mazes.gif" style="background-color: white; padding: 10px;" />

Considere $C(m, n)$ como o número de labirintos distintos $m×n$. Os labirintos que podem ser criados por rotação e reflexão de outro labirinto são considerados distintos.

Pode-se verificar que $C(1, 1) = 1$, $C(2, 2) = 4$, $C(3, 4) = 2415$ e $C(9, 12) = 2.5720\mathrm{e}\\,46$ (na notação científica, arredondado para 5 algarismos significantes).

Encontre $C(100, 500)$ e escreva sua resposta em uma string em notação científica arredondada para 5 algarismos significativos.

Ao dar sua resposta, use letra minúscula para separar a mantissa e o expoente. Ex: se a resposta for 1234567891011, o formato da resposta deve ser a string `1.2346e12`.

# --hints--

`amazingMazes()` deve retornar uma string.

```js
assert(typeof amazingMazes() === 'string');
```

`amazingMazes()` deve retornar a string `6.3202e25093`.

```js
assert.strictEqual(amazingMazes(), '6.3202e25093');
```

# --seed--

## --seed-contents--

```js
function amazingMazes() {

  return true;
}

amazingMazes();
```

# --solutions--

```js
// solution required
```

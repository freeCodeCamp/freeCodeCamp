---
id: 5900f4ca1000cf542c50ffdc
title: 'Problema 349: Formiga de Langton'
challengeType: 5
forumTopicId: 302008
dashedName: problem-349-langtons-ant
---

# --description--

Uma formiga se move em uma grade regular de quadrados coloridos em preto ou branco.

A formiga está sempre orientada em uma das direções cardeais (esquerda, direita, para cima ou para baixo) e se move do quadrado para um quadrado adjacente de acordo com as seguintes regras:

- se estiver em um quadrado preto, ela transforma a cor do quadrado para branco, gira 90° no sentido anti-horário e avança um quadrado.
- se estiver em um quadrado branco, ela transforma a cor do quadrado para preto, gira 90° no sentido horário e avança um quadrado.

Começando com uma grade que é inteiramente branca, quantos quadrados são pretos após ${10}^{18}$ movimentos da formiga?

# --hints--

`langtonsAnt()` deve retornar `115384615384614940`.

```js
assert.strictEqual(langtonsAnt(), 115384615384614940);
```

# --seed--

## --seed-contents--

```js
function langtonsAnt() {

  return true;
}

langtonsAnt();
```

# --solutions--

```js
// solution required
```

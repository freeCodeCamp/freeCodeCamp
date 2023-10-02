---
id: 5900f4621000cf542c50ff75
title: 'Problema 246: Tangentes de uma elipse'
challengeType: 1
forumTopicId: 301893
dashedName: problem-246-tangents-to-an-ellipse
---

# --description--

Uma definição para uma elipse é:

Dado um círculo $c$ com centro $M$ e raio $r$, além de um ponto $G$ tal que $d(G, M) < r$, o local dos pontos que estão equidistantes de $c$ e $G$ formam uma elipse.

A construção dos pontos da elipse é mostrada abaixo.

<img class="img-responsive center-block" alt="animação de construção da elipse" src="https://cdn.freecodecamp.org/curriculum/project-euler/tangents-to-an-ellipse-1.gif" style="background-color: white; padding: 10px;" />

São dados os pontos $M(-2000, 1500)$ e $G(8000, 1500)$.

Também é dado o círculo $c$ com centro $M$ e raio $15.000$.

A localidade dos pontos que estão equidistantes de $G$ e $c$ forma uma elipse $e$.

De um ponto $P$ fora de $e$ as duas tangentes $t_1$ e $t_2$ da elipse são desenhadas.

Considere os pontos em que $t_1$ e $t_2$ tocam a elipse como $R$ e $S$.

<img class="img-responsive center-block" alt="círculo c com o centro M, raio 15000 e ponto P fora da elipse; do ponto P, duas tangentes t_1 e t_2 são desenhadas para a elipse, com pontos que a tocam chamados R e S" src="https://cdn.freecodecamp.org/curriculum/project-euler/tangents-to-an-ellipse-2.gif" style="background-color: white; padding: 10px;" />

Para quantos pontos da rede $P$ é um ângulo $RPS$ maior que 45°?

# --hints--

`tangentsToAnEllipse()` deve retornar `810834388`.

```js
assert.strictEqual(tangentsToAnEllipse(), 810834388);
```

# --seed--

## --seed-contents--

```js
function tangentsToAnEllipse() {

  return true;
}

tangentsToAnEllipse();
```

# --solutions--

```js
// solution required
```

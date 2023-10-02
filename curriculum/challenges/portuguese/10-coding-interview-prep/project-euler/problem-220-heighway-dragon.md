---
id: 5900f4481000cf542c50ff5b
title: 'Problema 220: Dragão de Heighway'
challengeType: 1
forumTopicId: 301863
dashedName: problem-220-heighway-dragon
---

# --description--

Considere $D_0$ como sendo a string de duas letras "Fa". Para $n ≥ 1$, derive $D_n$ de $D_{n - 1}$ pelas regras de reescrita da string:

- "a" → "aRbFR"
- "b" → "LFaLb"

Assim, $D_0$ = "Fa", $D_1$ = "FaRbFR", $D_2$ = "FaRbFRRLFaLbFR" e assim por diante.

Essas strings podem ser interpretadas como instruções para um programa gráfico do computador, com "F" significando "desenhar uma unidade", "L" significando "virar 90 graus à esquerda", "R" significando "virar 90 graus à direita " e "a" e "b" sendo ignorados. A posição inicial do cursor do computador é (0,0), apontando na direção de (0,1).

Então $D_n$ é um desenho exótico conhecido como Dragão de Heighway da ordem $n$. Por exemplo, $D_{10}$ é mostrado abaixo. Contando cada "F" como uma etapa, o local destacado em (18,16) é a posição alcançada após 500 etapas.

<img class="img-responsive center-block" alt="desenho do Dragão de Heighway após 500 etapas" src="https://cdn.freecodecamp.org/curriculum/project-euler/heighway-dragon.gif" style="background-color: white; padding: 10px;" />

Qual é a posição do cursor depois de ${10}^{12}$ etapas em $D_{50}$? Dê sua resposta como uma string na forma `x,y` sem espaços.

# --hints--

`heighwayDragon()` deve retornar uma string.

```js
assert(typeof heighwayDragon() === 'string');
```

`heighwayDragon()` deve retornar a string `139776,963904`.

```js
assert.strictEqual(heighwayDragon(), '139776,963904');
```

# --seed--

## --seed-contents--

```js
function heighwayDragon() {

  return true;
}

heighwayDragon();
```

# --solutions--

```js
// solution required
```

---
id: 5900f52e1000cf542c510041
title: 'Problema 450: Pontos da rede e hipocicloide'
challengeType: 1
forumTopicId: 302123
dashedName: problem-450-hypocycloid-and-lattice-points
---

# --description--

Um hipocicloide é a curva desenhada por um ponto em um pequeno círculo girando dentro de um círculo maior. As equações paramétricas de um hipocicloide centrado na origem e começando no ponto mais à direita são dadas por:

$$x(t) = (R - r) \cos(t) + r \cos(\frac{R - r}{r}t)$$

$$y(t) = (R - r) \sin(t) - r \sin(\frac{R - r}{r} t)$$

Onde $R$ é o raio do círculo grande e $r$ o raio do círculo pequeno.

Considere $C(R, r)$ como o conjunto de pontos distintos com coordenadas em números inteiros do hipocicloide com raio $R$ e $r$ e para o qual há um valor correspondente de $t$, tal que $\sin(t)$ e $\cos(t)$ são números racionais.

Considere $S(R, r) = \sum\_{(x,y) \in C(R, r)} |x| + |y|$ como a soma dos valores absolutos das coordenadas $x$ e $y$ dos pontos em $C(R, r)$.

Considere $T(N) = \sum_{R = 3}^N \sum_{r=1}^{\left\lfloor \frac{R - 1}{2} \right\rfloor} S(R, r)$ como a soma de $S(R, r)$ para $R$ e $r$ sendo números inteiros positivos, $R\leq N$ e $2r &lt; R$.

Você é informado de que:

$$\begin{align}   C(3, 1) = & \\{(3, 0), (-1, 2), (-1,0), (-1,-2)\\} \\\\
  C(2500, 1000) = & \\{(2500, 0), (772, 2376), (772, -2376), (516, 1792), (516, -1792), (500, 0), (68, 504), \\\\ &(68, -504),(-1356, 1088), (-1356, -1088), (-1500, 1000), (-1500, -1000)\\} \end{align}$$

**Observação:** (-625, 0) não é um elemento de $C(2500, 1000)$, pois $\sin(t)$ não é um número racional para os valores correspondentes de $t$.

$S(3, 1) = (|3| + |0|) + (|-1| + |2|) + (|-1| + |0|) + (|-1| + |-2|) = 10$

$T(3) = 10$; $T(10) = 524$; $T(100) = 580.442$; $T({10}^3) = 583.108.600$.

Encontre $T({10}^6)$.

# --hints--

`hypocycloidAndLatticePoints()` deve retornar `583333163984220900`.

```js
assert.strictEqual(hypocycloidAndLatticePoints(), 583333163984220900);
```

# --seed--

## --seed-contents--

```js
function hypocycloidAndLatticePoints() {

  return true;
}

hypocycloidAndLatticePoints();
```

# --solutions--

```js
// solution required
```

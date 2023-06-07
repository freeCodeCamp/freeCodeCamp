---
id: 5900f4731000cf542c50ff85
title: 'Problema 262: Cadeia de montanhas'
challengeType: 1
forumTopicId: 301911
dashedName: problem-262-mountain-range
---

# --description--

A seguinte equação representa a topografia contínua de uma região montanhosa, dando a elevação $h$ em qualquer ponto ($x$,$y$):

$$h = \left(5000 - \frac{x^2 + y^2 + xy}{200} + \frac{25(x + y)}{2}\right) \times e^{-\left|\frac{x^2 + y^2}{1\\,000\\,000} - \frac{3(x + y)}{2000} + \frac{7}{10}\right|}$$

Um mosquito pretende voar de A(200,200) para B(1400,1400), sem sair da área dada por $0 ≤ x$, $y ≤ 1600$.

Por causa das montanhas no caminho, primeiro ele sobe em linha reta até um ponto A', tendo a elevação $f$. Então, enquanto permanece na mesma elevação $f$, ele voa em torno de quaisquer obstáculos até chegar em um ponto B' diretamente acima de B.

Primeiro, determine $f_{min}$, que é a elevação mínima constante que permite esse percurso de A a B, enquanto permanece na área especificada. Depois, encontre o comprimento do caminho mais curto entre A' e B', enquanto ele voa naquela elevação constante de $f_{min}$.

Dê esse comprimento como sua resposta, arredondado para três casas decimais.

**Observação:** por conveniência, a função de elevação mostrada acima é repetida abaixo, em uma forma adequada para a maioria das linguagens de programação: `h=( 5000-0.005*(x*x+y*y+x*y)+12.5*(x+y) )* exp( -abs(0.000001*(x*x+y*y)-0.0015*(x+y)+0.7) )`.

# --hints--

`mountainRange()` deve retornar `2531.205`.

```js
assert.strictEqual(mountainRange(), 2531.205);
```

# --seed--

## --seed-contents--

```js
function mountainRange() {

  return true;
}

mountainRange();
```

# --solutions--

```js
// solution required
```

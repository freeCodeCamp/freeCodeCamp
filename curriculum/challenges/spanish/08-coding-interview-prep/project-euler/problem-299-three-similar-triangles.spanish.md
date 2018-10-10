---
id: 5900f4971000cf542c50ffaa
challengeType: 5
title: 'Problem 299: Three similar triangles'
videoUrl: ''
localeTitle: 'Problema 299: Tres triángulos semejantes'
---

## Description
<section id="description"> Se seleccionan cuatro puntos con coordenadas enteras: A (a, 0), B (b, 0), C (0, c) y D (0, d), con 0 &lt;a &lt;b y 0 &lt;c &lt;d. El punto P, también con coordenadas enteras, se elige en la línea AC para que los tres triángulos ABP, CDP y BDP sean todos similares. <p> Es fácil probar que los tres triángulos pueden ser similares, solo si a = c. </p><p> Entonces, dado que a = c, estamos buscando tripletes (a, b, d) de manera que al menos un punto P (con coordenadas enteras) exista en AC, haciendo que los tres triángulos ABP, CDP y BDP sean todos similares. </p><p> Por ejemplo, si (a, b, d) = (2,3,4), se puede verificar fácilmente que el punto P (1,1) satisface la condición anterior. Tenga en cuenta que los tripletes (2,3,4) y (2,4,3) se consideran distintos, aunque el punto P (1,1) es común para ambos. </p><p> Si b + d &lt;100, hay 92 tripletes distintos (a, b, d) de manera que el punto P existe. Si b + d &lt;100 000, hay 320471 tripletes distintos (a, b, d) de manera que el punto P existe. Si b + d &lt;100 000 000, ¿cuántos tripletes distintos (a, b, d) hay de tal manera que exista el punto P? </p></section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>euler299()</code> debe devolver 549936643.
    testString: 'assert.strictEqual(euler299(), 549936643, "<code>euler299()</code> should return 549936643.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function euler299() {
  // Good luck!
  return true;
}

euler299();

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>

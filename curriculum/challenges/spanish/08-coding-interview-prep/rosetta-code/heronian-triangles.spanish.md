---
title: Heronian triangles
id: 595b98f8b5a2245e243aa831
challengeType: 5
videoUrl: ''
localeTitle: Triángulos heronianos
---

## Description
<section id="description"><p> <a href="https://en.wikipedia.org/wiki/Heron&#x27;s formula" title="wp: fórmula de Heron">La fórmula del héroe</a> para el área de un triángulo dada la longitud de sus tres lados <big>a,</big> <big>b</big> y <big>c</big> está dada por: </p><p> <big>$$ A = \ sqrt {s (sa) (sb) (sc)}, $$</big> </p><p> donde <big>s</big> es la mitad del perímetro del triángulo; es decir, </p><p> <big>$$ s = \ frac {a + b + c} {2}. $$</big> </p><p> <a href="http://www.had2know.com/academics/heronian-triangles-generator-calculator.html" title="enlace: http://www.had2know.com/academics/heronian-triangles-generator-calculator.html">Los triángulos heronianos</a> son triángulos cuyos lados y área son todos enteros. </p><p> Un ejemplo es el triángulo con lados 3, 4, 5 cuya área es 6 (y cuyo perímetro es 12). </p><p> Tenga en cuenta que cualquier triángulo cuyos lados son todos un entero múltiplo de 3, 4, 5; como 6, 8, 10, también será un triángulo heroniano. </p><p> Define un triángulo heroniano primitivo como un triángulo heroniano donde el mayor divisor común </p><p> De los tres lados es 1 (unidad). </p><p> Esto excluirá, por ejemplo, el triángulo 6, 8, 10. </p> Tarea: <p> Implementar una función basada en la fórmula de héroe que devuelve el primero <code>n <sub>th</sub></code> triángulos ordenadas en una matriz de matrices. </p></section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>heronianTriangle</code> es una función.
    testString: 'assert(typeof heronianTriangle === "function", "<code>heronianTriangle</code> is a function.");'
  - text: '<code>heronianTriangle()</code> debe devolver <code>[[3, 4, 5], [5, 5, 6], [5, 5, 8], [4, 13, 15], [5, 12, 13], [9, 10, 17], [3, 25, 26], [7, 15, 20], [10, 13, 13], [8, 15, 17]]</code>'
    testString: 'assert.deepEqual(heronianTriangle(testCases[0]), res[0], "<code>heronianTriangle()</code> should return <code>[[3, 4, 5], [5, 5, 6], [5, 5, 8], [4, 13, 15], [5, 12, 13], [9, 10, 17], [3, 25, 26], [7, 15, 20], [10, 13, 13], [8, 15, 17]]</code>");'
  - text: '<code>heronianTriangle()</code> debe devolver <code>[[3, 4, 5], [5, 5, 6], [5, 5, 8], [4, 13, 15], [5, 12, 13], [9, 10, 17], [3, 25, 26], [7, 15, 20], [10, 13, 13], [8, 15, 17], [13, 13, 24], [6, 25, 29], [11, 13, 20], [5, 29, 30], [13, 14, 15]],</code>'
    testString: 'assert.deepEqual(heronianTriangle(testCases[1]), res[1], "<code>heronianTriangle()</code> should return <code>[[3, 4, 5], [5, 5, 6], [5, 5, 8], [4, 13, 15], [5, 12, 13], [9, 10, 17], [3, 25, 26], [7, 15, 20], [10, 13, 13], [8, 15, 17], [13, 13, 24], [6, 25, 29], [11, 13, 20], [5, 29, 30], [13, 14, 15]],</code>");'
  - text: '<code>heronianTriangle()</code> debe devolver <code>[[3, 4, 5], [5, 5, 6], [5, 5, 8], [4, 13, 15], [5, 12, 13], [9, 10, 17], [3, 25, 26], [7, 15, 20], [10, 13, 13], [8, 15, 17], [13, 13, 24], [6, 25, 29], [11, 13, 20], [5, 29, 30], [13, 14, 15], [10, 17, 21], [7, 24, 25], [8, 29, 35], [12, 17, 25], [4, 51, 53]],</code>'
    testString: 'assert.deepEqual(heronianTriangle(testCases[2]), res[2], "<code>heronianTriangle()</code> should return <code>[[3, 4, 5], [5, 5, 6], [5, 5, 8], [4, 13, 15], [5, 12, 13], [9, 10, 17], [3, 25, 26], [7, 15, 20], [10, 13, 13], [8, 15, 17], [13, 13, 24], [6, 25, 29], [11, 13, 20], [5, 29, 30], [13, 14, 15], [10, 17, 21], [7, 24, 25], [8, 29, 35], [12, 17, 25], [4, 51, 53]],</code>");'
  - text: '<code>heronianTriangle()</code> debe devolver <code>[[3, 4, 5], [5, 5, 6], [5, 5, 8], [4, 13, 15], [5, 12, 13], [9, 10, 17], [3, 25, 26], [7, 15, 20], [10, 13, 13], [8, 15, 17], [13, 13, 24], [6, 25, 29], [11, 13, 20], [5, 29, 30], [13, 14, 15], [10, 17, 21], [7, 24, 25], [8, 29, 35], [12, 17, 25], [4, 51, 53], [19, 20, 37],[16, 17, 17], [17, 17, 30], [16, 25, 39], [13, 20, 21]]</code>'
    testString: 'assert.deepEqual(heronianTriangle(testCases[3]), res[3], "<code>heronianTriangle()</code> should return <code>[[3, 4, 5], [5, 5, 6], [5, 5, 8], [4, 13, 15], [5, 12, 13], [9, 10, 17], [3, 25, 26], [7, 15, 20], [10, 13, 13], [8, 15, 17], [13, 13, 24], [6, 25, 29], [11, 13, 20], [5, 29, 30], [13, 14, 15], [10, 17, 21], [7, 24, 25], [8, 29, 35], [12, 17, 25], [4, 51, 53], [19, 20, 37],[16, 17, 17], [17, 17, 30], [16, 25, 39], [13, 20, 21]]</code>");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
// noprotect
function heronianTriangle (n) {
  // Good luck!

  return [];
}

```

</div>


### After Test
<div id='js-teardown'>

```js
console.info('after the test');
```

</div>

</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>

---
title: Heronian triangles
id: 595b98f8b5a2245e243aa831
challengeType: 5
videoUrl: ''
localeTitle: Triângulos Heronianos
---

## Description
<section id="description"><p> <a href="https://en.wikipedia.org/wiki/Heron&#x27;s formula" title="wp: fórmula de Heron">A fórmula do herói</a> para a área de um triângulo, dada a extensão de seus três lados <big>a,</big> <big>b</big> e <big>c,</big> é dada por: </p><p> <big>$$ A = \ sqrt {s (sa) (sb) (sc)}, $$</big> </p><p> onde <big>s</big> é metade do perímetro do triângulo; isso é, </p><p> <big>$$ s = \ frac {a + b + c} {2}. $$</big> </p><p> <a href="http://www.had2know.com/academics/heronian-triangles-generator-calculator.html" title="link: http://www.had2know.com/academics/heronian-triangles-generator-calculator.html">Os triângulos de Heronian</a> são triângulos cujos lados e área são todos inteiros. </p><p> Um exemplo é o triângulo com os lados 3, 4 e 5 cuja área é 6 (e cujo perímetro é 12). </p><p> Note que qualquer triângulo cujos lados são todos um múltiplo inteiro de 3, 4, 5; como 6, 8, 10, também será um triângulo de Heroniano. </p><p> Definir um triângulo Heroniano Primitivo como um triângulo Heroniano onde o maior divisor comum </p><p> dos três lados é 1 (unidade). </p><p> Isso excluirá, por exemplo, o triângulo 6, 8, 10. </p> Tarefa: <p> Implemente uma função baseada na fórmula de Herói, que retorna os primeiros <code><sub>n th</sub></code> triângulos ordenados em uma matriz de matrizes. </p></section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>heronianTriangle</code> é uma função.
    testString: 'assert(typeof heronianTriangle === "function", "<code>heronianTriangle</code> is a function.");'
  - text: '<code>heronianTriangle()</code> deve retornar <code>[[3, 4, 5], [5, 5, 6], [5, 5, 8], [4, 13, 15], [5, 12, 13], [9, 10, 17], [3, 25, 26], [7, 15, 20], [10, 13, 13], [8, 15, 17]]</code>'
    testString: 'assert.deepEqual(heronianTriangle(testCases[0]), res[0], "<code>heronianTriangle()</code> should return <code>[[3, 4, 5], [5, 5, 6], [5, 5, 8], [4, 13, 15], [5, 12, 13], [9, 10, 17], [3, 25, 26], [7, 15, 20], [10, 13, 13], [8, 15, 17]]</code>");'
  - text: '<code>heronianTriangle()</code> deve retornar <code>[[3, 4, 5], [5, 5, 6], [5, 5, 8], [4, 13, 15], [5, 12, 13], [9, 10, 17], [3, 25, 26], [7, 15, 20], [10, 13, 13], [8, 15, 17], [13, 13, 24], [6, 25, 29], [11, 13, 20], [5, 29, 30], [13, 14, 15]],</code>'
    testString: 'assert.deepEqual(heronianTriangle(testCases[1]), res[1], "<code>heronianTriangle()</code> should return <code>[[3, 4, 5], [5, 5, 6], [5, 5, 8], [4, 13, 15], [5, 12, 13], [9, 10, 17], [3, 25, 26], [7, 15, 20], [10, 13, 13], [8, 15, 17], [13, 13, 24], [6, 25, 29], [11, 13, 20], [5, 29, 30], [13, 14, 15]],</code>");'
  - text: '<code>heronianTriangle()</code> deve retornar <code>[[3, 4, 5], [5, 5, 6], [5, 5, 8], [4, 13, 15], [5, 12, 13], [9, 10, 17], [3, 25, 26], [7, 15, 20], [10, 13, 13], [8, 15, 17], [13, 13, 24], [6, 25, 29], [11, 13, 20], [5, 29, 30], [13, 14, 15], [10, 17, 21], [7, 24, 25], [8, 29, 35], [12, 17, 25], [4, 51, 53]],</code>'
    testString: 'assert.deepEqual(heronianTriangle(testCases[2]), res[2], "<code>heronianTriangle()</code> should return <code>[[3, 4, 5], [5, 5, 6], [5, 5, 8], [4, 13, 15], [5, 12, 13], [9, 10, 17], [3, 25, 26], [7, 15, 20], [10, 13, 13], [8, 15, 17], [13, 13, 24], [6, 25, 29], [11, 13, 20], [5, 29, 30], [13, 14, 15], [10, 17, 21], [7, 24, 25], [8, 29, 35], [12, 17, 25], [4, 51, 53]],</code>");'
  - text: '<code>heronianTriangle()</code> deve retornar <code>[[3, 4, 5], [5, 5, 6], [5, 5, 8], [4, 13, 15], [5, 12, 13], [9, 10, 17], [3, 25, 26], [7, 15, 20], [10, 13, 13], [8, 15, 17], [13, 13, 24], [6, 25, 29], [11, 13, 20], [5, 29, 30], [13, 14, 15], [10, 17, 21], [7, 24, 25], [8, 29, 35], [12, 17, 25], [4, 51, 53], [19, 20, 37],[16, 17, 17], [17, 17, 30], [16, 25, 39], [13, 20, 21]]</code>'
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

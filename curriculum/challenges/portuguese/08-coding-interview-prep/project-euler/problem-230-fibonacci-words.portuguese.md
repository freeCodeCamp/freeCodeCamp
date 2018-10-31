---
id: 5900f4531000cf542c50ff65
challengeType: 5
title: 'Problem 230: Fibonacci Words'
videoUrl: ''
localeTitle: 'Problema 230: Palavras de Fibonacci'
---

## Description
<section id="description"> Para quaisquer duas cadeias de dígitos, A e B, definimos FA, B como sendo a sequência (A, B, AB, BAB, ABBAB, ...) em que cada termo é a concatenação dos dois anteriores. <p> Além disso, definimos DA, B (n) para ser o enésimo dígito no primeiro termo de FA, B que contém pelo menos n dígitos. </p><p> Exemplo: </p><p> A = 1415926535, B = 8979323846. Desejamos encontrar DA, B (35), digamos. </p><p> Os primeiros termos de FA, B são: 1415926535 8979323846 14159265358979323846 897932384614159265358979323846 14159265358979323846897932384614159265358979323846 </p><p> Então DA, B (35) é o 35º dígito no quinto termo, que é 9. </p><p> Agora usamos para A os primeiros 100 dígitos de π por trás do ponto decimal: 14159265358979323846264338327950288419716939937510 58209749445923078164062862089986280348253421170679 </p><p> e para B os próximos cem dígitos: </p><p> 82148086513282306647093844609550582231725359408128 48111745028410270193852110555964462294895493038196. </p><p> Encontre ∑n = 0,1, ..., 17 10n × DA, B ((127 + 19n) × 7n). </p></section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>euler230()</code> deve retornar 850481152593119200.
    testString: 'assert.strictEqual(euler230(), 850481152593119200, "<code>euler230()</code> should return 850481152593119200.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function euler230() {
  // Good luck!
  return true;
}

euler230();

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>

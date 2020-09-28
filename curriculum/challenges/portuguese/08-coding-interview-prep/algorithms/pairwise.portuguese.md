---
id: a3f503de51cfab748ff001aa
title: Pairwise
challengeType: 5
videoUrl: ''
localeTitle: Emparelhados
---

## Description
<section id="description"> Dado um array <code>arr</code> , encontre pares de elementos cuja soma seja igual ao segundo argumento <code>arg</code> e retorne a soma de seus índices. Você pode usar vários pares que tenham os mesmos elementos numéricos, mas índices diferentes. Cada par deve usar os menores índices disponíveis possíveis. Uma vez que um elemento tenha sido usado, ele não pode ser reutilizado para emparelhar com outro elemento. Por exemplo, <code>pairwise([1, 1, 2], 3)</code> cria um par <code>[2, 1]</code> usando o 1 no índice 0 em vez do 1 no índice 1, porque 0 + 2 &lt;1 + 2. Por exemplo, <code>pairwise([7, 9, 11, 13, 15], 20)</code> retorna <code>6</code> . Os pares que somam 20 são <code>[7, 13]</code> e <code>[9, 11]</code> . Podemos então escrever o array com seus índices e valores. <table class="table"><tbody><tr><th> <strong>Índice</strong> </th><th> 0 </th><th> 1 </th><th> 2 </th><th> 3 </th><th> 4 </th></tr><tr><td> Valor </td><td> 7 </td><td> 9 </td><td> 11 </td><td> 13 </td><td> 15 </td></tr></tbody></table> Abaixo, vamos pegar seus índices correspondentes e adicioná-los. 7 + 13 = 20 → Índices 0 + 3 = 3 <br> 9 + 11 = 20 → Índices 1 + 2 = 3 <br> 3 + 3 = 6 → Return <code>6</code> Lembre-se de usar <a href="https://forum.freecodecamp.org/t/how-to-get-help-when-you-are-stuck-coding/19514" target="_blank">Read-Search-Ask</a> se você ficar preso. Tente fazer pair programming. Escreva seu próprio código. </section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: '<code>pairwise([1, 4, 2, 3, 0, 5], 7)</code> deve retornar 11.'
    testString: 'assert.deepEqual(pairwise([1, 4, 2, 3, 0, 5], 7), 11, "<code>pairwise([1, 4, 2, 3, 0, 5], 7)</code> should return 11.");'
  - text: '<code>pairwise([1, 3, 2, 4], 4)</code> deve retornar 1.'
    testString: 'assert.deepEqual(pairwise([1, 3, 2, 4], 4), 1, "<code>pairwise([1, 3, 2, 4], 4)</code> should return 1.");'
  - text: '<code>pairwise([1, 1, 1], 2)</code> deve retornar 1.'
    testString: 'assert.deepEqual(pairwise([1, 1, 1], 2), 1, "<code>pairwise([1, 1, 1], 2)</code> should return 1.");'
  - text: '<code>pairwise([0, 0, 0, 0, 1, 1], 1)</code> deve retornar 10.'
    testString: 'assert.deepEqual(pairwise([0, 0, 0, 0, 1, 1], 1), 10, "<code>pairwise([0, 0, 0, 0, 1, 1], 1)</code> should return 10.");'
  - text: '<code>pairwise([], 100)</code> deve retornar 0.'
    testString: 'assert.deepEqual(pairwise([], 100), 0, "<code>pairwise([], 100)</code> should return 0.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function pairwise(arr, arg) {
  return arg;
}

pairwise([1,4,2,3,0,5], 7);

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>

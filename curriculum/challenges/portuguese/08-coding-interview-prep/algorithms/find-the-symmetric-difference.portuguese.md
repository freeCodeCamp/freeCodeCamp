---
id: a3f503de51cf954ede28891d
title: Find the Symmetric Difference
challengeType: 5
videoUrl: ''
localeTitle: Encontre a diferença simétrica
---

## Descrição
<section id="description"> Crie uma função que receba dois ou mais arrays e retorne um array da <dfn>diferença simétrica</dfn> ( <code>△</code> ou <code>⊕</code> ) dos arrays fornecidos. Dados dois conjuntos (por exemplo, conjunto <code>A = {1, 2, 3}</code> e conjunto <code>B = {2, 3, 4}</code> ), o termo matemático &quot;diferença simétrica&quot; ​​de dois conjuntos é o conjunto de elementos que estão em qualquer um dos dois conjuntos, mas não em ambos ( <code>A △ B = C = {1, 4}</code> ). Para cada diferença simétrica adicional que você tomar (digamos em um conjunto <code>D = {2, 3}</code> ), você deve obter o conjunto com elementos que estão em um dos dois conjuntos, mas não em ambos ( <code>C △ D = {1, 4} △ {2, 3} = {1, 2, 3, 4}</code> ). A matriz resultante deve conter apenas valores exclusivos ( <em>sem duplicatas</em> ). Lembre-se de usar <a href="https://forum.freecodecamp.org/t/how-to-get-help-when-you-are-stuck-coding/19514" target="_blank">Read-Search-Ask</a> se você ficar preso. Tente emparelhar o programa. Escreva seu próprio código. </section>

## Instruções
<section id="instructions">
</section>

## Testes
<section id='tests'>

```yml
tests:
  - text: '<code>sym([1, 2, 3], [5, 2, 1, 4])</code> deve retornar <code>[3, 4, 5]</code> .'
    testString: 'assert.sameMembers(sym([1, 2, 3], [5, 2, 1, 4]), [3, 4, 5], "<code>sym([1, 2, 3], [5, 2, 1, 4])</code> should return <code>[3, 4, 5]</code>.");'
  - text: '<code>sym([1, 2, 3], [5, 2, 1, 4])</code> deve conter apenas três elementos.'
    testString: 'assert.equal(sym([1, 2, 3], [5, 2, 1, 4]).length, 3, "<code>sym([1, 2, 3], [5, 2, 1, 4])</code> should contain only three elements.");'
  - text: '<code>sym([1, 2, 3, 3], [5, 2, 1, 4])</code> deve retornar <code>[3, 4, 5]</code> .'
    testString: 'assert.sameMembers(sym([1, 2, 3, 3], [5, 2, 1, 4]), [3, 4, 5], "<code>sym([1, 2, 3, 3], [5, 2, 1, 4])</code> should return <code>[3, 4, 5]</code>.");'
  - text: '<code>sym([1, 2, 3, 3], [5, 2, 1, 4])</code> deve conter apenas três elementos.'
    testString: 'assert.equal(sym([1, 2, 3, 3], [5, 2, 1, 4]).length, 3, "<code>sym([1, 2, 3, 3], [5, 2, 1, 4])</code> should contain only three elements.");'
  - text: '<code>sym([1, 2, 3], [5, 2, 1, 4, 5])</code> deve retornar <code>[3, 4, 5]</code> .'
    testString: 'assert.sameMembers(sym([1, 2, 3], [5, 2, 1, 4, 5]), [3, 4, 5], "<code>sym([1, 2, 3], [5, 2, 1, 4, 5])</code> should return <code>[3, 4, 5]</code>.");'
  - text: '<code>sym([1, 2, 3], [5, 2, 1, 4, 5])</code> deve conter apenas três elementos.'
    testString: 'assert.equal(sym([1, 2, 3], [5, 2, 1, 4, 5]).length, 3, "<code>sym([1, 2, 3], [5, 2, 1, 4, 5])</code> should contain only three elements.");'
  - text: '<code>sym([1, 2, 5], [2, 3, 5], [3, 4, 5])</code> deve retornar <code>[1, 4, 5]</code>'
    testString: 'assert.sameMembers(sym([1, 2, 5], [2, 3, 5], [3, 4, 5]), [1, 4, 5], "<code>sym([1, 2, 5], [2, 3, 5], [3, 4, 5])</code> should return <code>[1, 4, 5]</code>");'
  - text: '<code>sym([1, 2, 5], [2, 3, 5], [3, 4, 5])</code> deve conter apenas três elementos.'
    testString: 'assert.equal(sym([1, 2, 5], [2, 3, 5], [3, 4, 5]).length, 3, "<code>sym([1, 2, 5], [2, 3, 5], [3, 4, 5])</code> should contain only three elements.");'
  - text: '<code>sym([1, 1, 2, 5], [2, 2, 3, 5], [3, 4, 5, 5])</code> deve retornar <code>[1, 4, 5]</code> .'
    testString: 'assert.sameMembers(sym([1, 1, 2, 5], [2, 2, 3, 5], [3, 4, 5, 5]), [1, 4, 5], "<code>sym([1, 1, 2, 5], [2, 2, 3, 5], [3, 4, 5, 5])</code> should return <code>[1, 4, 5]</code>.");'
  - text: '<code>sym([1, 1, 2, 5], [2, 2, 3, 5], [3, 4, 5, 5])</code> deve conter apenas três elementos.'
    testString: 'assert.equal(sym([1, 1, 2, 5], [2, 2, 3, 5], [3, 4, 5, 5]).length, 3, "<code>sym([1, 1, 2, 5], [2, 2, 3, 5], [3, 4, 5, 5])</code> should contain only three elements.");'
  - text: '<code>sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3])</code> deve retornar <code>[2, 3, 4, 6, 7]</code> .'
    testString: 'assert.sameMembers(sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3]), [2, 3, 4, 6, 7], "<code>sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3])</code> should return <code>[2, 3, 4, 6, 7]</code>.");'
  - text: '<code>sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3])</code> deve conter apenas cinco elementos.'
    testString: 'assert.equal(sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3]).length, 5, "<code>sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3])</code> should contain only five elements.");'
  - text: '<code>sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3], [5, 3, 9, 8], [1])</code> deve retornar <code>[1, 2, 4, 5, 6, 7, 8, 9]</code> .'
    testString: 'assert.sameMembers(sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3], [5, 3, 9, 8], [1]), [1, 2, 4, 5, 6, 7, 8, 9], "<code>sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3], [5, 3, 9, 8], [1])</code> should return <code>[1, 2, 4, 5, 6, 7, 8, 9]</code>.");'
  - text: '<code>sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3], [5, 3, 9, 8], [1])</code> deve conter apenas oito elementos.'
    testString: 'assert.equal(sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3], [5, 3, 9, 8], [1]).length, 8, "<code>sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3], [5, 3, 9, 8], [1])</code> should contain only eight elements.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function sym(args) {
  return args;
}

sym([1, 2, 3], [5, 2, 1, 4]);

```

</div>



</section>

## Solução
<section id='solution'>

```js
// Solução obrigatória
```
</section>
